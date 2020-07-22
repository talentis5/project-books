var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '这是vue的的的'
    },
});

console.log(_)
const {throttle} = _;
const btn = document.getElementById('js_btn')
btn.addEventListener("click",throttle(() => {
    console.log(Math.random())
}))



