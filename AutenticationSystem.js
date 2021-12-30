export class AutenticationSystem {
  static login(authenticable, password) {
    if (AutenticationSystem.isAuthenticable(authenticable))
    {return authenticable.authenticate(password);}
    return false;
  }
  static isAuthenticable(authenticable){
    return "authenticate" in authenticable && authenticable.authenticate instanceof Function;
  }
}
