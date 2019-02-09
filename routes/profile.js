// var express = require('express');
// var router = express.Router();

// var multer = require('multer');
// /* GET home page. */
// // router.post('/', function (req, res, next) {
// //     res.render('index', {
// //         title: 'Express'
// //     });
// // });

// router.post('/',(req,res,next)=>{

// })
// module.exports = router;

var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

var upload = multer({
    storage: storage
}).single('profileImage');

//'/' means /profile cz we write inside route /profile so / means root profile
router.post('/', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
        }
        res.json({
            success: true,
            message: 'Image uploaded!'
        });

        // Everything went fine
    })
});


router.get('/', function (req, res) {
    res.send('hello world')
});

module.exports = router;