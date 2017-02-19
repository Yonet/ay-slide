'use strict';

const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const config = require( '../../../config' );

function getModel() {
	return require( `./model-${config.get('DATA_BACKEND')}` );
}

const router = express.Router();

// Automatically parse request body as form data
router.use( bodyParser.urlencoded( {
	extended: false
} ) );

// Set Content-Type for all responses for these routes
router.use( ( req, res, next ) => {
	res.set( 'Content-Type', 'text/html' );
	next();
} );

/**
 * GET /presentations/add
 *
 * Display a page of presentations (up to ten at a time).
 */
// router.get( '/', ( req, res, next ) => {
// 	getModel()
// 		.list( 10, req.query.pageToken, ( err, entities, cursor ) => {
// 			if ( err ) {
// 				next( err );
// 				return;
// 			}
// 			res.render( 'presentations/list.jade', {
// 				presentations: entities,
// 				nextPageToken: cursor
// 			} );
// 		} );
// } );

/**
 * GET /presentations/add
 *
 * Display a form for creating a presentation.
 */
// [START add_get]
router.get( '/add', ( req, res ) => {
	res.render( 'presentations/form.jade', {
		presentation: {},
		action: 'Add'
	} );
} );
// [END add_get]

/**
 * POST /presentations/add
 *
 * Create a presentation.
 */
// [START add_post]
router.post( '/add', ( req, res, next ) => {
	const data = req.body;

	// Save the data to the database.
	getModel()
		.create( data, ( err, savedData ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.redirect( `${req.baseUrl}/${savedData.id}` );
		} );
} );
// [END add_post]

/**
 * GET /presentations/:id/edit
 *
 * Display a presentation for editing.
 */
router.get( '/:presentation/edit', ( req, res, next ) => {
	getModel()
		.read( req.params.presentation, ( err, entity ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.render( 'presentations/form.jade', {
				presentation: entity,
				action: 'Edit'
			} );
		} );
} );

/**
 * POST /presentations/:id/edit
 *
 * Update a presentation.
 */
router.post( '/:presentation/edit', ( req, res, next ) => {
	const data = req.body;

	getModel()
		.update( req.params.presentation, data, ( err, savedData ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.redirect( `${req.baseUrl}/${savedData.id}` );
		} );
} );

/**
 * GET /presentations/:id
 *
 * Display a presentation.
 */
router.get( '/:presentation', ( req, res, next ) => {
	getModel()
		.read( req.params.presentation, ( err, entity ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.render( 'presentations/view.jade', {
				presentation: entity
			} );
		} );
} );

/**
 * GET /presentations/:id/delete
 *
 * Delete a presentation.
 */
router.get( '/:presentation/delete', ( req, res, next ) => {
	getModel()
		.delete( req.params.presentation, ( err ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.redirect( req.baseUrl );
		} );
} );

/**
 * Errors on "/presentations/*" routes.
 */
router.use( ( err, req, res, next ) => {
	// Format error and forward to generic error handler for logging and
	// responding to the request
	err.response = err.message;
	next( err );
} );

module.exports = router;
