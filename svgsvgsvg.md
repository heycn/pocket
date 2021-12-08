## 遇到的问题

- svg 的 BUG：很有可能会默认填充颜色，导致无法更改颜色

## 过程

- 尝试用外部 CSS 修改颜色，无法解决
- 在谷歌搜了很多没找到解决方法
- 把代码重写了一遍，无法解决
- 最终我查看了 svg 的***原文件***，我就发现了 svg 原文件里有 fill 属性，所以我开始尝试删除掉 fill 属性，最终成功

## 解决：

- 删除 svg 文件中的 fill属性
- 但是如果有多个 svg 文件不想一个个删怎么办？
  - 使用 loader
  - ![image-20211208232400051](C:\Users\11\AppData\Roaming\Typora\typora-user-images\image-20211208232400051.png)

