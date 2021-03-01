import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import Player from '../Player/Player';
import PlayerData from '../playerData/playerData.json';
import './PlayerCount.css'

const PlayerCount = () => {
    const [players, setPlayers] = useState([])
    const [count, setCount] = useState([])
    useEffect(() => {
        setPlayers(PlayerData);

    }, [])

    const handleAddedPlayer = (players) => {
        const newCount = [...count, players]
        setCount(newCount);
    }

    return (
        <div className="container">
            <div className="players-container row">
                <div className="players-details call-9">
                    {
                        players.map(player => <Player player={player} handleAddedPlayer={handleAddedPlayer} key={player.id}></Player>)
                    }
                </div>
                <div className="players-count call-3">
                    <Count count={count}></Count>
                </div>
            </div>
        </div>
    );
};

export default PlayerCount;
