const followModel = require("../model/follow.model");
const userModel = require("../model/user.model");

async function followUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  if (followeeUsername === followerUsername) {
    return res.status(200).json({
      message: "you can not following yourself",
    });
  }

  const isFolloweeExit = await userModel.findOne({
   username:followeeUsername,
  });
  if (!isFolloweeExit) {
    return res.status(200).json({
        message:"this user is not exits"
    })
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    following: followeeUsername,
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: `"you are already following" ${ followeeUsername }`,
      follow:isAlreadyFollowing
    });
  }
  const followRecode = await followModel.create({
    follower: followerUsername,
    following: followeeUsername,
  });

  res.status(201).json({
    message: `you follow ${followeeUsername} is user`,
    follow: followRecode,
  });
}

async function unfollowUserController(req,res){

    const followerUsername = req.user.username
    const followeeUsername = req.params.username

const isFollowingUser = await followModel.findOne({
    follower:followerUsername,
    following:followeeUsername
})
if (!isFollowingUser) {
    return res.status(200).json({
        message:`you are not following ${followeeUsername}`
    })
}

await followModel.findByIdAndDelete(isFollowingUser._id)
res.status(200).json({
    message:`you have unfollowed ${followeeUsername}`
})


}

async function allFollowing(req,res) {
  const user = req.user.username

  const allFollowing = await followModel.find({
    follower:user

    // user kis kis ko follow karta hai ka code
  }).select('following -_id')

  const allFollower = await followModel.find({
    following:user

    // user ko kon kon follow karte hai
  }
  ).select('follower -_id')

  return res.status(200).json({
 message:'who login is '+user,
    allFollowing, 
    allFollower
  })
  
}

module.exports = {
  followUserController,
  unfollowUserController,
  allFollowing
};
