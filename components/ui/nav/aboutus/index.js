import React from "react";
import styles from "./styles.module.scss";
import ActiveLink from "../../../../hoc/activeLink";

const aboutDrop = () => {
  return (
    <>
      <div className={styles.aboutLeft}>
        <div className={styles.who}>
          <h3>WHO WE ARE</h3>
          <ul>
            <li>
              <ActiveLink name="Who we are" href="/about-us" />
            </li>
            <li>
              <ActiveLink
                name="Our People Leadership"
                href="/our-people-and-leadership"
              />
            </li>
            <li>
              <ActiveLink href="/how-we-work" name="How we work" />
            </li>
            <li>
              <ActiveLink href="/how-we-work#our-process" name="Our Process" />
            </li>
          </ul>
        </div>

        <div className={styles.believe}>
          <h3>WHAT WE BELIEVE</h3>
          <ul>
            <li>
              <ActiveLink
                name="Business Affiliation"
                href="/partners-affiliation"
              />
            </li>
            <li>
              <ActiveLink
                name="Corporate Responsibility"
                href="/about-us/csr"
              />
            </li>
            <li>
              <ActiveLink name="Build your team" href="/hire-employee" />
            </li>
            <li>
              <ActiveLink
                href="/what-we-believe"
                name="Inclusion & Diversity"
              />
            </li>
            <li>
              <ActiveLink name="Careers" href="/careers" />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.aboutRight}>
        <div className={styles.review}>
          <i className="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className={styles.reviewDetails}>
          <div className={styles.reviewImg}>
            <img alt="" src="/images/about-drop.png" />
          </div>
          <div className={styles.reviewInfo}>
            <span>Lucky Onoriode,</span>
            <span>CEO, Cloudfift</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutDrop;
