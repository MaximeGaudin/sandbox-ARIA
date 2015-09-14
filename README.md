# Introduction to ARIA

Since I work for a public website, the produced HTML must be at the bery least ARIA friendly (as opposed to fully ARIA-compatible).

The big problem with ARIA is that you must memorize sane but numerous default behavior to know where you must add the ARIA attribute and where adding one will only clutter your code.

To do so, I will study the following resources :

* https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA#Documentation
* http://www.lesintegristes.net/2008/12/09/introduction-a-wai-aria-traduction/
* https://specs.webplatform.org/html-aria/webspecs/master/
* https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/formulaires

## Base rules

* All important elements must be focusable, especially the input ones.
* One should be able to navigate properly using only the keyboard (_Cf._ tabindex).
* If the component used to implement the behavior is counter-intuitive, one must specify this component role (_Cf._ [ARIA Roles](http://www.w3.org/TR/wai-aria/roles#roles_categorization_header)).
* If you're using proper HTML5 semantic (`article`, `section`, etc.), there no use in the ARIA section roles. Same for aria-required attribute.
* If some of the screen is updated (a notification for instance), one should use th ARIA live region feature.
* One can link element between them using `aria-labelledby` and `aria-describedby`. These attributes are not exclusively used in forms but should be used each time it there is a label/value relationship (table for instance).
