import { populateDropDowns } from './populateDropDowns.js';

export const initialize = (data) => {
  console.log('initialized', data);

  populateDropDowns(data);
};