'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSearchBox = exports.SearchBoxConfigPropTypes = exports.SchemaType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _field_search = require('../form/field_search/field_search');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SchemaType = exports.SchemaType = _propTypes2.default.shape({
  strict: _propTypes2.default.bool,
  fields: _propTypes2.default.object,
  flags: _propTypes2.default.arrayOf(_propTypes2.default.string)
});

var SearchBoxConfigPropTypes = exports.SearchBoxConfigPropTypes = {
  placeholder: _propTypes2.default.string,
  incremental: _propTypes2.default.bool,
  schema: SchemaType
};

var EuiSearchBox = exports.EuiSearchBox = function (_Component) {
  _inherits(EuiSearchBox, _Component);

  function EuiSearchBox(props) {
    _classCallCheck(this, EuiSearchBox);

    return _possibleConstructorReturn(this, (EuiSearchBox.__proto__ || Object.getPrototypeOf(EuiSearchBox)).call(this, props));
  }

  _createClass(EuiSearchBox, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      this.inputElement.value = nextProps.query;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          placeholder = _props.placeholder,
          query = _props.query,
          incremental = _props.incremental,
          _onSearch = _props.onSearch,
          isInvalid = _props.isInvalid,
          title = _props.title,
          rest = _objectWithoutProperties(_props, ['placeholder', 'query', 'incremental', 'onSearch', 'isInvalid', 'title']);

      return _react2.default.createElement(_field_search.EuiFieldSearch, _extends({
        inputRef: function inputRef(input) {
          return _this2.inputElement = input;
        },
        fullWidth: true,
        placeholder: placeholder,
        defaultValue: query,
        incremental: incremental,
        onSearch: function onSearch(query) {
          return _onSearch(query);
        },
        isInvalid: isInvalid,
        title: title
      }, rest));
    }
  }]);

  return EuiSearchBox;
}(_react.Component);

EuiSearchBox.propTypes = _extends({
  query: _propTypes2.default.string.isRequired,
  onSearch: _propTypes2.default.func.isRequired, // (queryText) => void
  isInvalid: _propTypes2.default.bool,
  title: _propTypes2.default.string
}, SearchBoxConfigPropTypes);
EuiSearchBox.defaultProps = {
  placeholder: 'Search...',
  incremental: false
};
EuiSearchBox.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiSearchBox',
  'methods': [],
  'props': {
    'query': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': ''
    },
    'onSearch': {
      'type': {
        'name': 'func'
      },
      'required': true,
      'description': ''
    },
    'isInvalid': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': ''
    },
    'title': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'placeholder': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'defaultValue': {
        'value': '\'Search...\'',
        'computed': false
      }
    },
    'incremental': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'schema': {
      'type': {
        'name': 'custom',
        'raw': 'SchemaType'
      },
      'required': false
    }
  }
}];