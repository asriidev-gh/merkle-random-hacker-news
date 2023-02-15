import React from "react";
import { ILink, INewsStories } from "../interfaces/NewsStory";
import NewsAuthor from "./NewsAuthor";
import NewsCardImage from "./NewsCardImage";

const Link = ({ url, title }: ILink) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const NewsStory = ({ data }: INewsStories) => {
  const { id, by, title, time, url, score } = data;
  return (
    <div className="card">
      <div className="card-header">
        {/* <img src={`https://picsum.photos/seed/${id}/500/500`} alt="" /> */}
        <NewsCardImage />
      </div>
      <div className="card-body">
        <span className="score">Score: {score}</span>
        <h4>
          <Link url={url} title={title} />
        </h4>
        <div className="author">
          <img src={`https://picsum.photos/seed/${id}/500/500`} alt="author" />

          <NewsAuthor author={by} time={time} />
        </div>
      </div>
    </div>
  );
};

export default NewsStory;
