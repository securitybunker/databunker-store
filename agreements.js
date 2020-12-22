class Agreements {
  constructor(srv){
    this._srv = srv;
  }
  async rawlist() {
    const res = await this._srv.get("/v1/lbasis");
    return res.data;
  }
  async accept(k, v, brief, data) {
    const res = await this._srv.put("/v1/agreement/"+k+"/"+v+"/"+brief, data);
    return res.data; 
  }
  async withdraw(k, v, brief) {
    const res = await this._srv.del("/v1/agreement/"+k+"/"+v+"/"+brief);
    return res.data;
  }
}

module.exports = Agreements;
