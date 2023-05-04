import React, { useState } from "react";
import styles from "../../styles/Ads.module.css";
import Image from "next/image";
import left from "../../../public/leftarrow.svg";

const Ads = () => {
  return (
    <>
      <div className={styles["layout-container"]}>
        <div className={styles["neet-cont"]}>
          <div className={styles["neet-head"]}>
            Start Your NEET preparations with Us
          </div>
          <div className={styles["neet-desc"]}>
            New batch starting from 29th Nov 2021
          </div>
          <button className={styles["neet-btn"]}>Sign up Now</button>
        </div>
        <AdLinks />
      </div>
    </>
  );
};

export default Ads;

const AdLinks = () => {
  const links = [
    {
      title: "The Secret To Managing Time For Students",
      id: 1,
    },
    {
      title: "Best Books For JEE Main 2022",
      id: 2,
    },
    {
      title: "JEE Advanced Preparation Tips",
      id: 3,
    },
    {
      title: "Offline Learning Advantages & Disadvantages",
      id: 4,
    },
  ];

  const [data, setData] = useState(links);

  return (
    <>
      <div className={styles["ads-link-cont"]}>
        {data.map((item, index) => {
          return (
            <div className={styles["ads-link"]} key={index}>
              <div className={styles["ads-link-content"]}>{item.title}</div>
              <div className={styles["ads-link-icon-cont"]}>
                <Image src={left} alt="left-arrow" height="20" width="20" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
