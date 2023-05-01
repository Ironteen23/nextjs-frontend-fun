import React from "react";
import styles from "../styles/SearchPage.module.css";
import Ads from "@/components/Ads/ads";
import { useState } from "react";
import { useMediaQuery, useIsTablet } from "@/lib/utils";
import Searchbar from "@/components/SearchBar/searchbar";

export default function SearchPage() {
  const [data, setData] = useState<any>([]);
  const [moreData, setMoreData] = useState<any>([]);
  const [val, setVal] = useState("");
  const [curr, setCurr] = useState("");

  const isTablet = useIsTablet();

  const results = [
    {
      id: 1,
      title: "Oxalic Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 2,
      title: "Nitric Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 3,
      title: "Sodium Nitrate",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 4,
      title: "Oxalic Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 5,
      title: "Nitric Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 6,
      title: "Sodium Nitrate",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 7,
      title: "Oxalic Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 8,
      title: "Nitric Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 9,
      title: "Sodium Nitrate",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 10,
      title: "Oxalic Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 11,
      title: "Nitric Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 12,
      title: "Sodium Nitrate",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 13,
      title: "Oxalic Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 14,
      title: "Nitric Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 15,
      title: "Sodium Nitrate",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 16,
      title: "Oxalic Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 17,
      title: "Nitric Acid",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
    {
      id: 18,
      title: "Sodium Nitrate",
      desc: "oxalic Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ut facere hic id, totam saepe incidunt earum quae deserunt reiciendis eos dolorem ipsa",
    },
  ];

  const handleSubmit = () => {
    //Fetch functionality will come here

    setData((prev) => {
      return results.filter((item) => {
        if (item.title.toLowerCase().includes(val.toLowerCase())) {
          return item;
        }
      });
    });

    console.log("data", data);
    setCurr(val);
  };

  return (
    <>
      <div className={styles["page-layout"]}>
        <Searchbar
          handleSubmit={handleSubmit}
          curr={curr}
          setVal={setVal}
          setCurr={setCurr}
          moreData={moreData}
          setMoreData={setMoreData}
        />

        <div className={styles["ans-layout-cont"]}>
          <div className={styles["results-outer-cont"]}>
            {curr ? (
              <div className={styles["looking-for-cont"]}>
                Showing results for "{val}"
              </div>
            ) : (
              <div>Please Search </div>
            )}

            {data && data.length > 0 ? (
              <div className={styles["results-cont"]}>
                {data.map((item) => {
                  return (
                    <div key={data.id}>
                      <h3 style={{ color: "#004BB6" }}>{item.title}</h3>
                      <p className={styles["results-desc"]}>{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                <div style={{ fontSize: "3rem " }}>NO RESULTS</div>
              </>
            )}
          </div>

          {isTablet ? <Ads /> : null}
        </div>

        {!isTablet && <Ads />}
      </div>
    </>
  );
}
