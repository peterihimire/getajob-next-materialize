import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const VacancyCard = ({ id, tag, title, state, country, type, category }) => {
  return (
    <Link
      href={{
        pathname: `/careers/${id}`,
        query: { id },
      }}
    >
      <a className={styles.vacancyLink}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.tag}>{tag}</span>
          </div>
          <div className={styles.cardBody}>
            <h3>{title}</h3>
            <p>
              <i className="fal fa-map-marker-alt"></i>{" "}
              <span>
                {state}. {country}. {type}
              </span>
            </p>
          </div>
          <div className={styles.cardFooter}>
            <span></span>
            <p>{category}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default VacancyCard;
