

export function About() {
    return (
        <div className="about-layout-cards">

            <div className="member-card">
                <img src="./../assets/img/saharImg.jpeg" alt="" />
                <h3 className="member-name">Sahar Machpud</h3>
                <p className="member-role">Coding Academy</p>
            </div>

            <div className="member-card">
                <img src="./../assets/img/reutImg.jpg" alt="" />
                <h3 className="member-name">Reut Edry</h3>
                <p className="member-role">Coding Academy</p>
            </div>

            <p className="shared-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate dolorum, fuga culpa iste soluta maiores vel tempora quae magnam sequi obcaecati quis quia amet et eos sed quasi fugiat minus ipsam, mollitia consequuntur! Ad suscipit ipsa minima eos itaque.
            </p>

            <div className="about-waves">
                <div className="about-wave about-wave1"></div>
                <div className="about-wave about-wave2"></div>
                <div className="about-wave about-wave3"></div>
            </div>
       
        </div>
    );
}
