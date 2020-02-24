const colorThemes = {};

function createColorTheme(colorName, base, dark, light) {
  if (arguments.length !== 4) {
    console.log("Incorrect color arguments: ", colorName);
    return;
  }

  const { hoverDark, hoverLight, hoverLighter } = generateShadesAndTints(
    dark,
    light
  );

  colorThemes[colorName] = {
    base,
    dark,
    hoverDark,
    light,
    hoverLight,
    hoverLighter
  };
}

function generateShadesAndTints(dark, light) {
  function getLValue(input) {
    return input.split(",")[2].match(/\d+/g)[0] * 1;
  }
  let lightLVal = getLValue(light);
  let darkLVal = getLValue(dark);

  let hoverDarkL = darkLVal + 5;
  let hoverLightL = lightLVal + 10;
  let hoverLighterL = lightLVal + 20;

  function insertNewL(color, originalL, newL) {
    return [color.split(originalL)[0], newL, color.split(originalL)[1]].join(
      ""
    );
  }

  return {
    hoverDark: insertNewL(dark, darkLVal, hoverDarkL),
    hoverLight: insertNewL(light, lightLVal, hoverLightL),
    hoverLighter: insertNewL(light, lightLVal, hoverLighterL)
  };
}

// material.io color tool
createColorTheme(
  "purple",
  "hsl(291, 64%, 42%)",
  "hsl(290, 100%, 25%)",
  "hsl(292, 71%, 63%)"
);

createColorTheme(
  "green",
  "hsl(123, 46%, 34%)",
  "hsl(124, 100%, 16%)",
  "hsl(118, 33%, 52%)"
);

createColorTheme(
  "blue",
  "hsl(208, 79%, 51%)",
  "hsl(209, 100%, 35%)",
  "hsl(209, 100%, 71%)"
);

createColorTheme(
  "red",
  "hsl(0, 66%, 47%)",
  "hsl(0, 100%, 28%)",
  "hsl(5, 100%, 66%)"
);

createColorTheme(
  "orange",
  "hsl(33, 100%, 49%)",
  "hsl(29, 100%, 38%)",
  "hsl(39, 100%, 64%)"
);

// // w3schools color picker
// // 60, 75, 70, 65, 55, 50, 45
// createColorTheme(
//   "purple",
//   "#cc66cc",
//   "#df9fdf",
//   "#d98cd9",
//   "#d279d2",
//   "#c653c6",
//   "#bf40bf",
//   "#ac39ac"
// );
// createColorTheme(
//   "green",
//   "#5bd75b",
//   "#98e698",
//   "#84e184",
//   "#6fdc6f",
//   "#46d246",
//   "#32cd32",
//   "#2db92d"
// );

// createColorTheme(
//   "blue",
//   "#3399ff",
//   "#80bfff",
//   "#66b3ff",
//   "#4da6ff",
//   "#1a8cff",
//   "#0080ff",
//   "#0073e6"
// );

// createColorTheme(
//   "red",
//   "#ff3333",
//   "#ff8080",
//   "#ff6666",
//   "#ff4d4d",
//   "#ff1a1a",
//   "#ff0000",
//   "#e60000"
// );
// createColorTheme(
//   "orange",
//   "#ff8533",
//   "#ffb380",
//   "#ffa366",
//   "#ff944d",
//   "#ff751a",
//   "#ff6600",
//   "#e65c00"
// );

export default colorThemes;
