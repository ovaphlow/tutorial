package ovaphlow.prototype.grpc.data;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

public class Application {
    private static final Logger logger = LoggerFactory.getLogger(Application.class);

    private Server server;

    private void start() throws IOException {
        server = ServerBuilder.forPort(50051)
                .maxInboundMessageSize(1024 * 1024 * 256)
                .addService(new UserServiceImpl())
                .build()
                .start();
        logger.info("服务启动于端口 " + 50051);
        Runtime.getRuntime().addShutdownHook(new Thread() {
            @Override
            public void run() {
                System.err.println("*** shutting down gRPC server since JVM is shutting down");
                try {
                    Application.this.stop();
                } catch (InterruptedException e) {
                    e.printStackTrace(System.err);
                }
                System.err.println("*** server shut down");
            }
        });
    }

    private void stop() throws InterruptedException {
        if (server != null) {
            server.awaitTermination();
        }
    }

    private void blockUntilShutdown() throws InterruptedException {
        if (server != null) {
            server.awaitTermination();
        }
    }

    public static void main(String[] args) throws IOException, InterruptedException {
        final Application server = new Application();
        server.start();
        server.blockUntilShutdown();
    }
}
