
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
 * 
 * 
 * const sleep = (time) => {
 *  return new Promise(resolve => setTimeout(resolve, time)
 * )
 * }
 * 
 * await sleep(1000)
 * 
 * 
 * 
 */

//  const a = {b:1,c:2}

//  for (let key in a) {
//   console.log(key)
//  }


//  function randomSort(arr) {
//   let len = arr.length, randomIdx, temp;
//   for (let i = 0; i < len; i++) {
//     randomIdx = Math.floor(Math.random() * (len - i)) + i;
//     temp = arr[i]
//     arr[i] = arr[randomIdx]
//     arr[randomIdx] = temp
//   }
//   return arr
//  }

/**
 * get post
 * 1. 应用场景 get 请求幂等，不会对请求资源进行修改，post 会对请求资源进行修改
 * 2. 浏览器一般会对 get 请求缓存，post 不会
 * 3. get 请求实体部分为空，post 不为空
 * 
 * https指的是超文本传输安全协议，https 是基于 https 协议的，不过它会使用 TLS/SSL来对数据加密。使用 TLS/SSL协议，
 * 所有的信息都是加密的，第三方没有办法窃听。并且它提供了一种校验机制，信息一旦篡改，通信双方立刻发现。它还配备了身份证书，
 * 防止身份被冒充的情况出现。
 * 
 * TLS 握手过程
 * 第一步，客户端向服务器发起请求，请求中包含使用的协议版本号、生成的一个随机数、以及客户端支持的加密方法。
 * 第二步，服务器段接收到请求后，确认双方使用的加密方法、并给出服务器的证书、以及一个服务器生成的随机数。
 * 第三步，客户端确认服务器证书有效后，生成一个新的随机数，并使用数字证书中的公钥，加密这个随机数，然后发给服务器。并且还会提供一个前面所有内容的 hash 值，用来供服务器检验。
 * 第四步，服务器使用自己的私钥，来解密客户端发送过来的随机数。并提供前面所有的内容的 hash 值来供客户端检验。
 * 第五步，客户端和服务器端根据约定的加密方法使用前面的三个随机数，生成对话密钥，以后的对话过程都是用这个密钥来加密信息。
 * 
 * 
 * 实现原理
 * TLS 握手过程主要用到了三个方法来保证传输的安全。
 * 首先是对称加密的方法，对称加密的方法是，双方使用同一个密钥对数据进行加密和解密。但是堆成加密存在一个问题，就是如何保证密钥传输的安全性，因为密钥还是会通过网络传输，一旦密钥被其他人获取到，那么整个加密过程就毫无作用了。
 * 这就要用到非对称加密的方法。
 * 非堆成加密的方法是，我们拥有两个密钥，一个是公钥，一个是私钥。公钥是公开的，私钥是保密的。用私钥加密数据，只有对应的公钥才能解密，用公钥加密的数据，只有对应的私钥才能解密。我们可以将公钥公布出去，任何想和我们通信的客户，
 * 都可以使用我们提供的公钥对数据进行加密，这样我们就可以使用私钥进行解密，这样就能保证数据的安全了。但是非对称加密有一个缺点就是加密过程很慢，因此如果每次通信都使用对称加密的方式的话，反而会造成等待时间过长的问题。
 * 因此我们可以使用对称加密和非对称加密结合的方式，因为对称加密的方式的缺点是无法保证密钥的安全传输，因此我们可以使用非对称加密的方式来对对称加密的密钥进行传输，然后以后的通信就是用对称加密的方式来加密，这样就
 * 解决了两个方法各自存在的问题。
 * 但是现在的方法也不一定安全，因为我们没有办法确定我们得到的公钥一定是安全的公钥。可能存在一个中间人，截取了对方发给我们的公钥，然后讲他们自己的公钥发送给我们，当我们使用他的公钥加密后发送的信息，就可以被他们用自己的私钥解密。
 * 然后他伪装成我们以同样的方法向对方发送信息，这样我们的信息就被窃取了，然而我们自己还不知道。
 * 为了解决这样的问题，我们可以使用数字证书的方式，首先我们使用一种 hash 算法对我们的公钥和其他信息进行加密生成一个信息摘要，然后让有公信力的认证中心（简称 CA）用他的私钥对消息摘要加密，形成签名。最后将原始信息和签名合在一起，
 * 称为数字证书。当接收方收到数字证书的时候，先根据原始信息使用同样的 hash 算法生成一个摘要，然后使用公证处的公钥来对数字证书中的摘要进行解密，最后将解密的摘要和我们生成的摘要进行对比，就能发现我们得到的信息是否被更改了。
 * 这个方法最重要的是认证中心的可靠性，一般浏览器里会内置一些顶层的认证中心的证书，相当于我们自动信任他们，只有这我们才能保证数据的安全。
 * 
 * 
 * 
 * 
 * 
 * 
 * const myTypeOf = (obj) => {
 *  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
 * } 
 * 
 * const unique = arr => [...new Set(arr)]
 * 
 * 
 * const unique = arr => {
 * return arr.filter((item, index, arr) => {
 *  return arr.indexOf(item) === index
 * }) 
 * }
 * 
 * 
 * 
 * 
 */


// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//   getName() {
//     return this.name
//   }
// }

// class dog extends Animal {
//   constructor(name, age) {
//     super(name)
//     this.age = age
//   }
// }

// 实现 new
// function objFactory() {
//   const obj = new Object()
//   const Constructor = Array.prototype.shift.call(arguments)
//   obj.__proto__ = Constructor.prototype
//   const ret = Constructor.apply(obj, arguments)
//   return typeof ret === 'object' ? ret || obj : obj
// }


// const flatten = arr => {
//   let result:any[] = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }


// var groupAnagrams = function(strs) {
//   const result = []
//   while(strs.length > 0) {
//       const map = new Map()
//       const word = strs.pop()
//       const res = [word]
//       for (let s of word) {
//           map.set(s,s)
//       }
//       const tempArr = [...strs]
//       for (let i = 0; i < tempArr.length; i++) {
//           const arr = tempArr[i].split('')
//           if (arr.every(a => map.get(a))) {
//               console.log(arr, 'aaa')
//               res.push(tempArr[i])
//               strs.splice(i, 1)
//           }
//       }
//       result.push(res)
//   }
//   return result

// };

// Promise.race = function(promiseArr) {
//   return new Promise((resolve, reject) => {
//     promiseArr.forEach((p) => {
//       Promise.resolve(p).then(val => {
//         resolve(val)
//       }, err => {
//         reject(err)
//       })
//     })
//   })
// }

// Promise.race = function(promiseArr) {
//   return new Promise((resolve, reject) => {
//     promiseArr.forEach((p) => {
//       Promise.resolve(p).then(val => {
//         resolve(val)
//       }, err => reject(err))
//     })
//   })
// }

// Promise.reject = function(reason) {
//   return new Promise((reslove, reject) => reject(reason))
// }

/**
 * 
  water[i] = min(max(height[0...i]), max(height[i...end])) - height[i]
 */

// Promise.all = function(promiseArr) {
//   let index = 0
//   return new Promise((resolve, reject) => {
//     const result = []
//     promiseArr.forEach((p, i) => {
//       Promise.resolve(p).then(val => {
//         result[i] = val
//         if (index === promiseArr.length) {
//           resolve(result)
//         }
//       }, err => reject(err))
//     })
//   })
// }

  // Promise.all = function(promiseArr) {
  //   let result  = []
  //   let index = 0
  //   return new Promise((resolve, reject) => {
  //     promiseArr.forEach((p, i) => {
  //       Promise.resolve(p).then(val => {
  //         index++
  //         result[i] = val
  //         if (index === promiseArr.length) {
  //           resolve(result)
  //         }

  //       }, err => reject(err))
  //     })
  //   })
  // }


  // Promise.all = function(promiseArr) {
  //   let res = []
  //   let index = 0
    
  //   return new Promise((resolve, reject) => {
  //     if (!promiseArr.length) resolve(res)
  //     promiseArr.forEach(p => {
  //       promise.resolve(p).then(val => {
  //         res[index] = val
  //         index++
  //         if (index === promiseArr.length) {
  //           resolve(res)
  //         }
  //       }).catch(err => reject(err))
  //     })
  //   })
  // }

  // Promise.any = function(promiseArr) {
  //   let index = 0
  //   return new Promise((resolve, reject) => {
    // if (promiseArr.length === 0) return
  //     promiseArr.forEach((p, i) => {
  //       Promise.resolve(p).then((val) => {
  //         resolve(val)
  //       }, err => {
  //         index++
  //         if (index === promiseArr.length) {
  //           reject(new AggregateError('All promises were rejected'))
  //         }
  //       })
  //     })

  //   })
  // }


  // function myInstanceOf(left, right) {
  //   let proto = Object.getPrototypeOf(left) // 对象原型
  //   let prototype = right.prototype // 构造函数的prototype 对象
  //   while(true) {
  //     if (!proto) return false
  //     if (proto === prototype) return true
  //     proto = Object.getPrototypeOf(proto)
  //   } 
  // }
// function shallowCopy(obj) {
//   if (!obj || typeof obj !== 'object') return obj
//   const newObj = Array.isArray(obj) ? [] : {}
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = obj[key]
//     }
//   }
//   return newObj
// }

// function deepCopy(obj) {
//   if (!obj || typeof obj !== 'object') return obj
//   const newObj = Array.isArray(obj) ? [] : {}
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
//     }
//   }
//   return newObj
// }

