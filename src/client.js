/*
Copyright (c) Lightstreamer Srl

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const jms = require('lightstreamer-jms-client');

jms.TopicConnectionFactory.createTopicConnection("http://localhost:8080/", "ActiveMQ", null, null, {
    onConnectionCreated: function(conn) {

      // Connection succeeded, topic subscription
      var topicSession = conn.createSession(false, "PRE_ACK");
      var topic = topicSession.createTopic("stocksTopic");
      var consumer = topicSession.createConsumer(topic, null);

      // Add listener to message consumer
      consumer.setMessageListener({
        onMessage: function(message) {

          // Message received
          var feedMessage = message.getObject();
          if (!feedMessage.currentValues) {
            return;
          }

          var key= feedMessage.itemName;
          var values= feedMessage.currentValues;

          // Log the received data
          console.log(values["stock_name"] + ": " + values["last_price"]);
        }
      });

      // Start the connection
      conn.start();

    },
    onConnectionFailed: function(errorCode, errorMessage) {

      // Connection failed, show the error
      console.log("Error: " + errorCode + " " + errorMessage);

    },
    onLSClient: function(lsClient) {

      // Add connection status logging (optional)
      lsClient.addListener({
        onStatusChange: function(newStatus) {
          console.log(newStatus);
        }
      });
    }
});
