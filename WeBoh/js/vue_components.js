/**
 * Created by lizihao on 17-8-21.
 */

Vue.component('webo-item',{
    template : '<div class="row">' +
    '<div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">' +
    '--- component ---' +
    '<slot> 没有内容！！ </slot>' +
    '</div>' +
    '</div>'


})

Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})

new Vue({
    el:'#item_test'
})
