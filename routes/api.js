var express = require('express');
var router = express.Router();

// Middleware to send back the API version information
router.use(function(req, res, next) {
  res.set('Accept', 'vnd.drawer.'+ apiVersion(req) +'+json')
  next()
})

// RESTful routes
router.get('/users', function(req, res) {
  var userController = require('../app/controllers/api/'+ apiVersion(req) +'/users.js')
  userController.getAllUsers(req, res)
});


// Right about here I realized that while I have successfully removed the
// api version from the URI, I did not even come close to my actual objective:
// Figuring out how to handle the files to avoid duplication...


// Accept header will look like: vnd.drawer.VERSION+format
// ie: vnd.drawer.v2
var apiVersion = function(req) {
  var version = req.get('Accept').split('.')[2]
  return (isVersionAvailable(version)) ? version : 'v1'
}

var isVersionAvailable = function(version) {
  var availableVersions = [ 'v1', 'v2' ]
  return (availableVersions.indexOf(version) > -1)
}


module.exports = router;
