## 本文件夹用于配置学术论文页面信息

> 本页面支持以HTML方式编辑，如果超链接到外网，链接地址务必以`http`或`https`开头

编辑本目录下`paper.js`文件，可配置学术论文`年份`与`标题`信息。

格式如下：

```js
const paperInfo = [
    {
        'year':'2012',
        'paper':[
            '张栋, 高龙. 基于双向搜索的虚拟网映射算法[J]. 福州大学学报, 2012(5):572-577.',
            'Zhang Dong. Virtual A study on virtual network decomposing mapping based on network balance, Chinese Journal of Electronics, 4th International Conference on Computational and Information Sciences, IEEE 2012, Chongqing, P.R. China, 2012.8.17-8.19',
        ]
    },
    {
        'year':'2011',
        'paper':[
            '齐宁, 王保进, 汪斌强, 张栋. 均衡虚拟网构建算法研究[J]. 电子与信息学报. 2011, 33(6), 35-40.',
        ]
    },
]
```

另外，本页面支持以`html`方式编辑。提供此功能为了将`论文标题`做成超链接的方式，我们对以上举例中的最后一篇论文为例，方式如下：

显示效果：
'<a href="https://kns.cnki.net/KCMS/detail/detail.aspx?dbcode=CJFQ&dbname=CJFD2011&filename=DZYX201106007&uid=WEEvREdxOWJmbC9oM1NjYkZCbDdrNTBLekJqMWVVZDNwNnBVajVteWY3ZW0=$R1yZ0H6jyaa0en3RxVUd8df-oHi7XMMDo7mtKT6mSmEvTuk11l2gFA!!&v=MjczNDVMT2VadVJ0RnkzaFY3ckpJVGZTZHJHNEg5RE1xWTlGWTRSOGVYMUx1eFlTN0RoMVQzcVRyV00xRnJDVVI=" target='_blank'>齐宁, 王保进, 汪斌强, 张栋. 均衡虚拟网构建算法研究[J]. 电子与信息学报. 2011, 33(6), 35-40.</a>'

代码实现：
```js
'<a href="https://kns.cnki.net/KCMS/detail/detail.aspx?dbcode=CJFQ&dbname=CJFD2011&filename=DZYX201106007&uid=WEEvREdxOWJmbC9oM1NjYkZCbDdrNTBLekJqMWVVZDNwNnBVajVteWY3ZW0=$R1yZ0H6jyaa0en3RxVUd8df-oHi7XMMDo7mtKT6mSmEvTuk11l2gFA!!&v=MjczNDVMT2VadVJ0RnkzaFY3ckpJVGZTZHJHNEg5RE1xWTlGWTRSOGVYMUx1eFlTN0RoMVQzcVRyV00xRnJDVVI=" target='_blank'>齐宁, 王保进, 汪斌强, 张栋. 均衡虚拟网构建算法研究[J]. 电子与信息学报. 2011, 33(6), 35-40.</a>'
```
