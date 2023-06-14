export const shortenTitle = (title: string): string => {
  if (title.length < 15) {
    return title;
  }
  let shortenedTitle = title.slice(0, 15);
  if (shortenedTitle[shortenedTitle.length - 1] === " ") {
    shortenedTitle = shortenedTitle.slice(0, -1);
  }
  return shortenedTitle + "…";
};
