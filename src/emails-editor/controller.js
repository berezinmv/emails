export default class EmailsEditorController {

  static $inject = ['$element'];

  /**
   * @type {Array<string>}
   */
  emails;

  /**
   * @type {string}
   */
  title;

  /**
   * @type {string}
   */
  placeholder;

  /**
   * @param $element {JQlite}
   */
  constructor($element) {
    this.element = $element;
    this.text = "";
  }

  /**
   * @param emails {Array<string>}
   */
  addEmails(emails) {
    this.emails = this.emails.concat(emails);
    this.scrollDown();
  }

  addEmail() {
    if (this.text && this.text.length) {
      this.addEmails([this.text]);
      this.text = "";
    }
  }

  /**
   * @param index {number}
   */
  removeEmail(index) {
    this.emails.splice(index, 1);
  }

  scrollDown() {
    setTimeout(() => {
      let container = this.element.find('div')[0];
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 1);
  }

  onFieldClick() {
    let input = this.element.find('input')[0];
    if (input) {
      input.focus();
      this.scrollDown();
    }
  }

  onBlur() {
    this.addEmail();
  }

  onKeypress($event) {
    const charCode = $event.charCode;
    if (charCode === 44 || charCode === 13) {
      $event.preventDefault();
      let target = $event.target;
      const selectionStart = target.selectionStart;
      if (target.value.length > selectionStart) {
        this.addEmails([target.value.slice(0, selectionStart)]);
        this.text = target.value.slice(selectionStart);
      }
      this.addEmail();
    }
  }

  onPaste($event) {
    $event.preventDefault();
    let clipboardData = event.clipboardData;
    if (clipboardData) {
      const text = clipboardData.getData('text/plain');
      if (text) {
        let emails = text.split(',').filter(Boolean);
        this.addEmails(emails);
      }
    }
  }
}
