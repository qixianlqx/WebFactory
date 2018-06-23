var productLists = (function() {

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
            list.push(new ProDetail(item.id(), item.img(), item.name(), item.desc(), item.feature(), item.spec(), item.segmentMarket(), item.huangjing(), item.inputs(), item.outputs()));
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
    function ProDetail(id, img, name, desc, feature, spec, segmentMarket, huangjing, inputs, outputs) {
        var self = this;
        self.id = ko.observable(id);
        self.img = ko.observable(img);
        self.name = ko.observable(name);
        self.desc = ko.observable(desc);
        self.segmentMarket = ko.observableArray(segmentMarket || []);
        self.feature = ko.observableArray(feature || []);
        self.spec = ko.observableArray(spec || []);
        self.huangjing = ko.observableArray(huangjing || []);
        self.inputs = ko.observableArray(inputs || []);
        self.outputs = ko.observableArray(outputs || []);
    }

    var init = function() {

        var pros = [
            new TypeList(1, '直流屏', 'am-icon-pie-chart', [
                new infoList(1, '直流屏', [
                    new ProDetail(1, 'zlp_GZDW2.jpg', 'GZDW系列直流电源系统', '一、适用范围<br><br>GZDW系列直流电源系统主要由智能高频开关电源模块、中央监控单元、免维护蓄电池和馈电回路等构成，具有重量轻、体积小、效率高、无污染等诸多优点，是传统直流电源成套装置的理想换代产品。主要适用于中小型发电厂、水电站、各类变电站、开闭所和其它使用直流设备的领域，如石化、矿山、铁路、通讯、冶金、高层建筑等，作为高压开关分合闸、继电刨花、自动装置、信号装置等使用的操作电源及事故照明、控制用直流电源<br><br>二、型号命名规则<br><br><img src="images/productList2/zlp_nameConfig.gif"><br>如：GZDW—40AH/220V—M—GK表示额定电压为220V，蓄电池容量为40Ah，电池种类为铅酸蓄电池的高频开关电源一体柜系统。', ['两路交流输入，能自动实现切换，可靠性高，系统运行稳定', '采用开关电源技术，输出纹波大大减小，有效的延长了电池的使用寿命', '充电机与控制整流器采用相互独立的方式，故障时充电机与控制整流器可以相互替换', ' 采用高品质，高性能的中央监控单元，能可靠的进行数据采集和信号处理等', '高频开关电源采用N+1热备份，使得任意一个模块退出运行均不影响系统的正常运行，保证了整个系统 的可靠性,可方便地满足各种系统的要求', '当中央控制系统故障退出时，充电及整流模块能正常工作，确保供电系统能正常工作', '通过中央监控系统实现蓄电池均充/浮充的自动转换', '严格按照蓄电池充电曲线对蓄电池进行充电，避免过充和欠充现象，能有效延长电池的使用寿命', '可根据环境温度及时调整充电电压，使电池保持在最佳充电状态', '以特制的二极管整流模块替代传统硅链，确保降压单元的高可靠性', '人机界面全中文显示，界面友好，直观形象，操作简便', '人机界面具有进行参数设置、状态查询、开关机控制等功能', '开放式接口设计，具有强大的通讯功能，可通过微机通讯接口实现“遥信、遥测、遥控、遥调”功能，可根据用户需要传递相应的实时数据和告警信息', '可靠的防雷和电气绝缘措施，选配的绝缘监测装置能够实时监测系统绝缘情况，确保系统和人身安全', '系统设计采用IEC（国际电工委员会），UL等国际标准，可靠性与安全性有充分保证'], [], [new segmentMarket(1, '军工', 'defense.png'), new segmentMarket(2, '安全系统', 'security_systems.png'), new segmentMarket(3, '医疗用具', 'Medical_devices.png'), new segmentMarket(4, '云', 'cloud.png'), new segmentMarket(5, '量表', 'metering.png'), new segmentMarket(6, '海运', 'marine.png'), new segmentMarket(7, '轨道交通', 'rail.png'), new segmentMarket(8, '采矿水泥化学', 'mining_cement.png'), new segmentMarket(9, '发电厂', 'transmission-tower.png'), new segmentMarket(10, '电力', 'renewables_microgrids.png'), new segmentMarket(11, '离岸', 'off-grid.png'), new segmentMarket(12, '船舶', 'shipping.png')], ['安装地点：室内安装（也可装于箱变）', '环境温度：-15℃~ +45℃，最大日温差≤35℃', '相对温度：日平均湿度不大于90%，月平均湿度不大于85%', '海拔高度：安装地海拔高度不高于3000米', '污染等级：≤3级，环境中无导电微粒，易爆尘埃', '周围空气：无引起火灾，无腐蚀金属和破坏绝缘的气体，有良好的空气流动和散热条件', '安装场所：应无剧烈振动和冲击，地震烈度不超过8度，装置的垂直倾斜度不超过5%'], ['交流输入电压：380VAC ± 15%', '频率：50 Hz ± 10%', '功率因数：≥0.92', '效率：≥94%'], ['系统类别：220V系统 / 110V系统', '直流额定电压：220VDC / 110VDC', '输出电压范围：198～286VDC / 99～143VDC', '输出电流范围：10A～400A', '蓄电池的额定容量：10～3000Ah', '纹波系数：≤0.05%', '稳压精度：≤±0.5%', '稳流精度：≤±0.5%负载电流', '负载调整率：≤±0.5%', '电网调整率：≤±0.1%', '电压上升时间：3～8秒', '输出恒流范围：10%～100%额定电流', '温度系数（1/℃）：≤0.2‰', '均流特性：充电模块间电流不均衡度≤±3%', '噪声：≤45dB'])
                ])
            ]),
            new TypeList(2, '一次性锂电池', 'am-icon-won', [
                new infoList(1, 'Li-MnO2', [
                    new ProDetail(1, 'Li-MnO2-junyong.jpg', '军用一次性锂电池系统', '军用一次性锂电池能够应对战场和训练场中严苛的机械和电气环境。<br/><br/>将多个独立电池串联、并联或串并联在一起，置于软包装（热收缩塑料套）或硬包装（塑料或金属）中。可为特定设备提供定制版本和标准版本电池。一般的安全特点包括根据要求提供电气保险丝和热熔丝、过流保护器和二极管。这种电池还可提供充电状态指示器和SM总线通讯。', ['重量轻', '在大多数使用周期内提供稳定的输出电压', '能够在广泛的温度范围内提供优异性能', '低自放电率', '使用前可存储超过5年时间', '结构牢固的设计', '即使在各种温度下存储很长时间，依然具有出色的耐钝化特性', '在 -20°C 温度下具有无与伦比的性能', '一些电池型号配有充电状态指示器', '多种化学反应系列电池：锂-二氧化硫、锂-二氧化锰、锂-亚硫酰氯'], ['标称电压：最高30V', '标称容量：最高68Ah', '工作温度：-60°C至+70°C'], [new segmentMarket(1, '军工', 'defense.png')])
                ]),
                new infoList(2, 'Li-SO2', [
                    new ProDetail(1, 'Li-S02_LO-G.jpg', 'LO, G', 'LO/G 圆柱型锂原电池以锂-二氧化硫 (Li-SO2) 化学反应为基础，它具有非常大的螺旋电极面积，能够提供大功率和最强的电流脉冲能力。它的设计适用于需要连续获得 0.1-5A 电流的设备，并且提供高达 60A 的叠加脉冲。', ['在大多数使用周期内提供稳定的高工作电压', '无与伦比的脉冲能力', '能够在低至 -40℃ 的条件下提供优异的电力', '容量在 1A 以上', '优秀的耐钝化性能，电压延迟非常低', '低自放电特性，存储时间更长', '无论电池方向如何，都能够释放能量', '技术成熟，量产超过30年，拥有丰富的实践经验', '重量轻', '在严苛的军事设备领域拥有出色的安全记录'], ['标称电压：3.0V', '螺旋结构', '圆柱状：1/2AA 至 F', '最大脉冲能力达到60A', '容量范围：0.45Ah 至 16.5Ah', '工作温度：-40°C 至 +70°C', '不易燃电解液', '符合欧盟 RoHS 指令'], [new segmentMarket(1, '军工', 'defense.png'), new segmentMarket(2, '医疗用具', 'Medical_devices.png')])
                ]),
                new infoList(3, 'Li-SOCl2', [
                    new ProDetail(1, 'Li-SOCl2_LSLSH.jpg', 'LS, LSH', 'LS 与 LSH 圆柱型锂原电池系列以锂-亚硫酰氯 (Li-SOCl2) 化学反应为基础，非常适用于各类温度条件下的高能量和高电压需求<br/>LS 系列电池的卷线筒结构能够尽可能多地加载活性材料，实现能量最大化。由于其自放电水平低，非常适用于长期应用（5至20年以上）的以 µA 级小电流为特点的设备，以及周期性的介于 5-150mA 脉冲之间的设备。<br>LSH 系列电池采用螺旋状结构，包括能够在石油天然气设备等的极高温条件下工作的特定型号电池。LSH 系列电池适用于脉冲高达 4A 的设备。', ['在大多数使用周期内提供稳定的高工作电压', '锂原电池中能量密度最高的电池', '最低的自放电率，存储时间和工作时间更长', '优秀的耐钝化性能，电压延迟非常低，能够提供非常强的脉冲能力', '在更长的使用寿命内具有优异的可靠性', '超过20年的使用寿命，采用最优质的零件与材料', '工作温度范围广泛，适用于各种环境条件', '量产已达40年，采用全自动工艺', '冗余生产线，优化供应链效率，减少工艺风险', '如今市场上标称容量最高的电池之一', '低磁场特征'], ['标称电压：3.6V', 'LS系列电池采用卷线筒结构', 'LSH系列电池采用螺旋结构', '圆柱状：1/2AA 至 D', '容量范围：1.2Ah 至 17.0Ah', '脉冲放电率最高达到 4A', '工作温度：-60°C 至 +150°C', '不易燃电解液', 'IEC60086-4、IEC60079-11和 UL1642 认证', '符合欧盟 RoHS 和 REACH 指令'], [new segmentMarket(1, '安全系统', 'security_systems.png'), new segmentMarket(2, '军工', 'defense.png'), new segmentMarket(3, '医疗用具', 'Medical_devices.png'), new segmentMarket(4, '云', 'cloud.png'), new segmentMarket(5, '量表', 'metering.png')])
                ])
            ]),
            new TypeList(3, '可充电锂电池', 'am-icon-gears', [
                new infoList(1, 'LCO-LiCoO2', [
                    new ProDetail(1, 'LCO-LiCoO2_28v.jpg', '28V 航天级电池系统', '28V 航天级电池能够满足各类太空应用的功率和能源需求。它采用经验证的帅福得锂离子技术。作为一款小体积、免维护能源存储装置，它在上千次的循环过程中运行可靠，能效优异，是要求高功率密度和中等能量密度的太空应用的理想选择。', ['牢固的机械装配，能够承受发射器的极大冲击（1300G）和随机振动（40 Grms）', '不间断放电路径，适用于飞行终止应用', '单独的充电路径，提供过充检测/预防功能', '内置加热器，能够调节工作中电池的温度', '成熟的公司自有测试设备和能力，为验收和/或认证测试提供有力支持'], ['标称电压：28V', '容量： 3Ah', '最大充电电压：32.8V', '最大连续放电电流：30A'], [new segmentMarket(1, '航天飞机', 'space-shuttle.png')]),
                    new ProDetail(2, 'LCO_LiCoO2_MP.jpg', 'MP, 小型 VL', '型棱柱状 MP 电池和小型圆柱状 VL 可充电电池以我们独特的锂离子技术为基础。它们能够提供高标称容量和长循环寿命，更值得称道的是，它们可以在广泛的温度范围内充放电，尤其是在低温环境中。<br>MP 和 VL 锂离子电池具有特定的冗余安全特性，即电子保护电路、充电状态和健康状态指示器、在充电器故障时使用的内置断路器、关机分离器和安全通风口，因而非常适合要求严苛的设备。', ['广泛的温度范围（无与伦比的低温性能，特定电池能够耐受 +125°C 高温）', '结构坚固，能够满足工业和国防设备的严苛环境要求', '高电流能力', '自动工作时间更长', '长循环寿命（600至2500次以上的循环），取决于环境条件', '根据我们独特的电化学技术，提供便捷的充电状态/健康状态指示器', '重量轻', '能够容易地集成至紧凑系统中', '出色的安全记录'], ['标称电压：3.6V-3.75V', '能量密度：高达385瓦时/升和180瓦时/千克', '容量范围：2.6 至 6.8Ah', '标准电池的工作温度：充电时 -20°C 至 +60°C，放电时 -50°C 至 +60°C。特定的高温电池可承受 +125°C 高温。', '一些 MP 电池符合防爆设备的 IEC60079-11 内在安全要求', '符合欧盟 RoHS 指令'], [new segmentMarket(1, '安全系统', 'security_systems.png'), new segmentMarket(2, '军工', 'defense.png'), new segmentMarket(3, '医疗用具', 'Medical_devices.png'), new segmentMarket(4, '云', 'cloud.png'), new segmentMarket(5, '量表', 'metering.png')])
                ]),
                new infoList(2, 'LTO-Li4Ti5O12', [
                    new ProDetail(1, 'LCO-LiCoO2_28v.jpg', '28V 航天级电池系统', '28V 航天级电池能够满足各类太空应用的功率和能源需求。它采用经验证的帅福得锂离子技术。作为一款小体积、免维护能源存储装置，它在上千次的循环过程中运行可靠，能效优异，是要求高功率密度和中等能量密度的太空应用的理想选择。', ['牢固的机械装配，能够承受发射器的极大冲击（1300G）和随机振动（40 Grms）', '不间断放电路径，适用于飞行终止应用', '单独的充电路径，提供过充检测/预防功能', '内置加热器，能够调节工作中电池的温度', '成熟的公司自有测试设备和能力，为验收和/或认证测试提供有力支持'], ['标称电压：28V', '容量： 3Ah', '最大充电电压：32.8V', '最大连续放电电流：30A'], [new segmentMarket(1, '航天飞机', 'space-shuttle.png')]),
                ]),
                new infoList(3, 'NCA-LiNiCoAlO2', [
                    new ProDetail(1, 'NCA-LiNiCoAlO2_dagonglv.jpg', '大功率锂电池箱', '大功率锂电池箱（LBB）的基础是为美国军队 TOW 导弹的改进型目标捕获系统（ITAS）开发的 28V 锂电池箱，其参数为 28V、100安培/小时，由多个高能量锂离子电池按照 2p8s 配置组合而成。大功率锂电池箱的设计是作为一种便携式能量存储解决方案，提供备用电源和输出电源。它包括一个人机接口、嵌入式管理软件，以及多个电子防护和热熔丝等安全配置，以避免充电器故障，在危险操作情况下保护电池。', ['免维护', '重量轻', '充电快', '无需通风', '内置加热器', '联合国测试认证'], ['标称电压：28V', '标称容量：100Ah', '最大放电率：100A', '最大充电率：25A'], [new segmentMarket(1, '军工', 'defense.png')]),
                    new ProDetail(2, 'NCA-NCA-LiNiCoAlO2_250V.jpg', '250/500 kW 电池系统', '对于需要高脉冲功率的单向能量和其它设备而言，帅福得提供可扩展的紧凑型250至500千瓦电池系统。250千瓦电池系统能够组合成更大功率的500千瓦、750千瓦和更高等级的系统，每个系统均可单独输出250千瓦功率。对于通用原子公司和雷神公司等使用激光设备的客户而言，这种超大功率电池系统使用寿命长，运行安全可靠。', ['超大功率', '可灵活扩展至500千瓦甚至更高等级', '紧凑型设计', '生命周期成本低', '安全可靠', '使用寿命长'], ['标称电压（50% 充电状态）：335V', '充电限制：394V', '放电限制：260V', '电池能量：8千瓦时'], [new segmentMarket(1, '军工', 'defense.png')]),
                    new ProDetail(3, 'NCA-NCA-LiNiCoAlO2_28VLBB.jpg', '28 V LBB, ITAS', '28V 锂电池箱（LBB）是一个由高能量锂离子电池构成的能量存储系统，能够在极端温度下提供高密度能量，且生命周期成本低。该系统最初是为美国军队 TOW 导弹的改进型目标捕获系统（ITAS）开发的，用于替代传统技术，以改进能耗和总拥有成本。<br><br>该电池系统包括一个人机接口、嵌入式管理软件，以及多个电子防护和热熔丝等安全配置，以避免充电器故障，在危险操作情况下保护电池。', ['免维护', '重量轻', '充电快', '无需通风'], ['标称电压：28V', '标称容量：80Ah', '最大放电率：30A'], [new segmentMarket(1, '军工', 'defense.png')]),
                    new ProDetail(4, 'NCA-NCA-LiNiCoAlO2_28v_ups.jpg', '28V UPS 电源', '28V UPS 电源包括以 2p8s 方式组合的大功率模块，适用于国防和海军等工作温度要求高的应用。我们能够提供完整的定制能量存储系统，可以满足客户的特定需求。', ['获得 S9310-AQ-SAF-010 NAVSEA 锂离子电池安全批准', '可在+70°C 条件下工作2年', '大功率', '无需通风', '低生命周期成本', '安全可靠'], ['标称电压：28V', '+25°C条件下的标称容量：34Ah', '能量（C/3）：950瓦时/千克', '工作温度：-30°C 至 +70°C'], [new segmentMarket(1, '军工', 'defense.png')]),
                    new ProDetail(5, 'LCO-LiCoO2_28v.jpg', '28V 航天级电池系统', '28V 航天级电池能够满足各类太空应用的功率和能源需求。它采用经验证的帅福得锂离子技术。作为一款小体积、免维护能源存储装置，它在上千次的循环过程中运行可靠，能效优异，是要求高功率密度和中等能量密度的太空应用的理想选择。', ['牢固的机械装配，能够承受发射器的极大冲击（1300G）和随机振动（40 Grms）', '不间断放电路径，适用于飞行终止应用', '单独的充电路径，提供过充检测/预防功能', '内置加热器，能够调节工作中电池的温度', '成熟的公司自有测试设备和能力，为验收和/或认证测试提供有力支持'], ['标称电压：28V', '容量： 3Ah', '最大充电电压：32.8V', '最大连续放电电流：30A'], [new segmentMarket(1, '航天飞机', 'space-shuttle.png')]),
                    new ProDetail(6, 'LiNiCoAlO2_Evolion.jpg', 'Evolion® 经验证的适用于在网和离网设备的超紧凑型解决方案', '<i style="font-weight:bold;"v>Evolion® 经验证的适用于在网和离网设备的超紧凑型解决方案</i><br><br>如果你使用的电网不可靠，经常断电，那么你就需要备用电源解决方案，以确保为终端用户提供连续的电信服务，无论你的设备在室内还是室外，在网还是离网，处于炎热或严寒地区，位于身边还是偏远地区。', ['比传统电池轻4-10倍，能够与现有电信设备匹配，尤其是设备位于活动地板之上时', 'Evolion® 的高体积能量仅需传统的阀控式铅酸电池一半的占地面积', '零维护设计，具有智能远程监控功能，无需定期的现场查看', '能够在任何温度条件下工作'], ['紧凑的轻型锂离子电池技术', '提供两种容量：Evolion® 2.1千瓦时和Evolion® 3.9千瓦时', '最大充电电压：32.8V', '标称电压：48V', '可在-40°C至+75°C温度区间内工作', '长使用寿命：+20°C条件下使用20年/+40°C条件下使用10年', '长循环寿命：80%放电深度条件下循环4300次，50%放电深度条件下循环8200次', '符合质量和安全标准'], [new segmentMarket(1, '信号塔', 'TelecomTower.png')]),
                    new ProDetail(7, 'NCA-NCA-LiNiCoAlO2_HEMV.jpg', 'HEMV', '针对混合动力军用车辆和武器应用，开发了一系列大功率可充电锂离子电池。<br>5至8个模块的多种配置采用两种不同形式的锂离子技术—镍钴铝（NCA）和超级磷酸铁锂（SLFP）。其特点包括风冷和可选的液体冷却技术、集成电子管理系统和一个 Can 总线通讯接口。', ['比能超高', '功率超大', '单独的充电路径，提供过充检测/预防功能', '免维护', '重量轻', '生命周期成本低', '安全可靠'], ['标称电压：219V 至 307V', '标称容量：30Ah', '比能：66瓦时/千克', '工作温度：-30°C 至 +60°C'], [new segmentMarket(1, '军工', 'defense.png')]),
                    new ProDetail(8, 'NCA-NCA-LiNiCoAlO2_Intensium.jpg', 'Intensium® Max 兆瓦级能源存储系统', '为电网和可再生能源提供的兆瓦级锂离子集装箱式能源存储系统具有宝贵的灵活性。可再生能源具有间歇性发电和缓变率的固有特点，而集装箱式能源存储系统能够消除这些特点的障碍，成为中型至大型太阳能电网和风力发电方案的理想选择。Intensium® Max 也可用于中低压电网，提供峰值管理或电压支持等电网支持功能。<br><br>Intensium® Max 可随时安装，对高动态应用而言是一种可靠、高效、使用寿命长的能源存储系统。它能够在一个20英尺的集装箱内存储3兆瓦电力或1.2兆瓦时容量，为客户提供定制的能源存储方案，存储能量从1兆瓦至50兆瓦不等，循环时间介于数分钟至数小时之间。', ['灵活提供功率与能量', '在复杂应用中也具有很低的总拥有成本', '即使在偏远地方和难以触及的地方使用，也可以迅速安装，成本效益高', '结构紧凑，灵活性高，能够轻松集成至现场', '能够兼容现场控制系统和多个PCS品牌', '实时远程监控，将故障时间降到最低，优化系统运行'], ['经验证的长使用寿命的锂离子电池', '模块化结构，高能量，中高功率配置', '灵活性高，每个集装箱配有1或2个电源输出，以菊花链结构组合，采用3个锂离子电池连接的形式', '交货前集装箱在帅福得工厂经过充分测试', '与帅福得专有的电池管理系统充分集成', '可用性好，系统低维护，远程监控和诊断功能', '运行可靠性高，使用寿命长，能效优异'], [new segmentMarket(1, '采矿水泥化学', 'mining_cement.png'), new segmentMarket(1, '发电厂', 'transmission-tower.png'), new segmentMarket(1, '电力', 'renewables_microgrids.png'), new segmentMarket(1, '离岸', 'off-grid.png')]),
                    new ProDetail(9, 'NCA-NCA-LiNiCoAlO2_IntensiumMini.jpg', 'Intensium® Mini 室外能源存储系统', 'Intensium® Mini是一个紧凑型结实稳固的室外能源存储系统，提供各类功率和能量组合，适用于可再生能源集成、工业和商业设备、公共事业和微电网。该系统专门针对100千瓦至1兆瓦的中等规模能源存储项目设计，能够降低峰值功率，具有需求响应、电压控制、容量支持、频率调整、空转备用功能或上述多种功能的组合。<br><br>Intensium® Mini是由56个Synerion®模块充分集成的能源存储系统，能够在成千上万次的循环过程中提供非常高的运行可靠性，以及出色的能效。由于采用了模块化设计，它能够提供各种范围的容量和不同的功率能量比，适用于从数分钟至数小时不等的循环。Intensium® Mini适用于容量介于80到480千瓦时之间的应用，以及240到1720千瓦之间的功率。', ['灵活提供功率与能量', '即使在困难区域和偏远地方，仍可轻松、便捷地安装', '优化系统与大多数功率转换系统集成，当公共电网断电时，可选择内部供电（电池管理系统）和外部供电（PCS）', '将辅助设备用电量降到最低', '低维护', '可通过用户友好型诊断工具有效解决问题'], ['经实践验证的长寿命锂离子电池技术', '模块化结构，高能量，中高功率配置', '在交货前系统已经过充分测试，随时可安装', '镀锌钢板和铝材外壳，结构结实，符合室外评级（IP55）标准', '集成温度控制、防火、辅助配电和备用功能', 'PLC接口提供高级控制功能，可记录运行数据和关键系统活动，以满足诊断需求', '由于其电化学特性、有效的冷却功能和优化的系统设计，能效十分优异'], [new segmentMarket(1, '采矿水泥化学', 'mining_cement.png'), new segmentMarket(1, '发电厂', 'transmission-tower.png'), new segmentMarket(1, '电力', 'renewables_microgrids.png'), new segmentMarket(1, '离岸', 'off-grid.png')]),
                    new ProDetail(10, 'NCA-NCA-LiNiCoAlO2_IntensiuSmart.jpg', 'Intensium® Smart 机架式能源存储系统', 'Intensium® Smart 机架式能源存储系统适用于工业和商业建筑、社区和微电网，可有效管理功率和能量，尤其适用于智能建筑和电网，能够提供存储自发电能源（太阳能、热电联供）、降低需量电费和需求响应程序等多种功能。<br><br>这种机架式能源存储系统能够存储700V/50千瓦时的能源，集成了帅福得Synerion® 锂离子模块和电池管理系统。根据现场条件、安全限制和性能要求，帅福得还能够提供镍锰钴/镍钴铝材料解决方案，或磷酸铁（磷酸铁锂）技术。<br><br>Intensium® Smart 是一个充分集成化的存储系统，可以在成千上万次的循环过程中提供非常高的运行可靠性，优异的能效甚至能够满足兆瓦级应用需求。', ['灵活提供功率与能量', '优化系统与主要功率转换系统集成', '配有帅福得专有电池管理系统，能够实时管理能量', '配有高效的用户友好型诊断工具，将故障时间降到最低'], ['在整个使用寿命内，每千瓦时的总拥有成本低', '经实践验证的长使用寿命和高性能的锂离子电池技术镍锰钴/镍钴铝材料或磷酸铁锂', '模块化结构，高能量，中高功率配置', '可安装在多个建筑内的模块化机架式系统，可进行多种配置', '采用工业化设计，安全性好，可靠性高', '适用于高达日常能量吞吐量400%的动态循环'], [new segmentMarket(1, '电力', 'renewables_microgrids.png'), new segmentMarket(1, '离岸', 'off-grid.png')]),
                ]),
                new infoList(4, 'NMC-LiNiMnCoO2-NCM', [
                    new ProDetail(1, 'LCO-LiCoO2_28v.jpg', '28V 航天级电池系统', '28V 航天级电池能够满足各类太空应用的功率和能源需求。它采用经验证的帅福得锂离子技术。作为一款小体积、免维护能源存储装置，它在上千次的循环过程中运行可靠，能效优异，是要求高功率密度和中等能量密度的太空应用的理想选择。', ['牢固的机械装配，能够承受发射器的极大冲击（1300G）和随机振动（40 Grms）', '不间断放电路径，适用于飞行终止应用', '单独的充电路径，提供过充检测/预防功能', '内置加热器，能够调节工作中电池的温度', '成熟的公司自有测试设备和能力，为验收和/或认证测试提供有力支持'], ['标称电压：28V', '容量： 3Ah', '最大充电电压：32.8V', '最大连续放电电流：30A'], [new segmentMarket(1, '航天飞机', 'space-shuttle.png')]),
                    new ProDetail(2, 'LCO_LiCoO2_MP.jpg', 'MP, 小型 VL', '型棱柱状 MP 电池和小型圆柱状 VL 可充电电池以我们独特的锂离子技术为基础。它们能够提供高标称容量和长循环寿命，更值得称道的是，它们可以在广泛的温度范围内充放电，尤其是在低温环境中。<br>MP 和 VL 锂离子电池具有特定的冗余安全特性，即电子保护电路、充电状态和健康状态指示器、在充电器故障时使用的内置断路器、关机分离器和安全通风口，因而非常适合要求严苛的设备。', ['广泛的温度范围（无与伦比的低温性能，特定电池能够耐受 +125°C 高温）', '结构坚固，能够满足工业和国防设备的严苛环境要求', '高电流能力', '自动工作时间更长', '长循环寿命（600至2500次以上的循环），取决于环境条件', '根据我们独特的电化学技术，提供便捷的充电状态/健康状态指示器', '重量轻', '能够容易地集成至紧凑系统中', '出色的安全记录'], ['标称电压：3.6V-3.75V', '能量密度：高达385瓦时/升和180瓦时/千克', '容量范围：2.6 至 6.8Ah', '标准电池的工作温度：充电时 -20°C 至 +60°C，放电时 -50°C 至 +60°C。特定的高温电池可承受 +125°C 高温。', '一些 MP 电池符合防爆设备的 IEC60079-11 内在安全要求', '符合欧盟 RoHS 指令'], [new segmentMarket(1, '安全系统', 'security_systems.png'), new segmentMarket(2, '军工', 'defense.png'), new segmentMarket(3, '医疗用具', 'Medical_devices.png'), new segmentMarket(4, '云', 'cloud.png'), new segmentMarket(5, '量表', 'metering.png')])
                ]),
                new infoList(5, 'SLFP-LiFePO4-SLFP', [
                    new ProDetail(1, 'LCO-LiCoO2_28v.jpg', '28V 航天级电池系统', '28V 航天级电池能够满足各类太空应用的功率和能源需求。它采用经验证的帅福得锂离子技术。作为一款小体积、免维护能源存储装置，它在上千次的循环过程中运行可靠，能效优异，是要求高功率密度和中等能量密度的太空应用的理想选择。', ['牢固的机械装配，能够承受发射器的极大冲击（1300G）和随机振动（40 Grms）', '不间断放电路径，适用于飞行终止应用', '单独的充电路径，提供过充检测/预防功能', '内置加热器，能够调节工作中电池的温度', '成熟的公司自有测试设备和能力，为验收和/或认证测试提供有力支持'], ['标称电压：28V', '容量： 3Ah', '最大充电电压：32.8V', '最大连续放电电流：30A'], [new segmentMarket(1, '航天飞机', 'space-shuttle.png')]),
                    new ProDetail(2, 'LCO_LiCoO2_MP.jpg', 'MP, 小型 VL', '型棱柱状 MP 电池和小型圆柱状 VL 可充电电池以我们独特的锂离子技术为基础。它们能够提供高标称容量和长循环寿命，更值得称道的是，它们可以在广泛的温度范围内充放电，尤其是在低温环境中。<br>MP 和 VL 锂离子电池具有特定的冗余安全特性，即电子保护电路、充电状态和健康状态指示器、在充电器故障时使用的内置断路器、关机分离器和安全通风口，因而非常适合要求严苛的设备。', ['广泛的温度范围（无与伦比的低温性能，特定电池能够耐受 +125°C 高温）', '结构坚固，能够满足工业和国防设备的严苛环境要求', '高电流能力', '自动工作时间更长', '长循环寿命（600至2500次以上的循环），取决于环境条件', '根据我们独特的电化学技术，提供便捷的充电状态/健康状态指示器', '重量轻', '能够容易地集成至紧凑系统中', '出色的安全记录'], ['标称电压：3.6V-3.75V', '能量密度：高达385瓦时/升和180瓦时/千克', '容量范围：2.6 至 6.8Ah', '标准电池的工作温度：充电时 -20°C 至 +60°C，放电时 -50°C 至 +60°C。特定的高温电池可承受 +125°C 高温。', '一些 MP 电池符合防爆设备的 IEC60079-11 内在安全要求', '符合欧盟 RoHS 指令'], [new segmentMarket(1, '安全系统', 'security_systems.png'), new segmentMarket(2, '军工', 'defense.png'), new segmentMarket(3, '医疗用具', 'Medical_devices.png'), new segmentMarket(4, '云', 'cloud.png'), new segmentMarket(5, '量表', 'metering.png')]),
                    new ProDetail(3, 'NCA-NCA-LiNiCoAlO2_HEMV.jpg', 'HEMV', '针对混合动力军用车辆和武器应用，开发了一系列大功率可充电锂离子电池。<br>5至8个模块的多种配置采用两种不同形式的锂离子技术—镍钴铝（NCA）和超级磷酸铁锂（SLFP）。其特点包括风冷和可选的液体冷却技术、集成电子管理系统和一个 Can 总线通讯接口。', ['比能超高', '功率超大', '单独的充电路径，提供过充检测/预防功能', '免维护', '重量轻', '生命周期成本低', '安全可靠'], ['标称电压：219V 至 307V', '标称容量：30Ah', '比能：66瓦时/千克', '工作温度：-30°C 至 +60°C'], [new segmentMarket(1, '军工', 'defense.png')]),
                    new ProDetail(4, 'LCO_LiCoO2_Flex.jpg', "Flex'ion", 'Flex’ion 电池系统提供各种能量和功率组合，从1.7千瓦时到3兆瓦时，从10千瓦到5兆瓦。Flex’ion 电池的设计是专门为了满足数据中心、电信、石油天然气和公共事业市场关键任务设施中的直流/交流不间断电源、辅助备用电源和开关装置的需求。<br><br>采用经验证的帅福得超级磷酸铁锂专有技术，电池性能优异，安全性高，运行可靠，可用性好。', ['功率、运行电压和备用时间均可升级', '大功率—实现高度动态充电/放电', '相对于阀控式铅酸电池设计的主要优点：<br><ul style="list-style-type: decimal"><li>紧凑性3倍以上</li><li>重量轻6倍</li><li>循环寿命10倍以上</li><li>免维护*电池</li><li>20年使用寿命</li></ul>'], ['<em style="font-weight:bold;">大功率范围（46 P Fe）</em>', '优化备用时间，从1秒至15分钟不等', '放电功率容量：11C', '连续放电电流：300A', '峰值放电电流：450A', '充电时间：1C（传统充电器），2C（智能充电器）', '电压窗口：87V 至 958V', '容量范围：1.3千瓦时至3兆瓦时', '可在 -20°C 至 +60°C 温度区间内工作', '97% 的循环* 效率，降低能耗', '<em style="font-weight:bold;">中等功率（23 M Fe，46 M Fe）</em>', '备用时间＞5分钟，优化后＞8分钟', '放电功率容量：3.7C', '连续放电电流：46 M Fe为150A，23 M Fe为250A', '峰值放电电流：300A', '充电时间：0.5C（传统充电器），1C（智能充电器）', '电压窗口：87V 至 958V', '容量范围：1.8千瓦时至3兆瓦时', '可在 -20°C 至 +60°C 温度区间内工作', '97% 的循环* 效率，降低能耗', '循环：充电/放电'], [new segmentMarket(1, '数据中心', 'data_centre.png'), new segmentMarket(1, '采矿水泥化学', 'mining_cement.png'), new segmentMarket(3, '医院大楼', 'hospital_buildings.png'), new segmentMarket(1, '信号塔', 'TelecomTower.png'), new segmentMarket(1, '发电厂', 'transmission-tower.png')]),
                    new ProDetail(5, 'LCO_LiCoO2_Drive.jpg', 'Ion’Drive® Motive 24 V 电池系统', '适用于高效的非路上工业设备 <br><br>数十年来，电动车技术一直作为无人搬运车、叉车和仓库卡车的驱动力。如今，帅福得的 Ion’Drive® Motive 24V 系列电池为上述车辆以及采矿车和农场卡车等工业混合动力车辆提供了高性能。我们的技术还可用于机场和海港的电动地面保障设备，从而降低二氧化碳排放和燃料消耗，减少噪音。我们的锂离子电池技术能够提高电动车的可用性和生产力，有助于控制成本。我们还能够减少故障时间，降低相关成本，提供更清洁、更安全的工作场所。', ['锂离子电池技术确保最佳的性能与可靠性', '快充功能，使用寿命更长，维护需求低，改善了整体运行性能', '改善日常运行，降低总拥有成本', '模块化结构允许进行车辆开发与集成'], ['能量密度更高，重量更轻，使用寿命更长', '高效/深度快充功能', '结构牢固，符合工业车辆标准（IP等级、冲击和振动、电磁兼容性）', '内置的电池监控与信息功能（充电状态和健康状态）', '电池能够将相关诊断信息发送给主机应用'], [new segmentMarket(1, '车轮安全', 'wheel_saft.png')]),
                    new ProDetail(6, 'LCO_LiCoO2_Seanergy.jpg', 'Seanergy 模块', ' Seanergy® 模块是本地能源管理的理想选择，尤其适用于混合动力推进、光伏发电和其它可再生能源发电设备。它采用经验证的帅福得超级磷酸铁锂技术，是一款紧凑型、免维护的能源存储设备，在上千次的循环过程中能够保持高可靠性和优秀能耗。由于采用模块化设计，它能够匹配不同等级的能量与电压，锂离子 3U 模块始终配有电池管理系统（BMS 或 BMM）。', ['集成了锂离子电池、模块监督和电池平衡的紧凑型模块', '高级工业设计，提供最佳的可靠性和牢固性', '20年设计寿命，日常能量吞吐量大', '所有可用能量存储系统中能效最高的电池系统', '充电状态和健康状态指示器（通过BMM）', '2级冗余安全', '载荷均衡功能，保持高燃料效率，减少发电机组数量', '岸边备用电源', '设计灵活（提高了拓展性和模块化水平）'], ['标称电压：23.1V 和 46.2V', '标称容量：82Ah', '+20°C 条件下使用寿命：20年', '工作温度：-25°C 至 +55°C'], [new segmentMarket(1, '海运', 'marine.png')]),
                    new ProDetail(7, 'LCO_LiCoO2_Xcelion.jpg', 'Xcelion 6T®', ' Xcelion 6T® 电池是一个 24V 可充电锂离子电池系统，设计是为了插入式替代军用地面车辆的传统铅酸 6T 电池。它能够提供相当于2个铅酸电池的功率，而重量和体积仅是原先的25% 和50%。<br><br>Xcelion 6T® 电池采用帅福得独有的Super-Phosphate® 磷酸铁锂技术，与传统技术相比，具有循环寿命和使用寿命更长、能量密度更高和实时诊断等优点，在提高可靠性的同时降低了总拥有成本。', ['唯一能够满足低温性能要求的锂离子 6T 产品', '与铅酸电池相比，明显降低了生命周期成本和重量', '插入式替代现有汽车电池—无需改造', '立即可用的商业化解决方案', '内置式自平衡功能', '各种情况下可快速充电', '不安全时自动关机', '内置式电池管理系统', '采用 J1939 CAN 总线协议进行通讯', '灵活的系统结构，能够满足不同设备需求'], ['标称电压：26.4V', '标称容量：60Ah', '能量：1.6千瓦时', '工作温度：-40°C 至 +60°C'], [new segmentMarket(2, '军工', 'defense.png'), new segmentMarket(3, '轨道交通', 'rail.png')]),
                ])
            ]),
            // new TypeList(4, '银', 'am-icon-institution', [
            //     new infoList(1, 'Ag-Zn', []),
            //     new infoList(2, 'AgCl-Mg', []),
            //     new infoList(2, 'AgO-Al', [])
            // ]),
            new TypeList(5, '镍', 'am-icon-bolt', [
                // new infoList(1, 'Ni-H2', []),
                // new infoList(2, 'Ni-MH', []),
                // new infoList(3, "镍炭电容器", []),
                new infoList(4, "镍镉", [
                    new ProDetail(1, 'gele_Batt.jpg', 'C.O.M.M. Batt 电池监控系统', '数字化轨道：铁路电池加入物联网，从而进行预防性维护<br><br>我们的C.O.M.M. Batt 系统可以远程实时监控列车上的镍基电池，能够在必要情况下进行预防性维护，延长电池使用寿命，降低成本。C.O.M.M.电池使客户可以进行预防性维护，而非故障维修。<br><br>C.O.M.M. Batt 系统能够收集电池的实时运行数据，利用高级模块算法进行分析，准确判断电池健康程度，使管理、诊断、维护和服务变得更加高效。', ['更高效的维护计划', '降低维护成本', '提高车辆可用性，优化车辆管理', '减少停机时间和相关收入损失', '容易安装和使用'], ['充电状态符合职责描述', '延长加水间隔时间', '延长调节间隔时间', '存储历史数据', '报警功能'], [new segmentMarket(1, '轨道交通', 'rail.png')]),
                    new ProDetail(2, 'gele_MRX.jpg', 'MRX 提供高能量和高性能', 'MRX电池是一种轻型车载紧凑电池，适应能力强，提供可靠的、始终可用的、高能量、大功率电源，能够确保：乘客安全（车上信号、安全照明、门控和通讯网络）；乘客舒适性（通风、空调、照明、Wi-Fi）；自动防故障列车启动（受电弓升起、计算、电子设备）。<br><br>高能量和大功率性能使MRX电池成为城市、地区和城市间各类现代电动火车的理想选择，用于满足火车持续的日常使用需求，提供车载备用电源。', ['以最佳方式利用有限空间，显著提高载客能力', '经验证的镍镉电池可靠性与烧结正极板及塑料粘合负极板技术结合，可作为各种严苛条件下的可靠备用电源', '便于维护，集成了注水系统'], ['最大程度实现了效率和可靠性，总拥有成本低', '维护需求低，每两年加一次水', '轻型紧凑块状电池，具有明显的体积和容量优势（比标准镍镉电池轻30%）', '不会存在铅酸电池可能出现的“突然失效”问题', '能够承受-50°C至+50°C的极端温度', '容量从70 Ah至520 Ah不等'], [new segmentMarket(1, '轨道交通', 'rail.png')]),
                    new ProDetail(3, 'gele_MSX.jpg', 'MSX 可充电镍镉电池', ' 为铁路备用电源和启动发动机的大功率、高循环性能的电池<br><br>帅福得车载解决方案提供可靠的电源、重量轻且体积小的车载组件，维护要求低，提高了电池能效，从而帮助火车制造商和运营商更高效地运营。MSX系列电池具有大功率和高能量，既可作为备用电源，也可利用其大功率特性启动铁路机车和动车组的柴油发动机。这些镍基电池非常适用于当代的电动火车，比如有轨电车、电车、电力动车组和高铁，包括对安全要求非常高的电磁刹车应用。', ['维护要求低，使用寿命长', '优化了车载电池系统的体积，节省空间，与传统电池相比，重量减少30%，体积减小40%', '单一MSX电池既可作为备用电池，也可启动发动机，因此只需一个MSX系统便可替代两个车载系统'], ['经验证的镍镉电池烧结正极板及塑料粘合负极板技术，使用寿命超过15年', '大功率和高循环性能', '能够在-30°C至+50°C的各种温度下工作', '容量从70 Ah至260 Ah不等'], [new segmentMarket(1, '轨道交通', 'rail.png')]),
                    new ProDetail(4, 'gele_SMRX.jpg', 'SMRX-F3 经优化后，既可作为备用电源，也可启动柴油发动机', 'SMRX-F3 电池系统能够为乘客安全和舒适性（照明、门控、通风、通讯和Wi-Fi系统）以及自动防故障列车启动（受电弓升起、计算机和电子系统）等关键功能提供可靠的高能量备用电源。<br><br>我们的电池还能够满足原始设备制造商和铁路运营商的特定需求，能够立即启动铁路机车和动车组的柴油发动机。SMRX-F3 电池位于透明的聚砜防火容器中，维护简单。', ['紧凑型电池，能够可靠地启动柴油发动机，也可作为常规高能量电器的可靠备用电源', '可在一天内频繁启停，满足日益增长的低能耗、低噪音和低排放需求', '比其它镍镉电池轻30%，体积更紧凑，提高列车载客能力', '由于生命周期成本和维护需求非常低，能够带来高投资回报'], ['基于帅福得镍基电池技术，可靠性高，使用寿命长', '经验证的镍镉电池烧结/塑料粘结电极技术，使用寿命超过15年', '能够在-50°C 至+70°C 各种极端温度下工作', '容量从160 Ah 至360 Ah不等', '在-20°C 条件下，能够在最长1分钟的时间内进行高电流放电，最高达到容量的8倍，可瞬间启动柴油发动机', '放电倍率最高是电池容量的5倍，持续3分钟，可用于峰值备用电源', '电池安装在配有把手的不锈钢箱中'], [new segmentMarket(1, '轨道交通', 'rail.png')]),
                    new ProDetail(5, 'gele_SPH.jpg', 'SPH', '确保你的启动设备可以启动<br><br>启动应急柴油发电机或打开暖气、泵或其它设备要求使用能够在任何温度下工作的可靠电池。SPH 镍镉电池能够瞬间恢复电压，是离岸、陆上、工业生产线和医院等关键建筑中启动设备的理想选择。', ['不间断电源、发动机启动和许多其它高倍率放电应用的完美选择', '专为需要在短时间获得相对高电流的应用而设计', '提供非常高的电流，最高达到电池标称容量的20倍', '采用经过测试与验证的镍镉电池烧结/塑料粘结极板技术', '安装维护成本低，最长10年内无需加水', '高功率密度，充电快，窄电压窗口', '极长的使用寿命', '一般放电时间从1秒至30分钟不等'], ['容量范围：11 Ah 至 320 Ah（C5 A倍率）', '能够在 -20°C 至 +50°C 的极端温度下工作，能够在短时间内承受 -50°C 至 +70°C 的温度', '使用寿命超过20年', '抗电气损伤能力强', '低维护', '电压窗口小', '电池容量较小，在有限的电压窗口内提供大功率'], [new segmentMarket(1, '数据中心', 'data_centre.png'), new segmentMarket(1, '采矿水泥化学', 'mining_cement.png'), new segmentMarket(3, '医院大楼', 'hospital_buildings.png'), new segmentMarket(4, '信号塔', 'TelecomTower.png'), new segmentMarket(5, '发电厂', 'transmission-tower.png')]),
                    new ProDetail(6, 'gele_SPL.jpg', 'SPL+', '完全可靠的轨道信号系统电池<br><br>帅福得 SPL+ 镍镉电池的设计能够保证信号和铁路系统通讯的完全可靠。这些镍镉电池提供了超低维护解决方案，能够在很长的放电时间内，为轨道信号、闪光灯、开关、通讯和其它设备提供电源。', ['适用于铁路系统的超低维护电池', '最少的维护', '良好的循环能力', '适用于所有标准的铁路电压和所有轨道功率要求：<ul style="list-style-type: decimal"><li>备用直流电源</li><li>单一的信号桅杆</li><li>大控制点</li><li>为多轨道高速交叉道提供不间断电源</li></ul>'], ['容量范围：80 Ah 至510 Ah（C5倍率）', '可在 +40°C 至 -30°C 室温环境下工作，能够承受 +55°C 至 -40°C 的极端温度', '超过20年的长使用寿命', '电池结构基于帅福得经验证的袋式极板技术', '电池容器采用聚丙烯材料，可从外部看到电解液液位', '含有电解液的电池重量不超过23千克（55.5磅）的标准重量限制 -- 配有阻燃通风管', '可为每个电池提供专门的电池箱 -- 多种机架方案选择', '电池可在注满电解液的情况下存储并充电，存储时间长达两年'], [new segmentMarket(1, '轨道交通', 'rail.png')]),
                    new ProDetail(7, 'gele_SRM.jpg', 'SRM+ 确保高能量铁路备用电源的长期可靠性', 'SRM+电池是经过实践验证的最新一代电池，使用寿命超过20年，使用里程超过上百万公里。作为一款高能量备用电池，它的性能等级达到M级，能够满足乘客安全和舒适性（照明、门控、通风和通讯等）和自动防故障电子系统启动等要求，是完全可靠的电池。<br><br>镍基SRM+电池是一个紧凑型高性价比解决方案，非常适用于各类市内、地区和城市间轨道交通。', ['在电池的整个生命周期内降低运营成本', '单体电池设计，在配置电池系统时具有很高的灵活性', '在更广泛的温度区间具有优异的充电能力', '高性能，可靠性好，使用寿命超过15年，电池可完全回收利用，安装与一个模块电池相同'], ['容量介于40至360 Ah之间', '可在-20°C至+50°C的广泛温度区间内工作', '经检验能够抵御冲击和振动', '快速充电, 5小时可充满90%电量，能够快速恢复使用', '耗水量更低，延长了维护间隔时间'], [new segmentMarket(1, '轨道交通', 'rail.png')]),
                    new ProDetail(8, 'gele_SRM-F3.jpg', 'SRM-F3 长时间提供可靠性能', 'SRM-F3 电池系统能够为各类客运铁路车辆的电气系统提供可靠的高能量备用电源，确保乘客安全和舒适性（照明、门控、通风、通讯和Wi-Fi系统等）和自动防故障列车启动（受电弓升起、计算机和电子系统）。<br><br>SRM-F3 电池是原始设备制造商和铁路运营商的理想选择，将帅福得镍镉电池技术的可靠性和长寿命与经验证的烧结/塑料粘结电极结构的性能结合。SRM-F3 电池超轻、超紧凑，安装在透明的聚砜防火容器中。', ['出色的充电效率，充电速度更快，维护需求更低', '相比同等容量电池，重量减轻至少20%', '性价比高，使用寿命长（超过15年），维护简单，非常可靠', '由于电池在低压下具有优异的充电能力，因而将维护降低到最小程度'], ['容量范围：80 至 250 Ah', '可在 -30°C 至 +50°C 的广泛温度区间内工作', '结实紧凑，重量轻，使用寿命长，非常可靠', '安装在透明的聚砜防火容器中', '正常条件下，每两年仅需加一次水'], [new segmentMarket(1, '轨道交通', 'rail.png')]),
                    new ProDetail(9, 'gele_SRX.jpg', 'SRX 为铁路应用提供大功率性能', '从寒冷的北极到酷热的沙漠地带，柴油机车、内燃动车组和电动机车在全世界一些最严苛的环境中使用。<br><br>帅福得SRX镍镉电池能够为启动发动机提供有保障的电力，甚至是在极寒温度下用于柴油机车、内燃动车组和电动机车的紧急刹车、侧弯和升起受电弓。它们适用于需要高电流放电的场合，能够在最长1分钟的时间内释放电池容量20倍的短时间高电流，用于瞬间启动柴油发动机。SRX电池还可作为备用电源。', ['即使在极寒温度下，也能确保启动发动机所需的电力', '灵活的单体电池设计，可降低整体成本，结构稳固，配有大量电解液储备和高级金属板，使用寿命长达15年'], ['可在-20°C至+50°C温度区间内工作', '容量介于22 Ah至 220 Ah（塑料）之间和73 Ah至375 Ah（钢）之间', '维护需求低：每两年仅需加一次水', '可选的注水口能够迅速、准确地为电池加水，将维护需求降到最低'], [new segmentMarket(1, '轨道交通', 'rail.png')]),
                    new ProDetail(10, 'gele_Sunica.jpg', 'Sunica.plus', '即使在具有挑战性的环境中，也随时可用、性能可靠<br><br>对依赖于太阳能面板、风力涡轮机和柴油发电机等设备发电的远程设备而言，Sunica.plus 电池是一个完美选择。这些镍镉电池能够在最严苛的环境下工作。', ['基于设计的耐用性<ul style="list-style-type: decimal"><li>良好的充电能力，在浮充条件下能够高效工作</li><li>良好的循环能力，能够承受每日和每季度以不同放电深度和充电程度进行循环</li></ul>'], ['容量范围：50 Ah 至1830 Ah（C120 A倍率）', '能够在 -20°C 至 +50°C 的极端温度下工作，能够在短时间内承受 -50°C 至 +70°C 的温度', '长使用寿命：超过20年', '可选择自动一体式注水系统', '充电效率：可在任何充电状态下充电', '循环寿命：每天15% 放电深度的情况下, 可循环使用1万次', '低维护'], [new segmentMarket(1, '信号塔', 'TelecomTower.png'), new segmentMarket(2, '交通信号', 'transportation_signal.png'), new segmentMarket(3, '离岸', 'off-grid.png')]),
                    new ProDetail(11, 'gele_Tel.jpg', 'Tel.X 适用于电信网络', '帅福得Tel.X 系列电池可作为无线和有线网络备用电源，尤其适用于热带地区的在网应用，以及作为访问节点、收发基站、小型电池和其它设备的电信备用电源。<br><br>Tel.X 电池能够兼容现有的以及任何新的电信设备，提供各种容量版本，当空间有限且有重量限制时，可完美替代阀控式铅酸电池。Tel.X 电池无需维护，易于安装，是一款高能量密度的紧凑型电池，比传统铅酸电池轻30%。<br><br>帅福得可通过标准机架形式提供Tel.X 解决方案，提供48V 或24V 电压，用户也可选择适用于4级抗震等级地区的机架系统。', ['安装简便，可直接替换阀控式铅酸电池', '优异的能量密度，最高100瓦时/升', '使用寿命超长，性能可靠，可减少运行和维护需求'], ['经验证的帅福得镍镉电池技术结构稳固，不存在突然失效的问题', '可在-20°C 至+50°C 温度区间内工作，能够在短时间内承受-50°C 至+70°C 温度', 'C8电池柜的标称容量介于75至172 Ah 之间', '简单的模块化设计，易于安装，提供19” 和23” 机架', '简单的模块化设计，易于安装，提供19” 和23” 机架'], [new segmentMarket(1, '信号塔', 'TelecomTower.png')]),
                ])
            ])
        ];
        return pros;;
    }

    return { Data: init, setItem: setItem };

})();