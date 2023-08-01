/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {useState}  from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper} from "@mui/material"
import KeeperSystemStep from "./KeeperSystemStep";
import WalletSelectionStep from "./WalletSelectionStep";
import {ethers} from 'ethers'


 const CreateKeeperSteps = ({systems}) => {


     const [keeperSettings, setKeeperSetting] = useState({
         system: {
             name: '',
             network: '',
             collateral: ''
         },
         wallet: {
             variant: 0,
             generate: {
                 password: ''
             },
             fromFile: {
                 file: null,
                 password: ''
             },
             fromPrivateKey: {
                 privateKey: ''
             }
         }
     })

     const pK = keeperSettings.wallet.fromPrivateKey.privateKey

     const getNormalizedKey = (pK) => {
         let normalized = pK
         if(!ethers.isBytesLike(pK)) {
             normalized = `0x${pK}`
         }
         return normalized;
     }

     const isPrivateKey = (pK) => {
            const normalizedPk = getNormalizedKey(pK);
         return ethers.isBytesLike(normalizedPk) ? ethers.dataLength(normalizedPk) === 32 : false
     }


     const getAddressFromPrivateKey = (privateKey) => {
         const isPk = isPrivateKey(privateKey)
         if(isPk) return (new ethers.Wallet(privateKey)).address
         return null
     }


     const canContinueWallet = () => {
         const walletSettings = keeperSettings.wallet
         if(walletSettings.variant === 0) return true;
         if(walletSettings.variant === 2 &&getAddressFromPrivateKey(walletSettings.fromPrivateKey.privateKey)) return true;
         return false
     }


     const changeKeeperSetting = (highKey) => (lowKey) => value => {
         const nKS = {...keeperSettings}
         nKS[highKey][lowKey] = value
         setKeeperSetting(nKS)
     }

     const steps = [
         {
             label: 'Choose System',
             caption: 'Choose the system, network and collateral of the keeper',
             content: <KeeperSystemStep systems={systems} systemSettings={keeperSettings.system} setSystemSettings={changeKeeperSetting('system')} />,
         },
         {
             label: 'Keeper Wallet',
             caption: 'Choose the wallet that runs the keeper',
             content: <WalletSelectionStep setWalletSetup={changeKeeperSetting('wallet')} walletSetup={keeperSettings.wallet} />
         },
         {
             label: 'Wallet Setup',
             caption: 'Setup wallet native and system coins',
         },
         {
             label: 'Keeper Options',
             caption: 'Setup the keeper options'
         },
     ];

    const [activeStep, setActiveStep] = useState(0);

     const canContinue = () => {
         if(activeStep === 0) return true;
         if(activeStep === 1) return canContinueWallet()
     }


     const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box >
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
                        <StepContent css={css`width: 100%`}>
                            <div>{step.content}</div>
                            <Box sx={{ mb: 2 }}>
                                <div css={css`display: flex;justify-content: flex-end`}>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                        size="small"
                                        disabled={!canContinue()}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
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
}

export default CreateKeeperSteps
