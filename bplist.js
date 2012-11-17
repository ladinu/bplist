var bplistParser  = require('bplist-parser');
var bplistCreator = require('bplist-creator');

// Expose bplist parser
exports.maxObjectSize = bplistParser.maxObjectSize;
exports.parseFile     = bplistParser.parseFile;
exports.parseBuffer   = bplistParser.parseBuffer;


// Expose bplist creator
exports.create = bplistCreator;
