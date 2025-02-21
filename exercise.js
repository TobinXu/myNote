// class Scheduler {
//     constructor() {
//         this.queue = [];
//         this.maxConcurrent = 2;
//         this.running = 0;
//     }
//     add(promiseCreator) {
//         return new Promise((resolve) => {
//             const task = () => {
//                 this.running++;
//                 promiseCreator().then(() => {
//                     resolve()
//                     this.running--;
//                     if (this.queue.length > 0) {
//                         const nextTask = this.queue.shift();
//                         nextTask();
//                     }
//                 })
//             }
//             if (this.running < this.maxConcurrent) {
//                 task();
//             } else {
//                 this.queue.push(task);
//             }
//         })
//     }
// }


// class Scheduler {
//     constructor() {
//         this.queue = [];
//         this.running = 0;
//         this.maxConcurrent = 0;
//     }
//     add(promiseCreator) {
//             return new Promise((resolve) => {
//                 const task = () => {
//                     this.running++;
//                     promiseCreator().then(() => {
//                         resolve();
//                         this.running--;
//                         if (this.queue.length > 0) {
//                             const nextTask = this.queue.shift();
//                             nextTask();
//                         }
//                     })
//                 }
//                 if (this.running < this.maxConcurrent) {
//                     task();
//                 } else {
//                     this.queue.push(task)
//                 }
                
                
//             })
//     }
// }


// class Scheduler {
//     constructor() {
//         this.queue = [];
//         this.running = 0;
//         this.maxConcurrent = 2;
//     }
//     add(promiseCreator) {
//         return new Promise((resolve) => {
//             const task = () => {
//                 this.running++;
//                 promiseCreator().then(() => {
//                     resolve();
//                     this.running--;
//                     if (this.queue.length > 0) {
//                         const nextTask = this.queue.shift();
//                         nextTask();
//                     }
//                 })
//             }
//             if (this.running < this.maxConcurrent) {
//                 task();
//             } else {
//                 this.queue.push(task);
//             }
//         })
//     }
// }



// class Scheduler {
//     constructor() {
//         this.queue = [];
//         this.running = 0;
//         this.maxConcurrent = 2;
        
//     }
//     add(promiseCreator) {
//         return new Promise((resolve) => {
//             const task = () => {
//                 this.running++;
//                 promiseCreator().then(() => {
//                     resolve();
//                     this.running--;
//                     if (this.queue.length > 0) {
//                         const nextTask = this.queue.shift();
//                         nextTask();
//                     }
//                 })
//             }
//             if (this.running < this.maxConcurrent) {
//                 task();
//             } else {
//                 this.queue.push(task);
//             }
//         })
//     }
// }


Array.prototype._map = function(Fn) {
    if (typeof this !== 'array') {
        throw new Error('this is not an array')
    }
    const result = []
    for (let i = 0; i < this.length; i++) {
        result[i] = Fn(this[i], i, this)
    }
    return result
}

// 原型链继承
function Animal(name) {
    this.name = name
}
Animal.prototype.sayName = function() {
    return this.name
}
function Dog() {

}
Dog.prototype = new Animal()

// 借用构造函数
function Animal(name) {
    this.name = name
}
function Dog(name) {
    Animal.call(this, name)
}
Dog.prototype = new Animal()


// 组合继承
function Animal(name) {
    this.name = name
    this.colors = [1,2]
}
Animal.prototype.sayName = function() {
    return this.name
}
function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

// 寄生组合式集成
function Animal(name) {
    this.name = name
    this.colors = [1,2]
}
Animal.prototype.sayName = function() {
    return this.name
}
function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog


class Animal {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}



// 重排：dom 元素几何信息发生变化，需要重新布局，比如脱离文档流、宽高、内容发生变化，display none，； 重绘：元素外观属性发生变化，比如 background-color, border-style
// 重排一定引起重绘，重绘不一定引起重排

// https 加密的过程，
/**
 * tls 加密的过程分为四步或者五步
 * 1. 客户端向服务端发起请求，请求中包含自己支持的加密方法、协议版本号和一个随机数
 * 2. 服务端收到请求后，确认双方使用的加密方法，向客户端发送一个随机数，并且给出自己的数字证书，
 * 3. 客户端收到后使用证书中的公钥对新生成的随机数加密，并且提供一个前面所有 内容的 hash 值，发送给服务端，共服务端检验。
 * 4. 服务器端收到加密随机数，使用证书的公钥对其解密，并且提供前面所有内容的 hash 值共客户端检验。
 * 5. 双方使用确定的加密方法对三个随机数加密，后面就用这个密钥来进行数据传输。
 * 
 * 
 * 为什么要用三个随机数，因为 tls 加密方法默认不称为一个随机数的可靠性，觉得它是伪随机，三个随机数接近随机，比较可靠。
 * tls 原理：对称加密、非对称加密、CA 数字证书，解决了 http 传输过程中，信息被窃取、被篡改、被替代仿冒进行传输等问题。
 */