/**
  function shallowCopy(obj) {
    if (!obj || typeof obj !== 'object') return
    const newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key]
      }
    }
    return newObj
  }

  function deepCopy(obj) {
    if (!obj || typeof obj !== 'object') return
    const newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
      }
    }
    return newObj
  }

  class EventBus {
    constructor {
      this.events = {}
    }

    on(event, cb) {
      if (!this.events[event]) {
        this.events[event] = []
      }
      this.events[event].push(cb)
      return this;
    }

    emit(event, ...args) {
      const cbs = this.events[event]
      if (!cbs) {
        console.log('当前没有改事件')
        return this;
      }
      cbs.forEach((cb) => {
        cb(...args)
      })
      return this;
    }

    once(event, cb) {
      const func = (...args) => {
        this.off(event, func) 
        cb(...args)
      }
      this.on(event, func)
      return this
    }

    off(event, cb) {
      if (!cb) {
        this.events[event] = null
      } else {
        this.events[event].filter((it) => it !== cb)
      }
      return this;
    }



  }

   */

  // Object.getOwnPropertyNames

  // function throttle(fn, delay) {
  //   let preTime = Date.now()
  //   return function() {
  //     let context = this,
  //     args = arguments,
  //     nowTime = Date.now()

  //     if (nowTime - preTime > delay) {
  //       preTime = Date.now();
  //       return fn.apply(context, args)
  //     }

  //   }
  // }

  // const imgNodeArr = document.getElementsByTagName('img');
  // const len = imgNodeArr.length;
  // let n = 0;

  // lazyload();

  // window.addEventListener('scroll', lazyload)

  // function lazyload() {
  //   const clientHeight = document.documentElement.clientHeight;
  //   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //   for (let i = n; i < len; i++) {
  //     if (imgNodeArr[i].offsetTop < clientHeight + scrollTop) {
  //       if (imgNodeArr[i].getAttribute('src') === 'default.jpg') {
  //         imgNodeArr[i].src = imgNodeArr[i].getAttribute('data-src') || ''
  //       }
  //     }
  //     n = i + 1
  //   }
  // }
/**
 max-age
 *private
 public
 no-store
 no-cache
 s-maxage
 */


//  async function request(urls) {
//   if (urls.length === 0) return
//   const url = urls.shift()
//   await fetch(url)
//   return request(urls)
//  }

// class AsyncLimitRequest {
//   constructor(limit) {
//     this.limit = limit
//     this.promiseList = []
//     this.curr = 0
//   }
  
//   async request(promise) {
//     this.curr++
//     if (this.curr > this.limit) {
//       return this.promiseArr.push(promise)

//     }
//     await promise()
//     this.curr--
//     const shiftPromise = this.promiseArr.shift()
// if (shiftPromise) {
//   this.request(shiftPromise)
// }
//   
//   }
// }

// function loadImage(urls, limit) {
//   const asyncLimitRequest = new AsyncLimitRequest(limit)
//   urls.forEach(url => asyncLimitRequest.request(() => fetch(url)))
// }




// class AsyncLimitRequest {
//   constructor(limit) {
//     this.limit = limit
//     this.promiseList = []
//     this.curr = 0
//   }

//   async request(task) {
//     this.curr++
//     if (this.curr > this.limit) {
//       this.promiseList.push(task)
//       return
//     }
//     await task()
//     this.curr--
//     if (this.promiseList.length > 0) {
//       const pro = this.promiseList.shift()
//       this.request(pro)
//     }
//   }
// }

// function loadImgs(urls, limit) {
//   const AsyncLimitRequest = new AsyncLimitRequest(limit)
//   urls.forEach((url) => AsyncLimitRequest.request(() => fetch(url)))
// }


/**
 * 点击劫持是一种视觉欺骗手段，攻击者需要将被攻击的页面放入 iframe 中，然后将 iframe 嵌入到自己的网页中并将iframe 设为透明，再在上面设置一个按钮诱导用户进行点击
 * 防御：http 头中设置 X-IFRAME-OPTIONS, 通过不同的值规定页面再特定的一些情况下才能作为 iframe 来使用
 */

// for (var i = 0; i < 3; i++) {
//   setTimeout((function(num) {
//     return function() {
//       console.log(num)
//     }

//   })(i), 1000)
// }

/**
 * 1. 重叠子问题
 * 述问题结构的数学形式
 * 自底向上，从小问题到大问题 
 */

const outer = () => {
  let a = 1
  const inner = () => {
    console.log(a)
  }
  return inner
}

const b = outer()

const createCounter = () => {
  let count = 0
  const getCount = () => {
    return count
  }
  const increase = () => {
    count++
  }
  return {
    getCount: getCount,
    increase: increase
  }
}

// function sum(a) {
//   let total = a
//   // console.log(Array.from(arguments))
//   function innerSum(b) {
//   console.log(Array.from(arguments))
//     if (b === undefined) {
//       return total
//     }
//     total += b
//     return innerSum
//   }

//   return innerSum
// }


function sum(a) {
  let total = a
  function inner(b) {
    total += b
    return inner
  }

  inner.toString = function() {
    return total
  }

  inner.valueOf = function() {
    return total
  }
  
  return inner
}

// babel 的三步骤
// 解析 =》 转换 =》 生成

function unique(arr) {
  let count  = 0
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    const key = JSON.stringify(arr[i])
    if (!obj[key]) {
      obj[key] = true
      count++
    }
  }
  return count
}

// function Animal(name) {
//   this.name = name
// }

// Animal.prototype.sayHello = function() {
//   console.log('Hello, I am' + this.name)
// }

// function Dog(name, breed) {
//   Animal.call(this, name)
//   this.breed = breed
// }

// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog

// Dog.prototype.bark = function() {
//   console.log(this.name + 'is Barking!')
// }

