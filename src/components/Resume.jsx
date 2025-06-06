import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <p className="name-heading"><strong>Lee-Ann Coombes</strong></p>

            <img src="/profile-picture.jpg" alt="Profile" className="profile-picture" />

            <div style={{ padding: "2rem", fontFamily: "Arial" }}>

                {/* Work Experience */}
                <h2>💼 Work Experience</h2>
                <ul>
                    <li>
                        <strong>LMS Administration and Design</strong> at TDS Training Development Services (2020-2021)
                        <br />
                        My responsibilities covered various aspects including preparing and designing course materials, installing
                        and configuring Moodle learning platforms for clients, and ensuring the smooth operation of their
                        learning environments. I provided clients with hands-on training and guidance on how to effectively use
                        the Moodle platform, working closely with team members to implement various design and teaching
                        methods tailored to each client's needs. In addition, I took over the maintenance and administration of the
                        TDS Learning Management System, ensuring its optimal performance and reliability.
                    </li>
                    <li>
                        <strong>Office Management and Training Assistant</strong> at TDS Training Development Services (2018-2019)
                        <br />
                        My responsibilities included customer communications, monitoring student registrations, inventory management,
                        processing invoices and quotes, managing cash transactions, and maintaining the company's website and social media presence.
                    </li>
                    <li>
                        <strong>Assistant Training Manager</strong> Abasizwe NGO (2014-2016)
                        <br />
                        In 2014 I was introduced to Moodle. My responsibilities included to support the Abasizwe Training Team in preparing course materials
                        and training initiatives in the Health and Welfare Department, uploading and updating course materials to Abasizwe's Moodle platform,
                        facilitating student enrollment and registration, and coordinating in fundraising for the department.
                    </li>
                    <li>
                        <strong>Office Manageress</strong> Abasizwe NGO (2009-2013)
                        <br />
                        My responsibilities included handling day-to-day administrative tasks, liaising with clients, providing salary advice, managing invoices
                        and estimates, monitoring petty cash and coordinating fundraising events.
                    </li>
                </ul>

                {/* Skills */}
                <h2>🛠️ Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Git & Github</li>
                    <li>UI/UX Design</li>
                    <li>Moodle LMS</li>
                </ul>

                {/* Education */}
                <h2>🎓 Education</h2>
                <p><strong>Frontend Development Professional Certification</strong> - Coursera/IBM • USA (2025)</p>
                <p><strong>MEC Moodle Educator Certification</strong> - Eummena/Moodle • Belgium (2023)</p>
                <p><strong>Accounting & trial balance program</strong> - ICB • South Africa, Cape Town (2016)</p>
                <p><strong>Grade 11-12</strong> - lntec College • South Africa, Durban (2002)</p>
                <p><strong>Grade 10</strong> - Newton Technicon High School • South Africa, Pietermaritzburg (2000)</p>

                {/* Contact Info */}
                <h2>📫 Contact</h2>
                <p><strong>Email:</strong> leecoombes@mail.de</p>
                <p><strong>Linkedin:</strong> https://www.linkedin.com/in/lee-ann-c-917a44215/</p>
                <p><strong>Contact Number:</strong> +49151 6502 7850</p>
                <p><strong>DOB:</strong> 14.01.1985</p>
                <p><strong>Languages:</strong> English (Mother Tongue), Afrikaans (Good Understanding), German (A1 Basic Level)</p>
            </div>

            {/* Certificates Section */}
            <section className="resume-section">
                <h2>Certificates</h2>
                <div className="certificates">
                    <img src="/certificate1.jpg" alt="Certificate1" />
                    <img src="/certificate2.jpg" alt="Certificate2" />
                </div>
            </section>

            {/* Download Button */}
            <a href="/resume.pdf" download className="download-button">
                Download My Resume (PDF)
            </a>
        </div>
    );
};

export default Resume;
