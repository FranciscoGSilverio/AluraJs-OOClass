export class Clients {
  get id() {
    return this._id;
  }

  constructor(name, id, password) {
    this._name = name;
    this._id = id;
    this._password = password;
  }
  authenticate(){
    return true;
  }
}
