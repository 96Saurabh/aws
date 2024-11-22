import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import PricingSection from './components/PricingSection/PricingSection';
import BonusesSection from './components/BonusesSection/BonusesSection';
import FAQsSection from './components/FAQsSection/FAQsSection';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <BonusesSection />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default App;
