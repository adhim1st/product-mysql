const initialState = {
  productData: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/setProduct":
      return { ...state, productData: action.payload };
    default:
      return state;
  }
}
