import db from './../models/index';

const commentController = {};

commentController.post = (req, res) => {
  const { 
    text,
    userId,
    postId
   } = req.body;
  const comment = new db.Comment({
    text,
    _creator: userId,
    _post: postId
  });

  comment.save().then((newComment) => {
    db.Post.findByIdAndUpdate(
      postId,
      { $push: { '_comments': newComment._id } },
      {new: true}
    ).then((existingPost) => {
        return res.status(200).json({
          success: true,
          data: newComment, existingPost
      });
    }).catch((err) => {
      return res.status(500).json({
        message: err
      });
    });
  }).catch((err) => {
    return res.status(500).json({
      message: err
    });
  });
}


export default commentController;