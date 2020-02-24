const updateBackgroundColor = theme => {
  let root = document.documentElement;

  root.style.setProperty("--color-primary", theme.base);
  root.style.setProperty("--color-primary-hoverLight", theme.hoverLight);
  root.style.setProperty("--color-primary-hoverLighter", theme.hoverLighter);
  root.style.setProperty("--color-primary-light", theme.light);
  root.style.setProperty("--color-primary-dark", theme.dark);
  root.style.setProperty("--color-primary-hoverDark", theme.hoverDark);
};

export default updateBackgroundColor;
