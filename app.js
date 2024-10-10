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

// Use the readWrite client for actions that change data (like posting and deleting tweets)
const rwClient = client.readWrite;

// Function to delete a tweet
async function deleteTweet(tweetId) {
    try {
        const response = await rwClient.v2.deleteTweet(tweetId);
        console.log(`Tweet with ID ${tweetId} deleted successfully:`, response);
    } catch (error) {
        console.error('Error deleting tweet:', error);
    }
}

// Example: Delete a tweet with a specific ID
const tweetIdToDelete = '1844390997469344237'; // Replace with the ID of the tweet you want to delete
deleteTweet(tweetIdToDelete);