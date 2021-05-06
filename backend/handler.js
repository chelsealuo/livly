'use strict';

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

const headers = {
  'Access-Control-Allow-Origin': '*'
}

module.exports.hello = async (event) => {
  if (event.path === '/whoami' && event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          username: 'sva22'
        }
      ),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        input: event,
      },
      null,
      2
    ),
  };


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.profile = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    // return the expected status and CORS headers
    return {
        statusCode: 200,
        headers
    }
  }
  
  if (event.path === '/userProfiles' && event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify([
        {
          bio: "I live in a pineapple under the sea",
          category: "Food",
          emailID: "sachiangle@gmail.com",
          pictureURL: "https://static.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190921125147",
          subcategory: "seafoood"
        },
        {
          bio: "I will find the Avatar to restore my Honor",
          category: "Bar",
          emailID: "cl773@cornell.edu",
          pictureURL: "https://pbs.twimg.com/profile_images/1249128418844631040/MJiiRdSu_400x400.jpg",
          subcategory: "revenge"
        }
      ]),
    }
  }
};

module.exports.locations = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    // return the expected status and CORS headers
    return {
        statusCode: 200,
        headers
    }
  }

  if (event.path === '/locations' && event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify([
        {
          category: "Bar",
          emailID: "cl773@cornell.edu",
          Latitude: "testLat2",
          locID: "testLocId2",
          locName: "The Fire Island",
          Longitude: "testLong2"
        },
        {
          category: "Food",
          emailID: "sachiangle@gmail.com",
          Latitude: "testLat",
          locID: "testLocId",
          locName: "Krabby Patty",
          Longitude: "testLong"
        }
      ]),
    }
  }
};
