Backbone Modular
================

A fork of Backbone.js that separates its classes into separate modules. Works best in AMD environment, although all modules should work as static loaded scripts as well (standalone or in combination).
One can, for example, use just Backbone's *extend* function and *Events* class, without loading the rest of classes.

Current version
--------------

The current version is based on Backbone v0.9.10

Differences
-----------

There are several changes to how Backbone is structured in order to enable its separation into modules.

* Backbone.methodMap object is now part of sync module: *sync.methodMap*
* Backbone.ajax function is also part of sync: *sync.ajax*
* Backbone.history (the instance of Backbone.History) is created only in *index* module; otherwise you have to create your own.

Usage
-----

When using AMD (Require.js) just define "backbone" path and require all modules you need. The dependencies will be satisfied automatically.

When using static-linked scripts, just include all files you need to use. The dependencies are visible at the top of each module's source files. The files can be loaded in any order, and the global Backbone object will be created by any module that loads first.