/**
 * position 都有什么值
 * absolute, 定位远点为离他最近的第一个定位部位 static 的父结点
 * relative，
 * static
 * fixed
 * sticky，相对定位和固定定位的混合体，可以使导航栏随页面滚动到特定点，然后固定在页面顶部
 */

/**
 * 在 js 中我们是使用构造函数来新建对象的，每一个构造函数的内部都有一个 prototype 属性值，这个属性值包含了所有构造函数实例所共享的属性和方法。
 * 当我们使用构造函数新创建一个对象的时候，这个对象里面包含了一个指针，我们将其称为对象的原型，这个指针指向了该构造函数的 prototype，这个 prototype 是这个构造函数所有实例所共享的属性和方法。
 * 一般可以通过这个新创建的对象的__proto__或者 Object.getPrototypeOf 来获取。
 * 当我们在这个新对象上面查找一个方法或者属性的时候，查不到，就会去他的原型对象上面查找，那这个原型对象可能又有自己的原型，就这样一直找下去，最顶层是 Object.prototype,这也是为什么所有对象都能访问 toString 方法
 * 这样就形成了一条链，我们将其称为原型链。
 */

function myInstanceOf(left, right) {
    const proto = left.__proto__
    const prototype = right.prototype
    while(true) {
        if (proto === null) return false
        if (proto === prototype) return true
        proto = proto.__proto__
    }
}

/**
 * content-type 都有哪些
 * application/json  application/xml
 * text/plain、text/javascript  text/css  text/html
 * multipart/form-data   application/x-www-form-urlencoded
 * image/png image/jpeg  image/gif
 * application-octet-stream
 * 
 */

/**
 * 1. react 包装原生事件并提供统一的跨浏览器 API 接口，重点关注事件逻辑而不是兼容性问题
 * 2. 事件委托，在根容器上面注册统一的事件监听器，然后 react 根据事件目标元素分发给对应的组件，减少内存占用， 提高性能
 * 3. 事件池化， 事件处理完毕后，合成事件对象会被重置并存储到事件池中，以供后续 复用。
 * 4. API名称用法与原生事件类似。易用性。
 */


/**
 * 合成事件是React将原生事件包装，统一 API后的事件。
 * 为什么这么做？ 主要是为了提供跨浏览器统一的事件 API，这样开发者可以重点关注事件里面的逻辑，而不用关注跨浏览器的事件兼容问题了。
 * 事件委托，不用再每个 dom 节点上注册事件监听器，而是再根容器上面注册统一的事件监听器，然后 React 根据事件的目标元素分发给对应的组件。减少内存占用，提高性能。
 * 事件池化，事件处理完毕后，合成事件对象会被重置并存储到事件池中，共后续复用。
 * 
 * 总结：
 * 1. 跨浏览器的兼容性
 * 2. 事件委托，减少内存提高性能
 * 3. 事件池化，提高复用性
 * 4. API 与原生事件类似。
 */



// 原型链集成
// 问题：1. 原型中包含的引用类型将被所有实例共享 2. 子类再实例化的时候不能给父类构造函数传参
function Person(name) {
    this.name = name
}
Person.prototype.sayName = function() {
    console.log(this.name)
}

function Child(name) {
    this.name = name
}

Child.prototype = new Person();


// 借用构造函数实现集成
// 解决了原型链的问题，但是导致每次创建子类实例都会创建一遍方法。
function Person(name) {
    this.name = name
}
function Child(name) {
    Person.call(this, name)
}
Child.prototype = new Person()


// 组合继承
// 使用原型链集成原型上的属性和方法、使用构造函数继承实例属性
function Person(name) {
    this.name = name
}
Person.prototype.sayName = function() {
    console.log(this.name)
}

function Child(name) {
    Person.call(this, name)
}
Child.prototype = new Person()
Child.prototype.constructor = Child

// 寄生式组合集成
function Person(name) {
    this.name = name
}
Person.prototype.sayName = function() {
    console.log(this.name)
}
function Child(name) {

}
Child.prototype = Object.create(Person.prototype)
Child.prototype.constructor = Child

// class 实现继承
class Person {
    constructor(name) {
        this.name = name
    }
    sayName() {
        console.log(this.name)
    }
}

class Child extends Person {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}

/**
 * IE 事件模型，一次事件共有两个过程，首先是执行目标元素上绑定的事件，然后是事件冒泡阶段，逐级冒泡，检查经过的节点是否绑定了监听事件，有则执行，直到 document 节点
 * DOM2 事件模型，一次事件分为三个过程，首先是捕获阶段，从 document节点一直向下，逐渐检查经过的节点是否绑定了监听事件，有则执行，后面两个阶段跟 IE 事件模型一致。
 */


/**
 * CSS 选择器
 * id class 标签  伪类  伪元素
 * 优先级：标签内选择符 > ID 选择符 > class 选择符、属性选择符、伪类选择符 > 元素和伪元素选择符
 */

