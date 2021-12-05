import React from "react";
import styles from "./styles.module.scss";
import ActiveLink from "../../../../hoc/activeLink";

const servicesDrop = () => {
  return (
    <>
      <div className={styles.left}>
        <div className={styles.servicesGroup}>
          <h3>Consultancy</h3>

          <ul className={styles.grouped}>
            <li>
              <ActiveLink name="Product design" href="/product-design" />
            </li>
            <li>
              <ActiveLink
                name="Research & Development"
                href="/research-development"
              />
            </li>
            <li>
              <ActiveLink name="Cloud security" href="/cloud-security" />
            </li>
            <li>
              <ActiveLink name="MVP Planning & Strategy" href="/mvp-planning" />
            </li>
            <li>
              <ActiveLink name="Proof of Concept" href="/proof-of-concept" />
            </li>
            <li>
              <ActiveLink
                name="Technical feasibility study"
                href="/technical-feasibility-study"
              />
            </li>
          </ul>
        </div>

        <div className={styles.servicesGroup}>
          <h3>Engineering</h3>

          <ul className={styles.grouped}>
            <li>
              <ActiveLink
                name="Mobile App Development"
                href="/mobileapp-development"
              />
            </li>
            <li>
              <ActiveLink
                name="Web App Development"
                href="/webapp-development"
              />
            </li>
            <li>
              <ActiveLink
                name="DevOps & DevSecOps"
                href="/devops-and-devsecops"
              />
            </li>
            <li>
              <ActiveLink name="Cloud migration" href="/cloud-migration" />
            </li>
            <li>
              <ActiveLink name="UI/UX Design" href="/ui-ux-design" />
            </li>
            <li>
              <ActiveLink
                name="Application re-engineering"
                href="/application-reengineering"
              />
            </li>
          </ul>
        </div>

        <div className={styles.servicesGroup}>
          <h3>Customization and Enhancement</h3>

          <ul className={styles.grouped}>
            <li>
              {/* <a href="/">Project Takeovers</a> */}
              <ActiveLink
                name="Project Takeovers"
                href="/project-takeovers"
              />
            </li>
            <li>
              <ActiveLink
                name="Support & Bug Fixing"
                href="/support-and-bug-fixing"
              />
            </li>
            <li>
              <ActiveLink
                name="Quality Assurance (QA Testing)"
                href="/quality-assurance"
              />
            </li>
            <li>
              <ActiveLink
                name="Application Maintenance"
                href="/application-maintenance"
              />
            </li>
            <li>
              <ActiveLink
                name="Backup & Disaster Recovery"
                href="/backup-recovery"
              />
            </li>
            <li>
              <ActiveLink
                name="Implementation & Deployment"
                href="/implementation-and-deployment"
              />
            </li>
            <li>
              <ActiveLink
                name="Infrastructure Support"
                href="/infrastructure-support"
              />
            </li>
            <li>
              <ActiveLink
                name="Migrations & Upgrades"
                href="/migrations-upgrades"
              />
            </li>
            <li>
              <ActiveLink
                name="Product Lifecycle Management (PLM)"
                href="/product-lifecycle"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.servicesImg}>
          <img alt="" src="/images/services-drop.png" />
        </div>
      </div>
    </>
  );
};

export default servicesDrop;
