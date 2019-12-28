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
