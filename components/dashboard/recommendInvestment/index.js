import React, { useState } from "react";
import styles from "./styles.module.scss";
import DashboardCard from "../../ui/cards/dashboardCard";
import Modal from "../../ui/modal";

const RecommendInvestment = () => {
  const [showModal, setShowModal] = useState(false);

  const applyHandler = () => {
    setShowModal(true);

    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  return (
    <>
      <section className={styles.recommendedInvestment}>
        <h3>Recommended Investments</h3>
        <div className={styles.grid}>
          <DashboardCard
            key="1"
            id="1"
            src="/images/hot-investment-1.png"
            alt="img hot"
            title="Aklas real estate dual home"
            duration="11d: 24h: 32m: 44s"
            percentage="30%"
            investors="208"
            totalAmt="9,000,000"
            raisedAmt="2,000,000"
            openModal={applyHandler}
          />
          <DashboardCard
            key="2"
            id="2"
            src="/images/hot-investment-1.png"
            alt="img"
            title="Aklas real estate dual home"
            duration="11d: 24h: 32m: 44s"
            percentage="30%"
            investors="208"
            totalAmt="9,000,000"
            raisedAmt="2,000,000"
          />
          <DashboardCard
            key="3"
            id="3"
            src="/images/hot-investment-1.png"
            alt="img"
            title="Aklas real estate dual home"
            duration="11d: 24h: 32m: 44s"
            percentage="30%"
            investors="208"
            totalAmt="9,000,000"
            raisedAmt="2,000,000"
          />
          <DashboardCard
            key="4"
            id="4"
            src="/images/hot-investment-1.png"
            alt="img"
            title="Aklas real estate dual home"
            duration="11d: 24h: 32m: 44s"
            percentage="30%"
            investors="208"
            totalAmt="9,000,000"
            raisedAmt="2,000,000"
          />
        </div>
      </section>
      {showModal && (
        <Modal
          header="This is the modal header"
          bodyClass={styles.modalContent}
          click={() => {
            setShowModal(false);

            document.documentElement.classList.remove("_fixed");
            document.body.classList.remove("_fixed");
          }}
        >
          {/* <h3>This is the modal here!</h3> */}
        </Modal>
      )}
    </>
  );
};

export default RecommendInvestment;
