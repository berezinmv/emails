import 'angular';
let change = require('chance').Chance();

import './example.css';
import EmailsEditor from './emails-editor';

angular.module('example', [EmailsEditor])
  .controller('ExampleController', ['$scope', function ($scope) {
    $scope.emails = ['sidorov@mail.ru'];
    $scope.title = 'Share "Board name" with others';
    $scope.placeholder = 'add more people...';

    $scope.onChange = function (emails) {
      $scope.emails = emails;
    }

    $scope.addEmails = function () {
      $scope.emails = $scope.emails.concat(chance.email());
    }

    $scope.getEmailsCount = function () {
      alert(`Emails count: ${$scope.emails.length}`);
    }
  }]);

document.addEventListener('DOMContentLoaded', () => {
  angular.bootstrap(document, ['example']);
});
