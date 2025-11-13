function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { TwilioError } from './TwilioError';

/**
 * Error describing that the an unsupported platform other than Android
 * or iOS has been detected.
 *
 * @public
 */
export class UnsupportedPlatformError extends TwilioError {
  constructor(message) {
    super(message);
    _defineProperty(this, "description", 'Unsupported platform error.');
    _defineProperty(this, "explanation", 'An unsupported platform has been detected.');
    Object.setPrototypeOf(this, UnsupportedPlatformError.prototype);
    this.name = UnsupportedPlatformError.name;
  }
}
//# sourceMappingURL=UnsupportedPlatformError.js.map