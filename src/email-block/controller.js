const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class EmailBlockController {

  /**
   * @type {string}
   */
  email;

  /**
   * @type {Function}
   */
  onDelete;

  valid() {
    return emailRegex.test(this.email);
  }

  invalid() {
    return !this.valid();
  }

  delete() {
    this.onDelete();
  }
}
