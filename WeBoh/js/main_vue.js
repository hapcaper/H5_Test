
var WEIBO_LIST = [];
var PAGE;

/**
 * Created by ASUS on 2017/8/14.
 */

let weibo_item = new Vue({
    el:'#weibo_item',
    data:{
        title:'MSG_title',
        content:'MSG_content'
    }
});


new Vue({
    el: '#main_msg_body',
    data: {
        weibolist: WEIBO_LIST
    }
});



/*

    GET

    access_token	true	string	采用OAuth授权方式为必填参数，OAuth授权后获得。
    since_id	    false	int64	若指定此参数，则返回ID比since_id大的微博（即比since_id时间晚的微博），默认为0。
    max_id	        false	int64	若指定此参数，则返回ID小于或等于max_id的微博，默认为0。
    count	        false	int	    单页返回的记录条数，最大不超过100，默认为20。
    page	        false	int	    返回结果的页码，默认为1。
    base_app	    false	int	    是否只获取当前应用的数据。0为否（所有数据），1为是（仅当前应用），默认为0。
    feature	        false   int	    过滤类型ID，0：全部、1：原创、2：图片、3：视频、4：音乐，默认为0。
    trim_user	    false	int	    返回值中user字段开关，0：返回完整user字段、1：user字段仅返回user_id，默认为0。
* */
function requestWeibo(page, since_id , max_id , count , base_app , feature , trim_user ) {

    let url = 'https://api.weibo.com/2/statuses/home_timeline.json';

    let weibo_param = {
        access_token:TOKEN,
        since_id: since_id?since_id:0,
        max_id : max_id?max_id:0,
        count : count?count:20,
        page : page?page:1,
        base_app : base_app?base_app:0,
        feature : feature?feature:0,
        trim_user : trim_user?trim_user:0
    };

    $.ajax({
        dataType: "jsonp",
        url: url,
        data: weibo_param,
        success: push_weibo
    });


    function push_weibo(data) {
        let weibos = data;
        console.log(weibos);
        statuses = weibos.data.statuses;     //获取到 statuses 数组对象
        statuses.forEach(function (a) {

            WEIBO_LIST.push(a);
        });

        // noinspection JSAnnotator
        PAGE++;
    }


}

$(function ($) {
    //判断登陆  是否有有效token
    let token = checkToken();

    if(token){
        // hasToken();
    }else{
        // noToken();
        alert('不存在cookie');

    }



    // TODO 写成两个方法
    //如果有效  得到TOKEN  正常加载数据
    PAGE = 1;
    getMoreWeibo();

    //如果无效  进入授权过程

});
function getMoreWeibo() {

    requestWeibo(PAGE);

}

function checkToken() {
    let token = Cookies.get('TOKEN');
    if(!token){

    }else{
        // noinspection JSAnnotator
        TOKEN = token;
    }
    return token;


}







