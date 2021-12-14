import React from "react";
import styles from "./styles.module.scss";
// import ProgressBar from "@ramonak/react-progress-bar";

const DashboardCard = ({
  src,
  alt,
  title,
  duration,
  percentage,
  investors,
  totalAmt,
  raisedAmt,
  openModal,
}) => {
  return (
    <div onClick={openModal}>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img alt={alt} loading="lazy" src={src} />
          <p className={styles.desc}>{percentage}</p>
        </div>
        <div className={styles.cardBody}>
          <h3>{title}</h3>
          <p className={styles.desc}>{duration}</p>

          <p className={styles.desc}>{investors}</p>
          <div className={styles.amount}>
            <p>{totalAmt}</p>
            <p>{raisedAmt}</p>
          </div>

          {/* <div className={styles.progress}>
          <span>{duration} left</span>
          <div className={styles.bar}>
            <ProgressBar
              completed={percentage}
              className={styles.progressBar}
              isLabelVisible={false}
              height="12px"
              bgColor="#5D55FF"
              baseBgColor="rgba(93, 85, 255, 0.2)"
            />
            <span>{percentage}%</span>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
