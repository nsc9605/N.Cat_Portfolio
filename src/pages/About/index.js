import React from "react";
import ContainerFluid from "../../components/ContainerFluid/index";
import profile from "../../assets/img/self.jpeg";


function About() {
  return (
    <div>
        <ContainerFluid>
          <h2 className="subheading">
              About Me
          <img src={profile} alt="Nicole Catapano" className="profile-img float-right m-4 img-fluid rounded pull-right" />
         </h2>
          <p className="">
            I am originally from St. Louis, MO but currently live in Brooklyn,
            NY. I earned my B.A. in Recreation Therapy and minor in Psychology
            from the University of North Carolina at Wilmington in 2013. I later
            realized I was much more interested in getting involved in the tech
            world and thats what lead me to obtaining a Full Stack Web
            Development Certification from University of North Carolina at
            Charlotte. I have been bartending since graduation in New York City
            which has allowed me to network and figure out what industry I truly
            would like to work in and that is tech. This has allowed me to make
            a career change but I will be taking all the useful skills I have
            developed after 15+ years in the service industry field.
          </p>

          <h3 className="skills">
            Technical Skills
          </h3>
          <p>
            HTML5 ﹒ CSS3 ﹒ JavaScript ﹒ jQuery ﹒ Express ﹒ Node.js ﹒ Handlebars ﹒ ES6 ﹒ MySQL ﹒ MongoDB ﹒ NoSQL ﹒ GitHub ﹒ API ﹒ Bootstrap 
          </p>
          
      </ContainerFluid>
    </div>
  );
}

export default About;
