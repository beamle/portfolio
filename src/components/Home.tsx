import React from 'react';
import s from "./Home.module.css";

const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.homeContainer}>
                <div className={s.content}>
                    <div className={s.bigName}>
                        <h1> seniorPomidor </h1>
                    </div>
                    <div className={s.additionalText}>
                        <p>Hi, my name is Nikita Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                    <div className={s.button}>
                        <button>CV download</button>
                    </div>
                </div>
                <div className={s.me}>
                    <img
                        src="/pics/me.png"
                        alt="Todolist"
                        className={s.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
