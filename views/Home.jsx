const { Link, NavLink } = ReactRouterDOM


export function Home() {
    return <div className="home-layout animate__animated animate__fadeIn ">
    <div className="container">
        <h1 className="title animate__animated animate__fadeIn">appSus</h1>
        <p className="description animate__animated animate__fadeIn">Your all-in-one app solution.</p>
        <div className="apps animate__animated animate__zoomIn">
            <NavLink to="/mail" className="app-link mail-app">Gmail App</NavLink>
            <NavLink to="/note" className="app-link keep-app">Keep App</NavLink>  
        </div>
    </div>
    <div className="waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
    </div>
</div>
}


            