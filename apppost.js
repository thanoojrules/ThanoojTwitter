// Import necessary packages
require('dotenv').config(); // Load environment variables from .env file
const { TwitterApi } = require('twitter-api-v2'); // Import Twitter API library

// Initialize the client with your credentials
const client = new TwitterApi({
    appKey: process.env.API_KEY,            // Your API Key
    appSecret: process.env.API_SECRET_KEY,  // Your API Secret Key
    accessToken: process.env.ACCESS_TOKEN,   // Your Access Token
    accessSecret: process.env.ACCESS_TOKEN_SECRET // Your Access Token Secret
});

// Use the readWrite client for actions that change data (like posting tweets)
const rwClient = client.readWrite; // This is crucial for posting tweets

// Function to post a new tweet
async function postTweet(content) {
    try {
        const response = await rwClient.v2.tweet(content); // Post the tweet
        console.log('Tweet posted successfully:', response); // Log success message
    } catch (error) {
        console.error('Error posting tweet:', error.response ? error.response.data : error); // Log error message
    }
}

// Call the function to post a tweet
postTweet("Hello from Twitter API!"); // Replace with your desired tweet content