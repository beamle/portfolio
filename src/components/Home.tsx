import React from 'react';
import s from "./Home.module.css";

const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.homeContainer}>
                <div className={s.content}>
                    <div className={s.bigName}>
                        {/*<h1> Nikitš </h1>*/}
                    </div>
                    <div className={s.additionalText}>
                        <p>
                            Grind/ng to become front-end <span style={{color: "#ffffb6"}}>ninja</span>
                        </p>
                    </div>
                    <div className={s.buttons}>
                        <button>CV download</button>
                        <button>GitHub</button>
                    </div>
                </div>
                {/*<div className={s.me}>*/}
                {/*    <img*/}
                {/*        src="/pics/me.png"*/}
                {/*        alt="Todolist"*/}
                {/*        className={s.image}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Home;
