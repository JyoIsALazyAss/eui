'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBoxPill = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _badge = require('../../badge');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EuiComboBoxPill = exports.EuiComboBoxPill = function (_Component) {
  _inherits(EuiComboBoxPill, _Component);

  function EuiComboBoxPill() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EuiComboBoxPill);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EuiComboBoxPill.__proto__ || Object.getPrototypeOf(EuiComboBoxPill)).call.apply(_ref, [this].concat(args))), _this), _this.onCloseButtonClick = function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          option = _this$props.option;

      onClose(option);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EuiComboBoxPill, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          option = _props.option,
          onClose = _props.onClose,
          color = _props.color,
          rest = _objectWithoutProperties(_props, ['children', 'className', 'option', 'onClose', 'color']);

      var classes = (0, _classnames2.default)('euiComboBoxPill', className);

      return _react2.default.createElement(
        _badge.EuiBadge,
        _extends({
          className: classes,
          title: children,
          iconOnClick: this.onCloseButtonClick,
          iconType: 'cross',
          iconSide: 'right',
          color: color,
          closeButtonProps: {
            tabIndex: '-1'
          }
        }, rest),
        children
      );
    }
  }]);

  return EuiComboBoxPill;
}(_react.Component);

EuiComboBoxPill.propTypes = {
  option: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.string,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  onClose: _propTypes2.default.func.isRequired
};
EuiComboBoxPill.defaultProps = {
  color: 'hollow'
};
EuiComboBoxPill.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiComboBoxPill',
  'methods': [{
    'name': 'onCloseButtonClick',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }],
  'props': {
    'option': {
      'type': {
        'name': 'object'
      },
      'required': true,
      'description': ''
    },
    'children': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'color': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'hollow\'',
        'computed': false
      }
    },
    'onClose': {
      'type': {
        'name': 'func'
      },
      'required': true,
      'description': ''
    }
  }
}];