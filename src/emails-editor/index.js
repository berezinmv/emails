import EmailBlock from '../email-block';
import EmailsEditorController from './controller';
import './styles.css';

const moduleIdent = 'emailEditorComponent';

angular.module(moduleIdent, [EmailBlock])
  .component('emailsEditor', {
    template: require('./template.html'),
    controller: EmailsEditorController,
    bindings: {
      emails: '=',
      title: '<',
      placeholder: '<'
    }
  });

export default moduleIdent;
