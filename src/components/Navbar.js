import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import Logo from '../assets/logo.png'
const Navbar = () => {
	const [drawerIsOpen, setDrawerIsOpen] = useState(false)
	const openDrawer = () => {
		setDrawerIsOpen(!drawerIsOpen)
	}

	const closeDrawer = () => {
		setDrawerIsOpen(false)
	}
    
	const content = (
        <>
			<div  style={{backgroundColor:'#006BB8',height: '6vh',display:'flex',justifyContent:'center',alignItems:'center' }}>
                    
				    
					
                    
                    {/* <NavLink style={{alignSelf:"baseline",width:'100px'}} className='navbar-brand' to='/' onClick={closeDrawer}>
						<img src={Logo} alt='Logo' style={{height:'5vh'}} />
					</NavLink> */}
					
					{/* <button  className='navbar-toggler m-0 mr-1' onClick={openDrawer}>
						<span className='navbar-toggler-icon'></span>
					</button> */}

                    
					
                    

						
						
								<NavLink className="mx-3" activeStyle={{fontWeight:'bold',color:'#04111f'}} exact to='/' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#FFF' }}>
									Home
						</NavLink>

						
						
						
							
						
						
							
								<NavLink  className="mx-3" activeStyle={{fontWeight:'bold',color:'#04111f'}} to='/about' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#FFF' }}>
                                About Us
						</NavLink>
							
						
						
							
								<NavLink  className="mx-3" activeStyle={{fontWeight:'bold',color:'#04111f'}} to='/department' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#FFF' }}>
									Department
						</NavLink>
							
								<NavLink  className="mx-3" activeStyle={{fontWeight:'bold',color:'#04111f'}} to='/facility' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#FFF' }}>
									Our Facilities
						</NavLink>
							
						
						
							
								<NavLink  className="mx-3" activeStyle={{fontWeight:'bold',color:'#04111f'}} to='/tieups' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#FFF' }}>
									Tie-Ups
						</NavLink>
							
						
						
						
						
						
							
								<NavLink  className="mx-3" activeStyle={{fontWeight:'bold',color:'#04111f'}} to='/gallery' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#FFF' }}>
									Gallery
						</NavLink>
							
						
							
								<NavLink  className="mx-3" activeStyle={{fontWeight:'bold',color:'#04111f'}} to='/contact' style={{fontSize:'18px', fontWeight: '500',textDecoration:'none',color:'#FFF' }}>
									Contact Us
						</NavLink>
						

					


                    
					
			</div>
		</>
	)

	// return ReactDOM.createPortal(content, document.getElementById('navbar'))
	return content
}

export default Navbar