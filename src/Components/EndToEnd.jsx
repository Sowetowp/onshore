import React from 'react'
import "../Styles/EndToEnd.css"
import chart from "../Assets/Images/chart-svgrepo-com.svg"
import tech from "../Assets/Images/computer-data-laptop-svgrepo-com.svg"
import consult from "../Assets/Images/brainstorming-idea-svgrepo-com.svg"

const EndToEnd = () => {
  return (
    <>
        <div className='container-xl'>
            <h1 className='weareyour'>We are your end-to-end delivery partner</h1>
            <div className='row'>
                <div className='col-md-4 pt-4 text-center'>
                    <h2 className='data mt-5'>Data</h2>
                    <img src={chart} className='myimagee2e mt-3'/>
                    <p className='datais mt-5'>Data is the new currency. Future success is defined by how well organisations can harness their data, learn from it and use it to inform their future. Our data people will work with you to define your data strategy and implement the best data solutions, from AI and robotics, to Master Data Managment to data platfoms.</p>
                </div>
                <div className='col-md-4 pt-4 text-center'>
                    <h2 className='data mt-5'>Technology</h2>
                    <img src={tech} className='myimagee2e mt-3'/>
                    <p className='datais mt-5'>echnology has reshaped the business world and continues to be the biggest driver of change. Our technologists are cutting edge, with in-depth knowledge of the latest developer-led, low-code or no-code solutions and applications.</p>
                </div>
                <div className='col-md-4 pt-4 text-center'>
                    <h2 className='data mt-5'>Consulting</h2>
                    <img src={consult} className='myimagee2e mt-3'/>
                    <p className='datais mt-5'>Consulting is the glue that connects our capabilities to deliver successful transformations. We focus on helping clients define the strategy to ensure their businesses are future fit and put the right blend of expertise together to deliver the programmes and projects to achieve their goals.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default EndToEnd