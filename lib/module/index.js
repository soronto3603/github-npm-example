function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { requireNativeComponent, UIManager, findNodeHandle, Platform } from 'react-native';
const ComponentName = 'ReactNativeUnityView';
const ReactNativeUnityView = requireNativeComponent(ComponentName);
export default class UnityView extends React.Component {
  constructor(props) {
    super(props);
  }

  postMessage(gameObject, methodName, message) {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('postMessage'), [gameObject, methodName, message]);
  }

  unloadUnity() {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('unloadUnity'), []);
  }

  pauseUnity(pause) {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('pauseUnity'), [pause]);
  }

  resumeUnity() {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this), this.getCommand('resumeUnity'), []);
  }

  getCommand(cmd) {
    if (Platform.OS === 'ios') {
      return UIManager.getViewManagerConfig('ReactNativeUnityView').Commands[cmd];
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
    return /*#__PURE__*/React.createElement(ReactNativeUnityView, this.getProps());
  }

}

_defineProperty(UnityView, "defaultProps", {});
//# sourceMappingURL=index.js.map