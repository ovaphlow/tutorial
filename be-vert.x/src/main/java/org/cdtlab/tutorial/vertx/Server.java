package org.cdtlab.tutorial.vertx;

import io.vertx.core.AbstractVerticle;
import io.vertx.examples.utils.Runner;
import io.vertx.ext.web.Router;

public class Server extends AbstractVerticle {

  public static void main(String[] args) {
    Runner.runExample(Server.class);
  }

  @Override
  public void start() throws Exception {
    Router router = Router.router(vertx);

    router.route().handler(routingContext -> {
      routingContext.response().putHeader("content-type", "text/html").end("hello world");
    });

    vertx.createHttpServer().requestHandler(router::accept).listen(8080);
  }
}
