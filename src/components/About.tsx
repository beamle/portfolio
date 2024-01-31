import React from 'react';
import s from "./About.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const About = () => {
    return (
        <section className={s.about}>
            <Container>
                <h1> About </h1>
            </Container>

            <div className={s.content}>
                <Container>
                    <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: "10%"}}>
                        <Typography sx={{color: '#F7F7F7', fontSize: '16px', mb: {xs: 6, md: 3},  width: '100%'}}>
                            My name is Nikita.
                            In the past few years, I've been working in the IT sector as an analyst.
                            However, I've made a decision to pivot my career towards software development and am
                            currently
                            putting all my efforts into
                            making that transition
                        </Typography>
                        <img
                            src="./pics/mindmap.svg"
                            alt="mindmap"
                            className={s.image}
                            style={{ width: '55%', height: '100%', margin: 'auto' }}
                        />
                    </Box>
                </Container>
            </div>
        </section>
    );
};

export default About;
