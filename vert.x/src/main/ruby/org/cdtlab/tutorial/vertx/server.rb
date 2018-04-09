require 'vertx-web/router'
router = VertxWeb::Router.router($vertx)

router.route().handler() { |routingContext|
  routingContext.response().put_header("content-type", "text/html").end("hello world")
}

$vertx.create_http_server().request_handler(&router.method(:accept)).listen(8080)