/**
 * 1. 客户端向服务端发送一个 SYN连接请求报文段，首部为 1，序号字段为任选的随机数，代表客户端数据的初始序号
 * 2. 服务端为该连接分配 TCP 缓存和变量，然后向客户端发送 SYN ACK 报文段，标志位为 1，序号字段是服务端产生的随机数，代表服务端数据的初始序号
 * 3. 客户端收到肯定应答后，也会为这次 TCP 连接分配缓存和变量，同时向服务端发送一个确认，第三次握手可以在报文段中携带数据。
 * 在我看来，三次握手是双方确认彼此数据的初始序号的过程，如果是两次的话，没有办法知道自己的序号是否已被确认，同时也是为了防止失效的报文段被服务端接收，出现错误的情况。
 */


/**
 * 1. 单项数据流
 * 2. 状态是只读的
 * 3. 单一数据源
 * 4. 通过纯函数来修改，reducer通过当前状态和 action 来计算出新状态
 */


/**
 * 浏览器的缓存策略
 * 分为强缓存和协商缓存，强缓存直接判断资源是否已经过期，没有过期直接使用，协商缓存需要向服务器发送请求，如果返回 304 则直接使用缓存，否则服务器会返回新资源。
 * http1.0 强缓存是 expires，它是资源过期时间，是一个绝对时间，如果客户端修改时间等会影响缓存命中效率，http1.1 强缓存新出的cacheControl，该字段的
 * max-age是一个相对时间，它会根据资源第一次请求时的时间来计算出资源过期的时间，还有 no cache 可以缓存但立即失效，no store 不可以缓存， private 规定资源只能被客户端缓存，不能被代理服务器缓存
 * http1.0 协商缓存用的是 last modified（配合 if modified since 使用），这个值是上一次这个资源修改的时间，精确到 1s ，如果 1s 内多次修改则监听不到，http1.1 新出的 etag 是
 * 资源的唯一标识符，配合 if no match 使用。
 * 
 *  
 * */

/**
 * BFC 块级格式化上下文
 * 相当于一个独立的作用域，里面随便布局，不会影响外面，外面也不会影响里面
 * display flex inline-block
 * position absolute fixed
 * float 除none 以外的值
 * overflow 除了 visible 的值
 * body 根元素
 */

/**
 * 闭包
 * 可以访问自由变量的函数，自由变量是指不是函数的局部变量也不是函数的参数，属于函数外部的变量
 * 实践角度：即使创建自己的上下文已经被销毁，它仍然存在
 * 在代码中引用了自由变量
 */
var data = []

for (var i = 0; i < 3; i++) {
    data[i] = function() {
        console.log(i)
    }
}

data[0]

for (var i = 0; i < 3; i++) {
    data[i] = (
        function(i) {
            return function() {
                console.log(i)
            }
        }
    )(i)
}

/**
 * HTTP2
 * 头信息压缩、数据流、多路复用（复用 TCP 连接，客户端和服务端可以发送多个请求和响应且不必按照顺序）、服务端推送、二进制协议（头信息和数据体）
 */


/**
 * generator 是 js 中的一个特殊函数，主要功能是支持函数的暂停个恢复
 * 通过在 function 关键字后面添加*号来声明，函数体内通过 yield 来暂停函数并接收传递的值
 * 执行该函数会返回一个 generator对象，通过调用该对象的 next 方法执行
 * 调用 next 方法返回值是一个对象，包含了 value 和 done，value 表示本次 yield 返回的值，done 表示整个 generator 函数是否执行完毕
 */

function* generatorFunc() {
    yield 1
    yield 2
    return '完毕'
}
const gen = generatorFunc()
gen.next()


Function.prototype.bind2 = function(context) {
    if (typeof this !== 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
    }
    const self = this
    const args = [...arguments].slice(1)

    const fNOP = function() {}
    const fBound = function() {
        const bindArgs = [...arguments]
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
    }

    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP
    return fBound
}

