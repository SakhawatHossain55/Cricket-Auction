import React from 'react';

const Count = (props) => {
    // data restructuring
    const count = props.count;

    const totalSalary = count.reduce((total, prd) => total + prd.salary, 0);

    let salary = 0;
    for (let i = 0; i < count.length; i++) {
        const player = count[i];
        salary = player.salary;
    }
    let name = '';
    for (let i = 0; i < count.length; i++) {
        const player = count[i];
        name = player.name;
    }

    return (
        <div>
            <h3 className="d-flex justify-content-center">Selected Player</h3>

            <ul class="list-group">
                {
                    count.map((players) =>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {players.name}
                            <span style={{ background: '#31D2F2' }} className="badge badgePrimary badge-pill"> $ {players.salary}</span>
                        </li>)
                }
            </ul>

            <div className="border p-2 rounded mt-3">
                <p>Player Count : {count.length}</p>
                <p>Total Amount : {totalSalary}</p>
            </div>
        </div>
    );
};

export default Count;

