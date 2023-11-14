import actions from './actions';

const initialState = {
  data: {},
  loading: false,
  error: null,
};
const { SEARCH_VALUE,OUTBOUNDTYPE } = actions;
const SearchReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case SEARCH_VALUE:
      return {
        ...state,
        data
      }
    default:
      return state;
  }
};

const OutBoundTypeReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch ( type) {
    case OUTBOUNDTYPE:
      return {
        ...state,
        data
      }
    default:
      return state;
  }
}

export { SearchReducer, OutBoundTypeReducer };
