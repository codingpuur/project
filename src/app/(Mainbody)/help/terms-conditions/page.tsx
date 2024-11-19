// pages/terms.js
import React from "react";

const Terms = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>FinGenie Terms and Conditions</h1>
      <p style={styles.text}>
        Welcome to FinGenie (“Website”). By accessing or using our Website, you
        agree to comply with and be bound by the following terms and conditions.
        If you do not agree to any part of these terms, please exit the Website
        immediately and notify us to remove your account.
      </p>
      <h2 style={styles.subHeading}>1. Registration and Termination</h2>
      <p style={styles.text}>
        By registering on this Website, you accept that FinGenie reserves the
        right to:
      </p>
      <ul style={styles.list}>
        <li>
          Deny access to the Website or specific sections thereof at its sole
          discretion without prior notice, in case of:
          <ul>
            <li>Unauthorized access or misuse.</li>
            <li>Transfer or assignment of rights without permission.</li>
            <li>Violation of the terms and conditions.</li>
          </ul>
        </li>
        <li>
          Terminate access if the above conditions are breached. Termination
          does not affect any rights or remedies available to FinGenie under
          the law.
        </li>
      </ul>
      <h2 style={styles.subHeading}>2. License</h2>
      <p style={styles.text}>
        You are granted a non-exclusive, royalty-free, and revocable license to:
      </p>
      <ul style={styles.list}>
        <li>View and browse this Website on computers or mobile devices.</li>
        <li>Store Website content in your browser cache.</li>
        <li>Print pages for personal, non-commercial use.</li>
      </ul>
      <p style={styles.text}>
        Restrictions: You must not adapt, edit, republish, redistribute, or
        broadcast the Website content without prior written consent from
        FinGenie.
      </p>
      <h2 style={styles.subHeading}>3. Data Mining</h2>
      <p style={styles.text}>
        Automated or systematic data collection on this Website is strictly
        prohibited. Copyright for Website material belongs to FinGenie or its
        licensors.
      </p>
      <h2 style={styles.subHeading}>4. Security</h2>
      <ul style={styles.list}>
        <li>
          Unauthorized activities such as hacking, misuse of passwords, or
          overburdening the system are prohibited.
        </li>
        <li>Users are responsible for safeguarding their login credentials.</li>
        <li>
          FinGenie is not liable for damages arising from credential misuse.
        </li>
        <li>
          FinGenie may collect non-identifiable aggregate data for analytical
          purposes.
        </li>
      </ul>
      <h2 style={styles.subHeading}>5. Service Delays</h2>
      <p style={styles.text}>
        FinGenie reserves the right to:
      </p>
      <ul style={styles.list}>
        <li>Update or suspend services for maintenance.</li>
        <li>Make changes or discontinue services as deemed necessary.</li>
      </ul>
      <p style={styles.text}>
        Limitation: FinGenie is not liable for delays or interruptions due to
        unforeseen circumstances, including but not limited to technical
        failures, weather conditions, or acts of war.
      </p>
      <h2 style={styles.subHeading}>6. Limitation of Liability</h2>
      <p style={styles.text}>
        FinGenie shall not be liable for any direct, indirect, incidental, or
        consequential damages, including loss of data, service interruptions, or
        unauthorized access. The service is provided "as-is" without warranties
        of any kind, whether express or implied. Users assume full
        responsibility for their use of the Website and any financial or
        emotional outcomes.
      </p>
      <h2 style={styles.subHeading}>7. Entire Agreement</h2>
      <p style={styles.text}>
        This document represents the complete agreement between FinGenie and
        the user. Any additional agreements or representations are superseded
        by this document.
      </p>
      <h2 style={styles.subHeading}>8. Disclaimer</h2>
      <ul style={styles.list}>
        <li>
          <strong>Educational Purpose Only:</strong> Content is for educational
          purposes and does not constitute investment advice.
        </li>
        <li>
          <strong>Risk of Trading:</strong> Trading and investing involve high
          risk, and users are responsible for their financial decisions.
        </li>
        <li>
          <strong>No Guarantees:</strong> Past performance is not indicative of
          future results.
        </li>
      </ul>
      <h2 style={styles.subHeading}>9. Contact Information</h2>
      <p style={styles.footerText}>
        For inquiries, please contact us at:{" "}
        <a href="mailto:support@fingenie.com" style={styles.link}>
          support@fingenie.com
        </a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
    marginTop: "100px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  subHeading: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#444",
    marginTop: "20px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "10px",
  },
  footerText: {
    fontSize: "14px",
    color: "#666",
    marginTop: "20px",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
  },
};

export default Terms;
