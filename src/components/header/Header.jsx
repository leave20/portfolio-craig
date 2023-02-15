import './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-container-menu">
                <div className="header-container-logo">
                    <img src="/logoBlanco.svg" alt="logo"/>
                </div>
                <div className="header-container-presentation">
                    <h1>Craig Kem Castro Pairazaman</h1>
                    <h2>Software developer that specialize in the analysis, development and design of websites,
                        applications
                        and business systems.</h2>
                </div>
            </div>
        </div>

    );
}

export default Header;
