const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return [...state, action.event];
    case "EDIT_EVENT":
      return state.map(event => {
        if (event.id === action.id) {
          return {
            ...event,
            ...action.updates
          };
        } else {
          return event;
        }
      });
    case "DELETE_EVENT":
      return state.filter(event => event.id !== action.id);
    case "SET_EVENTS":
      return action.events;
    default:
      return state;
  }
};
