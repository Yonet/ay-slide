'use strict';

// Hierarchical node.js configuration with command-line arguments, environment
// variables, and files.
const nconf = module.exports = require( 'nconf' );
const path = require( 'path' );

nconf
	// 1. Command-line arguments
	.argv()
	// 2. Environment variables
	.env( [
    'DATA_BACKEND',
    'GCLOUD_PROJECT',
    'MONGO_URL',
    'MONGO_COLLECTION',
    'MYSQL_USER',
    'MYSQL_PASSWORD',
    'PORT'
  ] )
	// 3. Config file
	.file( {
		file: path.join( __dirname, 'config.json' )
	} )
	// 4. Defaults
	.defaults( {
		// dataBackend can be 'datastore', 'cloudsql', or 'mongodb'. Be sure to
		// configure the appropriate settings for each storage engine below.
		// If you are unsure, use datastore as it requires no additional
		// configuration.
		DATA_BACKEND: 'mongodb',

		// This is the id of your project in the Google Cloud Developers Console.
		GCLOUD_PROJECT: 'ay-slide',

		// MongoDB connection string
		// https://docs.mongodb.org/manual/reference/connection-string/
		MONGO_URL: 'mongodb://localhost:27017',
		MONGO_COLLECTION: 'slides',

		MYSQL_USER: '',
		MYSQL_PASSWORD: '',

		// Port the HTTP server
		PORT: 8080
	} );

// Check for required settings
checkConfig( 'GCLOUD_PROJECT' );

// if ( nconf.get( 'DATA_BACKEND' ) === 'cloudsql' ) {
// 	checkConfig( 'MYSQL_USER' );
// 	checkConfig( 'MYSQL_PASSWORD' );
// 	if ( nconf.get( 'NODE_ENV' ) === 'production' ) {
// 		checkConfig( 'INSTANCE_CONNECTION_NAME' );
// 	}
// } else if ( nconf.get( 'DATA_BACKEND' ) === 'mongodb' ) {
checkConfig( 'MONGO_URL' );
checkConfig( 'MONGO_COLLECTION' );
// }

function checkConfig( setting ) {
	if ( !nconf.get( setting ) ) {
		throw new Error( `You must set ${setting} as an environment variable or in config.json!` );
	}
}