/**
 * 在 React 16.x 版本引入了 Fiber 架构，它是对 React 核心算法的一次重新实现。引入 Fiber 主要是为了解决旧版 React 在处理大型复杂应用时遇到的性能瓶颈问题，下面从多个方面详细阐述 React 需要 Fiber 的原因：

### 解决长时间同步渲染阻塞主线程问题
- **旧版 React 渲染机制的弊端**：在旧版 React（16 版本之前）中，采用的是基于栈的协调算法，其渲染过程是同步且递归的。当组件树非常庞大时，这个渲染过程会持续占用主线程，导致浏览器无法及时响应用户的交互（如点击、滚动）、处理动画等操作，造成页面卡顿，用户体验变差。例如，在一个包含大量列表项的页面中，每次数据更新触发的渲染可能会让页面在一段时间内无响应。
- **Fiber 的解决方案**：Fiber 架构将渲染过程拆分成多个小的任务单元，每个任务单元可以在浏览器的空闲时间内执行。它采用了异步可中断的渲染方式，允许在渲染过程中暂停、恢复和调整任务的优先级。当浏览器有更重要的任务（如处理用户输入）时，React 可以暂停当前的渲染任务，等浏览器空闲时再继续执行，从而避免了长时间阻塞主线程，提高了页面的响应性能。

### 实现优先级调度
- **不同任务需要不同优先级**：在复杂的 React 应用中，不同的更新任务可能具有不同的重要性和紧急程度。例如，用户输入触发的更新通常需要立即响应，而一些数据的预加载或者非关键 UI 的更新可以稍后处理。旧版 React 无法对这些更新任务进行优先级区分，所有更新都是按照顺序依次处理的。
- **Fiber 支持优先级调度**：Fiber 架构为每个任务分配了优先级，React 可以根据任务的优先级来决定先执行哪些任务。高优先级的任务可以优先处理，低优先级的任务可以暂停或延迟执行。这样可以确保重要的更新能够及时响应用户，提升用户体验。例如，当用户在输入框中输入内容时，输入框的更新任务会被赋予较高的优先级，优先进行处理，保证输入的流畅性。

### 更好地支持渐进式渲染
- **大型应用的渲染挑战**：对于大型的 React 应用，一次性渲染整个组件树可能会消耗大量的时间和资源。在旧版 React 中，只有当整个渲染过程完成后，用户才能看到更新后的界面。
- **Fiber 实现渐进式渲染**：Fiber 允许 React 分阶段、渐进式地渲染组件树。它可以先渲染一些关键的部分，让用户尽快看到界面的更新，然后再逐步渲染其他非关键的部分。这种渐进式渲染的方式可以提高用户感知到的性能，减少用户等待的时间。例如，在一个新闻列表页面中，可以先快速渲染出新闻的标题和摘要，让用户可以开始浏览，然后再逐步加载新闻的详细内容和图片。

### 与浏览器的渲染机制更好地配合
- **浏览器的渲染机制**：浏览器有自己的事件循环机制，它需要不断地处理用户输入、执行 JavaScript 代码、进行页面布局和绘制等操作。为了保证页面的流畅性，浏览器需要在这些任务之间进行合理的调度。
- **Fiber 与浏览器协作**：Fiber 架构可以更好地与浏览器的事件循环机制配合。它利用了浏览器的 `requestIdleCallback` （在浏览器空闲时执行回调函数）和 `requestAnimationFrame` （在下一次重绘之前执行回调函数）等 API，在浏览器的空闲时间内执行渲染任务，避免了与浏览器的其他重要任务发生冲突，从而提高了整体的性能和用户体验。 
 */



/**
 * bind
 */

// Function.prototype.myBind = function(context) {
//     // 判断调用对象是否为函数
//     if (typeof this !== 'function') {
//         throw new Error('Type Error');
//     }
//     // 获取参数
//     const fn = this;
//     const args = [...arguments].slice(1);
//     return function Fn() {
//         return fn.apply(
//             this instanceof Fn ? this : context, args.concat([...arguments])
//         )
//     }
// }


Function.prototype.myBind = function(context) {
    if (typeof this !== 'function') {
        throw new Error('Type Error');
    }
    const fn = this;
    const args = [...arguments].slice(1);
    return function Fn() {
        fn.apply(this instanceof Fn ? this : context, args.concat(...arguments))
    }
}


// const orangesRotting = (grid) => {
//     const queue = []
//     let unrotten = 0 // 完好的个数
//     const height = grid.length
//     const width = grid[0].length
//     for (let i = 0; i < height; i++) {
//         for (let j = 0; j < width; j++) {
//             if (grid[i][j] === 2) {
//                 queue.push([i, j]) // 所有坏橘子的坐标推入队列
//             } else if (grid[i][j] === 1) {
//                 unrotten++ // 统计好橘子的个数
//             }
//         }
//     }
//     if (unrotten === 0) return 0 // 如果没有好橘子，直接返回 0
//     let level = 0 // 树的层次，即腐坏所用的时间
//     const dx = [0, 1, 0, -1]
//     const dy = [1, 0, -1, -1] // 代表四个方向
//     while(queue.length) { // queue 队列不为空就继续循环
//         const levelSize = queue.length // 当前层节点个数
//         level++ // 层次+1
//         for (let i = 0; i < levelSize; i++) {
//             let cur = queue.shift()
//             for (let j = 0; j < 4; j++) {
//                 let x = cur[0] + dx[j]
//                 let y = cur[1] + dy[j]
//                 if (x < 0 || x >= height || y < 0 || y >= width || grid[x][y] !== 1) continue // 腐化好橘子失败，超出边界或本身就不是好橘子，跳过
//                 grid[x][y] = 2 // 将好橘子腐化，避免它被重复遍历
//                 queue.push([x, y]) // 推入队列，下次循环将他们出列
//                 unrotten-- // 好橘子个数-1
//             }
//         }
        
//     }
//     return unrotten === 0 ? level - 1 : -1 // 好橘子如果还存在返回-1
// }

