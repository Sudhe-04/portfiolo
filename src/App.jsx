import React, { useEffect, useState } from 'react';
import './App.css';
import profileImage from './assets/sudhe 1.jpg';

function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handle scroll events for active navigation
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveNav(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveNav(section);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">Portfolio.</div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
            <li><a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
            <li><a href="#services" className={activeNav === 'services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Services</a></li>
            <li><a href="#projects" className={activeNav === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
            <li><a href="#education" className={activeNav === 'education' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>Education</a></li>
            <li><a href="#contact" className={activeNav === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
          </ul>
          <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home">
        <div className="container">
          <div className="home-content">
            <div className="home-text">
              <div className="intro-text">Hi, Myself</div>
              <h1 className="name">Sudheksha K</h1>
              <div className="role">And I'm an <span style={{color: '#A78BFA'}}>AI/ML Developer</span></div>
              <p className="description">
                I am seeking a position that offers a responsible career opportunity, allowing me to utilize my skills effectively while making a significant contribution to the organization's success and my career growth.
              </p>
              
              <div className="social-links">
                <a href="https://linkedin.com/in/sudheksha" className="social-icon" target="_blank" rel="noopener noreferrer">💼</a>
                <a href="https://github.com/sudheksha" className="social-icon" target="_blank" rel="noopener noreferrer">💻</a>
                <a href="mailto:sudheksha2005@gmail.com" className="social-icon">✉️</a>
                <a href="tel:+919361337663" className="social-icon">📞</a>
              </div>
              
              <a href="#contact" className="btn" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Get In Touch</a>
            </div>

            <div className="home-image">
              <div className="profile-image">
                <img src={profileImage} alt="Sudheksha K" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=600&fit=crop" alt="About Me" />
            </div>
            <div className="about-text">
              <h3>I'm Sudheksha and I'm an AI/ML Developer</h3>
              <p>
                Currently pursuing my Bachelor's in Artificial Intelligence and Machine Learning at Kongu Engineering College. I'm passionate about leveraging cutting-edge technologies to solve real-world problems and create innovative solutions.
              </p>
              <p>
                My expertise spans across web development, machine learning, data analysis, and UI/UX design. I enjoy working on projects that combine technical complexity with practical applications, always striving to deliver high-quality results.
              </p>
              <a href="#contact" className="btn" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Hire Me</a>
              
              <div className="skills">
                <div className="skill">
                  <h4>Python</h4>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h4>Machine Learning</h4>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h4>ReactJS</h4>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h4>NodeJS</h4>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h4>MongoDB</h4>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h4>Java</h4>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h4>Data Analysis</h4>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill">
                  <h4>UI/UX Design</h4>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h2 className="section-title">My Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI/ML Development</h3>
              <p>Building intelligent systems using machine learning algorithms, deep learning models, and AI frameworks to solve complex business problems.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Web Development</h3>
              <p>Creating responsive, modern web applications using React, Node.js, and MongoDB with focus on performance and user experience.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Data Analysis</h3>
              <p>Extracting insights from complex datasets using statistical analysis, data visualization, and predictive modeling techniques.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Designing intuitive and engaging user interfaces that provide exceptional user experiences across all devices and platforms.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Demand Forecasting</h3>
              <p>Developing predictive models for demand forecasting using advanced machine learning techniques to optimize business operations.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Computer Vision</h3>
              <p>Implementing computer vision solutions for image recognition, facial analysis, and automated visual inspection systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{ background: "linear-gradient(135deg, #0F0F23 0%, #050514 100%)", padding: "100px 0" }}>
        <div className="container">
          <h2 className="section-title" style={{ color: "#a78bfa", textAlign: "center", marginBottom: "2.5rem" }}>Education</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
            justifyItems: "center"
          }}>
            {/* UG */}
            <div style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2.2rem 2rem",
              width: "100%",
              maxWidth: "400px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: "-30px",
                left: "20px",
                background: "#fff",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                boxShadow: "0 2px 12px #a78bfa44"
              }}>
                🎓
              </div>
              <div style={{ marginTop: "2rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.3rem" }}>
                  Bachelor of Technology (UG)
                </div>
                <div style={{ fontWeight: 500, color: "#e0e7ff", marginBottom: "0.5rem" }}>
                  Kongu Engineering College <span style={{ color: "#bae6fd" }}>| Erode</span>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500 }}>Specialization:</span> Artificial Intelligence and Machine Learning
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500 }}>Duration:</span> 2022 - 2026
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500 }}>CGPA:</span> 7.03 
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500, color: "#22d3ee" }}>Status:</span> Pursuing
                </div>
              </div>
            </div>
            {/* HSC */}
            <div style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2.2rem 2rem",
              width: "100%",
              maxWidth: "400px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: "-30px",
                left: "20px",
                background: "#fff",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                boxShadow: "0 2px 12px #a78bfa44"
              }}>
                🏫
              </div>
              <div style={{ marginTop: "2rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.3rem" }}>
                  HSC | (Bio-Maths)
                </div>
                <div style={{ fontWeight: 500, color: "#e0e7ff", marginBottom: "0.5rem" }}>
                  Green Park Educational Institutions <span style={{ color: "#bae6fd" }}>| Namakkal</span>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500 }}>Year:</span> 2022
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500 }}>Percentage:</span> 75%
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500, color: "#22d3ee" }}>Status:</span> Completed
                </div>
              </div>
            </div>
            {/* SSLC */}
            <div style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2.2rem 2rem",
              width: "100%",
              maxWidth: "400px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: "-30px",
                left: "20px",
                background: "#fff",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                boxShadow: "0 2px 12px #a78bfa44"
              }}>
                🏫
              </div>
              <div style={{ marginTop: "2rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.3rem" }}>
                  SSLC
                </div>
                <div style={{ fontWeight: 500, color: "#e0e7ff", marginBottom: "0.5rem" }}>
                  Green Park Educational Institutions <span style={{ color: "#bae6fd" }}>| Namakkal</span>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500 }}>Year:</span> 2020
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500 }}>Percentage:</span> 74.4%
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500, color: "#22d3ee" }}>Status:</span> Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">🏍️</div>
              <h3 className="project-title">Revamping Ola Bike Services with Advanced Demand Forecasting via Machine Learning</h3>
              <p className="project-description">Developed accurate demand forecasting models and optimized bike allocation to enhance service efficiency and reduce wait times.</p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">Data Analysis</span>
                <span className="tech-tag">Forecasting</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Sudhe-04/Revamping-Ola-Bike-Services-with-Advanced-Demand-Forecasting-via-Machine-Learning" target="_blank" rel="noopener noreferrer" className="github-link">
                  <span className="github-icon">📂</span> View on GitHub
                </a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-icon">👤</div>
              <h3 className="project-title">Advancing Age Estimation from Facial Images using Deep Learning</h3>
              <p className="project-description">Designed deep learning models for precise age estimation from facial images, leveraging advanced preprocessing and diverse data for improved accuracy.</p>
              <div className="project-tech">
                <span className="tech-tag">Deep Learning</span>
                <span className="tech-tag">Computer Vision</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Neural Networks</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Sudhe-04/Age-and-gender-prediction" target="_blank" rel="noopener noreferrer" className="github-link">
                  <span className="github-icon">📂</span> View on GitHub
                </a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-icon">👥</div>
              <h3 className="project-title">Employee Management System Full Stack Development</h3>
              <p className="project-description">Developed a dynamic employee management web application with a seamless integration of a robust backend and user-friendly frontend.</p>
              <div className="project-tech">
                <span className="tech-tag">ReactJS</span>
                <span className="tech-tag">NodeJS</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Full Stack</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Sudhe-04/employee-payroll-management" target="_blank" rel="noopener noreferrer" className="github-link">
                  <span className="github-icon">📂</span> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info-section">
              <h3>Get in Touch</h3>
              <p>I'm always open to discussing new opportunities, collaborations, or interesting projects. Feel free to reach out if you'd like to work together or just have a chat about AI/ML and technology!</p>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>6/241-D, Bodhupatty road, Namakkal</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 9361337663</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>sudheksha2005@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 Sudheksha K. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
