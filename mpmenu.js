(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.MPMenu = function (custom) {

    	// Default plugin settings
        var defaults = {
			bodyOverlay: 	'body-overlay',
			menuLink: 		'menu-icon'
		};

		// Merge default and user settings
        var settings = $.extend({}, defaults, custom);

        var methods = {
	        closeMenu: function($this) {
				$(document.body).removeClass('active');
				$($this).removeClass('open');
				$('.' + settings.menuLink).removeClass('active');
				return false;
			},

			toggleMenu: function($this) {
				$(document.body).toggleClass('active');
				$($this).toggleClass('open');
				$('.' + settings.menuLink).toggleClass('active');
				return false;
			}
        };

        var obj = $(this);

        $(document.body).prepend('<div class="' + settings.bodyOverlay + '"></div>');

        $('.' + settings.menuLink).on('click', function(e){
        	e.preventDefault();
        	methods.toggleMenu(obj);
        });

        $('.' + settings.bodyOverlay).on('click', function(e){
        	e.preventDefault();
        	methods.closeMenu(obj);
        });

    };
}));