import ProfilePicture from '../Images/Profile.jpg'

function About() {
    const Information = [
        { id: 1, title: 'Yaş', info: 23 },
        { id: 2, title: 'E-Posta', info: 'alperenataseven.3@gmail.com' },
        { id: 3, title: 'Adres', info: 'Istanbul, Türkiye' },
    ]

    const mapInfo = Information.map(index => (<div className="row" key={index.id}>
        <div className="col-sm-2">
            <div className="pb-1">{index.title} :</div>
        </div>
        <div className="col-sm-10">
            <div className="pb-1 fw-bolder">{index.info}</div>
        </div>
    </div>))

    return (
        <>
            <div className="container about-text">
                <div className="row">
                    <div className="col-md-6 text-center p-5 text-light" id='about-picture'>
                        <img src={ProfilePicture} class="img-thumbnail" alt="ProfilePicture" />
                    </div>
                    <div className="col-md-6 p-5 mt-5">
                        <h1 className="fs-3 text-light">Merhaba! Ben Alperen ATASEVEN</h1>
                        <br />
                        <p className="text-light">İstanbul Gedik Üniversitesi Yönetim Bilişim Sistemleri
                            4. sınıf öğrencisiyim. Kendimi Web ve Mobil Programlama alanlarında geliştiriyorum.</p>
                        <br />
                        <div class="row mt-3 text-light">
                            {mapInfo}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About