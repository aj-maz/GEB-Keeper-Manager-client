/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import KeeperSystemStep from "./KeeperSystemStep";
import WalletSelectionStep from "./WalletSelectionStep";
import WalletBalances from "./WalletBalances";
import KeeperOptions from "./KeeperOptions";
import { ethers } from "ethers";
import ERC20 from "../../../data/contracts/ERC20";
import { useMutation } from "@apollo/client";
import { START_KEEPER } from "../../../data/queries";
import { useRouter } from "next/router";

const CreateKeeperSteps = ({ systems }) => {
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);

  const [startKeeper] = useMutation(START_KEEPER);

  const [keeperSettings, setKeeperSetting] = useState({
    system: {
      name: "",
      network: "",
      collateral: "",
    },
    wallet: {
      variant: 0,
      generate: {
        password: "",
      },
      fromFile: {
        file: null,
        password: "",
      },
      fromPrivateKey: {
        privateKey: "",
      },
    },
    walletSetup: {
      walletObject: null,
      nativeBalance: null,
      systemCoinBalance: null,
      systemCoinName: "",
      systemCoinSymbol: "",
      systemCoinAddress: "",
      loading: false,
    },
    options: [],
  });

  console.log(keeperSettings);

  const pK = keeperSettings.wallet.fromPrivateKey.privateKey;

  const getNormalizedKey = (pK) => {
    let normalized = pK;
    if (!ethers.isBytesLike(pK)) {
      normalized = `0x${pK}`;
    }
    return normalized;
  };

  const isPrivateKey = (pK) => {
    const normalizedPk = getNormalizedKey(pK);
    return ethers.isBytesLike(normalizedPk)
      ? ethers.dataLength(normalizedPk) === 32
      : false;
  };

  const getAddressFromPrivateKey = (privateKey) => {
    const isPk = isPrivateKey(privateKey);
    if (isPk) return new ethers.Wallet(privateKey).address;
    return null;
  };

  const canContinueWallet = () => {
    const walletSettings = keeperSettings.wallet;
    if (walletSettings.variant === 0) return true;
    if (
      walletSettings.variant === 2 &&
      getAddressFromPrivateKey(walletSettings.fromPrivateKey.privateKey)
    )
      return true;
    return false;
  };

  const changeKeeperSetting = (highKey) => (lowKey) => (value) => {
    const nKS = { ...keeperSettings };
    nKS[highKey][lowKey] = value;
    setKeeperSetting(nKS);
  };

  const handleKeeperOption = (value) => {
    const nKS = { ...keeperSettings };
    const currentOptions = new Set([...nKS.options]);
    if (currentOptions.has(value)) {
      currentOptions.delete(value);
    } else {
      currentOptions.add(value);
    }
    nKS.options = [...currentOptions];
    setKeeperSetting(nKS);
  };

  const generateWalletObject = () => {
    const walletSettings = keeperSettings.wallet;
    if (walletSettings.variant === 0) return ethers.Wallet.createRandom();
    if (walletSettings.variant === 2)
      return new ethers.Wallet(walletSettings.fromPrivateKey.privateKey);
  };

  const networksRPCAddresses = {
    mainnet:
      "https://eth-mainnet.g.alchemy.com/v2/PKDcpW-zo09u7KieHzUl5H0qujGgr5nv",
    goerli:
      "https://eth-goerli.g.alchemy.com/v2/l_THcPj6shiZ-E1LyKHnHeXx75E1iXrT",
  };

  const getWalletBalances = async (walletObject) => {
    changeKeeperSetting("walletSetup")("loading")(true);

    const walletSetup = keeperSettings.walletSetup;
    const system = keeperSettings.system;
    const rpcAddress = networksRPCAddresses[system.network.toLowerCase()];
    const provider = new ethers.JsonRpcProvider(rpcAddress);
    const keeperAddress = walletSetup.walletObject.address;
    const nativeBalance = await provider.getBalance(keeperAddress);

    const selectedSystemObj = systems.find((sys) => sys.name === system.name);
    const selectedNetworkObj = selectedSystemObj?.networks.find(
      (network) => network.name === system.network
    );

    const systemCoinAddress = selectedNetworkObj?.systemCoin;

    console.log(
      selectedNetworkObj,
      selectedSystemObj,
      system.network,
      system.name,
      systemCoinAddress
    );

    const systemCoinContract = new ethers.Contract(
      systemCoinAddress,
      ERC20,
      provider
    );
    const systemCoinName = await systemCoinContract.symbol();
    const systemCoinSymbol = await systemCoinContract.name();
    const systemCoinBalance = await systemCoinContract.balanceOf(keeperAddress);

    changeKeeperSetting("walletSetup")("nativeBalance")(nativeBalance);
    changeKeeperSetting("walletSetup")("systemCoinName")(systemCoinName);
    changeKeeperSetting("walletSetup")("systemCoinSymbol")(systemCoinSymbol);
    changeKeeperSetting("walletSetup")("systemCoinBalance")(systemCoinBalance);
    changeKeeperSetting("walletSetup")("systemCoinAddress")(systemCoinAddress);
    changeKeeperSetting("walletSetup")("loading")(false);
  };

  useEffect(() => {
    if (activeStep === 2) {
      const walletObject = generateWalletObject();
      changeKeeperSetting("walletSetup")("walletObject")(walletObject);
      changeKeeperSetting("walletSetup")("walletObject")(walletObject);
      getWalletBalances();
    }
  }, [activeStep]);

  const steps = [
    {
      label: "Choose System",
      caption: "Choose the system, network and collateral of the keeper",
      content: (
        <KeeperSystemStep
          systems={systems}
          systemSettings={keeperSettings.system}
          setSystemSettings={changeKeeperSetting("system")}
        />
      ),
    },
    {
      label: "Keeper Wallet",
      caption: "Choose the wallet that runs the keeper",
      content: (
        <WalletSelectionStep
          setWalletSetup={changeKeeperSetting("wallet")}
          walletSetup={keeperSettings.wallet}
        />
      ),
    },
    {
      label: "Wallet Setup",
      caption: "Setup wallet native and system coins",
      content: (
        <WalletBalances
          walletBalances={keeperSettings.walletSetup}
          system={keeperSettings.system}
          refreshWalletBalances={getWalletBalances}
        />
      ),
    },
    {
      label: "Keeper Options",
      caption: "Setup the keeper options",
      content: (
        <KeeperOptions
          options={keeperSettings.options}
          handleKeeperOptions={handleKeeperOption}
        />
      ),
    },
  ];

  const canContinue = () => {
    if (activeStep === 0) return true;
    if (activeStep === 1) return canContinueWallet();
    if (activeStep === 2) return true;
    if (activeStep === 3) return true;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFinish = () => {
    console.log(keeperSettings.system.name);
    startKeeper({
      variables: {
        system: keeperSettings.system.name,
        network: keeperSettings.system.network,
        collateral: keeperSettings.system.collateral,
        privateKey: keeperSettings.walletSetup.walletObject.privateKey,
        options: keeperSettings.options,
      },
    })
      .then((r) => {
        router.push(`/keepers/details/${r.data.startKeeper._id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                <Typography variant="caption">{step.caption}</Typography>
              }
            >
              {step.label}
            </StepLabel>
            <StepContent
              css={css`
                width: 100%;
              `}
            >
              <div>{step.content}</div>
              <Box sx={{ mb: 2 }}>
                <div
                  css={css`
                    display: flex;
                    justify-content: flex-end;
                  `}
                >
                  <Button
                    variant="contained"
                    onClick={
                      index === steps.length - 1 ? handleFinish : handleNext
                    }
                    sx={{ mt: 1, mr: 1 }}
                    size="small"
                    disabled={!canContinue()}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    size="small"
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default CreateKeeperSteps;
