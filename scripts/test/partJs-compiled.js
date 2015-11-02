/**
 * Created by Anchao on 2015/11/2.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Part = (function () {
    function Part() {
        _classCallCheck(this, Part);
    }

    _createClass(Part, null, [{
        key: 'getName',
        value: function getName() {
            console.log('alex');
        }
    }, {
        key: 'getAge',
        value: function getAge() {
            console.log(23);
        }
    }, {
        key: 'getFriend',
        value: function getFriend() {
            console.log('aaaaaaaaa');
        }
    }]);

    return Part;
})();

exports['default'] = Part;
module.exports = exports['default'];

//# sourceMappingURL=partJs-compiled.js.map