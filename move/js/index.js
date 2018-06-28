function ViewModel() {
    var self = this;
    self.ProDetails = ko.observableArray(getProctions());
}
var vm = new ViewModel();
ko.applyBindings(vm);

//初始化产品数据
function getProctions() {
    var data = productLists.Data('../');
    var prolist = [];
    var count = 0;
    $.each(data, function(index, obj) {
        $.each(obj.infos(), function(i, info) {
            $.each(info.ProDetails(), function(j, item) {
                if (prolist.length < 8) {
                    count = Enumerable.from(prolist).count(function(itemInfo) { return itemInfo ? itemInfo.proinfo.name() == item.name() : true; });
                    if (prolist.length > 0 && count == 0) {
                        prolist.push({ proinfo: item, infotypeid: info.id(), typeid: obj.id() });
                    } else if (prolist.length == 0) {
                        prolist.push({ proinfo: item, infotypeid: info.id(), typeid: obj.id() });
                    }
                } else {
                    return false;
                }
            });
        });
    });
    return prolist;
}