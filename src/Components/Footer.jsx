import React from 'react'
import "../Styles/SixReason.css"

const Footer = () => {
  return (
    <>
        <div className='bg-dark'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p style={{color:"grey", fontSize:"20px"}}>Region – EN</p>
                        <select className=' form-control form-select-sm' style={{backgroundColor:"grey", width:"60%", color:"white", border:"none", fontWeight:"700", fontSize:"22px"}}>
                            <option>United Kingdom</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='' style={{color:'white', textAlign:"end", fontSize:"100px", fontWeight:"800"}}>valcon</h1>
                    </div>
                </div>
                <div style={{textAlign:"end", marginTop:"120px"}}>
                    <a className='footanc'>© 2024 • Valcon</a>
                    <a className='footanc'>Privacy and cookie policy</a>
                    <a className='footanc'>Modern slavery policy</a>
                    <a className='footanc'>Carbon reduction plan</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer