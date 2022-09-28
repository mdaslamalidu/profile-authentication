import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import "./Home.css";

const Home = () => {
    const [players, setPlayres] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayres(data.player))
    },[search])

    return (
        <div className='home-container'>
            <div className="left-side">
                <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' />
                <Players players={players} cart={cart} setCart={setCart}/>
            </div>
            <div className="right-side">
                <h2>Order Places</h2>
            </div>
        </div>
    );
};

export default Home;