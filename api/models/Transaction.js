/**
 * Transaction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {

  	type: {
  		type: 'string',
  		required: true
  	},

    agent: {
      type: 'string',
      
    },
	entity:{
		type: 'string',
	},
	bookId:{
		type: 'string',
	},
	bookName:{
	type: 'string',	
	},
	issuedTo:{
	type: 'string',	
	},
	issuedBy:{
		type: 'string',
	},
	duration:{
	type: 'string',	
	},
	dueDate:{
	type: 'string',	
	},
    
    toJSON: function() {
		
     var obj = this.toObject();
	 var mod = {};
	 if(obj.type === 'RETURN'){
		mod = {
			"type": obj.type,
			"agent": obj.agent,
			"entity": obj.entity,
			"id": obj.id,
			"timeStamp":obj.createdAt
			
		}
	 }
	 else {
		 mod = {
			 "type": obj.type,
			"bookId": obj.bookId, 
			"bookName": obj.bookName,
			"issuedTo": obj.issuedTo, 
			"issuedBy": obj.issuedBy, 
			"duration":obj.duration,
			"id": obj.id,
			"dueDate":obj.dueDate,
			"timeStamp":obj.createdAt,
		 }
	 }
     return mod;
    }

  },

};