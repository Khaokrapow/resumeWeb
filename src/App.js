import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="resume-container">

      <div className="left-profile" >
        
        <img src="me8.png" alt="Profile" className="profile-image" />
        
        <section className="about-me">
          <h2>About Me</h2>
          <p>As a fourth-year student with a passion for web and app development, I’m seeking opportunities to apply and enhance my skills in the industry</p>
        </section>

        <section className="education">
          <h2>Education</h2>
          <p>2021 - Present</p>
          <p>Kasetsart University</p>
          <p>Computer Science</p>
          <p>GPA: 2.80</p>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <p>Python</p>
          <p>SQL</p>
          <p>Java</p>
          <p>C</p>
          <p>C#</p>
          <p>C++</p>
          <p>JavaScript</p>
          <p>HTML</p>
          <p>CSS</p>
        </section>

        <section className="expertise">
          <h2>Expertise</h2>
          <p>Testing</p>
          <p>UI/UX</p>
          <p>Database</p>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>
            <img src="email.png" alt="Email Icon" className="icon" />
            Email: kasama.lekmad@gmail.com
          </p>
          <p>
            <img src="phone.png" alt="Phone Icon" className="icon" />
            Phone: 087-313-4352
          </p>
      </section>
        
      </div>

      <div className="right-profile">
        
        <section className="name">
          <h1>KASAMA LEKMAD</h1>
          
        </section>
        
        


        

        <section className="experience">

          <div className="project-experience">
            <h2>Project Experience</h2 >
          </div>
          
          <h4> 2024 - Present</h4>

          <div className="experience-item">
            <h3>Management System Testing </h3>
            <p>Testing the clothing manufacturing work management system to identify errors and report findings to the developer for system improvement</p>
          </div>

          <div className="experience-item">
            <h3>Apple Yield Prediction</h3>
            <p>Solving apple yield prediction problems from datasets using Python and comparing the performance of various algorithms</p>
          </div>

          <div className="experience-item">
            <h3> KasetFairVerse</h3>
            <p>Create Chatbot NPC that answer question about kasetfair with Python and JSON</p>
            <p> Test and improve chatbot responses</p>
          </div>

          <h4>2023</h4>

          <div className="experience-item">
            <h3> Drink Management Store Application</h3>
            <p>Create application about bubble tea shop management by using JAVA language</p>
            <p>Designed database with SQL to manage information about the shop</p>
          </div>

          <div className="experience-item">
            <h3> AR Game Application</h3>
            <p>Create game application about car game using C# language with Unity Application</p>
            <p>Use Vuforia to track image and set game to AR</p>
          </div>

          <h4>2022</h4>

          <div className="experience-item">
            <h3>KU Report Application</h3>
            <p>Create an application for reporting student complaints in the university using JAVA language </p>
          </div>
          
        </section>

        
      </div>
    </div>
  );
};

export default App;
