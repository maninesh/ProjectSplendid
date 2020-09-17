export const initialState = {
  data: {
    rows: [],
    cols: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_DATA": {
      return Object.assign({}, state, {
        data: action.payload,
      });
    }
    default:
      return state;
  }
}
