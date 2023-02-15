import { INewsStory } from "../interfaces/NewsStory";

export const getRandomItemsFromArray = (arrData:string[], randomCnt = 10) => {
  let randomArr: string[] = [];
  if (arrData) {
    const shuffledArray = arrData.sort(() => 0.5 - Math.random());
    randomArr = shuffledArray.slice(0, randomCnt);
  }
  return randomArr;
}

export function getSortedByScore(list: INewsStory[]): INewsStory[] {
  return list.sort((a: INewsStory, b: INewsStory) => {
    return b.score < a.score || 0 ? 1 : -1
  })
}