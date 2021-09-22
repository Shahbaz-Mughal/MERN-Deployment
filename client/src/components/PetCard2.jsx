import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const PetCard2 = (props) => {



    return(
        <div style={{color: "darkgreen", fontSize:"25px"}}>
            <b style={{fontSize:"18px", color:"royalblue"}}>Type:</b> <br/>
            {props.data.type} <br/>
            <hr style={{color:"black"}}/>

            <b style={{fontSize:"18px", color:"royalblue"}}>Description:</b> <br/>{props.data.description} <br/>
            <hr style={{color:"black"}}/>
            
            <b style={{fontSize:"18px", color:"royalblue"}}>Skills:</b> <br/>
            {props.data.skills1} <br/>
            {props.data.skills2} <br/>
            {props.data.skills3} <br/>
        </div>
    )
}

export default PetCard2;