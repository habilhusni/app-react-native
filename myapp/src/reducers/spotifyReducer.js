import data from '../actions/constants';

export const spotifyReducer = (state = [], action) => {
  switch(action.type) {
    case data.GET_DATA_COLDPLAY: {
      return action.payload
    }
    case data.GET_DATA_PAYUNGTEDUH: {
      return action.payload
    }
    case data.GET_DATA_EDSHEERAN: {
      return action.payload
    }
    case data.GET_DATA_ZAYN: {
      return action.payload
    }
    case data.GET_DATA_PARAMORE: {
      return action.payload
    }
    case data.GET_DATA_EMINEM: {
      return action.payload
    }
    case data.GET_DATA_REDJUMPSUIT: {
      return action.payload
    }
    case data.GET_DATA_BRUNOMARS: {
      return action.payload
    }
    case data.GET_DATA_TWENTYONE: {
      return action.payload
    }
    case data.GET_DATA_RAISA: {
      return action.payload
    }
    case data.GET_DATA_TULUS: {
      return action.payload
    }
    default: return state;
  }
}
