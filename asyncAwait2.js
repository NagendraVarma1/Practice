const user = 'Varma';
const posts = [];

const posted = async () => {

    const lastActivityTime = new Promise((resolve) => {
        setTimeout(() => resolve(new Date().toLocaleString()), 1000)
    })

    const createPost1 = new Promise((resolve) => {
        setTimeout(() => {
            posts.push({title: 'Post One', activeTime: new Date().toLocaleString()})
            resolve({title: 'Post One', activeTime: new Date().toLocaleString()})
        },2000)
    })

    const createPost2 = new Promise((resolve) => {
        setTimeout(() => resolve({title: 'Post Two', activeTime: new Date().toLocaleString()}),3000)
    })

    const deleteRecentPost = new Promise((resolve) => {
        setTimeout(() => {
            let poppedPost = posts.pop();
            resolve(poppedPost);
        },4000)
    })

    let activeTime = await lastActivityTime;

    console.log(`${user} last seen at ${activeTime}`)

    let post1 = await createPost1;

    console.log(`${user} posted ${post1.title} at ${post1.activeTime}`)

    let post2 = await createPost2;

    console.log(`${user} posted ${post2.title} at ${post2.activeTime}`)
    
    let deletePost = await deleteRecentPost;

    console.log(`${user} deleted ${deletePost.title} at ${new Date().toLocaleString()}`)
    
    return new Date().toLocaleString();
}

posted().then((time) => console.log(`${user} last seen at ${time}`))
