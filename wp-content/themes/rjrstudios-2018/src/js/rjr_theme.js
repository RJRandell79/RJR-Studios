// Theme JS

// TWITTER FEED
var url = 'http://www.rjrstudios.co.uk/rjrstudios-latest-tweet.json?callback=?';

// TWITTER PARSE FUNCTIONS
String.prototype.parseURL = function() {
	return this.replace( /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g,
	function( url ) {
		return url.link( url );
	});
};
String.prototype.parseUsername = function() {
	return this.replace( /[@]+[A-Za-z0-9-_]+/g, function( u ) {
		var username = u.replace( '@', '' );
		return u.link( 'http://twitter.com/' + username );
	});
};
String.prototype.parseHashtag = function() {
	return this.replace( /[#]+[A-Za-z0-9-_]+/g, function( t ) {
		var tag = t.replace( '#', '%23' );
		return t.link( 'http://twitter.com/searcq=' + tag );
	});
};

jQuery( document ).ready(function( $ ) { // jshint ignore:line

	if( $( '.twitter-feed' ).length > 0 ) {
		$.ajax({
			type: 'GET',
			url: url,
			async: true,
			jsonpCallback: 'jsonCallback',
			contentType: 'application/json',
			dataType: 'jsonp',
			success: function( json ) {

		       	// GRAB TWEET
				var tweet = json.tweets[0][0].text;
				var date = json.tweets[0][0].created_at;
				var formattedDate = date.slice(0, -11);

				var formattedTweet = tweet.parseURL().parseUsername().parseHashtag();
				$( '<p/>', { 'class': 'latest-tweet', html: formattedTweet }).appendTo( '.twitter-inner' );
				$( '<p/>', { 'class': 'tweet-date', html: 'Tweeted on: ' + formattedDate }).insertAfter( '.latest-tweet' );
				$( '#twitter' ).find( 'a' ).attr( 'target', '_blank' );
		    },
		    error: function( e ) {
				console.log( e.message );
		    }
		});
	}
	if( $( '.owl-carousel' ).length > 0 ) {
		$( '.owl-carousel' ).owlCarousel({
			loop: true,
			items: 1,
			margin: 0,
			nav: true,
			dots: true,
			lazyLoad: true,
			autoplay: true,
			autoplayTimeout: 6500,
			autoplaySpeed: 2000,
			singleItem: true,
			stagePadding: 0,
			navText : [ '<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>' ],
		});
	}

	$( '.jumpto' ).click( function( e ) {
		var target = $( this ).attr( 'id' );
		$( 'html, body' ).animate({
			scrollTop: $( '#' + target + '-section' ).offset().top
		}, 1000 );

		e.preventDefault();
	});

	console.log( 'Ready...!' );
});
