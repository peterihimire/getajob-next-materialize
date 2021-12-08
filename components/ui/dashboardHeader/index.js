import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Nav from "../nav";
import Logo from "../../../public/images/logo-light.svg";
import { useRouter } from "next/router";

const DashboardHeader = ({ isOpen, clicked }) => {
  const [isDropOpen, setDropOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [bgChange, setBgChange] = useState(false);

  const router = useRouter();

  const dropHandler = (payload) => {
    setDropOpen(payload);
  };

  const buttonStyle = [
    "hamburger",
    "hamburger--spin",
    open ? "is-active" : null,
  ];

  useEffect(() => {
    if (!isOpen) {
      setDropOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setDropOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    const changeHeaderBg = () => {
      if (window.scrollY >= 40) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    };

    window.addEventListener("scroll", changeHeaderBg);

    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <header
      className={`${styles.dash_header}`}

      // className={`${styles.dash_header} ${bgChange || isOpen ? styles.bgDark : ""}`}
    >
      <div className={styles.dash_header__notif}>
        <span>{router.pathname.slice(1)}</span>
      </div>

      <div className={styles.dash_header__actions}>
        <div className={styles.profile_img}>
          <img src="" alt="profile" />
        </div>

        <div className={styles.dropdown_wrapper}>
          <Link href="/profile">Peter</Link>
        </div>

        <div className={styles.hamburgerBtn}>
          <button
            type="button"
            aria-label="navigation button"
            onClick={clicked}
            className={buttonStyle.join(" ")}
            // className={`hamburger2 hamburger--boring ${
            //   isOpen ? "is-active" : ""
            // }`}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        {/* <div className={styles.hamburger_wrapper}>
          <button
            type="button"
            aria-label="navigation button"
            className={buttonStyle.join(" ")}
            onClick={() => {
              setOpen(!open);
              document.documentElement.classList.toggle("_fixed");
              document.body.classList.toggle("_fixed");
            }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default DashboardHeader;
