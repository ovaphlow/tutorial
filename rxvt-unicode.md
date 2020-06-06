> ~/.Xresources

```config
!!$HOME/.Xresources
Rxvt.preeditType:Root
!!调整此处设置输入法
Rxvt.inputMethod:fcitx
!!颜色设置
Rxvt.depth:32
!!中括号内数表示透明度
Rxvt.inheritPixmap:true
Rxvt.background:#000000
Rxvt.foreground:#ffffff
Rxvt.colorBD:Gray95
Rxvt.colorUL:Green
Rxvt.color1:Red2
Rxvt.color4:RoyalBlue
Rxvt.color5:Magenta2
Rxvt.color8:Gray50
Rxvt.color10:Green2
Rxvt.color12:DodgerBlue
Rxvt.color14:Cyan2
Rxvt.color15:Gray95
!!URL操作
!!Rxvt.urlLauncher:chromium
Rxvt.matcher.button:1
rxvt.perl-ext-common:matcher
!!滚动条设置
Rxvt.scrollBar:False
Rxvt.scrollBar_floating:False
Rxvt.scrollstyle:plain
!!滚屏设置
Rxvt.mouseWheelScrollPage:True
Rxvt.scrollTtyOutput:False
Rxvt.scrollWithBuffer:True
Rxvt.scrollTtyKeypress:True
!!光标闪烁
Rxvt.cursorBlink:True
Rxvt.saveLines:3000
!!边框
Rxvt.borderLess:False
!!字体设置
Xft.dpi:96
Rxvt.font:xft:Cascadia Mono:antialias=True:pixelsize=15,xft:Source Code Pro:pixelsize=15
Rxvt.boldfont:xft:Cascadia Mono:antialias=True:pixelsize=15,xft:Source Code Pro:pixelsize=15
```

> ~/.xinitrc

```config
xrdb -load ~/Xresources
```
