import React from 'react';
import s from "./Portfolio.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Portfolio = () => {
    return (
        <div className={s.portfolio}>
            <Container>
                <h1> Projects </h1>
            </Container>
            <Container sx={{display: 'flex', gap: '20px'}}>
                <Box>
                    <div className={s.item__name}>
                        <Typography sx={{fontSize: '24px', color: 'white', textTransform: 'uppercase', fontWeight: '900'}}>Todolist</Typography>
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
                            <div className={s.item__stack__item__mui}>Formik</div>
                            <div className={s.item__stack__item__mui}>Typescript</div>
                            <div className={s.item__stack__item__mui}>Redux</div>
                        </div>
                    </Box>

                    <Paper sx={{mt: 4, padding: 4, backgroundColor: '#ff8b76', height: 'auto', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="/pics/todolist2.png"
                             alt="Todolist"
                             className={s.image}
                             style={{width: '100%', height: '100%'}}
                        />
                    </Paper>
                </Box>
                <Box>
                    <div className={s.item__name}><Typography sx={{fontSize: '24px', color: 'white', textTransform: 'uppercase', fontWeight: '900'}}>SocialMedia</Typography></div>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <div className={s.item__description} style={{flex: '1'}}>
                            <Typography sx={{color: 'white'}}>Social-network developed using React-Redux, utilizing
                                class-components and the connector approach</Typography>
                        </div>

                        <div className={s.item__stack__container} style={{flex: '1', justifyContent: 'center'}}>
                            <div className={s.item__stack__item__r}>React</div>
                            <div className={s.item__stack__item__mui}>ReduxForm</div>
                            <div className={s.item__stack__item__mui}>Typescript</div>
                            <div className={s.item__stack__item__mui}>Redux</div>
                            <div className={s.item__stack__item__mui}>Redux</div>
                            <div className={s.item__stack__item__mui}>reo</div>
                        </div>
                    </Box>
                    <Paper sx={{mt: 4, padding: 4, backgroundColor: '#ff8b76', height: 'auto', alignItems: 'center', justifyContent: 'center'}}>
                        <img src="/pics/social-media.png"
                             alt="SocialMedia"
                             className={s.image}
                             style={{width: '100%', height: '100%'}}
                        />
                    </Paper>
                </Box>
            </Container>
        </div>
    );
};

export default Portfolio;

