const colorThemes = {};

function createColorTheme(
  colorName,
  base,
  lightest,
  lighter,
  light,
  dark,
  darker,
  darkest
) {
  if (arguments.length !== 8) {
    console.log("Incorrect color arguments: ", colorName);
    return;
  }
  colorThemes[colorName] = {
    base,
    lightest,
    lighter,
    light,
    dark,
    darker,
    darkest
  };
}

// w3schools color picker
// 60, 75, 70, 65, 55, 50, 45
createColorTheme(
  "purple",
  "#cc66cc",
  "#df9fdf",
  "#d98cd9",
  "#d279d2",
  "#c653c6",
  "#bf40bf",
  "#ac39ac"
);
createColorTheme(
  "green",
  "#5bd75b",
  "#98e698",
  "#84e184",
  "#6fdc6f",
  "#46d246",
  "#32cd32",
  "#2db92d"
);

createColorTheme(
  "blue",
  "#3399ff",
  "#80bfff",
  "#66b3ff",
  "#4da6ff",
  "#1a8cff",
  "#0080ff",
  "#0073e6"
);

createColorTheme(
  "red",
  "#ff3333",
  "#ff8080",
  "#ff6666",
  "#ff4d4d",
  "#ff1a1a",
  "#ff0000",
  "#e60000"
);
createColorTheme(
  "orange",
  "#ff8533",
  "#ffb380",
  "#ffa366",
  "#ff944d",
  "#ff751a",
  "#ff6600",
  "#e65c00"
);

export default colorThemes;
