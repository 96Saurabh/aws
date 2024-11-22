import React from 'react';
import styles from './FAQsSection.module.css';

const FAQsSection = () => {
  return (
    <div className={styles.faqs}>
      <h2>FAQs</h2>
      <p><strong>Q:</strong> When is the workshop? <br /><strong>A:</strong> November 24, 2024.</p>
      <p><strong>Q:</strong> Is it live? <br /><strong>A:</strong> Yes, it's a live session.</p>
      <p><strong>Q:</strong> Will I get certified? <br /><strong>A:</strong> Yes, you will receive a certificate.</p>
    </div>
  );
};

export default FAQsSection;
