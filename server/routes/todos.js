var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
const shortid = require('shortid');

db.defaults({ todos: [] })
  .write()
 
router.get('/', function(req, res, next) {
   
  res.send(db.getState())
});

router.post('/', function(req, res, next) {

    title = req.body.title

    let id = shortid.generate()

    db.get('todos')
    .push({ id, title })
    .write()

    res.status(200).send({title, id})
});

router.post('/remove', function(req, res, next) {

    db.get('todos')
    .remove({ id: req.body.id })
    .write()

    res.status(200).send('Todo has been removed')
});

module.exports = router;
