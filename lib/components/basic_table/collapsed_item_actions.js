'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsedItemActions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _context_menu = require('../context_menu');

var _popover = require('../popover');

var _button = require('../button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapsedItemActions = exports.CollapsedItemActions = function (_Component) {
  _inherits(CollapsedItemActions, _Component);

  function CollapsedItemActions(props) {
    _classCallCheck(this, CollapsedItemActions);

    var _this = _possibleConstructorReturn(this, (CollapsedItemActions.__proto__ || Object.getPrototypeOf(CollapsedItemActions)).call(this, props));

    _this.togglePopover = function () {
      _this.setState(function (prevState) {
        return { popoverOpen: !prevState.popoverOpen };
      });
    };

    _this.closePopover = function () {
      _this.setState({ popoverOpen: false });
    };

    _this.onPopoverBlur = function () {
      // you must be asking... WTF? I know... but this timeout is
      // required to make sure we process the onBlur events after the initial
      // event cycle. Reference:
      // https://medium.com/@jessebeach/dealing-with-focus-and-blur-in-a-composite-widget-in-react-90d3c3b49a9b
      window.requestAnimationFrame(function () {
        if (!_this.popoverDiv.contains(document.activeElement)) {
          _this.props.onBlur();
        }
      });
    };

    _this.registerPopoverDiv = function (popoverDiv) {
      if (!_this.popoverDiv) {
        _this.popoverDiv = popoverDiv;
        _this.popoverDiv.addEventListener('focusout', _this.onPopoverBlur);
      }
    };

    _this.state = { popoverOpen: false };
    return _this;
  }

  _createClass(CollapsedItemActions, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.popoverDiv) {
        this.popoverDiv.removeEventListener('focusout', this.onPopoverBlur);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          actions = _props.actions,
          itemId = _props.itemId,
          item = _props.item,
          actionEnabled = _props.actionEnabled,
          onFocus = _props.onFocus;


      var isOpen = this.state.popoverOpen;

      var allDisabled = true;
      var controls = actions.reduce(function (controls, action, index) {
        var key = 'action_' + itemId + '_' + index;
        var available = action.available ? action.available(item) : true;
        if (!available) {
          return controls;
        }
        var enabled = actionEnabled(action);
        allDisabled = allDisabled && !enabled;
        if (action.render) {
          var actionControl = action.render(item, enabled);
          controls.push(_react2.default.createElement(
            _context_menu.EuiContextMenuItem,
            { key: key },
            actionControl
          ));
        } else {
          controls.push(_react2.default.createElement(
            _context_menu.EuiContextMenuItem,
            {
              key: key,
              disabled: !enabled,
              icon: action.icon,
              onClick: action.onClick.bind(null, item)
            },
            action.name
          ));
        }
        return controls;
      }, []);

      var popoverButton = _react2.default.createElement(_button.EuiButtonIcon, {
        'aria-label': 'actions',
        iconType: 'gear',
        color: 'text',
        isDisabled: allDisabled,
        onClick: this.togglePopover.bind(this),
        onFocus: onFocus
      });

      return _react2.default.createElement(
        _popover.EuiPopover,
        {
          popoverRef: this.registerPopoverDiv,
          id: itemId + '-actions',
          isOpen: isOpen,
          button: popoverButton,
          closePopover: this.closePopover,
          panelPaddingSize: 'none',
          anchorPosition: 'leftCenter'
        },
        _react2.default.createElement(_context_menu.EuiContextMenuPanel, { items: controls })
      );
    }
  }]);

  return CollapsedItemActions;
}(_react.Component);

CollapsedItemActions.__docgenInfo = [{
  'description': '',
  'displayName': 'CollapsedItemActions',
  'methods': [{
    'name': 'togglePopover',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'closePopover',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'onPopoverBlur',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'registerPopoverDiv',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'popoverDiv',
      'type': null
    }],
    'returns': null
  }]
}];