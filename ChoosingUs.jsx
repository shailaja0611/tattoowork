import React from 'react'


const ChoosingUs = () => {
  return (
    <div className='block'>
       <div className='container1'> 
          <h1>Why Choosing Us</h1>
          <p>I like tattoos. I'm gonna be covered. I'm not going to touch my face <br></br> under the chin on the neck: it's my least favorite place.<br></br>
          </p>

           <div className='contain'>
            <div className='img1'>
                <img src="https://cdn.prod.website-files.com/63e146b13f318ece894576af/63e146b13f318e1131457739_icon-professional-tattoo-artists-tattooist-webflow-template.svg" alt="Icon1"/>
            </div>
            <div className='content1'>
                <h2>Professional Tattoo Artists</h2>
                <p>Magna nisl egestas amet netus lectus <br />Malesuada diamrper et in lorem ist.</p>
            </div>

           
           </div>

           <div className='contain'>
            <div className='img1'>
                <img src="https://cdn.prod.website-files.com/63e146b13f318ece894576af/63e146b13f318e293045773a_icon-premium-designs-tattooist-webflow-template.svg" alt="Icon2"/>
            </div>
            <div className='content1'>
                <h2>Premium Designs</h2>
                <p>Magna nisl egestas amet netus lectus <br />Malesuada diamrper et in lorem ist.</p>
            </div>

           
           </div>

          <button className='choosebtn'>More About Our Studio</button>
       </div>

       <div className='container2'>
          <img className='image1' src="https://assets-global.website-files.com/63e146b13f318ece894576af/63e146b13f318e20ef45773c_image-why-choosing-us-up-tattooist-webflow-template-p-500.jpg"/>
          <img className='image2'src="https://assets-global.website-files.com/63e146b13f318ece894576af/63e146b13f318ea18a45773b_image-why-choosing-us-down-tattooist-webflow-template-p-500.jpg" />
          
        </div>
       
    </div>
  )
}

export default ChoosingUs


