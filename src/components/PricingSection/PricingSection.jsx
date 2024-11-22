import React from 'react';
import styles from './PricingSection.module.css';

const PricingSection = () => {
  return (
    <div className={styles.pricing}>
      <h2>Workshop Pricing</h2>
      <p>
        Join the live AWS workshop for only <span className={styles.price}>₹9</span>!
      </p>
      <button className={styles.buyNow}>Buy Now</button>
    </div>
  );
};

export default PricingSection;
