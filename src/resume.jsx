import React from "react";

const CV = () => {
  const styles = {
    container: {
      maxWidth: "900px",
      margin: "20px auto",
      background: "white",
      boxShadow: "0 0 20px rgba(0,0,0,0.1)",
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    sidebar: {
      backgroundColor: "#2c3e50",
      color: "white",
      width: "35%",
      padding: "40px 30px",
    },
    mainContent: {
      flex: 1,
      padding: "40px",
    },
    name: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      letterSpacing: "2px",
    },
    title: {
      fontSize: "16px",
      fontWeight: "300",
      marginBottom: "30px",
      letterSpacing: "1px",
    },
    sectionTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "15px",
      marginTop: "30px",
      letterSpacing: "1px",
    },
    mainSectionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "20px",
      marginTop: "30px",
      letterSpacing: "1px",
      color: "#2c3e50",
    },
    contactInfo: {
      marginBottom: "25px",
    },
    contactItem: {
      marginBottom: "8px",
      fontSize: "14px",
    },
    skillsList: {
      listStyle: "none",
      padding: 0,
    },
    skillItem: {
      marginBottom: "8px",
      fontSize: "14px",
    },
    experienceItem: {
      marginBottom: "25px",
    },
    jobTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    company: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "5px",
    },
    date: {
      fontSize: "12px",
      color: "#888",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    description: {
      fontSize: "14px",
      lineHeight: "1.5",
    },
    descriptionList: {
      marginLeft: "20px",
    },
    descriptionItem: {
      marginBottom: "5px",
    },
    achievementsText: {
      fontSize: "14px",
      lineHeight: "1.6",
      textAlign: "justify",
    },
    firstSection: {
      marginTop: "0",
    },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "#f5f5f5",
      color: "#333",
    },
    // Media queries for responsive design
    "@media (max-width: 768px)": {
      container: {
        flexDirection: "column",
        margin: "10px",
      },
      sidebar: {
        width: "100%",
        padding: "20px 15px",
      },
      mainContent: {
        padding: "20px",
      },
      name: {
        fontSize: "24px",
        textAlign: "center",
      },
      title: {
        fontSize: "14px",
        textAlign: "center",
      },
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <div style={styles.name}>HAYAT MELLAL</div>
          <div style={styles.title}>FRONT-END DEVELOPER & CS STUDENT</div>

          <div style={styles.sectionTitle}>CONTACT</div>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>hayatttt1111@gmail.com</div>
            <div style={styles.contactItem}>+213 696 825 204</div>
            <div style={styles.contactItem}>Tissemsilt, Algeria</div>
          </div>

          <div style={styles.sectionTitle}>TECHNICAL SKILLS</div>
          <ul style={styles.skillsList}>
            <li style={styles.skillItem}>JavaScript & Java</li>
            <li style={styles.skillItem}>HTML & CSS</li>
            <li style={styles.skillItem}>React.js</li>
            <li style={styles.skillItem}>Flutter & Dart</li>
            <li style={styles.skillItem}>GitHub</li>
            <li style={styles.skillItem}>Postman</li>
            <li style={styles.skillItem}>Frontend Development</li>
            <li style={styles.skillItem}>Mobile Development</li>
          </ul>

          <div style={styles.sectionTitle}>LANGUAGES</div>
          <ul style={styles.skillsList}>
            <li style={styles.skillItem}>Arabic (Native)</li>
            <li style={styles.skillItem}>English (Fluent)</li>
            <li style={styles.skillItem}>French (Basic)</li>
          </ul>

          <div style={styles.sectionTitle}>INTERESTS</div>
          <ul style={styles.skillsList}>
            <li style={styles.skillItem}>Mobile Development</li>
            <li style={styles.skillItem}>Web Technologies</li>
            <li style={styles.skillItem}>UI/UX Design</li>
            <li style={styles.skillItem}>Technology Innovation</li>
          </ul>
        </div>

        <div style={styles.mainContent}>
          <div style={{ ...styles.mainSectionTitle, ...styles.firstSection }}>
            EDUCATION
          </div>
          <div style={styles.experienceItem}>
            <div style={styles.jobTitle}>Computer Science Engineering</div>
            <div style={styles.company}>
              ESI SBA (Higher School of Computer Science)
            </div>
            <div style={styles.company}>Sidi Bel Abbès, Algeria</div>
            <div style={styles.date}>2022 - 2025 (Expected)</div>
            <div style={styles.description}>
              Currently in 3rd year, specializing in software development and
              computer engineering.
            </div>
          </div>

          <div style={styles.mainSectionTitle}>PROFESSIONAL EXPERIENCE</div>

          <div style={styles.experienceItem}>
            <div style={styles.jobTitle}>React.js Developer</div>
            <div style={styles.company}>ECO-DZ Project</div>
            <div style={styles.date}>2024</div>
            <div style={styles.description}>
              <ul style={styles.descriptionList}>
                <li style={styles.descriptionItem}>
                  Developed and implemented the admin dashboard for ECO-DZ
                  application using React.js
                </li>
                <li style={styles.descriptionItem}>
                  Created responsive user interfaces for efficient project
                  management
                </li>
                <li style={styles.descriptionItem}>
                  Collaborated with team members to ensure seamless integration
                </li>
              </ul>
            </div>
          </div>

          <div style={styles.experienceItem}>
            <div style={styles.jobTitle}>Flutter Developer</div>
            <div style={styles.company}>
              GuideMe Mobile App - Academic Project
            </div>
            <div style={styles.date}>2023</div>
            <div style={styles.description}>
              <ul style={styles.descriptionList}>
                <li style={styles.descriptionItem}>
                  Developed GuideMe mobile application using Flutter and Dart
                </li>
                <li style={styles.descriptionItem}>
                  Designed user-friendly interfaces for enhanced user experience
                </li>
                <li style={styles.descriptionItem}>
                  Implemented mobile app functionality from conception to
                  deployment
                </li>
              </ul>
            </div>
          </div>

          <div style={styles.mainSectionTitle}>ACHIEVEMENTS</div>
          <div style={styles.achievementsText}>
            Actively participated in the NCS Hackathon, a 4-day intensive coding
            competition, demonstrating strong problem-solving skills and ability
            to work under pressure. Successfully completed multiple development
            projects including mobile applications and web dashboards,
            showcasing versatility in both mobile and web development
            technologies. Gained practical experience in full-stack development
            through academic and personal projects.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
