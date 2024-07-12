function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="/home" key={'home'}>Home</a></li>
                <li><a href="#about" key={'about'}>About</a></li>
                <li><a href="#menu" key={'menu'}>Menu</a></li>
                <li><a href="#reservations" key={'reservations'}>Reservations</a></li>
                <li><a href="#orders" key={'orders'}>Order Online</a></li>
                <li><a href="#login" key={'login'}>login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;