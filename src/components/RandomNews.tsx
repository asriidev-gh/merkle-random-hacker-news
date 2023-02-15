import React, { useState } from "react";
import { useStoriesDataFetcher } from "../hooks/useDataFetcher";
import NewsStory from "./NewsStory";
import PropagateLoader from "react-spinners/PropagateLoader";
import { StoryType } from "../interfaces/NewsStory";

const RandomNews = () => {
  const [newsType] = useState<StoryType>("top");
  const { data: stories, isLoading } = useStoriesDataFetcher(newsType);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <PropagateLoader color="#36d7b7" />
        </div>
      ) : (
        <>
          <div className="header">
            <h1>Random Hacker News</h1>
          </div>
          <div className="container">
            {stories &&
              stories.map((story) => {
                return <NewsStory data={story} />;
              })}
          </div>
          <div className="footer">
            <span>Developed by: Andy R.</span>
            <a href="#">Github Link</a>
          </div>
        </>
      )}
    </>
  );
};
export default RandomNews;
