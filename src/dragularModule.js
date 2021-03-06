/* global angular */
'use strict';
var dragularDirective = require('./dragularDirective');
var dragularService = require('./dragularService');

/**
 * Dragular 4.3.4 by Luckylooke https://github.com/luckylooke/dragular
 * Angular version of dragula https://github.com/bevacqua/dragula
 */
module.exports = 'dragularModule';

angular
  .module('dragularModule', [])
  .factory('dragularService', dragularService)
  .directive('dragular', dragularDirective);
