import ContactIcons from "./ContactIcons";


function Hero() {
    return (
        <header className="hero">
            <div className="header-container">
                <h1 className="hero-title">
                    Isaac<br/>
                    Litzenberger
                </h1>
                <hr/>
                <div className="seeking">
                    <strong>Location:</strong> San Francisco Bay Area<br/>
                    <strong>Seeking:</strong> Frontend Dev Position
                </div>
                <ContactIcons/>
            </div>
        </header>
    )
}

export default Hero
