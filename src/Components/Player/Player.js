import React, { useEffect, useState } from 'react';
import playerData from '../../Data/Data.json';
import Cart from '../Cart/Cart';
import Clubs from '../Clubs/Clubs';
import './Player.css';

const Player = () => {
    const [players, setplayer] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setplayer(playerData);
    }, []);

    const handleAddClubs = (player) => {
        console.log("player added", player);
        if (cart.indexOf(player) === -1) {
            const newClub = [...cart, player];
            setCart(newClub);
        }
        else {
            alert('Already added this player in the club');
        }
    }

    return (
        <div className="player-container">
            <div className="Clubs-container">
                {
                    players.map(player => <Clubs handleAddClubs={handleAddClubs} player={player}></Clubs>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Player;