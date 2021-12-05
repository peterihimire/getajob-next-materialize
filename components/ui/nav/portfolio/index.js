import React from "react";
import styles from "./styles.module.scss";
import ActiveLink from "../../../../hoc/activeLink";

const portfolio = () => {
  return (
    <>
      <div className={styles.left}>
        <ul>
          <li>
            <ActiveLink name="Clients we serve" href="/clients" />
          </li>
          <li>
            <ActiveLink name="Accomplishments" href="/portfolio" />
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.image}>
          <img alt="" src="/images/portfolio-drop.png" />
        </div>
      </div>
    </>
  );
};

export default portfolio;
