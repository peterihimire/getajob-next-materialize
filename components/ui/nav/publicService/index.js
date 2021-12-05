import React from "react";
import styles from "./styles.module.scss";
import ActiveLink from "../../../../hoc/activeLink";

const publicService = () => {
  return (
    <>
      <div className={styles.left}>
        <ul>
          <li>
            <ActiveLink name="Federal Government" href="/federal-government" />
          </li>
          <li>
            <ActiveLink name="State Government" href="/state-government" />
          </li>
          <li>
            <ActiveLink name="Higher Institution" href="/higher-institution" />
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.image}>
          <img alt="" src="/images/public-service-drop.png" />
        </div>
      </div>
    </>
  );
};

export default publicService;
