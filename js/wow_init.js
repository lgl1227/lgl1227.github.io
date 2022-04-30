// 首页文章卡片动画
var arr = document.getElementsByClassName("recent-post-item");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow"); // 必要项，添加wow.js标记
    arr[i].classList.add("animate__slideInUp"); // 必要项，添加样式动画
}

// 友链动画
var arr = document.getElementsByClassName("flink-list-item");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__shakeY");
}
// 标签动画
var arr = document.getElementsByClassName("tag-cloud-list is-center");
for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__slideInUp");
}

// 初始化函数 动画效果预览: https://animate.style/
wow = new WOW({
    // 当用户滚动时显示隐藏框的类名称
    boxClass: 'wow',
    // 触发 CSS 动画的类名称（动画库默认为"animate.css"库）
    animateClass: 'animate__animated',
    // 定义浏览器视口底部与隐藏框顶部之间的距离。
    // 当用户滚动并到达此距离时，将显示隐藏的框。
    offset: 0,
    // 在移动设备上打开/关闭wow.js。
    mobile: false,
    // 在页面上检查新的 wow.js元素。
    live: true
})
wow.init();