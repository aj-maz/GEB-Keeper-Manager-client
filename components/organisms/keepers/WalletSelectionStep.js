/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonBase, Typography, Button, TextField } from "@mui/material";
import {useState, useEffect} from "react";


const SelectorButton = ({children, disabled, selected, onClick = () => {}}) => {
    return <ButtonBase disabled={disabled}  onClick={disabled ? () => {console.log('hi')}: onClick} css={theme => css`padding: 0.5em; border: 2px solid ${selected ?theme.palette.secondary.light : theme.palette.divider}; border-radius: 8px`}>
        <Typography css={theme => css`color: ${selected ? theme.palette.secondary.light : disabled ? theme.palette.text.disabled: theme.palette.primary.text}`} variant="body1">{children}</Typography>
    </ButtonBase>
}


const WalletSelectionStep = ({walletSetup, setWalletSetup}) => {

    const selectedType = walletSetup.variant;
    const setSelectedType = (v) => {
        setWalletSetup('variant')(v)
    }
    const resetWalletSetup = () => {
        setWalletSetup('generate')({
            password: ''
        })
        setWalletSetup('fromFile')({
            file: null,
            password: ''
        })
        setWalletSetup('fromPrivateKey')({
            privateKey: ''
        })
    }

    useEffect(() => {
        resetWalletSetup()
    }, [selectedType])


    const setGenerateSetup = (key) => (value) => {
        const nws = {...walletSetup.generate}
        nws[key] = value
        setWalletSetup('generate')(nws)
    }

    const setFromFileSetup = (key) => (value) => {
        const nws = {...walletSetup.fromFile}
        nws[key] = value
        setWalletSetup('fromFile')(nws)
    }

    const setFromFilePKSetup = (key) => (value) => {
        const nws = {...walletSetup.fromPrivateKey}
        nws[key] = value
        console.log(nws, key, value)
        setWalletSetup('fromPrivateKey')(nws)
    }


    const renderWalletSelector = () => {
        switch (selectedType){
            case 0:
                return <div css={css`width: 500px`}>
                    {/*<TextField value={walletSetup.generate.password}
                                onChange={e => setGenerateSetup('Password')(e.target.value)} fullWidth color="secondary"
                                label="Wallet password" type="password" name="wallet-password" size="small"/>*/}
                </div>
            case 1:
                return <div css={css`width: 500px`}>
                    <div css={css`margin-bottom: 0.75em`}>
                            <Button
                                component="label"
                                type=""
                                variant="contained"
                                color="secondary">
                                Wallet File
                                <input css={css`display: none`} onChange={e => setFromFileSetup('file')(e.target.files[0])} type="file" />
                            </Button>
                    </div>
                    <TextField value={walletSetup.fromFile.password} onChange={e => setFromFileSetup('password')(e.target.value)} fullWidth color="secondary" label="Wallet password" type="password" name="wallet-password" size="small" />
                </div>
            case 2:
                return <div css={css`width: 500px`}>
                    <TextField value={walletSetup.fromPrivateKey.privateKey} onChange={e => setFromFilePKSetup('privateKey')(e.target.value)} fullWidth color="secondary" label="Wallet Private Key" type="text" name="wallet-private-key" size="small"/>
                </div>
        }

    }

    return <div >
        <div css={css`display: flex`}>
            <div  css={css`margin-right: 0.5em`}>
                <SelectorButton onClick={() => setSelectedType(0)} selected={selectedType === 0}>Generate a wallet</SelectorButton>
            </div>
            {/*<div css={css`margin-right: 0.5em`}>
                <SelectorButton onClick={() => setSelectedType(1)} disabled selected={selectedType === 1}>Import wallet
                    file</SelectorButton>
            </div>*/}
            <div  css={css`margin-right: 0.5em`}>
                <SelectorButton onClick={() => setSelectedType(2)} selected={selectedType === 2}>Import with private key</SelectorButton>
            </div>
        </div>
        <div css={css`margin-top: 1em`}>
            {renderWalletSelector()}
        </div>
    </div>;
};

export default WalletSelectionStep;
