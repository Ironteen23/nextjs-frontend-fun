import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <li style={{ display: "flex", listStyle: "none" }}>
          <ul>
            <Link href="/">Home</Link>
          </ul>
          <ul>
            <Link href="/">About</Link>
          </ul>
          <ul>
            <Link href="/">Contact</Link>
          </ul>
        </li>
      </div>
    </>
  );
};

export default Navbar;
