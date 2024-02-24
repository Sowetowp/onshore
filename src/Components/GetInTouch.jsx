import React from 'react'
import lady from "../Assets/Images/96I4957-1024x683-1.jpg"
const GetInTouch = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 p-md-5 p-3'>
                        <h1 style={{ fontWeight: "700", fontSize: "60px" }}>Get in touch</h1>
                        <p className='mt-4' style={{ fontWeight: "700", fontSize: "23px" }}>Get in touch today to find out how we can support your organisation in designing, implementing and operationalising Data Science solutions.</p>
                        <button className="mybutton">
                            Get in touch
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>
                    </div>
                    <div className='col-md-6 px-0'>
                        <img style={{width:"100%"}} src={lady}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouch