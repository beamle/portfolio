import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import InfiniteScroll from "react-infinite-scroll-component";
import './App.css';
import CircularProgress from "@mui/material/CircularProgress";

function App() {
    const [state, setState] = useState({items: [<Home/>, <About/>,]});
    const [extraComponents] = useState([
        <Portfolio/>,
        <Contact/>
    ]);
    const [count, setCount] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const fetchMoreData = () => {
        if (state.items.length >= 4) {
            setHasMore(false);
            return;
        }

        setState({
            items: state.items.concat([extraComponents[count]])
        });
        setCount(count + 1);
        // setTimeout(() => {
        //     setState({
        //         items: state.items.concat([extraComponents[count]])
        //     });
        //     setCount(count + 1);
        // }, 0);
    };

    return (
        <div className="app">
            <div className="headerNav">
                <div className="headerNav-item">Project</div>
                <div className="headerNav-item">Stack</div>
                <div className="headerNav-item">About</div>
            </div>
            <InfiniteScroll
                dataLength={state.items.length}
                // height={1200} // Adjust this value based on your design needs
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<CircularProgress/>}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {state.items.map((page, index) => page)}
            </InfiniteScroll>

        </div>
    );
}

export default App;
