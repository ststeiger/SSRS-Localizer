var __extends, Microsoft, AI;
(function(n) {
    var t;
    (function(n) {
        var r, t, i, u;
        (function(n) {
            n[n.CRITICAL = 0] = "CRITICAL";
            n[n.WARNING = 1] = "WARNING"
        })(n.LoggingSeverity || (n.LoggingSeverity = {}));
        r = n.LoggingSeverity,
            function(n) {
                n[n.NONUSRACT_BrowserDoesNotSupportLocalStorage = 0] = "NONUSRACT_BrowserDoesNotSupportLocalStorage";
                n[n.NONUSRACT_BrowserCannotReadLocalStorage = 1] = "NONUSRACT_BrowserCannotReadLocalStorage";
                n[n.NONUSRACT_BrowserCannotReadSessionStorage = 2] = "NONUSRACT_BrowserCannotReadSessionStorage";
                n[n.NONUSRACT_BrowserCannotWriteLocalStorage = 3] = "NONUSRACT_BrowserCannotWriteLocalStorage";
                n[n.NONUSRACT_BrowserCannotWriteSessionStorage = 4] = "NONUSRACT_BrowserCannotWriteSessionStorage";
                n[n.NONUSRACT_BrowserFailedRemovalFromLocalStorage = 5] = "NONUSRACT_BrowserFailedRemovalFromLocalStorage";
                n[n.NONUSRACT_BrowserFailedRemovalFromSessionStorage = 6] = "NONUSRACT_BrowserFailedRemovalFromSessionStorage";
                n[n.NONUSRACT_CannotSendEmptyTelemetry = 7] = "NONUSRACT_CannotSendEmptyTelemetry";
                n[n.NONUSRACT_ClientPerformanceMathError = 8] = "NONUSRACT_ClientPerformanceMathError";
                n[n.NONUSRACT_ErrorParsingAISessionCookie = 9] = "NONUSRACT_ErrorParsingAISessionCookie";
                n[n.NONUSRACT_ErrorPVCalc = 10] = "NONUSRACT_ErrorPVCalc";
                n[n.NONUSRACT_ExceptionWhileLoggingError = 11] = "NONUSRACT_ExceptionWhileLoggingError";
                n[n.NONUSRACT_FailedAddingTelemetryToBuffer = 12] = "NONUSRACT_FailedAddingTelemetryToBuffer";
                n[n.NONUSRACT_FailedMonitorAjaxAbort = 13] = "NONUSRACT_FailedMonitorAjaxAbort";
                n[n.NONUSRACT_FailedMonitorAjaxDur = 14] = "NONUSRACT_FailedMonitorAjaxDur";
                n[n.NONUSRACT_FailedMonitorAjaxOpen = 15] = "NONUSRACT_FailedMonitorAjaxOpen";
                n[n.NONUSRACT_FailedMonitorAjaxRSC = 16] = "NONUSRACT_FailedMonitorAjaxRSC";
                n[n.NONUSRACT_FailedMonitorAjaxSend = 17] = "NONUSRACT_FailedMonitorAjaxSend";
                n[n.NONUSRACT_FailedToAddHandlerForOnBeforeUnload = 18] = "NONUSRACT_FailedToAddHandlerForOnBeforeUnload";
                n[n.NONUSRACT_FailedToSendQueuedTelemetry = 19] = "NONUSRACT_FailedToSendQueuedTelemetry";
                n[n.NONUSRACT_FailedToReportDataLoss = 20] = "NONUSRACT_FailedToReportDataLoss";
                n[n.NONUSRACT_FlushFailed = 21] = "NONUSRACT_FlushFailed";
                n[n.NONUSRACT_MessageLimitPerPVExceeded = 22] = "NONUSRACT_MessageLimitPerPVExceeded";
                n[n.NONUSRACT_MissingRequiredFieldSpecification = 23] = "NONUSRACT_MissingRequiredFieldSpecification";
                n[n.NONUSRACT_NavigationTimingNotSupported = 24] = "NONUSRACT_NavigationTimingNotSupported";
                n[n.NONUSRACT_OnError = 25] = "NONUSRACT_OnError";
                n[n.NONUSRACT_SessionRenewalDateIsZero = 26] = "NONUSRACT_SessionRenewalDateIsZero";
                n[n.NONUSRACT_SenderNotInitialized = 27] = "NONUSRACT_SenderNotInitialized";
                n[n.NONUSRACT_StartTrackEventFailed = 28] = "NONUSRACT_StartTrackEventFailed";
                n[n.NONUSRACT_StopTrackEventFailed = 29] = "NONUSRACT_StopTrackEventFailed";
                n[n.NONUSRACT_StartTrackFailed = 30] = "NONUSRACT_StartTrackFailed";
                n[n.NONUSRACT_StopTrackFailed = 31] = "NONUSRACT_StopTrackFailed";
                n[n.NONUSRACT_TelemetrySampledAndNotSent = 32] = "NONUSRACT_TelemetrySampledAndNotSent";
                n[n.NONUSRACT_TrackEventFailed = 33] = "NONUSRACT_TrackEventFailed";
                n[n.NONUSRACT_TrackExceptionFailed = 34] = "NONUSRACT_TrackExceptionFailed";
                n[n.NONUSRACT_TrackMetricFailed = 35] = "NONUSRACT_TrackMetricFailed";
                n[n.NONUSRACT_TrackPVFailed = 36] = "NONUSRACT_TrackPVFailed";
                n[n.NONUSRACT_TrackPVFailedCalc = 37] = "NONUSRACT_TrackPVFailedCalc";
                n[n.NONUSRACT_TrackTraceFailed = 38] = "NONUSRACT_TrackTraceFailed";
                n[n.NONUSRACT_TransmissionFailed = 39] = "NONUSRACT_TransmissionFailed";
                n[n.NONUSRACT_FailedToSetStorageBuffer = 40] = "NONUSRACT_FailedToSetStorageBuffer";
                n[n.NONUSRACT_FailedToRestoreStorageBuffer = 41] = "NONUSRACT_FailedToRestoreStorageBuffer";
                n[n.NONUSRACT_InvalidBackendResponse = 42] = "NONUSRACT_InvalidBackendResponse";
                n[n.NONUSRACT_FailedToFixDepricatedValues = 43] = "NONUSRACT_FailedToFixDepricatedValues";
                n[n.NONUSRACT_InvalidDurationValue = 44] = "NONUSRACT_InvalidDurationValue";
                n[n.USRACT_CannotSerializeObject = 45] = "USRACT_CannotSerializeObject";
                n[n.USRACT_CannotSerializeObjectNonSerializable = 46] = "USRACT_CannotSerializeObjectNonSerializable";
                n[n.USRACT_CircularReferenceDetected = 47] = "USRACT_CircularReferenceDetected";
                n[n.USRACT_ClearAuthContextFailed = 48] = "USRACT_ClearAuthContextFailed";
                n[n.USRACT_ExceptionTruncated = 49] = "USRACT_ExceptionTruncated";
                n[n.USRACT_IllegalCharsInName = 50] = "USRACT_IllegalCharsInName";
                n[n.USRACT_ItemNotInArray = 51] = "USRACT_ItemNotInArray";
                n[n.USRACT_MaxAjaxPerPVExceeded = 52] = "USRACT_MaxAjaxPerPVExceeded";
                n[n.USRACT_MessageTruncated = 53] = "USRACT_MessageTruncated";
                n[n.USRACT_NameTooLong = 54] = "USRACT_NameTooLong";
                n[n.USRACT_SampleRateOutOfRange = 55] = "USRACT_SampleRateOutOfRange";
                n[n.USRACT_SetAuthContextFailed = 56] = "USRACT_SetAuthContextFailed";
                n[n.USRACT_SetAuthContextFailedAccountName = 57] = "USRACT_SetAuthContextFailedAccountName";
                n[n.USRACT_StringValueTooLong = 58] = "USRACT_StringValueTooLong";
                n[n.USRACT_StartCalledMoreThanOnce = 59] = "USRACT_StartCalledMoreThanOnce";
                n[n.USRACT_StopCalledWithoutStart = 60] = "USRACT_StopCalledWithoutStart";
                n[n.USRACT_TelemetryInitializerFailed = 61] = "USRACT_TelemetryInitializerFailed";
                n[n.USRACT_TrackArgumentsNotSpecified = 62] = "USRACT_TrackArgumentsNotSpecified";
                n[n.USRACT_UrlTooLong = 63] = "USRACT_UrlTooLong";
                n[n.USRACT_SessionStorageBufferFull = 64] = "USRACT_SessionStorageBufferFull";
                n[n.USRACT_CannotAccessCookie = 65] = "USRACT_CannotAccessCookie"
            }(n._InternalMessageId || (n._InternalMessageId = {}));
        t = n._InternalMessageId;
        i = function() {
            function n(i, r, u) {
                this.message = t[i].toString();
                this.messageId = i;
                var f = (r ? " message:" + n.sanitizeDiagnosticText(r) : "") + (u ? " props:" + n.sanitizeDiagnosticText(JSON.stringify(u)) : "");
                this.message += f
            }
            return n.sanitizeDiagnosticText = function(n) {
                return '"' + n.replace(/\"/g, "") + '"'
            }, n
        }();
        n._InternalLogMessage = i;
        u = function() {
            function u() {}
            return u.throwInternalNonUserActionable = function(n, t) {
                if (this.enableDebugExceptions()) throw t;
                else typeof t == "undefined" || !t || typeof t.message != "undefined" && (t.message = this.AiNonUserActionablePrefix + t.message, this.verboseLogging() && this.warnToConsole(t.message), this.logInternalMessage(n, t))
            }, u.throwInternalUserActionable = function(n, i) {
                if (this.enableDebugExceptions()) throw i;
                else if (typeof i != "undefined" && !!i && typeof i.message != "undefined") {
                    i.message = this.AiUserActionablePrefix + i.message;
                    var r = t[i.messageId];
                    (!this._messageLogged[r] || this.verboseLogging()) && (this.warnToConsole(i.message), this._messageLogged[r] = !0);
                    this.logInternalMessage(n, i)
                }
            }, u.warnToConsole = function(n) {
                typeof console == "undefined" || !console || (typeof console.warn == "function" ? console.warn(n) : typeof console.log == "function" && console.log(n))
            }, u.resetInternalMessageCount = function() {
                this._messageCount = 0;
                this._messageLogged = {}
            }, u.clearInternalMessageLoggedTypes = function() {
                var i, t;
                if (n.Util.canUseSessionStorage())
                    for (i = n.Util.getSessionStorageKeys(), t = 0; t < i.length; t++) i[t].indexOf(u.AIInternalMessagePrefix) === 0 && n.Util.removeSessionStorage(i[t])
            }, u.setMaxInternalMessageLimit = function(n) {
                if (!n) throw new Error("limit cannot be undefined.");
                this.MAX_INTERNAL_MESSAGE_LIMIT = n
            }, u.logInternalMessage = function(f, e) {
                var s, o, c, h, l;
                this._areInternalMessagesThrottled() || (s = !0, o = u.AIInternalMessagePrefix + t[e.messageId], n.Util.canUseSessionStorage() ? (c = n.Util.getSessionStorage(o), c ? s = !1 : n.Util.setSessionStorage(o, "1")) : this._messageLogged[o] ? s = !1 : this._messageLogged[o] = !0, s && ((this.verboseLogging() || f === r.CRITICAL) && (this.queue.push(e), this._messageCount++), this._messageCount == this.MAX_INTERNAL_MESSAGE_LIMIT && (h = "Internal events throttle limit per PageView reached for this app.", l = new i(t.NONUSRACT_MessageLimitPerPVExceeded, h), this.queue.push(l), this.warnToConsole(h))))
            }, u._areInternalMessagesThrottled = function() {
                return this._messageCount >= this.MAX_INTERNAL_MESSAGE_LIMIT
            }, u.AiUserActionablePrefix = "AI: ", u.AIInternalMessagePrefix = "AITR_", u.AiNonUserActionablePrefix = "AI (Internal): ", u.enableDebugExceptions = function() {
                return !1
            }, u.verboseLogging = function() {
                return !1
            }, u.queue = [], u.MAX_INTERNAL_MESSAGE_LIMIT = 25, u._messageCount = 0, u._messageLogged = {}, u
        }();
        n._InternalLogging = u
    })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
})(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function(n) {
        var t, i, r;
        (function(n) {
            n[n.LocalStorage = 0] = "LocalStorage";
            n[n.SessionStorage = 1] = "SessionStorage"
        })(t || (t = {}));
        i = function() {
            function i() {}
            return i.disableStorage = function() {
                i._canUseLocalStorage = !1;
                i._canUseSessionStorage = !1
            }, i._getLocalStorageObject = function() {
                return i.canUseLocalStorage() ? i._getVerifiedStorageObject(t.LocalStorage) : null
            }, i._getVerifiedStorageObject = function(n) {
                var i = null,
                    u, r;
                try {
                    r = new Date;
                    i = n === t.LocalStorage ? window.localStorage : window.sessionStorage;
                    i.setItem(r, r);
                    u = i.getItem(r) != r;
                    i.removeItem(r);
                    u && (i = null)
                } catch (f) {
                    i = null
                }
                return i
            }, i.canUseLocalStorage = function() {
                return i._canUseLocalStorage === undefined && (i._canUseLocalStorage = !!i._getVerifiedStorageObject(t.LocalStorage)), i._canUseLocalStorage
            }, i.getStorage = function(t) {
                var r = i._getLocalStorageObject(),
                    f;
                if (r !== null) try {
                    return r.getItem(t)
                } catch (u) {
                    i._canUseLocalStorage = !1;
                    f = new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_BrowserCannotReadLocalStorage, "Browser failed read of local storage. " + i.getExceptionName(u), {
                        exception: i.dump(u)
                    });
                    n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, f)
                }
                return null
            }, i.setStorage = function(t, r) {
                var u = i._getLocalStorageObject(),
                    e;
                if (u !== null) try {
                    return u.setItem(t, r), !0
                } catch (f) {
                    i._canUseLocalStorage = !1;
                    e = new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_BrowserCannotWriteLocalStorage, "Browser failed write to local storage. " + i.getExceptionName(f), {
                        exception: i.dump(f)
                    });
                    n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, e)
                }
                return !1
            }, i.removeStorage = function(t) {
                var r = i._getLocalStorageObject(),
                    f;
                if (r !== null) try {
                    return r.removeItem(t), !0
                } catch (u) {
                    i._canUseLocalStorage = !1;
                    f = new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_BrowserFailedRemovalFromLocalStorage, "Browser failed removal of local storage item. " + i.getExceptionName(u), {
                        exception: i.dump(u)
                    });
                    n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, f)
                }
                return !1
            }, i._getSessionStorageObject = function() {
                return i.canUseSessionStorage() ? i._getVerifiedStorageObject(t.SessionStorage) : null
            }, i.canUseSessionStorage = function() {
                return i._canUseSessionStorage === undefined && (i._canUseSessionStorage = !!i._getVerifiedStorageObject(t.SessionStorage)), i._canUseSessionStorage
            }, i.getSessionStorageKeys = function() {
                var n = [],
                    t;
                if (i.canUseSessionStorage())
                    for (t in window.sessionStorage) n.push(t);
                return n
            }, i.getSessionStorage = function(t) {
                var r = i._getSessionStorageObject(),
                    f;
                if (r !== null) try {
                    return r.getItem(t)
                } catch (u) {
                    i._canUseSessionStorage = !1;
                    f = new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_BrowserCannotReadSessionStorage, "Browser failed read of session storage. " + i.getExceptionName(u), {
                        exception: i.dump(u)
                    });
                    n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, f)
                }
                return null
            }, i.setSessionStorage = function(t, r) {
                var u = i._getSessionStorageObject(),
                    e;
                if (u !== null) try {
                    return u.setItem(t, r), !0
                } catch (f) {
                    i._canUseSessionStorage = !1;
                    e = new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_BrowserCannotWriteSessionStorage, "Browser failed write to session storage. " + i.getExceptionName(f), {
                        exception: i.dump(f)
                    });
                    n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, e)
                }
                return !1
            }, i.removeSessionStorage = function(t) {
                var r = i._getSessionStorageObject(),
                    f;
                if (r !== null) try {
                    return r.removeItem(t), !0
                } catch (u) {
                    i._canUseSessionStorage = !1;
                    f = new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_BrowserFailedRemovalFromSessionStorage, "Browser failed removal of session storage item. " + i.getExceptionName(u), {
                        exception: i.dump(u)
                    });
                    n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, f)
                }
                return !1
            }, i.disableCookies = function() {
                i._canUseCookies = !1
            }, i.canUseCookies = function() {
                if (i._canUseCookies === undefined) {
                    i._canUseCookies = !1;
                    try {
                        i._canUseCookies = i.document.cookie !== undefined
                    } catch (t) {
                        n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_CannotAccessCookie, "Cannot access document.cookie - " + i.getExceptionName(t), {
                            exception: i.dump(t)
                        }))
                    }
                }
                return i._canUseCookies
            }, i.setCookie = function(n, t, r) {
                var u = "",
                    f = "";
                r && (u = ";domain=" + r);
                i.document.location && i.document.location.protocol === "https:" && (f = ";secure");
                i.canUseCookies() && (i.document.cookie = n + "=" + t + u + ";path=/" + f)
            }, i.stringToBoolOrDefault = function(n) {
                return n ? n.toString().toLowerCase() === "true" : !1
            }, i.getCookie = function(n) {
                var f, e, u, r, t;
                if (i.canUseCookies()) {
                    if (f = "", n && n.length)
                        for (e = n + "=", u = i.document.cookie.split(";"), r = 0; r < u.length; r++)
                            if (t = u[r], t = i.trim(t), t && t.indexOf(e) === 0) {
                                f = t.substring(e.length, u[r].length);
                                break
                            }
                    return f
                }
            }, i.deleteCookie = function(n) {
                i.canUseCookies() && (i.document.cookie = n + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
            }, i.trim = function(n) {
                return typeof n != "string" ? n : n.replace(/^\s+|\s+$/g, "")
            }, i.newId = function() {
                for (var t = "", n = Math.random() * 1073741824, i; n > 0;) i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n % 64), t += i, n = Math.floor(n / 64);
                return t
            }, i.isArray = function(n) {
                return Object.prototype.toString.call(n) === "[object Array]"
            }, i.isError = function(n) {
                return Object.prototype.toString.call(n) === "[object Error]"
            }, i.isDate = function(n) {
                return Object.prototype.toString.call(n) === "[object Date]"
            }, i.toISOStringForIE8 = function(n) {
                if (i.isDate(n)) {
                    function t(n) {
                        var t = String(n);
                        return t.length === 1 && (t = "0" + t), t
                    }
                    return Date.prototype.toISOString ? n.toISOString() : n.getUTCFullYear() + "-" + t(n.getUTCMonth() + 1) + "-" + t(n.getUTCDate()) + "T" + t(n.getUTCHours()) + ":" + t(n.getUTCMinutes()) + ":" + t(n.getUTCSeconds()) + "." + String((n.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                }
            }, i.getIEVersion = function(n) {
                n === void 0 && (n = null);
                var t = n ? n.toLowerCase() : navigator.userAgent.toLowerCase();
                return t.indexOf("msie") != -1 ? parseInt(t.split("msie")[1]) : null
            }, i.msToTimeSpan = function(n) {
                (isNaN(n) || n < 0) && (n = 0);
                n = Math.round(n);
                var t = "" + n % 1e3,
                    i = "" + Math.floor(n / 1e3) % 60,
                    r = "" + Math.floor(n / 6e4) % 60,
                    u = "" + Math.floor(n / 36e5) % 24,
                    f = Math.floor(n / 864e5);
                return t = t.length === 1 ? "00" + t : t.length === 2 ? "0" + t : t, i = i.length < 2 ? "0" + i : i, r = r.length < 2 ? "0" + r : r, u = u.length < 2 ? "0" + u : u, (f > 0 ? f + "." : "") + u + ":" + r + ":" + i + "." + t
            }, i.isCrossOriginError = function(n, t, i, r, u) {
                return (n === "Script error." || n === "Script error") && u === null
            }, i.dump = function(n) {
                var t = Object.prototype.toString.call(n),
                    i = JSON.stringify(n);
                return t === "[object Error]" && (i = "{ stack: '" + n.stack + "', message: '" + n.message + "', name: '" + n.name + "'"), t + i
            }, i.getExceptionName = function(n) {
                var t = Object.prototype.toString.call(n);
                return t === "[object Error]" ? n.name : ""
            }, i.addEventHandler = function(n, t) {
                if (!window || typeof n != "string" || typeof t != "function") return !1;
                var i = "on" + n;
                if (window.addEventListener) window.addEventListener(n, t, !1);
                else if (window.attachEvent) window.attachEvent.call(i, t);
                else return !1;
                return !0
            }, i.document = typeof document != "undefined" ? document : {}, i._canUseCookies = undefined, i._canUseLocalStorage = undefined, i._canUseSessionStorage = undefined, i.NotSpecified = "not_specified", i
        }();
        n.Util = i;
        r = function() {
            function n() {}
            return n.parseUrl = function(t) {
                return n.htmlAnchorElement || (n.htmlAnchorElement = !n.document.createElement ? {} : n.document.createElement("a")), n.htmlAnchorElement.href = t, n.htmlAnchorElement
            }, n.getAbsoluteUrl = function(t) {
                var i, r = n.parseUrl(t);
                return r && (i = r.href), i
            }, n.getPathName = function(t) {
                var i, r = n.parseUrl(t);
                return r && (i = r.pathname), i
            }, n.getCompleteUrl = function(n, t) {
                return n ? n.toUpperCase() + " " + t : t
            }, n.document = typeof document != "undefined" ? document : {}, n
        }();
        n.UrlHelper = r
    })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function(n) {
        "use strict";
        var t = function() {
                function n() {}
                return n.IsNullOrUndefined = function(n) {
                    return typeof n == "undefined" || n === null
                }, n
            }(),
            i, r, u;
        n.extensions = t;
        i = function() {
            function n() {}
            return n.GetLength = function(n) {
                var i = 0,
                    r;
                if (!t.IsNullOrUndefined(n)) {
                    r = "";
                    try {
                        r = n.toString()
                    } catch (u) {}
                    i = r.length;
                    i = isNaN(i) ? 0 : i
                }
                return i
            }, n
        }();
        n.stringUtils = i;
        r = function() {
            function n() {}
            return n.Now = window.performance && window.performance.now && window.performance.timing ? function() {
                return window.performance.now() + window.performance.timing.navigationStart
            } : function() {
                return (new Date).getTime()
            }, n.GetDuration = function(n, i) {
                var r = null;
                return n === 0 || i === 0 || t.IsNullOrUndefined(n) || t.IsNullOrUndefined(i) || (r = i - n), r
            }, n
        }();
        n.dateTime = r;
        u = function() {
            function n() {}
            return n.AttachEvent = function(n, i, r) {
                var u = !1;
                return t.IsNullOrUndefined(n) || (t.IsNullOrUndefined(n.attachEvent) ? t.IsNullOrUndefined(n.addEventListener) || (n.addEventListener(i, r, !1), u = !0) : (n.attachEvent("on" + i, r), u = !0)), u
            }, n.DetachEvent = function(n, i, r) {
                t.IsNullOrUndefined(n) || (t.IsNullOrUndefined(n.detachEvent) ? t.IsNullOrUndefined(n.removeEventListener) || n.removeEventListener(i, r, !1) : n.detachEvent("on" + i, r))
            }, n
        }();
        n.EventHelper = u
    })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function(n) {
        "use strict";
        var t = function() {
                function n() {
                    this.openDone = !1;
                    this.setRequestHeaderDone = !1;
                    this.sendDone = !1;
                    this.abortDone = !1;
                    this.onreadystatechangeCallbackAttached = !1
                }
                return n
            }(),
            i;
        n.XHRMonitoringState = t;
        i = function() {
            function i(i) {
                this.completed = !1;
                this.requestHeadersSize = null;
                this.ttfb = null;
                this.responseReceivingDuration = null;
                this.callbackDuration = null;
                this.ajaxTotalDuration = null;
                this.aborted = null;
                this.pageUrl = null;
                this.requestUrl = null;
                this.requestSize = 0;
                this.method = null;
                this.status = null;
                this.requestSentTime = null;
                this.responseStartedTime = null;
                this.responseFinishedTime = null;
                this.callbackFinishedTime = null;
                this.endTime = null;
                this.originalOnreadystatechage = null;
                this.xhrMonitoringState = new t;
                this.clientFailure = 0;
                this.CalculateMetrics = function() {
                    var t = this;
                    t.ajaxTotalDuration = Math.round(n.dateTime.GetDuration(t.requestSentTime, t.responseFinishedTime) * 1e3) / 1e3
                };
                this.id = i
            }
            return i.prototype.getAbsoluteUrl = function() {
                return this.requestUrl ? n.UrlHelper.getAbsoluteUrl(this.requestUrl) : null
            }, i.prototype.getPathName = function() {
                return this.requestUrl ? n.Telemetry.Common.DataSanitizer.sanitizeUrl(n.UrlHelper.getCompleteUrl(this.method, this.requestUrl)) : null
            }, i
        }();
        n.ajaxRecord = i
    })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function(t) {
        "use strict";
        var i = function() {
            function i(n) {
                this.currentWindowHost = window.location.host;
                this.appInsights = n;
                this.initialized = !1;
                this.Init()
            }
            return i.prototype.Init = function() {
                this.supportsMonitoring() && (this.instrumentOpen(), this.instrumentSend(), this.instrumentAbort(), this.initialized = !0)
            }, i.prototype.isMonitoredInstance = function(n, r) {
                return this.initialized && (r === !0 || !t.extensions.IsNullOrUndefined(n.ajaxData)) && n[i.DisabledPropertyName] !== !0
            }, i.prototype.supportsMonitoring = function() {
                var n = !1;
                return t.extensions.IsNullOrUndefined(XMLHttpRequest) || (n = !0), n
            }, i.prototype.instrumentOpen = function() {
                var u = XMLHttpRequest.prototype.open,
                    r = this;
                XMLHttpRequest.prototype.open = function(f, e, o) {
                    try {
                        !r.isMonitoredInstance(this, !0) || this.ajaxData && this.ajaxData.xhrMonitoringState.openDone || r.openHandler(this, f, e, o)
                    } catch (s) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_FailedMonitorAjaxOpen, "Failed to monitor XMLHttpRequest.open, monitoring data for this ajax call may be incorrect.", {
                            ajaxDiagnosticsMessage: i.getFailedAjaxDiagnosticsMessage(this),
                            exception: n.ApplicationInsights.Util.dump(s)
                        }))
                    }
                    return u.apply(this, arguments)
                }
            }, i.prototype.openHandler = function(n, i, r) {
                var u = new t.ajaxRecord(t.Util.newId());
                u.method = i;
                u.requestUrl = r;
                u.xhrMonitoringState.openDone = !0;
                n.ajaxData = u;
                this.attachToOnReadyStateChange(n)
            }, i.getFailedAjaxDiagnosticsMessage = function(n) {
                var i = "";
                try {
                    t.extensions.IsNullOrUndefined(n) || t.extensions.IsNullOrUndefined(n.ajaxData) || t.extensions.IsNullOrUndefined(n.ajaxData.requestUrl) || (i += "(url: '" + n.ajaxData.requestUrl + "')")
                } catch (r) {}
                return i
            }, i.prototype.instrumentSend = function() {
                var u = XMLHttpRequest.prototype.send,
                    r = this;
                XMLHttpRequest.prototype.send = function(f) {
                    try {
                        r.isMonitoredInstance(this) && !this.ajaxData.xhrMonitoringState.sendDone && r.sendHandler(this, f)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_FailedMonitorAjaxSend, "Failed to monitor XMLHttpRequest, monitoring data for this ajax call may be incorrect.", {
                            ajaxDiagnosticsMessage: i.getFailedAjaxDiagnosticsMessage(this),
                            exception: n.ApplicationInsights.Util.dump(e)
                        }))
                    }
                    return u.apply(this, arguments)
                }
            }, i.prototype.sendHandler = function(n) {
                if (n.ajaxData.requestSentTime = t.dateTime.Now(), !this.appInsights.config.disableCorrelationHeaders && t.UrlHelper.parseUrl(n.ajaxData.getAbsoluteUrl()).host == this.currentWindowHost) {
                    var i = this.appInsights.context.operation.id;
                    n.setRequestHeader("x-ms-request-root-id", i);
                    n.setRequestHeader("x-ms-request-id", n.ajaxData.id)
                }
                n.ajaxData.xhrMonitoringState.sendDone = !0
            }, i.prototype.instrumentAbort = function() {
                var r = XMLHttpRequest.prototype.abort,
                    u = this;
                XMLHttpRequest.prototype.abort = function() {
                    try {
                        u.isMonitoredInstance(this) && !this.ajaxData.xhrMonitoringState.abortDone && (this.ajaxData.aborted = 1, this.ajaxData.xhrMonitoringState.abortDone = !0)
                    } catch (f) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_FailedMonitorAjaxAbort, "Failed to monitor XMLHttpRequest.abort, monitoring data for this ajax call may be incorrect.", {
                            ajaxDiagnosticsMessage: i.getFailedAjaxDiagnosticsMessage(this),
                            exception: n.ApplicationInsights.Util.dump(f)
                        }))
                    }
                    return r.apply(this, arguments)
                }
            }, i.prototype.attachToOnReadyStateChange = function(r) {
                var u = this;
                r.ajaxData.xhrMonitoringState.onreadystatechangeCallbackAttached = t.EventHelper.AttachEvent(r, "readystatechange", function() {
                    try {
                        if (u.isMonitoredInstance(r) && r.readyState === 4) u.onAjaxComplete(r)
                    } catch (f) {
                        var e = n.ApplicationInsights.Util.dump(f);
                        e && e.toLowerCase().indexOf("c00c023f") != -1 || t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_FailedMonitorAjaxRSC, "Failed to monitor XMLHttpRequest 'readystatechange' event handler, monitoring data for this ajax call may be incorrect.", {
                            ajaxDiagnosticsMessage: i.getFailedAjaxDiagnosticsMessage(r),
                            exception: n.ApplicationInsights.Util.dump(f)
                        }))
                    }
                })
            }, i.prototype.onAjaxComplete = function(n) {
                n.ajaxData.responseFinishedTime = t.dateTime.Now();
                n.ajaxData.status = n.status;
                n.ajaxData.CalculateMetrics();
                n.ajaxData.ajaxTotalDuration < 0 ? t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.WARNING, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_FailedMonitorAjaxDur, "Failed to calculate the duration of the ajax call, monitoring data for this ajax call won't be sent.", {
                    ajaxDiagnosticsMessage: i.getFailedAjaxDiagnosticsMessage(n),
                    requestSentTime: n.ajaxData.requestSentTime,
                    responseFinishedTime: n.ajaxData.responseFinishedTime
                })) : (this.appInsights.trackDependency(n.ajaxData.id, n.ajaxData.method, n.ajaxData.getAbsoluteUrl(), n.ajaxData.getPathName(), n.ajaxData.ajaxTotalDuration, +n.ajaxData.status >= 200 && +n.ajaxData.status < 400, +n.ajaxData.status), n.ajaxData = null)
            }, i.instrumentedByAppInsightsName = "InstrumentedByAppInsights", i.DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation", i
        }();
        t.AjaxMonitor = i
    })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n() {}
            return n.prototype.getHashCodeScore = function(t) {
                var i = this.getHashCode(t) / n.INT_MAX_VALUE;
                return i * 100
            }, n.prototype.getHashCode = function(t) {
                var i, r;
                if (t == "") return 0;
                while (t.length < n.MIN_INPUT_LENGTH) t = t.concat(t);
                for (i = 5381, r = 0; r < t.length; ++r) i = (i << 5) + i + t.charCodeAt(r), i = i & i;
                return Math.abs(i)
            }, n.INT_MAX_VALUE = 2147483647, n.MIN_INPUT_LENGTH = 8, n
        }();
        n.HashCodeScoreGenerator = t
    })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function(n) {
        "use strict";
        var t = function() {
            function n(n) {
                this.enabled = !1;
                this.performanceSendInterval = 1e4;
                this.resourcesLogged = {};
                this.appInsights = n;
                this.enabled = this.appInsights.config.isPerfAnalyzerEnabled;
                this.resourceFilters = ["/v2/track", "/ai.0.js"];
                this.Init()
            }
            return n.prototype.Init = function() {
                var n = this;
                this.enabled && this.IsPerformanceApiSupported() && (this.intervalHandler = setInterval(function() {
                    n.SendPerfData();
                    n.resourceFilters.length === Object.keys(n.resourcesLogged).length && clearInterval(n.intervalHandler)
                }, this.performanceSendInterval))
            }, n.prototype.IsPerformanceApiSupported = function() {
                return "performance" in window && "getEntriesByType" in window.performance
            }, n.prototype.SendPerfData = function() {
                var i, r, n, t, u, f;
                if (this.enabled && this.IsPerformanceApiSupported() && (i = window.performance.getEntriesByType("resource"), i !== undefined && !(i.length <= 0)))
                    for (r = 0; r < i.length; r++)
                        if (n = i[r], t = n.name, t && this.IsMatching(t) && !this.resourcesLogged[t]) {
                            u = {
                                url: t
                            };
                            f = n.connectStart === 0 && n.connectEnd === 0 && n.requestStart === 0 && n.responseStart === 0 ? {
                                duration: n.duration,
                                startTime: n.startTime,
                                responseEnd: n.responseEnd
                            } : {
                                duration: n.duration,
                                startTime: n.startTime,
                                redirectStart: n.redirectStart,
                                redirectEnd: n.redirectEnd,
                                domainLookupStart: n.domainLookupStart,
                                domainLookupEnd: n.domainLookupEnd,
                                connectStart: n.connectStart,
                                secureConnectionStart: n.secureConnectionStart || "0",
                                connectEnd: n.connectEnd,
                                requestStart: n.requestStart,
                                responseStart: n.responseStart,
                                responseEnd: n.responseEnd
                            };
                            this.appInsights.trackEvent("AI (Internal): PerfAnalyzer", u, f);
                            this.resourcesLogged[t] = !0;
                            break
                        }
            }, n.prototype.IsMatching = function(n) {
                for (var t = 0; t < this.resourceFilters.length; t++)
                    if (n.indexOf(this.resourceFilters[t]) !== -1) return !0;
                return !1
            }, n
        }();
        n.PerformanceAnalyzer = t
    })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function() {
        "use strict"
    })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function(n) {
        "use strict";
        (function(n) {
            n[n.Default = 0] = "Default";
            n[n.Required = 1] = "Required";
            n[n.Array = 2] = "Array";
            n[n.Hidden = 4] = "Hidden"
        })(n.FieldType || (n.FieldType = {}));
        var t = n.FieldType,
            i = function() {
                function i() {}
                return i.serialize = function(n) {
                    var t = i._serializeObject(n, "root");
                    return JSON.stringify(t)
                }, i._serializeObject = function(r, u) {
                    var s = "__aiCircularRefCheck",
                        e = {},
                        f, c;
                    if (!r) return n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.USRACT_CannotSerializeObject, "cannot serialize object because it is null or undefined", {
                        name: u
                    })), e;
                    if (r[s]) return n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_CircularReferenceDetected, "Circular reference detected while serializing object", {
                        name: u
                    })), e;
                    if (!r.aiDataContract) {
                        if (u === "measurements") e = i._serializeStringMap(r, "number", u);
                        else if (u === "properties") e = i._serializeStringMap(r, "string", u);
                        else if (u === "tags") e = i._serializeStringMap(r, "string", u);
                        else if (n.Util.isArray(r)) e = i._serializeArray(r, u);
                        else {
                            n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_CannotSerializeObjectNonSerializable, "Attempting to serialize an object which does not implement ISerializable", {
                                name: u
                            }));
                            try {
                                JSON.stringify(r);
                                e = r
                            } catch (h) {
                                n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.CRITICAL, h && typeof h.toString == "function" ? h.toString() : "Error serializing object")
                            }
                        }
                        return e
                    }
                    r[s] = !0;
                    for (f in r.aiDataContract) {
                        var o = r.aiDataContract[f],
                            a = typeof o == "function" ? o() & t.Required : o & t.Required,
                            v = typeof o == "function" ? o() & t.Hidden : o & t.Hidden,
                            l = o & t.Array,
                            y = r[f] !== undefined,
                            p = typeof r[f] == "object" && r[f] !== null;
                        if (a && !y && !l) {
                            n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_MissingRequiredFieldSpecification, "Missing required field specification. The field is required but not present on source", {
                                field: f,
                                name: u
                            }));
                            continue
                        }
                        v || (c = p ? l ? i._serializeArray(r[f], f) : i._serializeObject(r[f], f) : r[f], c !== undefined && (e[f] = c))
                    }
                    return delete r[s], e
                }, i._serializeArray = function(t, r) {
                    var f = undefined,
                        u, e, o;
                    if (!!t)
                        if (n.Util.isArray(t))
                            for (f = [], u = 0; u < t.length; u++) e = t[u], o = i._serializeObject(e, r + "[" + u + "]"), f.push(o);
                        else n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.USRACT_ItemNotInArray, "This field was specified as an array in the contract but the item is not an array.\r\n", {
                            name: r
                        }));
                    return f
                }, i._serializeStringMap = function(t, i, r) {
                    var u = undefined,
                        f, e, o;
                    if (t) {
                        u = {};
                        for (f in t) e = t[f], i === "string" ? u[f] = e === undefined ? "undefined" : e === null ? "null" : e.toString ? e.toString() : "invalid field: toString() is not defined." : i === "number" ? e === undefined ? u[f] = "undefined" : e === null ? u[f] = "null" : (o = parseFloat(e), u[f] = isNaN(o) ? "NaN" : o) : (u[f] = "invalid field: " + r + " is of unknown type.", n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.CRITICAL, u[f]))
                    }
                    return u
                }, i
            }();
        n.Serializer = i
    })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
}(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function(n) {
        "use strict";
        var t = function() {
            function n() {}
            return n
        }();
        n.Base = t
    })(t = n.Telemetry || (n.Telemetry = {}))
}(Microsoft || (Microsoft = {})),
function(n) {
    var t;
    (function(n) {
        "use strict";
        var t = function() {
            function n() {
                this.ver = 1;
                this.sampleRate = 100;
                this.tags = {}
            }
            return n
        }();
        n.Envelope = t
    })(t = n.Telemetry || (n.Telemetry = {}))
}(Microsoft || (Microsoft = {}));
__extends = this && this.__extends || function(n, t) {
        function r() {
            this.constructor = n
        }
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        r.prototype = t.prototype;
        n.prototype = new r
    },
    function(n) {
        var t;
        (function(t) {
            var i;
            (function(i) {
                var r;
                (function(i) {
                    "use strict";
                    var r = function(n) {
                        function r(r, u) {
                            var f = this;
                            n.call(this);
                            this.name = i.DataSanitizer.sanitizeString(u) || t.Util.NotSpecified;
                            this.data = r;
                            this.time = t.Util.toISOStringForIE8(new Date);
                            this.aiDataContract = {
                                time: t.FieldType.Required,
                                iKey: t.FieldType.Required,
                                name: t.FieldType.Required,
                                sampleRate: function() {
                                    return f.sampleRate == 100 ? t.FieldType.Hidden : t.FieldType.Required
                                },
                                tags: t.FieldType.Required,
                                data: t.FieldType.Required
                            }
                        }
                        return __extends(r, n), r
                    }(n.Telemetry.Envelope);
                    i.Envelope = r
                })(r = i.Common || (i.Common = {}))
            })(i = t.Telemetry || (t.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(t) {
            var i;
            (function(t) {
                var i;
                (function(t) {
                    "use strict";
                    var i = function(n) {
                        function t() {
                            n.apply(this, arguments);
                            this.aiDataContract = {}
                        }
                        return __extends(t, n), t
                    }(n.Telemetry.Base);
                    t.Base = i
                })(i = t.Common || (t.Common = {}))
            })(i = t.Telemetry || (t.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        var t = function() {
            function n() {
                this.applicationVersion = "ai.application.ver";
                this.applicationBuild = "ai.application.build";
                this.applicationTypeId = "ai.application.typeId";
                this.applicationId = "ai.application.applicationId";
                this.deviceId = "ai.device.id";
                this.deviceIp = "ai.device.ip";
                this.deviceLanguage = "ai.device.language";
                this.deviceLocale = "ai.device.locale";
                this.deviceModel = "ai.device.model";
                this.deviceNetwork = "ai.device.network";
                this.deviceNetworkName = "ai.device.networkName";
                this.deviceOEMName = "ai.device.oemName";
                this.deviceOS = "ai.device.os";
                this.deviceOSVersion = "ai.device.osVersion";
                this.deviceRoleInstance = "ai.device.roleInstance";
                this.deviceRoleName = "ai.device.roleName";
                this.deviceScreenResolution = "ai.device.screenResolution";
                this.deviceType = "ai.device.type";
                this.deviceMachineName = "ai.device.machineName";
                this.deviceVMName = "ai.device.vmName";
                this.locationIp = "ai.location.ip";
                this.operationId = "ai.operation.id";
                this.operationName = "ai.operation.name";
                this.operationParentId = "ai.operation.parentId";
                this.operationRootId = "ai.operation.rootId";
                this.operationSyntheticSource = "ai.operation.syntheticSource";
                this.operationIsSynthetic = "ai.operation.isSynthetic";
                this.operationCorrelationVector = "ai.operation.correlationVector";
                this.sessionId = "ai.session.id";
                this.sessionIsFirst = "ai.session.isFirst";
                this.sessionIsNew = "ai.session.isNew";
                this.userAccountAcquisitionDate = "ai.user.accountAcquisitionDate";
                this.userAccountId = "ai.user.accountId";
                this.userAgent = "ai.user.userAgent";
                this.userId = "ai.user.id";
                this.userStoreRegion = "ai.user.storeRegion";
                this.userAuthUserId = "ai.user.authUserId";
                this.userAnonymousUserAcquisitionDate = "ai.user.anonUserAcquisitionDate";
                this.userAuthenticatedUserAcquisitionDate = "ai.user.authUserAcquisitionDate";
                this.sampleRate = "ai.sample.sampleRate";
                this.cloudName = "ai.cloud.name";
                this.cloudRoleVer = "ai.cloud.roleVer";
                this.cloudEnvironment = "ai.cloud.environment";
                this.cloudLocation = "ai.cloud.location";
                this.cloudDeploymentUnit = "ai.cloud.deploymentUnit";
                this.serverDeviceOS = "ai.serverDevice.os";
                this.serverDeviceOSVer = "ai.serverDevice.osVer";
                this.internalSdkVersion = "ai.internal.sdkVersion";
                this.internalAgentVersion = "ai.internal.agentVersion";
                this.internalDataCollectorReceivedTime = "ai.internal.dataCollectorReceivedTime";
                this.internalProfileId = "ai.internal.profileId";
                this.internalProfileClassId = "ai.internal.profileClassId";
                this.internalAccountId = "ai.internal.accountId";
                this.internalApplicationName = "ai.internal.applicationName";
                this.internalInstrumentationKey = "ai.internal.instrumentationKey";
                this.internalTelemetryItemId = "ai.internal.telemetryItemId";
                this.internalApplicationType = "ai.internal.applicationType";
                this.internalRequestSource = "ai.internal.requestSource";
                this.internalFlowType = "ai.internal.flowType";
                this.internalIsAudit = "ai.internal.isAudit";
                this.internalTrackingSourceId = "ai.internal.trackingSourceId";
                this.internalTrackingType = "ai.internal.trackingType";
                this.internalIsDiagnosticExample = "ai.internal.isDiagnosticExample"
            }
            return n
        }();
        n.ContextTagKeys = t
    }(AI || (AI = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function() {
                "use strict"
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(n) {
                "use strict";
                var t = function() {
                    function n() {}
                    return n
                }();
                n.Application = t
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function() {
                "use strict"
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(n) {
                "use strict";
                var t = function() {
                    function n() {
                        this.id = "browser";
                        this.type = "Browser"
                    }
                    return n
                }();
                n.Device = t
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function() {
                "use strict"
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function() {
                    function t() {
                        this.sdkVersion = "javascript:" + n.Version;
                        this.agentVersion = n.SnippetVersion ? "snippet:" + n.SnippetVersion : undefined
                    }
                    return t
                }();
                t.Internal = i
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function() {
                "use strict"
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(n) {
                "use strict";
                var t = function() {
                    function n() {}
                    return n
                }();
                n.Location = t
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function() {
                "use strict"
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function() {
                    function t() {
                        this.id = n.Util.newId();
                        window && window.location && window.location.pathname && (this.name = window.location.pathname)
                    }
                    return t
                }();
                t.Operation = i
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t = function() {
                function t() {
                    this.hashCodeGeneragor = new n.HashCodeScoreGenerator
                }
                return t.prototype.getSamplingScore = function(n) {
                    var t = new AI.ContextTagKeys;
                    return n.tags[t.userId] ? this.hashCodeGeneragor.getHashCodeScore(n.tags[t.userId]) : n.tags[t.operationId] ? this.hashCodeGeneragor.getHashCodeScore(n.tags[t.operationId]) : Math.random()
                }, t
            }();
            n.SamplingScoreGenerator = t
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function() {
                "use strict"
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function() {
                    function t(t) {
                        this.INT_MAX_VALUE = 2147483647;
                        (t > 100 || t < 0) && (n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_SampleRateOutOfRange, "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.", {
                            samplingRate: t
                        })), this.sampleRate = 100);
                        this.sampleRate = t;
                        this.samplingScoreGenerator = new n.SamplingScoreGenerator
                    }
                    return t.prototype.isSampledIn = function(n) {
                        if (this.sampleRate == 100) return !0;
                        var t = this.samplingScoreGenerator.getSamplingScore(n);
                        return t < this.sampleRate
                    }, t
                }();
                t.Sample = i
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        (function(n) {
            n[n.Start = 0] = "Start";
            n[n.End = 1] = "End"
        })(n.SessionState || (n.SessionState = {}));
        var t = n.SessionState
    }(AI || (AI = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function() {
                "use strict"
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function() {
                        function n() {}
                        return n
                    }(),
                    r;
                t.Session = i;
                r = function() {
                    function t(n) {
                        n || (n = {});
                        typeof n.sessionExpirationMs == "function" || (n.sessionExpirationMs = function() {
                            return t.acquisitionSpan
                        });
                        typeof n.sessionRenewalMs == "function" || (n.sessionRenewalMs = function() {
                            return t.renewalSpan
                        });
                        this.config = n;
                        this.automaticSession = new i
                    }
                    return t.prototype.update = function() {
                        this.automaticSession.id || this.initializeAutomaticSession();
                        var i = n.dateTime.Now(),
                            r = i - this.automaticSession.acquisitionDate > this.config.sessionExpirationMs(),
                            u = i - this.automaticSession.renewalDate > this.config.sessionRenewalMs();
                        r || u ? (this.automaticSession.isFirst = undefined, this.renew()) : (!this.cookieUpdatedTimestamp || i - this.cookieUpdatedTimestamp > t.cookieUpdateInterval) && (this.automaticSession.renewalDate = i, this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate))
                    }, t.prototype.backup = function() {
                        this.setStorage(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate)
                    }, t.prototype.initializeAutomaticSession = function() {
                        var t = n.Util.getCookie("ai_session"),
                            i;
                        t && typeof t.split == "function" ? this.initializeAutomaticSessionWithData(t) : (i = n.Util.getStorage("ai_session"), i && this.initializeAutomaticSessionWithData(i));
                        this.automaticSession.id || (this.automaticSession.isFirst = !0, this.renew())
                    }, t.prototype.initializeAutomaticSessionWithData = function(t) {
                        var i = t.split("|"),
                            r, u;
                        i.length > 0 && (this.automaticSession.id = i[0]);
                        try {
                            i.length > 1 && (r = +i[1], this.automaticSession.acquisitionDate = +new Date(r), this.automaticSession.acquisitionDate = this.automaticSession.acquisitionDate > 0 ? this.automaticSession.acquisitionDate : 0);
                            i.length > 2 && (u = +i[2], this.automaticSession.renewalDate = +new Date(u), this.automaticSession.renewalDate = this.automaticSession.renewalDate > 0 ? this.automaticSession.renewalDate : 0)
                        } catch (f) {
                            n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_ErrorParsingAISessionCookie, "Error parsing ai_session cookie, session will be reset: " + n.Util.getExceptionName(f), {
                                exception: n.Util.dump(f)
                            }))
                        }
                        this.automaticSession.renewalDate == 0 && n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_SessionRenewalDateIsZero, "AI session renewal date is 0, session will be reset."))
                    }, t.prototype.renew = function() {
                        var t = n.dateTime.Now();
                        this.automaticSession.id = n.Util.newId();
                        this.automaticSession.acquisitionDate = t;
                        this.automaticSession.renewalDate = t;
                        this.setCookie(this.automaticSession.id, this.automaticSession.acquisitionDate, this.automaticSession.renewalDate);
                        n.Util.canUseLocalStorage() || n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_BrowserDoesNotSupportLocalStorage, "Browser does not support local storage. Session durations will be inaccurate."))
                    }, t.prototype.setCookie = function(t, i, r) {
                        var f = i + this.config.sessionExpirationMs(),
                            e = r + this.config.sessionRenewalMs(),
                            u = new Date,
                            s = [t, i, r],
                            o;
                        f < e ? u.setTime(f) : u.setTime(e);
                        o = this.config.cookieDomain ? this.config.cookieDomain() : null;
                        n.Util.setCookie("ai_session", s.join("|") + ";expires=" + u.toUTCString(), o);
                        this.cookieUpdatedTimestamp = n.dateTime.Now()
                    }, t.prototype.setStorage = function(t, i, r) {
                        n.Util.setStorage("ai_session", [t, i, r].join("|"))
                    }, t.acquisitionSpan = 864e5, t.renewalSpan = 18e5, t.cookieUpdateInterval = 6e4, t
                }();
                t._SessionManager = r
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function() {
                "use strict"
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function() {
                    function t(i) {
                        var s = n.Util.getCookie(t.userCookieName),
                            e, u, o, h, c, f, r;
                        s && (e = s.split(t.cookieSeparator), e.length > 0 && (this.id = e[0]));
                        this.config = i;
                        this.id || (this.id = n.Util.newId(), u = new Date, o = n.Util.toISOStringForIE8(u), this.accountAcquisitionDate = o, u.setTime(u.getTime() + 31536e6), h = [this.id, o], c = this.config.cookieDomain ? this.config.cookieDomain() : undefined, n.Util.setCookie(t.userCookieName, h.join(t.cookieSeparator) + ";expires=" + u.toUTCString(), c), n.Util.removeStorage("ai_session"));
                        this.accountId = i.accountId ? i.accountId() : undefined;
                        f = n.Util.getCookie(t.authUserCookieName);
                        f && (f = decodeURI(f), r = f.split(t.cookieSeparator), r[0] && (this.authenticatedId = r[0]), r.length > 1 && r[1] && (this.accountId = r[1]))
                    }
                    return t.prototype.setAuthenticatedUserContext = function(i, r) {
                        var f = !this.validateUserInput(i) || r && !this.validateUserInput(r),
                            u;
                        if (f) {
                            n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_SetAuthContextFailedAccountName, "Setting auth user context failed. User auth/account id should be of type string, and not contain commas, semi-colons, equal signs, spaces, or vertical-bars."));
                            return
                        }
                        this.authenticatedId = i;
                        u = this.authenticatedId;
                        r && (this.accountId = r, u = [this.authenticatedId, this.accountId].join(t.cookieSeparator));
                        n.Util.setCookie(t.authUserCookieName, encodeURI(u), this.config.cookieDomain())
                    }, t.prototype.clearAuthenticatedUserContext = function() {
                        this.authenticatedId = null;
                        this.accountId = null;
                        n.Util.deleteCookie(t.authUserCookieName)
                    }, t.prototype.validateUserInput = function(n) {
                        return typeof n != "string" || !n || n.match(/,|;|=| |\|/) ? !1 : !0
                    }, t.cookieSeparator = "|", t.userCookieName = "ai_user", t.authUserCookieName = "ai_authUser", t
                }();
                t.User = i
            })(t = n.Context || (n.Context = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            "use strict";
            var t = function() {
                function t() {}
                return t.reset = function() {
                    t.isEnabled() && (n.Util.setSessionStorage(t.ITEMS_QUEUED_KEY, "0"), n.Util.setSessionStorage(t.ISSUES_REPORTED_KEY, "0"), t.itemsRestoredFromSessionBuffer = 0)
                }, t.isEnabled = function() {
                    return t.enabled && t.appInsights != null && t.appInsights.context._sender._XMLHttpRequestSupported && n.Util.canUseSessionStorage()
                }, t.getIssuesReported = function() {
                    return !t.isEnabled() || isNaN(+n.Util.getSessionStorage(t.ISSUES_REPORTED_KEY)) ? 0 : +n.Util.getSessionStorage(t.ISSUES_REPORTED_KEY)
                }, t.incrementItemsQueued = function() {
                    try {
                        if (t.isEnabled()) {
                            var i = t.getNumberOfLostItems();
                            ++i;
                            n.Util.setSessionStorage(t.ITEMS_QUEUED_KEY, i.toString())
                        }
                    } catch (r) {}
                }, t.decrementItemsQueued = function(i) {
                    try {
                        if (t.isEnabled()) {
                            var r = t.getNumberOfLostItems();
                            r -= i;
                            r < 0 && (r = 0);
                            n.Util.setSessionStorage(t.ITEMS_QUEUED_KEY, r.toString())
                        }
                    } catch (u) {}
                }, t.getNumberOfLostItems = function() {
                    var i = 0;
                    try {
                        t.isEnabled() && (i = isNaN(+n.Util.getSessionStorage(t.ITEMS_QUEUED_KEY)) ? 0 : +n.Util.getSessionStorage(t.ITEMS_QUEUED_KEY))
                    } catch (r) {
                        i = 0
                    }
                    return i
                }, t.reportLostItems = function() {
                    var r, i;
                    try {
                        t.isEnabled() && t.getIssuesReported() < t.LIMIT_PER_SESSION && t.getNumberOfLostItems() > 0 && (r = t.getNumberOfLostItems() - t.itemsRestoredFromSessionBuffer, t.appInsights.trackTrace('AI (Internal): Internal report DATALOSS:"' + r + '"', null), t.appInsights.flush(), i = t.getIssuesReported(), ++i, n.Util.setSessionStorage(t.ISSUES_REPORTED_KEY, i.toString()))
                    } catch (u) {
                        n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_FailedToReportDataLoss, "Failed to report data loss: " + n.Util.getExceptionName(u), {
                            exception: n.Util.dump(u)
                        }))
                    } finally {
                        try {
                            t.reset()
                        } catch (u) {}
                    }
                }, t.enabled = !1, t.itemsRestoredFromSessionBuffer = 0, t.LIMIT_PER_SESSION = 10, t.ITEMS_QUEUED_KEY = "AI_itemsQueued", t.ISSUES_REPORTED_KEY = "AI_lossIssuesReported", t
            }();
            n.DataLossAnalyzer = t
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            "use strict";
            var i = function() {
                    function n(n) {
                        this._config = n;
                        this._buffer = []
                    }
                    return n.prototype.enqueue = function(n) {
                        this._buffer.push(n)
                    }, n.prototype.count = function() {
                        return this._buffer.length
                    }, n.prototype.clear = function() {
                        this._buffer.length = 0
                    }, n.prototype.getItems = function() {
                        return this._buffer.slice(0)
                    }, n.prototype.batchPayloads = function(n) {
                        return n && n.length > 0 ? this._config.emitLineDelimitedJson() ? n.join("\n") : "[" + n.join(",") + "]" : null
                    }, n.prototype.markAsSent = function() {
                        this.clear()
                    }, n.prototype.clearSent = function() {}, n
                }(),
                t;
            n.ArraySendBuffer = i;
            t = function() {
                function t(i) {
                    this._bufferFullMessageSent = !1;
                    this._config = i;
                    var r = this.getBuffer(t.BUFFER_KEY),
                        u = this.getBuffer(t.SENT_BUFFER_KEY);
                    this._buffer = r.concat(u);
                    this._buffer.length > t.MAX_BUFFER_SIZE && (this._buffer.length = t.MAX_BUFFER_SIZE);
                    n.DataLossAnalyzer.itemsRestoredFromSessionBuffer = this._buffer.length;
                    this.setBuffer(t.SENT_BUFFER_KEY, []);
                    this.setBuffer(t.BUFFER_KEY, this._buffer)
                }
                return t.prototype.enqueue = function(i) {
                    if (this._buffer.length >= t.MAX_BUFFER_SIZE) {
                        this._bufferFullMessageSent || (n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_SessionStorageBufferFull, "Maximum buffer size reached: " + this._buffer.length)), this._bufferFullMessageSent = !0);
                        return
                    }
                    this._buffer.push(i);
                    this.setBuffer(t.BUFFER_KEY, this._buffer)
                }, t.prototype.count = function() {
                    return this._buffer.length
                }, t.prototype.clear = function() {
                    this._buffer.length = 0;
                    this.setBuffer(t.BUFFER_KEY, []);
                    this.setBuffer(t.SENT_BUFFER_KEY, []);
                    this._bufferFullMessageSent = !1
                }, t.prototype.getItems = function() {
                    return this._buffer.slice(0)
                }, t.prototype.batchPayloads = function(n) {
                    return n && n.length > 0 ? this._config.emitLineDelimitedJson() ? n.join("\n") : "[" + n.join(",") + "]" : null
                }, t.prototype.markAsSent = function(i) {
                    this._buffer = this.removePayloadsFromBuffer(i, this._buffer);
                    this.setBuffer(t.BUFFER_KEY, this._buffer);
                    var r = this.getBuffer(t.SENT_BUFFER_KEY);
                    r instanceof Array && i instanceof Array && (r = r.concat(i), r.length > t.MAX_BUFFER_SIZE && (n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.USRACT_SessionStorageBufferFull, "Sent buffer reached its maximum size: " + r.length)), r.length = t.MAX_BUFFER_SIZE), this.setBuffer(t.SENT_BUFFER_KEY, r))
                }, t.prototype.clearSent = function(n) {
                    var i = this.getBuffer(t.SENT_BUFFER_KEY);
                    i = this.removePayloadsFromBuffer(n, i);
                    this.setBuffer(t.SENT_BUFFER_KEY, i)
                }, t.prototype.removePayloadsFromBuffer = function(n, t) {
                    var u = [],
                        i, r, f;
                    for (i in t) {
                        r = !1;
                        for (f in n)
                            if (n[f] === t[i]) {
                                r = !0;
                                break
                            }
                        r || u.push(t[i])
                    }
                    return u
                }, t.prototype.getBuffer = function(t) {
                    var i, r;
                    try {
                        if (i = n.Util.getSessionStorage(t), i && (r = JSON.parse(i), r)) return r
                    } catch (u) {
                        n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_FailedToRestoreStorageBuffer, " storage key: " + t + ", " + n.Util.getExceptionName(u), {
                            exception: n.Util.dump(u)
                        }))
                    }
                    return []
                }, t.prototype.setBuffer = function(t, i) {
                    try {
                        var u = JSON.stringify(i);
                        n.Util.setSessionStorage(t, u)
                    } catch (r) {
                        n.Util.setSessionStorage(t, JSON.stringify([]));
                        n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_FailedToSetStorageBuffer, " storage key: " + t + ", " + n.Util.getExceptionName(r) + ". Buffer cleared", {
                            exception: n.Util.dump(r)
                        }))
                    }
                }, t.BUFFER_KEY = "AI_buffer", t.SENT_BUFFER_KEY = "AI_sentBuffer", t.MAX_BUFFER_SIZE = 2e3, t
            }();
            n.SessionStorageSendBuffer = t
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            "use strict";
            var t = function() {
                function t(t) {
                    if (this._XMLHttpRequestSupported = !1, this._consecutiveErrors = 0, this._retryAt = null, this._lastSend = 0, this._config = t, this._sender = null, this._buffer = n.Util.canUseSessionStorage() && this._config.enableSessionStorageBuffer() ? new n.SessionStorageSendBuffer(t) : new n.ArraySendBuffer(t), typeof XMLHttpRequest != "undefined") {
                        var i = new XMLHttpRequest;
                        "withCredentials" in i ? (this._sender = this._xhrSender, this._XMLHttpRequestSupported = !0) : typeof XDomainRequest != "undefined" && (this._sender = this._xdrSender)
                    }
                }
                return t.prototype.send = function(t) {
                    try {
                        if (this._config.disableTelemetry()) return;
                        if (!t) {
                            n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_CannotSendEmptyTelemetry, "Cannot send empty telemetry"));
                            return
                        }
                        if (!this._sender) {
                            n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_SenderNotInitialized, "Sender was not initialized"));
                            return
                        }
                        var i = n.Serializer.serialize(t),
                            f = this._buffer.getItems(),
                            r = this._buffer.batchPayloads(f);
                        r && r.length + i.length > this._config.maxBatchSizeInBytes() && this.triggerSend();
                        this._buffer.enqueue(i);
                        this._setupTimer();
                        n.DataLossAnalyzer.incrementItemsQueued()
                    } catch (u) {
                        n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_FailedAddingTelemetryToBuffer, "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + n.Util.getExceptionName(u), {
                            exception: n.Util.dump(u)
                        }))
                    }
                }, t.prototype._setupTimer = function() {
                    var i = this,
                        n, t;
                    this._timeoutHandle || (n = this._retryAt ? Math.max(0, this._retryAt - Date.now()) : 0, t = Math.max(this._config.maxBatchInterval(), n), this._timeoutHandle = setTimeout(function() {
                        i.triggerSend()
                    }, t))
                }, t.prototype._getSizeInBytes = function(n) {
                    var r = 0,
                        t, i;
                    if (n && n.length)
                        for (t = 0; t < n.length; t++) i = n[t], i && i.length && (r += i.length);
                    return r
                }, t.prototype.triggerSend = function(t) {
                    var i = !0,
                        r;
                    typeof t == "boolean" && (i = t);
                    try {
                        this._config.disableTelemetry() ? this._buffer.clear() : (this._buffer.count() > 0 && (r = this._buffer.getItems(), this._sender(r, i)), this._lastSend = +new Date);
                        clearTimeout(this._timeoutHandle);
                        this._timeoutHandle = null;
                        this._retryAt = null
                    } catch (u) {
                        (!n.Util.getIEVersion() || n.Util.getIEVersion() > 9) && n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_TransmissionFailed, "Telemetry transmission failed, some telemetry will be lost: " + n.Util.getExceptionName(u), {
                            exception: n.Util.dump(u)
                        }))
                    }
                }, t.prototype._setRetryTime = function() {
                    var n = 10,
                        t, i, r, u;
                    this._consecutiveErrors <= 1 ? t = n : (i = (Math.pow(2, this._consecutiveErrors) - 1) / 2, r = Math.floor(Math.random() * i * n) + 1, t = Math.max(Math.min(r, 3600), n));
                    u = Date.now() + t * 1e3;
                    this._retryAt = u
                }, t.prototype._parseResponse = function(t) {
                    try {
                        var i = JSON.parse(t);
                        if (i && i.itemsReceived && i.itemsReceived >= i.itemsAccepted && i.itemsReceived - i.itemsAccepted == i.errors.length) return i
                    } catch (r) {
                        n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_InvalidBackendResponse, "Cannot parse the response. " + n.Util.getExceptionName(r)))
                    }
                    return null
                }, t.prototype._isRetriable = function(n) {
                    return n == 408 || n == 429 || n == 500 || n == 503
                }, t.prototype._resendPayload = function(n) {
                    var t, i;
                    if (n && n.length !== 0) {
                        for (this._buffer.clearSent(n), this._consecutiveErrors++, t = 0; t < n.length; t++) i = n[t], this._buffer.enqueue(i);
                        this._setRetryTime();
                        this._setupTimer()
                    }
                }, t.prototype._xhrSender = function(t, i) {
                    var u = this,
                        r = new XMLHttpRequest,
                        f;
                    r[n.AjaxMonitor.DisabledPropertyName] = !0;
                    r.open("POST", this._config.endpointUrl(), i);
                    r.setRequestHeader("Content-type", "application/json");
                    r.onreadystatechange = function() {
                        return u._xhrReadyStateChange(r, t, t.length)
                    };
                    r.onerror = function(n) {
                        return u._onError(t, r.responseText || r.response || "", n)
                    };
                    f = this._buffer.batchPayloads(t);
                    r.send(f);
                    this._buffer.markAsSent(t)
                }, t.prototype._xdrSender = function(t) {
                    var r = this,
                        i = new XDomainRequest,
                        u, f, e;
                    if (i.onload = function() {
                            return r._xdrOnLoad(i, t)
                        }, i.onerror = function(n) {
                            return r._onError(t, i.responseText || "", n)
                        }, u = window.location.protocol, this._config.endpointUrl().lastIndexOf(u, 0) !== 0) {
                        n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_TransmissionFailed, ". Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol."));
                        this._buffer.clear();
                        return
                    }
                    f = this._config.endpointUrl().replace(/^(https?:)/, "");
                    i.open("POST", f);
                    e = this._buffer.batchPayloads(t);
                    i.send(e);
                    this._buffer.markAsSent(t)
                }, t.prototype._xhrReadyStateChange = function(t, i, r) {
                    if (t.readyState === 4)
                        if ((t.status < 200 || t.status >= 300) && t.status !== 0) !this._config.isRetryDisabled() && this._isRetriable(t.status) ? (this._resendPayload(i), n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_TransmissionFailed, ". Response code " + t.status + ". Will retry to send " + i.length + " items."))) : this._onError(i, t.responseText || t.response || "");
                        else if (t.status === 206) {
                        var u = this._parseResponse(t.responseText || t.response);
                        u && !this._config.isRetryDisabled() ? this._onPartialSuccess(i, u) : this._onError(i, t.responseText || t.response || "")
                    } else this._consecutiveErrors = 0, this._onSuccess(i, r)
                }, t.prototype._xdrOnLoad = function(n, t) {
                    if (n && (n.responseText + "" == "200" || n.responseText === "")) this._consecutiveErrors = 0, this._onSuccess(t, 0);
                    else {
                        var i = this._parseResponse(n.responseText);
                        i && i.itemsReceived && i.itemsReceived > i.itemsAccepted && !this._config.isRetryDisabled() ? this._onPartialSuccess(t, i) : this._onError(t, n && n.responseText || "")
                    }
                }, t.prototype._onPartialSuccess = function(t, i) {
                    for (var e, o, r = [], u = [], s = i.errors.reverse(), f = 0; f < s.length; f++) e = s[f], o = t.splice(e.index, 1)[0], this._isRetriable(e.statusCode) ? u.push(o) : r.push(o);
                    t.length > 0 && this._onSuccess(t, i.itemsAccepted);
                    r.length > 0 && this._onError(r, ["partial success", i.itemsAccepted, "of", i.itemsReceived].join(" "));
                    u.length > 0 && (this._resendPayload(u), n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_TransmissionFailed, "Partial success. Delivered: " + t.length + ", Failed: " + r.length + ". Will retry to send " + u.length + " our of " + i.itemsReceived + " items")))
                }, t.prototype._onError = function(t, i) {
                    n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_OnError, "Failed to send telemetry.", {
                        message: i
                    }));
                    this._buffer.clearSent(t)
                }, t.prototype._onSuccess = function(t, i) {
                    n.DataLossAnalyzer.decrementItemsQueued(i);
                    this._buffer.clearSent(t)
                }, t
            }();
            n.Sender = t
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            "use strict";
            var t = function() {
                function t() {
                    this.hashCodeGeneragor = new n.HashCodeScoreGenerator
                }
                return t.prototype.isEnabled = function(n, t) {
                    return this.hashCodeGeneragor.getHashCodeScore(n) < t
                }, t
            }();
            n.SplitTest = t
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            "use strict";
            var t = function() {
                function n() {}
                return n
            }();
            n.Domain = t
        })(t = n.Telemetry || (n.Telemetry = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        (function(n) {
            n[n.Verbose = 0] = "Verbose";
            n[n.Information = 1] = "Information";
            n[n.Warning = 2] = "Warning";
            n[n.Error = 3] = "Error";
            n[n.Critical = 4] = "Critical"
        })(n.SeverityLevel || (n.SeverityLevel = {}));
        var t = n.SeverityLevel
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        var t = function(n) {
            function t() {
                n.call(this);
                this.ver = 2;
                this.properties = {};
                n.call(this)
            }
            return __extends(t, n), t
        }(Microsoft.Telemetry.Domain);
        n.MessageData = t
    }(AI || (AI = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                var i;
                (function(t) {
                    "use strict";
                    var i = function() {
                        function t() {}
                        return t.sanitizeKeyAndAddUniqueness = function(n, i) {
                            var e = n.length,
                                r = t.sanitizeKey(n),
                                f, u;
                            if (r.length !== e) {
                                for (f = 0, u = r; i[u] !== undefined;) f++, u = r.substring(0, t.MAX_NAME_LENGTH - 3) + t.padNumber(f);
                                r = u
                            }
                            return r
                        }, t.sanitizeKey = function(i) {
                            return i && (i = n.Util.trim(i.toString()), i.length > t.MAX_NAME_LENGTH && (i = i.substring(0, t.MAX_NAME_LENGTH), n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_NameTooLong, "name is too long.  It has been truncated to " + t.MAX_NAME_LENGTH + " characters.", {
                                name: i
                            })))), i
                        }, t.sanitizeString = function(i) {
                            return i && (i = n.Util.trim(i), i.toString().length > t.MAX_STRING_LENGTH && (i = i.toString().substring(0, t.MAX_STRING_LENGTH), n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_StringValueTooLong, "string value is too long. It has been truncated to " + t.MAX_STRING_LENGTH + " characters.", {
                                value: i
                            })))), i
                        }, t.sanitizeUrl = function(i) {
                            return i && (i = n.Util.trim(i), i.length > t.MAX_URL_LENGTH && (i = i.substring(0, t.MAX_URL_LENGTH), n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_UrlTooLong, "url is too long, it has been truncated to " + t.MAX_URL_LENGTH + " characters.", {
                                url: i
                            })))), i
                        }, t.sanitizeMessage = function(i) {
                            return i && i.length > t.MAX_MESSAGE_LENGTH && (i = i.substring(0, t.MAX_MESSAGE_LENGTH), n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_MessageTruncated, "message is too long, it has been truncated to " + t.MAX_MESSAGE_LENGTH + " characters.", {
                                message: i
                            }))), i
                        }, t.sanitizeException = function(i) {
                            return i && i.length > t.MAX_EXCEPTION_LENGTH && (i = i.substring(0, t.MAX_EXCEPTION_LENGTH), n._InternalLogging.throwInternalUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.USRACT_ExceptionTruncated, "exception is too long, it has been truncated to " + t.MAX_EXCEPTION_LENGTH + " characters.", {
                                exception: i
                            }))), i
                        }, t.sanitizeProperties = function(n) {
                            var r, i, u;
                            if (n) {
                                r = {};
                                for (i in n) u = t.sanitizeString(n[i]), i = t.sanitizeKeyAndAddUniqueness(i, r), r[i] = u;
                                n = r
                            }
                            return n
                        }, t.sanitizeMeasurements = function(n) {
                            var r, i, u;
                            if (n) {
                                r = {};
                                for (i in n) u = n[i], i = t.sanitizeKeyAndAddUniqueness(i, r), r[i] = u;
                                n = r
                            }
                            return n
                        }, t.padNumber = function(n) {
                            var t = "00" + n;
                            return t.substr(t.length - 3)
                        }, t.MAX_NAME_LENGTH = 150, t.MAX_STRING_LENGTH = 1024, t.MAX_URL_LENGTH = 2048, t.MAX_MESSAGE_LENGTH = 32768, t.MAX_EXCEPTION_LENGTH = 32768, t
                    }();
                    t.DataSanitizer = i
                })(i = t.Common || (t.Common = {}))
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function(i) {
                    function r(r, u) {
                        i.call(this);
                        this.aiDataContract = {
                            ver: n.FieldType.Required,
                            message: n.FieldType.Required,
                            severityLevel: n.FieldType.Default,
                            measurements: n.FieldType.Default,
                            properties: n.FieldType.Default
                        };
                        r = r || n.Util.NotSpecified;
                        this.message = t.Common.DataSanitizer.sanitizeMessage(r);
                        this.properties = t.Common.DataSanitizer.sanitizeProperties(u)
                    }
                    return __extends(r, i), r.envelopeType = "Microsoft.ApplicationInsights.{0}.Message", r.dataType = "MessageData", r
                }(AI.MessageData);
                t.Trace = i
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        var t = function(n) {
            function t() {
                n.call(this);
                this.ver = 2;
                this.properties = {};
                this.measurements = {};
                n.call(this)
            }
            return __extends(t, n), t
        }(Microsoft.Telemetry.Domain);
        n.EventData = t
    }(AI || (AI = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function(t) {
                    function i(i, r, u) {
                        t.call(this);
                        this.aiDataContract = {
                            ver: n.FieldType.Required,
                            name: n.FieldType.Required,
                            properties: n.FieldType.Default,
                            measurements: n.FieldType.Default
                        };
                        this.name = n.Telemetry.Common.DataSanitizer.sanitizeString(i) || n.Util.NotSpecified;
                        this.properties = n.Telemetry.Common.DataSanitizer.sanitizeProperties(r);
                        this.measurements = n.Telemetry.Common.DataSanitizer.sanitizeMeasurements(u)
                    }
                    return __extends(i, t), i.envelopeType = "Microsoft.ApplicationInsights.{0}.Event", i.dataType = "EventData", i
                }(AI.EventData);
                t.Event = i
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        var t = function() {
            function n() {
                this.hasFullStack = !0;
                this.parsedStack = []
            }
            return n
        }();
        n.ExceptionDetails = t
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        var t = function(n) {
            function t() {
                n.call(this);
                this.ver = 2;
                this.exceptions = [];
                this.properties = {};
                this.measurements = {};
                n.call(this)
            }
            return __extends(t, n), t
        }(Microsoft.Telemetry.Domain);
        n.ExceptionData = t
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        var t = function() {
            function n() {}
            return n
        }();
        n.StackFrame = t
    }(AI || (AI = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var u = function(t) {
                        function i(i, u, f, e, o) {
                            t.call(this);
                            this.aiDataContract = {
                                ver: n.FieldType.Required,
                                handledAt: n.FieldType.Required,
                                exceptions: n.FieldType.Required,
                                severityLevel: n.FieldType.Default,
                                properties: n.FieldType.Default,
                                measurements: n.FieldType.Default
                            };
                            this.properties = n.Telemetry.Common.DataSanitizer.sanitizeProperties(f);
                            this.measurements = n.Telemetry.Common.DataSanitizer.sanitizeMeasurements(e);
                            this.handledAt = u || "unhandled";
                            this.exceptions = [new r(i)];
                            o && (this.severityLevel = o)
                        }
                        return __extends(i, t), i.CreateSimpleException = function(n, t, i, r, u, f, e) {
                            return {
                                handledAt: e || "unhandled",
                                exceptions: [{
                                    hasFullStack: !0,
                                    message: n,
                                    stack: u,
                                    typeName: t,
                                    parsedStack: [{
                                        level: 0,
                                        assembly: i,
                                        fileName: r,
                                        line: f,
                                        method: "unknown"
                                    }]
                                }]
                            }
                        }, i.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception", i.dataType = "ExceptionData", i
                    }(AI.ExceptionData),
                    r, i;
                t.Exception = u;
                r = function(r) {
                    function u(i) {
                        r.call(this);
                        this.aiDataContract = {
                            id: n.FieldType.Default,
                            outerId: n.FieldType.Default,
                            typeName: n.FieldType.Required,
                            message: n.FieldType.Required,
                            hasFullStack: n.FieldType.Default,
                            stack: n.FieldType.Default,
                            parsedStack: n.FieldType.Array
                        };
                        this.typeName = t.Common.DataSanitizer.sanitizeString(i.name) || n.Util.NotSpecified;
                        this.message = t.Common.DataSanitizer.sanitizeMessage(i.message) || n.Util.NotSpecified;
                        var u = i.stack;
                        this.parsedStack = this.parseStack(u);
                        this.stack = t.Common.DataSanitizer.sanitizeException(u);
                        this.hasFullStack = n.Util.isArray(this.parsedStack) && this.parsedStack.length > 0
                    }
                    return __extends(u, r), u.prototype.parseStack = function(n) {
                        var t = undefined,
                            e, l, o, r, a, s, h, p, w, b;
                        if (typeof n == "string") {
                            for (e = n.split("\n"), t = [], l = 0, o = 0, r = 0; r <= e.length; r++) a = e[r], i.regex.test(a) && (s = new i(e[r], l++), o += s.sizeInBytes, t.push(s));
                            if (h = 32768, o > h)
                                for (var u = 0, f = t.length - 1, v = 0, c = u, y = f; u < f;) {
                                    if (p = t[u].sizeInBytes, w = t[f].sizeInBytes, v += p + w, v > h) {
                                        b = y - c + 1;
                                        t.splice(c, b);
                                        break
                                    }
                                    c = u;
                                    y = f;
                                    u++;
                                    f--
                                }
                        }
                        return t
                    }, u
                }(AI.ExceptionDetails);
                i = function(t) {
                    function i(r, u) {
                        t.call(this);
                        this.sizeInBytes = 0;
                        this.aiDataContract = {
                            level: n.FieldType.Required,
                            method: n.FieldType.Required,
                            assembly: n.FieldType.Default,
                            fileName: n.FieldType.Default,
                            line: n.FieldType.Default
                        };
                        this.level = u;
                        this.method = "<no_method>";
                        this.assembly = n.Util.trim(r);
                        var f = r.match(i.regex);
                        f && f.length >= 5 && (this.method = n.Util.trim(f[2]) || this.method, this.fileName = n.Util.trim(f[4]), this.line = parseInt(f[5]) || 0);
                        this.sizeInBytes += this.method.length;
                        this.sizeInBytes += this.fileName.length;
                        this.sizeInBytes += this.assembly.length;
                        this.sizeInBytes += i.baseSize;
                        this.sizeInBytes += this.level.toString().length;
                        this.sizeInBytes += this.line.toString().length
                    }
                    return __extends(i, t), i.regex = /^([\s]+at)?(.*?)(\@|\s\(|\s)([^\(\@\n]+):([0-9]+):([0-9]+)(\)?)$/, i.baseSize = 58, i
                }(AI.StackFrame);
                t._StackFrame = i
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        var t = function(n) {
            function t() {
                n.call(this);
                this.ver = 2;
                this.metrics = [];
                this.properties = {};
                n.call(this)
            }
            return __extends(t, n), t
        }(Microsoft.Telemetry.Domain);
        n.MetricData = t
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        (function(n) {
            n[n.Measurement = 0] = "Measurement";
            n[n.Aggregation = 1] = "Aggregation"
        })(n.DataPointType || (n.DataPointType = {}));
        var t = n.DataPointType
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        var t = function() {
            function t() {
                this.kind = n.DataPointType.Measurement
            }
            return t
        }();
        n.DataPoint = t
    }(AI || (AI = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                var i;
                (function(t) {
                    "use strict";
                    var i = function(t) {
                        function i() {
                            t.apply(this, arguments);
                            this.aiDataContract = {
                                name: n.FieldType.Required,
                                kind: n.FieldType.Default,
                                value: n.FieldType.Required,
                                count: n.FieldType.Default,
                                min: n.FieldType.Default,
                                max: n.FieldType.Default,
                                stdDev: n.FieldType.Default
                            }
                        }
                        return __extends(i, t), i
                    }(AI.DataPoint);
                    t.DataPoint = i
                })(i = t.Common || (t.Common = {}))
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(t) {
            var i;
            (function(i) {
                "use strict";
                var r = function(r) {
                    function u(u, f, e, o, s, h) {
                        r.call(this);
                        this.aiDataContract = {
                            ver: t.FieldType.Required,
                            metrics: t.FieldType.Required,
                            properties: t.FieldType.Default
                        };
                        var c = new n.ApplicationInsights.Telemetry.Common.DataPoint;
                        c.count = e > 0 ? e : undefined;
                        c.max = isNaN(s) || s === null ? undefined : s;
                        c.min = isNaN(o) || o === null ? undefined : o;
                        c.name = i.Common.DataSanitizer.sanitizeString(u) || t.Util.NotSpecified;
                        c.value = f;
                        this.metrics = [c];
                        this.properties = t.Telemetry.Common.DataSanitizer.sanitizeProperties(h)
                    }
                    return __extends(u, r), u.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric", u.dataType = "MetricData", u
                }(AI.MetricData);
                i.Metric = r
            })(i = t.Telemetry || (t.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        var t = function(n) {
            function t() {
                n.call(this);
                this.ver = 2;
                this.properties = {};
                this.measurements = {};
                n.call(this)
            }
            return __extends(t, n), t
        }(n.EventData);
        n.PageViewData = t
    }(AI || (AI = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function(i) {
                    function r(r, u, f, e, o) {
                        i.call(this);
                        this.aiDataContract = {
                            ver: n.FieldType.Required,
                            name: n.FieldType.Default,
                            url: n.FieldType.Default,
                            duration: n.FieldType.Default,
                            properties: n.FieldType.Default,
                            measurements: n.FieldType.Default
                        };
                        this.url = t.Common.DataSanitizer.sanitizeUrl(u);
                        this.name = t.Common.DataSanitizer.sanitizeString(r) || n.Util.NotSpecified;
                        isNaN(f) || (this.duration = n.Util.msToTimeSpan(f));
                        this.properties = n.Telemetry.Common.DataSanitizer.sanitizeProperties(e);
                        this.measurements = n.Telemetry.Common.DataSanitizer.sanitizeMeasurements(o)
                    }
                    return __extends(r, i), r.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview", r.dataType = "PageviewData", r
                }(AI.PageViewData);
                t.PageView = i
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        var t = function(n) {
            function t() {
                n.call(this);
                this.ver = 2;
                this.properties = {};
                this.measurements = {};
                n.call(this)
            }
            return __extends(t, n), t
        }(n.PageViewData);
        n.PageViewPerfData = t
    }(AI || (AI = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function(i) {
                    function r(u, f, e, o, s) {
                        var h;
                        if (i.call(this), this.aiDataContract = {
                                ver: n.FieldType.Required,
                                name: n.FieldType.Default,
                                url: n.FieldType.Default,
                                duration: n.FieldType.Default,
                                perfTotal: n.FieldType.Default,
                                networkConnect: n.FieldType.Default,
                                sentRequest: n.FieldType.Default,
                                receivedResponse: n.FieldType.Default,
                                domProcessing: n.FieldType.Default,
                                properties: n.FieldType.Default,
                                measurements: n.FieldType.Default
                            }, this.isValid = !1, h = r.getPerformanceTiming(), h) {
                            var c = r.getDuration(h.navigationStart, h.loadEventEnd),
                                l = r.getDuration(h.navigationStart, h.connectEnd),
                                a = r.getDuration(h.requestStart, h.responseStart),
                                v = r.getDuration(h.responseStart, h.responseEnd),
                                y = r.getDuration(h.responseEnd, h.loadEventEnd);
                            c == 0 ? n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_ErrorPVCalc, "error calculating page view performance.", {
                                total: c,
                                network: l,
                                request: a,
                                response: v,
                                dom: y
                            })) : r.shouldCollectDuration(c, l, a, v, y) ? c < Math.floor(l) + Math.floor(a) + Math.floor(v) + Math.floor(y) ? n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_ClientPerformanceMathError, "client performance math error.", {
                                total: c,
                                network: l,
                                request: a,
                                response: v,
                                dom: y
                            })) : (this.durationMs = c, this.perfTotal = this.duration = n.Util.msToTimeSpan(c), this.networkConnect = n.Util.msToTimeSpan(l), this.sentRequest = n.Util.msToTimeSpan(a), this.receivedResponse = n.Util.msToTimeSpan(v), this.domProcessing = n.Util.msToTimeSpan(y), this.isValid = !0) : n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_InvalidDurationValue, "Invalid page load duration value. Browser perf data won't be sent.", {
                                total: c,
                                network: l,
                                request: a,
                                response: v,
                                dom: y
                            }))
                        }
                        this.url = t.Common.DataSanitizer.sanitizeUrl(f);
                        this.name = t.Common.DataSanitizer.sanitizeString(u) || n.Util.NotSpecified;
                        this.properties = n.Telemetry.Common.DataSanitizer.sanitizeProperties(o);
                        this.measurements = n.Telemetry.Common.DataSanitizer.sanitizeMeasurements(s)
                    }
                    return __extends(r, i), r.prototype.getIsValid = function() {
                        return this.isValid
                    }, r.prototype.getDurationMs = function() {
                        return this.durationMs
                    }, r.getPerformanceTiming = function() {
                        return r.isPerformanceTimingSupported() ? window.performance.timing : null
                    }, r.isPerformanceTimingSupported = function() {
                        return typeof window != "undefined" && window.performance && window.performance.timing
                    }, r.isPerformanceTimingDataReady = function() {
                        var n = window.performance.timing;
                        return n.domainLookupStart > 0 && n.navigationStart > 0 && n.responseStart > 0 && n.requestStart > 0 && n.loadEventEnd > 0 && n.responseEnd > 0 && n.connectEnd > 0 && n.domLoading > 0
                    }, r.getDuration = function(n, t) {
                        var i = undefined;
                        return isNaN(n) || isNaN(t) || (i = Math.max(t - n, 0)), i
                    }, r.shouldCollectDuration = function() {
                        for (var u, f, t, i = [], n = 0; n < arguments.length; n++) i[+n] = arguments[n];
                        if (u = navigator.userAgent, f = u ? u.toLowerCase().indexOf("googlebot") !== -1 : !1, f) return !1;
                        for (t = 0; t < i.length; t++)
                            if (i[t] >= r.MAX_DURATION_ALLOWED) return !1;
                        return !0
                    }, r.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance", r.dataType = "PageviewPerformanceData", r.MAX_DURATION_ALLOWED = 36e5, r
                }(AI.PageViewPerfData);
                t.PageViewPerformance = i
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function() {
            "use strict"
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function() {
            "use strict"
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(t) {
            "use strict";
            var i = function() {
                function i(n) {
                    this._config = n;
                    this._sender = new t.Sender(n);
                    typeof window != "undefined" && (this._sessionManager = new t.Context._SessionManager(n), this.application = new t.Context.Application, this.device = new t.Context.Device, this.internal = new t.Context.Internal, this.location = new t.Context.Location, this.user = new t.Context.User(n), this.operation = new t.Context.Operation, this.session = new t.Context.Session, this.sample = new t.Context.Sample(n.sampleRate()))
                }
                return i.prototype.addTelemetryInitializer = function(n) {
                    this.telemetryInitializers = this.telemetryInitializers || [];
                    this.telemetryInitializers.push(n)
                }, i.prototype.track = function(n) {
                    return n ? (n.name === t.Telemetry.PageView.envelopeType && t._InternalLogging.resetInternalMessageCount(), this.session && typeof this.session.id != "string" && this._sessionManager.update(), this._track(n)) : t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.USRACT_TrackArgumentsNotSpecified, "cannot call .track() with a null or undefined argument")), n
                }, i.prototype._track = function(n) {
                    var i, f, r, u, o;
                    this.session && (typeof this.session.id == "string" ? this._applySessionContext(n, this.session) : this._applySessionContext(n, this._sessionManager.automaticSession));
                    this._applyApplicationContext(n, this.application);
                    this._applyDeviceContext(n, this.device);
                    this._applyInternalContext(n, this.internal);
                    this._applyLocationContext(n, this.location);
                    this._applySampleContext(n, this.sample);
                    this._applyUserContext(n, this.user);
                    this._applyOperationContext(n, this.operation);
                    n.iKey = this._config.instrumentationKey();
                    i = !1;
                    try {
                        for (this.telemetryInitializers = this.telemetryInitializers || [], f = this.telemetryInitializers.length, r = 0; r < f; ++r)
                            if (u = this.telemetryInitializers[r], u && u.apply(null, [n]) === !1) {
                                i = !0;
                                break
                            }
                    } catch (e) {
                        i = !0;
                        t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.USRACT_TelemetryInitializerFailed, "One of telemetry initializers failed, telemetry item will not be sent: " + t.Util.getExceptionName(e), {
                            exception: t.Util.dump(e)
                        }))
                    }
                    return i || (this._fixDepricatedValues(n), n.name === t.Telemetry.Metric.envelopeType || this.sample.isSampledIn(n) ? (o = this._config.instrumentationKey().replace(/-/g, ""), n.name = n.name.replace("{0}", o), this._sender.send(n)) : t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.WARNING, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_TelemetrySampledAndNotSent, "Telemetry is sampled and not sent to the AI service.", {
                        SampleRate: this.sample.sampleRate
                    }))), n
                }, i.prototype._applyApplicationContext = function(n, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        typeof t.ver == "string" && (n.tags[i.applicationVersion] = t.ver);
                        typeof t.build == "string" && (n.tags[i.applicationBuild] = t.build)
                    }
                }, i.prototype._applyDeviceContext = function(n, t) {
                    var i = new AI.ContextTagKeys;
                    t && (typeof t.id == "string" && (n.tags[i.deviceId] = t.id), typeof t.ip == "string" && (n.tags[i.deviceIp] = t.ip), typeof t.language == "string" && (n.tags[i.deviceLanguage] = t.language), typeof t.locale == "string" && (n.tags[i.deviceLocale] = t.locale), typeof t.model == "string" && (n.tags[i.deviceModel] = t.model), typeof t.network != "undefined" && (n.tags[i.deviceNetwork] = t.network), typeof t.oemName == "string" && (n.tags[i.deviceOEMName] = t.oemName), typeof t.os == "string" && (n.tags[i.deviceOS] = t.os), typeof t.osversion == "string" && (n.tags[i.deviceOSVersion] = t.osversion), typeof t.resolution == "string" && (n.tags[i.deviceScreenResolution] = t.resolution), typeof t.type == "string" && (n.tags[i.deviceType] = t.type))
                }, i.prototype._applyInternalContext = function(n, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        typeof t.agentVersion == "string" && (n.tags[i.internalAgentVersion] = t.agentVersion);
                        typeof t.sdkVersion == "string" && (n.tags[i.internalSdkVersion] = t.sdkVersion)
                    }
                }, i.prototype._applyLocationContext = function(n, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        typeof t.ip == "string" && (n.tags[i.locationIp] = t.ip)
                    }
                }, i.prototype._applyOperationContext = function(n, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        typeof t.id == "string" && (n.tags[i.operationId] = t.id);
                        typeof t.name == "string" && (n.tags[i.operationName] = t.name);
                        typeof t.parentId == "string" && (n.tags[i.operationParentId] = t.parentId);
                        typeof t.rootId == "string" && (n.tags[i.operationRootId] = t.rootId);
                        typeof t.syntheticSource == "string" && (n.tags[i.operationSyntheticSource] = t.syntheticSource)
                    }
                }, i.prototype._applySampleContext = function(n, t) {
                    t && (n.sampleRate = t.sampleRate)
                }, i.prototype._applySessionContext = function(n, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        typeof t.id == "string" && (n.tags[i.sessionId] = t.id);
                        typeof t.isFirst != "undefined" && (n.tags[i.sessionIsFirst] = t.isFirst)
                    }
                }, i.prototype._applyUserContext = function(n, t) {
                    if (t) {
                        var i = new AI.ContextTagKeys;
                        typeof t.accountId == "string" && (n.tags[i.userAccountId] = t.accountId);
                        typeof t.agent == "string" && (n.tags[i.userAgent] = t.agent);
                        typeof t.id == "string" && (n.tags[i.userId] = t.id);
                        typeof t.authenticatedId == "string" && (n.tags[i.userAuthUserId] = t.authenticatedId);
                        typeof t.storeRegion == "string" && (n.tags[i.userStoreRegion] = t.storeRegion)
                    }
                }, i.prototype._fixDepricatedValues = function(i) {
                    var r, u;
                    try {
                        r = i.data;
                        r && r.baseType === n.ApplicationInsights.Telemetry.RemoteDependencyData.dataType && (u = r.baseData, u && this._fixRDDDepricatedValues(u))
                    } catch (f) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.WARNING, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_FailedToFixDepricatedValues, "Failed to parse the base data object, to fix the depricated values " + t.Util.getExceptionName(f), {
                            exception: t.Util.dump(f)
                        }))
                    }
                }, i.prototype._fixRDDDepricatedValues = function(n) {
                    n.commandName && (n.data = n.commandName, n.commandName = undefined);
                    n.dependencyTypeName && (n.type = n.dependencyTypeName, n.dependencyTypeName = undefined);
                    n.value && n.value !== 0 && (n.duration = t.Util.msToTimeSpan(n.value), n.value = undefined);
                    n.kind && (n.kind = undefined);
                    n.dependencySource && (n.dependencySource = undefined);
                    n.async && (n.async = undefined);
                    n.count && (n.count = undefined);
                    n.min && (n.min = undefined);
                    n.max && (n.max = undefined);
                    n.stdDev && (n.stdDev = undefined);
                    n.dependencyKind && (n.dependencyKind = undefined)
                }, i
            }();
            t.TelemetryContext = i
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(t) {
            "use strict";
            var i = function(n) {
                function t() {
                    n.call(this)
                }
                return __extends(t, n), t
            }(n.Telemetry.Base);
            t.Data = i
        })(t = n.Telemetry || (n.Telemetry = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(t) {
            var i;
            (function(i) {
                var r;
                (function(i) {
                    "use strict";
                    var r = function(n) {
                        function i(i, r) {
                            n.call(this);
                            this.aiDataContract = {
                                baseType: t.FieldType.Required,
                                baseData: t.FieldType.Required
                            };
                            this.baseType = i;
                            this.baseData = r
                        }
                        return __extends(i, n), i
                    }(n.Telemetry.Data);
                    i.Data = r
                })(r = i.Common || (i.Common = {}))
            })(i = t.Telemetry || (t.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function() {
                    function i(n, t) {
                        this.pageViewPerformanceSent = !1;
                        this.overridePageViewDuration = !1;
                        this.overridePageViewDuration = t;
                        this.appInsights = n
                    }
                    return i.prototype.trackPageView = function(i, r, u, f, e) {
                        var o = this,
                            s, h, c, l, a;
                        if (typeof i != "string" && (i = window.document && window.document.title || ""), typeof r != "string" && (r = window.location && window.location.href || ""), s = !1, h = undefined, t.PageViewPerformance.isPerformanceTimingSupported() ? (c = t.PageViewPerformance.getPerformanceTiming().navigationStart, h = t.PageViewPerformance.getDuration(c, +new Date), t.PageViewPerformance.shouldCollectDuration(h) || (h = undefined)) : (this.appInsights.sendPageViewInternal(i, r, isNaN(e) ? undefined : e, u, f), this.appInsights.flush(), s = !0), s || !this.overridePageViewDuration && isNaN(e) || (this.appInsights.sendPageViewInternal(i, r, isNaN(e) ? h : e, u, f), this.appInsights.flush(), s = !0), l = 6e4, !t.PageViewPerformance.isPerformanceTimingSupported()) {
                            n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.WARNING, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_NavigationTimingNotSupported, "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info."));
                            return
                        }
                        a = setInterval(function() {
                            try {
                                if (t.PageViewPerformance.isPerformanceTimingDataReady()) {
                                    clearInterval(a);
                                    var e = new t.PageViewPerformance(i, r, null, u, f);
                                    e.getIsValid() || s ? (s || o.appInsights.sendPageViewInternal(i, r, e.getDurationMs(), u, f), o.pageViewPerformanceSent || (o.appInsights.sendPageViewPerformanceInternal(e), o.pageViewPerformanceSent = !0), o.appInsights.flush()) : (o.appInsights.sendPageViewInternal(i, r, h, u, f), o.appInsights.flush())
                                } else t.PageViewPerformance.getDuration(c, +new Date) > l && (clearInterval(a), s || (o.appInsights.sendPageViewInternal(i, r, l, u, f), o.appInsights.flush()))
                            } catch (v) {
                                n._InternalLogging.throwInternalNonUserActionable(n.LoggingSeverity.CRITICAL, new n._InternalLogMessage(n._InternalMessageId.NONUSRACT_TrackPVFailedCalc, "trackPageView failed on page load calculation: " + n.Util.getExceptionName(v), {
                                    exception: n.Util.dump(v)
                                }))
                            }
                        }, 100)
                    }, i
                }();
                t.PageViewManager = i
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var r = function() {
                        function t(n) {
                            this.prevPageVisitDataKeyName = "prevPageVisitData";
                            this.pageVisitTimeTrackingHandler = n
                        }
                        return t.prototype.trackPreviousPageVisit = function(t, i) {
                            try {
                                var r = this.restartPageVisitTimer(t, i);
                                r && this.pageVisitTimeTrackingHandler(r.pageName, r.pageUrl, r.pageVisitTime)
                            } catch (u) {
                                n._InternalLogging.warnToConsole("Auto track page visit time failed, metric will not be collected: " + n.Util.dump(u))
                            }
                        }, t.prototype.restartPageVisitTimer = function(t, i) {
                            try {
                                var r = this.stopPageVisitTimer();
                                return this.startPageVisitTimer(t, i), r
                            } catch (u) {
                                return n._InternalLogging.warnToConsole("Call to restart failed: " + n.Util.dump(u)), null
                            }
                        }, t.prototype.startPageVisitTimer = function(t, r) {
                            try {
                                if (n.Util.canUseSessionStorage()) {
                                    if (n.Util.getSessionStorage(this.prevPageVisitDataKeyName) != null) throw new Error("Cannot call startPageVisit consecutively without first calling stopPageVisit");
                                    var u = new i(t, r),
                                        f = JSON.stringify(u);
                                    n.Util.setSessionStorage(this.prevPageVisitDataKeyName, f)
                                }
                            } catch (e) {
                                n._InternalLogging.warnToConsole("Call to start failed: " + n.Util.dump(e))
                            }
                        }, t.prototype.stopPageVisitTimer = function() {
                            var r, i, t;
                            try {
                                return n.Util.canUseSessionStorage() ? (r = Date.now(), i = n.Util.getSessionStorage(this.prevPageVisitDataKeyName), i ? (t = JSON.parse(i), t.pageVisitTime = r - t.pageVisitStartTime, n.Util.removeSessionStorage(this.prevPageVisitDataKeyName), t) : null) : null
                            } catch (u) {
                                return n._InternalLogging.warnToConsole("Stop page visit timer failed: " + n.Util.dump(u)), null
                            }
                        }, t
                    }(),
                    i;
                t.PageVisitTimeManager = r;
                i = function() {
                    function n(n, t) {
                        this.pageVisitStartTime = Date.now();
                        this.pageName = n;
                        this.pageUrl = t
                    }
                    return n
                }();
                t.PageVisitData = i
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        (function(n) {
            n[n.SQL = 0] = "SQL";
            n[n.Http = 1] = "Http";
            n[n.Other = 2] = "Other"
        })(n.DependencyKind || (n.DependencyKind = {}));
        var t = n.DependencyKind
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        (function(n) {
            n[n.Undefined = 0] = "Undefined";
            n[n.Aic = 1] = "Aic";
            n[n.Apmc = 2] = "Apmc"
        })(n.DependencySourceType || (n.DependencySourceType = {}));
        var t = n.DependencySourceType
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        var t = function(t) {
            function i() {
                t.call(this);
                this.ver = 2;
                this.kind = n.DataPointType.Aggregation;
                this.dependencyKind = n.DependencyKind.Other;
                this.success = !0;
                this.dependencySource = n.DependencySourceType.Apmc;
                this.properties = {};
                this.measurements = {};
                t.call(this)
            }
            return __extends(i, t), i
        }(Microsoft.Telemetry.Domain);
        n.RemoteDependencyData = t
    }(AI || (AI = {})),
    function(n) {
        var t;
        (function(n) {
            var t;
            (function(t) {
                "use strict";
                var i = function(i) {
                    function r(r, u, f, e, o, s, h, c, l) {
                        var v, a;
                        i.call(this);
                        this.aiDataContract = {
                            id: n.FieldType.Required,
                            ver: n.FieldType.Required,
                            name: n.FieldType.Default,
                            resultCode: n.FieldType.Default,
                            duration: n.FieldType.Default,
                            success: n.FieldType.Default,
                            data: n.FieldType.Default,
                            target: n.FieldType.Default,
                            type: n.FieldType.Default,
                            properties: n.FieldType.Default,
                            measurements: n.FieldType.Default,
                            kind: n.FieldType.Default,
                            value: n.FieldType.Default,
                            count: n.FieldType.Default,
                            min: n.FieldType.Default,
                            max: n.FieldType.Default,
                            stdDev: n.FieldType.Default,
                            dependencyKind: n.FieldType.Default,
                            async: n.FieldType.Default,
                            dependencySource: n.FieldType.Default,
                            commandName: n.FieldType.Default,
                            dependencyTypeName: n.FieldType.Default
                        };
                        this.id = r;
                        this.duration = n.Util.msToTimeSpan(e);
                        this.success = o;
                        this.resultCode = s + "";
                        this.dependencyKind = AI.DependencyKind.Http;
                        this.type = "Ajax";
                        this.data = t.Common.DataSanitizer.sanitizeUrl(f);
                        u && u.length > 0 ? (v = n.UrlHelper.parseUrl(u), this.target = v.host, v.pathname != null ? (a = v.pathname.length === 0 ? "/" : v.pathname, a.charAt(0) !== "/" && (a = "/" + a), this.name = t.Common.DataSanitizer.sanitizeString(h ? h + " " + a : a)) : this.name = t.Common.DataSanitizer.sanitizeString(u)) : (this.target = f, this.name = f);
                        this.properties = n.Telemetry.Common.DataSanitizer.sanitizeProperties(c);
                        this.measurements = n.Telemetry.Common.DataSanitizer.sanitizeMeasurements(l)
                    }
                    return __extends(r, i), r.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency", r.dataType = "RemoteDependencyData", r
                }(AI.RemoteDependencyData);
                t.RemoteDependencyData = i
            })(t = n.Telemetry || (n.Telemetry = {}))
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function() {
            "use strict"
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function() {
            "use strict"
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(t) {
            "use strict";
            var r, i;
            t.Version = "1.0.8";
            t.SnippetVersion;
            r = function() {
                function r(u) {
                    var f = this,
                        e, o, s;
                    if (this._trackAjaxAttempts = 0, this.config = u || {}, e = r.defaultConfig, e !== undefined)
                        for (o in e) this.config[o] === undefined && (this.config[o] = e[o]);
                    t._InternalLogging.verboseLogging = function() {
                        return f.config.verboseLogging
                    };
                    t._InternalLogging.enableDebugExceptions = function() {
                        return f.config.enableDebug
                    };
                    s = {
                        instrumentationKey: function() {
                            return f.config.instrumentationKey
                        },
                        accountId: function() {
                            return f.config.accountId
                        },
                        sessionRenewalMs: function() {
                            return f.config.sessionRenewalMs
                        },
                        sessionExpirationMs: function() {
                            return f.config.sessionExpirationMs
                        },
                        endpointUrl: function() {
                            return f.config.endpointUrl
                        },
                        emitLineDelimitedJson: function() {
                            return f.config.emitLineDelimitedJson
                        },
                        maxBatchSizeInBytes: function() {
                            return f.config.maxBatchSizeInBytes
                        },
                        maxBatchInterval: function() {
                            return f.config.maxBatchInterval
                        },
                        disableTelemetry: function() {
                            return f.config.disableTelemetry
                        },
                        sampleRate: function() {
                            return f.config.samplingPercentage
                        },
                        cookieDomain: function() {
                            return f.config.cookieDomain
                        },
                        enableSessionStorageBuffer: function() {
                            return f.config.enableSessionStorageBuffer
                        },
                        isRetryDisabled: function() {
                            return f.config.isRetryDisabled
                        }
                    };
                    this.config.isCookieUseDisabled && t.Util.disableCookies();
                    this.config.isStorageUseDisabled && t.Util.disableStorage();
                    this.context = new t.TelemetryContext(s);
                    this._pageViewManager = new n.ApplicationInsights.Telemetry.PageViewManager(this, this.config.overridePageViewDuration);
                    this._eventTracking = new i("trackEvent");
                    this._eventTracking.action = function(n, i, r, u, e) {
                        e ? isNaN(e.duration) && (e.duration = r) : e = {
                            duration: r
                        };
                        var o = new t.Telemetry.Event(n, u, e),
                            s = new t.Telemetry.Common.Data(t.Telemetry.Event.dataType, o),
                            h = new t.Telemetry.Common.Envelope(s, t.Telemetry.Event.envelopeType);
                        f.context.track(h)
                    };
                    this._pageTracking = new i("trackPageView");
                    this._pageTracking.action = function(n, t, i, r, u) {
                        f.sendPageViewInternal(n, t, i, r, u)
                    };
                    this._pageVisitTimeManager = new t.Telemetry.PageVisitTimeManager(function(n, t, i) {
                        return f.trackPageVisitTime(n, t, i)
                    });
                    this.config.disableAjaxTracking || new n.ApplicationInsights.AjaxMonitor(this);
                    this.config.isPerfAnalyzerEnabled && (this._performanceAnalyzer = new n.ApplicationInsights.PerformanceAnalyzer(this))
                }
                return r.prototype.sendPageViewInternal = function(n, i, r, u, f) {
                    var e = new t.Telemetry.PageView(n, i, r, u, f),
                        o = new t.Telemetry.Common.Data(t.Telemetry.PageView.dataType, e),
                        s = new t.Telemetry.Common.Envelope(o, t.Telemetry.PageView.envelopeType);
                    this.context.track(s);
                    this._trackAjaxAttempts = 0
                }, r.prototype.sendPageViewPerformanceInternal = function(n) {
                    var i = new t.Telemetry.Common.Data(t.Telemetry.PageViewPerformance.dataType, n),
                        r = new t.Telemetry.Common.Envelope(i, t.Telemetry.PageViewPerformance.envelopeType);
                    this.context.track(r)
                }, r.prototype.startTrackPage = function(n) {
                    try {
                        typeof n != "string" && (n = window.document && window.document.title || "");
                        this._pageTracking.start(n)
                    } catch (i) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_StartTrackFailed, "startTrackPage failed, page view may not be collected: " + t.Util.getExceptionName(i), {
                            exception: t.Util.dump(i)
                        }))
                    }
                }, r.prototype.stopTrackPage = function(n, i, r, u) {
                    try {
                        typeof n != "string" && (n = window.document && window.document.title || "");
                        typeof i != "string" && (i = window.location && window.location.href || "");
                        this._pageTracking.stop(n, i, r, u);
                        this.config.autoTrackPageVisitTime && this._pageVisitTimeManager.trackPreviousPageVisit(n, i)
                    } catch (f) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_StopTrackFailed, "stopTrackPage failed, page view will not be collected: " + t.Util.getExceptionName(f), {
                            exception: t.Util.dump(f)
                        }))
                    }
                }, r.prototype.trackPageView = function(n, i, r, u, f) {
                    try {
                        this._pageViewManager.trackPageView(n, i, r, u, f);
                        this.config.autoTrackPageVisitTime && this._pageVisitTimeManager.trackPreviousPageVisit(n, i)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_TrackPVFailed, "trackPageView failed, page view will not be collected: " + t.Util.getExceptionName(e), {
                            exception: t.Util.dump(e)
                        }))
                    }
                }, r.prototype.startTrackEvent = function(n) {
                    try {
                        this._eventTracking.start(n)
                    } catch (i) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_StartTrackEventFailed, "startTrackEvent failed, event will not be collected: " + t.Util.getExceptionName(i), {
                            exception: t.Util.dump(i)
                        }))
                    }
                }, r.prototype.stopTrackEvent = function(n, i, r) {
                    try {
                        this._eventTracking.stop(n, undefined, i, r)
                    } catch (u) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_StopTrackEventFailed, "stopTrackEvent failed, event will not be collected: " + t.Util.getExceptionName(u), {
                            exception: t.Util.dump(u)
                        }))
                    }
                }, r.prototype.trackEvent = function(n, i, r) {
                    try {
                        var f = new t.Telemetry.Event(n, i, r),
                            e = new t.Telemetry.Common.Data(t.Telemetry.Event.dataType, f),
                            o = new t.Telemetry.Common.Envelope(e, t.Telemetry.Event.envelopeType);
                        this.context.track(o)
                    } catch (u) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_TrackEventFailed, "trackEvent failed, event will not be collected: " + t.Util.getExceptionName(u), {
                            exception: t.Util.dump(u)
                        }))
                    }
                }, r.prototype.trackDependency = function(n, i, r, u, f, e, o, s, h) {
                    if (this.config.maxAjaxCallsPerView === -1 || this._trackAjaxAttempts < this.config.maxAjaxCallsPerView) {
                        var c = new t.Telemetry.RemoteDependencyData(n, r, u, f, e, o, i, s, h),
                            l = new t.Telemetry.Common.Data(t.Telemetry.RemoteDependencyData.dataType, c),
                            a = new t.Telemetry.Common.Envelope(l, t.Telemetry.RemoteDependencyData.envelopeType);
                        this.context.track(a)
                    } else this._trackAjaxAttempts === this.config.maxAjaxCallsPerView && t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.USRACT_MaxAjaxPerPVExceeded, "Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter."));
                    ++this._trackAjaxAttempts
                }, r.prototype.trackAjax = function(n, t, i, r, u, f) {
                    this.trackDependency(n, null, t, i, r, u, f)
                }, r.prototype.trackException = function(n, i, r, u, f) {
                    try {
                        if (!t.Util.isError(n)) try {
                            throw new Error(n);
                        } catch (o) {
                            n = o
                        }
                        var s = new t.Telemetry.Exception(n, i, r, u, f),
                            h = new t.Telemetry.Common.Data(t.Telemetry.Exception.dataType, s),
                            c = new t.Telemetry.Common.Envelope(h, t.Telemetry.Exception.envelopeType);
                        this.context.track(c)
                    } catch (e) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_TrackExceptionFailed, "trackException failed, exception will not be collected: " + t.Util.getExceptionName(e), {
                            exception: t.Util.dump(e)
                        }))
                    }
                }, r.prototype.trackMetric = function(n, i, r, u, f, e) {
                    try {
                        var s = new t.Telemetry.Metric(n, i, r, u, f, e),
                            h = new t.Telemetry.Common.Data(t.Telemetry.Metric.dataType, s),
                            c = new t.Telemetry.Common.Envelope(h, t.Telemetry.Metric.envelopeType);
                        this.context.track(c)
                    } catch (o) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_TrackMetricFailed, "trackMetric failed, metric will not be collected: " + t.Util.getExceptionName(o), {
                            exception: t.Util.dump(o)
                        }))
                    }
                }, r.prototype.trackTrace = function(n, i) {
                    try {
                        var u = new t.Telemetry.Trace(n, i),
                            f = new t.Telemetry.Common.Data(t.Telemetry.Trace.dataType, u),
                            e = new t.Telemetry.Common.Envelope(f, t.Telemetry.Trace.envelopeType);
                        this.context.track(e)
                    } catch (r) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.WARNING, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_TrackTraceFailed, "trackTrace failed, trace will not be collected: " + t.Util.getExceptionName(r), {
                            exception: t.Util.dump(r)
                        }))
                    }
                }, r.prototype.trackPageVisitTime = function(n, t, i) {
                    var r = {
                        PageName: n,
                        PageUrl: t
                    };
                    this.trackMetric("PageVisitTime", i, 1, i, i, r)
                }, r.prototype.flush = function() {
                    try {
                        this.context._sender.triggerSend()
                    } catch (n) {
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_FlushFailed, "flush failed, telemetry will not be collected: " + t.Util.getExceptionName(n), {
                            exception: t.Util.dump(n)
                        }))
                    }
                }, r.prototype.setAuthenticatedUserContext = function(n, i) {
                    try {
                        this.context.user.setAuthenticatedUserContext(n, i)
                    } catch (r) {
                        t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.WARNING, new t._InternalLogMessage(t._InternalMessageId.USRACT_SetAuthContextFailed, "Setting auth user context failed. " + t.Util.getExceptionName(r), {
                            exception: t.Util.dump(r)
                        }))
                    }
                }, r.prototype.clearAuthenticatedUserContext = function() {
                    try {
                        this.context.user.clearAuthenticatedUserContext()
                    } catch (n) {
                        t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.WARNING, new t._InternalLogMessage(t._InternalMessageId.USRACT_SetAuthContextFailed, "Clearing auth user context failed. " + t.Util.getExceptionName(n), {
                            exception: t.Util.dump(n)
                        }))
                    }
                }, r.prototype.SendCORSException = function(i) {
                    var r = n.ApplicationInsights.Telemetry.Exception.CreateSimpleException("Script error.", "Error", "unknown", "unknown", "The browser's same-origin policy prevents us from getting the details of this exception.The exception occurred in a script loaded from an origin different than the web page.For cross- domain error reporting you can use crossorigin attribute together with appropriate CORS HTTP headers.For more information please see http://www.w3.org/TR/cors/.", 0, null),
                        u, f;
                    r.properties = i;
                    u = new t.Telemetry.Common.Data(t.Telemetry.Exception.dataType, r);
                    f = new t.Telemetry.Common.Envelope(u, t.Telemetry.Exception.envelopeType);
                    this.context.track(f)
                }, r.prototype._onerror = function(n, i, r, u, f) {
                    var e, o, h, c;
                    try {
                        e = {
                            url: i ? i : document.URL
                        };
                        t.Util.isCrossOriginError(n, i, r, u, f) ? this.SendCORSException(e) : (t.Util.isError(f) || (o = "window.onerror@" + e.url + ":" + r + ":" + (u || 0), f = new Error(n), f.stack = o), this.trackException(f, null, e))
                    } catch (s) {
                        h = f ? f.name + ", " + f.message : "null";
                        c = t.Util.dump(s);
                        t._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_ExceptionWhileLoggingError, "_onerror threw exception while logging error, error will not be collected: " + t.Util.getExceptionName(s), {
                            exception: c,
                            errorString: h
                        }))
                    }
                }, r
            }();
            t.AppInsights = r;
            i = function() {
                function n(n) {
                    this._name = n;
                    this._events = {}
                }
                return n.prototype.start = function(n) {
                    typeof this._events[n] != "undefined" && t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.WARNING, new t._InternalLogMessage(t._InternalMessageId.USRACT_StartCalledMoreThanOnce, "start was called more than once for this event without calling stop.", {
                        name: this._name,
                        key: n
                    }));
                    this._events[n] = +new Date
                }, n.prototype.stop = function(n, i, r, u) {
                    var f = this._events[n],
                        e, o;
                    isNaN(f) ? t._InternalLogging.throwInternalUserActionable(t.LoggingSeverity.WARNING, new t._InternalLogMessage(t._InternalMessageId.USRACT_StopCalledWithoutStart, "stop was called without a corresponding start.", {
                        name: this._name,
                        key: n
                    })) : (e = +new Date, o = t.Telemetry.PageViewPerformance.getDuration(f, e), this.action(n, i, o, r, u));
                    delete this._events[n];
                    this._events[n] = undefined
                }, n
            }()
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function(t) {
            "use strict";
            var i = function() {
                function i(t) {
                    t.queue = t.queue || [];
                    var r = t.config || {};
                    if (r && !r.instrumentationKey)
                        if (r = t, r.iKey) n.ApplicationInsights.Version = "0.10.0.0", r.instrumentationKey = r.iKey;
                        else if (r.applicationInsightsId) n.ApplicationInsights.Version = "0.7.2.0", r.instrumentationKey = r.applicationInsightsId;
                    else throw new Error("Cannot load Application Insights SDK, no instrumentationKey was provided.");
                    r = i.getDefaultConfig(r);
                    this.snippet = t;
                    this.config = r
                }
                return i.prototype.loadAppInsights = function() {
                    var t = new n.ApplicationInsights.AppInsights(this.config),
                        u, i, r;
                    return this.config.iKey && (u = t.trackPageView, t.trackPageView = function(n, i, r) {
                        u.apply(t, [null, n, i, r])
                    }), i = "logPageView", typeof this.snippet[i] == "function" && (t[i] = function(n, i, r) {
                        t.trackPageView(null, n, i, r)
                    }), r = "logEvent", typeof this.snippet[r] == "function" && (t[r] = function(n, i, r) {
                        t.trackEvent(n, i, r)
                    }), t
                }, i.prototype.emptyQueue = function() {
                    var f, i, e, u, o;
                    try {
                        if (n.ApplicationInsights.Util.isArray(this.snippet.queue)) {
                            for (f = this.snippet.queue.length, i = 0; i < f; i++) e = this.snippet.queue[i], e();
                            this.snippet.queue = undefined;
                            delete this.snippet.queue
                        }
                    } catch (r) {
                        u = {};
                        r && typeof r.toString == "function" && (u.exception = r.toString());
                        o = new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_FailedToSendQueuedTelemetry, "Failed to send queued telemetry", u);
                        n.ApplicationInsights._InternalLogging.throwInternalNonUserActionable(t.LoggingSeverity.WARNING, o)
                    }
                }, i.prototype.pollInteralLogs = function(t) {
                    return setInterval(function() {
                        for (var i = n.ApplicationInsights._InternalLogging.queue, u = i.length, r = 0; r < u; r++) t.trackTrace(i[r].message);
                        i.length = 0
                    }, this.config.diagnosticLogInterval)
                }, i.prototype.addHousekeepingBeforeUnload = function(i) {
                    if (!i.config.disableFlushOnBeforeUnload && "onbeforeunload" in window) {
                        var r = function() {
                            i.context._sender.triggerSend();
                            i.context._sessionManager.backup()
                        };
                        n.ApplicationInsights.Util.addEventHandler("beforeunload", r) || n.ApplicationInsights._InternalLogging.throwInternalNonUserActionable(n.ApplicationInsights.LoggingSeverity.CRITICAL, new t._InternalLogMessage(t._InternalMessageId.NONUSRACT_FailedToAddHandlerForOnBeforeUnload, "Could not add handler for beforeunload"))
                    }
                }, i.getDefaultConfig = function(n) {
                    return n || (n = {}), n.endpointUrl = n.endpointUrl || "https://dc.services.visualstudio.com/v2/track", n.sessionRenewalMs = 18e5, n.sessionExpirationMs = 864e5, n.maxBatchSizeInBytes = n.maxBatchSizeInBytes > 0 ? n.maxBatchSizeInBytes : 102400, n.maxBatchInterval = isNaN(n.maxBatchInterval) ? 15e3 : n.maxBatchInterval, n.enableDebug = t.Util.stringToBoolOrDefault(n.enableDebug), n.disableExceptionTracking = n.disableExceptionTracking !== undefined && n.disableExceptionTracking !== null ? t.Util.stringToBoolOrDefault(n.disableExceptionTracking) : !1, n.disableTelemetry = t.Util.stringToBoolOrDefault(n.disableTelemetry), n.verboseLogging = t.Util.stringToBoolOrDefault(n.verboseLogging), n.emitLineDelimitedJson = t.Util.stringToBoolOrDefault(n.emitLineDelimitedJson), n.diagnosticLogInterval = n.diagnosticLogInterval || 1e4, n.autoTrackPageVisitTime = t.Util.stringToBoolOrDefault(n.autoTrackPageVisitTime), (isNaN(n.samplingPercentage) || n.samplingPercentage <= 0 || n.samplingPercentage >= 100) && (n.samplingPercentage = 100), n.disableAjaxTracking = n.disableAjaxTracking !== undefined && n.disableAjaxTracking !== null ? t.Util.stringToBoolOrDefault(n.disableAjaxTracking) : !1, n.maxAjaxCallsPerView = isNaN(n.maxAjaxCallsPerView) ? 500 : n.maxAjaxCallsPerView, n.disableCorrelationHeaders = n.disableCorrelationHeaders !== undefined && n.disableCorrelationHeaders !== null ? t.Util.stringToBoolOrDefault(n.disableCorrelationHeaders) : !0, n.isPerfAnalyzerEnabled = n.isPerfAnalyzerEnabled !== undefined && n.isPerfAnalyzerEnabled !== null ? t.Util.stringToBoolOrDefault(n.isPerfAnalyzerEnabled) : !1, n.disableFlushOnBeforeUnload = n.disableFlushOnBeforeUnload !== undefined && n.disableFlushOnBeforeUnload !== null ? t.Util.stringToBoolOrDefault(n.disableFlushOnBeforeUnload) : !1, n.enableSessionStorageBuffer = n.enableSessionStorageBuffer !== undefined && n.enableSessionStorageBuffer !== null ? t.Util.stringToBoolOrDefault(n.enableSessionStorageBuffer) : !0, n.isRetryDisabled = n.isRetryDisabled !== undefined && n.isRetryDisabled !== null ? t.Util.stringToBoolOrDefault(n.isRetryDisabled) : !1, n.isCookieUseDisabled = n.isCookieUseDisabled !== undefined && n.isCookieUseDisabled !== null ? t.Util.stringToBoolOrDefault(n.isCookieUseDisabled) : !1, n.isStorageUseDisabled = n.isStorageUseDisabled !== undefined && n.isStorageUseDisabled !== null ? t.Util.stringToBoolOrDefault(n.isStorageUseDisabled) : !1, n
                }, i
            }();
            t.Initialization = i
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        var t;
        (function() {
            "use strict";
            var u, r, t, i, f;
            try {
                if (typeof window != "undefined" && typeof JSON != "undefined")
                    if (u = "appInsights", window[u] === undefined) n.ApplicationInsights.AppInsights.defaultConfig = n.ApplicationInsights.Initialization.getDefaultConfig();
                    else {
                        r = window[u] || {};
                        n.ApplicationInsights.SnippetVersion = r.version;
                        t = new n.ApplicationInsights.Initialization(r);
                        i = t.loadAppInsights();
                        for (f in i) r[f] = i[f];
                        t.emptyQueue();
                        t.pollInteralLogs(i);
                        t.addHousekeepingBeforeUnload(i)
                    }
            } catch (e) {
                n.ApplicationInsights._InternalLogging.warnToConsole("Failed to initialize AppInsights JS SDK: " + e.message)
            }
        })(t = n.ApplicationInsights || (n.ApplicationInsights = {}))
    }(Microsoft || (Microsoft = {})),
    function(n) {
        "use strict";
        var t = function(n) {
            function t() {
                n.call(this);
                this.ver = 2;
                this.properties = {};
                this.measurements = {};
                n.call(this)
            }
            return __extends(t, n), t
        }(n.PageViewData);
        n.AjaxCallData = t
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        var t = function(n) {
            function t() {
                n.call(this);
                this.ver = 2;
                this.properties = {};
                this.measurements = {};
                n.call(this)
            }
            return __extends(t, n), t
        }(Microsoft.Telemetry.Domain);
        n.RequestData = t
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        var t = function(t) {
            function i() {
                t.call(this);
                this.ver = 2;
                this.state = n.SessionState.Start;
                t.call(this)
            }
            return __extends(i, t), i
        }(Microsoft.Telemetry.Domain);
        n.SessionStateData = t
    }(AI || (AI = {})),
    function(n) {
        "use strict";
        (function(n) {
            n[n.Pass = 0] = "Pass";
            n[n.Fail = 1] = "Fail"
        })(n.TestResult || (n.TestResult = {}));
        var t = n.TestResult
    }(AI || (AI = {}))
