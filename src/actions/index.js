import {
  UPDATE_TRANSACTION_ID,
  UPDATE_TRANSACTION_CURRENCIES,
  UPDATE_TRANSACTION_DETAILS,
  UPDATE_TRANSACTION_AMOUNT,
} from '../constants/action-types';

export const updateTransactionId = transactionId => ({
  type: UPDATE_TRANSACTION_ID,
  payload: transactionId,
});
export const updateTransactionCurrencies = currencies => ({
  type: UPDATE_TRANSACTION_CURRENCIES,
  payload: currencies,
});
export const updateTransactionDetails = transactionDetails => ({
  type: UPDATE_TRANSACTION_DETAILS,
  payload: transactionDetails,
});
export const updateTransactionAmount = amount => ({
  type: UPDATE_TRANSACTION_AMOUNT,
  payload: amount,
});
