// 自定义 webpack loader nodejs，需要导出一个函数
module.exports = function(source) {
    return source.toUpperCase();
}

function removeConsole(source) {
    const regexp = /console\.log\([^)]*\);?/g;
    return source.replace(regexp, '');
}
// console\.log
// ;? 匹配; 0 次或多次
// 还剩\([^)]*\) =》 \( \)匹配左右括号   [^)]*匹配除了右括号以外的字符零次或多次

module.exports = {
    a:1,
    removeConsole,
}