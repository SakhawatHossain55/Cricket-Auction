import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const [isClicked, setIsClicked] = useState(false)


    const { name, salary, image, } = props.player;

    const handleAddedPlayer = props.handleAddedPlayer;
    return (
        <div className="player-container">
            <div className="player-image">
                <img src={image} alt="" />
            </div>
            <div className="player-details">
                <h5>Name : {name}</h5>
                <h5>Salary : {salary}</h5>
                <br /><br /><br />
                <button disabled={isClicked} class="btn btn-info" onClick={() => {
                    handleAddedPlayer(props.player)
                    setIsClicked(true)
                    }}><FontAwesomeIcon icon={faPlus} />
                    {isClicked ? "✓ Already added to Player" : "SELECT"}
                </button>
            </div>
        </div>

    );
};

export default Player;