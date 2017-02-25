import EmailBlockController from './controller';
import './styles.css';

const moduleIdent = 'emailBlockComponent';

angular.module(moduleIdent, [])
  .component('emailBlock', {
    template: require('./template.html'),
    controller: EmailBlockController,
    bindings: {
      email: '<',
      onDelete: '&'
    }
  });

export default moduleIdent;
