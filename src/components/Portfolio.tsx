import React, { useEffect } from 'react';
import s from "./Portfolio.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Button } from "@mui/material";
import sm from "../pics/sm.png"
import flashcards from "../pics/flashcards.png"
import { Carousel } from "@mantine/carousel";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Portfolio = () => {
    return (
        <section className={s.portfolio}>
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
                    }}>Flashcards</Typography></div>
                    <Box sx={{display: 'flex', width: '100%'}}>
                        <div className={s.item__description} style={{flex: '1'}}>
                            <Typography sx={{color: 'white'}}>Flashcards - Anki clone developed with React,
                                Radix, RTK Query, Typescript and Storybook </Typography>
                        </div>

                        <div className={s.item__stack__container} style={{flex: '1', justifyContent: 'center'}}>
                            <div className={s.item__stack__item__r}>React</div>
                            <div className={s.item__stack__item__rf}>RHForms</div>
                            <div className={s.item__stack__item__ts}>Typescript</div>
                            <div className={s.item__stack__item__red}>RTK Query</div>
                            <div className={s.item__stack__item__jest}>Radix</div>
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
                        <img src={flashcards}
                             alt="SocialMedia"
                             className={s.image}
                             style={{width: '100%', height: '100%', maxWidth: '100%'}}
                        />
                    </Paper>
                    <div className={s.item__stack__container}
                         style={{marginTop: '15px', justifyContent: 'flex-start'}}>
                        <div className={s.item__stack__item__gh}>
                            <Button href="https://github.com/beamle/FlashCards" target="_blank" sx={{  borderRadius: 5, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                                    color: '#e7e7e7', backgroundColor: '#424242'},}}>
                                <GitHubIcon/>
                                GitHub
                            </Button>
                        </div>
                        <div className={s.item__stack__item__ghp}>
                            <Button href="https://flash-cards-peach.vercel.app/" target="_blank" sx={{ borderRadius: 5, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                                    color: '#e7e7e7', backgroundColor: '#424242'},}}>
                                <LanguageIcon/>
                                Deploy
                            </Button>
                        </div>
                    </div>

                </Box>
            </Container>
            <MantineCarousel/>
        </section>
    );
};

export default Portfolio;
export function MantineCarousel() {
    return (
      <Carousel slideSize={{ md: 'sm' }} height={'550px'} slideGap="lg" loop align={"start"} style={{display: 'flex', justifyContent: 'center'}}>
          <Carousel.Slide display={"flex"}>
              <div className={s.slide__content}>
                    <img src={flashcards}/>
                  <div className={s.btns}>
                      <Button href="https://flash-cards-peach.vercel.app/" target="_blank" sx={{ minWidth: 0,position: "absolute", bottom: 50, right: 0, borderRadius: 10, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                              color: '#e7e7e7', backgroundColor: '#424242'},}}>
                          <LanguageIcon/>
                      </Button>
                      <Button href="https://github.com/beamle/FlashCards" target="_blank" sx={{ minWidth: 0,position: "absolute", bottom: 0, right: 0, borderRadius: 10, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                              color: '#e7e7e7', backgroundColor: '#424242'},}}>
                          <GitHubIcon/>
                      </Button>
                      <Stack className={s.stack__container} direction="row" sx={{display: 'flex', flexWrap: 'wrap', gap: 1, maxWidth: '75%', marginTop: 2}}>
                          <Item className={s.stackItem}><img src="./pics/react.png" alt="react Logo" width="100%" height="100%" /></Item>
                          <Item className={s.stackItem}><img src="./pics/storybook.png" alt="storybook Logo" width="100%" height="100%" /></Item>
                          <Item className={s.stackItem}><img src="./pics/logo-javascript.svg" alt="javascript Logo" width="100%" height="100%" /></Item>
                          <Item className={s.stackItem}><img src="./pics/redux.svg" alt="redux Logo" width="100%" height="100%" /></Item>
                          <Item className={s.stackItem}><img src="./pics/radix.png" alt="radix Logo" width="100%" height="100%" /></Item>
                      </Stack>
                  </div>
              </div>
          </Carousel.Slide>
          <div className={s.slide__content}>
              <img src={sm}/>
              <div className={s.btns}>
                  <Button href="https://flash-cards-peach.vercel.app/" target="_blank" sx={{ minWidth: 0,position: "absolute", bottom: 50, right: 0, borderRadius: 10, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                          color: '#e7e7e7', backgroundColor: '#424242'},}}>
                      <LanguageIcon/>
                  </Button>
                  <Button href="https://github.com/beamle/FlashCards" target="_blank" sx={{ minWidth: 0,position: "absolute", bottom: 0, right: 0, borderRadius: 10, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                          color: '#e7e7e7', backgroundColor: '#424242'},}}>
                      <GitHubIcon/>
                  </Button>
                  <Stack className={s.stack__container} direction="row" sx={{display: 'flex', flexWrap: 'wrap', gap: 1, maxWidth: '75%', marginTop: 2}}>
                      <Item className={s.stackItem}><img src="./pics/react.png" alt="react Logo" width="100%" height="100%" /></Item>
                      <Item className={s.stackItem}><img src="./pics/storybook.png" alt="storybook Logo" width="100%" height="100%" /></Item>
                      <Item className={s.stackItem}><img src="./pics/logo-javascript.svg" alt="javascript Logo" width="100%" height="100%" /></Item>
                      <Item className={s.stackItem}><img src="./pics/redux.svg" alt="redux Logo" width="100%" height="100%" /></Item>
                      <Item className={s.stackItem}><img src="./pics/radix.png" alt="radix Logo" width="100%" height="100%" /></Item>
                  </Stack>
              </div>
          </div>
          <div className={s.slide__content}>
              <img src={flashcards}/>
              <div className={s.btns}>
                  <Button href="https://flash-cards-peach.vercel.app/" target="_blank" sx={{ minWidth: 0,position: "absolute", bottom: 50, right: 0, borderRadius: 10, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                          color: '#e7e7e7', backgroundColor: '#424242'},}}>
                      <LanguageIcon/>
                  </Button>
                  <Button href="https://github.com/beamle/FlashCards" target="_blank" sx={{ minWidth: 0,position: "absolute", bottom: 0, right: 0, borderRadius: 10, p: 1, color: '#424242', backgroundColor: '#e7e7e7', '&:hover': {
                          color: '#e7e7e7', backgroundColor: '#424242'},}}>
                      <GitHubIcon/>
                  </Button>
                  <Stack className={s.stack__container} direction="row" sx={{display: 'flex', flexWrap: 'wrap', gap: 1, maxWidth: '75%', marginTop: 2}}>
                      <Item className={s.stackItem}><img src="./pics/react.png" alt="react Logo" width="100%" height="100%" /></Item>
                      <Item className={s.stackItem}><img src="./pics/storybook.png" alt="storybook Logo" width="100%" height="100%" /></Item>
                      <Item className={s.stackItem}><img src="./pics/logo-javascript.svg" alt="javascript Logo" width="100%" height="100%" /></Item>
                      <Item className={s.stackItem}><img src="./pics/redux.svg" alt="redux Logo" width="100%" height="100%" /></Item>
                      <Item className={s.stackItem}><img src="./pics/radix.png" alt="radix Logo" width="100%" height="100%" /></Item>
                  </Stack>
              </div>
          </div>
      </Carousel>
    );
}

export const Item = styled(Paper)(({theme}) => ({
    width: 15,
    height: 15,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    borderRadius: 50,
    boxShadow: '0px 4px 8px rgb(244 244 244 / 31%)',
    gap: 5,
}));