'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiButtonEmpty = exports.FLUSH_TYPES = exports.ICON_SIDES = exports.SIZES = exports.COLORS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _services = require('../../../services');

var _icon = require('../../icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var colorToClassNameMap = {
  primary: 'euiButtonEmpty--primary',
  danger: 'euiButtonEmpty--danger',
  disabled: 'euiButtonEmpty--disabled',
  text: 'euiButtonEmpty--text',
  ghost: 'euiButtonEmpty--ghost'
};

var COLORS = exports.COLORS = Object.keys(colorToClassNameMap);

var sizeToClassNameMap = {
  xs: 'euiButtonEmpty--xSmall',
  s: 'euiButtonEmpty--small',
  l: 'euiButtonEmpty--large'
};

var SIZES = exports.SIZES = Object.keys(sizeToClassNameMap);

var iconSideToClassNameMap = {
  left: '',
  right: 'euiButtonEmpty--iconRight'
};

var ICON_SIDES = exports.ICON_SIDES = Object.keys(iconSideToClassNameMap);

var flushTypeToClassNameMap = {
  'left': 'euiButtonEmpty--flushLeft',
  'right': 'euiButtonEmpty--flushRight'
};

var FLUSH_TYPES = exports.FLUSH_TYPES = Object.keys(flushTypeToClassNameMap);

var EuiButtonEmpty = function EuiButtonEmpty(_ref) {
  var children = _ref.children,
      className = _ref.className,
      iconType = _ref.iconType,
      iconSide = _ref.iconSide,
      color = _ref.color,
      size = _ref.size,
      flush = _ref.flush,
      isDisabled = _ref.isDisabled,
      href = _ref.href,
      target = _ref.target,
      rel = _ref.rel,
      type = _ref.type,
      buttonRef = _ref.buttonRef,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'iconType', 'iconSide', 'color', 'size', 'flush', 'isDisabled', 'href', 'target', 'rel', 'type', 'buttonRef']);

  var classes = (0, _classnames2.default)('euiButtonEmpty', colorToClassNameMap[color], sizeToClassNameMap[size], iconSideToClassNameMap[iconSide], flushTypeToClassNameMap[flush], className);

  // Add an icon to the button if one exists.
  var buttonIcon = void 0;

  if (iconType) {
    buttonIcon = _react2.default.createElement(_icon.EuiIcon, {
      className: 'euiButtonEmpty__icon',
      type: iconType,
      size: 'm',
      'aria-hidden': 'true'
    });
  }

  if (href) {
    var secureRel = (0, _services.getSecureRelForTarget)(target, rel);

    return _react2.default.createElement(
      'a',
      _extends({
        className: classes,
        href: href,
        target: target,
        rel: secureRel,
        ref: buttonRef
      }, rest),
      _react2.default.createElement(
        'span',
        { className: 'euiButtonEmpty__content' },
        buttonIcon,
        _react2.default.createElement(
          'span',
          null,
          children
        )
      )
    );
  } else {
    return _react2.default.createElement(
      'button',
      _extends({
        disabled: isDisabled,
        className: classes,
        type: type,
        ref: buttonRef
      }, rest),
      _react2.default.createElement(
        'span',
        { className: 'euiButtonEmpty__content' },
        buttonIcon,
        _react2.default.createElement(
          'span',
          null,
          children
        )
      )
    );
  }
};

exports.EuiButtonEmpty = EuiButtonEmpty;
EuiButtonEmpty.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  iconType: _propTypes2.default.oneOf(_icon.ICON_TYPES),
  iconSide: _propTypes2.default.oneOf(ICON_SIDES),
  color: _propTypes2.default.oneOf(COLORS),
  size: _propTypes2.default.oneOf(SIZES),
  flush: _propTypes2.default.oneOf(FLUSH_TYPES),
  isDisabled: _propTypes2.default.bool,
  href: _propTypes2.default.string,
  target: _propTypes2.default.string,
  rel: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  type: _propTypes2.default.string,
  buttonRef: _propTypes2.default.func
};

EuiButtonEmpty.defaultProps = {
  type: 'button',
  iconSide: 'left',
  color: 'primary'
};
EuiButtonEmpty.__docgenInfo = [{
  'description': '',
  'methods': [],
  'props': {
    'children': {
      'type': {
        'name': 'node'
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
    'iconType': {
      'type': {
        'name': 'enum',
        'computed': true,
        'value': 'ICON_TYPES'
      },
      'required': false,
      'description': ''
    },
    'iconSide': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"left"',
          'computed': false
        }, {
          'value': '"right"',
          'computed': false
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'left\'',
        'computed': false
      }
    },
    'color': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"primary"',
          'computed': false
        }, {
          'value': '"danger"',
          'computed': false
        }, {
          'value': '"disabled"',
          'computed': false
        }, {
          'value': '"text"',
          'computed': false
        }, {
          'value': '"ghost"',
          'computed': false
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'primary\'',
        'computed': false
      }
    },
    'size': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"xs"',
          'computed': false
        }, {
          'value': '"s"',
          'computed': false
        }, {
          'value': '"l"',
          'computed': false
        }]
      },
      'required': false,
      'description': ''
    },
    'flush': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"left"',
          'computed': false
        }, {
          'value': '"right"',
          'computed': false
        }]
      },
      'required': false,
      'description': ''
    },
    'isDisabled': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': ''
    },
    'href': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'target': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'rel': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'onClick': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    },
    'type': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'button\'',
        'computed': false
      }
    },
    'buttonRef': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    }
  }
}];