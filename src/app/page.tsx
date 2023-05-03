import Image from "next/image";
import styles from "../app/page.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { Children } from "react";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.grid}>
        <div className={styles["link-cont"]}>
          <Link
            href="/qnapage"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>
              QnA <span>-&gt;</span>
            </h2>
            <p>Find In-Depth Answers about JEE Questions .</p>
          </Link>
        </div>

        <div className={styles["link-cont"]}>
          <Link
            href="/searchpage"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>
              Search <span>-&gt;</span>
            </h2>
            <p>Search and Learn about Various topics</p>
          </Link>
        </div>
      </div>
    </>
  );
}
