'use strict';
  function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
  }

  function getElement(selector, parent = document) {
    return parent.querySelector(selector);
  }