const orangesRotting = (grid) => {
    const M = grid.length;
    const N = grid[0].length;
    const queue = [];
    let count = 0; // 表示新鲜橘子个数
    for (let r = 0; r < M; r++) {
        for (let c = 0; c < N; c++) {
            if (grid[r][c] === 1) {
                count++;
            } else if (grid[r][c] === 2) {
                queue.push([r, c]);
            }
        }
    }

    let round = 0; // 表示腐烂的轮数，或者分钟数
    while(count > 0 && queue.length > 0) {
        round++;
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const orange = queue.shift();
            const r = orange[0];
            const c = orange[1];
            if (r - 1 >= 0 && grid[r - 1][c] === 1) {
                grid[r - 1][c] = 2; //腐化好橘子
                count--;
                queue.push([r - 1, c]);
            }
            if (r + 1 < M && grid[r + 1][c] === 1) {
                grid[r + 1][c] = 2;
                count--;
                queue.push([r + 1, c])
            }
            if (c - 1 >= 0 && grid[r, c - 1] === 1) {
                grid[r, c - 1] = 2;
                count--;
                queue.push([r, c - 1]);

            }
            if ( c + 1 < N && grid[r, c + 1] === 1) {
                grid[r, c + 1] = 2;
                count--;
                queue.push([r, c + 1]);
            }
        }
    }

    if (count > 0) {
        return -1;
    } else {
        return round;
    }
}


Function.prototype.myBind = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error');
    }
    const args = [...arguments].slice(1);
    const fn = this;
    return function Fn() {
        return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
    }
}

// 这里的 this 指向调用 trim 方法的字符串实例
  // 第一次使用 replace 方法，正则表达式 /^\s\s*/ 用于匹配字符串开头的空白字符
  // ^ 表示匹配字符串的开头
  // \s 表示匹配任意空白字符，包括空格、制表符、换行符等
  // \s* 表示匹配零个或多个空白字符
  // 将匹配到的开头的空白字符替换为空字符串，从而去除了字符串开头的空白字符
String.prototype.myTrim = function() {
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/,'')
}



/**
 * 事件循环
 * js 是单线程的，同一时间只能执行一个任务。 遇到一些异步任务比如网络请求、定时器等，执行时间长，如果等待会造成页面的卡顿，用户体验差
 * 为此js 引入了异步编程，而事件循环是实现异步编程的关键。
 * 1. 执行调用栈中的同步任务，直到执行栈为空。
 * 2. 检查微任务队列中是否有任务，有的话则将他们依次放入执行栈中执行，直到微任务队列为空。
 * 3. 从宏任务队列取出一个任务执行，压入调用栈知心，执行完成后再次检查微任务队列。重复步骤 2 和 3。
 */


// // 自定义 webpack loader nodejs，需要导出一个函数
// module.exports = function(source) {
//     return source.toUpperCase();
// }

// module: {
//     rules: [
//         {
//             test: /\.text$/,
//             use: [path.resolve(__dirname, 'custom-loader.js')]
//         }
//     ]
// }


function quickSort(arr) {
    if (arr.length <= 1) return arr
    let base = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), base, ...quickSort(right)]
}


function throttle(fn, delay) {
    let flag = false;
    return function() {
        const context = this
        const args = arguments
        if (!flag) {
            fn.apply(context, args)
            flag = true
            setTimeout(() => {
                flag = false
            }, delay);
        }
    }
}



function throttle(fn, delay) {
    let flag = false
    return function() {
        const context = this
        const args = arguments
        if (!flag) {
            fn.apply(context, args)
            flag = true
            setTimeout(() => {
                flag = false
            }, delay);
        }
    }
}


function debounce(fn, delay) {
    let timer
    return function() {
        const context = this
        const args = arguments
        if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, delay);
    }
}


/**
 * 作用域链
 * 
 * 当查找变量时，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级执行上下文的变量对象中查找，一直找到全局变量对象，也就是全局对象。
 * 这样由多个执行上下文的变量对象构成的链表就叫做作用域链。
 */


/**
 * fiber 作为一种数据结构，用于代表某些 woker，换句话说，就是一个 work 单元，通过fiber 架构，提供了一种跟踪、调度、暂停和终止工作的边界方式。
 */


/**
 * 原型链继承=》借用构造函数继承=》组合继承=》寄生式组合继承=》class 继承
 */


/**
 * webpack 热更新原理
 * 通过 webpack 编译器、HMR 服务器和客户端之间的协作，实现了在应用程序运行时动态更新模块的功能。它利用了 websocket进行通信，在文件发生变化时快速编译并推送更新包，客户端接收并应用更新，
 * 从而避免了页面的完全刷新，提高了开发效率。
 * 
 * webpack 热更新主要涉及三个关键组件：webpack 编译器、HMR 服务器和客户端。
 * webpack 编译器： 负责监听文件系统的变化，当检测到文件发生变化时，重新编译发生变化的模块，并生成更新包（包含更新模块信息）
 * HMR 服务器： 是一个基于 websocket 的服务器，它会与客户端建立实时连接。当 webpack 编译器生成新包后，HMR 服务器会将更新包推送给客户端。
 * 客户端：运行在浏览器中，负责接收 HMR 服务器推送的更新包，并根据更新包的信息更新相应的模块。
 */


