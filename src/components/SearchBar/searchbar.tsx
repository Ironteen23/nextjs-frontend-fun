import React from "react";
import styles from "../../styles/SearchPage.module.css";

const searchbar = ({ ...props }) => {
  return (
    <>
      <div className={styles["search-bar-outer"]}>
        <div className={styles["search-bar-cont"]}>
          <input
            type="text"
            placeholder="    Search for something"
            className={styles.searchBar}
            onChange={(e) => {
              props.setVal(e.target.value);

              props.setCurr("");
              //   console.log(val);
            }}
          />
          <button
            className={styles["search-btn"]}
            onClick={() => {
              props.handleSubmit();
            }}
          >
            SS
          </button>
        </div>
      </div>
    </>
  );
};

export default searchbar;
