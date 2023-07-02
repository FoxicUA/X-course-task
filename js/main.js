function createWrapper() {
    // ========== Початок зони редагування ==============
    let fun1 = arguments[0];
    let callback = arguments[1];
      return function() {
          return new Promise((resolve, reject) => {
              if (reject) {
                  callback(reject, null);
              } else {
                  callback(null, fun1(arguments));
              }
          });
     };
    
    // ========== Кінець зони редагування ===============
  }

  