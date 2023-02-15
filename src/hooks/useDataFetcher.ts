import { useQuery } from "react-query";
import { getAuthor, getStories } from "../services/apis";
import { StoryType } from "../interfaces/NewsStory";
import { getSortedByScore } from "../helper/ArrayHelper";

export const useStoriesDataFetcher = (type: StoryType) => {
  const { data, isLoading, error } = useQuery(["stories", type], () =>
    getStories(type, 10)
  );

  const storyData = data && getSortedByScore(data.map((item) => item?.data));

  return {
    data: storyData,
    isLoading,
    error,
  };
};

export const useAuthorDataFetcher = (id: string) => {
  const { data, isLoading, error } = useQuery(`author ${id}`, () =>
    getAuthor(id)
  );

  return {
    data,
    isLoading,
    error,
  };
};
