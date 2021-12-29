export class Clients {
  get id() {
    return this._id;
  }

  constructor(name, id) {
    this.name = name;
    this._id = id;
  }
}
