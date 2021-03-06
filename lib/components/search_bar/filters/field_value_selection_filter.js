'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldValueSelectionFilter = exports.FieldValueSelectionFilterConfigType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _predicate = require('../../../services/predicate');

var _services = require('../../../services');

var _prop_types = require('../../../utils/prop_types');

var _popover = require('../../popover/popover');

var _popover_title = require('../../popover/popover_title');

var _field_search = require('../../form/field_search/field_search');

var _filter_group = require('../../filter_group');

var _loading_chart = require('../../loading/loading_chart');

var _spacer = require('../../spacer/spacer');

var _icon = require('../../icon/icon');

var _query3 = require('../query');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldValueOptionType = _propTypes2.default.shape({
  value: _propTypes2.default.any.isRequired,
  name: _propTypes2.default.string,
  view: _propTypes2.default.node
});

var FieldValueOptionsType = _propTypes2.default.oneOfType([_propTypes2.default.func, // (query) => Promise<FieldValueOptionType[]>
_propTypes2.default.arrayOf(FieldValueOptionType)]);

var FieldValueSelectionFilterConfigType = exports.FieldValueSelectionFilterConfigType = _propTypes2.default.shape({
  type: _prop_types.EuiPropTypes.is('field_value_selection').isRequired,
  field: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  options: FieldValueOptionsType.isRequired,
  cache: _propTypes2.default.number,
  multiSelect: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['and', 'or'])]),
  loadingMessage: _propTypes2.default.string,
  noOptionsMessage: _propTypes2.default.string,
  searchThreshold: _propTypes2.default.number,
  available: _propTypes2.default.func // () => boolean
});

var FieldValueSelectionFilterPropTypes = {
  index: _propTypes2.default.number.isRequired,
  config: FieldValueSelectionFilterConfigType.isRequired,
  query: _propTypes2.default.any.isRequired,
  onChange: _propTypes2.default.func.isRequired // (value) => void
};

var defaults = {
  config: {
    multiSelect: true,
    loadingMessage: 'Loading...',
    noOptionsMessage: 'No options found',
    searchThreshold: 10
  }
};

