## 遇到的问题

- svg 的 BUG：很有可能会默认填充颜色，导致无法外部外部 CSS 更改颜色

## 解决：

- 删除 svg 文件中的 fill属性
- 但是如果有多个 svg 文件不想一个个删怎么办？
  - 使用 loader
  - ![image-20211208232400051](C:\Users\11\AppData\Roaming\Typora\typora-user-images\image-20211208232400051.png)

