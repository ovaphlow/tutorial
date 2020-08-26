-- 菜单
mymainmenu = awful.menu({ items = { { "awesome", myawesomemenu, beautiful.awesome_icon },
                                    { "Thunar", "thunar" },
                                    { "Firefox", "firefox" },
                                    { "Firefox DE", "/home/ovaph/firefox/firefox" },
                                    { "open terminal", terminal }
                                  }
                       })

-- 修改顶部 TAG
awful.tag({ "1.DEFAULT", "2.CODE", "3.TERMINAL", "4", "5", "6" }, s, awful.layout.layouts[1])

-- autorun
awful.util.spawn_with_shell("ibus-daemon --xim") -- IBUS
awful.util.spawn_with_shell("xrandr --output HDMI-1-1 --rotate right --output HDMI-1-2 --auto --right-of HDMI-1-1") -- 显示器
