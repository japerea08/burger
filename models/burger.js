const orm = require("../config/orm.js");

//functions to call the orm functions
const burger = {
	selectAll: function(cb){
		//call the orm function
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insert: function(name, cb){
		console.log("Inside insert");
		orm.insertOne("burgers", name, function(res){
			cb(res);
		});
	},

	update: function(id, cb){
		orm.updateOne(id, function(res){
			cb(res);
		});
	}

};

module.exports = burger;