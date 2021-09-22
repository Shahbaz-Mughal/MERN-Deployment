import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
// import card component
import { Link } from 'react-router-dom';
import PetCard from '../components/PetCard';

const AllPets = (props => {
    const [pets, setPets] = useState([]); 


    useEffect( () =>{
        axios.get("http://localhost:8000/api/pets/all")
        .then(res => setPets(res.data.results.sort(function(a, b) {
            var nameA = a.type.toUpperCase(); // ignore upper and lowercase
            var nameB = b.type.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        })))
        .catch(err => console.log(err))
    }, [])


    return(
        <div>
            <div>
                <Link to='/pets/new' className='fw-bolder' style={{color: "royalblue", fontSize:"24px"}}>+add a pet to the shelter</Link>
            </div>
            <div>
                <h2 class="display-6">These pets are looking for a good home</h2> 
            </div>
            <div className="paw" style={{ fontSize:"40px"}}>
                <p>🐾 🐾 🐾 🐾 🐾</p>
            </div>
            <div className="allPets">
                {
                    pets.map((item, i)=>{
                        return <PetCard key={i} data={item}/>
                        // title={item.title}
                    })
                }
            </div>
        </div>
    )
})

export default AllPets;