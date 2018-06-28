function ViewModel() {
    var self = this;

    self.TypeList = ko.observableArray(productLists.Data('../'));
    self.ProDetails = ko.observableArray(productLists.setItem(self.TypeList()[0].infos()[0].ProDetails()));
    //点击产品类型
    self.infoClick = function(item, name, count) {
        self.count = item.ProDetails().length;
        if (name == item.title()) {
            self.currentName(" - " + item.title());
        } else {
            self.currentName(" - " + name + " - " + item.title());
        }
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
    self.count = self.TypeList()[0].infos().length;
    self.currentName = ko.observable('');
    //self.className = ko.observable(self.TypeList()[0].className());
    self.className = ko.observable('am-icon-sitemap');
}
ko.applyBindings(new ViewModel());