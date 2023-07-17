


class PostModel {
    postId: string;
    postDesc: string;
    protected postTitle: string;
    totalLikes: number;
    private creatorUid!: string;

    get getUid() : string {
        return this.creatorUid;
    };

    set setUid(uid : string) {
        this.creatorUid = uid;
    }

    constructor(postId: string, postDesc: string, postTitle: string, totalLikes: number,) {
        this.postId = postId;
        this.postDesc = postDesc;
        this.postTitle = postTitle;
        this.totalLikes = totalLikes;
    }

    getCreateNewPost() {
        console.log(this.postId, this.postTitle, this.postDesc, this.totalLikes,);
        console.log("Post Created Successfully");
    }

}

class CommissionPerPost extends PostModel{
    price : string;

    constructor(price : string, postId: string, postDesc: string, postTitle: string, totalLikes: number,) {
        super(postId, postDesc, postTitle, totalLikes);
        this.price = price;
    }

    getCommissionPost() {
        console.log(this.postTitle); // it's protected that's why can use in child class
        // console.log(this.creatorUid); // it's private can't use in child class
        console.log(this.price, this.postId, this.postTitle, this.postDesc, this.totalLikes,);
        console.log("Commission Post Created Successfully");
    }
}

let post = new PostModel("1", "this is description", "title", 12,);
let postCommissionVar : CommissionPerPost = new CommissionPerPost("500" , "2", "this is description", "title", 124,);
post.getCreateNewPost();
post.setUid = "34jiw3893o3";
console.log(post.getUid);
postCommissionVar.getCommissionPost();