// const dog = new Dog('Tom', 'Golden Retriever')
// dog.sayHello()
// dog.bark()


function mySetTimeout(cb, delay) {
  return new Promise<void>((resolve) => {
    const startTime = Date.now()

    function check() {
      if (Date.now() - startTime >= delay) {
        cb()
        resolve()
      } else {
        requestAnimationFrame(check)
      }
    }

    check()
  })
}


// 


function Person(name) {
  this.name = name
}

Person.prototype.sayName = function() {
  console.log(`My Name is ${this.name}`)
}

function Student(name, age) {
  Person.call(this, name)
  this.age = age
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
 
Student.prototype.sayAge = function() {
  console.log(`MY age is ${this.age}`)
}
// objectFactory(构造函数, 初始化参数);
function objectFactory() {
  let newObj = null
  let constructor = Array.prototype.shift.call(arguments)
  let result
  if (typeof constructor !== 'function') {
    console.error('type error')
    return
  }
  newObj = Object.create(constructor.prototype)
  result = constructor.apply(newObj, arguments)
  return result && (typeof result === 'object' || typeof result === 'function') ? result : newObj
}


// class EventHub {
//   events: Map<any, any>
//   constructor() {
//     this.events = new Map()
//   }

//   on(eventName, callback) {
//     if (typeof callback !== 'function') {
//       throw new Error('callback must be function')
//     }
//     if (!this.events.has(eventName)) {
//       this.events.set(eventName, [])
//     }
//     const callbacks = this.events.get(eventName)
//     callback.push(callback)
//   }

//   emit(eventName, ...args) {
//     if (!this.events.has(eventName)) return
//     const callbacks = this.events.get(eventName)
//     callbacks.forEach(callback => {
//       try {
//         callback(...args)
//       } catch (error) {
//         console.error(`Event ${eventName} handler error ${error}`)
//       }
//     })
//   }
  
//   off(eventName, callback) {
//     if (!this.events.has(eventName)) return
//     if (typeof callback !== 'function') {
//       this.events.delete(eventName)
//       return
//     }
//     const callbacks = this.events.get(eventName)
//     const filterCb = callbacks.filter(cb => cb !== callback)
//     this.events.set(eventName, filterCb)
//   }

//   once(eventName, callback) {
//     const onceWrapper = (...arg) => {
//       callback(...arg)
//       this.off(eventName, onceWrapper)
//     }
//     this.on(eventName, onceWrapper)
//   }
// }


// class EventHub {
//   events: Map<any, any>
//   constructor() {
//     this.events = new Map()
//   }
//   on(eventName, callback) {
//     if (typeof callback !== 'function') {
//       console.error('callback must be a function')
//     }
//     if (!this.events.has(eventName)) {
//       this.events.set(eventName, [])
//     }
//     const callbacks = this.events.get(eventName)
//     callbacks.push(callback)
//   }

//   emit(eventName, ...args) {
//     if (!this.events.has(eventName)) return
//     const callbacks = this.events.get(eventName)
//     callbacks.forEach(cb => {
//       try {
//         cb(...args)
//       } catch (error) {
//         console.log(`${eventName} handle error: ${error}`)
//       }
//     })
//   }

//   off(eventName, callback) {
//     if(!this.events.has(eventName)) return
//     if (typeof callback !== 'function') {
//       this.events.delete(eventName)
//     } else {
//       const callbacks = this.events.get(eventName)
//       const filterCb = callbacks.filter(cb => cb !== callback)
//       this.events.set(eventName, filterCb)
//     }
//   }

//   once(eventName, callback) {
//     const onceWrapper = (...args) => {
//       callback(...args)
//       this.off(eventName, onceWrapper)
//     }
//     this.on(eventName, onceWrapper)
//   }
// }

// 需要考虑正则、日期、数组、循环引用等类型，
// function deepCopy(obj, map = new Map()) {
//   if (!obj || typeof obj !== 'object') return obj
//   if (/^(RegExp | Date)$/i.test(obj.constructor.name)) return new obj.constructor(obj)
//   if (map.get(obj)) return map.get(obj)
//   // 普通对象
//   const newObj = Array.isArray(obj) ? [] : {}
// map.set(obj, newObj)
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
//     }
//   }
//   return newObj
// }



// 需要考虑正则、日期、数组、循环引用等类型，
// function deepCopy(target, map = new Map()) {
//   if (!target || typeof target !== 'object') return target
//   if (map.get(target)) return map.get(target)
//   if (/^(Date | RegExp)$/i.test(target.constructor.name)) return new target.constructor(target)
//   const newObj = Array.isArray(target) ? [] : {}
// map.set(target, newObj)
//   for (let key in target) {
//     if (target.hasOwnProperty(key)) {
//       newObj[key] = typeof target[key] === 'object' ? deepCopy(target[key]) : target[key]
//     }
//   }
//   return newObj
// }


// 需要考虑正则、日期、数组、循环引用等类型，
// function deepCopy(target, map = new Map()) {
//     if (!target || typeof target !== 'object') return target
//     if (map.get(target)) return map.get(target)
//     if (/^(RegExp | Date)$/i.test(target.constructor.name)) return new target.constructor(target)
//     const newObj = Array.isArray(target) ? [] : {}
//     map.set(target, newObj)
//     for (let key in target) {
//       if (target.hasOwnProperty(key)) {
//         newObj[key] = typeof target[key] === 'object' ? deepCopy(target[key]) : target[key]
//       }
//     }
//     return newObj
//   }

// Promise.resolve = function(value) {
//   if (value instanceof Promise) return value
//   return new Promise(resolve => resolve(value))
// }
// Promise.reject = function(reason) {
//   return new Promise((resolve, reject) => reject(reason))
// }
  // Promise.resolve = function(result) {
  //   if (result instanceof Promise) return result
  //   return new Promise(resolve => resolve(result))
  // }

  // Promise.reject = function(value) {
  //   return new Promise((resolve, reject) => reject(value))
  // }

  // Promise.all = function(promiseArr) {
  //   let result = [], index = 0
  //   return new Promise((resolve, reject) => {
  //     promiseArr.forEach((p, i) => {
  //       Promise.resolve(p).then(value => {
  //         result[i] = value
  //         index++
  //         if (index === promiseArr.length) {
  //           resolve(result)
  //         }
  //       }, err => reject(err))
  //     })
  //   })
  // }

  // Promise.all = function(promiseArr) {
  //   let index = 0, result = []
  //   return new Promise((resolve, reject) => {
  //     promiseArr.forEach((p, i) => {
  //       Promise.resolve(p).then((value) => {
  //         result[i] = value
  //         index++
  //         if (index === promiseArr.length) {
  //           resolve(result)
  //         }
  //       }, err => reject(err))
  //     })
  //   })
  // }


  /**
   * xss, 跨站脚本攻击，攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而获取用户的信息如 cookie 等。
   * 存储型、DOM型、反射型
   * 
   * 存储型： 指恶意代码提交到网站的数据库中，当用户请求数据的时候，服务器将其拼接为 HTML 返回给了用户，从而导致恶意代码的执行。
   * 反射型： 指攻击者构建了特殊的 URL，当服务器收到请求后，从 URL 中获取数据，拼接到 HTML 后返回，从而导致恶意代码的执行。
   * DOM型： 指攻击者构建了特殊的 URL，用户打开网站后，js 脚本从 URL 中获取数据，从而导致恶意代码的执行。
   * 
   * 防范：
   * 1. 对存入数据库的数据进行转义，不可靠，有的地方用数据不需要转移
   * 2. 纯前端的方式，对需要插入 html 中的代码做好充分转义。
   * 3. CSP，建立白名单告诉浏览器哪些外部资源可以加载和执行，从而防止恶意代码的注入。
   * 4. 敏感信息保护，cookie 使用 http-only，使得脚步无法获取。
   */

// 存储型：指恶意代码被提交到网站的数据库中，用户请求数据时，服务器将该数据拼接到 HTML 中返回给用户，从而导致恶意代码的执行。
  // 反射型：指攻击者构建特殊的 URL，服务器收到请求后，从 URL 中获取数据拼接到 HTML 返回给用户，从而导致恶意代码的执行
  // DOM 型：指攻击者构建特殊的 URL，用户打开网站，js 脚本从URL 中获取 数据，从而导致恶意代码的执行。

  /**
   * 1. CSP
   * 2. 纯前端对返回的 HTML 转义
   * 3. 对存入数据库的数据转义，不太好，影响其他
   * 4. cookie http-only
   */


  // 需要考虑正则、日期、数组、循环引用等类型，
  // function deepCopy(target, map = new Map()) {
  //   if (!target || typeof target !== 'object') return target
  //   if (map.get(target)) return map.get(target)
  //   if (/^(RegExp | Date)$/i.test(target.constructor.name)) return new target.constructor(target)
  //   const newObj = Array.isArray(target) ? [] : {}
  //   map.set(target, newObj)
  //   for (let key in target) {
  //     if (target.hasOwnProperty(key)) {
  //       newObj[key] = typeof target[key] === 'object' ? deepCopy(target[key]) : target[key]
  //     }
  //   }
  //   return newObj

  // }

  // class EventHub {
  //   events: Map<any, any>
  //   constructor() {
  //     this.events = new Map()
  //   }

  //   on(eventName, callback) {
  //     if (typeof callback !== 'function') {
  //       console.log('callback must be function')
  //       return
  //     }
  //     if (!this.events.has(eventName)) {
  //       this.events.set(eventName, [])
  //     }
  //     const callbacks = this.events.get(eventName)
  //     callbacks.push(callback)
  //   }
  //   emit(eventName, ...args) {
  //     if (!this.events.has(eventName)) return
  //     const callbacks = this.events.get(eventName)
  //     callbacks.forEach(cb => {
  //       try {
  //         cb(...args)
  //       } catch (error) {
  //         console.log(`${eventName} handle error: ${error}`)
  //       }
  //     })
  //   }
  //   off(eventName, callback) {
  //     if (!this.events.has(eventName)) return 
  //     if (typeof callback !== 'function') {
  //       this.events.delete(eventName)
  //       return 
  //     }
  //     const callbacks = this.events.get(eventName)
  //     const filteredCb = callbacks.filter(cb => cb !== callback)
  //     this.events.set(eventName, filteredCb)
  //   }
  //   once(eventName, callback) {
  //     const onceWrapper = (...args) => {
  //       callback(...args)
  //       this.off(eventName, onceWrapper)
  //     }
  //     this.on(eventName, onceWrapper)
  //   }
  // }


  // Promise.race = function(promiseArr) {
  //   return new Promise((resolve, reject) => {
  //     promiseArr.forEach(p => {
  //       Promise.resolve(p).then(value => {
  //         resolve(value)
  //       }, reason => reject(reason))
  //     })
  //   })
  // }

  // Promise.any = function(promiseArr) {
  //   let index = 0
  //   return new Promise((resolve, reject) => {
  //     if (promiseArr.length === 0) {
  //       reject(new AggregateError('All promises were rejected'))
  //     }
  //     promiseArr.forEach(p => {
  //       Promise.resolve(p).then(value => {
  //         resolve(value)
  //       }, err => {
  //         index++
  //         if (index === promiseArr.length) {
  //           reject(new AggregateError('All promises were rejected'))
  //         }
  //       })
  //     })
  //   })
  // }

  // Promise.allSettled = function(promiseArr) {
  //   const result = []
  //   return new Promise((resolve, reject) => {
  //     promiseArr.forEach((p) => {
  //       Promise.resolve(p).then(value => {
  //         result.push({status: 'fulfilled', value})
  //         if (result.length === promiseArr.length) {
  //           resolve(result)
  //         }
  //       }, err => {
  //         result.push({status: 'rejected', reason: err})
  //         if (result.length === promiseArr.length) {
  //           resolve(result)
  //         }
  //       })
        
  //     })
  //   })
  // }

  /**
   * 
   * 1. commonjs 模块输出的是一个值拷贝，es6 模块输出的是值的引用。commonjs 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值了。es6 模块的运行机制和 commonjs 不一样。js 引擎对脚本
   * 静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
   * 2. commonjs 模块是运行时加载，es6 模块是编译时输出接口。 commonjs 的模块就是对象，即再输入时是先加载整个模块，生成一个对象，然后从该对象上读取方法，这种加载称为运行时加载。而es6 模块不是对象，它的对外接口
   * 只是一个静态定义，再代码静态解析阶段就会生成。
   * 
   * 
   * 1. commonjs 输出的是值的拷贝，一旦这个值输出了，模块内部的变化就不会影响到这个值；es6 的运行机制不同， js 引擎静态分析脚本的时候，遇到模块加载命令 import 会生成一个只读引用，
   * 等到脚本真正执行时，会根据这个只读引用，到被加载的模块中去取值。
   * 2. commonjs 是运行时加载，再运行时就会生成一个对象，然后从对象上读取方法；es6 模块它对外接口只是是静态定义，再代码解析阶段就会生成。
   */


  // function objectFactory1() {
  //   const constructor = Array.prototype.shift.call(arguments)
  //   if (typeof constructor !== 'function') {
  //     throw new TypeError('Constructor must be a function')
  //   }
  //   const newObj = Object.create(constructor.prototype)
  //   const result = constructor.apply(newObj, arguments)
  //   return result instanceof Object ? result : newObj
  // }


  function handleResponse(data) {
    console.log(data)
  }

  const script = document.createElement('script')
  script.src = 'www.baidu.com?callback=handleResponse'
  document.body.appendChild(script)
  // jsonp 利用了 script 标签不受同源策略限制，动态创建 script 标签还实现加载跨域资源，仅限 get


  // postmessage
  // 发送方
  window.parent.postMessage('data', 'www.target-origin.com')

  // 接收方
  window.addEventListener('message', event => {
    if (event.origin !== 'www.target-origin.com') return
    console.log(event.data)
  })


  // 代理服务器



  /**
   * 高精度休眠函数
   * @param {number} ms 休眠时间（毫秒）
   * @returns {Promise<void>}
   */
  // function sleep(ms) {
  //   return new Promise<void>((resolve) => {
  //     const start = performance.now()

  //     const checkTime = (now) => {
  //       const current = performance.now()
  //       if (current - start > ms) {
  //         resolve()
  //       } else {
  //         requestAnimationFrame(checkTime)
  //       }
  //     }

  //     requestAnimationFrame(checkTime)
  //   })
  // }

  function sleep(ms) {
    return new Promise((resolve) => {
      const startTime = performance.now()
      const checkTime = () => {
        const currentTime = performance.now()
        if (currentTime - startTime) {
          resolve()
        } else {
          requestAnimationFrame(checkTime)
        }
      }
      requestAnimationFrame(checkTime)
    })
  }

  /**
   * http1.1 tcp 链接 支持多个请求复用，但是请求顺序是固定的，一个一个来，这样会造成阻塞，比如前一个请求响应时间过长
   * 持久链接，一般浏览器支持 6 个持久连接
   * http2 基于tcp 连接，但是支持多路复用，多个请求多个相应同时进行，
   * 头信息压缩，http1.1 需要使用携带 cookie、user agent 等头信息，而 HTTP2 支持头信息通过 gzip 或者 compress 压缩、客户端和服务端各自维护一张头信息表，通过索引传递来提高速度
   * 数据流，因为多路复用，传递的数据包中有请求的有响应的，一个完整的相应数据包称为数据流，每一个数据流都带有唯一 ID，数据包发送的时候都必须标记 ID 来区分它属于哪个数据流。
   * 服务器推送，http2 允许服务器未经请求主动推送，不过推送的是静态资源。
   * 二进制协议，http1.1 的头信息必须是文本，数据体是文本也可以是二进制，http2 是二进制协议，头信息和数据提都是二进制的，称为头信息帧和数据帧。
   * 
   */


  function uniqueArr(arr) {
    return arr.reduce((newArr, current) => {
      if (!newArr.includes(current)) {
        newArr.push(current)
      }
      return newArr
    }, [])
  }


  // 防抖 n 秒内函数只能执行一次，如果再 n 秒内再次触发，重新计算执行时间
  function debounce(func, wait) {
    let timer
    return function() {
      const context = this
      const args = arguments
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }
  }

// 截流，连续触发，n秒内函数执行一次
function throttle(func, limit) {
  let flag = false
  return function() {
    const context = this
    const args = arguments
    if (!flag) {
      func.apply(context, args)
      flag = true
      setTimeout(() => {
        flag = false
      }, limit);
    }
  }
}


//  function curry(fn) {
//   if (typeof fn !== 'function') {
//     throw new Error('curry requires a function')
//   }
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args)
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2))
//       }
//     }
//   }
//  }
// 参数复用、提前返回、延迟执行
// const curry  = (fn, ...args) => {
//     return args.length >= fn.length ? fn(...args) :
//     (..._args) => curry(fn, ...args, ..._args)
// }


