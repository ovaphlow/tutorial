# 使用 kts 作为 gradle 的配置文件

setting.gradle.kts

```kotlin
rootProject.name = "jianzhima-biz"
```

build.gradle.kts

```kotlin
plugins {
  id("org.springframework.boot") version "2.5.4"
  id("io.spring.dependency-management") version "1.0.11.RELEASE"
  id("java")
}

group = "ovaphlow"
version = "0.0.1"

repositories {
  maven { setUrl("https://maven.aliyun.com/repository/public/") }
  mavenCentral()
}

dependencies {
  implementation("org.springframework.boot:spring-boot-starter-data-r2dbc")
  implementation("org.springframework.boot:spring-boot-starter-webflux")
  developmentOnly("org.springframework.boot:spring-boot-devtools")
  runtimeOnly("io.r2dbc:r2dbc-postgresql")
  runtimeOnly("org.postgresql:postgresql")
}

java {
  sourceCompatibility = JavaVersion.VERSION_16
  targetCompatibility = JavaVersion.VERSION_16
}
```
