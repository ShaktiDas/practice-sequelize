var Sequelize = require('sequelize');

var connection = new Sequelize("demo_sequelize_db",	"root",	"");

var Article = connection.define('article',{
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});

connection.sync().then(function(){

	//insert new row in database.

	/*
	Article.create({
		title: "Hello world",
		body: "This is demo text..."
	});
	*/

	//find the article
	/*
	Article.findById(1).then(function(article){
		console.log(article.dataValues);
	});
	*/

	//find all articles
	/*
	Article.findAll().then(function(articles){
		console.log(articles.length);
	});
	*/


	//crate a demo row if there is no data in the database..
	Article.findAll().then(function(articles){
		
		if(articles.length===0){
			Article.create({
				title: "Hello world",
				body: "This is demo text..."
			});
		}

	});


});

