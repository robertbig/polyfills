(function () {
	function placeHolderFocus(e) {
		e = e || event;
		var t = e.target || e.srcElement,
			placeholder = t.getAttribute('placeholder');
		if(t.value === placeholder) {
			t.value = '';
		}
	}
	function placeHolderBlur(e) {
		e = e || event;
		var t = e.target || e.srcElement,
			placeholder = t.getAttribute('placeholder');
		if(t.value === '') {
			t.value = placeholder;
		}
	}
	function init() {
		var standards = window.addEventListener,
			els = document.getElementsByTagName('*'),
			l = els.length, c = 0, cur;
		for(c; c < l; c = c+1) {
			cur = els[c];
			switch(cur.nodeName.toLowerCase()) {
				case 'input':
				case 'textarea':
					if(cur.getAttribute('placeholder')) {
						if(standards) {
							cur.addEventListener('focus', placeHolderFocus);
							cur.addEventListener('blur', placeHolderBlur);
						} else {
							cur.attachEvent('onfocus', placeHolderFocus);
							cur.attachEvent('onblur', placeHolderBlur);							
						}
						if(cur.value === '') {
							cur.value = cur.getAttribute('placeholder');
						}
					}
				break;
			}
		}
	}
	if(!('placeholder' in document.createElement('input'))) {
		init();
	}
}());
