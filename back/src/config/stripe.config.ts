import Stripe from 'stripe';
import { STRIPE_PRIVATE_KEY } from './env.config';

export const stripe = new Stripe(STRIPE_PRIVATE_KEY, {
    apiVersion: '2024-06-20',
  });