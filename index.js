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
    factory(_);
  }
}(function (
  _, extend, sync, Events, Model, Collection, View, History, Router
) {
  if (extend) {
    // only when using AMD
    var Backbone = _.extend(Backbone || {}, {
      extend: extend,
      sync: sync,
      Events: Events,
      Model: Model,
      Collection: Collection,
      View: View,
      History: History,
      Router: Router
    });
  }

  Backbone.VERSION = '0.9.10';

  // Create the default Backbone.history.
  Backbone.history = new History;

  return Backbone;
}));
