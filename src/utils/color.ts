import randomColor from "randomcolor";

export const generateColorPair = (): [string, string] => {
  const isForegroundDark = Math.random() < 0.5;

  const foregroundColor = randomColor({
    luminosity: isForegroundDark ? "dark" : "light",
  });

  const backgroundColor = randomColor({
    luminosity: isForegroundDark ? "light" : "dark",
  });

  return [foregroundColor, backgroundColor];
};
