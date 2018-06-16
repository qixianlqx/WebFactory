// 分类明细
function infoList(id, title, ProDetails) {
    var self = this;
    self.id = ko.observable(id);
    self.title = ko.observable(title);
    self.ProDetails = ko.observableArray(ProDetails);

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
        list.push(new ProDetail(item.id(), item.img(), item.name(), item.desc(), item.feature(), item.spec(), item.segmentMarket()))
    });
    return list;
}

//细分市场
function segmentMarket(id, name, img) {
    var self = this;
    self.id = ko.observable(id);
    self.img = ko.observable(img);
    self.name = ko.observable(name);
}

///产品详情
function ProDetail(id, img, name, desc, feature, spec, segmentMarket) {
    var self = this;
    self.id = ko.observable(id);
    self.img = ko.observable(img);
    self.name = ko.observable(name);
    self.desc = ko.observable(desc);
    self.segmentMarket = ko.observableArray(segmentMarket || []);
    self.feature = ko.observableArray(feature || []);
    self.spec = ko.observableArray(spec || []);
}

function ViewModel() {
    var self = this;

    self.TypeList = ko.observableArray([
        new TypeList(1, '直流屏', 'am-icon-pie-chart', [new infoList(1, '直流屏', [])]),
        new TypeList(2, '一次性锂电池', 'am-icon-won', [
            new infoList(1, 'Li-MnO2', [
                new ProDetail(1, 'Li-MnO2-junyong.jpg', '军用一次性锂电池系统', '军用一次性锂电池能够应对战场和训练场中严苛的机械和电气环境。<br/>将多个独立电池串联、并联或串并联在一起，置于软包装（热收缩塑料套）或硬包装（塑料或金属）中。可为特定设备提供定制版本和标准版本电池。一般的安全特点包括根据要求提供电气保险丝和热熔丝、过流保护器和二极管。这种电池还可提供充电状态指示器和SM总线通讯。', ['重量轻', '在大多数使用周期内提供稳定的输出电压', '能够在广泛的温度范围内提供优异性能', '低自放电率', '使用前可存储超过5年时间', '结构牢固的设计', '即使在各种温度下存储很长时间，依然具有出色的耐钝化特性', '在 -20°C 温度下具有无与伦比的性能', '一些电池型号配有充电状态指示器', '多种化学反应系列电池：锂-二氧化硫、锂-二氧化锰、锂-亚硫酰氯'], ['标称电压：最高30V', '标称容量：最高68Ah', '工作温度：-60°C至+70°C'], [new segmentMarket(1, '国防', 'defense.png')])
            ]),
            new infoList(2, 'Li-SO2', [
                new ProDetail(1, 'Li-S02_LO-G.jpg', 'LO, G', 'LO/G 圆柱型锂原电池以锂-二氧化硫 (Li-SO2) 化学反应为基础，它具有非常大的螺旋电极面积，能够提供大功率和最强的电流脉冲能力。它的设计适用于需要连续获得 0.1-5A 电流的设备，并且提供高达 60A 的叠加脉冲。', ['在大多数使用周期内提供稳定的高工作电压', '无与伦比的脉冲能力', '能够在低至 -40℃ 的条件下提供优异的电力', '容量在 1A 以上', '优秀的耐钝化性能，电压延迟非常低', '低自放电特性，存储时间更长', '无论电池方向如何，都能够释放能量', '技术成熟，量产超过30年，拥有丰富的实践经验', '重量轻', '在严苛的军事设备领域拥有出色的安全记录'], ['标称电压：3.0V', '螺旋结构', '圆柱状：1/2AA 至 F', '最大脉冲能力达到60A', '容量范围：0.45Ah 至 16.5Ah', '工作温度：-40°C 至 +70°C', '不易燃电解液', '符合欧盟 RoHS 指令'], [new segmentMarket(1, '国防', 'defense.png'), new segmentMarket(2, '医疗用具', 'Medical_devices.png')])
            ]),
            new infoList(3, 'Li-SOCl2', [
                new ProDetail(1, 'Li-SOCl2_LSLSH.jpg', 'LS, LSH', 'LS 与 LSH 圆柱型锂原电池系列以锂-亚硫酰氯 (Li-SOCl2) 化学反应为基础，非常适用于各类温度条件下的高能量和高电压需求<br/>LS 系列电池的卷线筒结构能够尽可能多地加载活性材料，实现能量最大化。由于其自放电水平低，非常适用于长期应用（5至20年以上）的以 µA 级小电流为特点的设备，以及周期性的介于 5-150mA 脉冲之间的设备。<br>LSH 系列电池采用螺旋状结构，包括能够在石油天然气设备等的极高温条件下工作的特定型号电池。LSH 系列电池适用于脉冲高达 4A 的设备。', ['在大多数使用周期内提供稳定的高工作电压', '锂原电池中能量密度最高的电池', '最低的自放电率，存储时间和工作时间更长', '优秀的耐钝化性能，电压延迟非常低，能够提供非常强的脉冲能力', '在更长的使用寿命内具有优异的可靠性', '超过20年的使用寿命，采用最优质的零件与材料', '工作温度范围广泛，适用于各种环境条件', '量产已达40年，采用全自动工艺', '冗余生产线，优化供应链效率，减少工艺风险', '如今市场上标称容量最高的电池之一', '低磁场特征'], ['标称电压：3.6V', 'LS系列电池采用卷线筒结构', 'LSH系列电池采用螺旋结构', '圆柱状：1/2AA 至 D', '容量范围：1.2Ah 至 17.0Ah', '脉冲放电率最高达到 4A', '工作温度：-60°C 至 +150°C', '不易燃电解液', 'IEC60086-4、IEC60079-11和 UL1642 认证', '符合欧盟 RoHS 和 REACH 指令'], [new segmentMarket(1, '安全系统', 'security_systems.png'), new segmentMarket(2, '国防', 'defense.png'), new segmentMarket(3, '医疗用具', 'Medical_devices.png'), new segmentMarket(4, '云', 'cloud.png'), new segmentMarket(5, '计量器', 'cloud.png')])
            ])
        ]),
        new TypeList(3, '可充电锂电池', 'am-icon-gears', [
            new infoList(1, 'LCO-LiCoO2', [
                new ProDetail(1, 'LCO-LiCoO2_28v.jpg', '28V 航天级电池系统', '28V 航天级电池能够满足各类太空应用的功率和能源需求。它采用经验证的帅福得锂离子技术。作为一款小体积、免维护能源存储装置，它在上千次的循环过程中运行可靠，能效优异，是要求高功率密度和中等能量密度的太空应用的理想选择。', ['牢固的机械装配，能够承受发射器的极大冲击（1300G）和随机振动（40 Grms）', '不间断放电路径，适用于飞行终止应用', '单独的充电路径，提供过充检测/预防功能', '内置加热器，能够调节工作中电池的温度', '成熟的公司自有测试设备和能力，为验收和/或认证测试提供有力支持'], ['标称电压：28V', '容量： 3Ah', '最大充电电压：32.8V', '最大连续放电电流：30A'], [new segmentMarket(1, '航天飞机', 'space-shuttle.png')]),
                new ProDetail(2, 'LCO_LiCoO2_MP.jpg', 'MP, 小型 VL', '型棱柱状 MP 电池和小型圆柱状 VL 可充电电池以我们独特的锂离子技术为基础。它们能够提供高标称容量和长循环寿命，更值得称道的是，它们可以在广泛的温度范围内充放电，尤其是在低温环境中。<br>MP 和 VL 锂离子电池具有特定的冗余安全特性，即电子保护电路、充电状态和健康状态指示器、在充电器故障时使用的内置断路器、关机分离器和安全通风口，因而非常适合要求严苛的设备。', ['广泛的温度范围（无与伦比的低温性能，特定电池能够耐受 +125°C 高温）', '结构坚固，能够满足工业和国防设备的严苛环境要求', '高电流能力', '自动工作时间更长', '长循环寿命（600至2500次以上的循环），取决于环境条件', '根据我们独特的电化学技术，提供便捷的充电状态/健康状态指示器', '重量轻', '能够容易地集成至紧凑系统中', '出色的安全记录'], ['标称电压：3.6V-3.75V', '能量密度：高达385瓦时/升和180瓦时/千克', '容量范围：2.6 至 6.8Ah', '标准电池的工作温度：充电时 -20°C 至 +60°C，放电时 -50°C 至 +60°C。特定的高温电池可承受 +125°C 高温。', '一些 MP 电池符合防爆设备的 IEC60079-11 内在安全要求', '符合欧盟 RoHS 指令'], [new segmentMarket(1, '安全系统', 'security_systems.png'), new segmentMarket(2, '国防', 'defense.png'), new segmentMarket(3, '医疗用具', 'Medical_devices.png'), new segmentMarket(4, '云', 'cloud.png'), new segmentMarket(5, '计量器', 'cloud.png')])
            ]),
            new infoList(2, 'LTO-Li4Ti5O12', [
                new ProDetail(1, 'LCO-LiCoO2_28v.jpg', '28V 航天级电池系统', '28V 航天级电池能够满足各类太空应用的功率和能源需求。它采用经验证的帅福得锂离子技术。作为一款小体积、免维护能源存储装置，它在上千次的循环过程中运行可靠，能效优异，是要求高功率密度和中等能量密度的太空应用的理想选择。', ['牢固的机械装配，能够承受发射器的极大冲击（1300G）和随机振动（40 Grms）', '不间断放电路径，适用于飞行终止应用', '单独的充电路径，提供过充检测/预防功能', '内置加热器，能够调节工作中电池的温度', '成熟的公司自有测试设备和能力，为验收和/或认证测试提供有力支持'], ['标称电压：28V', '容量： 3Ah', '最大充电电压：32.8V', '最大连续放电电流：30A'], [new segmentMarket(1, '航天飞机', 'space-shuttle.png')]),
            ]),
            // new infoList(3, 'NCA-LiNiCoAlO2', [

            // ]),
            // new infoList(4, '>NMC-LiNiMnCoO2-NCM', [

            // ]),
            // new infoList(5, 'SLFP-LiFePO4-SLFP', [

            // ])
        ]),
        new TypeList(4, '银', 'am-icon-institution', [
            new infoList(1, 'Ag-Zn', []),
            new infoList(2, 'AgCl-Mg', []),
            new infoList(2, 'AgO-Al', [])
        ]),
        new TypeList(5, '镍', 'am-icon-bolt', [
            new infoList(1, 'Ni-H2', []),
            new infoList(2, 'Ni-MH', []),
            new infoList(3, "镍炭电容器", []),
            new infoList(4, "镍镉", [])
        ])
    ]);
    self.ProDetails = ko.observableArray(setItem(self.TypeList()[1].infos()[0].ProDetails()));
    self.infoClick = function(item, name) {
        self.count = item.ProDetails().length;
        self.currentName(name + " - " + item.title());
        console.log(item);
        self.ProDetails(setItem(item.ProDetails()));
    }
    self.count = self.TypeList()[0].infos().length;
    self.currentName = ko.observable(self.TypeList()[0].name());
    self.className = ko.observable(self.TypeList()[0].className());
}
ko.applyBindings(new ViewModel());