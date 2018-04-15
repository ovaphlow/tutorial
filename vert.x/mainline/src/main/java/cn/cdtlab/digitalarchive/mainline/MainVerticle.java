package cn.cdtlab.digitalarchive.mainline;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpServer;

public class MainVerticle extends AbstractVerticle {

  @Override
  public void start() {
    HttpServer server = vertx.createHttpServer();
    server.requestHandler(req -> {
      req.response()
        .putHeader("content-type", "text/plain")
        .end("Hello from Vert.x!");
    }).listen(8080);
    System.out.println("HTTP server started on port 8080");
  }

  public static void main(String[] args) {
    new MainVerticle().start();
  }
}
