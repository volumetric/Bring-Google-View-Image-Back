'use strict';

// console.log('[bgvib] LOG START');


// var jq = document.createElement('script');
// jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
// document.getElementsByTagName('head')[0].appendChild(jq);


// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict();

// var view_image_btn_added = false;

jQuery('body').on('click', '.ivg-i', function(){
	// console.log('on click');
	// console.log('1', jQuery('#irc_bg .irc_mi').length, jQuery('#irc_bg .irc_mi')[1]);

	setTimeout(function(){
		// var img_url = jQuery(jQuery('#irc_bg .irc_mutc .irc_mi')[2]).attr('src');

		if (jQuery('#irc_bg #irc_cc div[style*=\'translate3d(0px, 0px, 0px)\'] .irc_but_r td').length <= 4) {
			var cc = jQuery(jQuery('#irc_bg #irc_cc div[style*=\'translate3d(0px, 0px, 0px)\'] .irc_but_r td')[0]).clone();
			cc.find('a span:last-child').html('View Image');
			cc.insertAfter(jQuery('#irc_bg #irc_cc div[style*=\'translate3d(0px, 0px, 0px)\'] .irc_but_r td:first-child'));
			// view_image_btn_added = true;
		}

		// #irc_bg #irc_cc div[style*='translate3d(0px, 0px, 0px)']
		var img_url = jQuery('#irc_bg #irc_cc div[style*=\'translate3d(0px, 0px, 0px)\'] .irc_mi').attr('src')
		// console.log('[bgvib] img_url:', img_url);
		jQuery('#irc_bg #irc_cc div[style*=\'translate3d(0px, 0px, 0px)\'] .irc_but_r td:nth-child(2) a').attr('href', img_url);
	}, 800);
})


