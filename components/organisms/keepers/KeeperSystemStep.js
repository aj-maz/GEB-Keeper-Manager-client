/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Select, Grid, MenuItem } from "@mui/material";
import {useEffect} from "react";



const KeeperSystemStep = ({systemSettings, setSystemSettings, systems}) => {

    console.log(systems)

    const selectedSystem = systemSettings.name
    const setSelectedSystem = setSystemSettings('name')
    const selectedNetwork = systemSettings.network
    const setSelectedNetwork = setSystemSettings('network')
    const selectedCollateral = systemSettings.collateral
    const setSelectedCollateral = setSystemSettings('collateral')

    useEffect(() => {
        setSelectedSystem(systems[0].name)
        setSelectedNetwork(systems[0].networks[0].name)
        setSelectedCollateral(systems[0].networks[0].collaterals[0].name)
    }, [])




    const systemOptions = systems.map(system => system.name)
    const selectedSystemObj = systems.find((system) => system.name === selectedSystem)
    const networkOptions = selectedSystemObj?.networks.map(network => network.name)
    const selectedNetworkObj = selectedSystemObj?.networks.find((network) => network.name === selectedNetwork);
    const collateralOptions = selectedNetworkObj?.collaterals.map(collateral => collateral.name)

    useEffect(() => {
        setSelectedNetwork(selectedSystemObj?.networks[0].name)
    }, [selectedSystemObj])


    useEffect(() => {
        setSelectedCollateral(selectedNetworkObj?.collaterals[0].name)
    }, [selectedNetworkObj])


    return <div>
        <Grid container spacing={2}>
            <Grid item md={4}>
                <Select value={selectedSystem} onChange={(e) => setSelectedSystem(e.target.value)} fullWidth  size="small">
                    {systemOptions.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item md={4}>
                <Select value={selectedNetwork} onChange={(e) => setSelectedNetwork(e.target.value)} fullWidth  size="small">
                    {networkOptions?.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item md={4}>
                <Select value={selectedCollateral} onChange={(e) => setSelectedCollateral(e.target.value)} fullWidth  size="small">
                    {collateralOptions?.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        </Grid>
    </div>;
};

export default KeeperSystemStep;
