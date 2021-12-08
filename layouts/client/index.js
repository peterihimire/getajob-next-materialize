import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import DashboardHeader from "../../components/ui/dashboardHeader";
import Backdrop from "../../components/ui/backdrop";
// import Footer from "../../components/ui/footer";
import { useRouter } from "next/router";
import Sidebar from "../../components/ui/sidebar";

const ClientLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const buttonStyle = [
    "hamburger2",
    "hamburger--spin",
    open ? "is-active" : null,
  ];

  const router = useRouter();

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  }, [router.pathname]);

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar isOpen={open} />
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
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      <DashboardHeader
        isOpen={open}
        clicked={() => {
          setOpen(!open);
          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />

      <main className={styles.main}>{children}</main>

      {/* <Footer /> */}
    </div>
  );
};

export default ClientLayout;
