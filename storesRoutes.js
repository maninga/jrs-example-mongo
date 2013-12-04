    var declare = require('simpledeclare'); // Declare module

    var dbSpecific = require('./dbSpecific-mongo.js');

    exports = module.exports = function( app ){

      var JRS = dbSpecific.JRS;
      var Schema = dbSpecific.Schema;
    
      var People = declare( JRS, {
    
        schema: new Schema({
          _id     : { type: 'id' },
          name   : { type: 'string', trim: 60 },
          surname: { type: 'string', trim: 60 },
        }),
    
        paramIds: [ '_id' ],
        storeName: 'People',
    
        handlePut: true,
        handlePost: true,
        handleGet: true,
        handleGetQuery: true,
        handleDelete: true,
    
        hardLimitOnQueries: 50,
      });
    
      People.onlineAll( app, '/people/', ':_id' );
    }
