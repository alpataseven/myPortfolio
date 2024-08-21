import coding from '../Images/coding.png'
import web from '../Images/computer.png'
import database from '../Images/database-storage.png'
import mobile from '../Images/mobile-development.png'
import Skills from './Skills'

export default function Talents() {

    const TalentList = [
        { id: 1, imgLink: coding, name: "Web Geliştirme" },
        { id: 2, imgLink: web, name: "Mobil Geliştirme" },
        { id: 3, imgLink: database, name: "Veritabanı" },
        { id: 4, imgLink: mobile, name: "Masaüstü Uyg." }
    ]

    const TalentBox = TalentList.map(index => (
        <div className="col-sm-3">
            <div className="card" style={{ width: '13rem', margin: 'auto' }}>
                <img src={index.imgLink} alt="..." className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center">{index.name}</h5>
                </div>
            </div>
        </div>
    ))

    return (
        <>
            <div className="container">
                <h1 className="text-center mb-5 text-light">Yeteneklerim</h1>
            </div>
            <div className="container">
                <div className="row">{TalentBox}</div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 mx-auto mt-3 px-5">
                        <button className="btn-1">
                            <div className="original">GITHUB</div>
                            <div className="letters">
                                <a className='text-light' href="https://github.com/alpataseven" style={{ textDecoration: 'none' }}>
                                    <span>G</span>
                                    <span>I</span>
                                    <span>T</span>
                                    <span>H</span>
                                    <span>U</span>
                                    <span>B</span>
                                </a>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <Skills />
        </>
    )
}