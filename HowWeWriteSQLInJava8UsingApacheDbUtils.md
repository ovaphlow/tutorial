# How we write SQL in Java8 (using Apache DbUtils)

```Java
try (Connection c = getConnection()) {
    String sql = "select schema_name, is_default " +
                 "from information_schema.schemata " +
                 "order by schema_name";

    new QueryRunner()
        .query(c, sql, new ArrayListHandler())

        // We can transform any Collection into a Stream
        .stream()
        .map(array -> new Schema(
            (String) array[0],
            (Boolean) array[1]
        ))

        // ... and then profit from the new Stream methods
        .forEach(System.out::println);
}
```
