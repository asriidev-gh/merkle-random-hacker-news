import * as React from "react";
import { getDateTimeFromTimestamp } from "../helper/TimeHelper";
import { useAuthorDataFetcher } from "../hooks/useDataFetcher";
import Skeleton from "react-loading-skeleton";

export interface IAuthor {
  author: string;
  time: number;
}

const NewsAuthor = (props: IAuthor) => {
  const { data: author, isLoading } = useAuthorDataFetcher(props.author);
  return (
    <>
      {isLoading ? (
        <Skeleton count={2} />
      ) : (
        <div className="author-info">
          <h5>
            {props.author}: {author && author.data?.karma}
          </h5>
          <small>{getDateTimeFromTimestamp(props.time)}</small>
        </div>
      )}
    </>
  );
};

export default NewsAuthor;
