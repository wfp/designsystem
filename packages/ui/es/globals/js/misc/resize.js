// mdn resize function
var optimizedResize = function optimizedResize() {
  var callbacks = [];
  var running = false; // run the actual callbacks

  function runCallbacks() {
    callbacks.forEach(function (callback) {
      callback();
    });
    running = false;
  } // fired on resize event


  function resize() {
    if (!running) {
      running = true;
      window.requestAnimationFrame(runCallbacks);
    }
  } // adds callback to loop


  function addCallback(callback) {
    if (callback) {
      var index = callbacks.indexOf(callback);

      if (index < 0) {
        callbacks.push(callback);
      }
    }
  }

  return {
    // public method to add additional callback
    add: function add(callback) {
      if (!callbacks.length) {
        window.addEventListener('resize', resize);
      }

      addCallback(callback);
      return {
        release: function release() {
          var index = callbacks.indexOf(callback);

          if (index >= 0) {
            callbacks.splice(index, 1);
          }
        }
      };
    }
  };
}();

export default optimizedResize;