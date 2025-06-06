import React from "react";
import "./About.css";


const About = () => {
    return (
        <section className="about">
            <h1>About Me</h1>
            <img src="/profile-picture.jpg" alt="Profile" className="profile-picture" />
            <p><strong>Hello and welcome to my portfolio!</strong></p>
            <br />

            <p> My name is Lee-Ann Coombes, and I am excited to share my journey with you as a newcomer to the world of coding. With a recent Frontend Development Certification from IBM, I am diving deeper into frontend development and currently exploring React.js.

                The transition into coding came from my desire to continually grow and challenge myself.</p> <p>Throughout my career as a Certified Moodle Educator, I was always intrigued by the technical side of education technology. I found myself deeply engaged in the process of setting up and customizing Learning Management Systems (LMS) and realized that I had a strong interest in how technology shapes learning experiences.</p> <p>This curiosity led me to explore coding, and I soon discovered that it offers endless opportunities for creativity and problem-solving.

                The ability to tweak code and see how it transforms the functionality and user experience is something that really excites me. The more I learned, the more I became motivated to dive deeper into frontend development, which led me to pursue my certification and further my skills in JavaScript and React.js.</p> <p>I’m also eager to expand my knowledge by learning AngularJS and other libraries to build a well-rounded toolkit.

                My background in working with Moodle and other LMS platforms has provided me with a solid foundation in understanding how technology enhances learning. Now, I’m eager to apply this knowledge to the world of frontend development, where I can continue to explore how technology can be used to create meaningful and impactful experiences.</p>
        </section>
    );
};

export default About;