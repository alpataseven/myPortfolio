import ProfilePicture from '../Images/Profile.jpg'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import CvButton from './CvButton';

function About() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center" id="left-col">
                        <img src={ProfilePicture} class="img-thumbnail" alt="ProfilePicture" />
                    </div>
                    <div className="col text-center p-5" id="right-col">
                        <h1 className='fs-8 text-center mb-3'>Alperen ATASEVEN</h1>
                        <hr />
                        <h1 className='fs-4 text-center'>Yönetim Bilişim Sistemleri Öğrencisi</h1>
                        <br />
                        <CvButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About