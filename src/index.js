(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'underscore',
      'backbone/extend',
      'backbone/sync',
      'backbone/events',
      'backbone/model',
      'backbone/view',
      'backbone/collection',
      'backbone/history',
      'backbone/router'
    ], factory);
  } else {
    var Backbone = window.Backbone || (window.Backbone = {});
    factory(_, Backbone.extend, Backbone.sync, Backbone.Events, Backbone.Model, Backbone.Collection, Backbone.View, Backbone.History, Backbone.Router, Backbone, this);
  }
}(function (
  _, extend, sync, Events, Model, Collection, View, History, Router, global, root
) {
  var Backbone 
  if (!global) {
    // only when using AMD
    Backbone = _.extend(Backbone || {}, {
      extend: extend,
      sync: sync,
      Events: Events,
      Model: Model,
      Collection: Collection,
      View: View,
      History: History,
      Router: Router
    });
  } else {
    Backbone = global;
    
    // Save the previous value of the `Backbone` variable, so that it can be
    // restored later on, if `noConflict` is used.
    var previousBackbone = root.Backbone;
    
    // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
    // to its previous owner. Returns a reference to this Backbone object.
    Backbone.noConflict = function() {
      root.Backbone = root.previousBackbone;
      return this;
    };
  }
  
  Backbone.VERSION = '1.1.0';

  // Create the default Backbone.history.
  Backbone.history = Router.history;

  return Backbone;
}));
