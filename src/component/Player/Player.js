import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const [isClicked, setIsClicked] = useState(false)
    const { name, salary, image, } = props.player;

    const handleAddedPlayer = props.handleAddedPlayer;
    return (
        <div className=" col-lg-6">

            <div className=" border rounded d-flex mb-3 p-2">
                <div className="player-image ">
                    <img className="img-thumbnail" src={image} alt="" />
                </div>
                <div className="ms-3">
                    <h5> {name}</h5>
                    <h6>Salary : {salary}</h6>

                    <button disabled={isClicked} class="mt-4 btn btn-info" onClick={() => {
                        handleAddedPlayer(props.player)
                        setIsClicked(true)
                        }}>
                        {isClicked ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />}
                    </button>
                </div>
            </div>

        </div>

    );
};

export default Player;