function ViewModel() {
    var self = this;

    self.TypeList = ko.observableArray(productLists.Data());
    self.ProDetails = ko.observableArray(productLists.setItem(self.TypeList()[0].infos()[0].ProDetails()));
    //点击产品类型
    self.infoClick = function(item, name, count) {
        self.count = item.ProDetails().length;
        self.currentName(name + " - " + item.title());
        self.ProDetails(productLists.setItem(item.ProDetails()));
        //重新加载点击事件(延迟加载元素后需要重新绑定事件，否则事件无效)         
        //Modal();

    };
    //详设产品详情参数对象
    self.showImg = ko.observable(self.TypeList()[0].infos()[0].ProDetails()[0]);
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
    self.count = self.TypeList()[0].infos().length;
    self.currentName = ko.observable(self.TypeList()[0].name());
    //self.className = ko.observable(self.TypeList()[0].className());
    self.className = ko.observable('am-icon-sitemap');
}
ko.applyBindings(new ViewModel());