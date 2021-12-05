import React from "react";
import styles from "./styles.module.scss";
import ActiveLink from "../../../../hoc/activeLink";

const industries = () => {
  return (
    <>
      <div className={styles.left}>
        <ul>
          <li>
            <ActiveLink name="FinTech" href="/fintech" />
          </li>
          <li>
            <ActiveLink name="Retail" href="/retail" />
          </li>
          <li>
            <ActiveLink name="Insurance" href="/insurance" />
          </li>
          <li>
            <ActiveLink name="Non-Profit" href="/non-profit" />
          </li>
          <li>
            <ActiveLink name="Offshore" href="/offshore" />
          </li>
        </ul>

        <ul>
          <li>
            <ActiveLink name="Automotive" href="/automotive" />
          </li>
          <li>
            <ActiveLink name="Healthcare" href="/healthcare" />
          </li>
          <li>
            <ActiveLink name="Agriculture" href="/agriculture" />
          </li>
          <li>
            <ActiveLink
              name="Aerospace and Defense"
              href="/aerospace-and-defense"
            />
          </li>
          <li>
            <ActiveLink name="Nearshore" href="/nearshore" />
          </li>
        </ul>

        <ul>
          <li>
            <ActiveLink
              name="Banking & Financial Services"
              href="/banking-and-financial-services"
            />
          </li>
          <li>
            <ActiveLink
              name="Industrial & Logistics"
              href="/industrial-and-logistics"
            />
          </li>
          <li>
            <ActiveLink
              name="Media & Entertainment"
              href="/media-and-entertainment"
            />
          </li>
          <li>
            <ActiveLink name="Marketing" href="/marketing" />
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.industriesImg}>
          <img alt="" src="/images/industries-drop.png" />
        </div>
      </div>
    </>
  );
};

export default industries;
