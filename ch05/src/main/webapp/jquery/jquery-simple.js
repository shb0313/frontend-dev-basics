var _jQuery = function(elements) {
	
	this.lengh = elements.length;
	for(var i = 0; i < this.lengh; i++) {
		this[i] = elements[i];
	}
}

_jQuery.prototype.css = function(name, value) {
	for(var i = 0; i < this.lengh; i++) {
		this[i].style[name] = value;
	}
}

_jQuery.prototype.click = function(handler) {
	for(var i = 0; i < this.lengh; i++) {
		this[i].addEventListener('click', handler);
	}
}


var jQuery = function(param) {
	
	if(typeof(param) === 'function'){
		window.addEventListener('load', param);
	}
	
	var elements;
	
	if(typeof(param) === 'string'){
		elements = document.querySelectorAll(param);
	}
	
	return new _jQuery(elements || []);
	
	
}

var $ = jQuery;