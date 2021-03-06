'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedItemActions = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default_item_action = require('./default_item_action');

var _custom_item_action = require('./custom_item_action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandedItemActions = exports.ExpandedItemActions = function ExpandedItemActions(_ref) {
  var actions = _ref.actions,
      visible = _ref.visible,
      itemId = _ref.itemId,
      item = _ref.item,
      actionEnabled = _ref.actionEnabled;


  return actions.reduce(function (tools, action, index) {
    var available = action.available ? action.available(item) : true;
    if (!available) {
      return tools;
    }
    var enabled = actionEnabled(action);
    var key = 'item_action_' + itemId + '_' + index;
    if (action.render) {
      // custom action has a render function
      tools.push(_react2.default.createElement(_custom_item_action.CustomItemAction, {
        key: key,
        index: index,
        action: action,
        enabled: enabled,
        visible: visible,
        itemId: itemId,
        item: item
      }));
    } else {
      tools.push(_react2.default.createElement(_default_item_action.DefaultItemAction, {
        key: key,
        index: index,
        action: action,
        enabled: enabled,
        visible: visible,
        itemId: itemId,
        item: item
      }));
    }
    return tools;
  }, []);
};