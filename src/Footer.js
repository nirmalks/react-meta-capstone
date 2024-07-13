function Footer() {
    return (
        <footer className="flex-row footer">
                <section className="flex-column">
            <img alt="Little lemon logo" src="logo.png" className="logo"/>
            </section>
            <section className="flex-column">
                <h4>Navigation</h4>
                <nav>
                    <ul>
                        <li><a href="/home" key={'home'}>Home</a></li>
                        <li><a href="#about" key={'about'}>About</a></li>
                        <li><a href="#menu" key={'menu'}>Menu</a></li>
                        <li><a href="#reservations" key={'reservations'}>Reservations</a></li>
                        <li><a href="#orders" key={'orders'}>Order Online</a></li>
                        <li><a href="#login" key={'login'}>Login</a></li>
                    </ul>
                </nav>
            </section>

            <section className="flex-column">
                <h4>Contact</h4>
                <p>Chennai, India</p>
                <p>1234567890</p>
                <p>email</p>
            </section>

            <section className="flex-column">
                <h4>Socials</h4>
                <nav>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </nav>
            </section>
        </footer>
    );
}

export default Footer;