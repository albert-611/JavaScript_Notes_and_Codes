const post = {
    username : "@include.albert",
    content : "This is my #firstPost",
    likes: 200,
    reposts : 50,
    tags : ["@albert", "@include.learning", "@albert_158"]
}

console.log(post.likes);
console.log(post["likes"]);

let prop = "reposts";
console.log(post[prop]);