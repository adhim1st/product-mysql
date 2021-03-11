const initialState = {
  productData: [],
  updateFormData: {},
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/setProduct":
      return { ...state, productData: action.payload };
    case "updateForm/setUpdateForm":
      return { ...state, updateFormData: action.payload };
    default:
      return state;
  }
}
