// Users v1

var mockUsers = [
  {"name": {"first":"Annie","last":"Anderson"}, "age":20},
  {"name": {"first":"Bobby","last":"Boyton"}, "age":25},
  {"name": {"first":"Carly","last":"Cooper"}, "age":30},
  {"name": {"first":"Danny","last":"Disdale"}, "age":35}
]


var Users = {
  getAllUsers: function(req, res) {
    res.json(mockUsers)
  }
}

module.exports = Users
