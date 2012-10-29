
/*
 * GET home page.
 */

var mimelib = require("mimelib");


exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
};


exports.decode = function(req, res) {
  var encoded = req.body.encoded,
      decoded;

  if (encoded) {
    decoded = mimelib.decodeQuotedPrintable(encoded);
  }
  res.render('index', { title: 'Express', encoded: encoded, decoded: decoded });
};