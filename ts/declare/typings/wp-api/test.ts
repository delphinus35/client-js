/// <reference path="index.d.ts" />
var posts: WPApi.Post;

posts = {
    author: 2,
};

var meta: WPApi.PostMeta = { key: "" + 2 };
declare var wp: any;
var Comment1: WPApi.Comment = {
    author_name: "Author",
    author_email: "foo@bar.com",
    content: "Hi!",

}

new wp.api.models.Comment(Comment1);