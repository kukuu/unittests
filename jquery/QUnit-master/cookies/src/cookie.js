/***
 * Implementation of js-simple-storage interface for Cookies
 *
 * The idea here is to keep things simple and extend the window
 * object until there are explicit requirements;
 */
var _jss = _jss || {};
_jss.cookie = _jss.cookie || function() {
    return {
        setItem: function(key, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = '; expires=' + date.toGMTString();
            }
            else 
                var expires = '';
                
            console.log(key + '=' + value + expires + '; path=/');
            document.cookie = key + '=' + value + expires + '; path=/';
            return key;
        },
        getItem: function(key) {
            key = new String(key).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
            var regex = new RegExp('(?:^|;)\\s?' + key + '=(.*?)(?:;|$)', 'i'),
            match = document.cookie.match(regex);
            return match && decodeURIComponent(match[1]);
        },
        removeItem: function(key) {
            this.setItem(key, '', -1);
            return;
        },
        clear: function() {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var c = cookies[i],
                eqp = c.indexOf("=");
                var key = eqp > -1 ? c.substr(0, eqp) : c;
                this.removeItem(key);
            }
            return;
        }
    };
}();