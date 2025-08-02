export const splitTitle = (title = "") => {
  const words = title.trim().split(" ");
  const first = words[0] || "";

  let middle = "";
  let last = "";

  if (words.length === 2) {
    middle = words[1]; // show 2nd word in middle
  } else if (words.length > 2) {
    middle = words.slice(1, -1).join(" ");
    last = words[words.length - 1];
  }

  return { first, middle, last };
};
