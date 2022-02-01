import Banner from '../assets/banner.jpg'
const AboutUsPage=()=>{
    return(
        <div className="page">
            <div className="py-5" style={{backgroundColor:'#003052'}}>
            <div style={{backgroundImage:`url(${Banner})`}}></div>
            <h1 className="text-center text-light">About Us</h1>
            </div>
            <div className="container py-5">

            <p>Patliputra Multi-Speciality Hospital has been at the forefront of healthcare in Dhanbad, Jharkhand for almost 50 years. Today the 100 bedded facility is housing more than 15 specialities offering a plethora of services in practically every field of modern medicine and health care. Our well-equipped hospital rooms, state-of-the-art departments and technologically advanced systems are all backed by the expertise and reputation of renowned doctors, nursing & paramedics.</p>
            <p>Starting with the determination to serve the people of Dhanbad at a very economical cost at a time everyone was dependent on Government-owned Healthcare Institutions, renowned Physician, Dr Nirmal Drolia, one of the stalwarts in the Healthcare Industry started Patliputra Nursing Home in 1973, at the bustling street of Purana Bajar.</p>
            <p>Since then, there was no looking back, Patliputra is not only one of the major centres of advanced Healthcare in Dhanbad but also a multispeciality serving people from all walks of life.</p>
            </div>
        </div>
    )
}

export default AboutUsPage