import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import custom from './sideNav.module.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PaidIcon from '@mui/icons-material/Paid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: 'transparent',
    color: '#131522',
    boxShadow: 'none'
}));

const Sidenav = (props) => {
    return (
        <Item className={custom.leftSidebar} sx={{width:'80%'}}> 
                    <Grid container sx={{color:'#131522'}}>
                        <Grid item container justifyContent="end">
                            <Button variant="text" sx={{color:'#131522', minWidth:'10px', padding:0}} onClick={props.show}><CloseIcon/></Button>
                        </Grid>
                    </Grid>
            <Box sx={{textAlign:'center', mb:2}}><AccountCircleOutlinedIcon sx={{fontSize:'7rem'}} className={custom.iconUser}/></Box>
            <Box sx={{textAlign:'center', fontSize:'2rem', mb:5}} className={custom.userName}>Raviy Bayu</Box>
            <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}} className={custom.linkBox}>
                <Link href="#" underline="hover" className={custom.linkSideNav}>
                    <PersonIcon sx={{fontSize:'3rem', mr:1}} className={custom.sideNavIcon}/>
                    <span className={custom.sideNavTitle}>Client</span>
                </Link>
            </Box>
            <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}} className={custom.linkBox}>
                <Link href="#" underline="hover" className={custom.linkSideNav}>
                    <PaidIcon sx={{fontSize:'3rem', mr:1}} className={custom.sideNavIcon}/>
                    <span className={custom.sideNavTitle}>Paid</span>
                </Link>
            </Box>
            <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}} className={custom.linkBox}>
                <Link href="#" underline="hover" className={custom.linkSideNav}>
                    <AccountBalanceWalletIcon sx={{fontSize:'3rem', mr:1}} className={custom.sideNavIcon}/>
                    <span className={custom.sideNavTitle}>Unpaid</span>
                </Link>
            </Box>
            <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}} className={custom.linkBox}>
                <Link href="#" underline="hover" className={custom.linkSideNav}>
                    <ReceiptIcon sx={{fontSize:'3rem', mr:1}} className={custom.sideNavIcon}/>
                    <span className={custom.sideNavTitle}>Processed</span>
                </Link>
            </Box>
            <Box sx={{textAlign:'left', fontSize:'1.5rem', mb:1}} className={custom.linkBox}>
                <Link href="#" underline="hover" className={custom.linkSideNav}>
                    <NoteAltIcon sx={{fontSize:'3rem', mr:1}} className={custom.sideNavIcon}/>
                    <span className={custom.sideNavTitle}>Draft</span>
                </Link>
            </Box>
            <Box sx={{ flexGrow: 1, mt:5}}>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        <Item sx={{textAlign:'center', py:1, fontSize:'1.5rem', color:'#FFC700',}}>
                            <Button 
                                variant="contained" 
                                className={custom.btnClose} 
                                sx={{px:3, bgcolor:'#131522'}}
                                
                            >
                                LOGOUT
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Item>
    );
}

export default Sidenav;
