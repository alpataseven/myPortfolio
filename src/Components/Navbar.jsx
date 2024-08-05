import logo from '../Images/AlpLogo.png'

function Navbar() {

    const NavbarLink = [
        { id: 1, link: "#aboutLink", name: "Hakkımda" },
        { id: 3, link: "#talentLink", name: "Yetenekler" },
        { id: 4, link: "#projectLink", name: "Projeler" },
        { id: 6, link: "#contactLink", name: "İletişim" }
    ]

    const NavElementList = NavbarLink.map(index => (<li className="nav2" key={index.id}>
        <a className="nav-button" href={index.link}>{index.name}</a>
    </li>))

    return (
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