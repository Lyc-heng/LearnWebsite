# 关于ShadowDOM #

----------
> 在调试Video的下方进度条时偶然发现的功能，在Chrome的F12中按下F1可以勾选Show user agent shadow DOM的选项，可以查看原本只有一行的video代码下竟然有那么多实现的代码，通过修改shadow DOM下的选项，可以调整进度条的设定。也可以查看一些控件背后CSS+HTML的实现方法。

## 引言 ##
> ShadowDOM主要解决的而是一个文档中可能出现的需要交互的多个DMO树建立和维护各自功能的问题

> 上面这句话的意思就是，当开发一个控件的时候，这个控件内部是由很多HTML+CSS标签组成的，这些元素称为DOM树的子树。如果这些控件被广泛的使用，则我们在使用的时候会把全部的子树都暴露出来，看起来会相当的混乱，而且选择器也可能无意中会改变控件内部节点的样式，导致奇怪的排版。

> 我们在使用控件的时候，只关心控件本身，并不关心它的内在内容，所以必须有一种方法把它们给封装起来，也就是ShadowDOM,它不仅能封装消息并且还不会导致渲染失败。

## 注意事项 ##
1. 原先我想通过JS来访问DOM结构，但最后失败了。查阅资料后显示是需要通过特殊接口进行访问document.querySelector(‘#div’).shadowRoot.querySelector(‘#name’).innerHTML
2. ShadowDOM的兼容性相当差。IE8~11、Edge15~16、Firefox54~57、Chrome45~50都不支持ShadowDOM，safari能提供部分支持，Android Browser在5.6才能进行支持。