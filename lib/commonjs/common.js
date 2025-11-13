"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTimeout = exports.Platform = exports.NativeModule = exports.NativeEventEmitter = void 0;
var ReactNative = _interopRequireWildcard(require("react-native"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Copyright © 2022 Twilio, Inc. All rights reserved. Licensed under the Twilio
 * license.
 *
 * See LICENSE in the project root for license information.
 */

const NativeModule = exports.NativeModule = ReactNative.NativeModules.TwilioVoiceReactNative;
const NativeEventEmitter = exports.NativeEventEmitter = new ReactNative.NativeEventEmitter(NativeModule);
const Platform = exports.Platform = ReactNative.Platform;
const setTimeout = exports.setTimeout = global.setTimeout;
//# sourceMappingURL=common.js.map