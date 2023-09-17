import React from 'react';
import {Link} from 'react-router-dom';
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
                        <Link to="https://drive.google.com/file/d/1S3olNNTyod-q0171eGSon_cZchqBhtJQ/view?usp=sharing">
                            <button>CV download</button>
                        </Link>
                        <Link to="https://github.com/beamle">
                            <button>GitHub</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