// const curry = (fn, ...args) => {
//   return args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)
// }

// CSRF 的攻击本质上是利用了 cookie 会在同源请求中携带并发送给服务器的特点，来冒充用户。
// function curry(fn) {
//   if (typeof fn !== 'function') {
//     throw new Error('curry requires a function')
//   }

//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args)
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2))
//       }
//     }
//   }
// }


// function curry(fn) {
//   if (typeof fn !== 'function') {
//     throw new Error('curry requires a function')
//   }

//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args)
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2))
//       }
//     }
//   }
// }


// function curry(fn) {
//   if (typeof fn !== 'function') {
//     throw new Error('curry requires a function')
//   }

//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args)
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2))
//       }
//     }
//   }
// }

// 将一个接收多个参数的函数转换为一系列接收一个参数的函数
function curry(fn) {
  if (typeof fn !== 'function') {
    throw new Error('curry requires a function')
  }
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}


// for (let i = 1; i <= word.length; i++) {
//   const prefix = word.slice(0, i).toLowerCase()
//   this.prefixMax.set(prefix, new Set())
// }

//  高阶 参数为组件，返回值为组件的函数

// function withList(component, length) {
//   const [list, setList] = useState(new Array(length).fill(1))
//   return <component list />
// }

// function ListComponent(props: {list: number[]}) {
//   const {list} = props
//   return list.map((item) => {
//     return <div>{item}</div>
//   })
// }


