import React from 'react';
import s from "./Portfolio.module.css";

const Portfolio = () => {
    return (
        <div className={s.portfolio}>
            <div className={s.bigName}>
                <h1> Projects </h1></div>
            <div className={s.portfolioContainer}>
                <div className={s.portfolioContainer__item}>
                    <div className={s.item__name}>Todolist</div>
                    <div className={s.item__description}>Typescript application built with functional-based
                        components, Redux, and the useSelector hook approach</div>
                    <div className={s.item__picture}><img src="/pics/todolist.png"
                                                          alt="Todolist"
                                                          className={s.image}/></div>
                    <div className={s.item__stack__container}>
                        <div className={s.item__stack__item__r}>React</div>
                        <div className={s.item__stack__item__sb}>Storybook</div>
                        <div className={s.item__stack__item__mui}>MUI</div>
                        <div className={s.item__stack__item__mui}>Formik</div>
                        <div className={s.item__stack__item__mui}>Typescript</div>
                        <div className={s.item__stack__item__mui}>Typescript</div>
                        <div className={s.item__stack__item__mui}>Typescript</div>
                    </div>
                </div>
                <div className={s.portfolioContainer__item}>
                    <div className={s.item__name}>SocialMedia</div>
                    <div className={s.item__description}>Social-network developed using React-Redux, utilizing class-components and the connector
                        approach</div>
                    <div className={s.item__picture}><img src="/pics/social-media.png"
                                                          alt="Todolist"
                                                          className={s.image}/></div>
                    <div className={s.item__stack__container}>
                        <div className={s.item__stack__item__r}><img src="/pics/react.png"
                                                                     alt="Todolist"
                                                                     className={s.image}/></div>
                        <div className={s.item__stack__item__sb}><img src="/pics/storybook.png"
                                                                      alt="Todolist"
                                                                      className={s.image}/></div>
                        <div className={s.item__stack__item__mui}><img src="/pics/mui.png"
                                                                       alt="Todolist"
                                                                       className={s.image}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;