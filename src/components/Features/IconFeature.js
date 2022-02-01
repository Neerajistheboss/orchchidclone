const IconFeature=({value,title})=>{
    return(
        <div style={{maxWidth:'200px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'30px'}}>
            <i style={{fontSize:'48px',color:'#DCB'}} class="fas fa-star mb-3"></i>
            <h4 className="m-0">{value}</h4>
            <p style={{fontSize:'18px'}}>{title}</p>
        </div>
    )
}

export default IconFeature