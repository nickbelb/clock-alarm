/** As our program grows bigger , it may contain many lines of code , Instead of putting everthing in a single file , you can use modules to separate codes 
 * in separate files as per their functionality. this makes our code organized and easier to maintain and update
 * 
 * A module is a file that contains code to perform a especific task, A module may contain variables , funcitions,classes
 */


// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
  }
  
  // Get HTML element by id
  function getElement(selector, parent = document) {
    return parent.getElementById(selector);
  }
  
  // Select HTML element
  function select(selector, parent = document) {
    return parent.querySelector(selector);
  }
  
  // Get a (node) list of HTML elements as array
  function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
  }


 export {onEvent,select,selectAll}; 