/***
 * Implementation of js-simple-storage interface for localStorage
 *
 * The idea here is to keep things simple and extend the window
 * object until there are explicit requirements;
 */
var _jss = _jss || {};
_jss.localStorage = _jss.localStorage || function() {
    return {
        setItem: function(key, value) {
            window.localStorage.setItem(key, value);
            return key;
        },
        getItem: function(key) {
            return window.localStorage.getItem(key);
        },
        removeItem: function(key) {
            window.localStorage.removeItem(key);
        },
        clear: function() {
            window.localStorage.clear();
        }
    };
}();