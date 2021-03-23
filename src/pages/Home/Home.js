import React from "react";
import homeImg from "../../assets/img/home.jpeg";


function Home() {
    return(
        <div className="container">
            <h1 subheading="Home">Hello, Welcome!</h1>
                <img src={homeImg} alt="Home" className="rounded m-3 float-right homeImg"></img>
            <h3>Creator, Problem Solver, Explorer, Developer</h3>
        </div>

    )
}

export default Home;