// webpack 热更新，里面有三个重要组成，一个是 webpack 编译器，一个是 HMR 服务器，一个是客户端；编译器监听文件系统的变化，当文件变化时，重新编译并生成新的包， HMR 服务器时基于 websocket 的服务器，与客户端建立实时连接
// 当 webpack 编译器生成新包时，HMR 服务器将新包推送给客户端，客户端收到新包后，根据新包信息更新相应的模块。


// webpack 热更新由webpack 编译器、HMR 服务器、客户端组成，webpack 编译器监听文件系统变化，一旦发现变化，会重新编译并生成新包，HMR 服务器基于 websocket 与客户端建立了实时连接，将生成的新包推送给客户端，客户端根据新包更新相应的模块。


/**
 * 简述浏览器的渲染过程，重绘重排在渲染过程中的哪一部分？
 * 答： 浏览器在接收到 HTML 文件后，根据 html 文件构建成 dom树，将解析到的 css 文件构建成cssom 树，如果遇到 script 标签判断是否含有 defer 或者 async，因为 script 标签执行会阻塞页面的渲染，将dom 树和 cssom 树合并成渲染树，然后根据渲染树布局，然后调用浏览器接口进行绘制。
 * 重绘和重排就是在渲染树布局和绘制这一部分。
 * 
 * 绘制：对渲染树中的每一个节点，根据他们的样式信息，计算大小和位置；布局完成后，对渲染书树中的节点信息进行绘制，将他们转为屏幕上的实际像素，这个过程称为绘制。
 */


/**
 * XSS攻击称为跨站脚本攻击，主要通过注入恶意代码，使之在用户的浏览器上执行，盗取用户信息如 cookie来实现攻击。
 * 本质是没有对恶意代码过滤，与正常代码混在一起执行。
 * 存储型：恶意代码被存入网站数据库中，用户请求数据时，恶意脚本被服务器拼接为 html 上返回给用户，从而导致恶意代码的执行
 * 反射型：攻击者构建特殊 URL，服务器收到请求后，从 url 上获取数据，拼接到 HTML 后返回，从而导致了恶意代码的执行
 * dom 型：攻击者构建特殊 URL，用户打开网站时，js从 url 中读取数据，从而导致了恶意代码的执行 
 * 
 * 纯前端：不用服务器拼接后的返回，另一种时对插入到 HTML 中的内容做好充分转义。
 * CSP，白名单，告诉浏览器哪些外部资源时可以加载和执行的。
 * 敏感信息保护cookie 的 http-only，使得脚本无法获取。
 * 也可以对重要操作使用验证码，避免脚本伪装成用户执行一些重要操作。
 * 
 * 
 * 
 * CSRF 称为跨站伪造请求攻击，主要利用同源请求中 cookie 会被携带来盗取用户 cookie，从而实现冒充用户请求攻击。
 * 1. get类型攻击，在网站的 img 标签里面构建一个请求，当用户打开网站时，导致请求自动执行
 * 2. post 类型攻击，通过构建表单，并将它隐藏起来，当用户打开网站时，自动提交
 * 3. 链接类型攻击，比如在 a 标签的 href 中构建一个请求，然后诱导用户去点击。
 * 
 * CSRF token，用户发起请求的时候带上 token。
 * 双重 cookie，服务器给 cookie 中注入随机数，客户端请求的时候，带上 cookie ，还有 cookie 中的随机数，服务端做校验，本质是利用了攻击者可以使用 cookie，但无法读取的特点。
 * 给 cookie 设置samesite，限制 cookie 不能被第三方使用，严格模式完全不能使用，宽松模式 get 请求可以。
 * 
 * 点击劫持
 * 是一种视觉欺骗攻击。将目标网站放到 iframe 中，将 iframe 嵌入到自己的页面，并将 iframe 设置为透明，在上面放一个诱导用户点击的按钮
 * 
 * 可以同意在 http 响应头中设置 X-FRAME-OPTIONS 来防御 iframe 嵌套的点击劫持攻击。
 * 该机制有两个选项：DENY 和 SAMEORIGIN。DENY表示任何网页都不能使用 iframe 载入该网页，SAMEORIGIN表示符合同源策略的网页可以使用 iframe载入该网页。
 */


/**
 * promise 有哪些状态？ 简述 promise.all 的实现原理
 * pending fulfilled rejected
 * promise all 接收一个 promise 数组，然后逐一执行其中的 promise，如果全部 resolve 了，则返回一个promise里面是包含所有 promise 值的数组。
 */
Promise.all = function(promiseArr) {
    let index = 0;
    const result = [];
    return new Promise((resolve, reject) => {
        promiseArr.forEach((p, i) => {
            Promise.resolve(p).then((val) => {
                index++;
                result[i] = val;
                if (index === promiseArr.length) {
                    resolve(result);
                }
            }, err => reject(err))
        });
    })
}


/**
 * 立即执行函数指声明后会立即执行的函数，一般用一个括号来保住函数体，外面在用一个括号来调用该函数。
 */
(function sayName() {
    console.log('hello')
})()

