import React from "react";
import styles from "../../styles/SearchPage.module.css";
import search from "../../../public/search.svg";
import Image from "next/image";

const searchbar = ({ ...props }) => {
  return (
    <>
      <div className={styles["search-bar-outer"]}>
        <div className={styles["search-bar-cont"]}>
          <input
            type="text"
            placeholder="    Search for Chapter , Questions"
            className={styles.searchBar}
            onChange={(e) => {
              props.setVal(e.target.value);
              // props.setCurr("");
            }}
          />
          <button
            className={styles["search-btn"]}
            onClick={() => {
              props.handleSubmit();
              props.setCurr("#");
            }}
          >
            <Image
              src={search}
              alt="search"
              height={18}
              width={18}
              style={{ marginRight: "10px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default searchbar;
