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
             * APIProperty: datas
             * {Array<String>} 表格中要显示的数据
             */
            datas:[],
            /**
             * APIProperty: ColumnTitles
             * {Array<String>} 每一列的标题
             */
            columnTitles:[],
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

                this.create();
            },
            /**
             * Method: create
             * 创建该控件的dom对象。
             */
            create:function(){

            }
        },
        null,                        //父类
        false,                       //是否是静态类
        null                         //初始化该类之前需要加载的js文件
    );
})();