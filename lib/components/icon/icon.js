'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiIcon = exports.SIZES = exports.COLORS = exports.TYPES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var addDataApp = function addDataApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#30A9E5',
        d: 'M1 3h9a1 1 0 0 1 1 1v5H0V4a1 1 0 0 1 1-1z'
      }),
      _react2.default.createElement('path', {
        fill: '#30A9E5',
        d: 'M0 6h30a2 2 0 0 1 2 2v1H0V6z'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M19 22h3l-6-6-6 6h3v7h6v-7zM0 11h32v17a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V11z'
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        d: 'M0 9h32v2H0z'
      })
    )
  );
};

addDataApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var advancedSettingsApp = function advancedSettingsApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#0078A0',
        d: 'M5 2a2 2 0 0 1 2 2v24a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2zm0 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M27 2a2 2 0 0 1 2 2v24a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2zm0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
      }),
      _react2.default.createElement('path', {
        fill: '#30A9E5',
        d: 'M16 2a2 2 0 0 1 2 2v24a2 2 0 1 1-4 0V4a2 2 0 0 1 2-2zm0 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        fillRule: 'nonzero',
        d: 'M5 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
      }),
      _react2.default.createElement('path', {
        fill: '#30A9E5',
        fillRule: 'nonzero',
        d: 'M16 26a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        fillRule: 'nonzero',
        d: 'M27 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
      })
    )
  );
};

advancedSettingsApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var alert = function alert(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        d: 'M7.5 2.236L1.618 14h11.764L7.5 2.236zm.894-.447l5.882 11.764A1 1 0 0 1 13.382 15H1.618a1 1 0 0 1-.894-1.447L6.606 1.789a1 1 0 0 1 1.788 0z'
      }),
      _react2.default.createElement('path', {
        d: 'M7 6h1v5H7zM7 12h1v1H7z'
      })
    )
  );
};

alert.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var apmApp = function apmApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'app_apm-a',
        d: 'M0 0h32v32H0z'
      }),
      _react2.default.createElement('path', {
        id: 'app_apm-c',
        d: 'M0 0h32v32H0z'
      }),
      _react2.default.createElement('path', {
        id: 'app_apm-e',
        d: 'M0 0h32v32H0z'
      }),
      _react2.default.createElement('path', {
        id: 'app_apm-g',
        d: 'M0 0h32v32H0z'
      })
    ),
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement(
        'mask',
        {
          id: 'app_apm-b',
          fill: '#fff'
        },
        _react2.default.createElement('use', {
          xlinkHref: '#app_apm-a'
        })
      ),
      _react2.default.createElement('path', {
        fill: '#13A7DF',
        fillRule: 'nonzero',
        d: 'M5.44 9.6h21.12a2.24 2.24 0 0 1 0 4.48H5.44a2.24 2.24 0 1 1 0-4.48z',
        mask: 'url(#app_apm-b)'
      }),
      _react2.default.createElement(
        'mask',
        {
          id: 'app_apm-d',
          fill: '#fff'
        },
        _react2.default.createElement('use', {
          xlinkHref: '#app_apm-c'
        })
      ),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        fillRule: 'nonzero',
        d: 'M21.44 26.24h8.32a2.24 2.24 0 0 1 0 4.48h-8.32a2.24 2.24 0 1 1 0-4.48z',
        mask: 'url(#app_apm-d)'
      }),
      _react2.default.createElement(
        'mask',
        {
          id: 'app_apm-f',
          fill: '#fff'
        },
        _react2.default.createElement('use', {
          xlinkHref: '#app_apm-e'
        })
      ),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        fillRule: 'nonzero',
        d: 'M2.24 1.28h11.52a2.24 2.24 0 0 1 0 4.48H2.24a2.24 2.24 0 1 1 0-4.48z',
        mask: 'url(#app_apm-f)'
      }),
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement(
          'mask',
          {
            id: 'app_apm-h',
            fill: '#fff'
          },
          _react2.default.createElement('use', {
            xlinkHref: '#app_apm-g'
          })
        ),
        _react2.default.createElement('path', {
          fill: '#00BFB3',
          fillRule: 'nonzero',
          d: 'M5.44 17.92h11.52a2.24 2.24 0 0 1 0 4.48H5.44a2.24 2.24 0 0 1 0-4.48z',
          mask: 'url(#app_apm-h)'
        })
      )
    )
  );
};

apmApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var apps = function apps(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'apps-a',
        d: 'M2 4V2h2v2H2zm5 0V2h2v2H7zm5 0V2h2v2h-2zM2 9V7h2v2H2zm5 0V7h2v2H7zm5 0V7h2v2h-2zM2 14v-2h2v2H2zm5 0v-2h2v2H7zm5 0v-2h2v2h-2z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#apps-a'
    })
  );
};

apps.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var arrowDown = function arrowDown(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'arrow_down-a',
        d: 'M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0 .53.53 0 0 0 0 .759l4.684 4.61c.641.631 1.672.63 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76.552.552 0 0 0-.771 0z'
      })
    ),
    _react2.default.createElement('use', {
      fillRule: 'nonzero',
      xlinkHref: '#arrow_down-a'
    })
  );
};

arrowDown.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var arrowLeft = function arrowLeft(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'arrow_left-a',
        d: 'M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0 .53.53 0 0 0 0 .759l4.684 4.61c.641.631 1.672.63 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76.552.552 0 0 0-.771 0z'
      })
    ),
    _react2.default.createElement('use', {
      fillRule: 'nonzero',
      transform: 'rotate(90 8 8)',
      xlinkHref: '#arrow_left-a'
    })
  );
};

arrowLeft.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var arrowRight = function arrowRight(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'arrow_right-a',
        d: 'M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0 .53.53 0 0 0 0 .759l4.684 4.61c.641.631 1.672.63 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76.552.552 0 0 0-.771 0z'
      })
    ),
    _react2.default.createElement('use', {
      fillRule: 'nonzero',
      transform: 'matrix(0 1 1 0 0 0)',
      xlinkHref: '#arrow_right-a'
    })
  );
};

arrowRight.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var arrowUp = function arrowUp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'arrow_up-a',
        d: 'M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.552.552 0 0 0-.771 0 .53.53 0 0 0 0 .759l4.684 4.61c.641.631 1.672.63 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76.552.552 0 0 0-.771 0z'
      })
    ),
    _react2.default.createElement('use', {
      fillRule: 'nonzero',
      transform: 'rotate(180 8 8)',
      xlinkHref: '#arrow_up-a'
    })
  );
};

arrowUp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var asterisk = function asterisk(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M6.928 8.468L4 7.618l.446-1.427L7.375 7.25 7.287 4h1.484l-.097 3.296 2.88-1.039L12 7.693l-2.977.86 1.92 2.56L9.741 12 7.937 9.28l-1.745 2.654-1.213-.86z'
    })
  );
};

asterisk.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var bolt = function bolt(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'bolt-a',
        d: 'M7.54 13.773a.5.5 0 0 0 .891.454l3.015-5.931A.5.5 0 0 0 11 7.569H5.815L8.53 2.227a.5.5 0 0 0-.891-.454l-3.085 6.07A.5.5 0 0 0 5 8.568h5.185L7.54 13.773z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#bolt-a'
    })
  );
};

bolt.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var boxesHorizontal = function boxesHorizontal(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'boxes_horizontal-a',
        d: 'M0 6h4v4H0V6zm1 1v2h2V7H1zm5-1h4v4H6V6zm1 1v2h2V7H7zm5-1h4v4h-4V6zm1 3h2V7h-2v2z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#boxes_horizontal-a'
    })
  );
};

boxesHorizontal.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var boxesVertical = function boxesVertical(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'boxes_vertical-a',
        d: 'M7 1v2h2V1H7zM6 0h4v4H6V0zm0 6h4v4H6V6zm1 1v2h2V7H7zm-1 5h4v4H6v-4zm1 1v2h2v-2H7z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#boxes_vertical-a'
    })
  );
};

boxesVertical.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var broom = function broom(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M3.732 13.096l-.197-.197 2.83-2.828.706.707-2.829 2.828.708.708 2.828-2.828a1 1 0 0 0 0-1.414L5.658 7.95a.993.993 0 0 0-.708-.293.994.994 0 0 0-.708.293l-2.828 2.829.707.707 2.829-2.83.707.708-2.829 2.829.904.903zm1.218-6.44c.512 0 1.023.196 1.414.587l2.121 2.12a2 2 0 0 1 0 2.83L4.95 15.728 0 10.778l3.535-3.535a1.993 1.993 0 0 1 1.415-.586zM14.02 1l.708.707-6.95 6.95-.707-.707L14.021 1z'
    })
  );
};

broom.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var brush = function brush(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'brush-a',
        d: 'M11.993 8.17c0 .83-.673 1.507-1.499 1.507H5.498A1.505 1.505 0 0 1 3.999 8.17V6.662h7.994V8.17zm-2.998 5.998c0 .455-.448.827-.999.827-.55 0-1-.372-1-.827v-3.486h2v3.486zM4 5.658V1.005h1.262v4.653H4zm2.261 0V1.005h1.244v4.653H6.26zm2.244 0V1.005h1.235v4.653H8.504zm2.234 0V1.005h1.254v4.653h-1.254zM3.008 0L3 8.17a2.509 2.509 0 0 0 2.498 2.512h.5v3.486c0 1.01.896 1.832 1.998 1.832 1.102 0 1.998-.822 1.998-1.832v-3.486h.5a2.509 2.509 0 0 0 2.498-2.512L13 0H3.008z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#brush-a'
    })
  );
};

brush.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var bullseye = function bullseye(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'bullseye-a',
        d: 'M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#bullseye-a'
    })
  );
};

bullseye.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var calendar = function calendar(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M14 4v-.994C14 2.45 13.55 2 12.994 2H11v1h-1V2H6v1H5V2H3.006C2.45 2 2 2.45 2 3.006v9.988C2 13.55 2.45 14 3.006 14h9.988C13.55 14 14 13.55 14 12.994V5H2V4h12zm-3-3h1.994C14.102 1 15 1.897 15 3.006v9.988A2.005 2.005 0 0 1 12.994 15H3.006A2.005 2.005 0 0 1 1 12.994V3.006C1 1.898 1.897 1 3.006 1H5V0h1v1h4V0h1v1zM4 7h2v1H4V7zm3 0h2v1H7V7zm3 0h2v1h-2V7zM4 9h2v1H4V9zm3 0h2v1H7V9zm3 0h2v1h-2V9zm-6 2h2v1H4v-1zm3 0h2v1H7v-1zm3 0h2v1h-2v-1z',
      fillRule: 'evenodd'
    })
  );
};

calendar.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var check = function check(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'check-a',
        d: 'M6.5 12a.502.502 0 0 1-.354-.146l-4-4a.502.502 0 0 1 .708-.708L6.5 10.793l6.646-6.647a.502.502 0 0 1 .708.708l-7 7A.502.502 0 0 1 6.5 12'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#check-a'
    })
  );
};

check.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var checkInCircleFilled = function checkInCircleFilled(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.125-5a.377.377 0 0 0 .266-.11l5.25-5.25a.376.376 0 0 0-.531-.53l-4.985 4.985L4.141 7.36a.376.376 0 0 0-.531.53l3 3c.073.073.17.11.265.11z',
      fillRule: 'evenodd'
    })
  );
};

checkInCircleFilled.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var clock = function clock(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'clock-a',
        d: 'M7.5 13A5.506 5.506 0 0 1 2 7.5C2 4.467 4.467 2 7.5 2S13 4.467 13 7.5 10.533 13 7.5 13m0-12a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m3 6H8V3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#clock-a'
    })
  );
};

clock.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var console = function console(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'console-a',
        d: 'M1.157 12.224L5.768 8.32a.404.404 0 0 0 0-.64l-4.61-3.904a.407.407 0 0 1 0-.643.608.608 0 0 1 .759 0l4.61 3.904c.631.534.63 1.393 0 1.926l-4.61 3.904a.608.608 0 0 1-.76 0 .407.407 0 0 1 0-.643zM9 12h6v1H9v-1z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#console-a'
    })
  );
};

console.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var consoleApp = function consoleApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd',
        transform: 'translate(1 1)'
      },
      _react2.default.createElement('rect', {
        width: '30',
        height: '23',
        y: '7',
        fill: '#00BFB3',
        rx: '2'
      }),
      _react2.default.createElement('rect', {
        width: '30',
        height: '6',
        fill: '#30A9E5',
        rx: '2'
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        d: 'M3.954 13.376a.929.929 0 0 1 0-1.323l.67-.67a.929.929 0 0 1 1.323 0l6.241 6.241c.37.37.37.954 0 1.323l-6.24 6.241a.929.929 0 0 1-1.324 0l-.67-.67a.929.929 0 0 1 0-1.322l4.91-4.91-4.91-4.91zm22.832 11.338v.857a.923.923 0 0 1-.929.929H13a.923.923 0 0 1-.929-.929v-.857c0-.517.412-.928.929-.928h12.857c.517 0 .929.411.929.928z'
      })
    )
  );
};

consoleApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var controlsHorizontal = function controlsHorizontal(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'controls_horizontal-a',
        d: 'M10 7.95a2.5 2.5 0 0 1 0-4.9V1h1v2.05a2.5 2.5 0 0 1 0 4.9V15h-1V7.95zm-4 .1a2.5 2.5 0 0 1 0 4.9V15H5v-2.05a2.5 2.5 0 0 1 0-4.9V1h1v7.05zM5.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5-8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z'
      })
    ),
    _react2.default.createElement('use', {
      transform: 'rotate(90 8 8)',
      xlinkHref: '#controls_horizontal-a'
    })
  );
};

controlsHorizontal.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var controlsVertical = function controlsVertical(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'controls_vertical-a',
        d: 'M10 7.95a2.5 2.5 0 0 1 0-4.9V1h1v2.05a2.5 2.5 0 0 1 0 4.9V15h-1V7.95zm-4 .1a2.5 2.5 0 0 1 0 4.9V15H5v-2.05a2.5 2.5 0 0 1 0-4.9V1h1v7.05zM5.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5-8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#controls_vertical-a'
    })
  );
};

controlsVertical.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var copy = function copy(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'copy-a',
        d: 'M11.4 0c.235 0 .46.099.622.273l2.743 3c.151.162.235.378.235.602v9.25a.867.867 0 0 1-.857.875H3.857A.867.867 0 0 1 3 13.125V.875C3 .392 3.384 0 3.857 0H11.4zM14 4h-2.6a.4.4 0 0 1-.4-.4V1H4v12h10V4z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#copy-a'
    }),
    _react2.default.createElement('path', {
      d: 'M3 1H2a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1h-1v1H2V2h1V1z'
    })
  );
};

copy.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var copyClipboard = function copyClipboard(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M0 2.729V2a1 1 0 0 1 1-1h2v1H1v12h4v1H1a1 1 0 0 1-1-1V2.729zM12 5V2a1 1 0 0 0-1-1H9v1h2v3h1zm-1 1h2v9H6V6h5V5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v1z'
    }),
    _react2.default.createElement('path', {
      d: 'M7 10h5V9H7zM7 8h5V7H7zM7 12h5v-1H7zM7 14h5v-1H7zM9 2V1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1h1V1h4v1h1zM3 3h6V2H3z'
    })
  );
};

copyClipboard.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var createAdvancedJob = function createAdvancedJob(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#3EBEB0',
        d: 'M16 30.363a1.106 1.106 0 0 1-1.106-1.106V2.743a1.106 1.106 0 0 1 2.212 0v26.514A1.106 1.106 0 0 1 16 30.363zm10.67 0a1.106 1.106 0 0 1-1.07-1.106V2.743a1.106 1.106 0 0 1 2.213 0v26.514a1.106 1.106 0 0 1-1.143 1.106zm-21.34 0a1.106 1.106 0 0 1-1.106-1.106V10.176a1.106 1.106 0 0 1 2.213 0v19.081c0 .611-.496 1.106-1.107 1.106z'
      }),
      _react2.default.createElement('circle', {
        cx: '5.33',
        cy: '5.33',
        r: '5.33',
        fill: '#07A5DE'
      }),
      _react2.default.createElement('path', {
        fill: '#227991',
        d: 'M5.33 9.07c-.61 0-1.106.495-1.106 1.106v.375a5.54 5.54 0 0 0 1.106.119c.36-.005.718-.045 1.07-.12v-.374c0-.597-.473-1.087-1.07-1.106z'
      }),
      _react2.default.createElement('path', {
        fill: '#FFF',
        d: 'M4.571 2.88v1.344a.375.375 0 0 1-.347.347H2.88a.75.75 0 0 0-.759.613.731.731 0 0 0 .722.86h1.381c.191.009.343.164.347.356v1.38a.759.759 0 0 0 .613.769.74.74 0 0 0 .86-.732V6.4c0-.202.163-.366.365-.366h1.372c.352.018.67-.21.768-.548a.74.74 0 0 0-.732-.915H6.4a.366.366 0 0 1-.366-.374V2.843a.731.731 0 0 0-.86-.722.75.75 0 0 0-.603.759z'
      }),
      _react2.default.createElement('circle', {
        cx: '16',
        cy: '21.669',
        r: '5.33',
        fill: '#07A5DE'
      }),
      _react2.default.createElement('path', {
        fill: '#227991',
        d: 'M14.894 16.457V26.88a5.211 5.211 0 0 0 2.212 0V16.457a5.211 5.211 0 0 0-2.212 0z'
      }),
      _react2.default.createElement('circle', {
        cx: '26.67',
        cy: '12.91',
        r: '5.33',
        fill: '#07A5DE'
      }),
      _react2.default.createElement('path', {
        fill: '#227991',
        d: 'M25.6 7.698V18.13c.364.077.734.117 1.106.12a5.54 5.54 0 0 0 1.107-.12V7.698a5.54 5.54 0 0 0-1.107-.119 5.486 5.486 0 0 0-1.106.12z'
      })
    )
  );
};

createAdvancedJob.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var createMultiMetricJob = function createMultiMetricJob(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('circle', {
        cx: '26.002',
        cy: '5.998',
        r: '5.998',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('circle', {
        cx: '5.998',
        cy: '5.998',
        r: '5.998',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('circle', {
        cx: '26.002',
        cy: '26.002',
        r: '5.998',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('circle', {
        cx: '5.998',
        cy: '26.002',
        r: '5.998',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('path', {
        fill: '#07A5DE',
        d: 'M16 1.829c-7.812.01-14.138 6.347-14.135 14.159C1.87 23.8 8.2 30.13 16.012 30.135c7.812.003 14.15-6.323 14.16-14.135A14.162 14.162 0 0 0 16 1.829zm5.074 15.652h-2.788c-.42 0-.76.34-.76.759v2.816a1.5 1.5 0 0 1-1.755 1.481 1.563 1.563 0 0 1-1.27-1.508v-2.743c0-.42-.34-.76-.76-.76h-2.77a1.5 1.5 0 0 1-1.48-1.755 1.563 1.563 0 0 1 1.48-1.27h2.743c.42 0 .76-.34.76-.76v-2.77a1.5 1.5 0 0 1 1.755-1.48 1.563 1.563 0 0 1 1.27 1.48v2.743c0 .42.34.76.76.76H21a1.563 1.563 0 0 1 1.564 1.243 1.5 1.5 0 0 1-1.49 1.782v-.018z'
      }),
      _react2.default.createElement('path', {
        fill: '#227991',
        d: 'M29.257 20.965a5.934 5.934 0 0 0-3.236-.96 5.998 5.998 0 0 0-5.998 5.997 5.934 5.934 0 0 0 .942 3.255 14.208 14.208 0 0 0 8.292-8.292zm-18.222 8.292c.611-.968.928-2.092.915-3.236a5.998 5.998 0 0 0-5.998-5.998 5.934 5.934 0 0 0-3.21.942 14.208 14.208 0 0 0 8.293 8.292zm9.93-26.514a5.934 5.934 0 0 0-.96 3.236 5.998 5.998 0 0 0 5.997 5.998 5.934 5.934 0 0 0 3.237-.914 14.208 14.208 0 0 0-8.274-8.32zM2.743 11.035c.968.611 2.092.928 3.236.915a5.998 5.998 0 0 0 5.998-5.998 5.934 5.934 0 0 0-.914-3.237 14.208 14.208 0 0 0-8.32 8.32z'
      })
    )
  );
};

createMultiMetricJob.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var createPopulationJob = function createPopulationJob(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        transform: 'translate(1)'
      },
      _react2.default.createElement('circle', {
        cx: '15.086',
        cy: '18.578',
        r: '4.416',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('circle', {
        cx: '25.463',
        cy: '18.578',
        r: '4.416',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('circle', {
        cx: '4.709',
        cy: '18.578',
        r: '4.416',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('circle', {
        cx: '9.893',
        cy: '9.609',
        r: '4.416',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('circle', {
        cx: '20.279',
        cy: '27.575',
        r: '4.416',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('path', {
        fill: '#07A5DE',
        d: 'M20.279 0a9.61 9.61 0 1 0-.018 19.218A9.61 9.61 0 0 0 20.279 0zm3.401 10.533h-1.893a.512.512 0 0 0-.502.512v1.892a1.006 1.006 0 0 1-1.17.988 1.033 1.033 0 0 1-.842-1.043v-1.828a.503.503 0 0 0-.503-.512H16.87a1.006 1.006 0 0 1-.997-1.18 1.042 1.042 0 0 1 1.051-.832h1.829a.503.503 0 0 0 .503-.512V6.117a1.006 1.006 0 0 1 1.18-.988c.497.094.854.536.84 1.042V8c0 .28.224.507.503.512h1.829c.506-.015.95.336 1.051.832a1.006 1.006 0 0 1-.978 1.189z'
      }),
      _react2.default.createElement('path', {
        fill: '#227991',
        d: 'M28.142 15.095a4.389 4.389 0 0 0-7.113 3.483c.004.2.022.398.054.595a9.573 9.573 0 0 0 7.059-4.078zm-8.64 3.483a4.398 4.398 0 0 0-7.095-3.483 9.573 9.573 0 0 0 7.03 4.105c.037-.205.059-.413.065-.622zM11.593 5.541a9.527 9.527 0 0 0 0 8.146 4.416 4.416 0 0 0 0-8.146z'
      })
    )
  );
};

createPopulationJob.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var createSingleMetricJob = function createSingleMetricJob(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fill: '#07A5DE',
      d: 'M16 .184C7.265.184.184 7.265.184 16S7.265 31.816 16 31.816 31.816 24.735 31.816 16C31.806 7.27 24.73.195 16 .184zm5.673 17.455H18.52a.844.844 0 0 0-.843.843v3.152a1.687 1.687 0 0 1-1.94 1.658 1.745 1.745 0 0 1-1.396-1.755v-3.016a.844.844 0 0 0-.844-.843h-3.17a1.687 1.687 0 0 1-1.659-1.94 1.745 1.745 0 0 1 1.755-1.396h3.055a.844.844 0 0 0 .843-.844v-3.17a1.687 1.687 0 0 1 1.94-1.659c.83.17 1.418.909 1.396 1.755v3.055c0 .466.378.843.844.843h3.054a1.745 1.745 0 0 1 1.756 1.397 1.687 1.687 0 0 1-1.64 1.959v-.04z'
    })
  );
};

createSingleMetricJob.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var cross = function cross(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'cross-a',
        d: 'M7.293 8l-4.147 4.146a.5.5 0 0 0 .708.708L8 8.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 8l4.147-4.146a.5.5 0 0 0-.708-.708L8 7.293 3.854 3.146a.5.5 0 1 0-.708.708L7.293 8z'
      })
    ),
    _react2.default.createElement('use', {
      fillRule: 'nonzero',
      xlinkHref: '#cross-a'
    })
  );
};

cross.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var dashboardApp = function dashboardApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('rect', {
        width: '30',
        height: '8',
        fill: '#00A9E5',
        rx: '2'
      }),
      _react2.default.createElement('rect', {
        width: '13',
        height: '8',
        y: '11',
        fill: '#00BFB3',
        rx: '2'
      }),
      _react2.default.createElement('rect', {
        width: '13',
        height: '8',
        y: '22',
        fill: '#00A9E5',
        rx: '2'
      }),
      _react2.default.createElement('rect', {
        width: '14',
        height: '19',
        x: '16',
        y: '11',
        fill: '#00BFB3',
        rx: '2'
      })
    )
  );
};

dashboardApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '30',
  viewBox: '0 0 30 30'
};

var dataVisualizer = function dataVisualizer(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('circle', {
        cx: '19.218',
        cy: '19.218',
        r: '7.077',
        fill: '#3EBEB0'
      }),
      _react2.default.createElement('circle', {
        cx: '12.782',
        cy: '12.782',
        r: '7.077',
        fill: '#07A5DE'
      }),
      _react2.default.createElement('path', {
        fill: '#227991',
        d: 'M14.217 14.217a7.03 7.03 0 0 0-2.048 5.614 7.086 7.086 0 0 0 7.662-7.662 7.03 7.03 0 0 0-5.614 2.048z'
      }),
      _react2.default.createElement('path', {
        fill: '#3EBEB0',
        d: 'M1.829 9.975A1.106 1.106 0 0 1 .722 8.869v-7.04c0-.611.496-1.107 1.107-1.107h7.04a1.106 1.106 0 1 1 0 2.213H2.935v5.934c0 .61-.495 1.106-1.106 1.106zm7.04 21.303h-7.04A1.106 1.106 0 0 1 .722 30.17v-7.04a1.106 1.106 0 1 1 2.213 0v5.934h5.934a1.106 1.106 0 1 1 0 2.213zm21.302 0h-7.04a1.106 1.106 0 1 1 0-2.213h5.934v-5.934a1.106 1.106 0 1 1 2.213 0v7.04c0 .611-.496 1.107-1.107 1.107zm0-21.303a1.106 1.106 0 0 1-1.106-1.106V2.935h-5.934a1.106 1.106 0 1 1 0-2.213h7.04c.611 0 1.107.496 1.107 1.107v7.04c0 .61-.496 1.106-1.107 1.106z'
      })
    )
  );
};

