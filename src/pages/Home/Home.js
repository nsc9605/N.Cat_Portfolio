import React from "react";
// import homeImg from "../../assets/img/home.jpeg";
import home from "../../assets/img/home.jpg";
import Container from "react-bootstrap/Container"


function Home() {
    return(
        // <div className="container">
        <Container>
            <h2 subheading="Home">THIS IS ME</h2>
                {/* <img src={homeImg} alt="Home" className="rounded m-3 float-right homeImg"></img> */}
                <img src={home} alt="Home" className="rounded m-3 float-right homeImg"></img>
            <h3>
                Creator 
                <span>
                    <p className="indent ml-5 p-2">[ Problem Solver ]</p>
                </span> 
                Explorer 
                <span>
                    <p className="indent ml-5 p-2"> [ Developer ]</p>
                </span>
            </h3>
            </Container>
        // {/* </div> */}

    )
}

export default Home;