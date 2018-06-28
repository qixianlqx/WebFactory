 function setPage(index) {
     var proindex = 0;
     var nextindex = 0;
     var protitle = '';
     var nexttitle = '';
     if (index > 1) {
         proindex = index - 1;
     }
     if (index < viewInfo.infoList().length) {
         nextindex = index + 1;
     }
     Enumerable.from(viewInfo.infoList()).forEach(function(item) {
         if (item.index() == proindex) {
             protitle = item.title();
         }
         if (item.index() == nextindex) {
             nexttitle = item.title();
         }
     });
     viewInfo.pageinfo(new pageinfo(proindex, protitle || '没有了哦', nextindex, nexttitle || '没有了哦', index));
 }

 function ViewModel() {
     var self = this;

     self.TypeList = ko.observableArray([
         new TypeList(1, '公司新闻', 'am-icon-newspaper-o', ko.mapping.fromJS(news[0].infos)(), this),
         new TypeList(2, '行业新闻', 'am-icon-newspaper-o', ko.mapping.fromJS(news[1].infos)(), this),
     ]);

     self.infoList = ko.observableArray(setItem(self.TypeList()[0].infos()));
     self.typeClick = function(item) {
         self.count = item.infos().length;
         self.infoList(setItem(item.infos()));
         self.className(item.className());
         self.currentName('&nbsp;-&nbsp;' + item.name());
         self.isLoad(true);
         self.isShowNew(false);

     };
     //点击新闻标题
     self.nameClick = function(info) {
         self.currenNewInfo(setItem([info])[0]);
         self.isShowNew(true);
         //重新设置样式
         $(".newsfont").addClass("");
         setPage(info.index());
     };
     self.pageClick = function(index) {
         if (index == 0) return;

         var info = {};
         Enumerable.from(self.infoList()).forEach(function(item) {
             if (item.index() == index) {
                 info = item;
             }
         });
         //设置新闻内容
         self.currenNewInfo(setItem([info])[0]);
         //设置翻页
         setPage(index);

         //重新设置样式
         $(".newsfont").addClass("");
         //翻页时滚动条往下滚动
         $(document).scrollTop(320);
     };
     self.typetitleclick = function(info) {
         self.isShowNew(false);
     };
     self.isShowNew = ko.observable(false);
     self.isLoad = ko.observable(false);
     self.currenNewInfo = ko.observable(new infoList(1, '', '', '', '', 1));
     self.pageinfo = ko.observable(new pageinfo(1, '没有了哦', 3, '没有了哦', 1));
     self.count = self.TypeList()[0].infos().length;
     self.currentName = ko.observable('');
     self.className = ko.observable(self.TypeList()[0].className());
 }
 var viewInfo = new ViewModel();
 ko.applyBindings(viewInfo);

 /******首页跳转过来处理******/
 function setProByUrl(obj) {

     var prolist = [];
     var proid = jQuery.url.param("id");
     var typeid = jQuery.url.param("typeid");
     var proinfo = null;
     var infoList = [];

     var currentName = '';
     $.each(news, function(index, obj) {
         if (obj.typeid == typeid) {
             currentName = ' - ' + obj.name;
             infoList = obj.infos;
             $.each(infoList, function(i, info) {

                 if (info.id == proid) {
                     proinfo = info;

                     return false;
                 }
             });
             return false;
         }
     });
     if (proinfo) {

         obj.currenNewInfo(ko.mapping.fromJS(proinfo));
         obj.isShowNew(true);
         obj.isLoad(true);
         //设置产品详情
         //obj.infoList(ko.mapping.fromJS(infoList)());
         obj.currentName(currentName);
         // setPage(proinfo.index);
     }
 }

 $(function() {
     setProByUrl(viewInfo);
 });