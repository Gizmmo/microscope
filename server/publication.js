Meteor.publish('posts', function(){
    return Posts.find({}, {fields: {
        url: true,
        author: true,
        title: true
    }});
});

Meteor.publish('comments', function() {
    return Comments.find();
});