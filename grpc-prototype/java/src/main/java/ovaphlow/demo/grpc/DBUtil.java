package ovaphlow.demo.grpc;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.HashMap;
import java.util.Map;

public class DBUtil {
    public static Map<String, String> getMap(ResultSet rs) throws Exception {
        Map<String, String> result = new HashMap<>();
        ResultSetMetaData rsmd = rs.getMetaData();
        int count = rsmd.getColumnCount();
        for (int i = 1; i <= count; i++) {
            String key = rsmd.getColumnLabel(i);
            String value = rs.getString(i);
            result.put(key, value);
        }
        return result;
    }
}
