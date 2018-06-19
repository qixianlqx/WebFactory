// 分类明细
function infoList(id, title, img, apptime, desc) {
    var self = this;
    //self.typeid = ko.observable(tppeid);
    self.id = ko.observable(id);
    self.title = ko.observable(title);
    self.img = ko.observable(img);
    self.apptime = ko.observable(apptime);
    self.desc = ko.observable(desc);
}
//分类
function TypeList(id, name, className, infos) {
    var self = this;
    self.id = ko.observable(id);
    self.name = ko.observable(name);
    self.infos = ko.observableArray(infos || []);
    self.className = ko.observable(className);
}

function setItem(infos) {

    var list = ([]);

    if (!infos || infos.length == 0) list;

    Enumerable.from(infos).forEach(function(item) {
        list.push(new infoList(item.id(), item.title(), item.img(), item.apptime(), item.desc()));
    });
    return list;
}

function ViewModel() {
    var self = this;

    self.TypeList = ko.observableArray([
        new TypeList(1, '公司新闻', 'am-icon-pie-chart', ko.mapping.fromJS(news[0].infos)(), this),
        new TypeList(2, '行业新闻', 'am-icon-won', ko.mapping.fromJS(news[1].infos)(), this),
    ]);

    self.infoList = ko.observableArray(setItem(self.TypeList()[0].infos()));
    self.typeClick = function(item) {
        self.count = item.infos().length;
        console.log(item.infos());
        self.infoList(setItem(item.infos()));
        self.className(item.className());
        self.currentName(item.name());
    }
    self.count = self.TypeList()[0].infos().length;
    self.currentName = ko.observable(self.TypeList()[0].name());
    self.className = ko.observable(self.TypeList()[0].className());
}
ko.applyBindings(new ViewModel());