dataVisualizer.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var devToolsApp = function devToolsApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#00A9E5',
        d: 'M24.43 2.497l6.273 12.273a2.697 2.697 0 0 1 0 2.46l-6.272 12.273A2.76 2.76 0 0 1 21.97 31H10.03a2.758 2.758 0 0 1-2.46-1.497L1.296 17.23a2.697 2.697 0 0 1 0-2.46L7.569 2.497A2.76 2.76 0 0 1 10.03 1h11.94c1.04 0 1.992.58 2.46 1.497'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M8.208 30.32a2.724 2.724 0 0 1-.639-.817L1.297 17.23a2.697 2.697 0 0 1 0-2.46L7.569 2.497A2.76 2.76 0 0 1 10.03 1h11.94c.985 0 1.892.52 2.384 1.356L8.208 30.321z'
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        d: 'M11.765 31H10.03a2.758 2.758 0 0 1-2.46-1.497l-.816-1.594 5.777-11.213c-2.08-2.37-2.093-5.148-.769-7.718 1.334-2.59 3.624-4.23 6.779-3.946l-3.01 5.844 5.241 2.642 3.09-5.999c2.125 2.282 2.425 5.354 1.025 8.073-1.409 2.736-4.103 4.311-7.214 3.94L11.765 31z'
      })
    )
  );
};

devToolsApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var discoverApp = function discoverApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M17.213 17.998l-5.91 3.523c-.536.322-1.145-.288-.824-.823l3.523-5.91a2.34 2.34 0 0 1 3.664-.457l.003.004a2.34 2.34 0 0 1-.456 3.663',
        style: {
          mixBlendMode: 'multiply'
        }
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M14.788 14.002l5.91-3.523c.536-.32 1.145.288.824.824l-3.523 5.91a2.34 2.34 0 0 1-3.664.456l-.003-.003a2.34 2.34 0 0 1 .456-3.664',
        style: {
          mixBlendMode: 'multiply'
        }
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M17.51 4.42L16.585.465c-.144-.62-1.026-.62-1.171 0l-.93 3.986c-.218.933 3.244.913 3.024-.031zm-2.935 23.516l.84 3.6c.145.62 1.027.62 1.172 0l.9-3.864c.228-.974-3.16-.798-2.912.264zm-9.998-13.48l-4.112.959c-.62.145-.62 1.027 0 1.172l3.98.928c.935.218 1.023-3.268.132-3.06zm22.697-.036c-.842-.196-.63 3.308.316 3.087l3.946-.92c.62-.145.62-1.027 0-1.172l-4.262-.995z'
      }),
      _react2.default.createElement('path', {
        fill: '#00A9E5',
        d: 'M16 26c-5.523 0-10-4.476-10-10 0-5.523 4.477-10 10-10 5.524 0 10 4.477 10 10 0 5.524-4.476 10-10 10m0-23C8.821 3 3 8.821 3 16c0 7.18 5.821 13 13 13 7.18 0 13-5.82 13-13 0-7.179-5.82-13-13-13'
      })
    )
  );
};

discoverApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var document = function document(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'document-a',
        d: 'M10.8 0H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4.429c0-.256-.098-.503-.274-.689l-3.2-3.428A1.002 1.002 0 0 0 10.8 0M14 5v10H2V1h8v3.5a.5.5 0 0 0 .5.5H14z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#document-a'
    })
  );
};

document.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var dot = function dot(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('circle', {
        id: 'dot-a',
        cx: '8',
        cy: '8',
        r: '4'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#dot-a'
    })
  );
};

dot.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var empty = function empty(props) {
  return _react2.default.createElement('svg', props);
};

empty.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var exit = function exit(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12.535 12.493a.47.47 0 0 1 .468.468v2.564a.473.473 0 0 1-.466.475H3V0h9.595a.45.45 0 0 1 .398.463v2.565a.469.469 0 0 1-.468.467h-.065a.468.468 0 0 1-.467-.467V1H4v14h8.01l-.007-2.04c0-.257.21-.467.467-.467h.065zm-2.867-2.377l2.01-1.95a.52.52 0 0 0 0-.77l-2.01-1.95a.526.526 0 0 1 0-.77.598.598 0 0 1 .814 0l2.012 1.95a1.571 1.571 0 0 1 0 2.31l-2.012 1.95a.598.598 0 0 1-.814 0 .526.526 0 0 1 0-.77z',
      fillRule: 'evenodd'
    })
  );
};

exit.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var expand = function expand(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M2.014 10.777l-.043 2.8a.52.52 0 0 0 .544.544l2.8-.043a.526.526 0 0 1 .546.546.598.598 0 0 1-.575.575l-2.802.044A1.571 1.571 0 0 1 .85 13.609l.044-2.802a.598.598 0 0 1 .575-.575.526.526 0 0 1 .545.545zm12.064-5.461l.043-2.801a.52.52 0 0 0-.543-.544l-2.801.043a.526.526 0 0 1-.545-.545.598.598 0 0 1 .575-.575L13.609.85a1.571 1.571 0 0 1 1.634 1.634l-.044 2.802a.598.598 0 0 1-.575.575.526.526 0 0 1-.546-.545zm-9.724 7.038a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708.708l-8 8z',
      fillRule: 'evenodd'
    })
  );
};

expand.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var exportAction = function exportAction(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8.505 1c.422-.003.844.17 1.166.516l1.95 2.05c.213.228.213.6 0 .828a.52.52 0 0 1-.771 0L9 2.451v7.993c0 .307-.224.556-.5.556s-.5-.249-.5-.556v-7.96l-1.82 1.91a.52.52 0 0 1-.77 0 .617.617 0 0 1 0-.829l1.95-2.05A1.575 1.575 0 0 1 8.5 1h.005zM4.18 7c-.473 0-.88.294-.972.703l-1.189 5.25a.776.776 0 0 0-.019.172c0 .483.444.875.99.875H14.01c.065 0 .13-.006.194-.017.537-.095.885-.556.778-1.03l-1.19-5.25C13.7 7.294 13.293 7 12.822 7H4.18zM6 6v1h5V6h1.825c.946 0 1.76.606 1.946 1.447l1.19 5.4c.215.975-.482 1.923-1.556 2.118a2.18 2.18 0 0 1-.39.035H2.985C1.888 15 1 14.194 1 13.2c0-.119.013-.237.039-.353l1.19-5.4C2.414 6.606 3.229 6 4.174 6H6z'
    })
  );
};

exportAction.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var eye = function eye(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M15.98 7.873c.013.03.02.064.02.098v.06a.24.24 0 0 1-.02.097C15.952 8.188 13.291 14 8 14S.047 8.188.02 8.128A.24.24 0 0 1 0 8.03v-.059c0-.034.007-.068.02-.098C.048 7.813 2.709 2 8 2s7.953 5.813 7.98 5.873zm-1.37-.424a12.097 12.097 0 0 0-1.385-1.862C11.739 3.956 9.999 3 8 3c-2 0-3.74.956-5.225 2.587a12.098 12.098 0 0 0-1.701 2.414 12.095 12.095 0 0 0 1.7 2.413C4.26 12.043 6.002 13 8 13s3.74-.956 5.225-2.587A12.097 12.097 0 0 0 14.926 8c-.08-.15-.189-.343-.315-.551zM8 4.75A3.253 3.253 0 0 1 11.25 8 3.254 3.254 0 0 1 8 11.25 3.253 3.253 0 0 1 4.75 8 3.252 3.252 0 0 1 8 4.75zm0 1C6.76 5.75 5.75 6.76 5.75 8S6.76 10.25 8 10.25 10.25 9.24 10.25 8 9.24 5.75 8 5.75zm0 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z'
    })
  );
};

eye.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var eyeClosed = function eyeClosed(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M5.318 13.47l.776-.776A6.04 6.04 0 0 0 8 13c1.999 0 3.74-.956 5.225-2.587A12.097 12.097 0 0 0 14.926 8a12.097 12.097 0 0 0-1.701-2.413l-.011-.012.707-.708c1.359 1.476 2.045 2.976 2.058 3.006.014.03.021.064.021.098v.06a.24.24 0 0 1-.02.097C15.952 8.188 13.291 14 8 14a7.03 7.03 0 0 1-2.682-.53zM2.04 11.092C.707 9.629.034 8.158.02 8.128A.24.24 0 0 1 0 8.03v-.059c0-.034.007-.068.02-.098C.048 7.813 2.709 2 8 2c.962 0 1.837.192 2.625.507l-.78.78A6.039 6.039 0 0 0 8 3c-2 0-3.74.956-5.225 2.587a12.098 12.098 0 0 0-1.701 2.414 12.11 12.11 0 0 0 1.674 2.383l-.708.708zM8.362 4.77L7.255 5.877a2.262 2.262 0 0 0-1.378 1.378L4.77 8.362A3.252 3.252 0 0 1 8.362 4.77zm2.86 2.797a3.254 3.254 0 0 1-3.654 3.654l1.06-1.06a2.262 2.262 0 0 0 1.533-1.533l1.06-1.06zm-9.368 7.287a.5.5 0 0 1-.708-.708l13-13a.5.5 0 0 1 .708.708l-13 13z'
    })
  );
};

eyeClosed.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var faceHappy = function faceHappy(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1.067A6.933 6.933 0 1 0 8 1.067a6.933 6.933 0 0 0 0 13.866zM5.333 6.4a1.067 1.067 0 1 1 0-2.133 1.067 1.067 0 0 1 0 2.133zm5.334 0a1.067 1.067 0 1 1 0-2.133 1.067 1.067 0 0 1 0 2.133zM2.739 8.802a.533.533 0 0 1 .922-.537C4.815 10.245 6.249 11.2 8 11.2c1.75 0 3.185-.956 4.34-2.935a.533.533 0 0 1 .92.537c-1.333 2.287-3.1 3.465-5.26 3.465-2.16 0-3.927-1.178-5.26-3.465z'
    })
  );
};

faceHappy.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var faceNeutral = function faceNeutral(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1.067A6.933 6.933 0 1 0 8 1.067a6.933 6.933 0 0 0 0 13.866zM5.333 6.4a1.067 1.067 0 1 1 0-2.133 1.067 1.067 0 0 1 0 2.133zm5.334 0a1.067 1.067 0 1 1 0-2.133 1.067 1.067 0 0 1 0 2.133zM3.2 10.667a.533.533 0 0 1 0-1.067h9.6a.533.533 0 1 1 0 1.067H3.2z',
      fillRule: 'evenodd'
    })
  );
};

faceNeutral.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var faceSad = function faceSad(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1.067A6.933 6.933 0 1 0 8 1.067a6.933 6.933 0 0 0 0 13.866zM5.333 6.4a1.067 1.067 0 1 1 0-2.133 1.067 1.067 0 0 1 0 2.133zm5.334 0a1.067 1.067 0 1 1 0-2.133 1.067 1.067 0 0 1 0 2.133zm2.487 3.868a.533.533 0 1 1-.708.797C10.936 9.725 9.458 9.067 8 9.067c-1.458 0-2.937.657-4.446 1.998a.533.533 0 1 1-.708-.797C4.536 8.765 6.258 8 8 8s3.463.765 5.154 2.268z'
    })
  );
};

faceSad.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var fullScreen = function fullScreen(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'fullscreen-a',
        d: 'M13 3v4h-1V4H9V3h4zM3 3h4v1H4v3H3V3zm10 10H9v-1h3V9h1v4zM3 13V9h1v3h3v1H3zM0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006V1.994zm1 0v12.012c0 .548.446.994.994.994h12.012a.995.995 0 0 0 .994-.994V1.994A.995.995 0 0 0 14.006 1H1.994A.995.995 0 0 0 1 1.994z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#fullscreen-a',
      fillRule: 'evenodd'
    })
  );
};

fullScreen.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var gear = function gear(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'gear-a',
        d: 'M.164 10.329L1.87 8 .163 5.67c.18-.601.43-1.19.758-1.757a8.197 8.197 0 0 1 1.142-1.535l2.872.313L6.099.05a8.166 8.166 0 0 1 3.8-.003l1.166 2.644 2.872-.313a8.166 8.166 0 0 1 1.899 3.293L14.13 8l1.706 2.33c-.18.601-.43 1.19-.758 1.757a8.197 8.197 0 0 1-1.142 1.535l-2.872-.313-1.164 2.641a8.166 8.166 0 0 1-3.8.003l-1.166-2.644-2.872.313a8.166 8.166 0 0 1-1.899-3.293zm4.663 1.986a1 1 0 0 1 1.023.591l.957 2.17c.79.134 1.597.132 2.387-.001l.956-2.169a1 1 0 0 1 1.023-.59l2.358.256a7.23 7.23 0 0 0 1.194-2.068l-1.401-1.913a1 1 0 0 1 0-1.182l1.4-1.912a7.165 7.165 0 0 0-1.192-2.069l-2.359.257a1 1 0 0 1-1.023-.591L9.193.924a7.165 7.165 0 0 0-2.387.001L5.85 3.094a1 1 0 0 1-1.023.59l-2.358-.256a7.23 7.23 0 0 0-1.194 2.068l1.401 1.913a1 1 0 0 1 0 1.182l-1.4 1.912c.28.751.681 1.45 1.192 2.069l2.359-.257zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#gear-a'
    })
  );
};

gear.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var grab = function grab(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M14 4v1H2V4h12zm0 7v1H2v-1h12zm0-3.5v1H2v-1h12z'
    })
  );
};

grab.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var graphApp = function graphApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M10.586 18H9v12h2V18.414l7.485 7.485 1.414-1.414L12.414 17H23v-2H11v1.414l-1 1 .586.586zM11 15H9V3h2v12z'
      }),
      _react2.default.createElement('path', {
        fill: '#00A9E5',
        d: 'M20 23a3 3 0 1 1 0 6 3 3 0 1 1 0-6zm8-7a3 3 0 1 1-6 0 3 3 0 1 1 6 0zM7 29a3 3 0 1 1 6 0 3 3 0 1 1-6 0M7 3a3 3 0 1 1 6 0 3 3 0 1 1-6 0m9 13a6 6 0 1 1-12.001-.001A6 6 0 0 1 16 16'
      })
    )
  );
};

graphApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var grid = function grid(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'grid-a',
        d: 'M1 5V1h4v4H1zm3-1V2H2v2h2zm2 1V1h4v4H6zm3-1V2H7v2h2zm2 1V1h4v4h-4zm1-1h2V2h-2v2zM1 10V6h4v4H1zm3-1V7H2v2h2zm2 1V6h4v4H6zm3-1V7H7v2h2zm2 1V6h4v4h-4zm3-1V7h-2v2h2zM1 15v-4h4v4H1zm1-1h2v-2H2v2zm4 1v-4h4v4H6zm1-1h2v-2H7v2zm4 1v-4h4v4h-4zm1-1h2v-2h-2v2z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#grid-a'
    })
  );
};

grid.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var grokApp = function grokApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M27.2 14.122c-.98-.974-1.26-2.226-1.26-3.757V3.757c0-1.253-.49-2.227-1.12-2.783C24.19.348 22.79.07 21.04 0h-3.5l-5.6 32h9.1c1.68-.07 3.15-.348 3.78-.974.63-.626 1.12-1.53 1.12-2.783V21.635c0-1.53.28-2.783 1.26-3.757a5.143 5.143 0 0 1 1.89-1.182.73.73 0 0 0 0-1.322c-.77-.348-1.4-.765-1.89-1.252z'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M4.94 17.878c1.05.974 1.4 2.226 1.4 3.757V28.243c0 1.253.49 2.227 1.12 2.783.63.626 2.1.974 3.92.974h3.36l5.6-32h-8.96C9.56 0 8.16.348 7.46.974c-.63.626-1.12 1.53-1.12 2.783V10.365c0 1.53-.35 2.783-1.4 3.757-.56.487-1.19.904-2.03 1.182-.63.209-.63 1.044 0 1.322.77.348 1.47.765 2.03 1.252z'
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        d: 'M17.54 0l-5.6 32h2.8l5.6-32z'
      })
    )
  );
};

grokApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var heatmap = function heatmap(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8-9a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z'
    })
  );
};

heatmap.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var help = function help(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'help-a',
        d: 'M13.6 12.186l-1.357-1.358c-.025-.025-.058-.034-.084-.056.53-.794.84-1.746.84-2.773a4.977 4.977 0 0 0-.84-2.772c.026-.02.059-.03.084-.056L13.6 3.813a6.96 6.96 0 0 1 0 8.373zM8 15A6.956 6.956 0 0 1 3.814 13.6l1.358-1.358c.025-.025.034-.057.055-.084C6.02 12.688 6.974 13 8 13a4.978 4.978 0 0 0 2.773-.84c.02.026.03.058.056.083l1.357 1.358A6.956 6.956 0 0 1 8 15zm-5.601-2.813a6.963 6.963 0 0 1 0-8.373l1.359 1.358c.024.025.057.035.084.056A4.97 4.97 0 0 0 3 8c0 1.027.31 1.98.842 2.773-.027.022-.06.031-.084.056l-1.36 1.358zm5.6-.187A4 4 0 1 1 8 4a4 4 0 0 1 0 8zM8 1c1.573 0 3.019.525 4.187 1.4l-1.357 1.358c-.025.025-.035.057-.056.084A4.979 4.979 0 0 0 8 3a4.979 4.979 0 0 0-2.773.842c-.021-.027-.03-.059-.055-.084L3.814 2.4A6.957 6.957 0 0 1 8 1zm0-1a8.001 8.001 0 1 0 .003 16.002A8.001 8.001 0 0 0 8 0z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#help-a',
      fillRule: 'evenodd'
    })
  );
};

help.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var iInCircle = function iInCircle(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8.3 10.717H6.7v-4h1.6v4zm-1.6-5.71a.83.83 0 0 1 .207-.578c.137-.153.334-.229.59-.229.256 0 .454.076.594.23.14.152.209.345.209.576 0 .228-.07.417-.21.568-.14.15-.337.226-.593.226-.256 0-.453-.075-.59-.226a.81.81 0 0 1-.207-.568zM7.5 13A5.506 5.506 0 0 1 2 7.5C2 4.467 4.467 2 7.5 2S13 4.467 13 7.5 10.533 13 7.5 13m0-12a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13',
      fillRule: 'evenodd'
    })
  );
};

iInCircle.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var importAction = function importAction(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M9 10.114l1.85-1.943a.52.52 0 0 1 .77 0c.214.228.214.6 0 .829l-1.95 2.05a1.552 1.552 0 0 1-2.31 0L5.41 9a.617.617 0 0 1 0-.829.52.52 0 0 1 .77 0L8 10.082V1.556C8 1.249 8.224 1 8.5 1s.5.249.5.556v8.558zM4.18 6a.993.993 0 0 0-.972.804l-1.189 6A.995.995 0 0 0 2.991 14h11.018a1 1 0 0 0 .972-1.196l-1.19-6a.993.993 0 0 0-.97-.804H4.18zM6 5v1h5V5h1.825c.946 0 1.76.673 1.946 1.608l1.19 6A2 2 0 0 1 14.016 15H2.984a1.992 1.992 0 0 1-1.945-2.392l1.19-6C2.414 5.673 3.229 5 4.174 5H6z'
    })
  );
};

