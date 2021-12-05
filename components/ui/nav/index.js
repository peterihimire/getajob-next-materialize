import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Dropdown from "../dropdown";
import AboutDrop from "./aboutus";
import ServicesDrop from "./services";
import IndustriesDrop from "./industries";
import PublicServiceDrop from "./publicService";
import PortfolioDrop from "./portfolio";
import { useRouter } from "next/router";
import Link from "next/link";
import ActiveLink from "../../../hoc/activeLink";

const Nav = ({ clicked, isDrop, isOpen }) => {
  const [showLang, setShowLang] = useState(false);
  const [about, openAbout] = useState(false);
  const [services, openServices] = useState(false);
  const [industries, openIndustries] = useState(false);
  const [publicService, openPublicService] = useState(false);
  const [portfolio, openPortfolio] = useState(false);

  const router = useRouter();

  useEffect(() => {
    openAbout(false);
    openServices(false);
    openIndustries(false);
    openPublicService(false);
    openPortfolio(false);
  }, [router.pathname]);

  useEffect(() => {
    const hideLang = () => {
      setShowLang(false);
    };

    document.body.addEventListener("click", hideLang);

    return () => {
      document.body.removeEventListener("click", hideLang);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
      openServices(false);
      openIndustries(false);
      openPublicService(false);
      openPortfolio(false);
    }
  }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
      <ul className={styles.navLinks}>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${about ? styles.boldText : ""} ${
              isDrop ? styles.darkText : ""
            }`}
            onClick={() => {
              openAbout(!about);
              openServices(false);
              openIndustries(false);
              openPublicService(false);
              openPortfolio(false);
              about ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>Who we are</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div className={`${styles.dropdownMenu} ${about ? styles.show : ""}`}>
            <div className={styles.dropdownContainer}>
              <div className={`${styles.dropdownWrapper} ${styles.about}`}>
                <AboutDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              services ? styles.boldText : ""
            } ${isDrop ? styles.darkText : ""}`}
            onClick={() => {
              openServices(!services);
              openAbout(false);
              openIndustries(false);
              openPublicService(false);
              openPortfolio(false);
              services ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>What we do</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${services ? styles.show : ""}`}
          >
            <div className={styles.dropdownContainer}>
              <div className={`${styles.dropdownWrapper} ${styles.services}`}>
                <ServicesDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              industries ? styles.boldText : ""
            } ${isDrop ? styles.darkText : ""}`}
            onClick={() => {
              openIndustries(!industries);
              openServices(false);
              openAbout(false);
              openPublicService(false);
              openPortfolio(false);
              industries ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>Industries and Expertise</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${
              industries ? styles.show : ""
            }`}
          >
            <div className={styles.dropdownContainer}>
              <div className={`${styles.dropdownWrapper} ${styles.industries}`}>
                <IndustriesDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              publicService ? styles.boldText : ""
            } ${isDrop ? styles.darkText : ""}`}
            onClick={() => {
              openPublicService(!publicService);
              openIndustries(false);
              openServices(false);
              openAbout(false);
              openPortfolio(false);
              publicService ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>Public Service</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${
              publicService ? styles.show : ""
            }`}
          >
            <div className={styles.dropdownContainer}>
              <div
                className={`${styles.dropdownWrapper} ${styles.publicService}`}
              >
                <PublicServiceDrop />
              </div>
            </div>
          </div>
        </li>
        <li className={styles.hasDrop}>
          <button
            className={`${styles.hasDropBtn} ${
              portfolio ? styles.boldText : ""
            } ${isDrop ? styles.darkText : ""}`}
            onClick={() => {
              openPortfolio(!portfolio);
              openPublicService(false);
              openIndustries(false);
              openServices(false);
              openAbout(false);
              portfolio ? clicked(false) : clicked(true);
              document.querySelector("nav").classList.toggle(styles.hidden);
            }}
          >
            <span>Portfolio</span>
            <i className="far fa-chevron-down"></i>
          </button>
          <div
            className={`${styles.dropdownMenu} ${portfolio ? styles.show : ""}`}
          >
            <div className={styles.dropdownContainer}>
              <div className={`${styles.dropdownWrapper} ${styles.portfolio}`}>
                <PortfolioDrop />
              </div>
            </div>
          </div>
        </li>
        <li>
          <ActiveLink
            name="Insight"
            href="/blogs"
            linkClass={`${isDrop ? styles.darkText : ""}`}
          />
        </li>
      </ul>

      <div className={styles.navEnd}>
        <div className={styles.contactLink}>
          <Link href="/contact-us">
            <a className="btn-light">Shoot Us A Message</a>
          </Link>
        </div>
        <div className={styles.searchBtn}>
          <button className={`${isDrop ? styles.darkText : ""}`}>
            <i className="far fa-search"></i>
          </button>
        </div>
        <Dropdown
          btnText="EN"
          isDrop={isDrop}
          show={showLang}
          clicked={(e) => {
            e.stopPropagation();

            setShowLang(!showLang);
          }}
        ></Dropdown>
      </div>
    </nav>
  );
};

export default Nav;
