import React from 'react';
import './Count.css'

const Count = (props) => {
    const count = props.count;

    const totalSalary = count.reduce((total, prd) => total + prd.salary, 0);

    let salary = 0;
    for (let i = 0; i < count.length; i++) {
        const player = count[i];
        salary = player.salary;
    }
    let name = '....';
    for (let i = 0; i < count.length; i++) {
        const player = count[i];
        name = player.name;
    }

    return (
        <div>
            <h3 className="d-flex justify-content-center">Selected Player</h3>
            <div className="playerDetails">
                <ol>
                    {
                       count.map((players) =><li key={players.id}>{players.name} - ${players.salary}</li>)
                    }
                </ol>
            </div>
            <div className="playerDetails">
                <p>Player Count : {count.length}</p>
                <p>Total Amount : {totalSalary}</p>
            </div>
        </div>
    );
};

export default Count;

