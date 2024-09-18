import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: '.development.env' });

export const DB_NAME = process.env.DB_NAME;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const JWT_SECRET = process.env.JWT_SECRET;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
export const PORT = process.env.PORT;

export const MAIL_HOST = process.env.MAIL_HOST;
export const MAIL_USER = process.env.MAIL_USER;
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
export const MAIL_FROM = process.env.MAIL_FROM;

export const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY;
export const STRIPE_WEBHOOK_PRIVATE_SIGNING =
  process.env.STRIPE_WEBHOOK_PRIVATE_SIGNING;
export const STRIPE_WEBHOOK_LOCAL_SIGNING =
  process.env.STRIPE_WEBHOOK_LOCAL_SIGNING;

export const RESTART_SCHEMA = false;
export const DEFAULT_PROFILE_IMAGE_USER =
  'https://res.cloudinary.com/dfaej4bi8/image/upload/v1726057501/travel_zone_cloudinary/v5qriuhntjyjlveu2zdn.jpg';
