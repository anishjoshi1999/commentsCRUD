const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// Comments
const comments = [
{
	username:"Anish",
	comment:'lol that is so funny'
},
{
	username:"Pradip",
	comment:'love from nepal'
},
{
	username:"Roshan",
	comment:'I liked it'
},
{
	username:"Mahendra",
	comment:'when are you getting married'
}
]
// Routes
// Displaying all the comments
app.get('/comments',(req,res)=>{
	res.render('comments/index.ejs',{comments})
})
// for adding new comments you need to routes 
// for rendering a form to submit new data
app.get('/comments/new',(req,res)=>{
	res.render('comments/new.ejs')
})
// appending data from form into our database
app.post('/comments',(req,res)=>{
	const {username,comment} = req.body
	comments.push({username,comment})
	res.redirect('/comments');
})

app.listen('3000',()=>{
	console.log(`Listening to port 3000`)
})