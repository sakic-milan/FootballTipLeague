import { makeAutoObservable, makeObservable, observable, action } from "mobx";

class UserStore {
  value = 0;

  constructor() {
    makeObservable(this, {
      value: observable,
      increment: action.bound,
    });
  }

  increment() {
    this.value++;
  }
}

export default UserStore;
