import { IAuthor } from "./Author";

export interface INewsStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text: string;
}

export interface Story extends INewsStory {
  author: IAuthor;
}

export interface INewsStories {
  data: INewsStory;
}

export type StoryType = "top" | "new" | "best";

export interface ILink {
  url: string;
  title: string;
}
