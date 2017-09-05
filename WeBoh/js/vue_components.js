/**
 * Created by lizihao on 17-8-21.
 */

Vue.component('webo-item', {
    props: ['weibo','text','who','pic','when'],
    template: '<div class="row">' +
    '<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">' +
    '<div  class="panel panel-default">' +
    '<div class="panel-body">' +
    '<h3 class="h5">{{ weibo.created_at }}</h3>' +
    '<div class="thumbnail">' +
    '<img :src="weibo.user.bmiddle_pic">' +
    '<div class="caption">' +
    '<h4 class="h4">TTTTest</h4>' +
    '</div>' +
    '<P>{{ weibo.user.name }}</P>' +
    '</div>' +
    '<button class="btn btn-danger">CLICK</button>' +
    '</div>' +
    '</div>' +
    '<p >{{ weibo.text }}</p>' +

    '99999999999999' +
    '</div>' +
    '</div>',




});
