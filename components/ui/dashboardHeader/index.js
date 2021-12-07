import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Nav from "../nav";
import Logo from "../../../public/images/logo-light.svg";
import { useRouter } from "next/router";

const DashboardHeader = ({ isOpen, clicked }) => {
  const [isDropOpen, setDropOpen] = useState(false);

  const [bgChange, setBgChange] = useState(false);

  const router = useRouter();

  const dropHandler = (payload) => {
    setDropOpen(payload);
  };

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
    <header className={`${styles.dash_header}`}>
      <div className={styles.dash_header__notif}>
        <span>Cloudfift{router.pathname}</span>
      </div>

      <div className={styles.dash_header__actions}>
        <div className={styles.profile_img}>
          <img src="" alt="profile" />
        </div>

        <div className={styles.dropdown_wrapper}>
          <Link href="/profile">Peter Eromosele</Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
