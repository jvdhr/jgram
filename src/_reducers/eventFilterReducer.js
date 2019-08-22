import moment from "moment";

// Filters Reducer

const defaultState = {
  text: "",
  city: "",
  category: "",
  // date: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SET_CITY_FILTER":
      return {
        ...state,
        city: action.city
      };
    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        category: action.category
      };
    case "SET_DATE_FILTER":
      return {
        ...state,
        date: action.date
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
