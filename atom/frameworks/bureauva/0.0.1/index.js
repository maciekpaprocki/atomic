var express  = require('express');
var atom = require('atom');
var atomLess = require('atom-less');


atom.setParser('style[type="text/less"],less',atomLess);
atom.setPath(__dirname);
module.exports = atom;