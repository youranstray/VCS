/*
 * cookie操作
 *
 */
define(function() {
	var f = {};

	f.setCookie = function(name, value, expiredays) {
		var exdate = new Date();
		exdate.setTime(exdate.getTime() + expiredays * 24 * 3600 * 1000);
		document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/";
	};

	f.getCookie = function(name) {
		var c_start, c_end;
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(name + "=");
			if (c_start != -1) {
				c_start = c_start + name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1)
					c_end = document.cookie.length;
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return "";
	};

	f.delCookie = function(name) {
		var date = new Date;
		date.setTime(date.getTime() - 1000);
		document.cookie = name + "=v; expires=" + date.toGMTString() + "; path=/";
	};

	return f;
});
