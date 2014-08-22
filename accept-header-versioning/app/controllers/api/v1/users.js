// Users v1

var mockUsers = [
  {"name":"Annie", "age":20},
  {"name":"Bobby", "age":25},
  {"name":"Carly", "age":30},
  {"name":"Danny", "age":35}
]


var Users = {
  getAllUsers: function(req, res) {
    res.json(mockUsers)
  }
}

module.exports = Users
