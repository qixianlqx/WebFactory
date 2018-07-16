//如果是跳转过来就根据参数取得
function setProByUrl(obj) {
    var data = productLists.Data();
    var prolist = [];
    var proid = jQuery.url.param("id");
    var typeid = jQuery.url.param("typeid");
    var proinfo = null;
    var typeinfo = null;
    var currentName = '';
    $.each(data, function(index, obj) {
        if (obj.id() == typeid) {
            typeinfo = obj; //类型
            currentName = ' - ' + obj.name();
            $.each(obj.ProDetails(), function(j, item) {
                if (item.id() == proid) {
                    currentName = ' - ' + item.name();
                    proinfo = item; //产品
                    return false;
                }
            });
            return false;
        }
    });
    if (proinfo) {
        //选中类别
        obj.typeClick(typeinfo);
        //设置产品详情
        obj.showClick(proinfo);
        $("#typeUL li[typeid=" + typeid + "]").addClass("selectType");
    }
}

function ViewModel() {
    var self = this;

    self.TypeList = ko.observableArray(productLists.Data());
    self.ProDetails = ko.observableArray(productLists.setItem(self.TypeList()[0].ProDetails()));
    //点击产品类型
    self.typeClick = function(item) {
        self.count = item.ProDetails().length;
        self.currentName(item.name());
        self.ProDetails(productLists.setItem(item.ProDetails()));
        $("#typeUL li").removeClass("selectType");

    };
    //详设产品详情参数对象
    self.showImg = ko.observable(self.TypeList()[0].ProDetails()[0]);
    //点击显示产品详情事件
    self.showClick = function(item) {
        //设置弹出框标题   
        //打开弹框
        $("#dialog").dialog("option", "title", item.name()).dialog("open");
        //设置当前选择的产品
        self.showImg(item);
        //回到顶部
        $("#dialog").scrollTop(0);
    }
    self.count = self.TypeList()[0].ProDetails().length;
    self.currentName = ko.observable(self.TypeList()[0].name());
    //self.className = ko.observable(self.TypeList()[0].className());
    self.className = ko.observable('am-icon-sitemap');
}
var vm = new ViewModel();
ko.applyBindings(vm);

function setDig() {

    //初始化弹出框
    $("#dialog").dialog({
        width: $(window).width() * 0.6,
        height: $(window).height() * 0.9,
        draggable: false,
        resizable: false,
        autoOpen: false,
        modal: true,
        Cancel: function() {
            $(this).dialog("close");
        }
    });

}

$(function() {
    setDig();
    setProByUrl(vm);
});