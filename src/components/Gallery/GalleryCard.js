const GalleryCard=({photo,title})=>{
    return(
        <div className="card m-3 " style={{width: "22rem"}}>
         <img src={photo} class="card-img-top" alt="..." />
         <div class="card-body p-1 text-center">
             <h5 class="card-title">{title}</h5>
        </div>
    </div>
    )
}

export default GalleryCard