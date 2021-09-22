import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import PetCard2 from '../components/PetCard2';
// import Link from 'react-router-dom';


const SinglePet = (props) => {
    const {_id} = useParams();

    const history = useHistory();

    const[pet, setPet] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets/'+_id)
            // .then (console.log(product))
            // .then(res => console.log(res.data.results))
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err));
    }, [_id])


    const onDeleteHandler = (_id) => {
        console.log(_id)
        axios.delete(`http://localhost:8000/api/pets/${_id}/delete`)
            .then(res => {
                console.log(res);
                history.push('/')
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <div>
                <Link to='/' className='fw-bolder' style={{color: "royalblue", fontSize:"40px", textDecoration:"none"}}>🔙</Link>
            </div>
            <div>
                <h3 class="display-6">Details about: <i>{pet.name}</i></h3>
            </div>
            <div>
                <button type="button" class="btn btn-outline-primary" style={{margin: "10px", fontSize:"25px"}} onClick={()=>onDeleteHandler(_id)}> Adopt {pet.name} </button>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <div>
                    <PetCard2 data={pet}/>
                </div>
            </div>
        </div>
    )
}

export default SinglePet;