import actions from './actions';

const { SearchValue_SUC, SetOutBoundType } = actions;


const SearchValue = (value) => {
  return async (dispatch) => {
    dispatch(SearchValue_SUC(value))
  }
}

const OutBoundType = (value) => {
  return async (dispatch) => {
    dispatch(SetOutBoundType(value))
  }
}

export { SearchValue ,OutBoundType};
