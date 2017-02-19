'use strict';

const path = require( 'path' );
const express = require( 'express' );
const config = require( './config' );

const app = express();

// presentations
app.use( '/presentations', require( './server/api/presentations/crud' ) );
app.use( '/api/presentations', require( './server/api/presentations/api' ) );

app.get( '/', function ( req, res ) {
	res.send( "Hello World" );
} );

// Basic 404 handler
app.use( ( req, res ) => {
	res.status( 404 )
		.send( 'Not Found' );
} );

// Basic error handler
app.use( ( err, req, res, next ) => {
	/* jshint unused:false */
	console.error( err );
	// If our routes specified a specific response, then send that. Otherwise,
	// send a generic message so as not to leak anything.
	res.status( 500 )
		.send( err.response || 'Something broke!' );
} );

if ( module === require.main ) {
	// Start the server
	const server = app.listen( config.get( 'PORT' ), () => {
		const port = server.address()
			.port;
		console.log( `App listening on port ${port}` );
	} );
}

module.exports = app;
