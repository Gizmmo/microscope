Posts = new Meteor.Collection('posts');

Posts.allow({
    insert: function(userID, doc){
        //only allow posting if you're logged in
        return !! userID;
    }
})