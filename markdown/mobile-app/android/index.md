# Android 平台

## 仓库源使用国内镜像源

```gradle
repositories { 
  mavenLocal()
  maven { url 'https://maven.aliyun.com/repository/public/' }
  maven { url 'https://maven.aliyun.com/repository/google/'}
  maven { url 'https://maven.aliyun.com/repository/jcenter/'}
  maven { url 'https://maven.aliyun.com/repository/gradle-plugin/'}
  maven { url 'https://maven.aliyun.com/repository/apache-snapshots/'}
}
```

```kotlin
pluginManagement {
    repositories {
//        maven { setUrl("https://maven.aliyun.com/repository/central") }
//        maven { setUrl("https://maven.aliyun.com/repository/jcenter") }
//        maven { setUrl("https://maven.aliyun.com/repository/google") }
//        maven { setUrl("https://maven.aliyun.com/repository/gradle-plugin") }
//        maven { setUrl("https://maven.aliyun.com/repository/public") }
//        maven { setUrl("https://jitpack.io") }
    }
}
```

## gradle使用腾讯源

```txt
gradle-wrapper.properties

distributionUrl=https\://services.gradle.org/distributions/gradle-8.3-all.zip
替换为
distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-8.3-all.zip
```
