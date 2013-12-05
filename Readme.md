
# upload

  Ajax upload component

## Installation

  Install with [component(1)](http://component.io):

    $ component install shallker/upload

## Quick Start
```javascript
var Upload = require('upload');
var upload = new Upload;
var photo = document.getElementById('file-input').files[0];
var payload = new FormData;

payload.append('photo', photo);
upload.file(payload).to('/api/upload');

upload.on('progress', function (progress) {
  console.log(progress);
});

upload.on('complete', function (ev) {
  console.log('complete');
});
```

## API
### upload
#### file(Mix payload)
#### to(String url)


## License

  MIT