// function withList(WrapperedComponent, length) {
//   return class List extends React.PureComponent {
//     state = {
//       list: new Array(length).fill(123)
//     }
//     render() {
//       return <WrapperedComponent list={this.state.list} {...this.props} />
//     }
//   }
// }

// class App extends React.PureComponent {
//   constructor(props) {
//     super(props)
//     this.state = {
//       skin: 'red'
//     }
//   }

//   onButtonClick = () => {
//     this.setState(prevState => ({
//       skin: prevState.skin === 'red' ? 'blue' : 'red'
//     }))
//   }

//   render() {
//     return (
//       <div>
//       {
//         this.props.list.map((text, index) => (
//           <li key={index}>{text}</li>
//         ))
//       }
//       </div>
//     )
//   }
// }

// export default withList(App, 10)



class Scheduler {
  queue: any[];
  running: number;
  maxConcurrent: number;
  constructor() {
    this.queue = [];
    this.running = 0;
    this.maxConcurrent = 2;
  }
  add(promiseCreator) {
    return new Promise<void>((resolve) => {
      const task = () => {
        this.running++;
        promiseCreator().then(() => {
          resolve();
          this.running--;
          if (this.queue.length > 0) {
            const nextTask = this.queue.shift();
            nextTask();
          }
        })
      }

      // 判断是否立即执行任务
      if (this.running < this.maxConcurrent) {
        task();
      } else {
        this.queue.push(task);
      }
    })
  }
}



