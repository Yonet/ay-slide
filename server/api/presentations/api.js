'use strict';

const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const config = require( '../../../config' );

function getModel() {
	return require( `./model-${config.get('DATA_BACKEND')}` );
}

const router = express.Router();

// Automatically parse request body as JSON
router.use( bodyParser.json() );

/**
 * GET /api/presentations
 *
 * Retrieve a page of presentations (up to ten at a time).
 */
router.get( '/', ( req, res, next ) => {
	getModel()
		.list( 10, req.query.pageToken, ( err, entities, cursor ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.json( {
				items: entities,
				nextPageToken: cursor
			} );
		} );
} );

/**
 * POST /api/presentations
 *
 * Create a new presentation.
 */
router.post( '/', ( req, res, next ) => {
	getModel()
		.create( req.body, ( err, entity ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.json( entity );
		} );
} );

/**
 * GET /api/presentations/:id
 *
 * Retrieve a presentation.
 */
router.get( '/:presentation', ( req, res, next ) => {
	getModel()
		.read( req.params.book, ( err, entity ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.json( entity );
		} );
} );

/**
 * PUT /api/presentations/:id
 *
 * Update a presentation.
 */
router.put( '/:presentation', ( req, res, next ) => {
	getModel()
		.update( req.params.book, req.body, ( err, entity ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.json( entity );
		} );
} );

/**
 * DELETE /api/presentations/:id
 *
 * Delete a presentation.
 */
router.delete( '/:presentation', ( req, res, next ) => {
	getModel()
		.delete( req.params.book, ( err ) => {
			if ( err ) {
				next( err );
				return;
			}
			res.status( 200 )
				.send( 'OK' );
		} );
} );

/**
 * Errors on "/api/presentations/*" routes.
 */
router.use( ( err, req, res, next ) => {
	// Format error and forward to generic error handler for logging and
	// responding to the request
	err.response = {
		message: err.message,
		internalCode: err.code
	};
	next( err );
} );

module.exports = router;
