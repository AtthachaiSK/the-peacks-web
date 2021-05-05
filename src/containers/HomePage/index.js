import React, { useEffect, useState } from "react";
import ContentSection1 from "../../components/ContentSection1";
import CardType1 from "../../components/Cards/CardType1";
import CardType2 from "../../components/Cards/CardType2";
import CardType3 from "../../components/Cards/CardType3";
import CardType4 from "../../components/Cards/CardType4";
import { callApiGetNews } from "../../apis";
import Loading from "../../components/Loading";
import {randomNumberLength} from '../../utils/untils'
function Home() {
  const [topstories, setTopstories] = useState([]);
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectnews, setSelectnews] = useState("newest");

  const fetchTopStoriesAPI = async (orderBy) => {
    try {
      setLoading(true);
      const responseData = await callApiGetNews(orderBy);
      let { status, results } = responseData?.response;
      if (status === "ok") {
        setTopstories(results);
        console.log("topstories", topstories);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const fetchSportsAPI = async (orderBy, sports) => {
    try {
      setLoading(true);
      const responseData = await callApiGetNews(orderBy, sports);
      let { status, results } = responseData?.response;
      if (status === "ok") {
        setSports(results);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopStoriesAPI("newest");
    fetchSportsAPI("newest", true);
  }, []);

  const onSelectNews = (select) => {
    console.log("value", select);
    setSelectnews(select);
    fetchTopStoriesAPI(select);
    fetchSportsAPI(select, true);
  };

  const renderContents = () => (
    <main>
      <ContentSection1
        selected={selectnews}
        onSelect={onSelectNews}
        showBookmark={true}
      />
      <div id="content2">
        <div id="content2-1">
          <CardType1 data={topstories[randomNumberLength()]} />
        </div>
        <div id="content2-2">
          <CardType2 data={topstories[randomNumberLength()]} />
        </div>
        <div id="content2-3">
          <CardType2 data={topstories[randomNumberLength()]} />
        </div>
        <div id="content2-4">
          <CardType3 data={topstories[randomNumberLength()]} />
        </div>
        <div id="content2-5">
          <CardType3 data={topstories[randomNumberLength()]} />
        </div>
      </div>
      <div id="content3">
        <div id="content3-1">
          <CardType4 data={topstories[randomNumberLength()]} />
        </div>
        <div id="content3-2">
          <CardType4 data={topstories[randomNumberLength()]} />
        </div>
        <div id="content3-3">
          <CardType4 data={topstories[randomNumberLength()]} />
        </div>
      </div>
      <div id="content4">
        <h2>Sports</h2>
      </div>
      <div id="content5">
        <div id="content5-1">
          <CardType4 data={sports[randomNumberLength()]} />
        </div>
        <div id="content5-2">
          <CardType4 data={sports[randomNumberLength()]} />
        </div>
        <div id="content5-3">
          <CardType4 data={sports[randomNumberLength()]} />
        </div>
      </div>
      <div id="content6"></div>
    </main>
  );
  return <>{loading ? Loading() : renderContents()}</>;
}

export default Home;
