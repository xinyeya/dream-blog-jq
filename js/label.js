;$('body').ready(function() {

    layui.use(['jquery','layer', 'laytpl'],function(){
        var $ = layui.$,
            layer = layui.layer;
        laytpl = layui.laytpl;
    });

    let data = { //数据
        "title":"文章标签",
        "list":[
            '标签111', '标签2', '标签2424243', "标签4",
            '标签111', '标签2', '标签2424243', "标签4",
            '标签111', '标签2', '标签2424243', "标签4"
        ]
    }
    let getTpl = label.innerHTML
        ,view = document.getElementById('label_view');
    laytpl(getTpl).render(data, function(html){
        view.innerHTML = html;
    });

    var tags_a = $("#tags span");
    tags_a.each(function(){
        var x = 20;
        var y = 0;
        var rand = parseInt(Math.random() * (x - y + 1) + y);
        $(this).addClass("tags"+rand);
    });
})