import axios from "axios";
import { BASE_API_URL } from "./constants";
import { StoryType } from "../interfaces/NewsStory";
import { getRandomItemsFromArray } from "../helper/ArrayHelper";

const getStory = async (id: string) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getAuthor = async (id: string) => {
  try {
    const author = await axios.get(`${BASE_API_URL}/user/${id}.json`);
    return author;
  } catch (error) {
    console.log("Error while getting a author.");
  }
};

export const getStories = async (type: StoryType, itemsCnt: number) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const randomStoryIds = getRandomItemsFromArray(storyIds);
    const stories = await Promise.all(
      randomStoryIds.slice(0, itemsCnt).map(getStory)
    );

    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};
