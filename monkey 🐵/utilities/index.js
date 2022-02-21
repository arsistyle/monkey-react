export const spreadClasses = (classes) =>
  `${classes.map((_class) => _class)}`
    .replaceAll(',', ' ')
    .replace(/  +/g, ' ')
    .trim();
