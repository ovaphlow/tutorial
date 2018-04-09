package org.cdtlab.tutorial.vertx

import io.vertx.ext.web.Router

class Server : io.vertx.core.AbstractVerticle()  {
  override fun start() {
    var router = Router.router(vertx)

    router.route().handler({ routingContext ->
      routingContext.response().putHeader("content-type", "text/html").end("hello world")
    })

    vertx.createHttpServer().requestHandler({ router.accept(it) }).listen(8080)
  }
}
