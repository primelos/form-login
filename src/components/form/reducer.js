// USED FOR REDUCER EXAMPLE
export default function loginReducer(state, action) {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "login":
      return {
        ...state,
        loading: true,
        error: null,
      };
      case "logout":
      return {
        ...action.value
      };
    case "error":
      return {
        ...state,
        error: action.value,
        loading: false
      };
    case "success":
      return {
        ...action.value,
        loggedIn: true,
      };
    default:
      return state;
  }
}
