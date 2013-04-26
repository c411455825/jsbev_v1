/**
 * Class: SuperMap.Bev.DataTable
 * 表格控件。
 */
(function () {
    SuperMap.Bev.Class.create(
        "SuperMap.Bev.DataTable",
        {
            /**
             * APIProperty: body
             * {HTMLElement} 父容器
             */
            body:null,
            /**
             * APIProperty: data
             * {Array<String>} 表格中要显示的数据
             */
            data:null,
            /**
             * APIProperty: ColumnTitles
             * {Array<String>} 每一列的标题
             */
            columnTitles:null,
            /**
             * APIProperty: table
             * {HTMLElement} 表格对象
             */
            table:null,
            /**
             * APIProperty: mouseover
             * {Function} mouseover事件
             */
            mouseover:null,
            /**
             * APIProperty: mouseout
             * {Function} mouseout事件
             */
            mouseout:null,
            /**
             * APIProperty: click
             * {Function} click事件
             */
            click:null,
            /**
             * Constructor: SuperMap.Bev.DataTable
             * 实例化 DataTable 类。
             *
             * Parameters:
             * options - {Object} 参数
             *
             * Examples:
             * (code)
             * (end)
             */
            init:function (options) {
                for(var key in options){
                    this[key] = options[key];
                }

                this.create();
            },
            /**
             * APIMethod: setHighlight
             * 设置某条数据高亮
             *
             * Parameters:
             * index - {Number} 索引
             */
            setHighlight:function(id){
                var me=this,tb = this.table,tds,td,tr,trs;

                trs = tb.$("tr");
                for(var i=0;i<trs.length;i++){
                    tr = $(trs[i]);
                    tds = tr.children("td");
                    td = tds[0];
                    id1 = $(td).html();
                    if(id1==id+""){
                        me.highlight(tr);
                        break;
                    }
                }
            },
            /**
             * APIMethod: getDataOfCurPage
             * 获取当前页所显示的数据
             */
            getDataOfCurPage:function(){
                return this.getData(true);
            },
            /**
             * APIMethod: getAllData
             * 获取所有数据
             */
            getAllData:function(){
                return this.getData(false);
            },
            /**
             * Method: getData
             * 获取数据
             *
             * Parameters:
             * isCurPage - {Boolean}  是否是当前页
             */
            getData:function(isCurPage){
                var datas=[],me=this,tb = this.table,tds,td,tr,trs;

                if(isCurPage)trs = tb.children("tbody").children("tr");
                else trs = tb.$("tr");
                for(var i=0;i<trs.length;i++){
                    tr = $(trs[i]);
                    tds = tr.children("td");
                    var data = [];
                    for(var j=0;j<tds.length;j++){
                        data.push($(tds[j]).html());
                    }
                    datas.push(data);
                }

                return datas;
            },
            /**
             * Method: create
             * 创建该控件的dom对象。
             */
            create:function(){
                var me=this,tb,colParam,cts;

                colParam = [];
                cts = me.columnTitles;
                me.setDataId();
                for(var i=0;i<cts.length;i++){
                    colParam.push({
                        "sTitle":cts[i],
                        "sClass":"center"
                    });
                }
                me.table = tb = $("<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"display\"></table>");
                tb.appendTo(me.body);
                tb.dataTable({
                    "bJQueryUI":true,
                    "sPaginationType": "full_numbers",
                    "aaData":me.data,
                    "aoColumns":colParam
                });

                tb.$("tr").hover(
                    function(){
                        $(this).children("td").addClass('highlighted');
                        $(this).css({
                            "cursor":"pointer"
                        });
                        if(me.mouseover)me.mouseover(me.getInformation($(this)));
                    },
                    function(){
                        if(!$(this).hasClass("tb_click")){
                            $(this).children("td.highlighted").removeClass('highlighted');
                        }
                        if(me.mouseout)me.mouseout(me.getInformation($(this)));
                    }
                ).click(function(){
                    me.highlight($(this));
                    if(me.click)me.click(me.getInformation($(this)));
                });
            },
            /**
             * Method: highlight
             * 设置高亮
             *
             * Parameters:
             * index - {Number}  索引
             */
            highlight:function(tr){
                var me = this;

                me.table.$('tr.tb_click').removeClass("tb_click");
                me.table.$('td.highlighted').removeClass('highlighted');
                tr.addClass("tb_click");
                tr.children("td").addClass('highlighted');
            },
            /**
             * Method: getInformation
             * 从tr上获取信息。
             */
            getInformation:function(tr){
                var info=[],tds,td;

                tds = tr.children("td");
                for(var i=0;i<tds.length;i++){
                    td = tds[i];
                    info.push($(td).html());
                }

                return info;
            },
            /**
             * Method: setDataId
             * 设置data上的id信息。
             */
            setDataId:function(){
                var me = this,idIndex=null,t1;
                if(me.columnTitles&&me.data){
                    for(var i=0;i<me.columnTitles.length;i++){
                        if(me.isId(me.columnTitles[i])){
                            idIndex = i;
                        }
                    }
                    for(var i=0;i<me.data.length;i++){
                        t1 = me.data[i];

                        if(idIndex==null){
                            me.data[i].unshift(i+1);
                        }
                        else{
                            var id = t1.splice(idIndex,1);
                            t1.unshift(id);
                            me.data[i] = t1;
                        }
                    }
                    if(idIndex==null){
                        me.columnTitles.unshift("SMID");
                        idIndex = 0;
                    }
                }
            },
            /**
             * Method: isId
             * 判断该字段是否是id字段。
             */
            isId:function(str){
                if(str){
                    str = str.toLowerCase();
                }
                if(str=="id"||str=="smid"){
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        null,                        //父类
        false,                       //是否是静态类
        [
            "demo/js/ui/jquery.dataTables.js"
        ]                         //初始化该类之前需要加载的js文件
    );
})();