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
            data:[],
            /**
             * APIProperty: ColumnTitles
             * {Array<String>} 每一列的标题
             */
            columnTitles:[],
            /**
             * APIProperty: table
             * {HTMLElement} 表格对象
             */
            table:null,
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
             * Method: create
             * 创建该控件的dom对象。
             */
            create:function(){
                var me=this,tb,colParam,cts;

                colParam = [];
                cts = me.columnTitles;
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
                        alert(1);
                    },
                    function(){
                        alert(2);
                    }
                );

//                tb.children("tr").mouseover(
//                    function(){
//                        alert(1);
//                        $(this).children("td").addClass('highlighted');
//                        $(this).css({
//                            "cursor":"pointer"
//                        });
//                    }
//                ).mouseout(
//                    function(){
//                        if(!$(this).hasClass("tb_click")){
//                            $(this).children("td.highlighted").removeClass('highlighted');
//                        }
//                    }
//                ).click(function(){
//                        tb.children('tr.tb_click').removeClass("tb_click");
//                        tb.children('td.highlighted').removeClass('highlighted');
//                        $(this).addClass("tb_click");
//                        $(this).children("td").addClass('highlighted');
//                    });
            }
        },
        null,                        //父类
        false,                       //是否是静态类
        [
            "demo/js/ui/jquery.dataTables.js"
        ]                         //初始化该类之前需要加载的js文件
    );
})();