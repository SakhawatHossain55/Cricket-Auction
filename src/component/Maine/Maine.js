import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import Player from '../Player/Player';
import PlayerData from '../playerData/playerData.json'; // create a player data

const Maine = () => {
    // json data count
    const [players, setPlayers] = useState([])
    useEffect(() => {
        setPlayers(PlayerData);

    }, [])

    // useState for handleAddedPlayer
    const [count, setCount] = useState([])
    const handleAddedPlayer = (players) => {
        const newCount = [...count, players]
        setCount(newCount);
    }

    return (
        <div className="main pt-5 pb-5">
            <div className="container">
                <div className="d-flex row">
                    <div className="col-lg-9 col-md-8">
                        <div className="row">
                            {
                                players.map(player => <Player player={player} handleAddedPlayer={handleAddedPlayer} key={player.id}></Player>)
                            }
                        </div>
                    </div>
                    <div className="border p-2 rounded col-lg-3 col-md-4">
                        <Count count={count}></Count>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maine;
