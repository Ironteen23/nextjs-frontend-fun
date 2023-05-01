import React from "react";
import styles from "../../styles/AnswerCard.module.css";
import Image from "next/image";
import like from "../../../public/like.svg";
import dislike from "../../../public/dislike.svg";
import bookmark from "../../../public/bookmark.svg";

const answerCard = ({ ...props }) => {
  return (
    <div className={styles["answer-card-outer-cont"]}>
      <div className={styles["question-cont"]}>{props.question}</div>
      <div className={styles[`questions-${props.tag}-tag-cont`]}>
        {props.tag}
      </div>
      <br></br>
      <div className={styles["answer-outer-cont"]}>
        <div className={styles["soln-head-cont"]}>SOLUTION</div>
        <div className={styles["answer-cont"]}>{props.answer}</div>
        <div
          style={{
            borderTop: "1.5px solid #B7D5FF",
            marginLeft: 20,
            marginRight: 20,
          }}
        />
        <div className={styles["bottom-cont"]}>
          <div className={styles["bookmark-cont"]}>
            <Image src={bookmark} alt="bookmark" />
            <button className={styles["tutor-btn"]}>Ask a Tutor</button>
          </div>

          <div className={styles["like-dislike-cont"]}>
            <div className={styles["likes-cont"]}>
              <Image src={like} alt="like" height={24} width={24} />
              {props.like}
            </div>
            <div className={styles["dislike-cont"]}>
              <Image src={dislike} alt="dislike" height={24} width={24} />
              {props.dislike}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default answerCard;
