import * as React from 'react';
import Custom from './dashboard.module.css';
import NavbarArrowBack from '../../components/Navbar/NavbarArrowBack';
import Detaildashboard from '../../components/Detail/DetailDashboard';
import TitleDashboard from '../../components/Detail/TitleDashboard';
import Box from '@mui/material/Box';

const Dashboardunpaid = () => {
    const data = [
        { 
            id: '#5F892S3', 
            payment_due: 'Due Jan 1, 2022', 
            bill_to: 'Harun Rasyid', 
            total: '250.000',
        },
    ];
    const status = 'Unpaid';
    const link = '/dashboard';
    const title = 'Unpaid';
    return (
        <Box className={Custom.background}>
            <Box className={`container py-5 text-white`}>
                <NavbarArrowBack link={link}/> 
                <TitleDashboard title={title} count={`3`}/>
                <Detaildashboard status={status} data={data}/> 
            </Box>
        </Box>
    );
}

export default Dashboardunpaid;
