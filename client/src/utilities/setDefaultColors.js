import colorThemes from "./colorThemes";

const setDefaultColors = () => {
  let root = document.documentElement;

  const theme = colorThemes.blue;

  root.style.setProperty("--color-primary", theme.base);
  root.style.setProperty("--color-primary-lightest", theme.lightest);
  root.style.setProperty("--color-primary-lighter", theme.lighter);
  root.style.setProperty("--color-primary-light", theme.light);
  root.style.setProperty("--color-primary-dark", theme.dark);
  root.style.setProperty("--color-primary-darker", theme.darker);
  root.style.setProperty("--color-primary-darkest", theme.darkest);
};

export default setDefaultColors;
