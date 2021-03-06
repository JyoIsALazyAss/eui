'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPagination = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pagination_button = require('./pagination_button');

var _button = require('../button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MAX_VISIBLE_PAGES = 5;
var NUMBER_SURROUNDING_PAGES = Math.floor(MAX_VISIBLE_PAGES * 0.5);

var EuiPagination = function EuiPagination(_ref) {
  var className = _ref.className,
      pageCount = _ref.pageCount,
      activePage = _ref.activePage,
      onPageClick = _ref.onPageClick,
      compressed = _ref.compressed,
      rest = _objectWithoutProperties(_ref, ['className', 'pageCount', 'activePage', 'onPageClick', 'compressed']);

  var classes = (0, _classnames2.default)('euiPagination', className);

  var pages = [];
  var firstPageInRange = Math.max(0, Math.min(activePage - NUMBER_SURROUNDING_PAGES, pageCount - MAX_VISIBLE_PAGES));
  var lastPageInRange = Math.min(pageCount, firstPageInRange + MAX_VISIBLE_PAGES);

  for (var i = firstPageInRange, index = 0; i < lastPageInRange; i++, index++) {
    pages.push(_react2.default.createElement(
      _pagination_button.EuiPaginationButton,
      {
        isActive: i === activePage,
        key: index,
        onClick: onPageClick.bind(null, i),
        hideOnMobile: true
      },
      i + 1
    ));
  }

  var previousButton = _react2.default.createElement(_button.EuiButtonIcon, {
    onClick: onPageClick.bind(null, activePage - 1),
    iconType: 'arrowLeft',
    disabled: activePage === 0,
    color: 'text',
    'aria-label': 'Previous'
  });

  var firstPageButtons = [];

  if (firstPageInRange > 0) {
    firstPageButtons.push(_react2.default.createElement(
      _pagination_button.EuiPaginationButton,
      {
        key: '0',
        onClick: onPageClick.bind(null, 0),
        hideOnMobile: true
      },
      '1'
    ));

    if (firstPageInRange > 1) {
      firstPageButtons.push(_react2.default.createElement(
        _pagination_button.EuiPaginationButton,
        {
          key: 'beginningEllipsis',
          isPlaceholder: true,
          hideOnMobile: true
        },
        _react2.default.createElement(
          'span',
          null,
          '\u2026'
        )
      ));
    }
  }

  var lastPageButtons = [];

  if (lastPageInRange < pageCount) {
    if (lastPageInRange < pageCount - 1) {
      lastPageButtons.push(_react2.default.createElement(
        _pagination_button.EuiPaginationButton,
        {
          key: 'endingEllipsis',
          isPlaceholder: true,
          hideOnMobile: true
        },
        _react2.default.createElement(
          'span',
          null,
          '\u2026'
        )
      ));
    }

    lastPageButtons.push(_react2.default.createElement(
      _pagination_button.EuiPaginationButton,
      {
        key: pageCount - 1,
        onClick: onPageClick.bind(null, pageCount - 1),
        hideOnMobile: true
      },
      pageCount
    ));
  }

  var nextButton = _react2.default.createElement(_button.EuiButtonIcon, {
    onClick: onPageClick.bind(null, activePage + 1),
    iconType: 'arrowRight',
    'aria-label': 'Previous',
    disabled: activePage === pageCount - 1,
    color: 'text'
  });

  if (pages.length > 1) {
    var selectablePages = pages;
    if (compressed) {
      return _react2.default.createElement(
        'div',
        _extends({
          className: classes
        }, rest),
        previousButton,
        nextButton
      );
    } else {
      return _react2.default.createElement(
        'div',
        _extends({
          className: classes
        }, rest),
        previousButton,
        firstPageButtons,
        selectablePages,
        lastPageButtons,
        nextButton
      );
    }
  } else {
    // Don't render pagination if it isn't needed. Then span is here for a docs bug.
    return _react2.default.createElement('span', null);
  }
};

exports.EuiPagination = EuiPagination;
EuiPagination.propTypes = {
  className: _propTypes2.default.string,

  /**
   * The total number of pages
   */
  pageCount: _propTypes2.default.number,
  activePage: _propTypes2.default.number,
  onPageClick: _propTypes2.default.func,

  /**
   * If true, will only show next/prev arrows instead of page numbers.
   */
  compressed: _propTypes2.default.bool
};
EuiPagination.__docgenInfo = [{
  'description': '',
  'methods': [],
  'props': {
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'pageCount': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'The total number of pages'
    },
    'activePage': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': ''
    },
    'onPageClick': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    },
    'compressed': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'If true, will only show next/prev arrows instead of page numbers.'
    }
  }
}];