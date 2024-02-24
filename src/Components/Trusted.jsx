import React from 'react'
import "../Styles/Trusted.css"
import logo from "../Assets/Images/themify-logo-svgrepo-com.svg"

const Trusted = () => {
  return (
    <>
        <div className='trustback'>
            <div className='container'>
                <h1 className='wearetrust'>We're trusted by some of the biggest organisations to deliver their transformation needs</h1>
                <div className='row'>
                    <div className='col-md-3 text-center'>
                        <img style={{width:"150px"}} src={logo}/>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img style={{width:"150px"}} src={logo}/>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img style={{width:"150px"}} src={logo}/>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img style={{width:"150px"}} src={logo}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 text-center'>
                        <img style={{width:"150px"}} src={logo}/>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img style={{width:"150px"}} src={logo}/>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img style={{width:"150px"}} src={logo}/>
                    </div>
                    <div className='col-md-3 text-center'>
                        <img style={{width:"150px"}} src={logo}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Trusted