/**
 * 闭包可以使函数访问外部作用域，即使创建闭包的上下文被销毁了，它自己仍然存在，因为保留了对外部作用域中变量的引用。
 * 闭包使用场景：读取函数私有变量，让变量的值始终保持在内存中，实现私有变量和私有方法、函数柯里化（将接收多个参数的函数，转换成一系列接收一个参数的函数）
 */

function createPerson() {
    const name = '1'
    function getName() {
        return name
    }
    return {
        getName: getName
    }
}
const p = createPerson()
console.log(p.getName()) // 无法直接访问 name，但是可以通过 getName方法访问
function a() {
    const name = 'san';
    function b() {
        console.log(name)
    }
    b();
}


function makeSizer(size) {
    return function() {
        document.body.style.fontSize = `${size}px`;
    }
}




// const curry = (fn, ...args) => {
//   return args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)
// }

// function add(a, b, c) {
//     return a + b + c
// }

const curry = (fn, ...args) => {
    return args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)
}


/**
 * diff 算法是一种比较新旧虚拟 DOM树之间差异的算法，以最小的实际 DOM 操作来提高页面更新性能。
 * 
 * 1. 虚拟 DOM树构建：在使用 React、Vue 等框架时，首次渲染会根据组件的状态和数据生成一颗虚拟 DOM树。虚拟 DOM树时轻量级的 js 对象，用来描述真实 DOM 的结构和属性。
 * 
 * 2. 逐层比较：当数据发生变化，产生新的虚拟 DOM树时，diff 算法会对新旧两颗虚拟 DOM树进行逐层比较（深度优先遍历）。比较过程从跟节点开始，依次比较子节点。
 * 
 * 3. 节点类型判断：在比较两个节点时，首先判断节点的类型（标签名、组件类型等）。如果节点类型不同，那么认为这两个节点极其子树完全不同，会直接用新节点替换旧节点。例如，
 * 一个<div>节点和一个<p>节点，类型不同，直接替换。
 * 
 * 4. 节点属性更新：如果节点类型相同，再比较节点的属性。对于属性的变化，只更新有变化的属性，而不是重新设置所有属性。比如，一个<div>节点原来的 class 是”old-class“，现在变为”new-class“，diff 算法
 * 只会更新 class 属性值。
 * 
 * 5. 子节点比较：对于子节点比较，通常采用”同层对比“策略（两个树的完全 diff 算法的时间复杂度为 O(n^3) ，但是在前端中，我们很少会跨层级的移动元素，所以我们只需要比较同一层级的元素进行比较，这样就可以将算法的时间复杂度降低为 O(n)。）。
 * 以 React 为例，它会按顺序遍历新旧子节点列表，尽量复用相同位置的节点。如果发现某个位置的子节点不同，会尝试移动、删除、插入等操作来调整子节点顺序，使新子节点列表与旧子节点列表匹配。比如旧子节点列表是
 * [ABC]，新子节点列表是[BAC]，diff 算法会通过移动操作来调整顺序。
 * 
 * 6. 标记和批量更新：在比较过程中，会对需要更新的节点进行标记，记录下具体的变化操作（如属性更新、节点删除、插入等）。比较完成后，讲这些变化操作批量应用到真实 DOM 上，一次性更新页面，减少重排和重绘的次数。
 * 
 * 
 * 使用场景
    前端框架渲染优化：React、Vue 等前端框架都广泛使用了 diff 算法。当组件状态或数据发生变化时，通过 diff 算法高效地计算出变化，只更新必要的 DOM 部分，避免了对整个页面的重新渲染，提高了应用的性能和响应速度。
    状态管理库配合：在结合 Redux、Mobx 等状态管理库使用时，当状态发生变化触发组件更新，diff 算法可以帮助框架快速确定哪些组件需要更新以及如何更新，实现精确的视图更新。
    动态 UI 场景：在一些动态生成 UI 的场景中，如列表的增删改操作频繁的页面（如电商应用的购物车列表、社交应用的动态列表等），diff 算法能够快速处理这些变化，确保页面及时反映最新状态，同时保持良好的性能。

    虚拟 DOM树构建=》逐层比较=》节点类型判断=》节点属性更新=》子节点比较=》标记和批量更新
 */


