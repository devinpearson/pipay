import {
  UPDATE_TRANSACTION_ID,
  UPDATE_TRANSACTION_CURRENCIES,
  UPDATE_TRANSACTION_DETAILS,
  UPDATE_TRANSACTION_AMOUNT,
} from '../constants/action-types';

const initialState = {
  currentTransactionId: {
    id: '',
  },
  currentTransactionCurrencies: [],
  currentTransactionDetails: {},
  currentTransactionAmount: '',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTION_ID:
      return {
        ...state,
        currentTransactionId: action.payload,
      };
    case UPDATE_TRANSACTION_CURRENCIES:
      return {
        ...state,
        currentTransactionCurrencies: action.payload.currencies,
      };
    case UPDATE_TRANSACTION_DETAILS:
      return {
        ...state,
        currentTransactionDetails: action.payload,
      };
    case UPDATE_TRANSACTION_AMOUNT:
      return {
        ...state,
        currentTransactionAmount: action.payload.amount,
      };
    default:
      return state;
  }
};
export default rootReducer;
