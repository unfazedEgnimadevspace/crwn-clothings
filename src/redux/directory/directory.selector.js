import { createSelector } from "reselect";
const selectDirectory = (state) => state.directory;

const selectDirectoryItems = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
export default selectDirectoryItems;
