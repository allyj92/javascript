const tweetForm = document.querySelector("#tweetForm")

tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
   
    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;
    addTweet(username,tweet);
    tweetForm.elements.username.value='';
    tweetForm.elements.tweet.value='';
    

   
});

const addTweet = (username,tweet)=>{
    const tweetsContainer = document.querySelector('#tweets');
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}