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
		var username = u.replace( '@', '');
		return u.link( 'http://twitter.com/' + username );
	});
};
String.prototype.parseHashtag = function() {
	return this.replace( /[#]+[A-Za-z0-9-_]+/g, function( t ) {
		var tag = t.replace( '#', '%23' );
		return t.link( 'http://twitter.com/searcq=' + tag );
	});
};

jQuery(document).ready(function( $ ) { // jshint ignore:line
	
	console.log( 'Ready...!' );
		
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

});
