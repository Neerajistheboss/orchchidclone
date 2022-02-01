import React from 'react'
import Logo from '../assets/milodoctor_logo.png'
import Dermatoly from '../assets/dermatology.jpeg'
const SpecialityCard=()=>{
    return(
        <div className='card col-3 m-3 shadow' style={{width:'18rem',borderRadius:'10px'}}>
            <img className='' src={Dermatoly} />
            <div class="card-body">
                <h5 class="card-title">Dermatology</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/detail" class="btn btn-primary">Know More</a>
            </div>
        </div>
    )
}

export default SpecialityCard