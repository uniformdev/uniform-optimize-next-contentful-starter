const fs = require('fs');

require('dotenv').config();

if (process.env.NEXT_USE_SSR == '1') {
  fs.copyFileSync('./pagetemplates/[[...slug]].ssr.tsx', './pages/[[...slug]].tsx');
} else {
  fs.copyFileSync('./pagetemplates/[[...slug]].ssg.tsx', './pages/[[...slug]].tsx');
}