importAction.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var indexClose = function indexClose(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12 2H2v11h6v1H1V1h12v6h-1V2zM5 5h5.999V4H5v1zM3 5V4h1v1H3zm2 3V7h3v1H5zM3 8V7h1v1H3zm2 3v-1h2v1H5zm5.5-1.207l1.414-1.414.707.707-1.414 1.414 1.414 1.414-.707.707-1.414-1.414-1.414 1.414-.707-.707L9.793 10.5 8.379 9.086l.707-.707L10.5 9.793zM3 11v-1h1v1H3zm7.5-5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1C8.57 7 7 8.57 7 10.5S8.57 14 10.5 14s3.5-1.57 3.5-3.5S12.43 7 10.5 7z'
    })
  );
};

indexClose.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var indexEdit = function indexEdit(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12 2H2v11h4v1H1V1h12v5h-1V2zM5 5h5.999V4H5v1zM3 5V4h1v1H3zm2 3V7h6v1H5zM3 8V7h1v1H3zm2 3v-1h3v1H5zm-2 0v-1h1v1H3zm4.502 1.41L12.913 7 15 9.087l-5.41 5.41L7 15l.502-2.59z'
    })
  );
};

indexEdit.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var indexFlush = function indexFlush(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M14.516 9H10.5a.5.5 0 0 1 0-1h4.016L13.11 5.948c-.171-.252-.137-.62.079-.821.217-.2.531-.159.703.092l2 2.916a.648.648 0 0 1 .108.397.643.643 0 0 1-.108.332l-2 2.918A.478.478 0 0 1 13.5 12a.457.457 0 0 1-.312-.127c-.216-.202-.25-.57-.079-.82L14.516 9zM3 15H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h7.8c.274 0 .537.113.726.312l2.2 2.428c.176.186.274.433.274.689V7h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-4h1v4a1 1 0 0 1-1 1H3zm-1-1V2H1v12h1z'
    })
  );
};

indexFlush.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var indexMapping = function indexMapping(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 8H4.915a1.5 1.5 0 1 1 0-1H8V2.5A1.5 1.5 0 0 1 9.5 1h2.585a1.5 1.5 0 1 1 0 1H9.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h2.585a1.5 1.5 0 1 1 0 1H9.5A1.5 1.5 0 0 1 8 12.5V8zM3.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm10-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
    })
  );
};

indexMapping.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var indexOpen = function indexOpen(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12 2H2v11h6v1H1V1h12v6h-1V2zM5 5h5.999V4H5v1zM3 5V4h1v1H3zm2 3V7h3v1H5zM3 8V7h1v1H3zm2 3v-1h2v1H5zm5-1V8h1v2h2v1h-2v2h-1v-2H8v-1h2zm-7 1v-1h1v1H3zm7.5-5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1C8.57 7 7 8.57 7 10.5S8.57 14 10.5 14s3.5-1.57 3.5-3.5S12.43 7 10.5 7z'
    })
  );
};

indexOpen.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var indexPatternApp = function indexPatternApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd',
        transform: 'translate(2 2)'
      },
      _react2.default.createElement('rect', {
        width: '16',
        height: '16',
        x: '6',
        fill: '#00BFB3',
        rx: '2'
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        d: 'M10 3h8a1 1 0 0 1 0 2h-8a1 1 0 1 1 0-2zm0 4h8a1 1 0 0 1 0 2h-8a1 1 0 1 1 0-2zm0 4h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm14 10h-9v2a1 1 0 0 1-2 0v-2H4v2a1 1 0 0 1-2 0v-3a.997.997 0 0 1 1-1h10v-3h2v3h10a.997.997 0 0 1 1 1v3a1 1 0 0 1-2 0v-2z'
      }),
      _react2.default.createElement('path', {
        fill: '#30A9E5',
        d: 'M3 28a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm22 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-11 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z'
      })
    )
  );
};

indexPatternApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var indexSettings = function indexSettings(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M5 5h5.999V4H5v1zM3 5h1V4H3v1zm0 3h1V7H3v1zm6.022-1l-.15.333-.737-.078-.467-.05-.33.342A5.13 5.13 0 0 0 6.948 8H5V7h4.022zm-3.005 3L6 10.056l.306.411.399.533H5v-1h1.017zM3 11h1v-1H3v1z'
    }),
    _react2.default.createElement('path', {
      d: 'M13 7.05l-.162-.359-.2-.447-.47-.11A5.019 5.019 0 0 0 12 6.098V2H2v11h4.36c.157.354.355.69.59 1H1V1h12v6.05z'
    }),
    _react2.default.createElement('path', {
      d: 'M11.004 7c.322 0 .646.036.966.109l.595 1.293 1.465-.152c.457.462.786 1.016.969 1.61l-.87 1.14.871 1.141a3.94 3.94 0 0 1-.387.859 4.058 4.058 0 0 1-.583.75l-1.465-.152-.594 1.292a4.37 4.37 0 0 1-1.941.001l-.594-1.293-1.466.152a3.954 3.954 0 0 1-.969-1.61l.87-1.14L7 9.86a3.947 3.947 0 0 1 .97-1.61l1.466.152.593-1.292a4.37 4.37 0 0 1 .975-.11zM11 12a1 1 0 1 0 .002-1.998A1 1 0 0 0 11 12z'
    })
  );
};

indexSettings.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var invert = function invert(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 13.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5zM8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12z'
    }),
    _react2.default.createElement('path', {
      d: 'M8 2a6 6 0 1 0 0 12V2z'
    })
  );
};

invert.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var kqlField = function kqlField(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 9a5 5 0 1 1 0-8 5 5 0 1 1 0 8zm.75-.692a4 4 0 1 0 0-6.615A4.981 4.981 0 0 1 10 5a4.981 4.981 0 0 1-1.25 3.308zM4.133 8V5.559h2.496v-.625H4.133V2.996h2.719v-.633H3.43V8h.703z'
    })
  );
};

kqlField.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '10',
  viewBox: '0 0 16 10'
};

var kqlOperand = function kqlOperand(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M11.192 10.145l2.298-1.792c.259-.196.259-.509 0-.706l-2.298-1.792c-.256-.196-.256-.513 0-.708a.81.81 0 0 1 .93 0l2.3 1.791c.772.59.77 1.537 0 2.124l-2.3 1.791a.81.81 0 0 1-.93 0c-.256-.195-.256-.512 0-.708zm-6.384-4.29L2.51 7.647c-.259.196-.259.509 0 .706l2.298 1.792c.256.196.256.513 0 .708a.81.81 0 0 1-.93 0l-2.3-1.791c-.772-.59-.77-1.537 0-2.124l2.3-1.791a.81.81 0 0 1 .93 0c.256.195.256.512 0 .708zM6.5 6h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm0 3h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z'
    })
  );
};

kqlOperand.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var kqlValue = function kqlValue(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 4a5 5 0 1 1 0 8 5 5 0 1 1 0-8zm-.75.692a4 4 0 1 0 0 6.615A4.981 4.981 0 0 1 6 8c0-1.268.472-2.426 1.25-3.308zM11.348 11l2.078-5.637h-.739l-1.656 4.727h-.062L9.313 5.363h-.739L10.652 11h.696z'
    })
  );
};

kqlValue.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var kqlFunction = function kqlFunction(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M7 7H3v2h4v2l3-3-3-3v2zM6 6V5a1 1 0 0 1 1.707-.707l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 6 11v-1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3zm7.5-3a.5.5 0 0 1 .5.5v9a.5.5 0 1 1-1 0v-9a.5.5 0 0 1 .5-.5z'
    })
  );
};

kqlFunction.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var kqlSelector = function kqlSelector(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M5 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 1 5 3a5 5 0 0 1 0 10zm6-1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'
    })
  );
};

kqlSelector.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var link = function link(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'link-a',
        d: 'M3.832 15.711a2.929 2.929 0 0 1-2.084-.863l-.596-.595a2.95 2.95 0 0 1 0-4.168l3.87-3.87a2.929 2.929 0 0 1 2.085-.864c.787 0 1.527.307 2.083.863l.596.596a.42.42 0 1 1-.596.595l-.595-.595a2.092 2.092 0 0 0-1.488-.617c-.563 0-1.092.22-1.49.617l-3.87 3.87c-.82.82-.82 2.156 0 2.977l.596.595c.397.398.926.617 1.489.617.562 0 1.09-.22 1.488-.617L8 11.572a.42.42 0 1 1 .595.596l-2.68 2.68a2.925 2.925 0 0 1-2.083.863zm5.061-5.061a2.928 2.928 0 0 1-2.084-.864.42.42 0 1 1 .596-.595c.397.397.926.617 1.488.617.563 0 1.091-.22 1.489-.617l3.87-3.87c.82-.821.82-2.157 0-2.977l-.595-.597a2.108 2.108 0 0 0-2.977 0L8 4.427a.42.42 0 1 1-.595-.595l2.68-2.68a2.95 2.95 0 0 1 4.167 0l.596.596a2.95 2.95 0 0 1 0 4.168l-3.87 3.87a2.928 2.928 0 0 1-2.085.864z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#link-a'
    })
  );
};

link.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var list = function list(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'list-a',
        d: 'M2 4V3h2v1H2zm4 0V3h8v1H6zm0 3V6h8v1H6zm0 3V9h8v1H6zM2 7V6h2v1H2zm0 3V9h2v1H2zm4 3v-1h8v1H6zm-4 0v-1h2v1H2z'
      })
    ),
    _react2.default.createElement('use', {
      fillRule: 'nonzero',
      xlinkHref: '#list-a'
    })
  );
};

list.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var listAdd = function listAdd(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M0 9h2v1H0V9zm3 0h10v1H3V9zM0 6h2v1H0V6zm3 0h10v1H3V6zM0 3h2v1H0V3zm13 10h-1v1h1v1h1v-1h1v-1h-1v-1h-1v1zM3 3h10v1H3V3z'
    })
  );
};

listAdd.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var lock = function lock(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'lock-a',
        d: 'M3 5a5 5 0 0 1 10 0h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1zm6.33 6.493L10 13H6l.67-1.507a2 2 0 1 1 2.66 0zM2 15h12V6H2v9zM8 1C5.794 1 4 2.794 4 5h8c0-2.206-1.794-4-4-4z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#lock-a',
      fillRule: 'evenodd'
    })
  );
};

lock.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var loggingApp = function loggingApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M22.857 0H7.999c-.63 0-1.142.512-1.142 1.143v29.714c0 .631.512 1.143 1.142 1.143h22.858c.63 0 1.142-.512 1.142-1.143V9.143l-6.706-3.568L22.857 0z'
      }),
      _react2.default.createElement('path', {
        fill: '#0279A0',
        d: 'M22.857 0v8c0 .63.512 1.143 1.143 1.143h8L22.857 0z'
      }),
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M15.713 14.857H1.429C.64 14.857 0 15.433 0 16.143v7.714c0 .71.64 1.286 1.429 1.286h14.284c.788 0 1.428-.576 1.428-1.286v-7.714c0-.71-.64-1.286-1.428-1.286'
      }),
      _react2.default.createElement('path', {
        fill: '#FFF',
        d: 'M5.546 22.042H3.272v-4.079h.474v3.649h1.8zM13.87 21.889a4.349 4.349 0 0 1-1.435.21c-.617 0-1.099-.184-1.442-.552-.344-.367-.517-.882-.517-1.545 0-.423.085-.795.255-1.114.171-.319.415-.562.736-.731.32-.168.694-.252 1.124-.252.435 0 .841.08 1.217.24l-.184.418a2.71 2.71 0 0 0-1.063-.234c-.497 0-.885.148-1.164.443-.28.296-.418.706-.418 1.23 0 .552.135.969.403 1.253.269.285.663.427 1.184.427.283 0 .559-.032.829-.097v-1.256h-.912v-.424h1.386v1.984zm-4.94-.634c-.23.285-.572.428-1.024.428-.448 0-.79-.143-1.025-.429-.235-.285-.353-.704-.353-1.257 0-.544.118-.96.353-1.246.235-.285.579-.428 1.031-.428.45 0 .79.142 1.02.425.23.285.344.701.344 1.249 0 .555-.115.974-.345 1.258zm.355-2.798c-.33-.372-.787-.558-1.373-.558-.603 0-1.068.183-1.395.548-.327.366-.49.88-.49 1.544 0 .67.162 1.19.489 1.556.326.368.79.551 1.39.551.589 0 1.048-.187 1.378-.56.33-.375.494-.888.494-1.541 0-.654-.164-1.167-.493-1.54z'
      })
    )
  );
};

loggingApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoApache = function logoApache(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'linearGradient',
        {
          id: 'logo_apache-a',
          x1: '21.902%',
          x2: '141.879%',
          y1: '63.905%',
          y2: '20.213%'
        },
        _react2.default.createElement('stop', {
          offset: '0%',
          stopColor: '#F69923'
        }),
        _react2.default.createElement('stop', {
          offset: '31.23%',
          stopColor: '#F79A23'
        }),
        _react2.default.createElement('stop', {
          offset: '83.83%',
          stopColor: '#E97826'
        })
      ),
      _react2.default.createElement(
        'linearGradient',
        {
          id: 'logo_apache-b',
          x1: '-217.651%',
          x2: '74.743%',
          y1: '177.127%',
          y2: '36.665%'
        },
        _react2.default.createElement('stop', {
          offset: '32.33%',
          stopColor: '#9E2064'
        }),
        _react2.default.createElement('stop', {
          offset: '63.02%',
          stopColor: '#C92037'
        }),
        _react2.default.createElement('stop', {
          offset: '75.14%',
          stopColor: '#CD2335'
        }),
        _react2.default.createElement('stop', {
          offset: '100%',
          stopColor: '#E97826'
        })
      ),
      _react2.default.createElement(
        'linearGradient',
        {
          id: 'logo_apache-c',
          x1: '-80.044%',
          x2: '146.24%',
          y1: '73.574%',
          y2: '31.539%'
        },
        _react2.default.createElement('stop', {
          offset: '32.33%',
          stopColor: '#9E2064'
        }),
        _react2.default.createElement('stop', {
          offset: '63.02%',
          stopColor: '#C92037'
        }),
        _react2.default.createElement('stop', {
          offset: '75.14%',
          stopColor: '#CD2335'
        }),
        _react2.default.createElement('stop', {
          offset: '100%',
          stopColor: '#E97826'
        })
      ),
      _react2.default.createElement(
        'linearGradient',
        {
          id: 'logo_apache-d',
          x1: '-18.316%',
          x2: '165.002%',
          y1: '52.497%',
          y2: '41.656%'
        },
        _react2.default.createElement('stop', {
          offset: '0%',
          stopColor: '#282662'
        }),
        _react2.default.createElement('stop', {
          offset: '9.548%',
          stopColor: '#662E8D'
        }),
        _react2.default.createElement('stop', {
          offset: '78.82%',
          stopColor: '#9F2064'
        }),
        _react2.default.createElement('stop', {
          offset: '94.87%',
          stopColor: '#CD2032'
        })
      ),
      _react2.default.createElement(
        'linearGradient',
        {
          id: 'logo_apache-e',
          x1: '-109.701%',
          x2: '64.617%',
          y1: '463.715%',
          y2: '17.19%'
        },
        _react2.default.createElement('stop', {
          offset: '32.33%',
          stopColor: '#9E2064'
        }),
        _react2.default.createElement('stop', {
          offset: '63.02%',
          stopColor: '#C92037'
        }),
        _react2.default.createElement('stop', {
          offset: '75.14%',
          stopColor: '#CD2335'
        }),
        _react2.default.createElement('stop', {
          offset: '100%',
          stopColor: '#E97826'
        })
      ),
      _react2.default.createElement(
        'linearGradient',
        {
          id: 'logo_apache-f',
          x1: '-34.88%',
          x2: '110.599%',
          y1: '130.522%',
          y2: '-9.118%'
        },
        _react2.default.createElement('stop', {
          offset: '32.33%',
          stopColor: '#9E2064'
        }),
        _react2.default.createElement('stop', {
          offset: '63.02%',
          stopColor: '#C92037'
        }),
        _react2.default.createElement('stop', {
          offset: '75.14%',
          stopColor: '#CD2335'
        }),
        _react2.default.createElement('stop', {
          offset: '100%',
          stopColor: '#E97826'
        })
      ),
      _react2.default.createElement(
        'linearGradient',
        {
          id: 'logo_apache-g',
          x1: '-13.673%',
          x2: '117.858%',
          y1: '192.564%',
          y2: '-136.906%'
        },
        _react2.default.createElement('stop', {
          offset: '0%',
          stopColor: '#282662'
        }),
        _react2.default.createElement('stop', {
          offset: '9.548%',
          stopColor: '#662E8D'
        }),
        _react2.default.createElement('stop', {
          offset: '78.82%',
          stopColor: '#9F2064'
        }),
        _react2.default.createElement('stop', {
          offset: '94.87%',
          stopColor: '#CD2032'
        })
      )
    ),
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: 'url(#logo_apache-a)',
        d: 'M13.628.18c-.498.293-1.332 1.134-2.328 2.348v.074l.871 1.613.044.03c.641-.914 1.289-1.742 1.948-2.446.05-.056.075-.08.075-.08-.025.024-.05.055-.075.08-.211.237-.859.984-1.83 2.478l.112.025s2.273-.224 3.368-.41l.062-.057c.35-1.955-.342-2.851-.342-2.851S14.661-.423 13.628.18z',
        transform: 'translate(8)'
      }),
      _react2.default.createElement('path', {
        fill: 'url(#logo_apache-b)',
        d: 'M9.525 8.697c.28-.516.56-1.027.84-1.519.293-.51.592-1.008.897-1.488a.397.397 0 0 0 .05-.087c.299-.473.598-.921.903-1.357L11.3 2.52c-.069.081-.137.168-.206.256-.261.33-.535.678-.815 1.052a51.783 51.783 0 0 0-1.893 2.708c-.261.405-.53.816-.79 1.245l-.032.05V7.9l1.14 2.26.05.019c.255-.498.51-.996.771-1.482z',
        transform: 'translate(8)'
      }),
      _react2.default.createElement('path', {
        fill: 'url(#logo_apache-c)',
        d: 'M4.563 19.76c.206-.535.424-1.077.642-1.625.211-.523.423-1.052.647-1.58.218-.53.448-1.06.679-1.595.236-.541.473-1.083.716-1.618.242-.53.485-1.059.734-1.582.087-.186.18-.38.274-.566.156-.324.318-.648.473-.965.007-.019.02-.031.025-.05L7.564 7.832l-.056.093c-.274.455-.554.915-.822 1.389a54.535 54.535 0 0 0-1.45 2.714c-.044.087-.081.168-.125.255a32.15 32.15 0 0 0-.703 1.544c-.237.56-.448 1.096-.635 1.606-.125.337-.23.654-.336.965-.081.262-.162.53-.237.791-.18.623-.33 1.239-.454 1.862l.018.074 1.14 2.266.037.02c.155-.424.317-.848.485-1.283.044-.125.094-.243.137-.368z',
        transform: 'translate(8)'
      }),
      _react2.default.createElement('path', {
        fill: 'url(#logo_apache-d)',
        d: 'M2.733 19.132a18.84 18.84 0 0 0-.311 2.253c0 .025-.006.05-.006.081-.374-.598-1.37-1.177-1.37-1.177.716 1.034 1.258 2.061 1.338 3.07-.38.08-.902-.038-1.512-.255.628.578 1.102.74 1.288.784-.579.037-1.183.436-1.793.89.89-.36 1.607-.504 2.123-.392-.815 2.31-1.63 4.862-2.453 7.564.25-.075.399-.243.486-.473.143-.492 1.114-3.704 2.627-7.931.044-.119.087-.243.13-.362.013-.03.026-.068.038-.1.162-.441.324-.896.498-1.356.038-.106.081-.212.119-.318v-.006l-1.19-2.353c0 .03-.006.056-.012.08z',
        transform: 'translate(8)'
      }),
      _react2.default.createElement('path', {
        fill: 'url(#logo_apache-e)',
        d: 'M12.333 4.283c-.268.411-.56.878-.878 1.407-.018.025-.03.056-.05.081a62.538 62.538 0 0 0-1.687 3.05c-.249.48-.504.984-.765 1.526l.056.025 2.895-.311.068-.05c.878-.405 1.27-.772 1.65-1.301.1-.143.205-.3.305-.455.311-.485.616-1.015.884-1.544.261-.51.492-1.02.672-1.475a6.56 6.56 0 0 0 .398-1.395c-1.17.206-2.608.399-3.548.442z',
        transform: 'translate(8)'
      }),
      _react2.default.createElement('path', {
        fill: 'url(#logo_apache-f)',
        d: 'M8.84 10.59c-.1.212-.205.43-.31.647-.113.237-.231.486-.343.735-.056.124-.119.255-.175.38-.18.386-.354.784-.541 1.195a107.035 107.035 0 0 0-1.357 3.194c-.218.529-.436 1.077-.654 1.637-.2.504-.399 1.015-.598 1.55-.012.025-.018.05-.03.075-.2.53-.394 1.068-.6 1.622-.006.012-.017.045-.023.057l.043.01.866-.094.048-.02c-.018-.006-.03-.03-.048-.037 1.145-.143 2.67-1.002 3.66-2.06.455-.486.866-1.065 1.252-1.738.286-.504.547-1.058.803-1.675.224-.535.435-1.12.64-1.749a3.457 3.457 0 0 1-.896.311 8.977 8.977 0 0 1-.18.038c-.062.012-.125.018-.18.03 1.07-.41 1.743-1.207 2.234-2.178-.28.193-.74.442-1.288.566a2.52 2.52 0 0 1-.23.044c-.02 0-.038.006-.057.006.374-.155.685-.33.959-.535.056-.044.112-.087.168-.137.081-.075.162-.15.237-.224.05-.05.093-.1.143-.156.106-.124.205-.261.299-.41.03-.044.056-.094.087-.138.037-.068.068-.137.1-.205.149-.3.267-.567.36-.803.05-.119.088-.224.125-.33.013-.038.025-.081.044-.119.037-.112.068-.211.093-.305.037-.13.056-.236.069-.311a1.077 1.077 0 0 1-.125.087c-.324.193-.878.368-1.326.448l.884-.1-.884.1c-.062.013-.106.02-.156.032.004-.005-.994.101-2.995.316a2.313 2.313 0 0 0-.118.244z',
        transform: 'translate(8)'
      }),
      _react2.default.createElement('path', {
        fill: 'url(#logo_apache-g)',
        d: 'M4.115 21.914c-.155.43-.317.872-.473 1.32 0 .006-.006.013-.006.019-.025.062-.044.124-.069.193-.106.305-.199.573-.41 1.195.348.162.628.58.896 1.059a1.876 1.876 0 0 0-.623-1.314c1.725.075 3.213-.361 3.979-1.619.068-.112.13-.23.186-.355-.348.442-.784.63-1.593.586h-.007.007c1.201-.536 1.799-1.052 2.334-1.905.125-.206.25-.424.374-.667-1.052 1.078-2.266 1.383-3.543 1.152l-.958.106c-.032.069-.063.15-.094.23z',
        transform: 'translate(8)'
      })
    )
  );
};

