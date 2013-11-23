/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Image = mongoose.model('Image'),
    _ = require('underscore');


/**
 * Find image by id
 */
exports.image = function(req, res, next, id) {
    Image.load(id, function(err, image) {
        if (err) return next(err);
        if (!image) return next(new Error('Failed to load image ' + id));
        req.image = image;
        next();
    });
};

/**
 * Create a image
 */
exports.create = function(req, res) {
    var image = new Image(req.body);
    image.user = req.user;

    image.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                image: image
            });
        } else {
            res.jsonp(image);
        }
    });
};

/**
 * Show an image
 */
exports.show = function(req, res) {;
    res.jsonp(req.image);
};

/**
 * List of all images
 */
exports.all = function(req, res) {
    Image.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(articles);
        }
    });
};