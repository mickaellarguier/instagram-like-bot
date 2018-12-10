function chargeNewPosts() {
    console.log("Loading older posts by scrolling");

    var pageHeight = document.body.scrollHeight;
    window.scrollTo(0, pageHeight);
    
    console.warn("Scroll down : "+pageHeight+"px");
}

function doLike() {
    console.log("Do Like");

    var post = document.querySelectorAll("article a")[0];
    
    if(post) {
        //open post pop-up 
        post.click();

        var heart = document.querySelectorAll(".coreSpriteHeartOpen")[0];
        
        if(heart) {
            console.log("Heart icon detected on the post");

            //get heart status
            var status = heart.childNodes[0].getAttribute("aria-label");

            //if like status available - LIKE!
            if(status == "Like") {
                console.warn("Like !");
                heart.click();
                likeCount++;
                console.log("Like count : "+likeCount);
            }
            else {
                console.warn("Already liked");
            }

            document.querySelectorAll('[role="dialog"]')[0].click();
        }

        post.remove();
    }


    else {
        console.warn("All posts are processed... charge new posts");
        chargeNewPosts();
    }

    //random ms delay > 4s & < 14s  
    var nextTime = Math.random() * (14000 - 4000) + 4000;

    //check limit
    if(likeCount < likeLimit) {
        console.warn("Like nb < "+likeLimit+" - next action : "+ nextTime+"ms");
        setTimeout(doLike, nextTime);
    }
    else {
        console.log("End... see you later :)");
    }
}

var likeCount = 0;
var likeLimit = 100;
doLike();