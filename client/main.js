newPostsHandle = Meteor.subscribeWithPagination('newPosts', 10);
bestPostsHandle = Meteor.subscribeWithPagination('bestPosts', 10);
Deps.autorun(function() {
    Meteor.subscribe('singlePost', Session.get('currentPostId'));1
    Meteor.subscribe('comments', Session.get('currentPostId'));
});
Meteor.subscribe('notifications');