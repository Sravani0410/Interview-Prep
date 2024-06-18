const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

const CommentSchema = new mongoose.Schema({
    text: String,
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Comment = mongoose.model('Comment', CommentSchema);

app.post('/comments', async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save();
    res.send(comment);
});

app.get('/comments', async (req, res) => {
    const comments = await Comment.find().populate('replies').exec();
    res.send(comments);
});

app.post('/comments/:id/replies', async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    const reply = new Comment(req.body);
    await reply.save();
    comment.replies.push(reply);
    await comment.save();
    res.send(reply);
});

app.listen(8075, () => {
    console.log('Server is running on port 8075');
});
