const express = require("express");
const app = express();
var indexRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
const cors = require('cors');
var db = require('./config/connection');






app.use(cors());
app.use('/', indexRouter);
app.use('/admin', adminRouter);




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



app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
