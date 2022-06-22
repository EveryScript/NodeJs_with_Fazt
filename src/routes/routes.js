// ----- Routes to Express -----

// Importing Express (only Router)
import { Router } from "express";

// Define const of Route
const router = Router();

// Defining routes (engining a ".ejs" page in views)
router.get('/', (req, res) => res.render('index', { title_page: "Main" }) );    // Empty Route (send parameter)

router.get('/about', (req, res) => res.render('about', { title_page: "About" }) );

router.get('/contact', (req, res) => res.render('contact', { title_page: "Contact" }) );

// Exporting Express Router configuration
export default router;