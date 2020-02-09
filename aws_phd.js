const AWS = require('aws-sdk');
const yaml = require('js-yaml');

exports.handler = async (event) => {
  //phd event
  console.log("event" + event);
  
  // dump JSONString
  const JSONString = JSON.stringify(event, null, 2);
  console.log("JSONString" + JSONString);
  
  // decode URI
  const decodeuri = decodeURI(JSONString);
  console.log("decodeuri" + decodeuri);

  // parse JSON
  const json = JSON.parse(decodeuri);
  console.log("json" + json);

  // dump yaml
  const yamlText = yaml.safeDump(json);
  console.log("yamlText" + yamlText);

  // send sns
  messages = "AWS Personal Health Dashboard から通知がきました" + "\n\n" + yamlText ;
  var topicarn = 'arn:aws:sns:ap-northeast-1:123456789876:topic_name'
  
  const params = {
    Message: messages,
    TopicArn: topiarn
  };
  
  const createTopicPromise = new AWS.SNS().publish(params).promise();
  await createTopicPromise.then((data) => {
    console.log('MessageID is ' + data.MessageId);
  }).catch((err) => {
    console.error(err, err.stack);
  });
};
