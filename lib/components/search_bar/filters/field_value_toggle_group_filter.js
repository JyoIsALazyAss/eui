'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldValueToggleGroupFilter = exports.FieldValueToggleGroupFilterConfigType = exports.FieldValueToggleGroupFilterItemType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _filter_group = require('../../filter_group');

var _prop_types = require('../../../utils/prop_types');

var _query = require('../query');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldValueToggleGroupFilterItemType = exports.FieldValueToggleGroupFilterItemType = _propTypes2.default.shape({
  value: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  negatedName: _propTypes2.default.string
});

var FieldValueToggleGroupFilterConfigType = exports.FieldValueToggleGroupFilterConfigType = _propTypes2.default.shape({
  type: _prop_types.EuiPropTypes.is('field_value_toggle_group').isRequired,
  field: _propTypes2.default.string.isRequired,
  items: _propTypes2.default.arrayOf(FieldValueToggleGroupFilterItemType).isRequired,
  available: _propTypes2.default.func // () => boolean
});

var FieldValueToggleGroupFilterPropTypes = {
  index: _propTypes2.default.number.isRequired,
  config: FieldValueToggleGroupFilterConfigType.isRequired,
  query: _propTypes2.default.any.isRequired,
  onChange: _propTypes2.default.func.isRequired // (value: boolean) => void
};

var FieldValueToggleGroupFilter = exports.FieldValueToggleGroupFilter = function (_Component) {
  _inherits(FieldValueToggleGroupFilter, _Component);

  function FieldValueToggleGroupFilter(props) {
    _classCallCheck(this, FieldValueToggleGroupFilter);

    return _possibleConstructorReturn(this, (FieldValueToggleGroupFilter.__proto__ || Object.getPrototypeOf(FieldValueToggleGroupFilter)).call(this, props));
  }

  _createClass(FieldValueToggleGroupFilter, [{
    key: 'resolveDisplay',
    value: function resolveDisplay(config, query, item) {
      var clause = query.getSimpleFieldClause(config.field, item.value);
      if (clause) {
        if (_query.Query.isMust(clause)) {
          return { active: true, name: item.name };
        }
        return { active: true, name: item.negatedName ? item.negatedName : 'Not ' + item.name };
      }
      return { active: false, name: item.name };
    }
  }, {
    key: 'valueChanged',
    value: function valueChanged(item, active) {
      var field = this.props.config.field;
      var value = item.value;

      var query = active ? this.props.query.removeSimpleFieldClauses(field) : this.props.query.removeSimpleFieldClauses(field).addSimpleFieldValue(field, value);
      this.props.onChange(query);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          config = _props.config,
          query = _props.query;

      return config.items.map(function (item, index) {
        var _resolveDisplay = _this2.resolveDisplay(config, query, item),
            active = _resolveDisplay.active,
            name = _resolveDisplay.name;

        var onClick = function onClick() {
          _this2.valueChanged(item, active);
        };
        var key = 'field_value_toggle_filter_item_' + index;
        return _react2.default.createElement(
          _filter_group.EuiFilterButton,
          {
            key: key,
            onClick: onClick,
            hasActiveFilters: active
          },
          name
        );
      });
    }
  }]);

  return FieldValueToggleGroupFilter;
}(_react.Component);

FieldValueToggleGroupFilter.propTypes = FieldValueToggleGroupFilterPropTypes;
FieldValueToggleGroupFilter.__docgenInfo = [{
  'description': '',
  'displayName': 'FieldValueToggleGroupFilter',
  'methods': [{
    'name': 'resolveDisplay',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'config',
      'type': null
    }, {
      'name': 'query',
      'type': null
    }, {
      'name': 'item',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'valueChanged',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'item',
      'type': null
    }, {
      'name': 'active',
      'type': null
    }],
    'returns': null
  }],
  'props': {
    'index': {
      'type': {
        'name': 'number'
      },
      'required': true,
      'description': ''
    },
    'config': {
      'type': {
        'name': 'custom',
        'raw': 'FieldValueToggleGroupFilterConfigType.isRequired'
      },
      'required': false,
      'description': ''
    },
    'query': {
      'type': {
        'name': 'any'
      },
      'required': true,
      'description': ''
    },
    'onChange': {
      'type': {
        'name': 'func'
      },
      'required': true,
      'description': ''
    }
  }
}];