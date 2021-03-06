'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultItemAction = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _predicate = require('../../services/predicate');

var _button = require('../button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = {
  color: 'primary'
};

var DefaultItemAction = exports.DefaultItemAction = function (_Component) {
  _inherits(DefaultItemAction, _Component);

  function DefaultItemAction(props) {
    _classCallCheck(this, DefaultItemAction);

    var _this = _possibleConstructorReturn(this, (DefaultItemAction.__proto__ || Object.getPrototypeOf(DefaultItemAction)).call(this, props));

    _this.onFocus = function () {
      if (_this.mounted) {
        _this.setState({ hasFocus: true });
      }
    };

    _this.onBlur = function () {
      if (_this.mounted) {
        _this.setState({ hasFocus: false });
      }
    };

    _this.hasFocus = function () {
      return _this.state.hasFocus;
    };

    _this.state = { hasFocus: false };

    // while generally considered an anti-pattern, here we require
    // to do that as the onFocus/onBlur events of the action controls
    // may trigger while this component is unmounted. An alternative
    // (at least the workarounds suggested by react is to unregister
    // the onFocus/onBlur listeners from the action controls... this
    // unfortunately will lead to unecessarily complex code... so we'll
    // stick to this approach for now)
    _this.mounted = false;
    return _this;
  }

  _createClass(DefaultItemAction, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.mounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          enabled = _props.enabled,
          visible = _props.visible,
          item = _props.item;

      if (!action.onClick) {
        throw new Error('Cannot render item action [' + action.name + ']. Missing required \'onClick\' callback. If you want\n      to provide a custom action control, make sure to define the \'render\' callback');
      }
      var onClick = function onClick() {
        return action.onClick(item);
      };
      var color = this.resolveActionColor();
      var icon = this.resolveActionIcon();
      var style = this.hasFocus() || visible ? { opacity: 1 } : { opacity: 0 };
      if (action.type === 'icon') {
        if (!icon) {
          throw new Error('Cannot render item action [' + action.name + ']. It is configured to render as an icon but no\n        icon is provided. Make sure to set the \'icon\' property of the action');
        }
        return _react2.default.createElement(_button.EuiButtonIcon, {
          'aria-label': action.name,
          isDisabled: !enabled,
          color: color,
          iconType: icon,
          title: action.description,
          style: style,
          onClick: onClick,
          onFocus: this.onFocus,
          onBlur: this.onBlur
        });
      }

      return _react2.default.createElement(
        _button.EuiButton,
        {
          size: 's',
          isDisabled: !enabled,
          color: color,
          iconType: icon,
          fill: false,
          title: action.description,
          style: style,
          onClick: onClick,
          onFocus: this.onFocus,
          onBlur: this.onBlur
        },
        action.name
      );
    }
  }, {
    key: 'resolveActionIcon',
    value: function resolveActionIcon() {
      var _props2 = this.props,
          action = _props2.action,
          item = _props2.item;

      if (action.icon) {
        return (0, _predicate.isString)(action.icon) ? action.icon : action.icon(item);
      }
    }
  }, {
    key: 'resolveActionColor',
    value: function resolveActionColor() {
      var _props3 = this.props,
          action = _props3.action,
          item = _props3.item;

      if (action.color) {
        return (0, _predicate.isString)(action.color) ? action.color : action.color(item);
      }
      return defaults.color;
    }
  }]);

  return DefaultItemAction;
}(_react.Component);

DefaultItemAction.__docgenInfo = [{
  'description': '',
  'displayName': 'DefaultItemAction',
  'methods': [{
    'name': 'onFocus',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'onBlur',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'hasFocus',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'resolveActionIcon',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'resolveActionColor',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }]
}];