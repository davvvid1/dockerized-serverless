const AWS = require('aws-sdk');

module.exports.putDcument = function (event, context, callback) {
  // console.log(event);
  const dynamoDb = new AWS.DynamoDB.DocumentClient({
    api_version: '2012-08-10',
    region: 'us-east-1'
  });
  return dynamoDb.put({
    TableName: 'serverless-table',
    Item: {propertyA: 'third'}
  }).promise()
    .then(result => {
      console.log(result);
      callback(null, { statusCode: 200, body: 'My response888!!!' })
    })
    .catch(error => {
      console.log(error);
      callback(null, { statusCode: 500, body: 'Error' })
    })
};

module.exports.queryDocuments = function (event, context, callback) {
  // console.log(event);
  const dynamoDb = new AWS.DynamoDB.DocumentClient({
    api_version: '2012-08-10',
    region: 'us-east-1'
  });
  dynamoDb.query({
    TableName: 'serverless-table',
    KeyConditionExpression: "propertyA = :propertyA",
    ExpressionAttributeValues: {
      ":propertyA": 'haha'
    }
  }).promise()
    .then(result => {
      console.log('DAWID TEST');
      console.log(result);
      callback(null, { statusCode: 200, body: JSON.stringify(result) }) // without stringify it gives 500 without reason in logs!
    })
    .catch(error => {
      console.log(error);
      callback(null, { statusCode: 500, body: 'Error' })
    })
};
