//In this file we will create mySQL commands 
const connection = require("../config/connection.js");

const orm = {
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM ??";
		connection.query(queryString,[table], function(err, result){
			if(!!err)
				throw err;
			cb(result);

		});
	},
	//sql insert statement
	insertOne: function(table, name, cb){
		var queryString = "INSERT into burgers (burger_name, devoured) VALUES (?,?)";
		connection.query(queryString, [name, false], function(err, result){
			if(!!err)
				throw err;
			console.log("Inserted");
			cb(result);
		});

	},
	updateOne: function(id, cb){
		var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
		connection.query(queryString, [id], function(err, result){
			if(!!err)
				throw err;
			cb(result);

		});
	}
};

module.exports = orm;
