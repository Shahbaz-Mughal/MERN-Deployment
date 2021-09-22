import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

import { Link } from 'react-router-dom';


const CreatePet = (props => {
    const history = useHistory();

    const[form, setForm] = useState({
        type: "",
        name: "",
        description: ""
    })

    const [errors, setErrors] = useState({});

    const onChangeHandler = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    // const onMultiChange = (event) =>{
    //     console.log("adding skills")

    //     var skills = event.target.value;
    //     var value = [];
    //     value.push(skills)

    //     setForm({
    //         ...form,
    //         "skills": value
    //     })
    // }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('form info:')
        console.log(form)

        axios.post("http://localhost:8000/api/pets/create", form)
            .then(res=>{
                console.log('from axios.post, create pet response:')
                console.log(res.data);

                if(res.data.results){
                    history.push('/')
                }
                else{
                    // console.log("bad data");
                    // console.log(res.data.err.errors);
                    setErrors(res.data.err.errors);
                }
            })
            .catch(err => console.log(err))
            
        // event.target.reset()
            // setForm({
            //     title: "",
            //     price: "",
            //     description: ""
            // })
    }


    return(
        <div>
            <div>
                <Link to='/' className='fw-bolder' style={{color: "royalblue", fontSize:"40px", textDecoration:"none"}}>🔙</Link>
            </div>
            <div style={{marginTop:"5px"}}>
                <h2 class="display-6">Know a pet needing a home?</h2>
            </div>

            <div className='w-50 mx-auto p-1'>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                    <label htmlFor="name">Pet Name:</label>
                    <input name="name" className="form-control" type='text' onChange={onChangeHandler} />
                    <span className='alert-warning'>{errors.name && errors.name.message}</span>
                </div>

                <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                    <label htmlFor="type">Pet Type:</label>
                    <input name="type" className="form-control" type='text' onChange={onChangeHandler} />
                    <span className='alert-warning'>{errors.type && errors.type.message}</span>
                </div>

                <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                    <label htmlFor="description">Pet Description:</label>
                    <input name="description" className="form-control" description='text' onChange={onChangeHandler} />
                    <span className='alert-warning'>{errors.description && errors.description.message}</span>
                </div>
                <br/>
                <br/>

                <hr/>
                <br/>
                <p class="fst-italic" style={{marginTop:"15px", fontSize: "20px", fontFamily:"Arial, Helvetica, sans-serif"}}>Skills (optional)</p>
                <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                    <label htmlFor="skills">Skill 1:</label>
                    <input name="skills1" className="form-control" skills='text' onChange={onChangeHandler} />
                </div>

                <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                    <label htmlFor="skills">Skill 2:</label>
                    <input name="skills2" className="form-control" skills='text' onChange={onChangeHandler} />
                </div>

                <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                    <label htmlFor="skills">Skill 3:</label>
                    <input name="skills3" className="form-control" skills='text' onChange={onChangeHandler} />
                </div>
                
                <input className="btn btn-primary mt-3" style={{margin:"25px 0px", fontSize: "45px", fontFamily:"Arial, Helvetica, sans-serif"}} type='submit' value='Add Pet'/>

            </form> 
        </div>
        </div>
    )
})

export default CreatePet;

