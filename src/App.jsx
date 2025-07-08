import React, { useEffect, useState } from 'react';
import './App.css';
import profileImage from './assets/sudhe 1.jpg';

function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handle scroll events for active navigation
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'certifications', 'services', 'projects', 'contact'];
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
          <div className="logo">Sudheksha Krishnakumar</div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className={activeNav === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
            <li><a href="#about" className={activeNav === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
            <li><a href="#education" className={activeNav === 'education' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('education'); }}>Education</a></li>
            <li><a href="#certifications" className={activeNav === 'certifications' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('certifications'); }}>Certifications</a></li>
            <li><a href="#services" className={activeNav === 'services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Services</a></li>
            <li><a href="#projects" className={activeNav === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
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
              <div className="intro-text" style={{ 
                color: '#a78bfa',
                fontSize: '1.2rem',
                fontWeight: '500',
                marginBottom: '1rem'
              }}>Hello, I'm</div>
              
              <h1 className="name" style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Sudheksha K</h1>

              <div className="role" style={{
                fontSize: '1.1rem',  // Reduced from 1.3rem
                lineHeight: '1.4',   // Reduced from 1.6
                marginBottom: '1.2rem', // Reduced from 1.5rem
                marginTop: '-0.5rem',  // Added negative margin to reduce space
                color: '#4B5563'
              }}>
                <span style={{ color: '#A78BFA', fontWeight: '600' }}>Front-End Developer</span> | 
                <span style={{ color: '#A78BFA', fontWeight: '600' }}>AI/ML Enthusiast</span> | 
                <span style={{ color: '#A78BFA', fontWeight: '600' }}>Power BI & UI/UX Specialist</span>
              </div>

              <p className="description" style={{
                color: '#4B5563',
                lineHeight: '1.8',
                marginBottom: '2rem',
                fontSize: '1.1rem'
              }}>
                Passionate about creating impactful solutions through the intersection of design thinking and advanced technologies.
              </p>
              
              <div className="social-links">
                <a href="https://linkedin.com/in/sudheksha" className="social-icon" target="_blank" rel="noopener noreferrer">💼</a>
                <a href="https://github.com/Sudhe-04" className="social-icon" target="_blank" rel="noopener noreferrer">💻</a>
                <a href="mailto:sudheksha2005@gmail.com" className="social-icon">✉️</a>
                <a href="tel:+919361337663" className="social-icon">📞</a>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <a href="#contact" 
                   className="btn" 
                   onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                   style={{
                     background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                     padding: '0.8rem 2rem',
                     borderRadius: '8px',
                     display: 'inline-flex',
                     alignItems: 'center',
                     gap: '0.5rem'
                   }}>
                  Connect <span>📧</span>
                </a>
                <a href="https://drive.google.com/file/d/1wg6pYv6baDsPxKDiSKC6UyJlPa4hanYE/view?usp=sharing" // Replace with your actual Google Drive link
                   className="btn"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     background: 'transparent',
                     border: '2px solid #8B5CF6',
                     color: '#8B5CF6',
                     padding: '0.8rem 2rem',
                     borderRadius: '8px',
                     display: 'inline-flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     transition: 'all 0.3s ease'
                   }}
                   onMouseEnter={e => {
                     e.currentTarget.style.background = '#8B5CF6';
                     e.currentTarget.style.color = 'white';
                   }}
                   onMouseLeave={e => {
                     e.currentTarget.style.background = 'transparent';
                     e.currentTarget.style.color = '#8B5CF6';
                   }}>
                   Resume <span>📄</span>
                </a>
              </div>
            </div>

            <div className="home-image">
              <div className="profile-image" style={{
                width: '250px',  // Reduced from 300px
                height: '250px', // Making it square
                margin: '0 auto',
                position: 'relative',
                borderRadius: '50%', // Perfect circle
                padding: '5px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8))',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
              }}>
                <img src={profileImage} alt="Sudheksha K" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '3px solid rgba(15, 15, 35, 0.95)'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>

          <div className="about-content" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="about-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>

              <p style={{ marginBottom: '2rem' }}>
                I am a dedicated undergraduate student specializing in Artificial Intelligence and Machine Learning, with a strong passion for applying advanced technologies to real-world challenges. My skill set includes front-end development, machine learning, data analysis, and UI/UX design, enabling me to build practical and innovative solutions that deliver real impact.
              </p>
              
              <a href="#contact" className="btn" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                 style={{ 
                   background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                   boxShadow: '0 4px 15px rgba(124, 58, 237, 0.2)',
                   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                   padding: '0.8rem 2rem'
                 }}
                 onMouseEnter={e => {
                   e.currentTarget.style.transform = 'translateY(-2px)';
                   e.currentTarget.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.3)';
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 4px 15px rgba(124, 58, 237, 0.2)';
                 }}>
                Connect
              </a>
            </div>

            {/* New Skills Layout */}
            <div style={{ marginTop: '3rem' }}>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                padding: '1rem'
              }}>
                {/* Technical Skills Cards */}
                <div style={{
                  background: 'rgba(107, 70, 193, 0.08)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1px solid rgba(167, 139, 250, 0.18)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }} onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(124,58,237,0.15)';
                }} onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <h4 style={{ color: '#a78bfa', marginBottom: '1rem', textAlign: 'center' }}>
                    💻 Languages
                  </h4>
                  <div style={{ color: '#e0e7ff', textAlign: 'center' }}>
                    C, Java, Python
                  </div>
                </div>

                <div style={{
                  background: 'rgba(107, 70, 193, 0.08)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1px solid rgba(167, 139, 250, 0.18)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }} onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(124,58,237,0.15)';
                }} onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <h4 style={{ color: '#a78bfa', marginBottom: '1rem', textAlign: 'center' }}>
                    🛠 Frameworks
                  </h4>
                  <div style={{ color: '#e0e7ff', textAlign: 'center' }}>
                    ReactJS, NodeJS
                  </div>
                </div>

                <div style={{
                  background: 'rgba(107, 70, 193, 0.08)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1px solid rgba(167, 139, 250, 0.18)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }} onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(124,58,237,0.15)';
                }} onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <h4 style={{ color: '#a78bfa', marginBottom: '1rem', textAlign: 'center' }}>
                    🎨 Frontend
                  </h4>
                  <div style={{ color: '#e0e7ff', textAlign: 'center' }}>
                    HTML, CSS
                  </div>
                </div>

                <div style={{
                  background: 'rgba(107, 70, 193, 0.08)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1px solid rgba(167, 139, 250, 0.18)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }} onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(124,58,237,0.15)';
                }} onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <h4 style={{ color: '#a78bfa', marginBottom: '1rem', textAlign: 'center' }}>
                    💾 Database
                  </h4>
                  <div style={{ color: '#e0e7ff', textAlign: 'center' }}>
                    MongoDB
                  </div>
                </div>

                <div style={{
                  background: 'rgba(107, 70, 193, 0.08)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1px solid rgba(167, 139, 250, 0.18)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }} onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(124,58,237,0.15)';
                }} onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <h4 style={{ color: '#a78bfa', marginBottom: '1rem', textAlign: 'center' }}>
                    🔧 Tools
                  </h4>
                  <div style={{ color: '#e0e7ff', textAlign: 'center' }}>
                    Git, PowerBI, Tableau
                  </div>
                </div>

                <div style={{
                  background: 'rgba(107, 70, 193, 0.08)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1px solid rgba(167, 139, 250, 0.18)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }} onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(124,58,237,0.15)';
                }} onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <h4 style={{ color: '#a78bfa', marginBottom: '1rem', textAlign: 'center' }}>
                    🤝 Soft Skills
                  </h4>
                  <div style={{ color: '#e0e7ff', textAlign: 'center' }}>
                    Teamwork, Leadership, Time Management, Communication
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{ background: "linear-gradient(135deg, #0F0F23 0%, #050514 100%)", padding: "100px 0" }}>
        <div className="container">
          <h2 className="section-title" style={{ color: "#a78bfa", textAlign: "center", marginBottom: "2.5rem", textShadow: "0 2px 16px #a78bfa88" }}>Education</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
            justifyItems: "center"
          }}>
            {/* UG */}
            <div style={{
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2.2rem 2rem",
              width: "100%",
              maxWidth: "400px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)"
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
                <div style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.3rem", color: "#a78bfa", textShadow: "0 1px 8px #a78bfa55" }}>
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
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2.2rem 2rem",
              width: "100%",
              maxWidth: "400px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)"
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
                <div style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.3rem", color: "#a78bfa", textShadow: "0 1px 8px #a78bfa55" }}>
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
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2.2rem 2rem",
              width: "100%",
              maxWidth: "400px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)"
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
                <div style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.3rem", color: "#a78bfa", textShadow: "0 1px 8px #a78bfa55" }}>
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

      {/* Certifications Section */}
      <section id="certifications" style={{ 
        background: "linear-gradient(135deg, #0F0F23 0%, #050514 100%)", 
        padding: "100px 0" 
      }}>
        <div className="container">
          <h2 className="section-title" style={{ color: "#a78bfa", marginBottom: "2.5rem", textAlign: "center", textShadow: "0 2px 16px #a78bfa88" }}>Certifications</h2>
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            padding: "2rem 0"
          }}>
            {/* MongoDB Card */}
            <div style={{
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2rem",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)",
              color: "#fff",
              transition: "all 0.3s ease"
            }} onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
            }} onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}>
              <div style={{ 
                width: "48px", 
                height: "48px",
                marginBottom: "1.5rem",
                borderRadius: "12px",
                background: "#00ED64",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem"
              }}>🗄️</div>
              <h3 style={{ 
                fontSize: "1.25rem", 
                marginBottom: "0.5rem", 
                color: "#a78bfa",
                textShadow: "0 1px 8px #a78bfa55"
              }}>MongoDB Certified Developer</h3>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "0.75rem",
                opacity: 0.9
              }}>MongoDB</p>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "2rem", 
                fontSize: "0.95rem",
                opacity: 0.8
              }}>Certified in MongoDB database design and implementation.</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ 
                  background: "#E6FFFA", 
                  color: "#319795",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "full",
                  fontSize: "0.875rem"
                }}>Issued: JAN 2025</span>
                <a href="https://drive.google.com/file/d/1-THLR2iX2TLe_xx1mxltH5f6Taw4aw2P/view?usp=sharing" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     color: "#6366F1",
                     textDecoration: "none",
                     display: "flex",
                     alignItems: "center",
                     gap: "0.5rem",
                     fontSize: "0.95rem",
                     fontWeight: "500"
                   }}>
                  View Certificate 
                  <span style={{ fontSize: "1.2rem" }}>→</span>
                </a>
              </div>
            </div>

            {/* Microsoft Azure Card */}
            <div style={{
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2rem",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)",
              color: "#fff",
              transition: "all 0.3s ease"
            }} onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
            }} onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}>
              <div style={{ 
                width: "48px", 
                height: "48px",
                marginBottom: "1.5rem",
                borderRadius: "12px",
                background: "#0078D4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "#fff"
              }}>☁️</div>
              <h3 style={{ 
                fontSize: "1.25rem", 
                marginBottom: "0.5rem", 
                color: "#a78bfa",
                textShadow: "0 1px 8px #a78bfa55"
              }}>Azure AI Engineer Associate</h3>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "0.75rem",
                opacity: 0.9
              }}>Microsoft</p>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "2rem", 
                fontSize: "0.95rem",
                opacity: 0.8
              }}>Advanced AI and ML implementation on Azure cloud platform.</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ 
                  background: "#E6F7FF", 
                  color: "#0078D4",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "full",
                  fontSize: "0.875rem"
                }}>Issued: DEC 2024</span>
                <a href="https://drive.google.com/file/d/1gWk53yfpru5zTlsHQT1S6vn9yTw3kn0F/view?usp=sharing" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     color: "#6366F1",
                     textDecoration: "none",
                     display: "flex",
                     alignItems: "center",
                     gap: "0.5rem",
                     fontSize: "0.95rem",
                     fontWeight: "500"
                   }}>
                  View Certificate 
                  <span style={{ fontSize: "1.2rem" }}>→</span>
                </a>
              </div>
            </div>

            {/* Guvi AI Card */}
            <div style={{
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2rem",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)",
              color: "#fff",
              transition: "all 0.3s ease"
            }} onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
            }} onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}>
              <div style={{ 
                width: "48px", 
                height: "48px",
                marginBottom: "1.5rem",
                borderRadius: "12px",
                background: "#F24E1E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "#fff"
              }}>🤖</div>
              <h3 style={{ 
                fontSize: "1.25rem", 
                marginBottom: "0.5rem", 
                color: "#a78bfa",
                textShadow: "0 1px 8px #a78bfa55"
              }}>Generative AI</h3>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "0.75rem",
                opacity: 0.9
              }}>Guvi</p>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "2rem", 
                fontSize: "0.95rem",
                opacity: 0.8
              }}>Deep dive into generative models and their applications.</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ 
                  background: "#FFF5F5", 
                  color: "#F24E1E",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "full",
                  fontSize: "0.875rem"
                }}>Issued: NOV 2023</span>
                <a href="https://drive.google.com/file/d/1zKop8_3HiHyNPwa0_BLPkxafK74OX2-b/view?usp=sharing" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     color: "#6366F1",
                     textDecoration: "none",
                     display: "flex",
                     alignItems: "center",
                     gap: "0.5rem",
                     fontSize: "0.95rem",
                     fontWeight: "500"
                   }}>
                  View Certificate 
                  <span style={{ fontSize: "1.2rem" }}>→</span>
                </a>
              </div>
            </div>

            {/* NPTEL Affective Computing */}
            <div style={{
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2rem",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)",
              color: "#fff",
              transition: "all 0.3s ease"
            }} onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
            }} onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}>
              <div style={{ 
                width: "48px", 
                height: "48px",
                marginBottom: "1.5rem",
                borderRadius: "12px",
                background: "#0072B1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "#fff"
              }}>🧠</div>
              <h3 style={{ 
                fontSize: "1.25rem", 
                marginBottom: "0.5rem", 
                color: "#a78bfa",
                textShadow: "0 1px 8px #a78bfa55"
              }}>Affective Computing</h3>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "0.75rem",
                opacity: 0.9
              }}>NPTEL</p>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "2rem", 
                fontSize: "0.95rem",
                opacity: 0.8
              }}>Understanding emotions in human-computer interaction.</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ 
                  background: "#E8F5E9", 
                  color: "#2E7D32",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "full",
                  fontSize: "0.875rem"
                }}>Issued: AUG 2023</span>
                <a href="https://drive.google.com/file/d/1m0AoTuC007AYtny5Xv4lbmIz81-tZP4L/view?usp=sharing" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     color: "#6366F1",
                     textDecoration: "none",
                     display: "flex",
                     alignItems: "center",
                     gap: "0.5rem",
                     fontSize: "0.95rem",
                     fontWeight: "500"
                   }}>
                  View Certificate 
                  <span style={{ fontSize: "1.2rem" }}>→</span>
                </a>
              </div>
            </div>

            {/* NPTEL HCI */}
            <div style={{
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(124,58,237,0.18)",
              padding: "2rem",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)",
              color: "#fff",
              transition: "all 0.3s ease"
            }} onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
            }} onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}>
              <div style={{ 
                width: "48px", 
                height: "48px",
                marginBottom: "1.5rem",
                borderRadius: "12px",
                background: "#FF5722",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "#fff"
              }}>🖥️</div>
              <h3 style={{ 
                fontSize: "1.25rem", 
                marginBottom: "0.5rem", 
                color: "#a78bfa",
                textShadow: "0 1px 8px #a78bfa55"
              }}>Human-Computer Interaction</h3>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "0.75rem",
                opacity: 0.9
              }}>NPTEL</p>
              <p style={{ 
                color: "#e0e7ff", 
                marginBottom: "2rem", 
                fontSize: "0.95rem",
                opacity: 0.8
              }}>Design and evaluation of user interfaces.</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ 
                  background: "#F3E5F5", 
                  color: "#6A1B9A",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "full",
                  fontSize: "0.875rem"
                }}>Issued: JUL 2023</span>
                <a href="https://drive.google.com/file/d/1hjAKM_xITX31oho80QnB8aotJnEyxG_S/view?usp=sharing" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     color: "#6366F1",
                     textDecoration: "none",
                     display: "flex",
                     alignItems: "center",
                     gap: "0.5rem",
                     fontSize: "0.95rem",
                     fontWeight: "500"
                   }}>
                  View Certificate 
                  <span style={{ fontSize: "1.2rem" }}>→</span>
                </a>
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

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card" style={{
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "25px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)",
              padding: "40px",
              minHeight: "450px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div className="project-icon" style={{ color: "#a78bfa", textShadow: "0 1px 8px #a78bfa55" }}>🏍️</div>
              <h3 className="project-title" style={{ color: "#a78bfa", textShadow: "0 1px 8px #a78bfa55" }}>Revamping Ola Bike Services with Advanced Demand Forecasting via Machine Learning</h3>
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
            
            <div className="project-card" style={{
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "25px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)",
              padding: "40px",
              minHeight: "450px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div className="project-icon" style={{ color: "#a78bfa", textShadow: "0 1px 8px #a78bfa55" }}>👤</div>
              <h3 className="project-title" style={{ color: "#a78bfa", textShadow: "0 1px 8px #a78bfa55" }}>Advancing Age Estimation from Facial Images using Deep Learning</h3>
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
            
            <div className="project-card" style={{
              background: "rgba(107, 70, 193, 0.1)",
              borderRadius: "25px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(15px)",
              padding: "40px",
              minHeight: "450px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div className="project-icon" style={{ color: "#a78bfa", textShadow: "0 1px 8px #a78bfa55" }}>👥</div>
              <h3 className="project-title" style={{ color: "#a78bfa", textShadow: "0 1px 8px #a78bfa55" }}>Employee Management System Full Stack Development</h3>
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
