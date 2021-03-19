import React from "react";
import ContainerFluid from "../../components/ContainerFluid/index";
import Project from "../../components/Project/Project";
// import projects from "../../utils/Project_List";

function Portfolio() {

  const projects = [
    {
        id: '1',
        title: 'Employee Tracker',
        description: 'React App that allows a manager to view non-sensitive data about other employees using React. Allows the user to filter employees by letters in name and sort by name.',
        tags: [ 'React', 'JavaScript', 'HTML', 'CSS', 'API' ],
        image: 'https://',
        repo: 'https://github.com/nsc9605/Employee_Directory',
        deploy: 'https://nsc9605.github.io/Employee_Directory'

    },
    {
        id: '2',
        title: 'React Workday Scheduler',
        description: 'This is a simple weekly calendar for the average work day of 8-5pm using React. The time blocks change color for past, present, future depending on user\ns current time.',
        tags: [ 'React', 'Node.js', 'JavaScript', 'HTML', 'CSS' ],
        image: '',
        repo: 'https://github.com/nsc9605/React-WorkDay_Scheduler.git',
        deploy: 'https://nsc9605.github.io/React-WorkDay_Scheduler/'
    },
    {
        id: '3',
        title: 'Move Those Buns!',
        description: 'This is a fitness tracker that allows a user to create and track daily workouts with the option to Continue Workout or create New Workout.',
        tags: [ 'MongoDB', 'Mongoose', 'NoSQL', 'Morgan', 'JavaScript', 'HTML', 'CSS', 'Heroku' ],
        image: '',
        repo: 'https://github.com/nsc9605/Move_Those_Buns.git',
        deploy: 'https://move-those-buns.herokuapp.com/'
    },
    {
        id: '4',
        title: 'Burger Boss',
        description: 'Application that follows the MVC design pattern to create, update, and delete burgers from a list using Node, Express, Handlebars, MySQL and ORM.',
        tags: [ 'MySQL', 'Node.js', 'Express', 'Handlebars', 'MVC-Framework', 'JavaScript', 'HTML', 'CSS' ],
        image: '',
        repo: 'https://github.com/nsc9605/Burger-Boss.git',
        deploy: 'https://burger-boss-catapano.herokuapp.com/'
    },
    {
        id: '5',
        title: 'MySQL Employee Tracker',
        description: 'CLI-based application which is aimed to help companies keep track of their employees, departments and roles of a large company.',
        tags: [ 'MySQL', 'Node.js', 'JavaScript', 'CLI' ],
        image: '',
        repo: 'https://github.com/nsc9605/MySQL_Employee-Tracker.git',
        deploy: ''
    },
    {
        id: '6',
        title: 'Test Your Luck',
        description: 'This application will allow you to place bets between two teams using an API which will be stored in the database as well as each team, bet amount, and new amount.',
        tags: [ 'MySql', 'Express', 'Node.js', 'JavaScript', 'Handlebars', 'Axios', 'HTML', 'CSS' ],
        image: '',
        repo: 'https://github.com/nsc9605/Test_Your-Luck.git',
        deploy: 'https://test-your-luck.herokuapp.com/'
    },
   
];



  return (
    <ContainerFluid id="portfolio" title="Portfolio">
      <div className="card">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            repo={project.repo}
            deploy={project.deploy}
          ></Project>
        ))}
      </div>
    </ContainerFluid>
  );
}

export default Portfolio;


//   const [getProjects, setGetProjects] = useState({
//       title: '',
//       description: '',
//       image: '',
//       repo: '',
//       deploy: '',
//   })
    // const { title, description, image, repo, deploy } = projects();

//   useEffect(() => {
//       projects.getProjects.then((res) => {
//         setGetProjects(res.project);
//         console.log(res.project)
//       })
//   },[])