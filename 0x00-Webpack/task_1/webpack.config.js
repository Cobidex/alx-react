import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  mode: 'production',
};
