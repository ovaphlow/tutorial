package ovaphlow.demo.grpc;

import io.grpc.Server;
import io.grpc.ServerBuilder;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.zaxxer.hikari.HikariDataSource;

public class GRpcServer {
    private static final Logger logger = Logger.getLogger(GRpcServer.class.getName());

    private Server server;

    private void start() throws IOException {
        int port = 5402;
        server = ServerBuilder.forPort(port)
                .addService(new TestServiceImpl())
                .addService(new UserServiceImpl())
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
//        try {
//            Connection conn = DBHandler.getConn();
//            String sql = "select * from public.user limit 20";
//            PreparedStatement ps = conn.prepareStatement(sql);
//            Statement stmt = conn.createStatement();
//            ResultSet rs = stmt.executeQuery("select * from public.user limit 20");
//            while (rs.next()) {
//                logger.log(Level.INFO, rs.getString("username").toString());
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }

        final GRpcServer server = new GRpcServer();
        server.start();
        server.blockUntilShutdown();
    }
}