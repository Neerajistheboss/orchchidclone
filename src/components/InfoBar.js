import React from 'react'
const InfoBar=()=>{
    return(
        <div style={{height:'4vh',backgroundColor:'#0A99FF',fontSize:'18px',padding:'3px',color:'#FFF',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <span><i class="fas fa-phone-alt" />+91-9117100100</span>
            <span style={{borderLeft:'1px solid',borderRight:'1px solid',margin:'0 10px',padding:'0 10px'}}><i class="fas fa-envelope"></i>info@orchidmedcenter.com</span>
            <span><i class="fas fa-map-marker-alt"></i>H.B.Road, Ranchi,Jharkhand-834001</span>
        <a href='https://yumedic.com/hospital?SHOP_ID=22' target={'_blank'} className='mx-3 p-1' style={{backgroundColor:'#4CAFA7',color:'#FFF',textDecoration:'none'}}>BOOK AN APPOINTMENT</a>
        <span className='mx-3'>
        <a href='#' style={{color:'#FFF',textDecortaion:'none'}}><i class="mx-2 fab fa-facebook"></i></a>
        <a href='#' style={{color:'#FFF',textDecortaion:'none'}}><i class="mx-2 fab fa-instagram"></i></a>
        <a href='#' style={{color:'#FFF',textDecortaion:'none'}}><i class="mx-2 fab fa-youtube"></i></a>
        <a href='#' style={{color:'#FFF',textDecortaion:'none'}}><i class="mx-2 fab fa-twitter"></i></a>
        </span>
        </div>
    )
}

export default InfoBar