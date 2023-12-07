const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Lsp = require('./models/lsp');
const User = require('./models/user');

const app = express();

const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));




// Set 'views' as the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define routes for your HTML files
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/faq', (req, res) => {
    res.render('faq');
});





app.get('/public/home', (req, res) => {
    res.render('home');
});

app.get('/public/main', (req, res) => {
    res.render('main');
});

app.get('/after_user_login', (req, res) => {
    res.render('after_user_login');
});



app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup_lsp', (req, res) => {
 res.render('signup_lsp');
 
});
app.get('/lsp_profile_byuser', (req, res) => {
    res.render('lsp_profile_byuser');
});


app.get('/search', (req, res) => {
    res.render('search');
});

app.get('/signup_user', (req, res) => {
    res.render('signup_user');
});

app.get('/login_user', (req, res) => {
    res.render('login_user');
});
app.get('/login_lsp', (req, res) => {
    res.render('login_lsp');
});

app.get('/aftersearch', (req, res) => {
    res.render('aftersearch');
});

mongoose.connect('mongodb://127.0.0.1:27017/signupDB').
then(()=>{
  console.log("Database connected")
}).catch((e)=>{
console.log(e);
console.log("Database not connected")
})
// Handle form submission
app.post('/', async (req, res) => {
    
    try {
        const newUser = new Lsp(req.body);
        await newUser.save();
        
        // Render the 'after_lsp_login' view with user information
        res.render('login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
        
       
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if a user with the provided credentials exists in the database
        const foundUser = await Lsp.findOne({ username, password });

        if (foundUser) {
            // Render the 'after_user_login' view with user information
            res.render('after_lsp_login', { userName: foundUser });
        } else {
            // Render the login page with an error message
            res.render('login', { error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/login_user', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if a user with the provided credentials exists in the database
        const foundUser = await User.findOne({ username, password });

        if (foundUser) {
            // Render the 'after_user_login' view with user information
            res.render('after_user_login', { userName: foundUser });
        } else {
            // Render the login page with an error message
            res.render('login', { error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Assuming this is your route definition for the search
// Update the route to use /search instead of /search/:key
// Assuming this is your route definition for the search
// Update the route to use /search instead of /search/:key
app.get("/search:keyword", async (req, resp) => {
    try {
        const data = await Lsp.find({
            "$or": [
                { "name": { $regex: req.query.keyword, $options: 'i' } },
                { "email": { $regex: req.query.keyword, $options: 'i' } }
            ]
        });

        // Render the results in a list using EJS
        resp.render('aftersearch', { results: data, keyword: req.query.keyword });
    } catch (error) {
        console.error(error);
        resp.status(500).json({ error: true, message: "Internal Server Error" });
    }
});


app.get('/lawyer/:id', async (req, res) => {
    try {
        const lawyerId = req.params.id;
        const lawyer = await Lsp.findById(lawyerId);

        if (!lawyer) {
            return res.status(404).render('error', { error: 'Lawyer not found' });
        }

        // Use the variable name 'lawyer' in the render function
        res.render('lsp_profile_byuser', { lawyer });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});








// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
