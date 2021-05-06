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
    const userProfiles = await getAllProfiles()
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(userProfiles)
    }
  }

  if (event.path === '/aProfile' && event.httpMethod === 'GET') {
    const userProfile = await getProfile('sachiangle@gmail.com')
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(userProfile)
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
    const locations = await getAllLocations()
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(locations)
    }
  }
};

function getAllProfiles () {
  console.log("get all profiles")
  return docClient.scan(
    {
      TableName: "LL_UserProfile"
    }
  ).promise().then((response) => response.Items);
}

function getProfile (emailID) {
  console.log("get profile by ID")
  return docClient.query(
    {
      TableName: "LL_UserProfile",
      KeyConditionExpression: "emailID = :emailID",
      ExpressionAttributeValues: {":emailID": emailID}
    }
  ).promise().then((response) => response.Items);
}

function getAllLocations () {
  console.log("get all locations")
  return docClient.scan(
    {
      TableName: "LL_Locations"
    }
  ).promise().then((response) => response.Items);
}