/**
 * diff 算法是用来比较新旧两颗虚拟 DOM树差异的算法，通过最小的实际 DOM 操作来提高页面更新性能。
 * 构建虚拟 DOM树=》逐层比较=》节点类型判断=》节点属性更新=》子节点比较=》标记和批量更新
 * 
 * 1. 虚拟 DOM树的构建：在使用 React、Vue框架时，首次渲染会根据组件的状态和属性构建一颗虚拟 DOM树。虚拟 DOM是轻量级的 js 对象，用来描述真实 DOM 的结构和属性。
 * 2. 逐层比较：当数据发生变化，产生新的虚拟 DOM树时，diff 算法会对新旧两颗虚拟 DOM树通过深度优先遍历逐层比较，从根节点开始，依次比较子节点。
 * 3. 节点类型判断：在比较两个节点时，首先会判断类型（标签名、组件类型）。如果节点类型不同，则认为两个节点及其子树完全不同，会直接用新节点替换掉旧节点。比如新的是 div，旧的是 p，会直接替换。
 * 4. 节点属性更新：如果节点类型相同，再比较节点的属性变化，对于属性只更新有变化的属性，而不是全部重新设置。比如 div 的 class 原来还old-class，变为 new-class，那么只用更新 div 的 class 属性值即可。
 * 5. 子节点的比较：对于子节点的比较，通常采用同层比较策略。以 React 为例，会按顺序遍历新旧子节点列表，尽量复用相同位置的节点。如果发现某个位置的子节点不同，会尝试通过插入、删除、移动等操作来调整子节点顺序，
 * 使得新旧子节点列表匹配。比如如旧子节点列表是 ABC，新的是 BAC，diff 算法则会通过移动子节点操作来调整顺序。
 * 6. 在比较过程中，会对需要更新的节点标记，记录下具体的变化（属性更新、节点的删除插入等）。比较完成后，将这些变化操作批量应用到真实 DOM上，一次性更新页面，减少重绘重排的次数。
 * 
 * 
 * 
 * 复述：
 * 1. 虚拟 dom树的构建：在使用 React、Vue 等框架时，首次渲染会根据组件的状态和数据构建一颗虚拟 DOM树。虚拟 DOM是轻量化的 js 对象，用来描述真实 DOM 的结构和属性。
 * 2. 逐层比较：当数据发生变化时，生成新的虚拟 DOM树，diff 算法会对新旧两颗虚拟 DOM树深度优先遍历逐层比较，从根节点开始，依次比较子节点。
 * 2. 节点类型判断：在比较两个字节点时，首先判断类型，如果节点类型不同，则会认为这两个节点及其子树不同，直接用新节点替换旧节点。比如新的 div 旧的时 p，直接替换。
 * 3. 节点属性判断： 节点类型相同则会判断节点属性是否发生变化，对于属性只更新发生变化的，而不是全部重新设置。比如 div 的 class 属性原来时 old-class，现在时 new-class，直接更新 class 属性值即可。
 * 4. 子节点比较：对于子节点，通常采用 同层比较 策略。以 React 为例，它会按顺序遍历新旧子节点列表，尽量复用相同位置的节点。如果发现某个位置的子节点不同，会尝试通过移动，插入、删除等操作来调整子节点的顺序，使得
 * 新旧子节点列表相匹配。比如旧的是 ABC，新的是 BAC，diff 算法会通过移动操作来调整顺序。
 * 5. 标记和批量更新：在比较过程中，对需要更新的节点进行标记，记录具体的变化操作（移动、删除、插入）。比较完成后，一次性批量应用到真实 DOM 上，减少重绘重排的次数。
 */


/**
 * 简述 Vue 的生命周期
 * beforeCreate created beforeMount mounted beforeUnmount unmounted  beforeUpdate updated
 * 
 */


function deepCopy(target, map = new Map()) {
    if (!target || typeof target !== 'object') return target
    if (map.get(target)) return map.get(target)
    if (/^(Date | RegExp)$/i.test(target.constructor.name)) return new target.constructor(target)
    const newObj = Array.isArray(target) ? [] : {}
    map.set(target, newObj)
    for (let key in target) {
        if (Object.hasOwnProperty(target[key])) {
            newObj[key] = typeof target[key] === 'object' ? deepCopy(target[key]) : target[key]
        }
    }
    return newObj
}

// n秒内函数只执行依次，如果 n秒内触发，重新计算时间
function debounce(fn, delay) {
    let timer
    return function() {
        const context = this
        const args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}

// 连续触发，n秒内函数只执行一次
function throttle(fn, delay) {
    let flag = false
    return function() {
        if (flag) return
        const context = this
        const args = arguments
        flag = true
        fn.apply(context, args)
        setTimeout(() => {
            flag = false
        }, delay);
    }
}


/**
 * em  相对于当前元素的字体大小作为参考
 * rem 相对于根元素的字体大小作为参考
 */


/**
 * 优化首屏渲染的方式有哪几种？
 * 
 * 代码层面
 * 1. 压缩代码=》html css js
 * 2. 合并文件=》将多个 css 文件和 js 文件合并成一个，减少 http 请求
 * 3.代码分割 懒加载
 * 3. 内联关键 css，将首屏渲染所需的关键 css 代码直接内联到 HTML 文件的<style>标签中，这样浏览器可以在解析 html 时立即应用这些样式，无需等待外部 css 文件的下载。
 * 
 * 服务器层面
 * 1. 采用 CDN，将网站的静态资源缓存到离用户近的服务器上，从而加快资源下载
 * 2. 服务端渲染
 * 3. 开启 Gzip 压缩
 * 
 * 图片层面
 * 1. 选用合适的图片格式，颜色丰富 jpeg， 透明背景 png， 质量和大小都合适 webp
 * 2. 图片进行压缩，比如用 tinypng 等
 * 3. 图片懒加载
 * 
 * 其他
 * 1. 减少 dns 解析时间， dns prefetch 预解析
 * 2. 编写css js时，  尽量减少重绘重排
 */