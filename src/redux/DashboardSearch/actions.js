const actions = {
  SEARCH_VALUE: 'SEARCH_VALUE',
  OUTBOUNDTYPE: 'OUTBOUNDTYPE',

  SearchValue_SUC: (data) => {
    return {
      type: actions.SEARCH_VALUE,
      data,
    }
  },

  SetOutBoundType: (data) => {
    return {
      type: actions.OUTBOUNDTYPE,
      data,
    }
  }


};

export default actions;
