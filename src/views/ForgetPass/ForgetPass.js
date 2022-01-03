import * as  React from 'react';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import FormEmail from '../../components/Detail/FormEmail';
import Custom from './forgetPass.module.css';
import Box from '@mui/material/Box';

const ForgetPass = () => {
    return (
        <Box className={Custom.background}>
            <Box className={`container py-4 text-white`}>
                <NavbarArrowBack/> 
                <FormEmail/>
            </Box>
        </Box>
    );
}

export default ForgetPass;

