const express = require("express");
const app = express();
var indexRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
const cors = require('cors');
var db = require('./config/connection');
const bodyParser = require('body-parser');
const userHelpers = require('./Helpers/userHelper');





app.use(cors());
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use(bodyParser.json());
app.post("/signup", (req, res) => {
    console.log(req.body);
    userHelpers.Signup(req.body).then((response) => {
        if (response.error) {
            console.log('errror');
            res.json({ error: response.error }); // Send the error message as JSON response
        } else {
            res.json({ message: 'Signup successful' }); // Send success message as JSON response
        }
    })

});
app.post('/login', (req, res) => {
    console.log(req.body);
    userHelpers.Login(req.body).then((response) => {
        if (response.status) {
            res.json({ status: response.status });
        } else {
            res.json({ error: response.error });
        }
    })
})
app.get('/login', (req, res) => {
    // Send a JSON response to indicate successful signup
    res.json({ message: 'Signup successful' });
});


db.connect((err) => {
    if (err)
        console.log('errrorrrr' + err);
    else
        console.log("Database connected");
})


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});




const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
