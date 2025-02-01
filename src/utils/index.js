import dotenv from 'dotenv';

dotenv.config();

if(!process.env.BUCKET_NAME) {
  throw new Error('Please specify the BUCKET_NAME environment variable');
}
export const BUCKET_NAME = process.env.BUCKET_NAME;

if(!process.env.PORT) {
  console.log('PORT environment variable not specified. Using default port 3000');
}

export const PORT = process.env.PORT || 3000;

if(!process.env.SUPABASE_PROJECT_URL) {
  throw new Error('Please specify the SUPABASE_PROJECT_URL environment variable');
}

export const SUPABASE_PROJECT_URL = process.env.SUPABASE_PROJECT_URL;

if(!process.env.SUPABASE_ANON_KEY) {
  throw new Error('Please specify the SUPABASE_ANON_KEY environment variable');
}

export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
