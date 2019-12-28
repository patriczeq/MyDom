/*
 *	myDOM.js
 *	Better, lighter jQuery syntax frendly framework
 *	version 1.0.8 (myDOM ajaxer)
 *	Patrik Eder 2019
 */
!(function(window) {
  "use strict";
  var MYD_ = function() {
    this._xhr_ = {
      default: {
        method: "GET",
        url: window.location.href,
        headers: [],
        post: {}
      },
      parse: true,
      sts: {
        200: [200, "OK"],
		201: [200, "Created"],
		202: [200, "Accepted"],
		203: [200, "Non-Authoritative Information (od HTTP/1.1)"],
		204: [200, "No Content"],
		205: [200, "Reset Content"],
		206: [200, "Partial Content"],
		207: [200, "Multi-Status (WebDAV) (RFC 4918)"],
		300: [300, "Multiple Choices"],
		301: [300, "Moved Permanently"],
		302: [300, "Found"],
		303: [300, "See Other (since HTTP/1.1)"],
		304: [300, "Not Modified"],
		305: [300, "Use Proxy (since HTTP/1.1)"],
		306: [300, "Switch Proxy"],
		307: [300, "Temporary Redirect (since HTTP/1.1)"],
		400: [400, "Bad Request"],
		401: [400, "Unauthorized"],
		402: [400, "Payment Required"],
		403: [400, "Forbidden"],
		404: [400, "Not Found"],
		405: [400, "Method Not Allowed"],
		406: [400, "Not Acceptable"],
		407: [400, "Proxy Authentication Required"],
		408: [400, "Request Timeout"],
		409: [400, "Conflict"],
		410: [400, "Gone"],
		411: [400, "Length Required"],
		412: [400, "Precondition Failed"],
		413: [400, "Request Entity Too Large"],
		414: [400, "Request-URI Too Long"],
		415: [400, "Unsupported Media Type"],
		416: [400, "Requested Range Not Satisfiable"],
		417: [400, "Expectation Failed"],
		418: [400, "I'm a teapot"],
		422: [400, "Unprocessable Entity (WebDAV) (RFC 4918)"],
		423: [400, "Locked (WebDAV) (RFC 4918)"],
		424: [400, "Failed Dependency (WebDAV) (RFC 4918)"],
		425: [400, "Unordered Collection (RFC 3648)"],
		426: [400, "Upgrade Required (RFC 7231)"],
		428: [400, "Precondition Required (RFC 6585)"],
		429: [400, "Too Many Requests (RFC 6585)"],
		431: [400, "Request Header Fields Too Large (RFC 6585)"],
		449: [400, "Retry With"],
		450: [400, "Blocked by Windows Parental Controls"],
		451: [400, "Unavailable For Legal Reasons"],
		499: [400, "Client Closed Request"],
		500: [500, "Internal Server Error"],
		501: [500, "Not Implemented"],
		502: [500, "Bad Gateway"],
		503: [500, "Service Unavailable"],
		504: [500, "Gateway Timeout"],
		505: [500, "HTTP Version Not Supported"],
		506: [500, "Variant Also Negotiates (RFC 2295)"],
		507: [500, "Insufficient Storage (WebDAV) (RFC 4918)"],
		509: [500, "Bandwidth Limit Exceeded (Apache bw/limited extension)"],
		510: [500, "Not Extended (RFC 2774)"]
      }
    };
    this._xhr_.call = this._xhr_.default;
  };

  MYD_.prototype = {
    _md_slctr_: function(el) {
      var elm = el !== undefined && typeof el === "string" ? document.querySelectorAll(el) : null,
        ell = elm === null ? (el === undefined ? document : el) : (elm.length === 1 ? elm[0] : elm.length),
        exceptionstrings = function(id, addit) {
          return {
            notfound: "Selector " + String(el) + " was not found in this document.",
            argmissing: "Argument missing, excepted: " + addit[0] + " arg."
          } [id];
        };
      if (!ell || typeof elm === "number") {
        console.log(exceptionstrings("notfound", [elm.length]));
        return false;
      }
      var El__ = function() {
        return ell;
      };
      var _el_ = new El__();
      _el_.el = ell;
      	_el_.hasClass = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          return ell.classList.contains(arguments[0]);
        },
        _el_.toggleClass = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          var cls = arguments[0],
            hasClass = _el_.hasClass(cls);
          if ((arguments.length === 2 && arguments[1]) || (arguments.length === 1 && !hasClass)) {
            ell.classList.add(cls);
          } else if ((arguments.length === 2 && !arguments[1]) || (arguments.length === 1 && hasClass)) {
            ell.classList.remove(cls);
          }
          return new MyDOM(ell);
        },
        _el_.addClass = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          ell.classList.add(arguments[0]);
          return new MyDOM(ell);
        },
        _el_.removeClass = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          ell.classList.remove(arguments[0]);
          return new MyDOM(ell);
        },
        _el_.css = function() {
          var _fx = {
            _: ["-webkit-", "-moz-", "-ms-", "-o-", ""],
            p: ["transition", "transform"]
          };
          if (ell.style === undefined) {
            return undefined;
          }
          if (!arguments.length) {
            return ell.style;
          } else if (arguments.length === 1 && typeof arguments[0] === "string") {
            return ell.style[arguments[0]];
          } else if (arguments.length === 1 && typeof arguments[0] === "object") {
            for (var p in arguments[0]) {
              if (_fx.p.indexOf(p) !== -1) {
                for (var c in _fx._) {
                  ell.style[_fx._[c] + p] = arguments[0][p];
                }
              } else {
                ell.style[p] = arguments[0][p];
              }
            }
            return new MyDOM(ell);
          } else if (arguments.length === 2 && typeof arguments[0] === "string" && typeof arguments[1] === "string") {
            if (_fx.p.indexOf(arguments[0]) !== -1) {
              for (var cc in _fx._) {
                ell.style[_fx._[cc] + arguments[0]] = arguments[1];
              }
            } else {
              ell.style[arguments[0]] = arguments[1];
            }
            return new MyDOM(ell);
          }
        },
        _el_.attr = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          if (ell.getAttribute === undefined) {
            return undefined;
          }
          if (arguments.length === 1) {
            return ell.getAttribute(arguments[0]);
          } else if (arguments.length == 2) {
            ell.setAttribute(arguments[0], arguments[1]);
            return new MyDOM(ell);
          }
        },
        _el_.on = function() {
          if (arguments.length !== 2) {
            throw Error(exceptionstrings("argmissing", [2]));
          }
          ell.addEventListener(arguments[0], arguments[1]);
          return new MyDOM(ell);
        },
        _el_.prop = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          } else if (arguments.length === 1) {
            return ell[arguments[0]];
          }
          ell[arguments[0]] = arguments[1];
          return new MyDOM(ell);
        },
        _el_.is = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          return "string" === typeof arguments[0] ? ell.matches(arguments[0]) : ell === arguments[0];
        },
        _el_.find = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          var found = ell.querySelectorAll(arguments[0]);
          return found.length === 1 ? new MyDOM(found[0]) : new MyDOMs(arguments[0]);
        },
        _el_.offset = function() {
          var offst = this.getBoundingClientRect();
          return arguments.length === 1 ? offst[arguments[0]] : offst;
        },
        _el_.html = function() {
          if (!arguments.length) {
            return ell.innerHTML;
          } else if (arguments.length === 1 && typeof arguments[0] === "string") {
            ell.innerHTML = arguments[0];
            return new MyDOM(ell);
          }
        },
        _el_.txt = function() {
          if (!arguments.length) {
            return ell.textContent;
          } else if (arguments.length === 1) {
            ell.textContent = String(arguments[0]);
            return new MyDOM(ell);
          }
        },
        _el_.appendText = function() {
          if (!arguments.length) {
            return new MyDOM(ell);
          } else if (arguments.length === 1) {
            ell.textContent += String(arguments[0]);
            return new MyDOM(ell);
          }
        },
        _el_.prependText = function() {
          if (!arguments.length) {
            return new MyDOM(ell);
          } else if (arguments.length === 1) {
            ell.textContent = ell.textContent + String(arguments[0]);
            return new MyDOM(ell);
          }
        },
        _el_.append = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          ell.appendChild(arguments[0]);
          return new MyDOM(ell);
        },
        _el_.prepend = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          ell.prepend(arguments[0]);
          return new MyDOM(ell);
        },
        _el_.insertAfter,
        _el_.after = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          var obj = ell;
          ell = typeof arguments[0] === "string" ? document.querySelector(arguments[0]) : arguments[0];
          ell.after(obj);
          return new MyDOM(ell);
        },
        _el_.insertBefore,
        _el_.before = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          var obj = ell;
          ell = typeof arguments[0] === "string" ? document.querySelector(arguments[0]) : arguments[0];
          ell.before(obj);
          return new MyDOM(ell);
        },
        _el_.height,
        _el_._height = function() {
          if (!arguments.length) {
            return ell.getBoundingClientRect().height;
          } else {
            ell.style.height = arguments[0];
            return new MyDOM(ell);
          }
        },
        _el_.width,
        _el_._width = function() {
          if (!arguments.length) {
            return ell.getBoundingClientRect().width;
          } else {
            ell.style.width = arguments[0];
            return new MyDOM(ell);
          }
        },
        _el_.closest = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          } else {
            while (!ell.matches(arguments[0])) {
              ell = ell.parentNode;
              if (!ell) {
                return false;
              }
            }
            return new MyDOM(ell);
          }
        };

      return _el_;
    },

    _md_xhr_: function() {
      var that = this;
      return {
        fetch: function(progress, success, error, async, forceParse) {
          var xhttp = new XMLHttpRequest();
          xhttp.open(that._xhr_.call.method, that._xhr_.call.url, "function" === typeof success || async ===true);
          if (that._xhr_.call.method === "POST") {
            xhttp.send(that._xhr_.call.post);
          } else {
            xhttp.send();
          }
          if ("function" !== typeof success) {
            return that._xhr_.parse ? that.response_parser(xhttp.response, forceParse) : xhttp.response;
          }
          xhttp.onprogress = function(e) {
            if ("function" === typeof progress) {
              return progress(e);
            }
          };
          xhttp.onerror = function() {
            if ("function" === typeof error) {
              error("Network Error");
            } else {
              alert("Network Error");
            }
          };
          xhttp.onload = function() {
            if (Number(xhttp.status) in that._xhr_.sts) {
              var status = that._xhr_.sts[Number(xhttp.status)];
              if ([200, 300].indexOf(status[0]) !== -1) {
                return "function" === typeof success ?
                  success(that._xhr_.parse ? that.response_parser(xhttp.response, forceParse) : xhttp.response) :
                  xhttp;
              } else if ([400, 500].indexOf(status[0]) !== -1) {
                return "function" === typeof error ?
                  error(xhttp.status + ": " + status[1] + "\n" + that._xhr_.call.url) :
                  alert(xhttp.status + ": " + status[1] + "\n" + that._xhr_.call.url);
              }
            }
          };
          try {
            return xhttp.status === 0;
          } catch (e) {
            return e;
          }
        },
        get: function(url, success, error) {
          that._xhr_.call.method = "GET";
          that._xhr_.call.url = url;
          that._xhr_.parse = false;
          return that._md_xhr_().fetch(false, success, error);
        },
        post: function(url, data, success, error) {
          that._xhr_.call.method = "GET";
          that._xhr_.call.url = url;
          that._xhr_.parse = false;
          return that._md_xhr_().fetch(false, success, error);
        },
        ajax: function(url, options) {
          if (url === undefined) {
            return;
          }
          options = typeof url !== "string" ? url : options;
          url = typeof url === "string" ? url : (
            typeof options === "object" && "url" in options ?
            options.url :
            that._xhr_.default.url
          );
          that._xhr_.call.url = url;
          that._xhr_.call.method = "method" in options ? options.method : that._xhr_.default.method;
          that._xhr_.call.url = "url" in options ? options.url : that._xhr_.default.url;
          that._xhr_.call.headers = "headers" in options ? options.headers : that._xhr_.default.headers;
          that._xhr_.call.post = "data" in options ? options.data : that._xhr_.default.post;

          return that._md_xhr_().fetch(

            "progress" in options && "function" === typeof options.progress ?
            options.progress : false,

            "success" in options && "function" === typeof options.success ?
            options.success : false,

            "error" in options && "function" === typeof options.error ?
            options.error : false,

            ("success" in options && "function" === typeof options.success) ||
            "async" in options && options.async === true,

            "dataType" in options ? options.dataType : false
          );
        },
        template: function(options){
        	
        }
      };
    },

    isJson: function(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    },
    strHTML: function(str) {
      var el = document.createElement('div');
      el.innerHTML = str;
      return el.getElementsByTagName('template');
    },
    response_parser: function(str, dataType) {
      var that = this,
        type = "String",
        resp = str;

      if (that.isJson(str)) {
        type = "object";
      } else if (/<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(str)) {
        type = "html";
      }

      switch (type) {
        case "object":
          return JSON.parse(str);
        case "html":
          return that.strHTML(str);
      }
      return resp;
    },
  };

  var _mdm_ = new MYD_();
  /* ******************************************** */
  /* 	BASE LOAD */
  window.myDOM = _mdm_._md_slctr_;
  /* ajax */
  window.myDOM.get = _mdm_._md_xhr_().get;
  window.myDOM.post = _mdm_._md_xhr_().post;
  window.myDOM.ajax = _mdm_._md_xhr_().ajax;
  window.myDOM.template = _mdm_._md_xhr_().template;
  /* Rename */
  window.$ = window.myDOM;
  /* ******************************************** */
})(window);
