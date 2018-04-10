package cn.cdtlab.digitalarchive.mainline

import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/test")
open class TestController {

  @RequestMapping("/{id}", method = arrayOf(RequestMethod.GET))
  open fun get(@PathVariable id: Long) = Response(200, "1123")
}