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
    username: followeeUsername,
  });
  if (!isFolloweeExit) {
    return res.status(200).json({
      message: "this user is not exits"
    })
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    following: followeeUsername,
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: `"you are already following" ${followeeUsername}`,
      follow: isAlreadyFollowing
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

async function unfollowUserController(req, res) {

  const followerUsername = req.user.username
  const followeeUsername = req.params.username

  const isFollowingUser = await followModel.findOne({
    follower: followerUsername,
    following: followeeUsername
  })
  if (!isFollowingUser) {
    return res.status(200).json({
      message: `you are not following ${followeeUsername}`
    })
  }

  await followModel.findByIdAndDelete(isFollowingUser._id)
  res.status(200).json({
    message: `you have unfollowed ${followeeUsername}`
  })


}

async function suggestedUsers(req, res) {
  const currentUser = req.user.username

  const allFollowinguser = await followModel.find({
    follower: currentUser
    // user kis kis ko follow karta hai ka code
  }).select('following -_id')

  const followerDocs = await followModel.find({
    following: currentUser

    // user ko kon kon follow kar raha hai
  }).select('follower -_id')



  const followingUsernames = allFollowinguser.map((val) => {
    return (val.following)
  })

  const otherUser = await userModel.find({
    username: { $nin: [...followingUsernames, currentUser] }
  }).select('username profile')


  res.status(200).json({
    
    message: 'who login is ' + currentUser,
    allFollowinguser,
    followingDocs: followerDocs,
    otherUser
  })




}

module.exports = {
  followUserController,
  unfollowUserController,
  suggestedUsers
};
