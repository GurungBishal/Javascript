const http = new easyHTTp();


//GET posts

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {

//     if (err) {
//         console.log(err)
//     } else {
//         console.log(response);
//     }


//     //     //we can call "response whatever we want"
// });

//Get Single Post

// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {

//     if (err) {
//         console.log(err)
//     } else {
//         console.log(response);
//     }


//     //     //we can call "response whatever we want"
// });

//Create data

const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

//Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (err, response) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

//Delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {

    if (err) {
        console.log(err)
    } else {
        console.log(response);
    }


    //     //we can call "response whatever we want"
});



