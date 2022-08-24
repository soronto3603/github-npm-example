"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ComponentName = 'ReactNativeUnityView';
const ReactNativeUnityView = (0, _reactNative.requireNativeComponent)(ComponentName);

class UnityView extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  postMessage(gameObject, methodName, message) {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('postMessage'), [gameObject, methodName, message]);
  }

  unloadUnity() {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('unloadUnity'), []);
  }

  pauseUnity(pause) {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('pauseUnity'), [pause]);
  }

  resumeUnity() {
    _reactNative.UIManager.dispatchViewManagerCommand((0, _reactNative.findNodeHandle)(this), this.getCommand('resumeUnity'), []);
  }

  getCommand(cmd) {
    if (_reactNative.Platform.OS === 'ios') {
      return _reactNative.UIManager.getViewManagerConfig('ReactNativeUnityView').Commands[cmd];
    } else {
      return cmd;
    }
  }

  getProps() {
    return { ...this.props
    };
  }

  componentWillUnmount() {
    this.unloadUnity();
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(ReactNativeUnityView, this.getProps());
  }

}

exports.default = UnityView;

_defineProperty(UnityView, "defaultProps", {});
//# sourceMappingURL=index.js.map