import { startCase } from "lodash";

export const removeFirstWord = (string) => {
  if (string) {
    return string.substr(string.indexOf(" ") + 1);
  }
};

export const removeDashesAndCapitalize = (string) => {
  return startCase(string).replace(/-/g, " ");
};
