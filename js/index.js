function ViewModel() {
    var self = this;
    self.ProDetails = ko.observableArray(getProctions());
    self.news = ko.observableArray(getNews());
}
var vm = new ViewModel();
ko.applyBindings(vm);

//初始化产品数据
function getProctions() {
    var data = productLists.Data('../');
    var prolist = [];
    var count = 0;
    $.each(data, function(index, obj) {
        $.each(obj.ProDetails(), function(j, item) {
            if (j > 2) return false;
            if (prolist.length < 8) {
                if (item.img().length > 0) {
                    count = Enumerable.from(prolist).count(function(itemInfo) { return itemInfo ? itemInfo.proinfo.name() == item.name() : true; });
                    if (prolist.length > 0 && count == 0) {
                        prolist.push({ proinfo: item, typeid: obj.id() });
                    } else if (prolist.length == 0) {
                        prolist.push({ proinfo: item, typeid: obj.id() });
                    }
                }
            } else {
                return false;
            }
        });

    });
    return prolist;
}
//初始化新闻数据
function getNews() {

    var prolist = [];
    var count = 0;
    $.each(news, function(index, obj) {
        $.each(obj.infos, function(i, info) {
            //每个类型取两条
            if (i > 1) return false;

            if (prolist.length < 4) {
                count = Enumerable.from(prolist).count(function(itemInfo) { return itemInfo ? itemInfo.proinfo.title == info.title : true; });
                if (prolist.length > 0 && count == 0) {
                    prolist.push({ proinfo: info, typeid: obj.typeid });
                } else if (prolist.length == 0) {
                    prolist.push({ proinfo: info, typeid: obj.typeid });
                }
            } else {
                return false;
            }

        });
    });
    return prolist;
}