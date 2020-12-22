const Collection = require('./collection');
const Agreements = require('./agreements');
const Users = require('./users');
const Server = require('./server');

module.exports = function (options) {
  this._server = new Server(options);
  this.users = new Users(this._server);
  this.agreements = new Agreements(this._server);
  this.collection = function (name) {
    return new Collection(this._server, name);
  };
};
