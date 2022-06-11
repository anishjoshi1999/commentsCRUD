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
{	id:1,
	username:"Anish",
	comment:'lol that is so funny'
},
{	id:2,
	username:"Pradip",
	comment:'love from nepal'
},
{	id:3,
	username:"Roshan",
	comment:'I liked it'
},
{	id:4,
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
// to show to the details of comment
app.get('/comments/:id',(req,res)=>{
	const {id} = req.params
	// searching comment through id
	const foundComment = comments.find((comment) => comment.id === parseInt(id))
	res.render('comments/show.ejs',{foundComment})
})

app.listen('3000',()=>{
	console.log(`Listening to port 3000`)
})