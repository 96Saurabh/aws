import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h1>Learn AWS with NexusCTC</h1>
      <p>
        "Master AWS tools and skills with guidance from experts and experienced
        trainers boasting over 25 years of industry knowledge. Gain practical
        insights and hands-on expertise to excel in your cloud career. Get
        certified as a professional and unlock future opportunities. Build
        skills that will make you stand out in the rapidly evolving tech
        landscape!"
      </p>
      <button className={styles.registerButton}>Register Now</button>
    </div>
  );
};

export default HeroSection;
