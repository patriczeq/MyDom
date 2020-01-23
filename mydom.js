/*
 *	MyDom.js
 *	Better, lighter jQuery syntax friendly framework
 *	version 1.0.8.1
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
      sts: {},
      queue: []
    };
    this._xhr_.call = this._xhr_.default;
    this.elm = null;
  };
  MYD_.prototype = {
    _mydom_: function(el) {
      	var lib = this,
      	elm = el !== undefined && typeof el === "string" ? document.querySelectorAll(el) : null,
        ell = elm === null ? (el === undefined ? document : el) : (elm.length === 1 ? elm[0] : elm),
        exceptionstrings = function(id, addit) {
          return {
            notfound: 	"Selector " + String(el) + " was not found in this document.",
            argmissing: "Argument missing, excepted: " + addit[0] + " arg.",
            badinput: 	"Bad input argument, excepted: " +  addit[0] +", got: " + addit[1]
          } [id];
        };
      if(el !== undefined && typeof el === "string" && !document.querySelectorAll(el).length){
      	return !1;
      }
      if(ell.length > 1){
      	var Els__ = function(){
      		return ell;
      	},
      	_els_ = new Els__();
  		_els_.each= function(fn){
  			if(fn === undefined){
  				throw Error(exceptionstrings("argmissing", [1]));
  			}else if("function" !== typeof fn){
  				throw Error(exceptionstrings("badinput", ["function", typeof fn]));
  			}else{
  				for(var e = 0; e < ell.length; e++){
	  				var _p = new MyDom(ell[e]);
	  				_p.fn = fn;
	  				_p.fn(e,_p);
	  			}
  			}
  			return new MyDom(el);
  		};
  		return ell;
      }else if (!ell) {
        console.log(exceptionstrings("notfound", [elm.length]));
        return false;
      }
      var El__ = function() {
        return ell;
      },
      _el_ = new El__();
      _el_.el = function() {
        return ell;
      };
      _el_.length = 1;
      _el_.css = function() {
          var _fx = {
            _: ["-webkit-", "-moz-", "-ms-", "-o-", ""],
            p: ["transition", "transform", "animation"]
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

      _el_.inview = function() {
        var rect = ell.getBoundingClientRect(),
          windowHeight = (window.innerHeight || document.documentElement.clientHeight),
          windowWidth = (window.innerWidth || document.documentElement.clientWidth),
          vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0),
          horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

        return (vertInView && horInView);
      };
      _el_.removeAttr = function() {
        if (!arguments.length) {
          throw Error(exceptionstrings("argmissing", [1]));
        } else {
          ell.removeAttribute(arguments[0]);
          return new MyDom(ell);
        }
      };

      _el_.animate = function() {
        if (!arguments.length) {
          throw Error(exceptionstrings("argmissing", [1]));
        } else if (typeof arguments[0] === "object") {
          var anim = arguments[0],
            from = "from" in anim ? anim.from : false,
            to = "to" in anim ? anim.to : false,
            duration = "duration" in anim ? anim.duration : 500,
            delay = "delay" in anim ? anim.delay : 0,
            easing = "easing" in anim ? anim.easing : "linear",
            property = "property" in anim ? anim.property : false,
            backup_transition = ell.style.transition,
            prefixes = ["-webkit-", "-moz-", "-o-", ""];
          ell.style[property] = from;
          for (var i in prefixes) {
            ell.style[prefixes[i] + "transition"] = duration + "ms " + property + " " + easing + " " + delay + "ms";
          }
          ell.style[property] = to;
          setTimeout(function() {
            for (var i in prefixes) {
              ell.style[prefixes[i] + "transition"] = backup_transition;
            }
          }, duration);
        } else if (arguments.length) {
          console.warn("excepted json object: " + arguments[0]);
        }
        return new MyDom(ell);
      };

      return _el_;
    },
    _scroll_fx: function(event) {
      var elms = [],
        e = 0,
        elm = null,
        parse = {},
        targetElm = null;
      /*
      	Object in ViewPort functions
      */
      // animation on viewport
      elms = document.querySelectorAll("[_animate-onview]");
      for (e = 0; e < elms.length; e++) {
        elm = new MyDom(elms[e]);
        parse = JSON.parse(elm.attr("_animate-onview").split("'").join('"'));
        if (elm.inview()) {
          elm.animate(parse).removeAttr("_animate-onview");
        } else {
          var s = {};
          s[String(parse.property)] = parse.from;
          elm.css(s);
        }
      }
      // addClass on viewport
      elms = document.querySelectorAll("[_addclass-onview]");
      for (e = 0; e < elms.length; e++) {
        elm = new MyDom(elms[e]);
        if (elm.inview()) {
          elm.addClass(elm.attr("_addclass-onview")).removeAttr("_addclass-onview");
        }
      }
      // removeClass on viewport
      elms = document.querySelectorAll("[_removeclass-onview]");
      for (e = 0; e < elms.length; e++) {
        elm = new MyDom(elms[e]);
        if (elm.inview()) {
          elm.removeClass(elm.attr("_removeclass-onview")).removeAttr("_removeclass-onview");
        }
      }
      // toggleClass on viewport
      elms = document.querySelectorAll("[_toggleclass-onview]");
      for (e = 0; e < elms.length; e++) {
        elm = new MyDom(elms[e]);
        var tgl = elm.attr("_toggleclass-onview").indexOf("!") === 0 ? !elm.inview() : elm.inview(),
          cls = elm.attr("_toggleclass-onview").replace("!", "");
        elm.toggleClass(cls, tgl);
      }
      /*
        	EOF Object in ViewPort functions
        */
    },
    _mydom_xhr_: function() {
      var lib = this;
      return {
      	queue: function(){
      		return {
      			abort: function(n){
      				for(var q = 0; q < lib._xhr_.queue.length; q++){
      					if(n===q||n===undefined){
      						try{lib._xhr_.queue[q].cancelRequested=true;}catch(e){}
							try{lib._xhr_.queue[q].onprogress=null; xhr[i].onload=null; xhr[i].onerror=null;}catch(e){}
							try{lib._xhr_.queue[q].upload.onprogress=null; xhr[i].upload.onload=null; xhr[i].upload.onerror=null;}catch(e){}
							try{lib._xhr_.queue[q].abort();}catch(e){}
							try{delete(lib._xhr_.queue[q]);lib._xhr_.queue=[]}catch(e){}
      					}
      				}
      				return true;
      			},
      			get: function(q){
      				return q !== undefined && typeof q === "number" ? lib._xhr_.queue[q] : lib._xhr_.queue;
      			}
      		};
      	},
        fetch: function(progress, success, error, async, forceParse) {
        	var xhr = new XMLHttpRequest(),
        		q = lib._xhr_.queue.length,
        		r = null;

          xhr.open(lib._xhr_.call.method, lib._xhr_.call.url, "function" === typeof success || async === true);
          lib._xhr_.queue.push(xhr);
          if (lib._xhr_.call.method === "POST") {
            lib._xhr_.queue[q].send(lib._xhr_.call.post);
          } else {
            lib._xhr_.queue[q].send();
          }
          if ("function" !== typeof success) {
            r = lib._xhr_.parse ? lib.response_parser(lib._xhr_.queue[q].response, forceParse) : lib._xhr_.queue[q].response;
            	lib._mydom_xhr_().queue().abort(q);
            return r;
          }
          lib._xhr_.queue[q].onprogress = function(e) {
            if ("function" === typeof progress) {
              return progress(e, this);
            }
          };
          lib._xhr_.queue[q].onerror = function(e) {
            if ("function" === typeof error) {
              error(e,this);
              lib._mydom_xhr_().queue().abort(q);
            } else {
              throw Error("MyDom " + lib._xhr_.call.method + " request to " + lib._xhr_.call.url + " network error");
            }
          };
          lib._xhr_.queue[q].onload = function(e) {
            var status = Number(lib._xhr_.queue[q].status) in lib._xhr_.sts ? lib._xhr_.sts[lib._xhr_.queue[q].status] : "unknown",
              co_sts = Math.round(Number(lib._xhr_.queue[q].status) / 100);
            if ([2, 3].indexOf(co_sts) !== -1 || !(Number(lib._xhr_.queue[q].status) in lib._xhr_.sts)) {
              r = "function" === typeof success ? success(lib._xhr_.parse ? lib.response_parser(lib._xhr_.queue[q].response, forceParse) : lib._xhr_.queue[q].response, this) : lib._xhr_.queue[q];
              lib._mydom_xhr_().queue().abort(q);
              return r;
            } else if ([4, 5].indexOf(co_sts) && "function" === typeof error) {
              error(lib._xhr_.queue[q].status + ": " + status + ", url:" + lib._xhr_.call.url);
              try{delete(lib._xhr_.queue[q]);}catch(e){console.log(e)}
            } else {
            	r = "MyDom " + lib._xhr_.call.method + " request to '" + lib._xhr_.call.url + "' returned code " + lib._xhr_.queue[q].status + ": " + status;
            	lib._mydom_xhr_().queue().abort(q);
              throw Error(r);
            }
          };
          try {
            return lib._xhr_.queue[q].status === 0;
          } catch (e) {
            return e;
          }
        },
        get: function(url, success, error) {
          if(url===undefined){
          	throw Error(exceptionstrings("argmissing", [1]));
          }
          lib._xhr_.call.method = "GET";
          lib._xhr_.call.url = url;
          lib._xhr_.parse = false;
          return lib._mydom_xhr_().fetch(false, success, error);
        },
        post: function(url, data, success, error) {
        	if(url===undefined){
          	throw Error(exceptionstrings("argmissing", [1]));
          }
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
          
          if(!arguments.length){
          	throw Error(exceptionstrings("argmissing", [1]));
          }
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
  _mdm_._xhr_.sts = {
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information (od HTTP/1.1)",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status (WebDAV) (RFC 4918)",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other (since HTTP/1.1)",
    304: "Not Modified",
    305: "Use Proxy (since HTTP/1.1)",
    306: "Switch Proxy",
    307: "Temporary Redirect (since HTTP/1.1)",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Long",
    415: "Unsupported Media Type",
    416: "Requested Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    422: "Unprocessable Entity (WebDAV) (RFC 4918)",
    423: "Locked (WebDAV) (RFC 4918)",
    424: "Failed Dependency (WebDAV) (RFC 4918)",
    425: "Unordered Collection (RFC 3648)",
    426: "Upgrade Required (RFC 7231)",
    428: "Precondition Required (RFC 6585)",
    429: "Too Many Requests (RFC 6585)",
    431: "Request Header Fields Too Large (RFC 6585)",
    449: "Retry With",
    450: "Blocked by Windows Parental Controls",
    451: "Unavailable For Legal Reasons",
    499: "Client Closed Request",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates (RFC 2295)",
    507: "Insufficient Storage (WebDAV) (RFC 4918)",
    509: "Bandwidth Limit Exceeded (Apache bw/limited extension)",
    510: "Not Extended (RFC 2774)"
  };
  var _mdm__ = _mdm_._mydom_;
  _mdm__.scrollfx = _mdm_._scroll_fx;
  _mdm__.get = _mdm_._mydom_xhr_().get;
  _mdm__.post = _mdm_._mydom_xhr_().post;
  _mdm__.ajax = _mdm_._mydom_xhr_().ajax;
  _mdm__.ajaxQ = _mdm_._mydom_xhr_().queue();
  _mdm__.template = _mdm_._mydom_xhr_().template;
  window.MyDom = window._ = _mdm__ || _mdm_;
  window._.scrollfx();
  window._().on('scroll', function(e) {
    window._.scrollfx(e);
  });
})(window);
