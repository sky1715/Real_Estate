import React from 'react'
import "./Contact.css"
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from "react-icons/bs"
import{HiChatBubbleBottomCenter} from "react-icons/hi2"
const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className=' c-container'>
        {/* left side */}
         <div className=' c-left'>
              <span className='orangeText'>Our Contact</span>
              <span className='primaryText'>Easy to Contact us</span>
              <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>

            <div className='flexColStart contactModes' >
                {/* first mode  */}
                <div className='flexStart row'>
                    <div className='flexColCenter mode'>
                        <div className='line'>
                            <div className=' icon'>
                            <MdCall size={24}  />
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Call</span>
                                <span className='secondaryText'>021 123 145 14</span>
                            </div>

                        </div>
                        <div className=' button'>Call Now</div>
                    </div>

                    {/* second Mode  */}
                    <div className='flexColCenter mode chat'>
                        <div className='line'>
                            <div className=' icon'>
                            <BsFillChatDotsFill size={24}  />
                            </div>
                            <div className='flexColStart detail '>
                                <span className='primaryText'> Chat</span>
                                <span className='secondaryText'>021 123 145 14</span>
                            </div>

                        </div>
                        <div className=' button'>Chat Now</div>
                    </div>
                </div>

                {/* 3 row */}

                <div className='flexStart row'>
                    <div className='flexColCenter mode'>
                        <div className='line'>
                            <div className=' icon'>
                            <BsFillChatDotsFill size={24}  />
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Viddeo Call</span>
                                <span className='secondaryText'>021 123 145 14</span>
                            </div>

                        </div>
                        <div className=' button'>Viddeo Call Now</div>
                    </div>

                    {/* 4 Mode  */}
                    <div className='flexColCenter mode Message'>
                        <div className='line'>
                            <div className=' icon'>
                            <HiChatBubbleBottomCenter size={24}  />
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Message</span>
                                <span className='secondaryText'>021 123 145 14</span>
                            </div>

                        </div>
                        <div className=' button'>Message Now</div>
                    </div>
                </div>

            </div>


         </div>
        {/* right Side */}

        <div className='  c-right'>
            <div className='image-conatiner'>
                <img src='./contact.jpg' alt='' className='image'></img>
            </div>
        </div>
        </div>  


    </section>
  )
}

export default Contact
