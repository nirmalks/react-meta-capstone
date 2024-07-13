import Nav from './Nav';

function Header() {
    return (
        <header className='Header'>
            <div className='flex-row'>
                <img alt="Little lemon logo" src="logo.png" className="logo"/>
                <h1>Little Lemon</h1>
            </div>

            <Nav>
            </Nav>
        </header>
    );
}

export default Header;