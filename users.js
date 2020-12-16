class Users{
  constructor(srv){
    this._srv = srv;
  }
  async get(k, v) {
    const res = await this._srv.get("/v1/user/"+k+"/"+v);
    return res.data;
  }
  async set(k, v, data) {
    const res = await this._srv.put("/v1/user/"+k+"/"+v, data);
    return res.data; 
  }
  async create(data) {
    const res = await this._srv.post("/v1/user/", data);
    return res.data;
  }
}

module.exports = Users;
