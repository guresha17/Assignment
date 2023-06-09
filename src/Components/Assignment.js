import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';
import Tooltip from '@mui/material/Tooltip';
import './style.css';


const Assignment = () => {
    return (
        <>
            <Grid container style={{ height: '93vh' }}>
                <Grid container className='header'>
                    <Grid container className='overlay'>
                        <Grid container className='mb-10'>
                            <Typography className='fs-18'>
                                <strong>
                                    Best deals are on App!
                                </strong>
                            </Typography>
                        </Grid>
                        <Grid container className='mb-10'>
                            <Typography className='fs-15 typo'>
                                17% off on first hotel booking using CTAPP
                            </Typography>
                        </Grid>
                        <Grid container>
                            <Button className='header-button'><span className='capitalize-first-letter'>switch&nbsp; </span> to app</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className='p-20'>
                    <Grid container className='mb-21'>
                        <Grid item xs={6} className='sub-part'>
                            <Typography className='cleartip'>
                                <CheckBoxIcon className='mr-5' />
                                <strong>
                                    cleartrip
                                </strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className='sub-part2'>
                            <Button className='login-button'>
                                <PersonOutlineIcon className='mr-5' />
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container className='mb-17 sub-menu-main'>
                        <Grid item xs={4} className='sub-menu'>
                            <Typography className='as'>
                                <FlightTakeoffOutlinedIcon className='mr-5' />
                                Flights
                            </Typography>
                        </Grid>
                        <Grid item xs={4} className='sub-menu-selected'>
                            <Typography className='as as2'>
                                <LocationCityIcon className='mr-5' />
                                Hotels
                            </Typography>
                        </Grid>
                        <Grid item xs={4} className='sub-menu'>
                            <Typography className='as'>
                                <DirectionsBusFilledOutlinedIcon className='mr-5' />
                                Bus
                            </Typography>
                            <Tooltip title="Add" placement="top-end">
                                <Button style={{ padding: '2px', minWidth: '30px', minHeight: '2px', fontSize: '8px', position: 'relative', bottom: '8px', height: 'fit-content' }} className='tooltip'>new</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container className='mb-17'>
                        <Grid container className='mb-17'>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography className='label'>
                                    Search for city, area or hotel
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography className='fs-18'>Goa</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <div className='hr'></div>
                            </Grid>
                        </Grid>
                        <Grid container className='mb-17'>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Typography className='label'>
                                            Check-in
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Typography className='fs-18 '>
                                            Tue, 06 Jun
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography className='label'>
                                            Check-out
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography className='fs-18'>
                                            Wed, 07 Jun
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid container>
                                <Grid item xs={12}>
                                    <div className='hr'></div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container className='mb-17'>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography className='label'>
                                    Travellers
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography className='fs-18'>1 room, 2 adults</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Button className='btn'>
                                    <strong>
                                        Search hotels
                                    </strong>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className='pb-21'>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Typography className='fs-18'>
                                <strong>
                                    Recently Searched
                                </strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Typography className='label as fs-15'>
                                <RestoreIcon className='mr-5 fs-18' />
                                GOA, 2 ADULTS
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} md={4} className='display'>
                            <Grid container>
                                <Typography>
                                    Tue &nbsp;&nbsp;-Wed
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography>
                                    05 Jun &nbsp;07 Jun
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            <Grid container className='footer'>
                <Grid item xs={3}>
                    <HomeIcon style={{ color: 'orangered' }} />
                    <Typography className='footer-sub-menu'>Home</Typography>
                </Grid>
                <Grid item xs={3}>
                    <WorkOutlineOutlinedIcon />
                    <Typography className='footer-sub-menu'>My Trips</Typography>
                </Grid>
                <Grid item xs={3}>
                    <PercentIcon />
                    <Typography className='footer-sub-menu'>
                        Offers
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <PersonOutlineIcon />
                    <Typography className='footer-sub-menu'>
                        Account
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Assignment