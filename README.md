# Wellcome to myDOM.js
jQuery syntax friendly library

# Selector functionality
$("body") returns `BODY` HTMLElement from document. 
It's shortcut of `document.querySelector("body")`, so it native support default prototypes/object getters & setters.

Library has predefined jQuery like prototypes like `css`,`attr` or `html` (see bellow). 
Thesee prototypes are usually getters/setters for selector.
When U use setter functionality, object returns back itself (U can continue with prototypes).

Example (ES5):
```
$("body")
  .css({"background": "#000", "color", "#fff"})
  .html(
    '<ul>'
      +'<li>First item</li>'+
      +'<li>Second item</li>'+
      +'<li>Third item</li>'+
    '</ul>')
```

# ajax functionality



# Installation
Simply add `<script src="mydom.js"></script>` at the end of `BODY` 


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

