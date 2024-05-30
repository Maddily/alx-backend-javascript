export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function'
        || this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
      ) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    return '';
  }
}
