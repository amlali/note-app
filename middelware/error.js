
function routeError (req,res,next) {
        console.log('error routeError')
        var err = new Error('Not Found');
        err.status = 404;
        next(err);

    
}

function errorHandler (err, req, res, next) {
    console.log('error handeller')
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
}
// module.exports = {
//     routeError,
//     errorHandler

// }