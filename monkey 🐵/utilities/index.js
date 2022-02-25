export const spreadClasses = (classes) =>
  `${classes.filter(Boolean).map((_class) => _class)}`
    .replaceAll(',', ' ')
    .replace(/  +/g, ' ')
    .trim();
