import React from 'react'
import "../Styles/SecTwo.css"
const SecTwo = () => {
    return (
        <>
            <div className='container-fluid sectwocont'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='wework'>We work with organisations across all sectors to help them deliver successful transformation, arm them with the latest technologies and use their data to help give them a competitive edge. Our mission is to combine these capabilities to help organisations create value in their transformation programmes.</p>
                        <ul class="image-list">
                            <li>Leading European consultancy</li>
                            <li>Promotes lasting positive change</li>
                            <li>1,750 expert advisors</li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <div className='mx-md-4 bg-white mb-5 p-md-5 p-3 formdiv'>
                            <h1 className='getintouch'>Get in touch to learn how we can help your business today</h1>
                            <form className='myform'>
                                <div className='myformdiv'>
                                    <p className='mb-0 label'>Name*</p>
                                    <input className='myinput' />
                                </div>
                                <div className='myformdiv'>
                                    <p className='mb-0 label'>Job title*</p>
                                    <input className='myinput' />
                                </div>
                                <div className='myformdiv'>
                                    <p className='mb-0 label'>Organisation*</p>
                                    <input className='myinput' />
                                </div>
                                <div className='myformdiv'>
                                    <p className='mb-0 label'>Email*</p>
                                    <input className='myinput' />
                                </div>
                                <div className='myformdiv'>
                                    <p className='mb-0 label'>Country*</p>
                                    <input className='myinput' />
                                </div>
                                <div className='myformdiv'>
                                    <p className='mb-0 label'>Message*</p>
                                    <textarea className='myinput' />
                                </div>
                                <button className="mybutton2">
                                    Send Now
                                    <div className="arrow-wrapper">
                                        <div className="arrow"></div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecTwo