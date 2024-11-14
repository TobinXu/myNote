/**
 * 1.海投，尽量早投递➕官网投递➕内推码投递2.有特别想去的公司的话，在牛客搜“公司➕岗位”相关面经，
 * 把八股和场景题都记在你的文档里3.把这些问题，一个一个去查csdn去把原理弄懂，千万别死背4.相信我，你搞懂一个公司的30个人的面经题，
 * 那你问答环节一定对答如流5.力扣hot1006.字越少事越大👆7.如果是前端，还要把牛客的js题和css题全刷掉8.项目，新颖，熟悉，不需要太花里胡哨，
 * 不需要用到太多技术栈9.简历，不熟悉的一定别写，特别败印象分，有技术博客或者github的一定要放在上面。或者力扣刷了好几百题的，这种也可以写在简历里

作者：有白袋子的蓝胖子
链接：https://www.nowcoder.com/feed/main/detail/c56cc2668b4a4b529e695942f6e09a55?sourceSSR=users
来源：牛客网
 * 
 * 每日一练
 * https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md 
 * https://juejin.cn/post/7161747002613563428
 * 
 * 
 * nest
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * v1 > v2 返回1，v1 < v2返回-1，v1===v2返回0
  const compareVersion = (v1, v2) => {
    v1 = v1.split('.');
    v2 = v2.split('.');
    const len = Math.max(v1.length, v2.length);
    while(v1.length < len) v1.push('0');
    while(v2.length < len) v2.push('0');
    for (let i = 0; i < len; i++) {
      if (parseInt(v1[i]) > parseInt(v2[i])) {
        return 1;
      }
      if (parseInt(v1[i]) < parseInt(v2[i])) {
        return -1;
      }
    }
    return 0;
  }


 * 
 * 跨域请求是指在浏览器中，一个网页从一个域名请求另外一个域名的资源，比如www.baidu.com请求www.taobao.com，他们的协议域名端口号不同，至少其中的一个不同。
 * 浏览器出于安全考虑，禁止非同源之间的跨域请求，这也就是所谓的同源策略，必须协议域名端口号相同才能视为同源。
 * 
 * 怎么解决跨域？
 * a. 常见的有JSONP，<script></script>标签没有跨域限制，那我们可以动态的创建script标签，传递一个回调函数来实现跨域数据请求
 * 通常用于get请求场景
 * 缺点，安全性低，仅支持get，因为会执行返回的脚本。
 * const handleResponse = (data) => {
 *  console.log(data)
 * }
 * const script = document.createElement('script');
 * script.scr = 'https://www.baidu.com/api?callback=handleResponse';
 * document.body.appendChild(script);
 * 
 * 
 * b. CORS 允许服务器通过HTTP头部来指定哪些源可以访问该服务器资源
 * 常用的CORS头部：
 * Access-Control-Allow-Origin 指定具体的域名或*
 * Access-Control-Allow-Methods 指定POST、PUT、GET、DELETE
 * Access-Control-Allow-Headers 允许哪些自定义请求头
 * 
 * express.js 示例
 * const express = require('express);
 * const app = express();
 * 
 * app.use((req, res, next) => {
 *  res.header('Access-Control-Allow-Origin', '*');
 *  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
 *  next();
 * });
 * 
 * app.get('/api', (req, res) => {
 *  res.json({message: ''Hello, World});
 * });
 * 
 * app.listen(3000);
 * 
 * 
 *c. 服务器代理 server-side-proxy
 *  
 * 前端请求仍然是同源，服务器去做跨域请求并将结果返回给前端
 * 
 * 前端请求
 * fetch('/api/data')
 * .then(res => res.json())
 * .then(data => console.log(data))
 * 
 * 后端道理(Node.js)示例
 * const express = require('express');
 * const axios = require('axios');
 * const app = express();
 * 
 * app.get('/api/data', async(req, res) => {
 * const response = await axios.get('https://example.com/data');
 * res.json(response.data); 
 * })
 * 
 * app.listen(3000);
 * 
 * 
 * 
 * 判断域名是否相同
 * const compareDomains = (url1, url2) => {
 *  const u1 = new URL(url1);
 *  const u2 = new URL(url2);
 * 
 * return u1.protocol === u2.protocol &&
 * u1.hostname === u2.hostname && u1.prot === u2.port;
 * }
 * 
 * 
 * 
 * 查询字符串方式 ?type=1&a=1
 * 获取方式
 * 1. 纯js  
 * const urlParams = new URLSearchParams(window.location.search);
 * const type= urlParams.get('type');
 * const id= urlParams.get('id');
 * 
 * 2. react-router
 * const location = useLocation()
 * const queryParams = new URLSearchParams(location.search);
 * const type= queryParams.get('type');
 * const id= queryParams.get('id');
 * 
 * 3. vue router
 * this.$route.query.type
 * this.$route.query.id
 * 
 * 动态路径参数方式（/activityInfoDetail/${activityID}）
 * 1. react router
 * const {activityID} = useParams()
 * 
 * 2. vue router
 * this.$route.params.activityID
 * 
 * 
 * state  参数不用显示
 * 1. react router
 * navigate("/new-route", { state: { key: "value" } })
 * const location = useLocation()
 * const state = location.state
 * 
 * 2. vue router
 * this.$router.push({ name: 'TargetPage', state: { key: 'value' } });

 * this.$route.state
 * 
 * 
 * 
 * 小程序影响性能：通信代价 > 渲染代价
 * 1. 异步通信的开销 主线程和渲染县城之间是异步消息传递（每一次都涉及数据的序列化、传输、解码和再渲染）
 * 2. 网络请求和数据传输，频繁的API请求和数据处理造成延迟
 * 
 * 
 * 瓦片化
 * 瓦片化（Tile-based）是一种在前端开发中常见的设计模式，用于处理和渲染大规模的数据或图形。它通过将数据或图像切分为多个较小的块，按需加载可视区域内的瓦片，
 * 来提高性能和用户的体验。常见场景包括地图、高清图像查看、无限滚动等。
 * 工作原理：切图、按需加载、缓存优化
 * 
 * 
 * 
 */