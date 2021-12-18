```java
/**
  * Map转实体类共通方法
  *
  * @param type 实体类class
  * @param map map
  * @return Object
  * @throws Exception
  */
public static Object convertMap(Class type, Map map) throws Exception {
    BeanInfo beanInfo = Introspector.getBeanInfo(type);
    Object obj = type.newInstance();
    PropertyDescriptor[] propertyDescriptors =  beanInfo.getPropertyDescriptors();
    for (PropertyDescriptor descriptor : propertyDescriptors) {
        String propertyName = descriptor.getName();
        if (map.containsKey(propertyName)) {
            Object value = map.get(propertyName);
            descriptor.getWriteMethod().invoke(obj, value);
        }
    }
    return obj;
}
```

```java
/**
  * 实体类转Map共通方法
  *
  * @param bean 实体类
  * @return Map
  * @throws Exception
  */
public static Map convertBean(Object bean) throws Exception {
    Class type = bean.getClass();
    Map returnMap = new HashMap();
    BeanInfo beanInfo = Introspector.getBeanInfo(type);
    PropertyDescriptor[] propertyDescriptors =  beanInfo.getPropertyDescriptors();
    for (PropertyDescriptor descriptor : propertyDescriptors) {
        String propertyName = descriptor.getName();
        if (!propertyName.equals("class")) {
            Method readMethod = descriptor.getReadMethod();
            Object result = readMethod.invoke(bean);
            if (result != null) {
                returnMap.put(propertyName, result);
            } else {
                returnMap.put(propertyName, "");
            }
        }
    }
    return returnMap;
}
```