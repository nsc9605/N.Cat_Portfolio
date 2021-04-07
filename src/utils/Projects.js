import Employee_Directory from '../assets/img/Employee-Directory.gif';
import Scheduler from '../assets/img/header1.png';
import Buns from '../assets/img/graphs.png';
import Burger from '../assets/img/burg.png';
import EmpTracker from '../assets/img/all_roles.png';
import Luck from '../assets/img/luck.png';
import Music from '../assets/img/music.png';

    export const projects = [
        {
            id: 1,
            title: "Employee Directory",
            description: "React App that allows a manager to view non-sensitive data about other employees using React. Allows the user to filter employees by letters in name and sort by name.",
            tags: [ "React", '﹒', "JavaScript", '﹒', "HTML", '﹒', "CSS", '﹒', "API" ],
            image: Employee_Directory,
            repo: "https://github.com/nsc9605/Employee_Directory",
            deploy: "https://nsc9605.github.io/Employee_Directory"
    
        },
        {
            id: 2,
            title: "React Workday Scheduler",
            description: "This is a simple weekly calendar for the average work day of 8-5pm using React. The time blocks change color for past, present, future depending on user\ns current time.",
            tags: [ "React", '﹒', "Node.js", '﹒', "JavaScript", '﹒', "HTML", '﹒', "CSS" ],
            image: Scheduler,
            repo: "https://github.com/nsc9605/React-WorkDay_Scheduler.git",
            deploy: "https://nsc9605.github.io/React-WorkDay_Scheduler/"
        },
        {
            id: 3,
            title: "Move Those Buns!",
            description: "This is a fitness tracker that allows a user to create and track daily workouts with the option to Continue Workout or create New Workout.",
            tags: [ "MongoDB", '﹒', "Mongoose", '﹒', "NoSQL", '﹒', "Morgan", '﹒', "JavaScript", '﹒', "HTML", '﹒', "CSS", '﹒', "Heroku" ],
            image: Buns,
            repo: "https://github.com/nsc9605/Move_Those_Buns.git",
            deploy: "https://move-those-buns.herokuapp.com/"
        },
        {
            id: 4,
            title: "Burger Boss",
            description: "Application that follows the MVC design pattern to create, update, and delete burgers from a list .",
            tags: [ "MySQL", '﹒', "Node.js", '﹒', "Express", '﹒', "Handlebars", '﹒', "MVC-Framework", '﹒', "JavaScript", '﹒', "HTML", '﹒', "CSS" ],
            image: Burger,
            repo: "https://github.com/nsc9605/Burger-Boss.git",
            deploy: "https://burger-boss-catapano.herokuapp.com/"
        },
        {
            id: 5,
            title: "MySQL Employee Tracker",
            description: "CLI-based application which is aimed to help companies keep track of their employees, departments and roles of a large company.",
            tags: [ "MySQL", '﹒', "Node.js", '﹒', "JavaScript", '﹒', "CLI" ],
            image: EmpTracker,
            repo: "https://github.com/nsc9605/MySQL_Employee-Tracker.git",
            deploy: "https://drive.google.com/file/d/1uYEu8ud4B6lMZuqcg8MWIQ3SgX4ao1ec/view"
        },
        {
            id: 6,
            title: "Test Your Luck",
            description: "This application will allow you to place bets between two teams using an API which will be stored in the database as well as each team, bet amount, and new amount.",
            tags: [ "MySql", '﹒', "Express", '﹒', "Node.js", '﹒', "JavaScript", '﹒', "Handlebars", '﹒', "Axios", '﹒', "HTML", '﹒', "CSS" ],
            image: Luck,
            repo: "https://github.com/nsc9605/Test_Your-Luck.git",
            deploy: "https://test-your-luck.herokuapp.com/"
        },
        {
            id: 7,
            title: "Music Junkies",
            description: "Music application that shows the top 5 songs in history for a given date. Provides a link to a music video as well as a biography page on the #1 artist.",
            tags: [ "jQuery", '﹒',  "APIs", '﹒', "JavaScript", '﹒', "HTML", '﹒', "CSS" ],
            image: Music,
            repo: "https://github.com/nsc9605/MusicJunkies.git",
            deploy: "https://test-your-luck.herokuapp.com/"
        },
        {
            id: 8,
            title: "Test Your Luck",
            description: "This application will allow you to place bets between two teams using an API which will be stored in the database as well as each team, bet amount, and new amount.",
            tags: [ "MySql", '﹒', "Express", '﹒', "Node.js", '﹒', "JavaScript", '﹒', "Handlebars", '﹒', "Axios", '﹒', "HTML", '﹒', "CSS" ],
            image: Luck,
            repo: "https://github.com/nsc9605/Test_Your-Luck.git",
            deploy: "https://test-your-luck.herokuapp.com/"
        },
        {
            id: 9,
            title: "Test Your Luck",
            description: "This application will allow you to place bets between two teams using an API which will be stored in the database as well as each team, bet amount, and new amount.",
            tags: [ "MySql", '﹒', "Express", '﹒', "Node.js", '﹒', "JavaScript", '﹒', "Handlebars", '﹒', "Axios", '﹒', "HTML", '﹒', "CSS" ],
            image: Luck,
            repo: "https://github.com/nsc9605/Test_Your-Luck.git",
            deploy: "https://test-your-luck.herokuapp.com/"
        }
       
    ];



export default projects;