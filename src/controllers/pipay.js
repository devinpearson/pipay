import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import PipayService from '../services/pipay';

const router = Router();
const pipay = new PipayService(
  'https://test.globee.com/payment-api/v1',
  // 'h6ao6fWJJdLINS6puNfBjUpRpZtaUsSE',
  'NO7EDXWBFHO81a65JnvInMqjimN12cDW',
);

/**
 * GET /api/pipay/payment-currencies/:id
 */
router.get('/payment-currencies/:id', (req, res, next) => {
  pipay
    .getCurrencies(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/**
 * POST /api/pipay/payment-request
 */
router.post('/payment-request', (req, res, next) => {
  pipay
    .createPaymentRequest(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
});

/**
 * GET /api/pipay/payment-address/:transactionId/:coinId
 */
router.get('/payment-address/:transactionId/:coinId', (req, res, next) => {
  pipay
    .getPaymentAddress(req.params.transactionId, req.params.coinId)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/**
 * GET /api/pipay/payment-status/:transactionId
 */
router.get('/payment-status/:transactionId', (req, res, next) => {
  pipay
    .getPaymentStatus(req.params.transactionId)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
