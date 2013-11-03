Backbone Modular
================

A fork of Backbone.js that separates its classes into separate modules. Works best in AMD environment, although all modules should work as static loaded scripts as well (standalone or in combination).
One can, for example, use just Backbone's *extend* function and *Events* class, without loading the rest of classes.
Includes tests from original Backbone source.

Current version
---------------

The current version is based on Backbone v1.1.0

Differences
-----------

There are several changes to how Backbone is structured in order to enable its separation into modules.

* Backbone.methodMap object is now part of sync module: *sync.methodMap*
* Backbone.ajax function is also part of sync: *sync.ajax*
* History instance is created in *backbone/router* module; or you supply your own to Router constructor

Usage
-----

When using AMD (Require.js) just define the "backbone" path and require all modules you need. The dependencies will be satisfied automatically.

When using static-linked scripts, just include all files you need to use. The dependencies are visible at the top of each module's source files.