var FieldValueSelectionFilter = exports.FieldValueSelectionFilter = function (_Component) {
  _inherits(FieldValueSelectionFilter, _Component);

  function FieldValueSelectionFilter(props) {
    _classCallCheck(this, FieldValueSelectionFilter);

    var _this = _possibleConstructorReturn(this, (FieldValueSelectionFilter.__proto__ || Object.getPrototypeOf(FieldValueSelectionFilter)).call(this, props));

    _this.selectItems = [];
    _this.state = {
      popoverOpen: false,
      options: null,
      error: null
    };
    return _this;
  }

  _createClass(FieldValueSelectionFilter, [{
    key: 'closePopover',
    value: function closePopover() {
      this.setState({ popoverOpen: false, options: null });
    }
  }, {
    key: 'onButtonClick',
    value: function onButtonClick() {
      var _this2 = this;

      this.setState(function (prevState) {
        if (!prevState.popoverOpen) {
          // loading options updates the state, so we'll do that in the animation frame
          window.requestAnimationFrame(function () {
            _this2.loadOptions();
          });
        }
        return {
          options: null,
          error: undefined,
          popoverOpen: !prevState.popoverOpen
        };
      });
    }
  }, {
    key: 'loadOptions',
    value: function loadOptions() {
      var _this3 = this;

      var loader = this.resolveOptionsLoader();
      this.setState({ options: null, error: undefined });
      loader().then(function (options) {
        _this3.setState({
          error: undefined,
          options: {
            all: options,
            shown: options
          }
        });
      }).catch(function () {
        _this3.setState({ options: null, error: 'Could not load options' });
      });
    }
  }, {
    key: 'filterOptions',
    value: function filterOptions() {
      var _this4 = this;

      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      this.setState(function (prevState) {
        if ((0, _predicate.isNil)(prevState.options)) {
          return {};
        }
        return {
          options: _extends({}, prevState.options, {
            shown: prevState.options.all.filter(function (option) {
              var name = _this4.resolveOptionName(option);
              return name.toLowerCase().startsWith(prefix.toLowerCase());
            })
          })
        };
      });
    }
  }, {
    key: 'resolveOptionsLoader',
    value: function resolveOptionsLoader() {
      var _this5 = this;

      var options = this.props.config.options;
      if ((0, _predicate.isArray)(options)) {
        return function () {
          return Promise.resolve(options);
        };
      }
      if ((0, _predicate.isNil)(this.props.config.cache) || this.props.config.cache <= 0) {
        return options;
      }
      return function () {
        var cachedOptions = _this5.state.cachedOptions;
        if (cachedOptions) {
          return Promise.resolve(cachedOptions);
        }
        if (_this5.props.config.cache > 0) {
          return new Promise(function (resolve, reject) {
            return options().then(function (opts) {
              _this5.setState({ cachedOptions: opts });
              _this5.timeoutId = setTimeout(function () {
                _this5.setState({ cachedOptions: null });
              }, _this5.props.config.cache);
              resolve(opts);
            }).catch(function (error) {
              reject(error);
            });
          });
        }
      };
    }
  }, {
    key: 'resolveOptionName',
    value: function resolveOptionName(option) {
      return option.name || option.value.toString();
    }
  }, {
    key: 'onOptionClick',
    value: function onOptionClick(field, value, checked) {
      var multiSelect = this.resolveMultiSelect();
      if (!multiSelect) {
        // we're closing popover only if the user can only select one item... if the
        // user can select more, we'll leave it open so she can continue selecting
        this.closePopover();
        var query = checked ? this.props.query.removeSimpleFieldClauses(field) : this.props.query.removeSimpleFieldClauses(field).addSimpleFieldValue(field, value);
        this.props.onChange(query);
      } else {
        if (multiSelect === 'or') {
          var _query = checked ? this.props.query.removeOrFieldValue(field, value) : this.props.query.addOrFieldValue(field, value);
          this.props.onChange(_query);
        } else {
          var _query2 = checked ? this.props.query.removeSimpleFieldValue(field, value) : this.props.query.addSimpleFieldValue(field, value);
          this.props.onChange(_query2);
        }
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(index, event) {
      switch (event.keyCode) {

        case _services.keyCodes.DOWN:
          if (index < this.selectItems.length - 1) {
            event.preventDefault();
            this.selectItems[index + 1].focus();
          }
          break;

        case _services.keyCodes.UP:
          if (index < 0) {
            return; // it's coming from the search box... nothing to do... nowhere to go
          }
          if (index === 0 && this.searchInput) {
            event.preventDefault();
            this.searchInput.focus();
          } else if (index > 0) {
            event.preventDefault();
            this.selectItems[index - 1].focus();
          }
      }
    }
  }, {
    key: 'resolveMultiSelect',
    value: function resolveMultiSelect() {
      var config = this.props.config;

      return !(0, _predicate.isNil)(config.multiSelect) ? config.multiSelect : defaults.config.multiSelect;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          query = _props.query,
          config = _props.config;

      var multiSelect = this.resolveMultiSelect();
      var active = multiSelect === 'or' ? query.hasOrFieldClause(config.field) : query.hasSimpleFieldClause(config.field);
      var button = _react2.default.createElement(
        _filter_group.EuiFilterButton,
        {
          iconType: 'arrowDown',
          iconSide: 'right',
          onClick: this.onButtonClick.bind(this),
          hasActiveFilters: active
        },
        config.name
      );

      var searchBox = this.renderSearchBox();
      var content = this.renderContent(config.field, query, config, multiSelect);
      var threshold = this.props.config.searchThreshold || defaults.config.searchThreshold;
      var withTitle = this.state.options && this.state.options.all.length >= threshold;

      return _react2.default.createElement(
        _popover.EuiPopover,
        {
          id: config.type + '_' + index,
          ownFocus: true,
          button: button,
          isOpen: this.state.popoverOpen,
          closePopover: this.closePopover.bind(this),
          panelPaddingSize: 'none',
          withTitle: withTitle,
          anchorPosition: 'downRight',
          panelClassName: 'euiFilterGroup__popoverPanel'
        },
        searchBox,
        content
      );
    }
  }, {
    key: 'renderSearchBox',
    value: function renderSearchBox() {
      var _this6 = this;

      var threshold = this.props.config.searchThreshold || defaults.config.searchThreshold;
      if (this.state.options && this.state.options.all.length >= threshold) {
        var disabled = this.state.error;
        return _react2.default.createElement(
          _popover_title.EuiPopoverTitle,
          null,
          _react2.default.createElement(_field_search.EuiFieldSearch, {
            inputRef: function inputRef(ref) {
              return _this6.searchInput = ref;
            },
            disabled: disabled,
            incremental: true,
            onSearch: function onSearch(query) {
              return _this6.filterOptions(query);
            },
            onKeyDown: this.onKeyDown.bind(this, -1)
          })
        );
      }
    }
  }, {
    key: 'renderContent',
    value: function renderContent(field, query, config, multiSelect) {
      var _this7 = this;

      if (this.state.error) {
        return this.renderError(this.state.error);
      }
      if ((0, _predicate.isNil)(this.state.options)) {
        return this.renderLoader();
      }
      if (this.state.options.shown.length === 0) {
        return this.renderNoOptions();
      }
      var items = this.state.options.shown.reduce(function (items, option, index) {
        var clause = multiSelect === 'or' ? query.getOrFieldClause(field, option.value) : query.getSimpleFieldClause(field, option.value);
        var checked = _this7.resolveChecked(clause);
        var onClick = function onClick() {
          // clicking a checked item will uncheck it and effective remove the filter (value = undefined)
          _this7.onOptionClick(field, option.value, checked);
        };
        var item = _react2.default.createElement(
          _filter_group.EuiFilterSelectItem,
          {
            key: index,
            checked: checked,
            onClick: onClick,
            ref: function ref(_ref) {
              return _this7.selectItems[index] = _ref;
            },
            onKeyDown: _this7.onKeyDown.bind(_this7, index)
          },
          option.view ? option.view : _this7.resolveOptionName(option)
        );
        if (!checked) {
          items.rest.push(item);
        } else if (checked === 'on') {
          items.on.push(item);
        } else {
          items.off.push(item);
        }
        return items;
      }, { on: [], off: [], rest: [] });
      return _react2.default.createElement(
        'div',
        { className: 'euiFilterSelect__items' },
        [].concat(_toConsumableArray(items.on), _toConsumableArray(items.off), _toConsumableArray(items.rest))
      );
    }
  }, {
    key: 'resolveChecked',
    value: function resolveChecked(clause) {
      if (clause) {
        return _query3.Query.isMust(clause) ? 'on' : 'off';
      }
    }
  }, {
    key: 'renderLoader',
    value: function renderLoader() {
      var message = this.props.config.loadingMessage || defaults.config.loadingMessage;
      return _react2.default.createElement(
        'div',
        { className: 'euiFilterSelect__note' },
        _react2.default.createElement(
          'div',
          { className: 'euiFilterSelect__noteContent' },
          _react2.default.createElement(_loading_chart.EuiLoadingChart, { size: 'm' }),
          _react2.default.createElement(_spacer.EuiSpacer, { size: 'xs' }),
          _react2.default.createElement(
            'p',
            null,
            message
          )
        )
      );
    }
  }, {
    key: 'renderError',
    value: function renderError(message) {
      return _react2.default.createElement(
        'div',
        { className: 'euiFilterSelect__note' },
        _react2.default.createElement(
          'div',
          { className: 'euiFilterSelect__noteContent' },
          _react2.default.createElement(_icon.EuiIcon, { size: 'm', type: 'faceSad', color: 'danger' }),
          _react2.default.createElement(_spacer.EuiSpacer, { size: 'xs' }),
          _react2.default.createElement(
            'p',
            null,
            message
          )
        )
      );
    }
  }, {
    key: 'renderNoOptions',
    value: function renderNoOptions() {
      var message = this.props.config.noOptionsMessage || defaults.config.noOptionsMessage;
      return _react2.default.createElement(
        'div',
        { className: 'euiFilterSelect__note' },
        _react2.default.createElement(
          'div',
          { className: 'euiFilterSelect__noteContent' },
          _react2.default.createElement(_icon.EuiIcon, { type: 'minusInCircle' }),
          _react2.default.createElement(_spacer.EuiSpacer, { size: 'xs' }),
          _react2.default.createElement(
            'p',
            null,
            message
          )
        )
      );
    }
  }]);

  return FieldValueSelectionFilter;
}(_react.Component);

FieldValueSelectionFilter.propTypes = FieldValueSelectionFilterPropTypes;
FieldValueSelectionFilter.__docgenInfo = [{
  'description': '',
  'displayName': 'FieldValueSelectionFilter',
  'methods': [{
    'name': 'closePopover',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'onButtonClick',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'loadOptions',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'filterOptions',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'prefix',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'resolveOptionsLoader',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'resolveOptionName',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'option',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'onOptionClick',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'field',
      'type': null
    }, {
      'name': 'value',
      'type': null
    }, {
      'name': 'checked',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'onKeyDown',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'index',
      'type': null
    }, {
      'name': 'event',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'resolveMultiSelect',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'renderSearchBox',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'renderContent',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'field',
      'type': null
    }, {
      'name': 'query',
      'type': null
    }, {
      'name': 'config',
      'type': null
    }, {
      'name': 'multiSelect',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'resolveChecked',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'clause',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'renderLoader',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'renderError',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'message',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'renderNoOptions',
    'docblock': null,
    'modifiers': [],
    'params': [],
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
        'raw': 'FieldValueSelectionFilterConfigType.isRequired'
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