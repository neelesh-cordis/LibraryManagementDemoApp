/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {

  	name: {
  		type: 'string',
  		required: true
  	},

    author: {
      type: 'string',
      required: true,
      
    },
	imgurl: {
      type: 'string',
	},
   
    availability:{
      type: 'boolean',
      defaultsTo: true
    },
    
    toJSON: function() {
     var obj = this.toObject();
     return obj;
    }

  },

};

