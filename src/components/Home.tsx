import React from 'react';
import s from './Home.module.css';

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
                            Gr<span style={{ color: '#ffffb6' }}>&#7882;</span>nd<span
                            style={{ color: '#ffffb6' }}
                        >
                &#7882;
              </span>ng to become front-end{' '}
                            <span style={{ color: '#ffffb6' }}>ninja</span>
                        </p>
                    </div>
                    <div className={s.buttons}>
                        <a
                            href="https://drive.google.com/file/d/1AgChb3HoaQkoYcaydy6lxUyDeOwL2dUo/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>CV download</button>
                        </a>
                      <a
                        href="https://docs.google.com/document/d/1vVLz9hHtqqnBqY330Q5oZ7INmEfQpENs/edit?usp=sharing&ouid=104902378168193929644&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>Cover letter</button>
                      </a>
                        <a
                            href="https://github.com/beamle"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
