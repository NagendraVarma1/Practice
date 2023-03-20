function updateUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(` Last activity of ${userId} at :  ${new Date().toLocaleString()}`);
            resolve();
        }, 3000);
    });
}


function deletePost(userId, postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(` ${postId} deleted by ${userId}`);
            resolve();
        }, 5000);
    });
}

const userId = 'User';
let posts = ["Post 1", "Post 2", "Post 3"];

function UpdateAppByUserActivity() {
    updateUser(userId)
        .then(() => {
            console.log(`${userId} have posted ---> ${posts} at: ${new Date().toLocaleString()}`);

            const postId = posts.pop();
            return deletePost(userId, postId);
        })
        .then(() => {
            console.log(`${userId} have remaining ${posts} at: ${new Date().toLocaleString()}`);

            const postId = posts.pop();
            return deletePost(userId, postId);
        })
        .then(()=>{
            console.log(`${userId} have remaining ${posts} at: ${new Date().toLocaleString()}`);
        })
        .catch((error) => {
            console.log("something Wrong");
        })
}
UpdateAppByUserActivity();
