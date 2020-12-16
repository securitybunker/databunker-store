const axios = require('axios')

var defaultUrl = 'http://127.0.0.1:3000';
var defaultToken = 'DEMO';

class Server{
  constructor(options){
    this.srv = options.url ? options.url : defaultUrl;
    this.token = options.token ? options.token : defaultToken;
  }
  async get(url) {
    const headers = {'X-Bunker-Token': this.token};
    try {
      return await axios.get(this.srv + url, {headers: headers});
    } catch (err) {
      if (err.response.data.status) {
        return {data: err.response.data};
      }
      return {data:{status:'error', message:err.response.data}};
    }
  }
  async post(url, data) {
    const headers = {
      'X-Bunker-Token': this.token,
      'Content-Type': 'application/json;charset=UTF-8'
    };
    try {
      return await axios.post(this.srv + url, data, {headers: headers});
    } catch (err) {
      if (err.response.data.status) {
        return {data: err.response.data};
      }
      return {data:{status:'error', message:err.response.data}};
    }
  }
  async put(url, data) {
    const headers = {
      'X-Bunker-Token': this.token,
      'Content-Type': 'application/json;charset=UTF-8'
    };
    try {
      return await axios.put(this.srv + url, data, {headers: headers});
    } catch (err) {
      if (err.response.data.status) {
        return {data: err.response.data};
      }
      return {data:{status:'error', message:err.response.data}};
    }
  }

}

module.exports = Server;
