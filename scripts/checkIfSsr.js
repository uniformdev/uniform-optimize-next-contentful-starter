require('dotenv').config();
const isSsr = process.env.NEXT_USE_SSR;
process.exit(isSsr ? 1 : 0);
