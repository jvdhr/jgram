// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SET_CITY_FILTER
export const setCityFilter = (city = "") => ({
  type: "SET_CITY_FILTER",
  city
});

// SET_DATE_FILTER
export const setDateFilter = date => ({
  type: "SET_DATE_FILTER",
  date
});

// SORT_BY_DATE
export const setCategoryFilter = (category = "") => ({
  type: "SET_CATEGORY_FILTER",
  category
});

// SET_START_DATE
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
