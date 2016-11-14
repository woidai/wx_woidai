var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('120.25.229.179:27017/vidzy');

router.get('/',function(req,res){
	var collection = db.get('videos');
		collection.find({},function(err,videos){
			if (err) { throw err;};
			res.json(videos);
		});
	
});
router.post('/',function(req,res){
	if(!req.body.title){
		return;
	}
	var collection = db.get('videos');
	if(req.params.id){
		collection.findOne({
			_id: req.params.id
		},function(err,video){
			if (err) { throw err;};
			res.json(video);
		});
		return;
	}
	
	collection.insert({
		title :req.body.title,
		description: req.body.description
	},function(err,video){
		if (err) { throw err;};
		res.json(video);
	});
});
router.get('/:id',function(req,res){
	var collection = db.get('videos');
	collection.findOne({
		_id: req.params.id
	},function(err,video){
		if (err) { throw err;};
		res.json(video);
	});
});
router.put('/:id',function(req,res){
	var collection = db.get('videos');
	collection.update({
		_id: req.params.id
	},{
		title :req.body.title,
		description: req.body.description
	},function(err,video){
		if (err) { throw err;};
		// res.json(video);
	});

	// var file = req.body.img;
 	// console.log(file);
 	// res.send(file);//打印file

    var file = req.files;
    console.log(file);
    fs.renameSync(file.upload.path,file.upload.originalname);
    res.send(file.upload.path)
});
router.delete('/:id',function(req,res){
	var collection = db.get('videos');
	collection.remove({
		_id: req.params.id
	},function(err,video){
		if (err) { throw err;};
		res.json(video);
	});
});
module.exports = router;
