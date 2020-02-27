const colorThemes = {};

function createColorTheme(colorName, base, dark, light) {
  if (arguments.length !== 4) {
    console.error("Incorrect color arguments: ", colorName);
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

export default colorThemes;
