import GalleryCard from "./GalleryCard"

import GeneralWardPhoto from '../../assets/GW.jpg'

const GallerySection=()=>{
    return (
        <div clasName="row d-flex page">
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        <GalleryCard photo={GeneralWardPhoto} title="General Ward"/>
        </div>
    )
}

export default GallerySection