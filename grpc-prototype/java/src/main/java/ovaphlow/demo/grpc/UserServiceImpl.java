package ovaphlow.demo.grpc;

import io.grpc.stub.StreamObserver;

import java.util.logging.Logger;

public class UserServiceImpl extends UserGrpc.UserImplBase {
    private static final Logger logger = Logger.getLogger(UserServiceImpl.class.getName());

    @Override
    public void list(ListRequest req, StreamObserver<Reply> responseObserver) {
        logger.info("list");
        Reply reply = Reply.newBuilder().setData("List request").build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }
}
