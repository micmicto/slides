
var RevealMath = window.RevealMath || (function(){

	var options = Reveal.getConfig().math || {};
	options.mathjax = options.mathjax || 'https://cdn.mathjax.org/mathjax/latest/MathJax.js';
	options.config = options.config || 'TeX-AMS_HTML-full';

	loadScript( options.mathjax + '?config=' + options.config, function() {

		MathJax.Hub.Config({
			messageStyle: 'none',
			tex2jax: {
				inlineMath: [['$','$'],['\\(','\\)']] ,
				skipTags: ['script','noscript','style','textarea','pre']
			},
			skipStartupTypeset: true
		});


		MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub ] );
		MathJax.Hub.Queue( Reveal.layout );

	
		Reveal.addEventListener( 'slidechanged', function( event ) {

			MathJax.Hub.Queue( [ 'Typeset', MathJax.Hub, event.currentSlide ] );

		} );

	} );

	function loadScript( url, callback ) {

		var head = document.querySelector( 'head' );
		var script = document.createElement( 'script' );
		script.type = 'text/javascript';
		script.src = url;


		var finish = function() {
			if( typeof callback === 'function' ) {
				callback.call();
				callback = null;
			}
		}

		script.onload = finish;


		script.onreadystatechange = function() {
			if ( this.readyState === 'loaded' ) {
				finish();
			}
		}


		head.appendChild( script );

	}

})();