logoApache.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoBeats = function logoBeats(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#17A8E0',
        fillRule: 'nonzero',
        d: 'M14.298.412H3.431v12.419h15.526a9.28 9.28 0 0 1 3.797.806A9.317 9.317 0 0 0 14.299.412z'
      }),
      _react2.default.createElement('path', {
        fill: '#353535',
        fillRule: 'nonzero',
        d: 'M3.43 12.83v6.21h10.868a9.317 9.317 0 0 0 8.456-5.397 9.28 9.28 0 0 0-3.797-.806L3.43 12.83z'
      }),
      _react2.default.createElement('path', {
        d: 'M16.865 21.877h-.13.13zm1.63-.468l-.123.037.123-.037zm-.806.259l-.166.043.166-.043z'
      }),
      _react2.default.createElement('path', {
        fill: '#20BBB1',
        fillRule: 'nonzero',
        d: 'M25.35 15.385a12.486 12.486 0 0 1-6.848 6.03l-.124.037c-.227.08-.455.154-.683.222l-.166.043c-.215.061-.437.117-.658.166h-.13c-.81.165-1.634.247-2.461.246H3.43v9.336h15.527a9.317 9.317 0 0 0 9.317-9.311 9.28 9.28 0 0 0-2.923-6.77z'
      }),
      _react2.default.createElement('path', {
        fill: '#009B90',
        fillRule: 'nonzero',
        d: 'M16.735 21.902h.13c.221-.05.443-.105.658-.167l.166-.043c.234-.067.462-.141.683-.221l.123-.037a12.486 12.486 0 0 0 6.856-6.05 9.342 9.342 0 0 0-2.597-1.735 9.317 9.317 0 0 1-8.45 5.403H3.432v3.077h10.867c.818.005 1.635-.07 2.437-.227z'
      })
    )
  );
};

logoBeats.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoCloud = function logoCloud(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#94C93D',
        d: 'M13.114 20.548l.381-.111-.381.11zm-.812.27l.381-.135-.381.135zm-1.57.677l.388-.184-.388.184zm-.732.4l.382-.209-.382.21zm1.508-.757l.381-.16-.381.16zm2.443-.83l.375-.086-.375.086zm.855-.179l.37-.061-.37.061zm1.76-.221h.363-.363zm1.102-.043h-.499a15.557 15.557 0 0 1-7.255 9.55 15.47 15.47 0 0 0 19.858-3.735 15.483 15.483 0 0 0-12.104-5.815zm-1.988.129l.363-.043-.363.043zm-7.102 2.812l.364-.252-.364.252zM7.28 23.852l.314-.27-.314.27zm.055 3.693l-.086-.08.086.08zm1.933-5.213l.375-.234-.375.234zm-3.163 2.702l.153-.166-.153.166zm.572-.603l.265-.253-.265.253zm2.092 4.24l-.27-.197.27.197zm-.855-5.36l.344-.265-.344.265zm.135 4.83l-.141-.116.141.117z'
      }),
      _react2.default.createElement('path', {
        fill: '#73A441',
        d: 'M17.17 19.877h-.604l-.523.043-.363.043-.505.074-.369.061-.48.099-.375.086-.456.123-.381.11-.43.142-.382.136-.413.16-.381.16-.388.178-.388.185-.363.19-.381.21-.345.203-.375.234-.326.221-.364.253-.32.24-.344.264-.314.271-.314.27-.338.32-.265.253c-.141.142-.277.29-.412.437l-.154.166c-.189.21-.371.415-.548.616a16.4 16.4 0 0 0 1.28 1.452l.394.37.086.08.08.073c.105.092.277.24.493.412l.141.117.43.326.272.197c.307.222.615.437.947.616l.216.129a15.557 15.557 0 0 0 7.261-9.52z'
      }),
      _react2.default.createElement('path', {
        fill: '#17A8E0',
        d: 'M17.668.468c-2.724-.004-5.4.716-7.754 2.086a15.557 15.557 0 0 1 7.255 9.538h.554a15.483 15.483 0 0 0 12.05-5.815A15.495 15.495 0 0 0 17.667.467zM6.363 5.378c-.277.296-.548.616-.8.911.24-.295.51-.603.8-.91z'
      }),
      _react2.default.createElement('path', {
        fill: '#0179A1',
        d: 'M9.914 2.554l-.099.055c-.172.099-.338.203-.51.308a14.53 14.53 0 0 0-1.939 1.47l-.308.29-.209.197-.394.4-.092.098c-.29.308-.56.616-.8.917.172.214.349.419.53.616l.22.24c.118.123.229.246.352.369l.264.252.339.32.295.252.339.29.313.246.351.264.332.234.357.24.351.216.363.215.37.203.369.197.387.185.376.172.4.166.381.148.419.148.387.129.431.123.394.104.443.105.4.08.456.08.406.062.467.055.413.037h.689a15.557 15.557 0 0 0-7.243-9.483z'
      }),
      _react2.default.createElement('path', {
        fill: '#353535',
        d: 'M17.175 19.87a3.926 3.926 0 0 1 0-7.778A15.49 15.49 0 0 1 5.57 6.29a15.452 15.452 0 0 0 0 19.379 15.495 15.495 0 0 1 11.606-5.797z'
      })
    )
  );
};

logoCloud.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoDocker = function logoDocker(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M18.099 15.108h3.304v-2.973H18.1v2.973zm-3.905 0h3.304v-2.973h-3.304v2.973zm-3.905 0h3.304v-2.973H10.29v2.973zm-3.905 0H9.69v-2.973H6.384v2.973zm-3.904 0h3.304v-2.973H2.48v2.973zm3.904-3.568H9.69V8.568H6.384v2.972zm3.905 0h3.304V8.568H10.29v2.972zm3.905 0h3.304V8.568h-3.304v2.972zm0-3.567h3.304V5h-3.304v2.973zm17.139 5.402c-.722-.478-2.38-.653-3.656-.415-.164-1.19-.834-2.221-2.052-3.153l-.7-.463-.468.694c-.598.893-.897 2.13-.8 3.317.045.418.183 1.164.617 1.82-.433.231-1.29.549-2.42.528H.124l-.043.247c-.204 1.193-.2 4.914 2.24 7.774C4.178 25.898 6.96 27 10.59 27c7.87 0 13.693-3.586 16.42-10.104 1.073.02 3.381.006 4.567-2.237.031-.051.102-.186.31-.61l.113-.234-.667-.44z',
      fill: '#136EA3',
      fillRule: 'evenodd'
    })
  );
};

logoDocker.defaultProps = {
  width: '32',
  height: '32',
  xmlns: 'http://www.w3.org/2000/svg'
};

var logoElastic = function logoElastic(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#FDD009',
        d: 'M11.934 13.152l7.353 3.356 7.42-6.507c.107-.537.16-1.072.16-1.633 0-4.578-3.721-8.303-8.295-8.303a8.288 8.288 0 0 0-6.84 3.61l-1.234 6.409 1.436 3.068z'
      }),
      _react2.default.createElement('path', {
        fill: '#23BAB1',
        d: 'M4.322 20.947a8.461 8.461 0 0 0-.162 1.657c0 4.59 3.731 8.326 8.317 8.326a8.288 8.288 0 0 0 6.873-3.646l1.224-6.387-1.634-3.127-7.383-3.368-7.235 6.545z'
      }),
      _react2.default.createElement('path', {
        fill: '#EE5097',
        d: 'M4.276 8.208L9.315 9.4l1.104-5.736a3.976 3.976 0 0 0-2.413-.815 3.978 3.978 0 0 0-3.971 3.976c0 .484.08.948.24 1.383'
      }),
      _react2.default.createElement('path', {
        fill: '#17A7E0',
        d: 'M3.838 9.41c-2.251.747-3.817 2.907-3.817 5.284 0 2.314 1.43 4.38 3.576 5.198l7.07-6.398-1.298-2.776-5.53-1.308z'
      }),
      _react2.default.createElement('path', {
        fill: '#92C73D',
        d: 'M20.642 27.284a3.945 3.945 0 0 0 2.4.822 3.977 3.977 0 0 0 3.972-3.975c0-.484-.08-.948-.24-1.383l-5.036-1.18-1.096 5.716z'
      }),
      _react2.default.createElement('path', {
        fill: '#0678A0',
        d: 'M21.667 20.247l5.543 1.298c2.252-.745 3.818-2.907 3.818-5.284a5.553 5.553 0 0 0-3.583-5.19l-7.25 6.36 1.472 2.816z'
      })
    )
  );
};

logoElastic.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoElasticSearch = function logoElasticSearch(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#00A9E5',
        d: 'M23.04 11.2h-8.36c.04.2.12.4.16.56.28.96.44 1.96.52 3 .04.4.04.84.04 1.24s0 .84-.04 1.24c-.08 1.04-.24 2.04-.52 3-.04.2-.12.4-.16.56h8.36c2.64 0 4.76-2.16 4.76-4.8 0-2.64-2.12-4.8-4.76-4.8z'
      }),
      _react2.default.createElement('path', {
        fill: '#353535',
        d: 'M15.36 17.24c.04-.4.04-.84.04-1.24s0-.84-.04-1.24c-.08-1.04-.24-2.04-.52-3-.04-.2-.12-.4-.16-.56H1.72C1.24 12.72 1 14.32 1 16c0 1.68.24 3.28.72 4.8h12.92c.04-.2.12-.4.16-.56.28-.96.48-1.96.56-3z'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M24.48 22.4h-10.4c-.32.72-.68 1.4-1.08 2.04-.6 1-1.32 1.88-2.12 2.72-.28.28-.56.52-.84.8-.56.52-1.2.96-1.84 1.4A15.83 15.83 0 0 0 17 32c5.56 0 10.44-2.84 13.32-7.12a8.158 8.158 0 0 0-5.84-2.48z'
      }),
      _react2.default.createElement('path', {
        fill: '#019B8F',
        d: 'M13 24.44c.4-.64.76-1.32 1.08-2.04H2.32c1.24 2.84 3.28 5.28 5.88 6.96.64-.44 1.24-.88 1.84-1.4.28-.24.56-.52.84-.8.76-.8 1.48-1.72 2.12-2.72z'
      }),
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', {
          fill: '#F9B110',
          d: 'M10.84 4.84c-.28-.28-.56-.52-.84-.8-.56-.52-1.2-.96-1.84-1.4C5.64 4.32 3.6 6.76 2.32 9.6h11.72c-.32-.72-.68-1.4-1.08-2.04-.6-1-1.32-1.92-2.12-2.72z'
        }),
        _react2.default.createElement('path', {
          fill: '#FED10A',
          d: 'M17 0c-3.24 0-6.28.96-8.8 2.64.64.44 1.24.88 1.84 1.4.28.24.56.52.84.8.8.84 1.52 1.72 2.12 2.72.4.64.76 1.32 1.08 2.04h10.4c2.28 0 4.36-.96 5.84-2.48C27.44 2.84 22.56 0 17 0z'
        })
      )
    )
  );
};

logoElasticSearch.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoElasticStack = function logoElasticStack(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#EF5098',
        d: 'M.395 3.64A3.137 3.137 0 0 1 3.533.501h24.94a3.137 3.137 0 0 1 3.138 3.137v6.237H.395V3.64z'
      }),
      _react2.default.createElement('path', {
        fill: '#14A8E0',
        d: 'M.395 22.356h14.82v9.362H3.515a3.137 3.137 0 0 1-3.138-3.056l.02-6.306z'
      }),
      _react2.default.createElement('path', {
        fill: '#FDD10D',
        d: 'M16.778 22.356h14.82v6.237a3.137 3.137 0 0 1-3.137 3.137H16.778v-9.374z'
      }),
      _react2.default.createElement('path', {
        fill: '#20BBB1',
        fillRule: 'nonzero',
        d: 'M.395 11.438h31.197V20.8H.395z'
      })
    )
  );
};

logoElasticStack.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoGithub = function logoGithub(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M16 0C7.164 0 0 7.343 0 16.4c0 7.248 4.584 13.394 10.942 15.562.8.15 1.092-.356 1.092-.789 0-.39-.014-1.684-.022-3.053-4.45.991-5.39-1.934-5.39-1.934-.728-1.894-1.776-2.398-1.776-2.398-1.454-1.017.11-.997.11-.997 1.606.114 2.452 1.69 2.452 1.69 1.428 2.506 3.746 1.781 4.656 1.36.146-1.056.56-1.78 1.016-2.19-3.552-.414-7.288-1.821-7.288-8.105 0-1.792.624-3.254 1.646-4.402-.164-.416-.714-2.085.158-4.342 0 0 1.341-.44 4.4 1.681A14.882 14.882 0 0 1 16 7.932c1.36.006 2.728.188 4.006.553 3.053-2.124 4.396-1.681 4.396-1.681.875 2.259.325 3.926.16 4.34 1.026 1.148 1.645 2.61 1.645 4.402 0 6.3-3.742 7.687-7.307 8.094.577.508 1.086 1.505 1.086 3.035 0 2.192-.021 3.96-.021 4.5 0 .437.29.947 1.101.787C27.42 29.79 32 23.644 32 16.4 32 7.343 24.836 0 16 0z'
    })
  );
};

logoGithub.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoGmail = function logoGmail(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#E65A4D',
        d: 'M29.162 4.149c.29-.175.588-.078.873 0a2.616 2.616 0 0 1 1.907 2.476c.006.29-.007.581-.007.866-.084 0-.135.052-.2.097-.815.582-1.642 1.164-2.45 1.752-.33.239-.692.426-.97.73-.116 0-.2.078-.284.136-2.69 1.855-5.379 3.704-8.062 5.56-1.331.918-2.663 1.849-3.995 2.773h-.11c-.058-.045-.11-.103-.168-.142L5.863 11.55c-.672-.466-1.344-.938-2.017-1.403-.077-.052-.148-.162-.245-.104-.09.052-.033.175-.045.272-.007.032 0 .065 0 .097v16.194c0 .116.006.24.012.355 0 .065-.006.123-.006.188-1.228.149-2.347-.02-3.116-1.131a2.381 2.381 0 0 1-.44-1.364c0-6.032-.006-12.057.007-18.089 0-1.228.995-2.314 2.217-2.488.194-.026.388-.052.556.077.04.039.071.078.117.11 4.273 3.168 8.546 6.335 12.819 9.51.168.122.278.116.446-.007 3.413-2.521 6.833-5.036 10.247-7.55.905-.692 1.823-1.384 2.747-2.07z'
      }),
      _react2.default.createElement('path', {
        fill: '#F6F4EC',
        d: 'M29.162 4.149c-.924.685-1.842 1.377-2.767 2.062-3.413 2.521-6.833 5.03-10.246 7.55-.168.123-.272.13-.446.007-4.267-3.174-8.54-6.335-12.813-9.51-.046-.032-.078-.07-.117-.11.078-.129.214-.083.324-.083h25.742c.11 0 .239-.046.323.084z'
      }),
      _react2.default.createElement('path', {
        fill: '#E6E3D6',
        d: 'M3.556 26.95a6.533 6.533 0 0 1-.013-.356V10.4c0-.032-.007-.065 0-.097.013-.09-.046-.213.045-.271.097-.059.174.051.246.103.672.465 1.344.937 2.017 1.403l9.832 6.846c.058.045.117.097.168.142-.026.026-.058.045-.084.071l-.064.065c-.052 0-.104.013-.13.064l-.064.065c-.007.013-.02.02-.026.032.013-.006.02-.019.032-.025l.065-.065c.052 0 .103-.013.13-.065.018-.02.044-.045.064-.064.064 0 .129-.007.194-.007.898.627 1.803 1.248 2.702 1.875 2.676 1.855 5.353 3.704 8.023 5.572.478.337 1.002.628 1.428 1.035-.116.11-.258.039-.388.058.007-.149-.122-.188-.22-.252-.49-.343-.995-.672-1.473-1.028-.802-.588-1.617-1.15-2.431-1.72-.679-.472-1.351-.963-2.05-1.409-.607-.388-1.17-.853-1.777-1.248-.685-.44-1.332-.93-2.01-1.377-.563-.368-1.113-.762-1.662-1.15-.11-.078-.207-.11-.323-.033-.233.168-.53.278-.724.46-.556.51-1.235.84-1.817 1.305-.743.589-1.545 1.112-2.34 1.636-1.319.873-2.599 1.816-3.911 2.696a43.697 43.697 0 0 0-2.308 1.629c-.207.155-.485.226-.614.485-.13-.013-.272.038-.395-.046 2.315-1.616 4.63-3.226 6.937-4.842.304-.213.646-.381.899-.666.045-.013.103-.019.097-.084 0-.006-.013-.02-.02-.02-.065-.006-.077.046-.09.091-.233.013-.375.194-.55.31-2.463 1.7-4.932 3.388-7.395 5.075zm11.119-7.564l.064-.065c.052 0 .104-.013.13-.064l.064-.065c.052 0 .104-.013.13-.065.006-.013.019-.02.025-.032-.012.006-.019.02-.032.026-.052 0-.103.013-.13.064l-.064.065c-.051 0-.103.013-.13.065-.018.026-.038.045-.057.07-.013.007-.026.014-.033.027.013-.007.026-.013.033-.026zm-.84.575c-.052 0-.104.013-.13.065-.039.006-.09.006-.097.065 0 .012.026.038.039.038.052-.006.058-.051.065-.09.051-.007.096-.013.122-.078a.311.311 0 0 0 .071-.058c.052 0 .104-.013.13-.065l.064-.064c.052 0 .104-.013.13-.065.006-.013.02-.02.026-.032-.013.006-.02.02-.033.026-.051 0-.103.013-.13.064-.018.02-.044.046-.064.065-.051 0-.103.013-.129.065l-.065.064zm-.841.588c-.052 0-.103.013-.13.065-.051.007-.103.013-.096.084 0 .007.013.02.02.02.07.006.077-.046.083-.097.052-.007.097-.02.123-.072.026-.012.045-.038.071-.058.052 0 .103-.013.13-.064l.064-.065c.052 0 .103-.013.13-.065.006-.013.019-.019.025-.032-.013.007-.02.02-.032.026-.052 0-.104.013-.13.065l-.064.064c-.052 0-.104.013-.13.065a.306.306 0 0 0-.064.064zm-.647.46c.052-.007.104-.013.097-.085 0-.006-.012-.019-.019-.019-.071-.006-.078.045-.084.097-.052 0-.097.013-.13.065a.223.223 0 0 0-.193.129c-.045.013-.104.013-.097.084 0 .006.013.02.02.02.064.006.077-.046.083-.098.09 0 .181-.006.194-.129.058-.006.104-.02.13-.065zm2.128-1.533c-.008.027-.025.054-.033.072.025.009.05.035.067.027.016-.01.025-.045.033-.072a.55.55 0 0 1-.067-.027zm-1.81 1.35c-.008-.024-.015-.056-.03-.056-.015-.008-.052.008-.06.024-.022.033-.007.074.03.074.022 0 .037-.025.06-.041zM15.355 19a.185.185 0 0 1 .034-.072c-.025-.009-.05-.035-.067-.026-.016.008-.025.044-.033.07.017.01.042.019.067.028zm-3.526 2.402c-.016-.024-.031-.05-.04-.057-.015 0-.055.016-.055.033-.016.04.008.074.048.065.016 0 .031-.024.047-.04z'
      }),
      _react2.default.createElement('path', {
        fill: '#B6B5AC',
        d: 'M28.121 27.085c-.426-.413-.944-.698-1.428-1.034-2.67-1.862-5.347-3.717-8.023-5.573-.899-.627-1.804-1.247-2.702-1.874 0-.02-.007-.046-.007-.065l3.995-2.773c2.69-1.856 5.379-3.705 8.062-5.56.084-.058.168-.136.284-.136v17.073c-.051-.019-.116-.038-.18-.058z'
      }),
      _react2.default.createElement('path', {
        fill: '#E6E3D6',
        d: 'M4.073 27.143c.123-.258.407-.33.614-.484a47.845 47.845 0 0 1 2.308-1.63c1.312-.885 2.592-1.823 3.91-2.695.796-.524 1.598-1.048 2.341-1.636.588-.465 1.26-.795 1.817-1.306.2-.18.49-.29.724-.459.11-.084.207-.051.323.033.55.388 1.099.782 1.661 1.15.68.446 1.326.944 2.01 1.377.608.388 1.17.854 1.779 1.248.698.446 1.37.937 2.049 1.41.814.568 1.635 1.13 2.43 1.719.485.355.983.685 1.475 1.028.09.064.226.103.22.252-7.888-.007-15.774-.007-23.661-.007z'
      }),
      _react2.default.createElement('path', {
        fill: '#B1392F',
        d: 'M28.315 27.143V10.07c.278-.304.64-.491.97-.73.814-.595 1.635-1.17 2.45-1.752.058-.045.116-.097.2-.097.007.11.013.213.013.323 0 5.502 0 11.01.007 16.51 0 .376-.013.75-.104 1.126-.161.691-.575 1.17-1.247 1.409-.744.259-1.513.33-2.289.284z'
      }),
      _react2.default.createElement('path', {
        fill: '#BEBDB3',
        d: 'M11.514 21.59c-.253.285-.595.453-.9.666a2650.078 2650.078 0 0 1-6.936 4.842l-.129.039c0-.065.007-.123.007-.188 2.47-1.687 4.932-3.374 7.402-5.061.174-.117.31-.304.55-.31l.006.012z'
      })
    )
  );
};

