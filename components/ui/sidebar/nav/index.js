import React from "react";
import ActiveLink from "../../../../hoc/activeLink2";
import styles from "./styles.module.scss";
import Logo from "../../../../public/images/logo.svg";
import Dashboard from "../../../../public/images/dashboard.svg";
import Pages from "../../../../public/images/pages.svg";
import Insights from "../../../../public/images/insights.svg";
import Services from "../../../../public/images/services.svg";
import CaseStudies from "../../../../public/images/case-study.svg";
import Clients from "../../../../public/images/services.svg";
import Partners from "../../../../public/images/partners.svg";
import Careers from "../../../../public/images/careers.svg";
import RoleManagement from "../../../../public/images/roles-management.svg";
import Logout from "../../../../public/images/logout.svg";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <ActiveLink href="/" aria-label="brand logo">
          <Logo />
        </ActiveLink>
        <p>Admin</p>
      </div>

      <ul>
        <li>
          <ActiveLink href="/dashboard">
            <Dashboard />
            <span>Dashboard</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/crowd-invest">
            <Pages />
            <span>Crowd Invest</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/Insights">
            <Insights />
            <span>Insights</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/Services">
            <Services />
            <span>Services</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/CaseStudy">
            <CaseStudies />
            <span>Case Studies</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/Clients">
            <Clients />
            <span>Clients</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/Partners">
            <Partners />
            <span>Partners</span>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/Careers">
            <Careers />
            <span>Careers</span>
          </ActiveLink>
        </li>

        <li>
          <li>
            <ActiveLink href="/Menu">
              <Careers />
              <span>Menu Category</span>
            </ActiveLink>
          </li>
          <ActiveLink href="/Roles">
            <RoleManagement />
            <span>Roles</span>
          </ActiveLink>
        </li>
      </ul>
      <div className={styles.nav__footer}>
        <span
          onClick={() => logout()}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <div className={styles.footer_center}>
            <Logout />
            <span>Logout</span>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
