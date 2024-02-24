import React from 'react'
import "../Styles/NavBar.css"
const NavBar = () => {
    return (
        <>
            <main className='bg-white fixed-top'>
                <div className='container py-3'>
                    <div className='d-flex justify-content-between' style={{alignItems:"center"}}>
                        <a className='logo'>Valcon</a>
                        <button className="mybutton">
                            Get in touch
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NavBar