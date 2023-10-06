import React from 'react';
import s from "./Portfolio.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import {Button} from "@mui/material";
import sm from "../pics/sm.png"
import socialMedia2 from "../pics/social-media2.png"

const Portfolio = () => {
    return (
        <div className={s.portfolio}>
            <Container>
                <h1> Projects </h1>
            </Container>
            <Container sx={{
                display: 'flex',
                gap: '50px',
                flexDirection: {xs: 'column', md: 'row'},
                height: '100%',
            }}
            >
                <Box sx={{
                    display: 'flex',
                    width: {md: '80%', sm: '100%', xs: '100%'},
                    flexDirection: 'column',
                    flexWrap: 'wrap'
                }}>
                    <div className={s.item__name}>
                        <Typography sx={{
                            fontSize: '24px',
                            color: 'white',
                            textTransform: 'uppercase',
                            fontWeight: '900'
                        }}>Todolist</Typography>
                    </div>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <div className={s.item__description} style={{flex: '1'}}>
                            <Typography sx={{color: 'white'}}>Typescript application built with functional-based
                                components, hooks, Redux, and the useSelector hook approach</Typography>
                        </div>
                        <div className={s.item__stack__container} style={{flex: '1', justifyContent: 'center'}}>
                            <div className={s.item__stack__item__r}>React</div>
                            <div className={s.item__stack__item__sb}>Storybook</div>
                            <div className={s.item__stack__item__mui}>MUI</div>
                            <div className={s.item__stack__item__f}>Formik</div>
                            <div className={s.item__stack__item__ts}>Typescript</div>
                            <div className={s.item__stack__item__red}>Redux</div>
                        </div>
                    </Box>
                    <Paper sx={{
                        mt: 4,
                        padding: 4,
                        backgroundColor: 'rgb(255 255 255 / 16%)',
                        height: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img src={sm}
                             alt="Todolist"
                             className={s.image}
                             style={{width: '100%', height: 'auto', maxWidth: '100%'}}
                        />
                    </Paper>
                    <Box>
                        <div className={s.item__stack__container}
                             style={{marginTop: '15px', justifyContent: 'flex-start'}}>
                            <div className={s.item__stack__item__gh}>
                                <Button href="https://github.com/beamle/1-todolist" target="_blank" sx={{borderRadius: 5, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                                        color: '#e7e7e7', backgroundColor: '#424242'},}}>
                                    <GitHubIcon/>
                                    GitHub
                                </Button>
                            </div>
                            <div className={s.item__stack__item__ghp}>
                                <Button disabled={true} href="https://beamle.github.io/1-todolist" target="_blank" sx={{borderRadius: 5, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                                        color: '#e7e7e7', backgroundColor: '#424242'},}}>
                                    <LanguageIcon/>
                                    Deploy
                                </Button>
                            </div>
                        </div>

                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    width: {md: '80%', sm: '100%', xs: '100%'},
                    flexDirection: 'column',
                    flexWrap: 'wrap'
                }}>
                    <div className={s.item__name}><Typography sx={{
                        fontSize: '24px',
                        color: 'white',
                        textTransform: 'uppercase',
                        fontWeight: '900'
                    }}>SocialMedia</Typography></div>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <div className={s.item__description} style={{flex: '1'}}>
                            <Typography sx={{color: 'white'}}>Social-network developed using React-Redux, utilizing
                                class-components and the connector approach</Typography>
                        </div>

                        <div className={s.item__stack__container} style={{flex: '1', justifyContent: 'center'}}>
                            <div className={s.item__stack__item__r}>React</div>
                            <div className={s.item__stack__item__rf}>ReduxForm</div>
                            <div className={s.item__stack__item__ts}>Typescript</div>
                            <div className={s.item__stack__item__red}>Redux</div>
                            <div className={s.item__stack__item__jest}>Jest</div>
                        </div>
                    </Box>
                    <Paper sx={{
                        mt: 4,
                        padding: 4,
                        backgroundColor: 'rgb(255 255 255 / 16%)',
                        height: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img src={socialMedia2}
                             alt="SocialMedia"
                             className={s.image}
                             style={{width: '100%', height: '100%', maxWidth: '100%'}}
                        />
                    </Paper>
                    <div className={s.item__stack__container}
                         style={{marginTop: '15px', justifyContent: 'flex-start'}}>
                        <div className={s.item__stack__item__gh}>
                            <Button href="https://github.com/beamle/samurai-way-main" target="_blank" sx={{borderRadius: 5, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                                    color: '#e7e7e7', backgroundColor: '#424242'},}}>
                                <GitHubIcon/>
                                GitHub
                            </Button>
                        </div>
                        <div className={s.item__stack__item__ghp}>
                            <Button disabled={true} href="" target="_blank" sx={{borderRadius: 5, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                                    color: '#e7e7e7', backgroundColor: '#424242'},}}>
                                <LanguageIcon/>
                                Deploy
                            </Button>
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
    );
};

export default Portfolio;
