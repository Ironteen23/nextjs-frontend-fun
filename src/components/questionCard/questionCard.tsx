import styles from "../../styles/QuestionCard.module.css";
import pic1 from "../../../public/viewarrow.svg";
import { useState } from "react";
import Image from "next/image";
import AnswerCard from "../answerCard/answerCard";

interface questionCardProps {
  question: string;
  tag: string;
  id: number;
  topic: string;
  chapter: number;
  like: number;
  dislike: number;
  answer: string;
}

const QuestionCard = ({
  question,
  tag,
  id,
  topic,
  chapter,
  like,
  dislike,
  answer,
}: questionCardProps) => {
  const [val, setVal] = useState<any>({ id: -1 });

  const handleClick = (id) => {
    setVal(id);
    console.log("lol", val);
  };

  return (
    <>
      {val?.id !== id ? (
        <div key={id} className={styles["results-ind-cont"]}>
          <div className={styles["questions-ind-cont"]}>{question}</div>
          <div className={styles[`questions-${tag}-tag-cont`]}>{tag}</div>

          <div
            className={styles["view-soln-outer-cont"]}
            onClick={() => handleClick({ id })}
          >
            <div className={styles["view-soln-inner-cont"]}>View Solution</div>
            <Image src={pic1} alt="view" width={21} height={13} />
          </div>

          {/* {val?.id === id ? <div>LOL TP</div> : null} */}
        </div>
      ) : (
        <AnswerCard
          question={question}
          answer={answer}
          key={id}
          tag={tag}
          like={like}
          dislike={dislike}
        />
      )}
    </>
  );
};

export default QuestionCard;
