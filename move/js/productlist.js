//如果是跳转过来就根据参数取得
function setProByUrl(obj) {
    var data = productLists.Data('../');
    var prolist = [];
    var proid = jQuery.url.param("id");
    var typeid = jQuery.url.param("typeid");
    var proinfo = null;
    var currentName = '';
    $.each(data, function(index, obj) {
        if (obj.id() == typeid) {
            currentName = ' - ' + obj.name();
            $.each(obj.ProDetails(), function(j, item) {
                if (item.id() == proid) {
                    currentName = ' - ' + item.name();
                    proinfo = item;
                    return false;
                }
            });
            return false;
        }
    });
    if (proinfo) {
        //设置产品详情
        obj.showImg(proinfo);
        obj.isShowNew(true);
        obj.isLoad(false);
        obj.currentName(currentName);
    }
}

function ViewModel() {
    var self = this;

    var dd = 0;
    self.TypeList = ko.observableArray(productLists.Data('../'));
    self.ProDetails = ko.observableArray(productLists.setItem(self.TypeList()[0].ProDetails()));
    //点击产品类型
    self.typeClick = function(item) {
        self.count = item.ProDetails().length;
        self.currentName(" - " + item.name());

        self.ProDetails(productLists.setItem(item.ProDetails()));
        self.isLoad(true);
        //重新加载点击事件(延迟加载元素后需要重新绑定事件，否则事件无效)         
        //Modal();

    };
    //详设产品详情参数对象
    self.showImg = ko.observable(ko.mapping.fromJS({ desc: ko.observable(''), img: '', name: '', segmentMarket: [], feature: [], spec: [], huangjing: [], inputs: [], outputs: [] }));
    //点击显示产品详情事件
    self.showClick = function(item) {
        //设置当前选择的产品
        self.showImg(item);
        //显示产品详情
        self.isShowNew(true);
        self.isLoad(false);
    }
    self.isShowNew = ko.observable(false);
    self.isLoad = ko.observable(false);
    self.count = self.TypeList()[0].ProDetails().length;
    self.currentName = ko.observable('');
    //self.className = ko.observable(self.TypeList()[0].className());
    self.className = ko.observable('am-icon-sitemap');
}
var vm = new ViewModel();
ko.applyBindings(vm);

$(function() {
    setProByUrl(vm);
});