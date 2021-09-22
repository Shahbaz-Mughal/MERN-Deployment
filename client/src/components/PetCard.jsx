import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const PetCard = (props) => {


    return(
        <div style={{color: "darkgreen", fontSize:"25px"}}>
            <b style={{fontSize:"18px"}}>name:</b> <i>{props.data.name}</i> <br/>
            <b style={{fontSize:"18px"}}>type:</b> <i>{props.data.type}</i> <br/>
            <b style={{fontSize:"18px"}}>actions:</b>
            <> </>
            <Link to={`/pets/${props.data._id}`}style={{fontSize:"18px"}}>Details</Link>
            <> || </>
            <Link to={`/pets/${props.data._id}/edit`}style={{fontSize:"18px"}}>Edit</Link>
            <hr style={{color:"black"}}/>
        </div>
    )
}

export default PetCard;