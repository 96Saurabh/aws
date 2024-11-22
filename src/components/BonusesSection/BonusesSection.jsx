import React from 'react';
import styles from './BonusesSection.module.css';

const BonusesSection = () => {
  return (
    <div className={styles.bonuses}>
      <h2>Exclusive Bonuses</h2>
      <ul>
        <li>50+ productivity hacks (₹5000 value)</li>
        <li>800+ premium PPT templates (₹3000 value)</li>
        <li>Ebook on Time Management (₹2500 value)</li>
      </ul>
      <p>All bonuses included for FREE!</p>
    </div>
  );
};

export default BonusesSection;
