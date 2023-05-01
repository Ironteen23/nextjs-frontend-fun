import React, { useState } from "react";
import styles from "../styles/QnaPage.module.css";
import SearchBar from "@/components/SearchBar/searchbar";
import Ads from "@/components/Ads/ads";
import { useIsTablet, useMediaQuery } from "@/lib/utils";

import QuestionCard from "@/components/questionCard/questionCard";

export default function Qnapage() {
  const [val, setVal] = useState("");
  const [curr, setCurr] = useState("");
  const [data, setData] = useState<any>();
  const [moreData, setMoreData] = useState<any>();
  const [view, setView] = useState(2);
  const [topic, setTopic] = useState("");
  const isTablet = useIsTablet();
  //   const isMobile = useMediaQuery("(max-width: 768px)");

  const results = [
    {
      id: 1,
      tag: "Easy",
      topic: "Geography",
      chapter: 4,
      question: "What is the capital of France?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt placeat consequatur velit magnam? Minima dicta doloremque maxime expedita dignissimos nisi animi quo rem similique, voluptatem nihil.",
      like: 153,
      dislike: 34,
    },
    {
      id: 2,
      tag: "Easy",
      topic: "Geography",
      chapter: 4,
      question: "What is the capital of Germany?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt placeat consequatur velit magnam? Minima dicta doloremque maxime expedita dignissimos nisi animi quo rem similique, voluptatem nihil.",
      like: 153,
      dislike: 34,
    },
    {
      id: 3,
      tag: "Hard",
      topic: "Geography",
      chapter: 4,
      question: "What is the capital of Spain?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt placeat consequatur velit magnam? Minima dicta doloremque maxime expedita dignissimos nisi animi quo rem similique, voluptatem nihil.",
      like: 153,
      dislike: 34,
    },
    {
      id: 4,
      tag: "Medium",
      topic: "Geography",
      chapter: 4,
      question: "What is the capital of Italy?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt placeat consequatur velit magnam? Minima dicta doloremque maxime expedita dignissimos nisi animi quo rem similique, voluptatem nihil.",
      like: 153,
      dislike: 34,
    },
    {
      id: 5,
      tag: "Hard",
      topic: "Geography",
      chapter: 1,
      question: "What is the capital of Portugal?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt placeat consequatur velit magnam? Minima dicta doloremque maxime expedita dignissimos nisi animi quo rem similique, voluptatem nihil.",
      like: 153,
      dislike: 34,
    },
    {
      id: 6,
      tag: "Hard",
      topic: "Geography",
      chapter: 2,
      question: "What is the role of health in human capital formation?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt placeat consequatur velit magnam? Minima dicta doloremque maxime expedita dignissimos nisi animi quo rem similique, voluptatem nihil.",
      like: 953,
      dislike: 334,
    },
    {
      id: 7,
      tag: "Hard",
      topic: "History",
      chapter: 2,
      question: "When did World War2 begin ?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt placeat consequatur velit magnam? Minima dicta doloremque maxime expedita dignissimos nisi animi quo rem similique, voluptatem nihil.",
      like: 953,
      dislike: 334,
    },
    {
      id: 8,
      tag: "Medium",
      topic: "History",
      chapter: 2,
      question: "What is the role of health in human capital formation?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt placeat consequatur velit magnam? Minima dicta doloremque maxime expedita dignissimos nisi animi quo rem similique, voluptatem nihil.",
      like: 953,
      dislike: 334,
    },
    {
      id: 9,
      tag: "Easy",
      topic: "History",
      chapter: 2,
      question: "What was the main factor causing World War 1 ?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt placeat consequatur velit magnam? Minima dicta doloremque maxime expedita dignissimos nisi animi quo rem similique, voluptatem nihil.",
      like: 953,
      dislike: 334,
    },
  ];

  const handleSubmit = () => {
    setData((prev) => {
      return results.filter((item) => {
        if (item.topic.toLowerCase().includes(val.toLowerCase())) {
          setTopic(item.topic);
          return item;
        }
      });
    });
    console.log("Success", val);
    console.log("data", data);

    setMoreData((prev) => {
      return results.filter((item, i) => {
        if (item.topic.toLowerCase().includes(val.toLowerCase())) {
          return item;
        }
      });
    });
    setView(2);
  };

  const handleViewMore = () => {
    setView((prev) => {
      return prev + 2;
    });
  };

  // const [active, setActive] = useState("-1");

  return (
    <>
      <div className={styles["layout-outer"]}>
        <SearchBar
          setVal={setVal}
          handleSubmit={handleSubmit}
          setCurr={setCurr}
          moreData={moreData}
          view={view}
          setView={setView}
          setMoreData={setMoreData}
        />

        <div className={styles["ans-layout-cont"]}>
          <div className={styles["results-outer-cont"]}>
            <div className={styles["topic-cont"]}>{topic}</div>
            <br />
            <div className={styles["questions-head-cont"]}>QUESTIONS</div>

            {val === "" && !data ? (
              <div className={styles["get-started-cont"]}>
                Please search to get started
              </div>
            ) : null}

            {data && data.length > 0 ? (
              <div className={styles["results-cont"]}>
                {data.map((item, i) => {
                  if (i < 1) return <QuestionCard {...item} key={item.id} />;
                  else return;
                })}
                <div className={styles["sim-questions-outer-cont"]}>
                  <div className={styles["sim-ques-head"]}>
                    SIMILAR QUESTIONS
                  </div>
                  {moreData?.map((item, i) => {
                    return (
                      <>
                        {view > i && i > 0 ? (
                          <QuestionCard {...item} key={item.id} />
                        ) : null}
                        {/* <QuestionCard {...item} key={item.id} /> */}
                      </>
                    );
                  })}
                  <br />
                  <div
                    className={styles["view-more-cont"]}
                    onClick={() => handleViewMore()}
                  >
                    <div className={styles["view-more-head"]}>View More</div>
                  </div>
                </div>
                <br />
                <button className={styles["signup-btn"]}>
                  <div style={{ textAlign: "center" }}>Sign Up To Continue</div>
                </button>
              </div>
            ) : (
              <>{/* <div style={{ fontSize: "3rem " }}>NO RESULTS</div> */}</>
            )}
          </div>

          {isTablet ? <Ads /> : null}
        </div>

        {!isTablet && <Ads />}
      </div>
    </>
  );
}

// export default qnapage;