logoGmail.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoKibana = function logoKibana(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fill: '#3EBEB0',
      d: 'M.874 40H30c0-8.046-4.566-15.197-11.652-19.768L.874 40z'
    }),
    _react2.default.createElement('path', {
      fill: '#37A595',
      d: 'M0 26v14h1.873L18.35 20.229a31.291 31.291 0 0 0-3.562-1.974L0 26z'
    }),
    _react2.default.createElement('path', {
      fill: '#353535',
      d: 'M0 13v23l14.79-17.748C10.424 16.186 15.38 14 10 14L0 13z'
    }),
    _react2.default.createElement('path', {
      fill: '#E9478B',
      d: 'M30 0H0v15c5.38 0 10.424 1.186 14.79 3.252L30 0z'
    })
  );
};

logoKibana.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '30',
  height: '40',
  viewBox: '0 0 30 40'
};

var logoKubernetes = function logoKubernetes(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M15.89.003a2.14 2.14 0 0 1 1.03.206l11.127 5.304a2.11 2.11 0 0 1 1.15 1.429l2.75 11.921a2.09 2.09 0 0 1-.412 1.783l-7.697 9.56c-.404.5-1.016.792-1.663.791L9.827 31c-.648 0-1.26-.292-1.664-.793l-7.7-9.558a2.107 2.107 0 0 1-.41-1.783L2.798 6.945a2.11 2.11 0 0 1 1.151-1.43L15.074.21c.255-.122.532-.192.815-.206zM16 4.06c-.368 0-.667.33-.667.738l.002.019c0 .055-.003.122-.002.17.01.236.06.416.091.632.057.464.103.849.074 1.206-.028.135-.127.258-.216.344l-.015.281a8.569 8.569 0 0 0-5.555 2.666 9.98 9.98 0 0 1-.24-.17c-.12.016-.24.053-.396-.038-.298-.2-.57-.477-.898-.81-.15-.16-.26-.31-.438-.464-.04-.035-.103-.082-.148-.118a.793.793 0 0 0-.464-.175.642.642 0 0 0-.53.234c-.23.288-.156.726.163.98l.01.008c.044.035.098.08.138.11.19.14.363.212.552.323.398.246.729.45.99.695.103.108.12.3.134.383l.214.19a8.592 8.592 0 0 0-1.36 5.998l-.278.08c-.074.096-.177.245-.286.29-.343.107-.728.147-1.194.195-.218.018-.407.008-.639.051-.05.01-.122.029-.177.042l-.006.001-.01.003c-.393.095-.645.455-.564.81.082.355.465.57.86.485l.01-.001.013-.004c.055-.012.124-.026.172-.039.228-.06.393-.15.597-.228.44-.158.806-.29 1.161-.341.149-.012.305.091.383.135l.29-.05a8.654 8.654 0 0 0 3.84 4.787l-.12.29c.043.113.091.265.059.376-.13.334-.35.688-.603 1.081-.122.182-.247.324-.357.532-.026.05-.06.126-.086.179-.17.365-.045.786.284.944.33.16.741-.008.919-.375l.001-.001v-.002c.025-.051.061-.12.083-.169.094-.215.125-.4.192-.609.176-.442.273-.905.515-1.194.067-.08.175-.11.287-.14l.151-.273a8.616 8.616 0 0 0 6.145.016l.142.256c.114.037.239.056.34.206.182.31.306.675.457 1.118.066.208.1.393.194.61.021.048.057.117.082.17.177.367.59.535.92.376.33-.158.455-.58.284-.945-.026-.052-.06-.129-.087-.179-.11-.208-.235-.348-.357-.53-.252-.393-.461-.72-.59-1.055-.055-.173.009-.28.05-.392-.025-.029-.079-.192-.11-.268a8.654 8.654 0 0 0 3.838-4.822c.086.014.236.04.285.05.1-.066.192-.152.373-.138.355.052.72.183 1.16.341.205.078.37.17.598.23.048.013.117.025.172.037l.013.004.01.002c.395.085.778-.131.86-.486.08-.355-.171-.715-.564-.81-.057-.013-.138-.035-.193-.045-.232-.044-.42-.033-.64-.051-.465-.049-.85-.089-1.193-.196-.14-.054-.239-.22-.287-.289l-.27-.078a8.572 8.572 0 0 0-.139-3.104 8.599 8.599 0 0 0-1.247-2.88c.068-.062.199-.177.236-.21.01-.12.001-.245.125-.377.262-.246.592-.45.99-.695.19-.11.364-.182.554-.322.043-.032.101-.082.146-.118.32-.255.393-.693.164-.98-.23-.287-.674-.314-.993-.06-.046.036-.107.083-.148.118-.179.153-.29.305-.44.464-.328.333-.6.611-.898.812-.129.075-.318.049-.404.044l-.253.18a8.732 8.732 0 0 0-5.528-2.666 16.036 16.036 0 0 1-.015-.297c-.087-.083-.192-.154-.218-.333-.029-.357.02-.742.076-1.206.03-.216.082-.396.09-.632.003-.053 0-.13 0-.189 0-.408-.299-.738-.667-.738zm-.834 5.156l-.198 3.488-.014.007a.587.587 0 0 1-.932.449l-.006.002-2.864-2.027a6.862 6.862 0 0 1 4.014-1.919zm1.668 0a6.922 6.922 0 0 1 3.99 1.92l-2.846 2.015-.01-.004a.588.588 0 0 1-.933-.448l-.003-.001-.198-3.482zm-6.72 3.222l2.614 2.335-.003.014a.585.585 0 0 1-.23 1.008l-.003.01-3.352.967a6.838 6.838 0 0 1 .973-4.334zm11.753.001c.388.63.683 1.331.858 2.093a6.91 6.91 0 0 1 .145 2.229l-3.37-.97-.002-.013a.586.586 0 0 1-.23-1.008l-.002-.007 2.6-2.324zm-6.404 2.515h1.071l.666.83-.239 1.038-.962.461-.964-.463-.24-1.037.668-.83zm3.435 2.844a.585.585 0 0 1 .135.01l.005-.008 3.468.586a6.858 6.858 0 0 1-2.776 3.481l-1.346-3.246.004-.005a.586.586 0 0 1 .51-.818zm-5.824.014a.587.587 0 0 1 .53.817l.01.012-1.331 3.214a6.886 6.886 0 0 1-2.767-3.458l3.437-.582.006.007a.595.595 0 0 1 .115-.01zm2.904 1.407a.582.582 0 0 1 .275.059.583.583 0 0 1 .263.25h.013l1.694 3.057c-.22.073-.446.136-.677.189a6.896 6.896 0 0 1-3.758-.194l1.69-3.05h.003a.588.588 0 0 1 .497-.31z',
      fill: '#326CE5'
    })
  );
};

logoKubernetes.defaultProps = {
  width: '32',
  height: '32',
  xmlns: 'http://www.w3.org/2000/svg'
};

var logoLogstash = function logoLogstash(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#FDD10D',
        d: 'M6.966.412h-4.67v17.126h14.012V9.754A9.55 9.55 0 0 0 6.966.412z'
      }),
      _react2.default.createElement('path', {
        fill: '#231F20',
        d: 'M2.295 19.49c0 6.768 7.231 12.067 14.013 12.067V17.538H2.295v1.951z'
      }),
      _react2.default.createElement('path', {
        fill: '#20BBB1',
        d: 'M19.422 17.538h9.342V31.55h-9.342z'
      }),
      _react2.default.createElement('path', {
        fill: '#009B90',
        d: 'M16.308 17.538h3.114V31.55h-3.114z'
      })
    )
  );
};

logoLogstash.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoMySQL = function logoMySQL(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: '#00546B'
      },
      _react2.default.createElement('path', {
        d: 'M29.456 24.276c-1.74-.043-3.088.131-4.219.61-.326.13-.848.13-.892.543.174.174.196.457.348.696.261.435.718 1.022 1.131 1.327.457.348.914.696 1.392 1 .848.522 1.805.827 2.631 1.349.48.304.957.695 1.436 1.022.24.173.391.456.696.565v-.065c-.153-.196-.196-.479-.348-.696-.218-.218-.435-.413-.653-.63a10.316 10.316 0 0 0-2.261-2.197c-.696-.479-2.219-1.131-2.501-1.936l-.044-.043c.479-.044 1.044-.218 1.5-.348.74-.196 1.414-.153 2.175-.348.348-.087.696-.196 1.044-.305v-.195c-.391-.392-.674-.914-1.087-1.284-1.11-.957-2.327-1.892-3.588-2.674-.675-.435-1.545-.718-2.262-1.088-.261-.13-.696-.196-.848-.413-.392-.479-.61-1.11-.892-1.675a54.922 54.922 0 0 1-1.783-3.784c-.392-.848-.63-1.696-1.11-2.479-2.24-3.697-4.675-5.937-8.416-8.134-.804-.456-1.761-.652-2.783-.891-.544-.022-1.088-.065-1.631-.087-.348-.152-.696-.566-1-.761-1.24-.783-4.437-2.48-5.35-.24-.588 1.414.87 2.806 1.37 3.524.37.5.848 1.065 1.109 1.63.152.37.195.762.347 1.153.348.957.675 2.023 1.131 2.914.24.457.5.936.805 1.349.174.239.478.348.544.74-.305.434-.327 1.087-.5 1.63-.783 2.458-.479 5.502.63 7.307.348.544 1.175 1.74 2.284 1.284.978-.392.76-1.632 1.043-2.719.066-.261.022-.435.153-.609v.044c.304.609.609 1.196.891 1.805.675 1.065 1.849 2.174 2.828 2.914.522.391.935 1.065 1.587 1.305v-.066h-.043c-.13-.195-.327-.282-.5-.435-.392-.39-.827-.87-1.131-1.304-.914-1.218-1.719-2.567-2.436-3.958-.348-.675-.653-1.414-.935-2.088-.13-.261-.13-.653-.348-.783-.327.478-.805.892-1.044 1.479-.413.935-.457 2.088-.61 3.284-.086.021-.043 0-.086.043-.696-.174-.935-.891-1.196-1.5-.653-1.545-.761-4.024-.196-5.807.152-.457.805-1.892.544-2.327-.13-.413-.566-.652-.805-.979a8.764 8.764 0 0 1-.783-1.392c-.522-1.217-.783-2.566-1.348-3.784-.261-.565-.718-1.152-1.087-1.674-.414-.587-.87-1-1.197-1.697-.108-.239-.26-.63-.087-.891.044-.174.13-.24.305-.283.283-.24 1.087.065 1.37.196.805.326 1.479.63 2.153 1.087.304.218.63.631 1.022.74h.457c.696.152 1.479.043 2.131.239 1.153.37 2.196.913 3.132 1.5a19.294 19.294 0 0 1 6.785 7.438c.261.5.37.957.609 1.479.457 1.066 1.022 2.153 1.479 3.197.456 1.022.891 2.066 1.544 2.914.326.457 1.63.696 2.218.935.435.196 1.11.37 1.5.61.74.456 1.48.978 2.175 1.478.348.26 1.436.805 1.501 1.24z'
      }),
      _react2.default.createElement('path', {
        d: 'M7.273 5.378c-.37 0-.63.043-.891.109v.043h.043c.174.348.479.587.696.892.174.348.326.696.5 1.044l.044-.044c.304-.217.457-.565.457-1.087-.131-.152-.153-.305-.261-.457-.13-.218-.414-.326-.588-.5z'
      })
    )
  );
};

logoMySQL.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoNginx = function logoNginx(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#119639',
        d: 'M16 0l13.856 8v16L16 32 2.144 24V8z'
      }),
      _react2.default.createElement('path', {
        fill: '#FFF',
        fillRule: 'nonzero',
        d: 'M11.17 13.512v8.376a1.607 1.607 0 1 1-3.215 0V9.632c0-1.432 1.731-2.149 2.744-1.136l9.51 9.512V9.632a1.607 1.607 0 0 1 3.215 0v12.256c0 1.432-1.731 2.149-2.744 1.136l-9.51-9.512z'
      })
    )
  );
};

logoNginx.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoRedis = function logoRedis(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        transform: 'translate(0 3)',
        fill: 'none'
      },
      _react2.default.createElement('path', {
        d: 'M30.594 20.791c-1.689.875-10.438 4.451-12.3 5.416-1.863.966-2.898.956-4.37.257-1.471-.699-10.782-4.437-12.46-5.234-.838-.399-1.278-.735-1.278-1.052v-3.18s12.121-2.623 14.078-3.32c1.957-.699 2.636-.724 4.301-.118 1.666.607 11.623 2.393 13.27 2.992l-.001 3.135c0 .314-.38.659-1.24 1.104z',
        fill: '#A41E11'
      }),
      _react2.default.createElement('path', {
        d: 'M30.594 17.61c-1.689.875-10.438 4.451-12.3 5.417-1.863.965-2.898.956-4.37.256-1.471-.698-10.782-4.438-12.46-5.234-1.676-.797-1.712-1.345-.064-1.987 1.647-.641 10.907-4.252 12.864-4.95 1.957-.698 2.636-.723 4.301-.117 1.666.607 10.363 4.048 12.009 4.647 1.646.6 1.71 1.093.02 1.968z',
        fill: '#D82C20'
      }),
      _react2.default.createElement('path', {
        d: 'M30.594 15.606c-1.689.875-10.438 4.45-12.3 5.416-1.863.965-2.898.956-4.37.257-1.471-.7-10.782-4.438-12.46-5.235-.838-.398-1.278-.734-1.278-1.051v-3.18S12.307 9.19 14.264 8.492c1.957-.698 2.636-.723 4.301-.117 1.666.606 11.623 2.392 13.27 2.991l-.001 3.135c0 .315-.38.66-1.24 1.105z',
        fill: '#A41E11'
      }),
      _react2.default.createElement('path', {
        d: 'M30.594 12.425c-1.689.875-10.438 4.45-12.3 5.416-1.863.966-2.898.956-4.37.257-1.471-.699-10.782-4.438-12.46-5.235-1.676-.796-1.712-1.345-.064-1.986 1.647-.641 10.907-4.253 12.864-4.95 1.957-.698 2.636-.724 4.301-.117 1.666.606 10.363 4.047 12.009 4.646 1.646.6 1.71 1.094.02 1.969z',
        fill: '#D82C20'
      }),
      _react2.default.createElement('path', {
        d: 'M30.594 10.228c-1.689.875-10.438 4.451-12.3 5.417-1.863.965-2.898.955-4.37.256-1.471-.699-10.782-4.438-12.46-5.234C.627 10.268.187 9.932.187 9.615v-3.18s12.121-2.623 14.078-3.32c1.957-.699 2.636-.724 4.301-.117 1.666.606 11.623 2.391 13.27 2.99l-.001 3.136c0 .314-.38.659-1.24 1.104z',
        fill: '#A41E11'
      }),
      _react2.default.createElement('path', {
        d: 'M30.594 7.047c-1.689.875-10.438 4.451-12.3 5.417-1.863.965-2.898.955-4.37.256-1.471-.699-10.782-4.437-12.46-5.234C-.211 6.689-.247 6.14 1.4 5.499S12.307 1.247 14.264.55c1.957-.7 2.636-.724 4.301-.118 1.666.607 10.363 4.048 12.009 4.647 1.646.6 1.71 1.093.02 1.968z',
        fill: '#D82C20'
      }),
      _react2.default.createElement('path', {
        fill: '#FFF',
        d: 'M20.157 3.985l-2.742.283-.614 1.468-.992-1.638-3.166-.283 2.362-.847-.708-1.3 2.212.86 2.085-.68-.563 1.345zm-3.52 7.123l-5.118-2.11 7.334-1.119z'
      }),
      _react2.default.createElement('ellipse', {
        fill: '#FFF',
        cx: '9.541',
        cy: '6.311',
        rx: '3.92',
        ry: '1.51'
      }),
      _react2.default.createElement('path', {
        fill: '#7A0C00',
        d: 'M23.398 4.386l4.34 1.705-4.336 1.703z'
      }),
      _react2.default.createElement('path', {
        fill: '#AD2115',
        d: 'M18.596 6.274l4.802-1.888.004 3.408-.471.183z'
      })
    )
  );
};

logoRedis.defaultProps = {
  width: '32',
  height: '32',
  xmlns: 'http://www.w3.org/2000/svg'
};

var logoSketch = function logoSketch(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#FFAE00',
        d: 'M16 32L0 11.454l6.931-10.38L16 0l9.069 1.074L32 11.454z'
      }),
      _react2.default.createElement('path', {
        fill: '#EC6C00',
        d: 'M16 32L0 11.454h32z'
      }),
      _react2.default.createElement('path', {
        fill: '#FFAE00',
        d: 'M16 32L6.477 11.454h19.045z'
      }),
      _react2.default.createElement('path', {
        fill: '#FFEFB4',
        d: 'M16 0L6.477 11.454h19.045z'
      }),
      _react2.default.createElement('path', {
        fill: '#FFAE00',
        d: 'M6.932 1.074L3.369 6.3.001 11.454h6.542zM25.069 1.074L28.632 6.3 32 11.454h-6.542z'
      }),
      _react2.default.createElement('path', {
        fill: '#FED305',
        d: 'M6.931 1.074l-.453 10.38L16 0zM25.069 1.074l.453 10.38L16 0z'
      })
    )
  );
};

logoSketch.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoSlack = function logoSlack(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: '#2D333A'
      },
      _react2.default.createElement('path', {
        d: 'M13.271 14.61l4.239-1.42 1.37 4.094-4.238 1.42z'
      }),
      _react2.default.createElement('path', {
        d: 'M13.271 14.61l4.239-1.42 1.37 4.094-4.238 1.42z'
      }),
      _react2.default.createElement('path', {
        d: 'M30.629 11.556c-3.277-10.921-8-13.46-18.921-10.185-10.92 3.277-13.46 8-10.184 18.921 3.276 10.92 8 13.46 18.92 10.184 10.921-3.276 13.46-8 10.185-18.92zm-5.512 7.085l-2.057.686.711 2.133c.28.864-.177 1.803-1.04 2.083-.179.05-.382.101-.56.076a1.695 1.695 0 0 1-1.523-1.117l-.711-2.134-4.242 1.422.711 2.134c.28.863-.177 1.803-1.04 2.082-.179.051-.382.102-.56.077a1.695 1.695 0 0 1-1.523-1.118l-.712-2.133-2.057.685c-.177.051-.38.102-.558.077a1.695 1.695 0 0 1-1.524-1.118c-.28-.863.178-1.803 1.041-2.082l2.057-.686-1.371-4.089-2.057.686c-.178.05-.381.101-.56.076a1.695 1.695 0 0 1-1.523-1.118c-.28-.863.178-1.803 1.041-2.082l2.057-.686-.71-2.133c-.28-.864.177-1.803 1.04-2.083.864-.279 1.804.178 2.083 1.042l.711 2.133 4.242-1.422-.712-2.134c-.279-.863.178-1.803 1.042-2.082.863-.28 1.803.178 2.082 1.041l.711 2.133 2.057-.685c.864-.28 1.804.178 2.083 1.041.28.864-.178 1.803-1.041 2.083l-2.057.685 1.371 4.09 2.057-.687c.864-.279 1.803.178 2.083 1.042.28.863-.178 1.803-1.042 2.082z'
      })
    )
  );
};

logoSlack.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoWebhook = function logoWebhook(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#C73A63',
        d: 'M14.943 13.563c-1.327 2.23-2.597 4.388-3.894 6.531-.334.55-.498.998-.232 1.698.734 1.931-.302 3.811-2.25 4.321-1.837.482-3.627-.726-3.992-2.692-.323-1.741 1.028-3.448 2.948-3.72.16-.023.325-.026.595-.046l2.92-4.896C9.2 12.933 8.108 10.8 8.35 8.154c.171-1.87.907-3.486 2.25-4.81a7.639 7.639 0 0 1 9.531-1c2.91 1.87 4.244 5.512 3.107 8.629l-2.668-.724c.357-1.733.093-3.29-1.076-4.623-.772-.88-1.763-1.341-2.89-1.511-2.258-.341-4.476 1.11-5.134 3.327-.748 2.516.383 4.572 3.473 6.121z'
      }),
      _react2.default.createElement('path', {
        fill: '#4B4B4B',
        d: 'M18.73 10.926l2.823 4.98c4.753-1.47 8.336 1.16 9.622 3.977 1.552 3.402.491 7.432-2.558 9.531-3.13 2.155-7.089 1.787-9.862-.981l2.176-1.821c2.739 1.774 5.135 1.69 6.913-.41a4.766 4.766 0 0 0-.077-6.219c-1.8-2.025-4.213-2.086-7.13-.143-1.209-2.146-2.44-4.275-3.61-6.436-.396-.729-.832-1.152-1.722-1.306-1.487-.257-2.446-1.534-2.504-2.964a3.258 3.258 0 0 1 2.08-3.192 3.243 3.243 0 0 1 3.671 1.002c.71.896.935 1.905.562 3.01-.104.309-.238.607-.384.972z'
      }),
      _react2.default.createElement('path', {
        fill: '#4A4A4A',
        d: 'M20.963 24.401h-5.72c-.55 2.256-1.734 4.077-3.775 5.235-1.586.9-3.296 1.205-5.116.911C3 30.007.26 26.99.019 23.593c-.273-3.848 2.372-7.268 5.898-8.036l.732 2.658c-3.234 1.65-4.353 3.73-3.448 6.33.797 2.287 3.06 3.541 5.518 3.056 2.51-.495 3.776-2.581 3.621-5.929 2.38 0 4.761-.024 7.14.012.93.015 1.648-.081 2.348-.9 1.152-1.349 3.273-1.227 4.515.046 1.268 1.301 1.207 3.395-.135 4.641a3.236 3.236 0 0 1-4.553-.157c-.249-.267-.445-.585-.692-.913z'
      })
    )
  );
};

logoWebhook.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logoXpack = function logoXpack(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#FDD10D',
        d: 'M27.309 3.136l1.055 1.055a4.503 4.503 0 0 1 .008 6.36l-6.182 6.182-7.274-7.273 6.32-6.32a4.297 4.297 0 0 1 6.077 0l-.004-.004z'
      }),
      _react2.default.createElement('path', {
        fill: '#0479A1',
        d: 'M7.634 16.731l-6.24 6.235a4.411 4.411 0 0 0 0 6.24l1.04 1.04a4.411 4.411 0 0 0 6.24 0L14.91 24l-7.275-7.269z'
      }),
      _react2.default.createElement('path', {
        fill: '#17A8E0',
        d: 'M21.143 15.691L8.674 3.211a4.411 4.411 0 0 0-6.24 0l-1.04 1.04a4.411 4.411 0 0 0 0 6.24l6.24 6.24 1.04-1.04a8.823 8.823 0 0 1 12.469 0z'
      }),
      _react2.default.createElement('path', {
        fill: '#353535',
        d: 'M21.143 15.691a8.823 8.823 0 0 0-12.474 0l-1.04 1.04L14.909 24l7.28-7.269-1.046-1.04z'
      }),
      _react2.default.createElement('path', {
        fill: '#20BBB1',
        d: 'M28.429 22.966l-4.16-4.16-7.28 7.28 4.154 4.16a4.411 4.411 0 0 0 6.24 0l1.04-1.04a4.411 4.411 0 0 0 .006-6.24z'
      }),
      _react2.default.createElement('path', {
        fill: '#009B8F',
        d: 'M14.913 24.007l7.277-7.277 2.08 2.08-7.276 7.278z'
      })
    )
  );
};

