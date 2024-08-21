import HomePicture from '../Images/Development.png'
import CvButton from './CvButton';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Home() {
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-5 text-center mb-5" id='left-col'>
                        <img src={HomePicture} class="img" alt="ProfilePicture" style={{width:'50vh'}} />
                    </div>
                    <div className="col-7 text-center p-5" id='right-col'>
                        <h1 className='fs-8 text-center mb-3'>Alperen ATASEVEN</h1>
                        <hr style={{border:'1px solid #fff', borderRadius:'10px'}} />
                        <h1 id='animation-text' className='fs-4 text-center margin-h1'>Yönetim Bilişim Sistemleri Öğrencisi</h1>
                        <br />
                        <CvButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home