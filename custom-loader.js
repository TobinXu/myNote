// 自定义 webpack loader nodejs，需要导出一个函数
module.exports = function(source) {
    return source.toUpperCase();
}