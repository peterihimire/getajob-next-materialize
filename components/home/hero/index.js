import React from "react";
import styles from "./styles.module.scss";

const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>We empower Digital Disruption</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisl
          mauris eu consectetur in odio ut risus. Ut cursus tortor viverra
          viverra nec in lectus.
        </p>
        <a href="/" className="btn-transparent btn-medium">
          Shoot Us A Message
        </a>
      </div>
      <div className={styles.buttonGroup}>
        <button>01</button>
        <button>02</button>
        <button>03</button>
      </div>
    </section>
  );
};

export default HomeHero;
