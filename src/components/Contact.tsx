import React, {FormEvent, useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TelegramIcon from '@mui/icons-material/Telegram';
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from "react-router-dom";
import s from "./Contact.module.css";

export default function ContactForm() {

    const handleEmailClick = () => {
        const emailAddress = "nikita.alpatov95@gmail.com"; // Replace with your email address
        const subject = "Message from ";
        const body = "Hello Nikita!";

        const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.open(mailtoUrl);
    };

    return (
        <div className={s.contact}>
            <Container>
            {/*    <h1> Contactus  &#127797;</h1>*/}
            </Container>
            <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Box sx={{
                    m: 2,
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to="https://t.me/seniorpomidor1" target="_blank">
                        <TelegramIcon sx={{color: 'rgb(255, 255, 182)', fontSize: '50px', m: 2}}/>
                    </Link>
                    <Typography sx={{color: 'white', fontWeight: 900}}>TELEGRAM</Typography>
                </Box>
                <Box sx={{
                    m: 2,
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to="https://www.linkedin.com/in/nikita-alpatov-5742b4188/" target="_blank">
                        <LinkedInIcon sx={{color: 'rgb(255, 255, 182)', fontSize: '50px', m: 2}}/>

                    </Link>
                    <Typography sx={{color: 'white', fontWeight: 900}}>LINKEDIN</Typography>
                </Box>
                <Box
                    sx={{
                        m: 2,
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    onClick={handleEmailClick}
                >
                    <EmailIcon sx={{color: "rgb(255, 255, 182)", fontSize: "50px", m: 2}}/>
                    <Typography sx={{color: "white", fontWeight: 900}}>EMAIL</Typography>
                </Box>
            </Container>
        </div>
    );
}