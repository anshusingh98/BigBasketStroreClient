import ActionTypes from "../action/ActionTypes";

const CartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_BASKET:
      return [...state, payload];

    case ActionTypes.REMOVE_FROM_BASKET:
      const findIndex = state.findIndex((item) => item._id === payload);
      state[findIndex]["quantity"] = 1;
      return state.filter((item) => item._id !== payload);

    case ActionTypes.INC_QUANTITY:
      const itemIndex = state.findIndex((el) => el._id === payload);

      state[itemIndex]["quantity"] = state[itemIndex]["quantity"] + 1;
      console.log(state);
      return state;
    case ActionTypes.DEC_QUANTITY:
      const item_index = state.findIndex((el) => el._id === payload);
      if (state[item_index]["quantity"] > 1) {
        state[item_index]["quantity"] = state[item_index]["quantity"] - 1;
        console.log(state);
        return state;
      } else {
        return state.filter((item) => item._id !== payload);
      }
    case ActionTypes.EMPTY_BASKET:
      state.map((el) => (el["quantity"] = 1));
      return (state = []);
    default:
      return state;
  }
};

export default CartReducer;
