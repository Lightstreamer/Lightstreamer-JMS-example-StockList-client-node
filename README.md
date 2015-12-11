# Lightstreamer JMS Extender - Basic Stock-List Demo - Node.js Client

<!-- START DESCRIPTION lightstreamer-jms-example-stocklist-client-node -->

This project includes a demo client showing integration between <b>Lightstreamer JMS Extender JavaScript Client Library</b> and the <b>Node.js</b> platform.<br>

![Screenshot](screen_node_large.png)<br>

## Details

The example provides a simple version of the [Stock-List Demo](https://github.com/Lightstreamer/Lightstreamer-JMS-example-Stocklist-client-javascript) where the "stock_name" and "last_price" fields of updated items are just logged to the console.

## Install

If you want to install a version of this demo pointing to your local Lightstreamer JMS Extender, follow these steps.
In particular, this readme file details the steps required to execute the demo calling the node executable from the command line.

* Note that, as prerequisite, the [Lightstreamer JMS Extender - Stock-List Demo - Java (JMS) Service](https://github.com/Lightstreamer/Lightstreamer-JMS-example-StockList-service-java) has to be deployed on your local Lightstreamer JMS Extender instance. Please check out that project and follow the installation instructions provided with it.
* Launch Lightstreamer JMS Extender.
* Get the `lightstreamer-jms-client` package using npm:

  * `npm install lightstreamer-jms-client`

  or from the root folder of this project simply run:

  * `npm install`

<!-- END DESCRIPTION lightstreamer-jms-example-stocklist-client-node -->

Now, you need to configure `src/index.js` of this example by specifying the name of the JMS connector you are going to use. By default, the demo will look for the <b>HornetQ</b> JMS connector, please refer to the related [Service project](https://github.com/Lightstreamer/Lightstreamer-JMS-example-StockList-service-java) for more details on the choice of a JMS broker to be used.
To set the JMS connector name, look where the connection is created:

```js
  TopicConnectionFactory.createTopicConnection("http://localhost:8080/", "HornetQ", null, null, {
```

You can now run the included example. From the root folder of this project run

```sh
node src/index.js
```

or

```sh
iojs src/index.js
```

## See Also

### Lightstreamer Service Needed by This Demo Client

<!-- START RELATED_ENTRIES -->
* [Lightstreamer JMS Extender - Stock-List Demo - Java (JMS) Service](https://github.com/Lightstreamer/Lightstreamer-JMS-example-StockList-service-java)

<!-- END RELATED_ENTRIES -->
### Related Projects

* [Lightstreamer JMS Extender - Basic Stock-List Demo - HTML Client](https://github.com/Lightstreamer/Lightstreamer-JMS-example-StockList-client-javascript)
* [Lightstreamer JMS Extender - Basic Chat Demo - HTML Client](https://github.com/Lightstreamer/Lightstreamer-JMS-example-Chat-client-javascript)
* [Lightstreamer JMS Extender - Basic Portfolio Demo - HTML Client](https://github.com/Lightstreamer/Lightstreamer-JMS-example-Portfolio-client-javascript)
* [Lightstreamer - Stock-List Demos - HTML Clients](https://github.com/Lightstreamer/Lightstreamer-example-StockList-client-javascript)

## Lightstreamer Compatibility Notes

* Compatible with Lightstreamer JMS Extender JavaScript Client library since version 1.2 or newer.
* Compatible with Lightstreamer JMS Extender since version 1.5 or newer.