// Promise.allSettled = function(promiseArr) {
  //     const result = []
//   return new Promise((resolve) => {
//     promiseArr.forEach((p, i) => {
//       Promise.resolve(p).then(value => {
//         result.push({
//           status: 'fulfilled',
//           value
//         })
//         if (result.length === promiseArr.length) {
//           resolve(result)
//         }
//       }, err => {
//         result.push({
//           status: 'rejected',
//           reason: err
//         })
//         if (result.length === promiseArr.length) {
//           resolve(result)
//         }
//       })
//     })
//   })
// }


/**
 * ts 泛型是怎么提升代码性能的？
 * 1. 提高代码复用性，减少代码冗余
 * 2. 增强类型安全，减少运行时错误
 * 3. 优化代码的可读性和可维护性
 */

function identity<T>(arg: T) {
  return arg
}

function createArray<T>(length: number, value: T): T[] {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}


function createArr<T>(length: number, value: T): T[]  {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

class EventHub {
  events: any
  constructor() {
    this.events = {}
  }

  on(eventName, callback) {
    if (typeof callback !== 'function') {
      throw new Error('callback must be function')
    }
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    const callbacks = this.events[eventName]
    callbacks.push(callback)
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return
    }
    const callbacks = this.events[eventName]
    callbacks.forEach(cb => {
      try {
        cb(...args)
      } catch (error) {
        console.log(`Event ${eventName} handler error ${error}`)
      }
    })
  }

  off(eventName, callback) {
    if (!this.events[eventName]) {
      return
    }
    const callbacks = this.events[eventName]
    const filterCb = callbacks.filter(cb => cb !== callback)
    this.events[eventName] = filterCb
  }

  once(eventName, callback) {
    const onceWrapper = (...args) => {
      try {
        callback(...args)
      } catch (error) {
        console.log(`Event ${eventName} handler error ${error}`)
      }
      this.off(eventName, onceWrapper)
    }
    this.on(eventName, onceWrapper)
  }

  
}

