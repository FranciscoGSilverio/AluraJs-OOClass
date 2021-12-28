export class Clients {
  name;
  _id;

  get id() {
    return this._id;
  }

  constructor(name, id) {
    this.name = name;
    this._id = id;
  }
}
