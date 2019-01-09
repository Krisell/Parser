'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _optionsHandler = require('@krisell/options-handler');

var _optionsHandler2 = _interopRequireDefault(_optionsHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Parser = {
    json: function json() {
        for (var _len = arguments.length, specs = Array(_len), _key = 0; _key < _len; _key++) {
            specs[_key] = arguments[_key];
        }

        var options = _optionsHandler2.default.build({
            specs: specs,
            defaultOptions: { type: 'object' },
            namedOptions: ['seralized', 'type']
        });

        function defaultValue() {
            if (options.type === 'array') {
                return [];
            }

            return {};
        }

        try {
            var parsed = JSON.parse(options.seralized);

            if (!parsed) {
                return defaultValue();
            }

            return parsed;
        } catch (e) {
            return defaultValue();
        }
    }
};

exports.default = Parser;