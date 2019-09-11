package ovaphlow.demo.grpc;

import io.grpc.stub.StreamObserver;

public class TestServiceImpl extends TestGrpc.TestImplBase {

    @Override
    public void save(SaveRequest req, StreamObserver<SaveReply> responseObserver) {
        System.out.println(req);
        SaveReply reply = SaveReply.newBuilder().setMessage("Save " + req.getName()).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }
}
