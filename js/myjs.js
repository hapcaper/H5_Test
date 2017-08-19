/**
 * Created by ASUS on 2017/3/31.
 */
window.onload=function () {
    check_title();
}


function check_title() {
    var titles = document.getElementById('left').getElementsByTagName('a');
    for(var i = 0;i<titles.length;i++){
        var title_str = titles[i].innerHTML;
        console.log(title_str);
        if(title_str.length>5){
            title_str = title_str.substring(0,5);
            titles[i].innerHTML = title_str;
        }
    }
}
