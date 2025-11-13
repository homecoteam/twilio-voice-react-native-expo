function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Generic Twilio error that the SDK will raise when encountering an error. Can
 * be used to describe backend errors.
 *
 * @public
 */
export class TwilioError extends Error {
  constructor(message, code) {
    super(message);
    _defineProperty(this, "causes", []);
    _defineProperty(this, "code", void 0);
    _defineProperty(this, "description", 'Generic Twilio error.');
    _defineProperty(this, "explanation", 'The SDK has encountered an unexpected error.');
    _defineProperty(this, "solutions", []);
    this.code = code;
    Object.setPrototypeOf(this, TwilioError.prototype);
    this.name = TwilioError.name;
  }
}
//# sourceMappingURL=TwilioError.js.map