import React, {FormEvent, useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import s from "./Portfolio.module.css";
import TelegramIcon from '@mui/icons-material/Telegram';
import Typography from "@mui/material/Typography";

export default function ContactForm() {

    return (
        <div className={s.contact}>
            <Container>
                <h1> Contactus  &#127797;</h1>
            </Container>
            <Container sx={{display: 'flex', flexDirection: 'row', mb: '350px', mt: '150px'}}>
                <Box sx={{maxWidth: 600, mx: "auto", p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <TelegramIcon sx={{color: 'lightgoldenrodyellow', fontSize: '50px', m: 2}}/>
                    <Typography sx={{color: 'white', fontWeight: 900, m: 2}}>TELEGRAM</Typography>
                </Box>
                <Box sx={{maxWidth: 600, mx: "auto", p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <TelegramIcon sx={{color: 'lightgoldenrodyellow', fontSize: '50px', m: 2}}/>
                    <Typography sx={{color: 'white', fontWeight: 900, m: 2}}>TELEGRAM</Typography>
                </Box>
                <Box sx={{maxWidth: 600, mx: "auto", p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <TelegramIcon sx={{color: 'lightgoldenrodyellow', fontSize: '50px', m: 2}}/>
                    <Typography sx={{color: 'white', fontWeight: 900, m: 2}}>TELEGRAM</Typography>
                </Box>
            </Container>
        </div>
    );
}