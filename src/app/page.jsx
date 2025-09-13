"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaJs, FaPython, FaJava, FaPhp, FaLaravel, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin, FaBootstrap, FaDatabase, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
// import { ReactTyped } from "react-typed";
import CountUp from "react-countup";
import { useState,useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import dynamic from "next/dynamic";
const ReactTyped = dynamic(() => import("react-typed").then(mod => mod.ReactTyped), {
  ssr: false,
});
export default function Home() {
     useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            title: "DIGIRDP",
            desc: "Admin theme setup, REST APIs, and Next.js integration.",
            details: `• Worked with the team to set up an admin theme and develop REST APIs for data fetching and management.
• Integrated backend APIs with Next.js frontend for smooth data flow.
• Contributed to UI improvements, bug fixes, and overall performance optimization.`,
            tech: "Laravel, MySQL, Bootstrap",
        },
        {
            title: "Project Shelve",
            desc: "Vendor IOU module, payout system, vendor dashboard.",
            details: `• Diagnosed and fixed frontend & backend bugs (categories, items, vendor handling).
• Designed and developed a Vendor IOU module to track pending payments owed to vendors.
• Integrated payout request and approval workflows for transparency.
• Built a real-time vendor dashboard with balances, pending IOUs, and history.`,
            tech: "Laravel, MySQL, Custom Theme",
        },
        {
            title: "Call A Lawyer",
            desc: "Platform connecting lawyers with clients.",
            details: `• Built appointment booking, case management, and secure communication features.
• Added verification for lawyer profiles, case approvals, and financial transactions.
• Implemented activity logs to track every action for transparency.
• Developed role-based access control and secure booking modules.`,
            tech: "Laravel, MySQL, Bootstrap",
        },
        {
            title: "Property Management (Alekh Associates)",
            desc: "Automated generation of property documents.",
            details: `• Automated preparation of important property documents such as Banakhat, Dhastavej, and other legal documents.`,
            tech: "Laravel, MySQL, Bootstrap",
        },
        {
            title: "Fuel Management System",
            desc: "System for daily fuel, HR, and accounting management.",
            details: `• Designed a system to manage daily fuel filling entries and calculate average consumption.
• Added Accounting Module to track expenses, payments, and records.
• Built HR Module for employee management, attendance, and role-based access.`,
            tech: "Laravel, MySQL, Bootstrap",
        },
        {
            title: "Vibration Academy ERP",
            desc: "ERP for coaching classes.",
            details: `• Built a dynamic website for student management, payments, and ERP features.
• Implemented role-based access control (admins, teachers, students, staff).
• Added scholarship management with eligibility verification and tracking.
• Developed online exam form submission and result declaration.`,
            tech: "Laravel, MySQL",
        },
        {
            title: "Khusal Mobile ERP",
            desc: "ERP for mobile shop management (Team Lead).",
            details: `• Led a team to develop inventory, sales, reporting, and customer management ERP.
• Designed Finance Module for EMI plans, payment tracking, and reporting.
• Implemented EMI calculation, due date management, and financial reports.
• Supervised developers, delegated tasks, ensured timely delivery.`,
            tech: "Laravel, MySQL",
        },
        {
            title: "Atmiya Green School Website",
            desc: "Dynamic school website for admissions and content.",
            details: `• Led the team in creating a fully dynamic school website.
• Added admission management and content update functionality.`,
            tech: "Laravel, MySQL, Bootstrap",
        },
        {
            title: "Ekire (Next.js Project)",
            desc: "Frontend system for project deployment automation.",
            details: `• Developed a scalable frontend system with user registration and account management.
• Implemented project creation and management features.
• Built automated server deployment modules with SSH key management.
• Integrated REST APIs for real-time updates and deployment tracking.`,
            tech: "Next.js, REST API",
        },
        {
            title: "Vrishal Enterprise (Ongoing)",
            desc: "MERN stack legacy project improvements (Team Lead).",
            details: `• Leading a team to fix bugs, add new modules, and enhance features.
• Responsible for planning, execution, and mentoring junior developers.`,
            tech: "MongoDB, Express, React.js, Node.js",
        },
        {
            title: "Online Parking System (Academic)",
            desc: "Parking slot booking website.",
            details: `• Designed a responsive UI with Bootstrap and Material Design.
• Allowed users to book parking slots online to save time.`,
            tech: "PHP, MySQL",
        },
        {
            title: "Household Item Giveaway (Academic)",
            desc: "Platform for donating unused items.",
            details: `• Designed a responsive UI with Bootstrap and Material Design.
• Enabled households to donate unused items to people in need.`,
            tech: "PHP, MySQL",
        },
        {
            title: "Text Converter (Academic)",
            desc: "React-based text transformation app.",
            details: `• Developed a React app for text transformation (uppercase, lowercase, capitalize).
• Designed with responsive UI using Bootstrap.`,
            tech: "React, Bootstrap",
        },
        {
            title: "News Begin (Academic)",
            desc: "News aggregator application.",
            details: `• Developed a React app to fetch news from News.org API.
• Displayed multiple sources in a single platform.
• Built with Bootstrap for responsive UI.`,
            tech: "React, Bootstrap, API",
        },
    ];

    return (
        <div className="main-container">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">Nikesh Jain</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section text-center py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 text-md-start">
                            <h1 className="display-4 fw-bold">Hi, I&apos;m Nikesh Jain 👋</h1>
                            <h3 className="gradient-text">
                                <ReactTyped
                                    strings={[
                                        "Full Stack Web Developer",
                                        "Laravel Developer",
                                        "MERN Stack Enthusiast",
                                        "Next.js Developer",
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    loop
                                />
                            </h3>
                            <p className="lead mt-3">I build scalable, secure, and user-friendly web applications.</p>
                             <div className="social-links mt-4">
                                <a href="https://github.com/nikeshjain73" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                                <a href="https://www.linkedin.com/in/nikesh-jain" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4 mt-md-0">
                            {/*  eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/image/profile-nikesh.png" alt="Nikesh Jain" width={250} height={250} className="profile-img shadow" />
                        </div>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="py-5">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <p>Hello! 👋 I&apos;m <strong>Nikesh Jain</strong>, a passionate and motivated <strong>Full Stack Web Developer</strong> with hands-on experience in building and deploying real-world web applications using <strong>Laravel, Next.js, and the MERN stack</strong>.</p>
                    <p>Over the past year, I’ve worked on <strong>ERP and SaaS-based systems</strong>, where I gained expertise in solving bugs, designing modules, integrating APIs, and leading development teams. I enjoy taking ownership of projects—from backend logic and database design to crafting clean, responsive UIs.</p>
                    <p>My technical toolkit includes <strong>JavaScript, PHP, Python, Java, MySQL, MongoDB, Git, GitHub</strong>, and I thrive on learning modern frameworks and tools to stay ahead in the fast-moving tech world.</p>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-5">
                <div className="container">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Programming Languages</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge skill-badge"><FaJs className="me-1" /> JavaScript</span>
                                        <span className="badge skill-badge"><FaPython className="me-1" /> Python</span>
                                        <span className="badge skill-badge"><FaJava className="me-1" /> Java</span>
                                        <span className="badge skill-badge"><FaPhp className="me-1" /> PHP</span>
                                        <span className="badge skill-badge"><FaNodeJs className="me-1" /> Node.js</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Frameworks & Libraries</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge skill-badge"><FaLaravel className="me-1" /> Laravel</span>
                                        <span className="badge skill-badge"><SiNextdotjs className="me-1" /> Next.js</span>
                                        <span className="badge skill-badge"><FaReact className="me-1" /> React</span>
                                        <span className="badge skill-badge"><SiExpress className="me-1" /> Express</span>
                                        <span className="badge skill-badge"><FaBootstrap className="me-1" /> Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Databases</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge skill-badge"><SiMysql className="me-1" /> MySQL</span>
                                        <span className="badge skill-badge"><SiMongodb className="me-1" /> MongoDB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Tools & Version Control</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge skill-badge"><FaGitAlt className="me-1" /> Git</span>
                                        <span className="badge skill-badge"><FaGithub className="me-1" /> GitHub</span>
                                        <span className="badge skill-badge"><FaDatabase className="me-1" /> DB Tools</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-5 achievements-section">
                <div className="container text-center">
                    <h2 className="section-title">My Achivemnts</h2>
                  
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h3 className="fw-bold"><CountUp end={14} duration={3} />+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h3 className="fw-bold"><CountUp end={1} duration={3} /></h3>
                            <p>Years of Experience</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h3 className="fw-bold"><CountUp end={9} duration={3} />+</h3>
                            <p>Teams / Clients Collaborated</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section*/}
            <section id="projects" className="py-5">
                <div className="container">
                    <h2 className="section-title">My Work</h2>
                    <div className="row">
                        {projects.map((p, i) => (
                            <div key={i} className="col-md-6 col-lg-4 mb-4">
                                <div className="card project-card h-100">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{p.title}</h5>
                                        <p className="card-text flex-grow-1">{p.desc}</p>
                                        <small className="text-muted d-block mb-3">{p.tech}</small>
                                        <button
                                            className="btn btn-primary btn-sm mt-auto"
                                            data-bs-toggle="modal"
                                            data-bs-target="#projectModal"
                                            onClick={() => setSelectedProject(p)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5 text-center">
                <div className="container">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="lead">I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!</p>
                    <div className="contact-links mt-4">
                        <a href="mailto:jnikesh050@gmail.com" className="btn btn-outline-light mx-2"><FaEnvelope className="me-2" />Email Me</a>
                        <a href="tel:+919725520081" className="btn btn-outline-light mx-2"><FaPhone className="me-2" />Call Me</a>
                    </div>
                </div>
            </section>
            
            <footer className="text-center py-3">
                <p>&copy; {new Date().getFullYear()} Nikesh Jain. All Rights Reserved.</p>
            </footer>

            {/* Modal */}
            <div className="modal fade" id="projectModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        {selectedProject && (
                            <>
                                <div className="modal-header">
                                    <h5 className="modal-title">{selectedProject.title}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <p style={{ whiteSpace: "pre-line" }}>{selectedProject.details}</p>
                                    <p><strong>Technologies:</strong> {selectedProject.tech}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Global Styles using JSX */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
                
                :root {
                    --primary-color: #00aaff;
                    --bg-color: #121212;
                    --surface-color: #1e1e1e;
                    --text-color: #e0e0e0;
                    --card-bg: rgba(255, 255, 255, 0.05);
                    --card-border: rgba(255, 255, 255, 0.1);
                }

                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: var(--bg-color);
                    color: var(--text-color);
                }
                
                .navbar {
                    background-color: rgba(18, 18, 18, 0.8);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid var(--card-border);
                }
                
                .hero-section {
                    min-height: 80vh;
                    display: flex;
                    align-items: center;
                }
                
                .profile-img {
                    border-radius: 50%;
                    border: 5px solid var(--primary-color);
                    object-fit: cover;
                }
                
                .gradient-text {
                    background: linear-gradient(45deg, var(--primary-color), #00ff88);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .social-links a {
                    font-size: 2rem;
                    color: var(--text-color);
                    margin: 0 10px;
                    transition: color 0.3s ease;
                }
                
                .social-links a:hover {
                    color: var(--primary-color);
                }
                
                .section-title {
                    text-align: center;
                    margin-bottom: 50px;
                    font-weight: 700;
                    position: relative;
                }

                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 4px;
                    background-color: var(--primary-color);
                    border-radius: 2px;
                }
                
                .card {
                    background-color: var(--card-bg);
                    border: 1px solid var(--card-border);
                    backdrop-filter: blur(5px);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    color: var(--text-color);
                }
                
                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                }
                
                .card-title {
                    color: var(--primary-color);
                    font-weight: 600;
                }

                .skill-badge {
                    background-color: rgba(0, 170, 255, 0.1);
                    color: var(--primary-color);
                    border: 1px solid var(--primary-color);
                    padding: 0.5em 1em;
                    font-size: 0.9rem;
                }

                .achievements-section {
                    background-color: var(--surface-color);
                }

                .btn-primary {
                    background-color: var(--primary-color);
                    border-color: var(--primary-color);
                    transition: background-color 0.3s ease, border-color 0.3s ease;
                }

                .btn-primary:hover {
                    background-color: #0088cc;
                    border-color: #0088cc;
                }

                #contact {
                    background-color: var(--surface-color);
                }
                
                footer {
                    background-color: #0c0c0c;
                    font-size: 0.9rem;
                }
                
                .modal-content {
                    background-color: var(--surface-color);
                    color: var(--text-color);
                    border: 1px solid var(--card-border);
                }
                .modal-header {
                    border-bottom: 1px solid var(--card-border);
                }
                .btn-close {
                    filter: invert(1) grayscale(100%) brightness(200%);
                }
            `}</style>
        </div>
    );
}