package ovaphlow.prototype.grpc.data;

import com.google.gson.Gson;
import io.grpc.stub.StreamObserver;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapHandler;
import org.apache.commons.dbutils.handlers.MapListHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserServiceImpl extends UserGrpc.UserImplBase {
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Override
    @SuppressWarnings("unchecked")
    public void signIn(UserRequest req, StreamObserver<UserReply> responseObserver) {
        Gson gson = new Gson();
        Map<String, Object> body = gson.fromJson(req.getData(), Map.class);
        Map<String, Object> resp = new HashMap<>();
        resp.put("message", "");
        resp.put("content", "");

        try (Connection conn = DBUtil.getConnection()) {
            String sql = "select id, uuid, username " +
                    "from public.common_user " +
                    "where username = ? and password = ? " +
                    "limit 100";
            QueryRunner qr = new QueryRunner();
            List<Map<String, Object>> result = qr.query(conn, sql, new MapListHandler(),
                    body.get("username").toString(),
                    body.get("password").toString());
            resp.put("content", result);
        } catch (Exception e) {
            e.printStackTrace();
            resp.put("message", "gRPC服务错误");
        }

        UserReply reply = UserReply.newBuilder().setData(gson.toJson(resp)).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

    @Override
    @SuppressWarnings("unchecked")
    public void signUp(UserRequest req, StreamObserver<UserReply> responseObserver) {
        Gson gson = new Gson();
        Map<String, Object> body = gson.fromJson(req.getData(), Map.class);
        Map<String, Object> resp = new HashMap<>();
        resp.put("message", "");
        resp.put("content", "");

        try (Connection conn = DBUtil.getConnection()) {
            String sql = "insert into public.common_user (uuid, username, password) " +
                    "values (?, ?, ?) " +
                    "returning id";
            QueryRunner qr = new QueryRunner();
            Map<String, Object> result = qr.query(conn, sql, new MapHandler(),
                    body.get("uuid").toString(),
                    body.get("username").toString(),
                    body.get("password").toString());
            resp.put("content", result);
        } catch (Exception e) {
            e.printStackTrace();
            resp.put("message", "gRPC服务错误");
        }

        UserReply reply = UserReply.newBuilder().setData(gson.toJson(resp)).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }
}
