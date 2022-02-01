import React from 'react'
import IconFeature from './IconFeature'
const FeaturesSection=()=>{
    return(
        <div>
            <h3 className='text-center'>Why Choose Us</h3>
            <div className='row justify-content-center'>
            <IconFeature value={"20+"} title={"Doctors"}/>
            <IconFeature value={"20+"} title={"Doctors"}/>
            <IconFeature value={"20+"} title={"Doctors"}/>
            <IconFeature value={"20+"} title={"Doctors"}/>
            </div>
        </div>
    )
}

export default FeaturesSection