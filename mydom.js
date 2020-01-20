/*
 *
 *	MyDom.js
 *	Better, lighter jQuery syntax friendly framework
 *	version 1.0.8
 *	Patrik Eder 2020
 *
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
      accepts: {
        "*": null,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      parse: true,
      sts: {}
    };
    this._xhr_.call = this._xhr_.default;
    this.elm = null;
  };
  MYD_.prototype = {
    _mydom_: function(el) {
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
      	_el_.el = function() {return ell;};
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
            return new MyDom(ell);
          } else if (arguments.length === 2 && typeof arguments[0] === "string" && typeof arguments[1] === "string") {
            if (_fx.p.indexOf(arguments[0]) !== -1) {
              for (var cc in _fx._) {
                ell.style[_fx._[cc] + arguments[0]] = arguments[1];
              }
            } else {
              ell.style[arguments[0]] = arguments[1];
            }
            return new MyDom(ell);
          }
        },
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
          return new MyDom(ell);
        },
        _el_.addClass = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          ell.classList.add(arguments[0]);
          return new MyDom(ell);
        },
        _el_.removeClass = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          ell.classList.remove(arguments[0]);
          return new MyDom(ell);
        },
        _el_.is = function() {
          if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
          }
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          return "string" === typeof arguments[0] ? ell.matches(arguments[0]) : ell === arguments[0];
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
            return new MyDom(ell);
          }
        },
        _el_.on = function() {
          if (arguments.length !== 2) {
            throw Error(exceptionstrings("argmissing", [2]));
          }
          ell.addEventListener(arguments[0], arguments[1]);
          return new MyDom(ell);
        },
        _el_.prop = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          } else if (arguments.length === 1) {
            return ell[arguments[0]];
          }
          ell[arguments[0]] = arguments[1];
          return new MyDom(ell);
        },
        _el_.find = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          var found = ell.querySelectorAll(arguments[0]);
          return found.length === 1 ? new MyDom(found[0]) : new MyDoms(arguments[0]);
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
            return new MyDom(ell);
          }
        },
        _el_.txt = function() {
          if (!arguments.length) {
            return ell.textContent;
          } else if (arguments.length === 1) {
            ell.textContent = String(arguments[0]);
            return new MyDom(ell);
          }
        },
        _el_.appendText = function() {
          if (!arguments.length) {
            return new MyDom(ell);
          } else if (arguments.length === 1) {
            ell.textContent += String(arguments[0]);
            return new MyDom(ell);
          }
        },
        _el_.prependText = function() {
          if (!arguments.length) {
            return new MyDom(ell);
          } else if (arguments.length === 1) {
            ell.textContent = ell.textContent + String(arguments[0]);
            return new MyDom(ell);
          }
        },
        _el_.append = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          ell.appendChild(arguments[0]);
          return new MyDom(ell);
        },
        _el_.prepend = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          ell.prepend(arguments[0]);
          return new MyDom(ell);
        },
        _el_.insertAfter,
        _el_.after = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          var obj = ell;
          ell = typeof arguments[0] === "string" ? document.querySelector(arguments[0]) : arguments[0];
          ell.after(obj);
          return new MyDom(ell);
        },
        _el_.insertBefore,
        _el_.before = function() {
          if (!arguments.length) {
            throw Error(exceptionstrings("argmissing", [1]));
          }
          var obj = ell;
          ell = typeof arguments[0] === "string" ? document.querySelector(arguments[0]) : arguments[0];
          ell.before(obj);
          return new MyDom(ell);
        },
        _el_.height,
        _el_._height = function() {
          if (!arguments.length) {
            return ell.getBoundingClientRect().height;
          } else {
            ell.style.height = arguments[0];
            return new MyDom(ell);
          }
        },
        _el_.width,
        _el_._width = function() {
          if (!arguments.length) {
            return ell.getBoundingClientRect().width;
          } else {
            ell.style.width = arguments[0];
            return new MyDom(ell);
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
            return new MyDom(ell);
          }
        };
      return _el_;
    },
    _mydom_xhr_: function() {
      var lib = this;
      return {
        fetch: function(progress, success, error, async, forceParse) {
          var xhttp = new XMLHttpRequest();
          xhttp.open(lib._xhr_.call.method, lib._xhr_.call.url, "function" === typeof success || async ===true);
          if (lib._xhr_.call.method === "POST") {
            xhttp.send(lib._xhr_.call.post);
          } else {
            xhttp.send();
          }
          if ("function" !== typeof success) {
            return lib._xhr_.parse ? lib.response_parser(xhttp.response, forceParse) : xhttp.response;
          }
          xhttp.onprogress = function(e) {
            if ("function" === typeof progress) {
              return progress(e);
            }
          };
          xhttp.onerror = function(e) {
            if ("function" === typeof error) {
              error("Network Error", e);
            } else {
              throw Error("MyDOM " + lib._xhr_.call.method + " request to " + lib._xhr_.call.url + " network error");
            }
          };
          xhttp.onload = function() {
            var status = String(xhttp.status) in lib._xhr_.sts ? lib._xhr_.sts[xhttp.status] : "unknown",
              co_sts = Math.round(Number(xhttp.status) / 100);
            if ([2, 3].indexOf(co_sts) !== -1 || !(String(xhttp.status) in lib._xhr_.sts)) {
              return "function" === typeof success ?
                success(lib._xhr_.parse ? lib.response_parser(xhttp.response, forceParse) : xhttp.response) :
                xhttp;
            } else if ([4, 5].indexOf(co_sts) && "function" === typeof error) {
              error(xhttp.status + ": " + status + ", url:" + lib._xhr_.call.url);
            } else {
              throw Error("MyDOM " + lib._xhr_.call.method + " request to '" + lib._xhr_.call.url + "' returned code " + xhttp.status + ": " + status);
            }
          };
          try {
            return xhttp.status === 0;
          } catch (e) {
            return e;
          }
        },
        get: function(url, success, error) {
          lib._xhr_.call.method = "GET";
          lib._xhr_.call.url = url;
          lib._xhr_.parse = false;
          return lib._mydom_xhr_().fetch(false, success, error);
        },
        post: function(url, data, success, error) {
          lib._xhr_.call.method = "POST";
          lib._xhr_.call.post = data;
          lib._xhr_.call.url = url;
          lib._xhr_.parse = false;
          return lib._mydom_xhr_().fetch(false, success, error);
        },
        ajax: function(url, options) {
          if (url === undefined) {
            return;
          }
          options = typeof url !== "string" ? url : options;
          lib._xhr_.call.url = typeof url === "string" ? url : (
            typeof options === "object" && "url" in options ?
            options.url :
            lib._xhr_.default.url
          );
          var opt = {
            opt: function(opt, options) {
              return opt in options ? options[opt] : lib._xhr_.default[opt];
            },
            optfn: function(opt, options) {
              return opt in options && "function" === typeof options[opt] ? options[opt] : false;
            }
          };
          lib._xhr_.call.method = opt.opt("method", options);
          lib._xhr_.call.url = opt.opt("url", options);
          lib._xhr_.call.headers = opt.opt("headers", options);
          lib._xhr_.call.post = opt.opt("post", options);
          return lib._mydom_xhr_().fetch(
            opt.optfn("progress", options),
            opt.optfn("success", options),
            opt.optfn("error", options),
            "async" in options && options.async === true,
            "dataType" in options ? options.dataType : false
          );
        },
        template: function(options) {}
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
      var lib = this,
        type = "String",
        resp = str;
      if (lib.isJson(str)) {
        type = "object";
      } else if (/<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(str)) {
        type = "html";
      }
      switch (type) {
        case "object":
          return JSON.parse(str);
        case "html":
          return lib.strHTML(str);
      }
      return resp;
    },
  };
  var _mdm_ = new MYD_();
  	_mdm_.prev = _mdm_.elm;
  	_mdm_._xhr_.sts = JSON.parse(atob("eyIyMDAiOiJPSyIsIjIwMSI6IkNyZWF0ZWQiLCIyMDIiOiJBY2NlcHRlZCIsIjIwMyI6Ik5vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uIChvZCBIVFRQLzEuMSkiLCIyMDQiOiJObyBDb250ZW50IiwiMjA1IjoiUmVzZXQgQ29udGVudCIsIjIwNiI6IlBhcnRpYWwgQ29udGVudCIsIjIwNyI6Ik11bHRpLVN0YXR1cyAoV2ViREFWKSAoUkZDIDQ5MTgpIiwiMzAwIjoiTXVsdGlwbGUgQ2hvaWNlcyIsIjMwMSI6Ik1vdmVkIFBlcm1hbmVudGx5IiwiMzAyIjoiRm91bmQiLCIzMDMiOiJTZWUgT3RoZXIgKHNpbmNlIEhUVFAvMS4xKSIsIjMwNCI6Ik5vdCBNb2RpZmllZCIsIjMwNSI6IlVzZSBQcm94eSAoc2luY2UgSFRUUC8xLjEpIiwiMzA2IjoiU3dpdGNoIFByb3h5IiwiMzA3IjoiVGVtcG9yYXJ5IFJlZGlyZWN0IChzaW5jZSBIVFRQLzEuMSkiLCI0MDAiOiJCYWQgUmVxdWVzdCIsIjQwMSI6IlVuYXV0aG9yaXplZCIsIjQwMiI6IlBheW1lbnQgUmVxdWlyZWQiLCI0MDMiOiJGb3JiaWRkZW4iLCI0MDQiOiJOb3QgRm91bmQiLCI0MDUiOiJNZXRob2QgTm90IEFsbG93ZWQiLCI0MDYiOiJOb3QgQWNjZXB0YWJsZSIsIjQwNyI6IlByb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkIiwiNDA4IjoiUmVxdWVzdCBUaW1lb3V0IiwiNDA5IjoiQ29uZmxpY3QiLCI0MTAiOiJHb25lIiwiNDExIjoiTGVuZ3RoIFJlcXVpcmVkIiwiNDEyIjoiUHJlY29uZGl0aW9uIEZhaWxlZCIsIjQxMyI6IlJlcXVlc3QgRW50aXR5IFRvbyBMYXJnZSIsIjQxNCI6IlJlcXVlc3QtVVJJIFRvbyBMb25nIiwiNDE1IjoiVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZSIsIjQxNiI6IlJlcXVlc3RlZCBSYW5nZSBOb3QgU2F0aXNmaWFibGUiLCI0MTciOiJFeHBlY3RhdGlvbiBGYWlsZWQiLCI0MTgiOiJJJ20gYSB0ZWFwb3QiLCI0MjIiOiJVbnByb2Nlc3NhYmxlIEVudGl0eSAoV2ViREFWKSAoUkZDIDQ5MTgpIiwiNDIzIjoiTG9ja2VkIChXZWJEQVYpIChSRkMgNDkxOCkiLCI0MjQiOiJGYWlsZWQgRGVwZW5kZW5jeSAoV2ViREFWKSAoUkZDIDQ5MTgpIiwiNDI1IjoiVW5vcmRlcmVkIENvbGxlY3Rpb24gKFJGQyAzNjQ4KSIsIjQyNiI6IlVwZ3JhZGUgUmVxdWlyZWQgKFJGQyA3MjMxKSIsIjQyOCI6IlByZWNvbmRpdGlvbiBSZXF1aXJlZCAoUkZDIDY1ODUpIiwiNDI5IjoiVG9vIE1hbnkgUmVxdWVzdHMgKFJGQyA2NTg1KSIsIjQzMSI6IlJlcXVlc3QgSGVhZGVyIEZpZWxkcyBUb28gTGFyZ2UgKFJGQyA2NTg1KSIsIjQ0OSI6IlJldHJ5IFdpdGgiLCI0NTAiOiJCbG9ja2VkIGJ5IFdpbmRvd3MgUGFyZW50YWwgQ29udHJvbHMiLCI0NTEiOiJVbmF2YWlsYWJsZSBGb3IgTGVnYWwgUmVhc29ucyIsIjQ5OSI6IkNsaWVudCBDbG9zZWQgUmVxdWVzdCIsIjUwMCI6IkludGVybmFsIFNlcnZlciBFcnJvciIsIjUwMSI6Ik5vdCBJbXBsZW1lbnRlZCIsIjUwMiI6IkJhZCBHYXRld2F5IiwiNTAzIjoiU2VydmljZSBVbmF2YWlsYWJsZSIsIjUwNCI6IkdhdGV3YXkgVGltZW91dCIsIjUwNSI6IkhUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkIiwiNTA2IjoiVmFyaWFudCBBbHNvIE5lZ290aWF0ZXMgKFJGQyAyMjk1KSIsIjUwNyI6Ikluc3VmZmljaWVudCBTdG9yYWdlIChXZWJEQVYpIChSRkMgNDkxOCkiLCI1MDkiOiJCYW5kd2lkdGggTGltaXQgRXhjZWVkZWQgKEFwYWNoZSBidy9saW1pdGVkIGV4dGVuc2lvbikiLCI1MTAiOiJOb3QgRXh0ZW5kZWQgKFJGQyAyNzc0KSJ9"));
  var _mdm__ = _mdm_._mydom_;
	  _mdm__.get = _mdm_._mydom_xhr_().get;
	  _mdm__.post = _mdm_._mydom_xhr_().post;
	  _mdm__.ajax = _mdm_._mydom_xhr_().ajax;
	  _mdm__.template = _mdm_._mydom_xhr_().template;
  window._ = window.$ = window.MyDom = _mdm__ || _mdm_;
})(window);
