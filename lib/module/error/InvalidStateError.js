function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { TwilioError } from './TwilioError';

/**
 * Error describing that the SDK has entered or is attempting to enter an
 * invalid state.
 *
 * @public
 */
export class InvalidStateError extends TwilioError {
  constructor(message) {
    super(message);
    _defineProperty(this, "description", 'Invalid state error.');
    _defineProperty(this, "explanation", 'The SDK has entered an invalid state.');
    Object.setPrototypeOf(this, InvalidStateError.prototype);
    this.name = InvalidStateError.name;
  }
}
//# sourceMappingURL=InvalidStateError.js.map