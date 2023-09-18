import React, {RefObject, useRef} from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Stack from './components/Stack';

function App() {
    const projectRef = useRef(null);
    const stackRef = useRef(null);
    const aboutRef = useRef(null);

    const scrollToComponent = (ref: RefObject<HTMLDivElement>) => {
        if(ref) {
            ref.current?.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="app">
            <div className="headerNav">
                <div className="headerNav-item" onClick={() => scrollToComponent(projectRef)}>
                    Projects
                </div>
                <div className="headerNav-item" onClick={() => scrollToComponent(aboutRef)}>
                    About
                </div>
                <div className="headerNav-item" onClick={() => scrollToComponent(stackRef)}>
                    Stack
                </div>
            </div>

            <Home />
            <div ref={projectRef}>
                <Portfolio />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={stackRef}>
                <Stack />
            </div>
            <Contact />
        </div>
    );
}

export default App;
