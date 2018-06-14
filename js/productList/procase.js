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
        new TypeList(1, '直流屏', 'am-icon-pie-chart', [new infoList(1, '直流屏', 'zlp_zlp.jpg')]),
        new TypeList(2, '一次性锂电池', 'am-icon-won', [new infoList(1, 'Li-MnO2', 'Li-MnO2.jpg'), new infoList(2, 'Li-SO2', 'Li-SO2.jpg'), new infoList(3, 'Li-SOCl2', 'Li-SOCl2.jpg')]),
        new TypeList(3, '可充电锂电池', 'am-icon-gears', [new infoList(1, 'LCO-LiCoO2', 'LCO-LiCoO2.jpg'), new infoList(2, 'LTO-Li4Ti5O12', 'LTO-Li4Ti5O12.jpg'), new infoList(3, 'NCA-LiNiCoAlO2', 'NCA-LiNiCoAlO2.jpg'), new infoList(4, '>NMC-LiNiMnCoO2-NCM', '>NMC-LiNiMnCoO2-NCM.jpg'), new infoList(5, 'SLFP-LiFePO4-SLFP', 'SLFP-LiFePO4-SLFP.jpg')]),
        new TypeList(4, '银', 'am-icon-institution', [new infoList(1, 'Ag-Zn', 'Ag-Zn.jpg'), new infoList(2, 'AgCl-Mg', 'AgCl-Mg.jpg'), new infoList(2, 'AgO-Al', 'AgO-Al.jpg')]),
        new TypeList(5, '镍', 'am-icon-bolt', [new infoList(1, 'Ni-H2', 'Ni-H2.jpg'), new infoList(2, 'Ni-MH', 'Ni-MH.jpg'), new infoList(3, "镍炭电容器", '镍炭电容器.jpg'), new infoList(4, "镍镉", '镍镉.jpg')])
    ]);
    self.infoList = ko.observableArray(setItem(self.TypeList()[0].infos()));
    self.typeClick = function(item) {
        self.count = item.infos().length;
        self.infoList(setItem(item.infos()));
        self.className(item.className());
        self.currentName(item.name());
    }
    self.count = self.TypeList()[0].infos().length;
    self.currentName = ko.observable(self.TypeList()[0].name());
    self.className = ko.observable(self.TypeList()[0].className());
}
ko.applyBindings(new ViewModel());