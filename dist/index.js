"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/', (req, res) => {
  return res.json({
    message: 'Hello World'
  });
});
app.listen(3000, () => {
  console.log('App running on port 3000');
});