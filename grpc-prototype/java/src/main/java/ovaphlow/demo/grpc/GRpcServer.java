package ovaphlow.demo.grpc;

import io.grpc.Server;
import io.grpc.ServerBuilder;

import java.io.IOException;
import java.util.logging.Logger;

import com.zaxxer.hikari.HikariDataSource;

public class GRpcServer {
    private static final Logger logger = Logger.getLogger(Server.class.getName());

    private Server server;

    private void start() throws IOException {
        int port = 5402;
        server = ServerBuilder.forPort(port)
                .addService(new TestServiceImpl())
                .build()
                .start();
        logger.info("服务启动于端口 " + port);
        Runtime.getRuntime().addShutdownHook(new Thread() {
            @Override
            public void run() {
                System.err.println("*** shutting down gRPC server since JVM is shutting down");
                GRpcServer.this.stop();
                System.err.println("*** server shut down");
            }
        });
    }

    private void stop() {
        if (server != null) {
            server.shutdown();
        }
    }

    private void blockUntilShutdown() throws InterruptedException {
        if (server != null) {
            server.awaitTermination();
        }
    }

    public static void main(String[] args) throws IOException, InterruptedException {
        final GRpcServer server = new GRpcServer();
        server.start();
        server.blockUntilShutdown();

        logger.info("initialize database connection");
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:postgresql://192.168.1.246:5432/hengda");
        ds.setUsername("kill8268");
        ds.setPassword("");
        ds.addDataSourceProperty("cachePrepStmts", "true");
        ds.addDataSourceProperty("prepStmtCacheSize", "250");
        ds.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
    }
}