'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStepHorizontal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _accessibility = require('../accessibility');

var _icon = require('../icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EuiStepHorizontal = function EuiStepHorizontal(_ref) {
  var className = _ref.className,
      step = _ref.step,
      title = _ref.title,
      isSelected = _ref.isSelected,
      isComplete = _ref.isComplete,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ['className', 'step', 'title', 'isSelected', 'isComplete', 'onClick', 'disabled']);

  var classes = (0, _classnames2.default)('euiStepHorizontal', className, {
    'euiStepHorizontal-isSelected': isSelected,
    'euiStepHorizontal-isComplete': isComplete,
    'euiStepHorizontal-isIncomplete': !isSelected && !isComplete,
    'euiStepHorizontal-isDisabled': disabled
  });

  var numberNode = void 0;
  var titleAppendix = '';

  if (disabled) {
    numberNode = step;
    titleAppendix = ' is disabled';
  } else if (isComplete) {
    numberNode = _react2.default.createElement(_icon.EuiIcon, { type: 'check', color: 'ghost' });
    titleAppendix = ' is complete';
  } else {
    numberNode = step;
  }

  var buttonTitle = 'Step ' + step + ': ' + title + titleAppendix;

  return _react2.default.createElement(
    'button',
    _extends({
      role: 'tab',
      'aria-selected': !!isSelected,
      type: 'button',
      className: classes,
      onClick: onClick,
      disabled: disabled,
      title: buttonTitle
    }, rest),
    _react2.default.createElement(
      _accessibility.EuiScreenReaderOnly,
      null,
      _react2.default.createElement(
        'span',
        null,
        'Step'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'euiStepHorizontal__number' },
      numberNode
    ),
    _react2.default.createElement(
      'span',
      { className: 'euiStepHorizontal__title' },
      title
    )
  );
};

exports.EuiStepHorizontal = EuiStepHorizontal;
EuiStepHorizontal.propTypes = {
  isSelected: _propTypes2.default.bool,
  isComplete: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  step: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
};

EuiStepHorizontal.defaultProps = {
  isSelected: false,
  isComplete: false,
  disabled: false
};
EuiStepHorizontal.__docgenInfo = [{
  'description': '',
  'methods': [],
  'props': {
    'isSelected': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isComplete': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'onClick': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    },
    'step': {
      'type': {
        'name': 'number'
      },
      'required': true,
      'description': ''
    },
    'title': {
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
    'disabled': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    }
  }
}];