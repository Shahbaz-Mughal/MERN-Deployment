import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditPet = (props => {
    const history = useHistory();
    const {_id} = useParams();

    const[form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skills1: "",
        skills2: "",
        skills3: ""
    })

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets/'+_id)
            // .then(res => console.log(res.data.results))
            .then(res => setForm(res.data.results))
            .catch(err => console.log(err));
    }, [_id])



    const onChangeHandler = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log(form)
        axios.patch(`http://localhost:8000/api/pets/${_id}/update`, form)
            .then(res=>{
                console.log(res);
                history.push('/');
            })
            .catch(err=>console.log(err))
    }


    return(
        <div>
            <div>
                <Link to='/' className='fw-bolder' style={{color: "royalblue", fontSize:"40px", textDecoration:"none"}}>🔙</Link>
            </div>
            <div style={{marginTop:"5px"}}>
                <h2 class="display-6">Edit Pet</h2>
            </div>

            <div className='w-50 mx-auto p-1'>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                        <label htmlFor="name">Pet Name:</label>
                        <input name="name" className="form-control" type='text' onChange={onChangeHandler} value={form.name} />
                        {/* <span className='alert-warning'>{errors.name && errors.name.message}</span> */}
                    </div>

                    <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                        <label htmlFor="type">Pet Type:</label>
                        <input name="type" className="form-control" type='text' onChange={onChangeHandler} value={form.type}/>
                        {/* <span className='alert-warning'>{errors.type && errors.type.message}</span> */}
                    </div>

                    <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                        <label htmlFor="description">Pet Description:</label>
                        <input name="description" className="form-control" description='text' onChange={onChangeHandler} value={form.description}/>
                        {/* <span className='alert-warning'>{errors.description && errors.description.message}</span> */}
                    </div>
                    <br/>
                    <br/>

                    <hr/>
                    <br/>
                    <p class="fst-italic" style={{marginTop:"15px", fontSize: "20px", fontFamily:"Arial, Helvetica, sans-serif"}}>Skills (optional)</p>
                    <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                        <label htmlFor="skills">Skill 1:</label>
                        <input name="skills1" className="form-control" skills='text' onChange={onChangeHandler} value={form.skills1}/>
                    </div>

                    <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                        <label htmlFor="skills">Skill 2:</label>
                        <input name="skills2" className="form-control" skills='text' onChange={onChangeHandler} value={form.skills2}/>
                    </div>

                    <div className="form-group" style={{marginTop:"15px", fontSize: "25px", fontFamily:"Arial, Helvetica, sans-serif", color:"darkgreen"}}>
                        <label htmlFor="skills">Skill 3:</label>
                        <input name="skills3" className="form-control" skills='text' onChange={onChangeHandler} value={form.skills3}/>
                    </div>
                    
                    <input className="btn btn-primary mt-3" style={{margin:"25px 0px", fontSize: "45px", fontFamily:"Arial, Helvetica, sans-serif"}} type='submit' value='Edit Pet'/>

                </form> 
            </div>
        </div>
    )
})

export default EditPet;

