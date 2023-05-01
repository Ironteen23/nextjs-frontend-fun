import React, { useState } from "react";
import styles from "../styles/QnaPage.module.css";
import SearchBar from "@/components/SearchBar/searchbar";
import Ads from "@/components/Ads/ads";
import { useIsTablet, useMediaQuery } from "@/lib/utils";

import QuestionCard from "@/components/questionCard/questionCard";

const qnapage = () => {
  const [val, setVal] = useState("");
  const [curr, setCurr] = useState("");
  const [data, setData] = useState<any>();
  const [moreData, setMoreData] = useState<any>();
  const [view, setView] = useState(2);
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
        "Role of health in human capital formation are as follow Only a healthy person can work efficiently and with full potential.  A healthy person can work in a more effective manner.  A healthy person can work in a productive way and in this way it can contribute better in the development of the economy of the country  The unhealthy person becomes a liability for the organization and country.  Thus for the development of human capital and country the health is the most important ",
      like: 953,
      dislike: 334,
    },
  ];

  const handleSubmit = () => {
    setData((prev) => {
      return results.filter((item) => {
        if (item.topic.toLowerCase().includes(val.toLowerCase())) {
          return item;
        }
      });
    });

    let x = results.length;
    let extradata = results.splice(1, x);
    setMoreData(extradata);
    console.log("et", extradata);
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
          setMoreData={setMoreData}
        />

        <div className={styles["ans-layout-cont"]}>
          <div className={styles["results-outer-cont"]}>
            <div className={styles["topic-cont"]}>DEFINITE INTEGRAL</div>
            <br />
            <div className={styles["questions-head-cont"]}>QUESTIONS</div>

            {data && data.length > 0 ? (
              <div className={styles["results-cont"]}>
                {data.map((item) => {
                  return <QuestionCard {...item} key={item.id} />;
                })}
                <div className={styles["sim-questions-outer-cont"]}>
                  <div className={styles["sim-ques-head"]}>
                    SIMILAR QUESTIONS
                  </div>
                  {moreData.map((item, i) => {
                    return (
                      <>
                        {view > i ? (
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
};

export default qnapage;
