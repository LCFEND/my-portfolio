import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <p><strong>Here are some of the projects I've worked on...</strong></p>
            <div className="project-cards">

                <div className="card">
                    <img src="/project1.png" alt="Project 1" />
                    <div className="card-content">
                        <h2>Medical Web App</h2>
                        <p className="brief">Book appointments, get medical advice, and connect with doctors anytime, anywhere.</p>

                        <div className="more-info">
                            <p>This web application was built during my studies the project involved building a medical App for StayHealthy Inc., a non-profit improving healthcare access in remote areas.</p>
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>Appointment Booking: The DoctorCard component saves doctor and appointment details to localStorage. When an appointment is canceled, the data is cleared and a storage event is dispatched to notify other components.</li>
                                <li>Notifications: The Notification component listens to localStorage changes and displays appointment details if a user is logged in.</li>
                                <li>Profile Management: ProfileCard fetches or updates user information through the mock API, storing results in sessionStorage for quick access </li>
                            </ul>

                            <p><strong>Tech Stack:</strong> React, Express (mock backend), LowDB, Docker, Webpack, Babel</p>
                        </div>

                        <a href="https://github.com/LCFEND/medical_app/tree/master" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>

                <div className="card">
                    <img src="/project2.png" alt="Project 2" />
                    <div className="card-content">
                        <h2>Portfolio Application</h2>
                        <p className="brief">A multi-page personal site using React...</p>
                        <div className="more-info">
                            This is my personal portfolio, built with React and React Router DOM. For testing, I integrated Formspree for email functionality. It showcases clean structure and reusable components.
                            <p><strong>Key Features:</strong></p>
                            <ul>
                                <li>Multi-page routing via React Router, with paths for “Home,” “About,” “Resume,” “Projects,” and “Contact.</li>
                                <li>SPA bootstrap with Vite, where BrowserRouter wraps the app for navigation</li>
                                <li>Portfolio Pages: Home, About, Resume, Projects, Contact showcases my accomplishments and professional experience</li>
                                <li>Contact: Form with validation and Formspree integration for submissions.</li>
                                <li>Styling: Responsive, animated layouts using component-specific CSS and media queries.</li>
                            </ul>

                        </div>
                        <a href="https://github.com/LCFEND/my-portfolio" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>

                <div className="card">
                    <img src="/project.png" alt="Project 3" />
                    <div className="card-content">
                        <h2>Project Title 3</h2>
                        <p className="brief">Short description about project 3...</p>
                        <div className="more-info">
                            Extended info about project 3 goes here.
                        </div>
                        <a href="https://yourprojectlinks.com" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>

                <div className="card">
                    <img src="/project.png" alt="Project 4" />
                    <div className="card-content">
                        <h2>Project Title 4</h2>
                        <p className="brief">Short description about project 4...</p>
                        <div className="more-info">
                            Extended info about project 4 goes here.
                        </div>
                        <a href="https://yourprojectlinks.com" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;
