import { makeAutoObservable, makeObservable, observable, action } from "mobx";

class AuthStore {
  vrednost = 0;

  constructor() {
    makeObservable(this, {
      vrednost: observable,
      povecaj: action.bound,
    });
  }

  povecaj() {
    this.vrednost++;
  }
}

export default AuthStore;
