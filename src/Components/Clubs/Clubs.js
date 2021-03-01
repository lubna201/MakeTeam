import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import React from 'react';
import './Clubs.css';

const Clubs = (props) => {
    console.log(props.player);
    const {name, team, image, salary} = props.player;
    return (
        <div className="clubs">
            <div>
                <img src={image} alt="Players-img"/>
            </div>
            <div>
            <h1>{name}</h1>
            <h4>Current Team: {team}</h4>
            <h3>Salary: {salary}</h3>
            {/* Bonus part button using  bootstrap */}
            <Button variant="secondary" className="add-button" onClick={() => props.handleAddClubs(props.player,props.player.name)}> <FontAwesomeIcon icon={faPlus} /> Add Player To Your Club</Button>
            </div>
            
        </div>
    );
};

export default Clubs;