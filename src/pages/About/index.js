import React from "react";
import profile from "../../assets/img/self.jpeg";

function About() {
  return (
    <div className="container-lg ">
      <h2 className="subheading">About Me</h2>
      <div className="about-me">
        <p>
          <img
            src={profile}
            alt="Nicole Catapano"
            className="profile-img px-2 float-right m-4 pull-right img-fluid rounded"
          />
          I am a Full Stack Web Developer originally from St. Louis, MO trained
          in the MERN Stack based in Brooklyn, NY acquiring a Certificate
          through University of North Carolina at Charlotte.
        </p>
        <p>
          I earned a B.A. in Recreation Therapy from the University of North
          Carolina at Wilmington in 2013, however, later realizing I had a
          larger interest in getting involved in tech. I am a natural problem
          solver and love challenging myself. After graduating in 2013, I moved
          to New York City where I have been bartending. I
          entered the Full Stack Program with no technical background besides a
          few classes in high school. After years of being out of school, I
          managed to maintain an A+ average and dedicating my spare time in furthering
          my education through research and studying, which was not difficult as
          I am truly interested in learning more and mastering my skills.
        </p>
        <p>
          I excel in communication, collaboration as well as working on my own.
          From working in very fast-paced bars in Manhattan, I have gained the
          ability to work very well under pressure, stay calm and manage my time
          the best which I have carried with me in developing apps. I have also
          gained the ability to start up a conversation easily with just about
          anyone while staying professional, which I believe will be great for
          when dealing with clients. I look forward to the challenges and
          obstacles coding will bring and am ready to start this new journey in
          life! I enjoy both the front and back end of coding as I make sure to
          make applications functional as well as focused on making the
          appearance of the app just as important.
        </p>
      </div>
      <h2 className="skills">Technical Skills</h2>
      <h4>
        HTML5 ﹒ CSS3 ﹒ JavaScript ﹒ jQuery ﹒ Express ﹒ Node.js ﹒
        Handlebars ﹒ ES6 ﹒ MySQL ﹒ MongoDB ﹒ NoSQL ﹒ GitHub ﹒ API ﹒
        Bootstrap
      </h4>
    </div>
  );
}

export default About;
