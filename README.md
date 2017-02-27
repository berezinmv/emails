# Emails editor

## Installation
```bash
npm install emails-editor
```

## Usage
```javascript
import EmailsEditor from 'emails-editor';

angular.module('mod', [EmailsEditor]);
```

```html
<emails-editor title='editor title' placeholder='input placeholder'
               emails='array of emails'>
</emails-editor>
```

## Build
```bash
npm install
npm build
```

## Run example
```bash
npm install
npm run build-example
npm run start-example
```
Web server will run on 'localhost:8080'
