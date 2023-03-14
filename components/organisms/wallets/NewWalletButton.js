import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { MenuItem, Button, Menu } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Shield, Add, FileUpload } from "@mui/icons-material";

import { AddWalletDialoge, CreateNewWallet } from "../../molecules";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const NewWalletButton = ({ generateNewWallet, refetch }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [addWalletDialog, setAddWalletDialog] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setPassword("");
  }, [addWalletDialog]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onOpenAddDialog = (variant) => {
    setAddWalletDialog(variant);
  };

  const onCloseAddDialog = () => {
    setAddWalletDialog("");
  };

  const closeWrapper = (cb) => {
    cb();
    handleClose();
  };

  const closeMenuOpenDialog = (variant) =>
    closeWrapper(() => onOpenAddDialog(variant));

  const dialogsVariants = {
    create: {
      content: (
        <CreateNewWallet
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      ),
      title: "Create a new wallet",
      onCreate: async () => {
        await generateNewWallet({ variables: { password } });
        await refetch();
        onCloseAddDialog();
      },
      actionLabel: "Create Wallet",
    },
  };

  const dialog =
    addWalletDialog && dialogsVariants[addWalletDialog]
      ? dialogsVariants[addWalletDialog]
      : dialogsVariants.create;

  return (
    <div>
      <AddWalletDialoge
        open={!!addWalletDialog}
        title={dialog.title}
        actionLabel={dialog.actionLabel}
        onClose={onCloseAddDialog}
        onCreate={dialog.onCreate}
      >
        {dialog.content}
      </AddWalletDialoge>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Add Wallets
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => closeMenuOpenDialog("create")} disableRipple>
          <Add />
          Create new wallet
        </MenuItem>
        <MenuItem onClick={() => closeMenuOpenDialog("file")} disableRipple>
          <FileUpload />
          Import with key file
        </MenuItem>
        <MenuItem
          onClick={() => closeMenuOpenDialog("privateKey")}
          disableRipple
        >
          <Shield />
          Import with private key
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default NewWalletButton;
