import logo from '../Images/AlpLogo.png'

function Navbar() {

    const NavbarLink = [
        {id:1, link:"#about", name:"Hakkımda"},
        {id:2, link:"#resume", name:"Özgeçmiş"},
        {id:3, link:"#project", name:"Projeler"},
        {id:4, link:"#testimonials", name:"Referanslar"},
        {id:5, link:"#contact", name:"İletişim"}
    ]

    const NavElementList = NavbarLink.map(index => (<li className="nav2" key={index.id}>
        <a className="nav-button" href={index.link}>{index.name}</a>
    </li>))

    return(
        <nav className="navbar fixed-top mt-3" id="navigation-bar">
            <div className="container">
            <a class="navbar-brand" href="#">  
                <img src={logo} alt="Logo" width="143,8px" height="43px" />
            </a>
            <ul class="nav justify-content-end mx-5">
                {NavElementList}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar