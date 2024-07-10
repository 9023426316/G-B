import React from 'react'
import video1 from "./video/Background.mp4"

export default function section() {
  return (
    <div>

        <section>
          
      <div className='section-div'>
        <video src={video1} loop autoPlay muted className='main-video'></video>
      </div>
      <div className='section-div2'>
      <p className='section-p1'>Let's get together and start a</p>
        <p className='section-p2'>new journey in the world of</p>
        <p className='section-p3'>import export.</p>
      </div>
      </section>
    </div>
  )
}
