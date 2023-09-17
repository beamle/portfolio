import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import InfiniteScroll from "react-infinite-scroll-component";
import './App.css';


function App() {
    const [state, setState] = useState({items: [<Home/>, <Portfolio/>]});
    const [extraComponents] = useState([
        <About/>,
        <Contact/>
    ]);
    const [count, setCount] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const fetchMoreData = () => {
        if (state.items.length >= 4) {
            setHasMore(false);
            return;
        }
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        console.log("extraC", extraComponents[count]);
        setTimeout(() => {
            setState({
                items: state.items.concat([extraComponents[count]])
            });
            setCount(count + 1);
        }, 1500);
    };

    // console.log(state.items);
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
                loader={<h4>Loading...</h4>}
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
