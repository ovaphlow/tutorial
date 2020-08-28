# Awesome WM

## 配置

gap

```lua
beautiful.useless_gap = 6
```

wallpaper

```lua
gears.wallpaper.maximized("/home/ovaph/图片/tr_shadow.jpg")
```

菜单

```lua
mymainmenu = awful.menu({ items = { { "awesome", myawesomemenu, beautiful.awesome_icon },
                                    { "Thunar", "thunar" },
                                    { "Firefox", "firefox" },
                                    { "Firefox DE", "/home/ovaph/firefox/firefox" },
                                    { "open terminal", terminal }
                                  }
                       })
```

tag

```lua
awful.tag({ "1.DEFAULT", "2.CODE", "3.TERMINAL", "4", "5", "6" }, s, awful.layout.layouts[1])
```
