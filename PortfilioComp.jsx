import React from 'react'

import {Link} from 'react-router-dom'


const PortfilioComp = () => {
  return (
    <div className='PortfilioComp-Conatiner'>
      
        {/* <img src="/assets/tattooporfilioimg.jpg" alt="" /> */}

        <div className="img0container">
        <img src="https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Skull-Graphic-With-Harley-Metallica-ACDC-IRON-Maiden-Punk-Snakes-43203235-1.png" alt="" />
        </div>

        <div className="text-container">
            <h1>Take a look at <br /> our tattoo <br /> portfolio</h1>
            <p>
            There was this really rock  roll guy who was very obviously dragged to <br></br>my concert 
            by his girlfriend. He had tattoos all over
            </p>
            <Link to=''>
            <button>Browse portfolio</button>
            </Link>

        </div>
    </div>
  )
}

export default PortfilioComp