logoXpack.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var logstashFilter = function logstashFilter(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M7.914 1c-3.6 0-5.897 1.111-5.897 1.876 0 .766 2.297 1.877 5.897 1.877s5.897-1.111 5.897-1.877C13.811 2.111 11.514 1 7.914 1m3.98 7.988c-1.187.331-2.601.502-3.98.502-1.383 0-2.801-.172-3.991-.505l2.863 3.242v2.515c.136.08.515.214 1.128.214.61 0 .989-.133 1.126-.213v-2.515l2.854-3.24zm2.394-1.206l-4.248 4.823v2.246h.004c0 .763-1.069 1.105-2.13 1.105-1.06 0-2.13-.342-2.13-1.105h.002v-2.245L1.321 7.55l.01-.008A1.53 1.53 0 0 1 1 6.607V2.78h.02C1.14.973 4.627 0 7.913 0c3.286 0 6.774.973 6.894 2.78h.02v3.827c0 .343-.12.657-.335.941l-.003.004c-.06.079-.128.155-.202.23zm-.578-.856a.56.56 0 0 0 .118-.319V4.411c-1.288.879-3.649 1.342-5.914 1.342C5.65 5.753 3.288 5.29 2 4.411v2.196C2 7.375 4.304 8.49 7.914 8.49c2.879 0 4.927-.709 5.639-1.385l.157-.18z'
    })
  );
};

logstashFilter.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var logstashIf = function logstashIf(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M6.918 9.799l-4.82 4.819 2.88-.43.148.987L0 15.943l.768-5.126.988.148-.453 3.033 4.936-4.935a2.003 2.003 0 0 1 1.265-2.885V0h1v6.178a2.003 2.003 0 0 1 1.263 2.884l4.865 4.866-.443-2.963.988-.147.768 5.126-5.127-.769.15-.988 2.95.441-4.83-4.83c-.312.203-.685.32-1.085.32-.4 0-.773-.117-1.085-.32z'
    })
  );
};

logstashIf.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var logstashInput = function logstashInput(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M1.747 10.992h13.1a.123.123 0 0 0 .122-.123V8.51a.122.122 0 0 0-.122-.122H1.122A.122.122 0 0 0 1 8.51v2.36c0 .066.055.122.122.122h.625zm12.011 1H2.21V16h-1v-4.008h-.088A1.124 1.124 0 0 1 0 10.87V8.51c0-.62.503-1.122 1.122-1.122h13.725c.62 0 1.122.502 1.122 1.122v2.36c0 .618-.503 1.122-1.122 1.122h-.089V16h-1v-4.008zm-6.27-7.487V0h1v4.529l2.407-2.262.685.73L8 6.356 4.42 2.995l.685-.729 2.383 2.24z'
    })
  );
};

logstashInput.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var logstashOutput = function logstashOutput(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M2.21 4.008H13.76V0h1v4.008h.088c.619 0 1.122.504 1.122 1.123V7.49c0 .62-.503 1.122-1.122 1.122H1.122A1.122 1.122 0 0 1 0 7.49V5.13c0-.618.503-1.122 1.122-1.122h.089V0h1v4.008zm11.549 1H1.12A.123.123 0 0 0 1 5.13V7.49c0 .068.055.122.122.122h13.725a.122.122 0 0 0 .122-.122V5.13a.123.123 0 0 0-.122-.122h-1.088zm-5.301 9.097l2.405-2.26.686.728-3.58 3.363-3.58-3.363.686-.728 2.383 2.24V9.577h1v4.528z'
    })
  );
};

logstashOutput.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var logstashQueue = function logstashQueue(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M11.339 15.464H4.77a3.248 3.248 0 0 1-3.245-3.244V4.549H0v-1h2.526v8.67a2.247 2.247 0 0 0 2.245 2.245h6.568a2.247 2.247 0 0 0 2.244-2.244V3.549h2.455v1h-1.455v7.67a3.247 3.247 0 0 1-3.244 3.245zm.513-5.962v1.095l-3.848 1.72-3.85-1.72V9.502l3.85 1.72 3.848-1.72zm0-4.251v1.095l-3.848 1.72-3.85-1.72V5.25l3.85 1.72 3.848-1.72zm0-4.251v1.095l-3.848 1.72-3.85-1.72V1l3.85 1.72L11.852 1z'
    })
  );
};

logstashQueue.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var machineLearningApp = function machineLearningApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#00A9E5',
        d: 'M14.5 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0m3-26a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 15a3 3 0 1 0 6 0 3 3 0 0 0-6 0'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        fillRule: 'nonzero',
        d: 'M3 20.886V9.849l9.272-5.563a1.5 1.5 0 0 0-1.543-2.572l-10 6A1.5 1.5 0 0 0 0 9v13.965a1.493 1.493 0 0 0 .335.98c.12.145.254.259.402.346l9.992 5.995a1.5 1.5 0 0 0 1.543-2.572l-7.257-4.355 6.98-2.443A1.5 1.5 0 0 0 13 19.5v-5a1.5 1.5 0 0 0-3 0v3.936l-7 2.45zm26 0V9.849L19.73 4.286a1.5 1.5 0 0 1 1.543-2.572l10 6A1.5 1.5 0 0 1 32 9v13.965a1.493 1.493 0 0 1-.334.98c-.12.145-.254.259-.402.346l-9.992 5.995a1.5 1.5 0 0 1-1.543-2.572l7.257-4.355-6.981-2.443A1.5 1.5 0 0 1 19 19.5v-5a1.5 1.5 0 0 1 3 0v3.936l7 2.45z',
        style: {
          mixBlendMode: 'multiply'
        }
      })
    )
  );
};

machineLearningApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var managementApp = function managementApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M16.074 22.667a6.667 6.667 0 1 1 .001-13.335 6.667 6.667 0 0 1 0 13.335m0-18.667c-6.628 0-12 5.373-12 12 0 6.628 5.372 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M15.976 26.839c.996 0 1.961-.172 2.885-.43a.668.668 0 0 1 .843.772l-.87 4.285a.666.666 0 0 1-.653.534h-4.243a.668.668 0 0 1-.654-.534l-.86-4.24a.666.666 0 0 1 .829-.773c.874.23 1.785.386 2.723.386zm.052-21.605c-1.003 0-1.973.155-2.902.404a.664.664 0 0 1-.83-.77L13.17.534A.665.665 0 0 1 13.823 0h4.242c.317 0 .59.224.654.535l.864 4.284a.666.666 0 0 1-.822.774 11.138 11.138 0 0 0-2.733-.36zM5.16 15.976c0 .996.172 1.961.43 2.885a.669.669 0 0 1-.772.843l-4.285-.87A.667.667 0 0 1 0 18.182v-4.243c0-.317.223-.59.534-.654l4.24-.86c.487-.099.9.348.774.829-.232.874-.387 1.785-.387 2.723zm21.606.052c0-1.003-.156-1.973-.405-2.902a.664.664 0 0 1 .771-.83l4.332.874a.665.665 0 0 1 .535.653v4.242c0 .317-.223.59-.535.654l-4.285.864a.666.666 0 0 1-.773-.822c.221-.878.36-1.792.36-2.733zM8.352 8.318c-.704.705-1.265 1.509-1.736 2.345a.669.669 0 0 1-1.141.05L3.06 7.068a.666.666 0 0 1 .083-.84l3-3a.668.668 0 0 1 .841-.084l3.606 2.39a.666.666 0 0 1-.039 1.132c-.781.455-1.535.99-2.199 1.653zm15.242 15.315a11.188 11.188 0 0 0 1.766-2.339.665.665 0 0 1 1.132-.041l2.445 3.68a.668.668 0 0 1-.084.842l-3 2.999a.666.666 0 0 1-.84.084l-3.64-2.418a.666.666 0 0 1 .033-1.13 11.125 11.125 0 0 0 2.188-1.677zm.087-15.278c-.704-.704-1.508-1.265-2.344-1.736a.668.668 0 0 1-.05-1.142l3.644-2.415a.667.667 0 0 1 .84.084l3 3c.225.225.26.576.085.84l-2.39 3.607a.665.665 0 0 1-1.132-.039c-.455-.782-.99-1.536-1.653-2.199zM8.367 23.596a11.19 11.19 0 0 0 2.338 1.766c.43.248.456.857.042 1.132L7.066 28.94a.667.667 0 0 1-.84-.085l-3-2.999a.667.667 0 0 1-.085-.84l2.42-3.641a.665.665 0 0 1 1.128.034 11.148 11.148 0 0 0 1.678 2.187z'
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        fillRule: 'nonzero',
        d: 'M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12v2a9.71 9.71 0 0 1 10 10 9.71 9.71 0 0 1-10 10A9.71 9.71 0 0 1 6 16 9.71 9.71 0 0 1 16 6'
      })
    )
  );
};

managementApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var mapMarker = function mapMarker(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'map_marker-a',
        d: 'M7.55 1.776a.502.502 0 0 1 .897 0l4 8a.5.5 0 0 1 .053.235c-.004.15-.026.396-.084.705a5.538 5.538 0 0 1-.505 1.512C11.189 13.638 9.906 14.5 8 14.5c-1.906 0-3.19-.862-3.91-2.272a5.538 5.538 0 0 1-.506-1.512 4.672 4.672 0 0 1-.084-.705.5.5 0 0 1 .053-.235l3.997-8zM8 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.493-.895c.009.106.027.253.06.429.079.424.213.848.413 1.238C5.537 12.862 6.487 13.5 8 13.5c1.513 0 2.463-.638 3.02-1.728.2-.39.334-.814.413-1.238.033-.176.051-.323.06-.43L8 3.119l-3.493 6.987z'
      })
    ),
    _react2.default.createElement('use', {
      transform: 'matrix(1 0 0 -1 0 16)',
      xlinkHref: '#map_marker-a'
    })
  );
};

mapMarker.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var merge = function merge(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M7.352 6H2.5a.5.5 0 0 1 0-1h4.852L5.12 2.721c-.18-.183-.155-.46.055-.616a.551.551 0 0 1 .705.048l3 3.062c.16.164.16.405 0 .57l-3 3.062A.532.532 0 0 1 5.5 9a.54.54 0 0 1-.325-.106c-.21-.157-.235-.433-.055-.616L7.352 6zm1.296 4H13.5a.5.5 0 0 1 0 1H8.648l2.232 2.278c.18.183.155.46-.055.617A.54.54 0 0 1 10.5 14a.532.532 0 0 1-.38-.153l-3-3.063a.397.397 0 0 1 0-.568l3-3.063a.551.551 0 0 1 .705-.047c.21.156.235.433.055.616L8.648 10z'
    })
  );
};

merge.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var minusInCircle = function minusInCircle(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M7.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0 1a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm-4-8h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1z'
    })
  );
};

minusInCircle.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var monitoringApp = function monitoringApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#13A7DF',
        d: 'M29.033 5.316c-3.491-3.549-9.193-3.607-12.8-.174-3.666-3.607-9.542-3.607-13.15 0a9.218 9.218 0 0 0 .059 13.09l3.083 3.084h2.91c.465 0 .814-.232.989-.64l1.512-2.792 2.27 6.225c.174.466.64.756 1.047.756.523 0 .93-.29 1.047-.814l3.724-11.171 3.141 7.738c.175.466.64.757 1.048.757h2.152l3.142-3.142c3.608-3.724 3.433-9.251-.174-12.917'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M24.727 18.93l-4.014-9.89a1.193 1.193 0 0 0-1.106-.756c-.465 0-.872.29-1.047.814l-3.665 10.938-2.037-5.469c-.116-.465-.582-.756-.989-.756-.465-.058-.873.174-1.105.64L8.32 18.989H3.782l10.356 10.415.058.058c.35.523.873.756 1.455.873H16.35c.523-.059.93-.233 1.337-.64l10.59-10.648h-3.608c.058 0 .058-.116.058-.116z'
      }),
      _react2.default.createElement('path', {
        fill: '#007D9D',
        d: 'M24.727 18.93l-4.014-9.89a1.193 1.193 0 0 0-1.106-.756c-.465 0-.872.29-1.047.814l-3.665 10.938-2.037-5.469c-.116-.465-.582-.756-.989-.756-.465-.058-.873.174-1.105.64L8.32 18.989H3.84l2.385 2.386h2.91c.465 0 .814-.233.989-.64l1.512-2.793 2.211 6.167c.175.466.64.756 1.048.756.523 0 .93-.29 1.047-.814l3.723-11.171 3.2 7.738c.175.466.64.757 1.048.757h2.152l2.386-2.386h-3.724v-.058z'
      })
    )
  );
};

monitoringApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var node = function node(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fill: '#13252D',
      d: 'M8.5 1.443a1 1 0 0 0-1 0L2.572 4.29a1 1 0 0 0-.5.866v5.69a1 1 0 0 0 .5.866L7.5 14.557a1 1 0 0 0 1 0l4.928-2.846a1 1 0 0 0 .5-.866v-5.69a1 1 0 0 0-.5-.866L8.5 1.443zM9 .577l4.928 2.846a2 2 0 0 1 1 1.732v5.69a2 2 0 0 1-1 1.732L9 15.423a2 2 0 0 1-2 0l-4.928-2.846a2 2 0 0 1-1-1.732v-5.69a2 2 0 0 1 1-1.732L7 .577a2 2 0 0 1 2 0z'
    })
  );
};

node.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var number = function number(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M7.808 10.197H6.796L5.859 13H4.485l.937-2.803H3.966l.219-1.25h1.647l.608-1.805H4.991l.226-1.251h1.64l.95-2.844h1.368l-.95 2.844h1.018l.95-2.844h1.374l-.95 2.844h1.51l-.218 1.25h-1.702l-.608 1.805h1.497l-.219 1.251H9.182L8.252 13H6.878l.93-2.803zm-.602-1.25h1.012l.615-1.805H7.814l-.608 1.804z',
      fillRule: 'evenodd'
    })
  );
};

number.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var pause = function pause(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M4 2h1v12H4V2zm7 0h1v12h-1V2z',
      fillRule: 'evenodd'
    })
  );
};

pause.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var pencil = function pencil(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'pencil-a',
        d: 'M12.148 3.148L11 2l-9 9v3h3l9-9-1.144-1.144-8.002 7.998a.502.502 0 0 1-.708 0 .502.502 0 0 1 0-.708l8.002-7.998zM11 1c.256 0 .512.098.707.293l3 3a.999.999 0 0 1 0 1.414l-9 9A.997.997 0 0 1 5 15H2a1 1 0 0 1-1-1v-3c0-.265.105-.52.293-.707l9-9A.997.997 0 0 1 11 1zM5 14H2v-3l3 3z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#pencil-a'
    })
  );
};

pencil.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var pin = function pin(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M8 11h4.5a.5.5 0 1 0 0-1h-10a.5.5 0 0 0 0 1H7v4.25c0 .414.224.75.5.75s.5-.336.5-.75V11zM4 4h1v6H4V4zm6 0h1v6h-1V4zM4.286 2C4.08 2 4 2.063 4 2v1c0-.063.08 0 .286 0h6.428C10.92 3 11 2.937 11 3V2c0 .063-.08 0-.286 0H4.286zm0-1h6.428C11.424 1 12 1.448 12 2v1c0 .552-.576 1-1.286 1H4.286C3.576 4 3 3.552 3 3V2c0-.552.576-1 1.286-1z'
    })
  );
};

pin.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var pipelineApp = function pipelineApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        transform: 'translate(0 4)'
      },
      _react2.default.createElement('rect', {
        width: '22',
        height: '6',
        x: '5',
        y: '15',
        fill: '#0078A0',
        rx: '1'
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        d: 'M14 8h4v6h-4z'
      }),
      _react2.default.createElement('circle', {
        cx: '16',
        cy: '5',
        r: '2',
        fill: '#0078A0'
      }),
      _react2.default.createElement('path', {
        fill: '#30A9E5',
        d: 'M0 11h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H0V11zm28 0h4v14h-4a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2z'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M23 0h3.5a1.5 1.5 0 0 1 0 3H23V0z'
      }),
      _react2.default.createElement('circle', {
        cx: '16',
        cy: '18',
        r: '6',
        fill: '#00C1B3'
      }),
      _react2.default.createElement('circle', {
        cx: '16',
        cy: '18',
        r: '3',
        fill: '#00BFB3'
      }),
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M13.5 5H20v3h-6.5a1.5 1.5 0 0 1 0-3zM22 0h1v6a2 2 0 0 1-2 2h-1V2a2 2 0 0 1 2-2z'
      })
    )
  );
};

pipelineApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var play = function play(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M10.996 7.382L5.447 3.796c-.585-.378-.902-.205-.902.501v7.493c0 .708.314.881.902.501l5.549-3.586c.614-.397.615-.925 0-1.323zm.543-.84c1.226.793 1.222 2.213 0 3.003l-5.55 3.586c-1.256.812-2.444.155-2.444-1.341V4.297c0-1.498 1.194-2.15 2.445-1.341l5.549 3.586z'
    })
  );
};

play.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var plusInCircle = function plusInCircle(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'plus_in_circle-a',
        d: 'M7 8v3h1V8h3V7H8V4H7v3H4v1h3zm.5-8C11.636 0 15 3.364 15 7.5S11.636 15 7.5 15 0 11.636 0 7.5 3.364 0 7.5 0zm0 .882a6.618 6.618 0 1 0 0 13.236A6.618 6.618 0 0 0 7.5.882z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#plus_in_circle-a'
    })
  );
};

plusInCircle.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var popout = function popout(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M2 14.01h12.49a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.49-.597V1.5a.5.5 0 0 1 1 0v12.51zm11.783-8.523l.07-2.827a.514.514 0 0 0-.545-.544l-2.827.07a.52.52 0 0 1-.545-.545.617.617 0 0 1 .586-.586l2.828-.07a1.552 1.552 0 0 1 1.634 1.633l-.07 2.828a.617.617 0 0 1-.586.586.52.52 0 0 1-.545-.545zm-9.43 6.867a.5.5 0 0 1-.707-.708l8-8a.5.5 0 0 1 .708.708l-8 8z',
      fillRule: 'evenodd'
    })
  );
};

popout.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var questionInCircle = function questionInCircle(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'
    }),
    _react2.default.createElement('path', {
      d: 'M7.086 10.169c.01-.534.077-.955.2-1.264.123-.31.375-.653.755-1.03l.969-.907c.414-.426.621-.883.621-1.372 0-.47-.135-.84-.407-1.106-.27-.267-.665-.4-1.183-.4-.503 0-.908.12-1.214.363-.305.242-.458.567-.458.975H5c.01-.727.295-1.313.855-1.759C6.415 3.223 7.143 3 8.04 3c.932 0 1.658.228 2.178.683.52.455.781 1.079.781 1.872 0 .785-.4 1.558-1.199 2.32l-.806.727c-.36.363-.54.885-.54 1.567H7.086zM7.027 12.3c0-.202.068-.371.204-.508.135-.137.336-.205.603-.205.266 0 .468.068.606.205a.686.686 0 0 1 .207.508.664.664 0 0 1-.207.5c-.138.133-.34.199-.606.199-.267 0-.468-.066-.603-.198a.67.67 0 0 1-.204-.501z'
    })
  );
};

questionInCircle.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var refresh = function refresh(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12.847 1.545A.526.526 0 0 1 13.392 1a.598.598 0 0 1 .575.575l.044 2.802a1.571 1.571 0 0 1-1.634 1.634l-2.802-.044A.598.598 0 0 1 9 5.392a.526.526 0 0 1 .545-.545l2.801.043a.52.52 0 0 0 .544-.544l-.043-2.8zm-1.602 1.218a.5.5 0 0 1-.48.877A5.25 5.25 0 1 0 13.5 8.25a.5.5 0 1 1 1 0 6.25 6.25 0 1 1-3.255-5.487z',
      fillRule: 'evenodd'
    })
  );
};

refresh.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var reportingApp = function reportingApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M25.625 6H6.375C5.615 6 5 6.247 5 6.938v22.499C5 30.127 5.615 31 6.375 31h19.25c.76 0 1.375-.872 1.375-1.563V6.938c0-.69-.615-.938-1.375-.938'
      }),
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M21.6 3.8h-1.4a.7.7 0 0 1-.7-.7v-.7A1.4 1.4 0 0 0 18.1 1h-4.2a1.4 1.4 0 0 0-1.4 1.4v.7a.7.7 0 0 1-.7.7h-1.4A1.4 1.4 0 0 0 9 5.2v1.4A1.4 1.4 0 0 0 10.4 8h11.2A1.4 1.4 0 0 0 23 6.6V5.2a1.4 1.4 0 0 0-1.4-1.4',
        style: {
          mixBlendMode: 'multiply'
        }
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        d: 'M27 29.313V18.807c-.075.044-6.061-2.027-6.128-1.956l-5.328 5.642-1.229 1.302a.89.89 0 0 1-1.312 0l-2.747-2.907a.888.888 0 0 0-1.266-.046L5 24.535v4.777C5 30.058 5.615 31 6.375 31h19.25c.76 0 1.375-.942 1.375-1.688'
      }),
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M25.41 10.59l-5.913 6.262-4.14 4.385-1.345 1.424-1.072 1.135-6.773 7.173a.91.91 0 0 0 .208.03h19.25c.76 0 1.375-.941 1.375-1.686V11.307c0-.892-1-1.341-1.59-.716'
      })
    )
  );
};

reportingApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var savedObjectsApp = function savedObjectsApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M30.64 12.8c-.24 0-.48-.078-.72-.234L16.08 3.434 2.16 12.566c-.56.39-1.36.234-1.76-.312-.32-.547-.24-1.327.4-1.717l14.56-9.6c.4-.313.96-.313 1.36 0l14.64 9.6c.56.39.72 1.17.32 1.717-.24.312-.56.546-1.04.546z'
      }),
      _react2.default.createElement('path', {
        fill: '#3EBEB0',
        d: 'M1.44 11.551l14.64 9.6v9.6l-14.64-9.6z'
      }),
      _react2.default.createElement('path', {
        fill: '#3EBEB0',
        d: 'M16.08 31.922c-.24 0-.48-.078-.72-.234L.8 22.166c-.32-.234-.56-.625-.56-1.015v-9.6c0-.468.24-.858.64-1.092.4-.235.88-.157 1.28.078l14.64 9.6c.32.234.56.624.56 1.014v9.6c0 .469-.24.859-.64 1.093-.24.078-.48.078-.64.078zM2.72 20.527l12.08 7.96v-6.633l-12.08-8.04v6.713z'
      }),
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M30.72 11.551l-14.64 9.6v9.6l14.64-9.6z'
      }),
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M16.08 31.922c-.24 0-.4-.078-.56-.156a1.24 1.24 0 0 1-.64-1.093v-9.522c0-.39.24-.78.56-1.014l14.64-9.6c.4-.235.88-.313 1.28-.078.4.234.64.624.64 1.092v9.6c0 .39-.24.78-.56 1.015l-14.64 9.6c-.24.156-.48.156-.72.156zm1.28-10.146v6.634l12.08-7.961v-6.634l-12.08 7.96zm-1.28-4.84c-.24 0-.48-.077-.72-.234l-5.52-3.59c-.56-.39-.72-1.17-.32-1.717.4-.546 1.2-.702 1.76-.312l4.8 3.2 4.8-3.2c.56-.39 1.36-.234 1.76.312.4.546.24 1.327-.32 1.717l-5.52 3.59c-.24.157-.48.235-.72.235z'
      }),
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M16.08 16.546c-.72 0-1.28-.546-1.28-1.248V7.337c0-.703.56-1.25 1.28-1.25s1.28.547 1.28 1.25v7.96c0 .703-.56 1.25-1.28 1.25z'
      }),
      _react2.default.createElement('path', {
        fill: '#0279A0',
        d: 'M16.08 31.922c-.72 0-1.28-.546-1.28-1.249v-9.522c0-.702.56-1.249 1.28-1.249s1.28.547 1.28 1.25v9.6c0 .624-.56 1.17-1.28 1.17z'
      })
    )
  );
};

savedObjectsApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var scale = function scale(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M11.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm4-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm2-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-2 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm0 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-2 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm2-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm6-6a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-2 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z',
      fillRule: 'evenodd'
    })
  );
};

scale.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var search = function search(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'search-a',
        d: 'M11.271 11.978l3.872 3.873a.502.502 0 0 0 .708 0 .502.502 0 0 0 0-.708l-3.565-3.564c2.38-2.747 2.267-6.923-.342-9.532-2.73-2.73-7.17-2.73-9.898 0-2.728 2.729-2.728 7.17 0 9.9a6.955 6.955 0 0 0 4.949 2.05.5.5 0 0 0 0-1 5.96 5.96 0 0 1-4.242-1.757 6.01 6.01 0 0 1 0-8.486c2.337-2.34 6.143-2.34 8.484 0a6.01 6.01 0 0 1 0 8.486.5.5 0 0 0 .034.738z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#search-a'
    })
  );
};

search.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var searchProfilerApp = function searchProfilerApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#14A7DF',
        d: 'M15.44 4.16c6.24 0 11.28 5.04 11.28 11.28 0 6.24-5.04 11.28-11.28 11.28-6.24 0-11.28-5.04-11.28-11.28C4.16 9.2 9.2 4.16 15.44 4.16m0-4.16C6.88 0 0 6.96 0 15.44 0 24 6.88 30.88 15.44 30.88c8.56 0 15.44-6.88 15.44-15.44C30.88 6.96 24 0 15.44 0'
      }),
      _react2.default.createElement('path', {
        fill: '#3EBEB0',
        d: 'M30.48 32c-.4 0-.8-.16-1.12-.48l-5.6-5.6c-.64-.64-.64-1.6 0-2.16.64-.64 1.6-.64 2.16 0l5.6 5.6c.64.64.64 1.6 0 2.16-.24.32-.64.48-1.04.48zm-9.2-20.08H9.6c-.56 0-1.04-.48-1.04-1.04s.48-1.04 1.04-1.04h11.68c.56 0 1.04.48 1.04 1.04 0 .64-.48 1.04-1.04 1.04zm0 4.56H9.6c-.56 0-1.04-.48-1.04-1.04s.48-1.04 1.04-1.04h11.68c.56 0 1.04.48 1.04 1.04s-.48 1.04-1.04 1.04zm0 4.56H9.6c-.56 0-1.04-.48-1.04-1.04s.48-1.04 1.04-1.04h11.68c.56 0 1.04.48 1.04 1.04s-.48 1.04-1.04 1.04z'
      }),
      _react2.default.createElement('path', {
        fill: '#07A5DE',
        d: 'M11.68 15.44c0 1.2-.96 2.08-2.08 2.08-1.2 0-2.08-.96-2.08-2.08 0-1.2.96-2.08 2.08-2.08s2.08.96 2.08 2.08m5.84-4.56c0 1.2-.96 2.08-2.08 2.08-1.2 0-2.08-.96-2.08-2.08 0-1.2.96-2.08 2.08-2.08s2.08.96 2.08 2.08M23.36 20c0 1.2-.96 2.08-2.08 2.08-1.2 0-2.08-.96-2.08-2.08 0-1.2.96-2.08 2.08-2.08 1.2 0 2.08.88 2.08 2.08'
      })
    )
  );
};

searchProfilerApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var securityApp = function securityApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M28 15v1.76c0 6.245-4.826 11.873-11.608 14.176a1.227 1.227 0 0 1-.784 0C8.831 28.633 4.491 23.006 4 16.759V15h24z'
      }),
      _react2.default.createElement('path', {
        fill: '#00A9E5',
        d: 'M27.998 17l.002-.24V5.43c0-.51-.342-.96-.843-1.112l-10.8-3.265a1.232 1.232 0 0 0-.714 0l-10.8 3.265A1.169 1.169 0 0 0 4 5.43v11.33l.02.24h23.978z',
        style: {
          mixBlendMode: 'multiply'
        }
      })
    )
  );
};

securityApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var shard = function shard(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fill: '#13252D',
      d: 'M5.134 7.031L8 12.764l2.866-5.733L8 2.016 5.134 7.03zM8 0l4 7-4 8-4-8 4-7z'
    })
  );
};

shard.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var share = function share(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M4 6.81v6.38c0 .493.448.9.992.9h7.016c.543 0 .992-.406.992-.9V6.81c0-.493-.448-.9-.992-.9H4.992c-.543 0-.992.406-.992.9zM7 5v.91h3V5h2.008C13.108 5 14 5.818 14 6.81v6.38c0 1-.9 1.81-1.992 1.81H4.992C3.892 15 3 14.182 3 13.19V6.81C3 5.81 3.9 5 4.992 5H7zm1.997-3.552A.506.506 0 0 1 9 1.5v8a.5.5 0 0 1-1 0v-8a.51.51 0 0 1 0-.017L6.18 3.394a.52.52 0 0 1-.77 0 .617.617 0 0 1 0-.829L7.36.515a1.552 1.552 0 0 1 2.31 0l1.95 2.05a.617.617 0 0 1 0 .83.52.52 0 0 1-.77 0L8.997 1.447z'
    })
  );
};

share.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var sortDown = function sortDown(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'sort_down-a',
        d: 'M8.93 4.244l5.061 4.599c.231.21.605.21.836 0 .23-.21.23-.55 0-.76l-5.075-4.61c-.694-.631-1.811-.63-2.504 0l-5.075 4.61c-.23.21-.23.55 0 .76.23.21.605.21.836 0l5.062-4.6A.498.498 0 0 0 8 4.5v8a.5.5 0 1 0 1 0v-8a.498.498 0 0 0-.07-.256z'
      })
    ),
    _react2.default.createElement('use', {
      fillRule: 'nonzero',
      transform: 'rotate(-180 8.5 8)',
      xlinkHref: '#sort_down-a'
    })
  );
};

sortDown.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var sortLeft = function sortLeft(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M4.596 7.25h7.654a.5.5 0 1 1 0 1H4.596l4.497 4.569a.552.552 0 0 1 0 .771.53.53 0 0 1-.76 0l-4.61-4.684a1.65 1.65 0 0 1 0-2.312l4.61-4.684a.53.53 0 0 1 .76 0 .552.552 0 0 1 0 .771L4.596 7.25z'
    })
  );
};

sortLeft.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var sortRight = function sortRight(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M11.404 8.25H3.75a.5.5 0 1 1 0-1h7.654L6.907 2.681a.552.552 0 0 1 0-.771.53.53 0 0 1 .76 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0 .552.552 0 0 1 0-.771l4.497-4.569z'
    })
  );
};

sortRight.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var sortUp = function sortUp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'sort_up-a',
        d: 'M8.93 4.244l5.061 4.599c.231.21.605.21.836 0 .23-.21.23-.55 0-.76l-5.075-4.61c-.694-.631-1.811-.63-2.504 0l-5.075 4.61c-.23.21-.23.55 0 .76.23.21.605.21.836 0l5.062-4.6A.498.498 0 0 0 8 4.5v8a.5.5 0 1 0 1 0v-8a.498.498 0 0 0-.07-.256z'
      })
    ),
    _react2.default.createElement('use', {
      fillRule: 'nonzero',
      xlinkHref: '#sort_up-a'
    })
  );
};

sortUp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var starEmpty = function starEmpty(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'star_empty-a',
        d: 'M8 0c-.425 0-.85.228-1.056.682L5.17 4.58 1 5.175C.053 5.311-.335 6.476.339 7.157l3.083 3.115-.75 4.358A1.17 1.17 0 0 0 3.818 16c.19 0 .386-.048.572-.154L8 13.79l3.61 2.056c.186.106.382.154.572.154a1.17 1.17 0 0 0 1.146-1.37l-.75-4.358 3.083-3.115c.674-.68.286-1.846-.661-1.982l-4.17-.595L9.056.682A1.146 1.146 0 0 0 8 0m0 1c.102 0 .133.068.146.097l1.773 3.897.227.498.542.077 4.17.596a.151.151 0 0 1 .132.112.162.162 0 0 1-.04.176L11.867 9.57l-.362.366.088.506.749 4.358c.01.056 0 .098-.032.136a.178.178 0 0 1-.128.065.149.149 0 0 1-.077-.023l-3.61-2.056L8 12.64l-.495.282-3.611 2.056a.144.144 0 0 1-.076.023.178.178 0 0 1-.128-.065c-.032-.038-.042-.08-.033-.136l.75-4.358.088-.506-.362-.366L1.05 6.453a.162.162 0 0 1-.04-.176.152.152 0 0 1 .131-.112l4.171-.596.542-.077.227-.498 1.774-3.9C7.867 1.068 7.898 1 8 1'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#star_empty-a'
    })
  );
};

starEmpty.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var starPlusFilled = function starPlusFilled(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M13 10h2v1h-2v2h-1v-2h-2v-1h2V8h1v2zM6 3c.265 0 .531.143.66.426l1.109 2.437 2.606.37a.732.732 0 0 1 .413 1.24L8.86 9.42l.47 2.724a.73.73 0 0 1-.717.857.719.719 0 0 1-.358-.097L6 11.62l-2.256 1.285a.719.719 0 0 1-.358.097.73.73 0 0 1-.716-.857l.469-2.724-1.927-1.947a.732.732 0 0 1 .413-1.24l2.606-.37L5.34 3.426A.717.717 0 0 1 6 3z',
      fillRule: 'evenodd'
    })
  );
};

starPlusFilled.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var stats = function stats(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fill: '#3F3F3F',
      fillRule: 'evenodd',
      d: 'M8 14v-4h1v4h5V5h1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2h1v2h6zm4.853-10.146l-2.999 3a1.5 1.5 0 0 1-2.538 1.568l-2.714.904L4 9.527a1.5 1.5 0 1 1-.316-.948L7 7.473a1.5 1.5 0 0 1 2.146-1.327l3-3a1.5 1.5 0 1 1 .707.707z'
    })
  );
};

stats.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var stop = function stop(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M4 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z',
      fillRule: 'evenodd'
    })
  );
};

stop.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var stopFilled = function stopFilled(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('rect', {
      width: '12',
      height: '12',
      x: '2',
      y: '2',
      rx: '2',
      fillRule: 'evenodd'
    })
  );
};

stopFilled.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var string = function string(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M9.297 3L8.93 5.102h1.351l-.32 1.828H8.609l-.656 3.883c-.036.265-.02.466.05.601.071.135.247.208.528.219.11.005.334-.008.672-.04L9.016 13.5a4.16 4.16 0 0 1-1.383.195c-.797-.01-1.393-.244-1.79-.703-.395-.458-.557-1.08-.484-1.867l.688-4.195H5l.313-1.828h1.046L6.727 3h2.57z'
    })
  );
};

string.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var tableOfContents = function tableOfContents(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M1 1v14h14V1H1zM0 0h16v16H0V0zm9 1v14h1V1H9zM3 3.5h4v-1H3v1zm0 3h4v-1H3v1zm0 3h4v-1H3v1z'
    })
  );
};

tableOfContents.defaultProps = {
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
  xmlns: 'http://www.w3.org/2000/svg'
};

var tear = function tear(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'tear-a',
        d: 'M7.553 1.776a.5.5 0 0 1 .894 0l4 8a.5.5 0 0 1 .053.235c-.004.15-.026.396-.084.705a5.538 5.538 0 0 1-.505 1.512C11.189 13.638 9.906 14.5 8 14.5c-1.906 0-3.19-.862-3.91-2.272a5.538 5.538 0 0 1-.506-1.512 4.672 4.672 0 0 1-.084-.705.5.5 0 0 1 .053-.235l4-8zm-3.046 8.329c.009.106.027.253.06.429.079.424.213.848.413 1.238C5.537 12.862 6.487 13.5 8 13.5c1.513 0 2.463-.638 3.02-1.728.2-.39.334-.814.413-1.238.033-.176.051-.323.06-.43L8 3.119l-3.493 6.987z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#tear-a'
    })
  );
};

tear.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var timelionApp = function timelionApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M17 24.58v5.382c-1.094.082-2.092.033-3.352-.158-.96-.145-1.422-.289-2.117-.66a6.153 6.153 0 0 1-1.637-1.271c-.347-.375-.408-.42-.821-.582-3.667-1.436-6.297-4.153-7.21-7.45-.305-1.108-.395-1.81-.397-3.068 0-1.473.146-2.47.574-3.911l.155-.522-.228-.472c-.451-.936-.813-2.26-.93-3.406A8.852 8.852 0 0 1 1 7.59c0-.609.04-1.283.111-1.691.043-.243.14-.674.214-.959l.138-.516.423-.22c.994-.515 2.562-.779 4.303-.724.993.032 1.77.13 2.424.313l.433.122.312-.179c1.31-.742 3.04-1.352 4.493-1.587 1.01-.163 2.08-.19 3.149-.091v8.824c-1.452-.253-3.338-.008-3.986.687-.204.22-.257.412-.223.824.06.758.83 1.674 1.855 2.208.682.357 1.093.426 1.643.281a3.6 3.6 0 0 0 .711-.295v3.36c-.444-.152-.88-.24-1.226-.24-.698 0-1.787.427-2.694 1.056-1.636 1.14-2.556 2.782-2.234 3.99.167.627.875 1.145 2.044 1.495 1.097.33 2.708.469 3.995.343.039-.004.077-.007.115-.012zM7.432 8.207c-.574 1.39.793 2.795 2.139 2.194.137-.06.36-.228.494-.371.262-.281.486-.784.392-.88-.056-.06-1.066-1.566-2.855-1.253-.022.004-.099.138-.17.31z'
      }),
      _react2.default.createElement('path', {
        fill: '#00A9E5',
        d: 'M15 24.605c.643.046 1.298.043 1.885-.014 2.037-.198 3.445-.824 3.817-1.694.206-.486.172-1.191-.091-1.814-.378-.898-1.43-1.99-2.55-2.652-.73-.431-1.66-.725-2.287-.725-.224 0-.488.044-.774.125v-3.06c.485.206.84.23 1.29.111.444-.116 1.147-.502 1.54-.843 1.089-.948 1.333-2.054.577-2.627-.706-.538-2.156-.722-3.407-.582V2.023a13.472 13.472 0 0 1 5.524.847c.268.104.876.385 1.349.624l.857.437.468-.126c2.147-.581 5.318-.389 6.856.416l.332.175.11.376c.655 2.285.436 4.856-.604 7.068-.163.348-.295.657-.295.687 0 .029.078.324.173.653.23.794.41 1.83.484 2.777a11.407 11.407 0 0 1-.511 4.262c-1.023 3.1-3.423 5.557-6.798 6.957-.483.198-.517.225-1.016.746-.73.766-1.612 1.346-2.485 1.638-.372.123-1.252.284-1.962.358-.86.091-1.635.107-2.482.043v-5.356zm7.819-14.242c.535-.263.919-.875.919-1.462 0-.29-.155-.84-.264-.934-.122-.106-1.873-.272-2.926 1.265-.106.153.285.709.485.884.55.482 1.142.564 1.786.247z',
        style: {
          mixBlendMode: 'multiply'
        }
      })
    )
  );
};

timelionApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var trash = function trash(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', {
        id: 'trash-a',
        d: 'M11 3h5v1H0V3h5V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2zm-7.056 8H7v1H4.1l.392 2.519c.042.269.254.458.493.458h6.03c.239 0 .451-.189.493-.458l1.498-9.576H14l-1.504 9.73c-.116.747-.74 1.304-1.481 1.304h-6.03c-.741 0-1.365-.557-1.481-1.304l-1.511-9.73H9V5.95H3.157L3.476 8H8v1H3.632l.312 2zM6 3h4V1H6v2z'
      })
    ),
    _react2.default.createElement('use', {
      xlinkHref: '#trash-a'
    })
  );
};

trash.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var upgradeAssistantApp = function upgradeAssistantApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#07A5DE',
        d: 'M27.68 20.04c-.64-.32-1.44-.08-1.76.56-2.16 4-6.48 6.32-10.96 5.92-4.8-.48-8.72-3.92-9.84-8.48h1.6c.64 0 .96-.8.56-1.2l-2.96-3.2c-.32-.32-.8-.32-1.04 0l-2.96 3.2c-.4.48-.08 1.2.56 1.2H2.4c1.2 5.92 6.16 10.48 12.24 11.04.48.08.88.08 1.36.08 5.04 0 9.76-2.8 12.24-7.28.32-.72.08-1.52-.56-1.84m3.6-7.6H29.6C28.4 6.6 23.44 2.04 17.28 1.48 11.76.92 6.4 3.8 3.76 8.68c-.32.64-.08 1.44.56 1.76.64.32 1.44.08 1.76-.56 2.16-4 6.48-6.32 10.96-5.92 4.72.48 8.72 3.92 9.84 8.4h-1.6c-.64 0-.96.8-.56 1.2l2.96 3.2c.32.32.8.32 1.04 0l2.96-3.2c.56-.32.24-1.12-.4-1.12'
      }),
      _react2.default.createElement('path', {
        fill: '#3EBEB0',
        d: 'M16.16 10.52c-2.64 0-4.8 2.16-4.8 4.8 0 2.64 2.16 4.8 4.8 4.8 2.64 0 4.8-2.16 4.8-4.8-.08-2.64-2.16-4.8-4.8-4.8'
      })
    )
  );
};

upgradeAssistantApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var user = function user(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        d: 'M13.689 11.132c1.155 1.222 1.953 2.879 2.183 4.748a1.007 1.007 0 0 1-1 1.12H3.007a1.005 1.005 0 0 1-1-1.12c.23-1.87 1.028-3.526 2.183-4.748.247.228.505.442.782.633-1.038 1.069-1.765 2.55-1.972 4.237L14.872 16c-.204-1.686-.93-3.166-1.966-4.235a7.01 7.01 0 0 0 .783-.633zM8.939 1c1.9 0 3 2 4.38 2.633a2.483 2.483 0 0 1-1.88.867c-.298 0-.579-.06-.844-.157A3.726 3.726 0 0 1 7.69 5.75c-1.395 0-3.75.25-3.245-1.903C5.94 3 6.952 1 8.94 1z'
      }),
      _react2.default.createElement('path', {
        d: 'M8.94 2c2.205 0 4 1.794 4 4s-1.795 4-4 4c-2.207 0-4-1.794-4-4s1.793-4 4-4m0 9A5 5 0 1 0 8.937.999 5 5 0 0 0 8.94 11'
      })
    )
  );
};

user.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '18',
  height: '18',
  viewBox: '0 0 18 18'
};

var usersRolesApp = function usersRolesApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none'
      },
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M6 11.68c-.24 0-.4-.08-.64-.16-.56-.32-.72-1.12-.4-1.68a12.41 12.41 0 0 1 4.32-4.32c.56-.32 1.28-.16 1.68.4.32.56.16 1.28-.4 1.68-1.44.88-2.64 2.08-3.52 3.52-.24.4-.64.56-1.04.56zM10 28c-.24 0-.4-.08-.64-.16-3.92-2.4-6.24-6.56-6.24-11.12 0-.64.56-1.2 1.2-1.2.64 0 1.2.56 1.2 1.2 0 3.76 1.92 7.12 5.12 9.12.56.32.72 1.12.4 1.68-.24.24-.64.48-1.04.48zm6.16 1.68c-.64 0-1.2-.56-1.2-1.2 0-.64.56-1.2 1.2-1.2 3.76 0 7.12-1.92 9.04-5.12.32-.56 1.12-.72 1.68-.4.56.32.72 1.12.4 1.68-2.4 3.92-6.56 6.24-11.12 6.24zM28 17.84c-.64 0-1.2-.56-1.2-1.2 0-3.76-1.92-7.12-5.04-9.04-.56-.32-.72-1.12-.4-1.68.32-.56 1.12-.72 1.68-.4 3.92 2.4 6.24 6.56 6.24 11.12-.08.64-.64 1.2-1.28 1.2z'
      }),
      _react2.default.createElement('circle', {
        cx: '16.16',
        cy: '28.48',
        r: '3.52',
        fill: '#07A5DE'
      }),
      _react2.default.createElement('circle', {
        cx: '4.24',
        cy: '16.64',
        r: '3.52',
        fill: '#07A5DE'
      }),
      _react2.default.createElement('circle', {
        cx: '28',
        cy: '16.64',
        r: '3.52',
        fill: '#07A5DE'
      }),
      _react2.default.createElement('path', {
        fill: '#07A5DE',
        d: 'M16.16 20.4c1.6 0 3.28-.16 4.8-.48.72-.16 1.2-1.04 1.12-2-.56-4.24-2.96-7.36-5.84-7.36s-5.28 3.12-5.84 7.36c-.16.96.32 1.84 1.12 2 1.36.32 2.96.48 4.64.48m3.52-15.6c0-2-1.6-3.52-3.52-3.52-2 0-3.52 1.6-3.52 3.52 0 2 1.6 3.52 3.52 3.52a3.5 3.5 0 0 0 3.52-3.52'
      }),
      _react2.default.createElement('path', {
        fill: '#07A5DE',
        d: 'M16.16 9.52c-2.64 0-4.72-2.16-4.72-4.72 0-2.56 2.16-4.72 4.72-4.72 2.56 0 4.72 2.16 4.72 4.72 0 2.56-2.16 4.72-4.72 4.72zm0-7.04c-1.28 0-2.32 1.04-2.32 2.32 0 1.28 1.04 2.32 2.32 2.32 1.28 0 2.32-1.04 2.32-2.32 0-1.28-1.04-2.32-2.32-2.32z'
      })
    )
  );
};

usersRolesApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var vector = function vector(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M12.5 11V5H11V3.5H5V5H3.5v6H5v1.5h6V11h1.5zm1 0H15v4h-4v-1.5H5V15H1v-4h1.5V5H1V1h4v1.5h6V1h4v4h-1.5v6zM4 4V2H2v2h2zm8 0h2V2h-2v2zM2 14h2v-2H2v2zm10 0h2v-2h-2v2z'
    })
  );
};

vector.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};

var visualizeApp = function visualizeApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('rect', {
        width: '8',
        height: '18',
        x: '1',
        y: '13',
        fill: '#00A9E5',
        rx: '2'
      }),
      _react2.default.createElement('rect', {
        width: '8',
        height: '22',
        x: '23',
        y: '9',
        fill: '#00A9E5',
        rx: '2'
      }),
      _react2.default.createElement('rect', {
        width: '8',
        height: '30',
        x: '12',
        y: '1',
        fill: '#00BFB3',
        rx: '2'
      })
    )
  );
};

visualizeApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var watchesApp = function watchesApp(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd'
      },
      _react2.default.createElement('path', {
        fill: '#00BFB3',
        d: 'M28.407 5.584c-.568-.716-1.536-.788-2.173-.136L22.587 9.17c-.516.528-.561 1.357-.13 1.961A8.374 8.374 0 0 1 24 16a8.385 8.385 0 0 1-1.517 4.831c-.423.6-.379 1.417.127 1.944l3.614 3.762c.638.665 1.614.599 2.187-.125 4.787-6.05 4.785-14.782-.004-20.828M8 16c0-1.821.573-3.503 1.544-4.868.43-.605.385-1.434-.132-1.962L5.768 5.45c-.639-.652-1.61-.582-2.177.137-4.788 6.048-4.788 14.781.001 20.83.57.718 1.54.787 2.177.13L9.4 22.804c.51-.528.556-1.35.13-1.953A8.384 8.384 0 0 1 8 16'
      }),
      _react2.default.createElement('path', {
        fill: '#0078A0',
        d: 'M22.98 23.16l-.37-.385c-.506-.527-.55-1.343-.127-1.944A8.385 8.385 0 0 0 24 16a8.374 8.374 0 0 0-1.544-4.869c-.43-.604-.385-1.433.131-1.961l.358-.366A9.97 9.97 0 0 1 26 16a9.97 9.97 0 0 1-3.02 7.16zm-13.943.018l.363-.374c.51-.528.556-1.35.13-1.953A8.384 8.384 0 0 1 8 16c0-1.822.573-3.504 1.544-4.87.43-.604.385-1.433-.132-1.96l-.358-.366A9.97 9.97 0 0 0 6 16a9.97 9.97 0 0 0 3.037 7.178z'
      }),
      _react2.default.createElement('path', {
        fill: '#00A9E5',
        d: 'M16 21a5 5 0 1 1 0-10 5 5 0 1 1 0 10'
      })
    )
  );
};

watchesApp.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 32 32'
};

var wrench = function wrench(props) {
  return _react2.default.createElement(
    'svg',
    props,
    _react2.default.createElement('path', {
      d: 'M15.18 11.551L11.278 7.65a.377.377 0 0 0-.546 0 .377.377 0 0 0 0 .546l3.902 3.903a1.837 1.837 0 0 1 0 2.575c-.351.351-.82.547-1.288.547-.468 0-.936-.196-1.287-.547L7.18 9.834c1.366-.585 2.381-1.756 2.81-3.2a4.688 4.688 0 0 0 .156-1.639C9.99 2.575 7.961.546 5.541.39 4.722.351 3.941.507 3.2.82c-.078.078-.156.156-.195.312-.04.117 0 .234.117.312l2.732 2.77c.468.469.468 1.21 0 1.679-.469.429-1.25.429-1.678 0L1.444 3.122c-.117-.078-.234-.117-.351-.078a.485.485 0 0 0-.313.234 4.507 4.507 0 0 0-.429 2.146c.04 2.342 1.834 4.371 4.098 4.722.273.04.546.078.82.078.35 0 .74-.039 1.092-.117l5.151 5.113c.508.507 1.132.78 1.834.78.703 0 1.366-.273 1.834-.78a2.59 2.59 0 0 0 0-3.669zM6.322 9.288a3.801 3.801 0 0 1-1.756.078c-1.912-.312-3.395-1.99-3.434-3.942 0-.429.039-.858.156-1.287l2.341 2.302c.39.39.859.585 1.405.585S6.05 6.83 6.44 6.44c.78-.78.78-2.03 0-2.81L4.098 1.327c.429-.117.936-.156 1.404-.156 2.03.117 3.747 1.795 3.864 3.863.039.468 0 .937-.156 1.366A4.18 4.18 0 0 1 6.36 9.249c0 .039 0 .039-.039.039z'
    }),
    _react2.default.createElement('path', {
      d: 'M12.722 13.932a1.15 1.15 0 0 1-1.17-1.171c0-.663.507-1.17 1.17-1.17.663 0 1.17.507 1.17 1.17 0 .624-.507 1.17-1.17 1.17z'
    })
  );
};

wrench.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16'
};


var typeToIconMap = {
  addDataApp: addDataApp,
  advancedSettingsApp: advancedSettingsApp,
  alert: alert,
  apmApp: apmApp,
  apps: apps,
  arrowDown: arrowDown,
  arrowLeft: arrowLeft,
  arrowRight: arrowRight,
  arrowUp: arrowUp,
  asterisk: asterisk,
  bolt: bolt,
  boxesHorizontal: boxesHorizontal,
  boxesVertical: boxesVertical,
  broom: broom,
  brush: brush,
  bullseye: bullseye,
  calendar: calendar,
  check: check,
  checkInCircleFilled: checkInCircleFilled,
  clock: clock,
  console: console,
  consoleApp: consoleApp,
  controlsHorizontal: controlsHorizontal,
  controlsVertical: controlsVertical,
  copy: copy,
  copyClipboard: copyClipboard,
  createAdvancedJob: createAdvancedJob,
  createMultiMetricJob: createMultiMetricJob,
  createPopulationJob: createPopulationJob,
  createSingleMetricJob: createSingleMetricJob,
  cross: cross,
  dashboardApp: dashboardApp,
  dataVisualizer: dataVisualizer,
  devToolsApp: devToolsApp,
  discoverApp: discoverApp,
  document: document,
  dot: dot,
  empty: empty,
  exit: exit,
  expand: expand,
  exportAction: exportAction,
  eyeClosed: eyeClosed,
  eye: eye,
  faceHappy: faceHappy,
  faceNeutral: faceNeutral,
  faceSad: faceSad,
  fullScreen: fullScreen,
  gear: gear,
  grab: grab,
  graphApp: graphApp,
  grid: grid,
  grokApp: grokApp,
  heatmap: heatmap,
  help: help,
  iInCircle: iInCircle,
  importAction: importAction,
  indexClose: indexClose,
  indexEdit: indexEdit,
  indexFlush: indexFlush,
  indexMapping: indexMapping,
  indexOpen: indexOpen,
  indexPatternApp: indexPatternApp,
  indexSettings: indexSettings,
  invert: invert,
  kqlField: kqlField,
  kqlOperand: kqlOperand,
  kqlValue: kqlValue,
  kqlFunction: kqlFunction,
  kqlSelector: kqlSelector,
  link: link,
  list: list,
  listAdd: listAdd,
  lock: lock,
  loggingApp: loggingApp,
  logoApache: logoApache,
  logoBeats: logoBeats,
  logoCloud: logoCloud,
  logoDocker: logoDocker,
  logoElastic: logoElastic,
  logoElasticSearch: logoElasticSearch,
  logoElasticStack: logoElasticStack,
  logoGmail: logoGmail,
  logoGithub: logoGithub,
  logoKibana: logoKibana,
  logoKubernetes: logoKubernetes,
  logoLogstash: logoLogstash,
  logoMySQL: logoMySQL,
  logoNginx: logoNginx,
  logoRedis: logoRedis,
  logoSketch: logoSketch,
  logoSlack: logoSlack,
  logoWebhook: logoWebhook,
  logoXpack: logoXpack,
  logstashFilter: logstashFilter,
  logstashIf: logstashIf,
  logstashInput: logstashInput,
  logstashOutput: logstashOutput,
  logstashQueue: logstashQueue,
  machineLearningApp: machineLearningApp,
  managementApp: managementApp,
  mapMarker: mapMarker,
  merge: merge,
  minusInCircle: minusInCircle,
  monitoringApp: monitoringApp,
  node: node,
  number: number,
  pause: pause,
  pencil: pencil,
  pin: pin,
  pipelineApp: pipelineApp,
  play: play,
  plusInCircle: plusInCircle,
  popout: popout,
  questionInCircle: questionInCircle,
  refresh: refresh,
  reportingApp: reportingApp,
  savedObjectsApp: savedObjectsApp,
  scale: scale,
  search: search,
  searchProfilerApp: searchProfilerApp,
  securityApp: securityApp,
  shard: shard,
  share: share,
  sortDown: sortDown,
  sortLeft: sortLeft,
  sortRight: sortRight,
  sortUp: sortUp,
  starEmpty: starEmpty,
  starPlusFilled: starPlusFilled,
  stats: stats,
  stop: stop,
  stopFilled: stopFilled,
  string: string,
  tableOfContents: tableOfContents,
  tear: tear,
  timelionApp: timelionApp,
  trash: trash,
  upgradeAssistantApp: upgradeAssistantApp,
  user: user,
  usersRolesApp: usersRolesApp,
  vector: vector,
  visualizeApp: visualizeApp,
  watchesApp: watchesApp,
  wrench: wrench
};

var TYPES = exports.TYPES = Object.keys(typeToIconMap);

var colorToClassMap = {
  default: null,
  primary: 'euiIcon--primary',
  secondary: 'euiIcon--secondary',
  success: 'euiIcon--success',
  accent: 'euiIcon--accent',
  warning: 'euiIcon--warning',
  danger: 'euiIcon--danger',
  text: 'euiIcon--text',
  subdued: 'euiIcon--subdued',
  ghost: 'euiIcon--ghost'
};

var COLORS = exports.COLORS = Object.keys(colorToClassMap);

var sizeToClassNameMap = {
  original: null,
  s: 'euiIcon--small',
  m: 'euiIcon--medium',
  l: 'euiIcon--large',
  xl: 'euiIcon--xLarge',
  xxl: 'euiIcon--xxLarge'
};

var SIZES = exports.SIZES = Object.keys(sizeToClassNameMap);

var EuiIcon = function EuiIcon(_ref) {
  var type = _ref.type,
      size = _ref.size,
      color = _ref.color,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['type', 'size', 'color', 'className']);

  var optionalColorClass = null;
  var optionalCustomStyles = null;

  if (COLORS.indexOf(color) > -1) {
    optionalColorClass = colorToClassMap[color];
  } else {
    optionalCustomStyles = { fill: color };
  }

  var classes = (0, _classnames2.default)('euiIcon', sizeToClassNameMap[size], optionalColorClass, className);

  var Svg = typeToIconMap[type] || empty;

  return _react2.default.createElement(Svg, _extends({ className: classes, style: optionalCustomStyles }, rest));
};

exports.EuiIcon = EuiIcon;
function checkValidColor(props, propName, componentName) {
  var validHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(props.color);
  if (props.color && !validHex && !COLORS.includes(props.color)) {
    throw new Error(componentName + ' needs to pass a valid color. This can either be a three ' + ('or six character hex value or one of the following: ' + COLORS));
  }
}

EuiIcon.propTypes = {
  type: _propTypes2.default.oneOf(TYPES),
  color: checkValidColor,
  size: _propTypes2.default.oneOf(SIZES)
};

EuiIcon.defaultProps = {
  size: 'm'
};
EuiIcon.__docgenInfo = [{
  'description': '',
  'methods': [],
  'props': {
    'type': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"addDataApp"',
          'computed': false
        }, {
          'value': '"advancedSettingsApp"',
          'computed': false
        }, {
          'value': '"alert"',
          'computed': false
        }, {
          'value': '"apmApp"',
          'computed': false
        }, {
          'value': '"apps"',
          'computed': false
        }, {
          'value': '"arrowDown"',
          'computed': false
        }, {
          'value': '"arrowLeft"',
          'computed': false
        }, {
          'value': '"arrowRight"',
          'computed': false
        }, {
          'value': '"arrowUp"',
          'computed': false
        }, {
          'value': '"asterisk"',
          'computed': false
        }, {
          'value': '"bolt"',
          'computed': false
        }, {
          'value': '"boxesHorizontal"',
          'computed': false
        }, {
          'value': '"boxesVertical"',
          'computed': false
        }, {
          'value': '"broom"',
          'computed': false
        }, {
          'value': '"brush"',
          'computed': false
        }, {
          'value': '"bullseye"',
          'computed': false
        }, {
          'value': '"calendar"',
          'computed': false
        }, {
          'value': '"check"',
          'computed': false
        }, {
          'value': '"checkInCircleFilled"',
          'computed': false
        }, {
          'value': '"clock"',
          'computed': false
        }, {
          'value': '"console"',
          'computed': false
        }, {
          'value': '"consoleApp"',
          'computed': false
        }, {
          'value': '"controlsHorizontal"',
          'computed': false
        }, {
          'value': '"controlsVertical"',
          'computed': false
        }, {
          'value': '"copy"',
          'computed': false
        }, {
          'value': '"copyClipboard"',
          'computed': false
        }, {
          'value': '"createAdvancedJob"',
          'computed': false
        }, {
          'value': '"createMultiMetricJob"',
          'computed': false
        }, {
          'value': '"createPopulationJob"',
          'computed': false
        }, {
          'value': '"createSingleMetricJob"',
          'computed': false
        }, {
          'value': '"cross"',
          'computed': false
        }, {
          'value': '"dashboardApp"',
          'computed': false
        }, {
          'value': '"dataVisualizer"',
          'computed': false
        }, {
          'value': '"devToolsApp"',
          'computed': false
        }, {
          'value': '"discoverApp"',
          'computed': false
        }, {
          'value': '"document"',
          'computed': false
        }, {
          'value': '"dot"',
          'computed': false
        }, {
          'value': '"empty"',
          'computed': false
        }, {
          'value': '"exit"',
          'computed': false
        }, {
          'value': '"expand"',
          'computed': false
        }, {
          'value': '"exportAction"',
          'computed': false
        }, {
          'value': '"eyeClosed"',
          'computed': false
        }, {
          'value': '"eye"',
          'computed': false
        }, {
          'value': '"faceHappy"',
          'computed': false
        }, {
          'value': '"faceNeutral"',
          'computed': false
        }, {
          'value': '"faceSad"',
          'computed': false
        }, {
          'value': '"fullScreen"',
          'computed': false
        }, {
          'value': '"gear"',
          'computed': false
        }, {
          'value': '"grab"',
          'computed': false
        }, {
          'value': '"graphApp"',
          'computed': false
        }, {
          'value': '"grid"',
          'computed': false
        }, {
          'value': '"grokApp"',
          'computed': false
        }, {
          'value': '"heatmap"',
          'computed': false
        }, {
          'value': '"help"',
          'computed': false
        }, {
          'value': '"iInCircle"',
          'computed': false
        }, {
          'value': '"importAction"',
          'computed': false
        }, {
          'value': '"indexClose"',
          'computed': false
        }, {
          'value': '"indexEdit"',
          'computed': false
        }, {
          'value': '"indexFlush"',
          'computed': false
        }, {
          'value': '"indexMapping"',
          'computed': false
        }, {
          'value': '"indexOpen"',
          'computed': false
        }, {
          'value': '"indexPatternApp"',
          'computed': false
        }, {
          'value': '"indexSettings"',
          'computed': false
        }, {
          'value': '"invert"',
          'computed': false
        }, {
          'value': '"kqlField"',
          'computed': false
        }, {
          'value': '"kqlOperand"',
          'computed': false
        }, {
          'value': '"kqlValue"',
          'computed': false
        }, {
          'value': '"kqlFunction"',
          'computed': false
        }, {
          'value': '"kqlSelector"',
          'computed': false
        }, {
          'value': '"link"',
          'computed': false
        }, {
          'value': '"list"',
          'computed': false
        }, {
          'value': '"listAdd"',
          'computed': false
        }, {
          'value': '"lock"',
          'computed': false
        }, {
          'value': '"loggingApp"',
          'computed': false
        }, {
          'value': '"logoApache"',
          'computed': false
        }, {
          'value': '"logoBeats"',
          'computed': false
        }, {
          'value': '"logoCloud"',
          'computed': false
        }, {
          'value': '"logoDocker"',
          'computed': false
        }, {
          'value': '"logoElastic"',
          'computed': false
        }, {
          'value': '"logoElasticSearch"',
          'computed': false
        }, {
          'value': '"logoElasticStack"',
          'computed': false
        }, {
          'value': '"logoGmail"',
          'computed': false
        }, {
          'value': '"logoGithub"',
          'computed': false
        }, {
          'value': '"logoKibana"',
          'computed': false
        }, {
          'value': '"logoKubernetes"',
          'computed': false
        }, {
          'value': '"logoLogstash"',
          'computed': false
        }, {
          'value': '"logoMySQL"',
          'computed': false
        }, {
          'value': '"logoNginx"',
          'computed': false
        }, {
          'value': '"logoRedis"',
          'computed': false
        }, {
          'value': '"logoSketch"',
          'computed': false
        }, {
          'value': '"logoSlack"',
          'computed': false
        }, {
          'value': '"logoWebhook"',
          'computed': false
        }, {
          'value': '"logoXpack"',
          'computed': false
        }, {
          'value': '"logstashFilter"',
          'computed': false
        }, {
          'value': '"logstashIf"',
          'computed': false
        }, {
          'value': '"logstashInput"',
          'computed': false
        }, {
          'value': '"logstashOutput"',
          'computed': false
        }, {
          'value': '"logstashQueue"',
          'computed': false
        }, {
          'value': '"machineLearningApp"',
          'computed': false
        }, {
          'value': '"managementApp"',
          'computed': false
        }, {
          'value': '"mapMarker"',
          'computed': false
        }, {
          'value': '"merge"',
          'computed': false
        }, {
          'value': '"minusInCircle"',
          'computed': false
        }, {
          'value': '"monitoringApp"',
          'computed': false
        }, {
          'value': '"node"',
          'computed': false
        }, {
          'value': '"number"',
          'computed': false
        }, {
          'value': '"pause"',
          'computed': false
        }, {
          'value': '"pencil"',
          'computed': false
        }, {
          'value': '"pin"',
          'computed': false
        }, {
          'value': '"pipelineApp"',
          'computed': false
        }, {
          'value': '"play"',
          'computed': false
        }, {
          'value': '"plusInCircle"',
          'computed': false
        }, {
          'value': '"popout"',
          'computed': false
        }, {
          'value': '"questionInCircle"',
          'computed': false
        }, {
          'value': '"refresh"',
          'computed': false
        }, {
          'value': '"reportingApp"',
          'computed': false
        }, {
          'value': '"savedObjectsApp"',
          'computed': false
        }, {
          'value': '"scale"',
          'computed': false
        }, {
          'value': '"search"',
          'computed': false
        }, {
          'value': '"searchProfilerApp"',
          'computed': false
        }, {
          'value': '"securityApp"',
          'computed': false
        }, {
          'value': '"shard"',
          'computed': false
        }, {
          'value': '"share"',
          'computed': false
        }, {
          'value': '"sortDown"',
          'computed': false
        }, {
          'value': '"sortLeft"',
          'computed': false
        }, {
          'value': '"sortRight"',
          'computed': false
        }, {
          'value': '"sortUp"',
          'computed': false
        }, {
          'value': '"starEmpty"',
          'computed': false
        }, {
          'value': '"starPlusFilled"',
          'computed': false
        }, {
          'value': '"stats"',
          'computed': false
        }, {
          'value': '"stop"',
          'computed': false
        }, {
          'value': '"stopFilled"',
          'computed': false
        }, {
          'value': '"string"',
          'computed': false
        }, {
          'value': '"tableOfContents"',
          'computed': false
        }, {
          'value': '"tear"',
          'computed': false
        }, {
          'value': '"timelionApp"',
          'computed': false
        }, {
          'value': '"trash"',
          'computed': false
        }, {
          'value': '"upgradeAssistantApp"',
          'computed': false
        }, {
          'value': '"user"',
          'computed': false
        }, {
          'value': '"usersRolesApp"',
          'computed': false
        }, {
          'value': '"vector"',
          'computed': false
        }, {
          'value': '"visualizeApp"',
          'computed': false
        }, {
          'value': '"watchesApp"',
          'computed': false
        }, {
          'value': '"wrench"',
          'computed': false
        }]
      },
      'required': false,
      'description': ''
    },
    'color': {
      'type': {
        'name': 'custom',
        'raw': 'checkValidColor'
      },
      'required': false,
      'description': ''
    },
    'size': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"original"',
          'computed': false
        }, {
          'value': '"s"',
          'computed': false
        }, {
          'value': '"m"',
          'computed': false
        }, {
          'value': '"l"',
          'computed': false
        }, {
          'value': '"xl"',
          'computed': false
        }, {
          'value': '"xxl"',
          'computed': false
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'m\'',
        'computed': false
      }
    }
  }
}];