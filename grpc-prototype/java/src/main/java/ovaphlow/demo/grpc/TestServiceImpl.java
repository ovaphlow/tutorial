package ovaphlow.demo.grpc;

import io.grpc.stub.StreamObserver;

import java.util.logging.Logger;

public class TestServiceImpl extends TestGrpc.TestImplBase {
    private static final Logger logger = Logger.getLogger(TestServiceImpl.class.getName());

    @Override
    public void save(SaveRequest req, StreamObserver<SaveReply> responseObserver) {
        System.out.println(req);

        SaveReply reply = SaveReply.newBuilder().setMessage("Save " + req.getName()).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }
}
