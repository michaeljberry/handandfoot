export default class Player {
  constructor(fullName) {
    this.fullName = fullName;
  }

  get name() {
    return this.fullName;
  }
}
