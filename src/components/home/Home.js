import React from 'react'
import styles from './Home.module.css'
import IMG from '../assets/gyms.jpg';
import Modals from '../login-sign/modal';
// import Modules from '../login-sign/modal'

export default function Home() {
  return (
    <section id="#" className={styles.home_section}>
      <div className={styles.home_section_one}>
        <div className={styles.home_content}>
         {/* <h1> “Push yourself, Because No one else is going to do it for you”  </h1> */}
         <h1> “PUSH YOURSELF,<br /> BECAUSE <br /> NO ONE ELSE <br /> IS GOING TO <br /> DO IT FOR YOU”  </h1>

         <button>
           Welcome..
          </button>
          <Modals/>
          {/* <Modules/> */}
        </div>
        <div className={styles.home_image}>
          <img src={IMG} alt='HOME'/>
        </div>
      </div>

    </section>
  )
}