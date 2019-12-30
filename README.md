# Wellcome to MyDom.js
jQuery syntax friendly library

# Selector functionality
`MyDom("body")` returns `BODY` HTMLElement from document. 
It's shortcut of `document.querySelector("body")`, so it native support default prototypes/object getters & setters.

Library has predefined jQuery like prototypes like `css`,`attr` or `html` (see bellow). 
These prototypes are usually getters/setters for selector.
When U use setter functionality, object returns back itself (U can continue with prototypes).

It supports classes `MyDom(".foo")`, ids `MyDom("#bar")`, props `MyDom("[foo='bar']")` and HTMLElements itself.
```
var body = document.querySelector("body"),
s_body = MyDom(body);
```

Example (ES5):
```
MyDom("body")
  .css({"background": "#000", "color", "#fff"})
  .html(
    '<ul>'
      +'<li>First item</li>'+
      +'<li>Second item</li>'+
      +'<li>Third item</li>'+
    '</ul>')
```

# ajax functionality
Library using native `XMLHttpRequest`.
Synchronous functions:
```
var get_response = MyDom.get("http://yourdomain.com"),
  post_response = MyDom.post("http://yourdomain.com",{
    login: "foo",
    pwd: "bar"
  });
```
Async:
```
MyDom.get("http://yourdomain.com",function(response){
  console.log(response);
});
MyDom.post("http://yourdomain.com",{
    login: "foo",
    pwd: "bar"
  },
  function(response){
    console.log(response);
});
```

Full configurated:
```
MyDom.ajax({
  method: "POST", // POST\GET
  dataType: "JSON", // HTML / JSON / plain -> parser, if missing, uses autodetect
  url: "http://yourdomain.com", // if missing, uses "/"
  headers: {}, // associative array
  data: {}, // Only for POST method - posted data
  async: true, // false on default,
  success: function(data){ // success function -> after response (2xx,3xx)
  },
  error: function(data){ // error function -> after response (4xx,5xx) or network error
  },
  progress: function(e){ // on every ajax change
  }
});
```


# Installation & configuration
Simply add `<script src="MyDom.js"></script>` at the end of `BODY`.
Library is invoked by "MyDom" variable, but in initialisation is copied to variable "$".

As was wrotten, library is jQuery syntax friendly, so you can write `$("body")` like in jQuery code.



# Selector prototypes
| *Prototype* | *Inputs* | *Output* |
|----------|----------|----------|
| *hasClass* | `String` | `Boolean` |
| *toggleClass* | `[String[,Boolean]]` | `$element` |
| *addClass* | `String` | `$element` |
| *removeClass* | `String` | `$element` |
| *css* | `String\Object` | `$element\String` |
| *attr* | `String` | `$element\String` |
| *on* | `[String[,Function]]` | `$element` |
| *prop* | `String[,Value]` | `$element\property` |
| *is* | `String` | `Boolean` |
| *find* | `String` | `$element` |
| *offset* |  | `Object [top, left, bottom, right]` |
| *html* | `String` | `$element` |
| *txt* | `String` | `$element` |
| *appendText* | `String` | `$element` |
| *prependText* | `String` | `$element` |
| *append* | `$element` | `$element` |
| *preppend* | `$element` | `$element` |
| *_height* |  | `Boolean` |
| *_width* |  | `Boolean` |
| *closest* | `String` | `$element` |

