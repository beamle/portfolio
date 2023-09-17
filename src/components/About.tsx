import React from 'react';
import s from "./About.module.css";

const About = () => {
    return (
        <div className={s.about}>
            <div className={s.bigName}>
                <h1> About </h1></div>
            <div className={s.content}>
                <div className={s.description}>
                    <p>
                        My name is Nikita.
                        In the past few years, I've been working in the IT sector as an analyst.
                        However, I've made a decision to pivot my career towards software development and am currently
                        putting all my efforts into
                        making that transition
                    </p></div>
                <div className={s.picture}><img src="/pics/uml.png"
                                                alt="uml"
                                                className={s.image}/></div>
            </div>
        </div>
    );
};

export default About;