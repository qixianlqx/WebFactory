// 分类明细
function infoList(id, title, img, apptime) {
    var self = this;
    self.id = ko.observable(id);
    self.title = ko.observable(title);
    self.img = ko.observable(img);
    self.apptime = ko.observable(apptime);
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
        list.push(new infoList(item.id(), item.title(), item.img(), item.apptime()))
    });
    return list;
}

function ViewModel() {
    var self = this;

    self.TypeList = ko.observableArray([
        new TypeList(1, '石油化工', 'am-icon-pie-chart', [new infoList(1, '天津LNG接收站', 'sy_tianjing.jpg')]),
        new TypeList(2, '风电能源', 'am-icon-won', [new infoList(1, '三峡新能源公司', 'fn_sanxia.jpg'), new infoList(2, '国家电投集团', 'fn_guojia.jpg')]),
        new TypeList(3, '钢铁行业', 'am-icon-gears', [new infoList(1, '潍坊特钢集团有限公司', 'gt_tangfag.jpg'), new infoList(2, '襄汾星原钢铁集团', 'gt_xiangfen.jpg')]),
        new TypeList(4, '建筑水泥', 'am-icon-institution', [new infoList(1, '赞皇金隅水泥有限公司', 'sl_zanhuang.jpg'), new infoList(2, '叶城天山水泥有限责任公司', 'sl_yecheng.jpg')]),
        new TypeList(5, '变电站电力所', 'am-icon-bolt', [new infoList(1, '迁安市九江线材有限责任公司', 'bdz_qianan.jpg'), new infoList(2, '京能中电电力工程有限公司', 'bdz_jingnong.jpg'), new infoList(3, "北京四方继保工程技术有限公司", 'bdz_sifang.jpg')])
    ]);
    self.infoList = ko.observableArray(setItem(self.TypeList()[0].infos()));
    self.typeClick = function(item) {
        self.count = item.infos().length;
        self.infoList(setItem(item.infos()));
        self.className(item.className());
        self.currentName(item.name());
        loadFun();
    }
    self.count = self.TypeList()[0].infos().length;
    self.currentName = ko.observable(self.TypeList()[0].name());
    self.className = ko.observable(self.TypeList()[0].className());
}
ko.applyBindings(new ViewModel());