// 分类明细
function infoList(id, title, imgs) {
    var self = this;
    self.id = ko.observable(id);
    self.title = ko.observable(title);
    self.imgs = ko.observableArray(imgs);
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

//细分市场
function SegmentMarket(id, name, img) {
    var self = this;
    self.id = ko.observable(id);
    self.img = ko.observable(img);
    self.name = ko.observable(name);
}

///产品详情
function ProDetail(id, img, name, feature, spec) {
    var self = this;
    self.id = ko.observable(id);
    self.img = ko.observable(img);
    self.name = ko.observable(name);
    self.segmentMarket = ko.observableArray(feature || []);
    self.feature = ko.observableArray(feature || []);
    self.spec = ko.observableArray(spec || []);
}

function ViewModel() {
    var self = this;

    self.TypeList = ko.observableArray([
        new TypeList(1, '直流屏', 'am-icon-pie-chart', [new infoList(1, '直流屏', 'zlp_zlp.jpg')]),
        new TypeList(2, '一次性锂电池', 'am-icon-won', [
            new infoList(1, 'Li-MnO2', [
                new ProDetail(1, 'Li-MnO2-junyong.jpg', '军用一次性锂电池系统', '军用一次性锂电池能够应对战场和训练场中严苛的机械和电气环境。<br/>将多个独立电池串联、并联或串并联在一起，置于软包装（热收缩塑料套）或硬包装（塑料或金属）中。可为特定设备提供定制版本和标准版本电池。一般的安全特点包括根据要求提供电气保险丝和热熔丝、过流保护器和二极管。这种电池还可提供充电状态指示器和SM总线通讯。', ['重量轻', '在大多数使用周期内提供稳定的输出电压', '能够在广泛的温度范围内提供优异性能', '低自放电率', '使用前可存储超过5年时间', '结构牢固的设计', '即使在各种温度下存储很长时间，依然具有出色的耐钝化特性', '在 -20°C 温度下具有无与伦比的性能', '一些电池型号配有充电状态指示器', '多种化学反应系列电池：锂-二氧化硫、锂-二氧化锰、锂-亚硫酰氯'], ['标称电压：最高30V', '标称容量：最高68Ah', '工作温度：-60°C至+70°C'])
            ]),
            new infoList(2, 'Li-SO2', [
                new ProDetail(1, 'LO_G.jpg', 'LO, G', 'LO/G 圆柱型锂原电池以锂-二氧化硫 (Li-SO2) 化学反应为基础，它具有非常大的螺旋电极面积，能够提供大功率和最强的电流脉冲能力。它的设计适用于需要连续获得 0.1-5A 电流的设备，并且提供高达 60A 的叠加脉冲。', ['在大多数使用周期内提供稳定的高工作电压', '无与伦比的脉冲能力', '能够在低至 -40℃ 的条件下提供优异的电力', '容量在 1A 以上', '优秀的耐钝化性能，电压延迟非常低', '低自放电特性，存储时间更长', '无论电池方向如何，都能够释放能量', '技术成熟，量产超过30年，拥有丰富的实践经验', '重量轻', '在严苛的军事设备领域拥有出色的安全记录'], ['标称电压：3.0V', '螺旋结构', '圆柱状：1/2AA 至 F', '最大脉冲能力达到60A', '容量范围：0.45Ah 至 16.5Ah', '工作温度：-40°C 至 +70°C', '不易燃电解液', '符合欧盟 RoHS 指令'])
            ]),
            new infoList(3, 'Li-SOCl2', [])
        ]),
        new TypeList(3, '可充电锂电池', 'am-icon-gears', [new infoList(1, 'LCO-LiCoO2', 'LCO-LiCoO2.jpg'), new infoList(2, 'LTO-Li4Ti5O12', 'LTO-Li4Ti5O12.jpg'), new infoList(3, 'NCA-LiNiCoAlO2', 'NCA-LiNiCoAlO2.jpg'), new infoList(4, '>NMC-LiNiMnCoO2-NCM', 'NMC-LiNiMnCoO2-NCM.jpg'), new infoList(5, 'SLFP-LiFePO4-SLFP', 'SLFP-LiFePO4-SLFP.jpg')]),
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