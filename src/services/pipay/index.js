import Boom from 'boom';
import axios from 'axios';

class Pipay {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.axios = axios.create({
      baseURL: baseUrl,
      timeout: 2000,
      headers: { 'X-AUTH-KEY': apiKey },
    });
  }

  createPaymentRequest(data) {
    return this.axios
      .post(`/payment-request`, {
        total: data.amount,
        customer: {
          email: data.email,
        },
      })
      .then(
        response =>
          new Promise(resolve => {
            resolve(response.data.data);
          }),
      )
      .catch(
        error =>
          new Promise(resolve => {
            resolve(Boom.boomify(error));
          }),
      );
  }

  getCurrencies(id) {
    return this.axios
      .get(`/payment_request/${id}/payment_methods`)
      .then(
        response =>
          new Promise(resolve => {
            resolve(response.data.data);
          }),
      )
      .catch(
        error =>
          new Promise(resolve => {
            resolve(Boom.boomify(error));
          }),
      );
  }

  getPaymentAddress(transactionId, coinId) {
    return this.axios
      .get(`/payment_request/${transactionId}/addresses/${coinId}/default`)
      .then(
        response =>
          new Promise(resolve => {
            resolve(response.data.data);
          }),
      )
      .catch(
        error =>
          new Promise(resolve => {
            resolve(Boom.boomify(error));
          }),
      );
  }

  getPaymentStatus(transactionId) {
    return this.axios
      .get(`/payment-request/${transactionId}`)
      .then(
        response =>
          new Promise(resolve => {
            resolve(response.data.data);
          }),
      )
      .catch(
        error =>
          new Promise(resolve => {
            resolve(Boom.boomify(error));
          }),
      );
  }
}

export default Pipay;
