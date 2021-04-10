const axios = require('axios').default;
const http = require('http');
const https = require('https');

const defaultUrl = 'http://127.0.0.1:3000';
const defaultToken = 'DEMO';
const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

class Server{
  constructor(options){
    this.srv = options.url ? options.url : defaultUrl;
    this.token = options.token ? options.token : defaultToken;
    if (this.srv.endsWith("/")) {
      this.srv = this.srv.slice(0, -1);
    }
  }
  async get(url) {
    const headers = {
      'X-Bunker-Token': this.token
    };
    const options = {
        httpAgent, httpsAgent, headers
    };
    try {
      return await axios.get(this.srv + url, options);
    } catch (err) {
      if (err.response.data.status) {
        return {data: err.response.data};
      }
      return {data:{status:'error', message:err.response.data}};
    }
  }
  async del(url) {
    const headers = {'X-Bunker-Token': this.token};
    const options = {
        httpAgent, httpsAgent, headers
    };
    try {
      return await axios.delete(this.srv + url, options);
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
    const options = {
        httpAgent, httpsAgent, headers
    };
    try {
      return await axios.post(this.srv + url, data, options);
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
    const options = {
        httpAgent, httpsAgent, headers
    };
    try {
      return await axios.put(this.srv + url, data, options);
    } catch (err) {
      if (err.response.data.status) {
        return {data: err.response.data};
      }
      return {data:{status:'error', message:err.response.data}};
    }
  }

}

module.exports = Server;