/**
 * babel 是什么，怎么做到的
 * babel 是 js的编译器，可以将 es6 及以上的最新 js 语法和特性的代码转换为兼容性更好的 es5 代码，适配低版本浏览器。
 * 主要是三个步骤
 * 1. 解析js 代码为抽象语法树
 * 2. 使用 babel 的预设、插件遍历修改语法树
 * 3. 依据转化后的抽象语法树生成es5 代码
 */


/**
 * http2 因为多个数据流使用同一个 TCP 协议，遵循流量状态控制和拥塞控制，一个数据流堵塞以后，后面的数据流都会阻塞。
 * 
 * http3 使用了基于 udp 协议的 QUICK 协议，实现了多路复用、有序交付、重传等功能
 */



/**
 * 实现数组和树的相互转换
 */
// 数组项，包含 id、name、parentId
interface ArrayItem {
  id: number;
  name: string;
  parentId: number | null;
}
// 树节点数据类型，包含 id、name以及可能包含的子节点
interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}


function arrayToTree(arr: ArrayItem[]): TreeNode[] {
  // 用于id 和 TreeNode节点的映射，可以通过 id 快速查询树节点，时间复杂度 O(1)
  const treeNode: Map<number, TreeNode> = new Map();
  const roots: TreeNode[] = [];
  for (const item of arr) {
    const {id, name} = item;
    const node: TreeNode = {id, name};
    treeNode.set(id, node);
  }
  for (const item of arr) {
    const {id, name, parentId} = item;
    const node = treeNode.get(id)!;
    if (parentId !== null) {
      const parent = treeNode.get(parentId);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(node);
      } else {
        // 孤儿节点视为根节点
        roots.push(node);
      }
    } else {
      // parentId 为 null  视为根节点
      roots.push(node);
    }
  }
  return roots;
}


function tree2Array(roots: TreeNode | TreeNode[]): ArrayItem[] {
  const arr: ArrayItem[] = [];
  const visited = new Set<TreeNode>(); // 检查循环引用
  const queue: {node: TreeNode; parentId: number | null}[] = [];

  // 初始化队列，支持根节点
  const rootNodes = Array.isArray(roots) ? roots : [roots];
  rootNodes.forEach(root => {
    if (root !== null) {
      queue.push({node: root, parentId: null});
    }
  })
  while(queue.length > 0) {
    const {node, parentId} = queue.shift()!;
    // 检查循环引用
    if (visited.has(node)) {
      throw new Error('Detected cyclic reference in the tree');
    }
    visited.add(node);
    // 生成 ArrayItem
    const {id, name, children} = node;
    arr.push({id, name, parentId: parentId ?? null});
    if (children) {
      for (const child of children) {
        queue.push({node: child, parentId: id});
      }
    }
  }
  return arr;
}


function tree22Array(roots: TreeNode | TreeNode[]):ArrayItem[] {
  const arr: ArrayItem[] = [];
  const queue: {node: TreeNode, parentId: number | null}[] = [];
  const visited = new Set<TreeNode>();
  const rootNodes = Array.isArray(roots) ? roots : [roots];
  rootNodes.forEach(root => {
    if (root !== null) {
      queue.push({node: root, parentId: null});
    }
  })
  while(queue.length > 0) {
    const {node, parentId} = queue.shift()!;
    if(visited.has(node)) {
      throw new Error('Detected a cyclic reference in the tree');
    }
    visited.add(node);
    const {id, name, children} = node;
    arr.push({id, name, parentId: parentId ?? null});
    if (children) {
      for (const child of children) {
        queue.push({node: child, parentId: id});
      }
    }
  }
  return arr;
}