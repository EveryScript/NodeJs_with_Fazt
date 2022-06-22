// --- IMPORTS ---
// Importing Express (thanks to "type": "module", in package.json)
import express from 'express';
// Importing modules to get source dir automatically
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
// Impoting file of routes
import my_routes from './routes/routes.js';

// Define application by Express
const app = express();

// Define a global source direction AUTO (source files in this PC)
const __dirname = dirname(fileURLToPath(import.meta.url));

// Setting views pages to render
app.set('views', join(__dirname, 'views')); // Define direction joining "views"
app.set('view engine', 'ejs');      // Define Engine to Views (EJS)

// Ussing my_routes (from /routes/routes.js)
app.use(my_routes);

// Reading all files from ...
app.use(express.static(join(__dirname, 'public')));

// Creating a listen to a port (3000)
app.listen(3000 || process.env.PORT);
console.log("El servidor de Express ha iniciado en el puerto ", process.env.PORT || 3000)
