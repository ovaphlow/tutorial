package cn.cdtlab.digitalarchive.mainline

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class MainlineApplication

fun main(args: Array<String>) {
  SpringApplication.run(MainlineApplication::class.java, *args)
}
