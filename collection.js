class Collection{
  constructor(srv, name){
    this._srv = srv;
    this._collection = name;
  }
  async get(k, v) {
    const res = await this._srv.get("/v1/userapp/"+k+"/"+v+"/"+this._collection);
    return res.data;
  }
  async set(k, v, data) {
    const res = await this._srv.post("/v1/userapp/"+k+"/"+v+"/"+this._collection, data);
    return res.data;
  }
}

module.exports = Collection;
