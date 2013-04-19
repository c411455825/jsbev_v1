/**
 * Class: DataGrid
 * 表格控件，可用于展现查询所得到的数据。
 *
 * Examples:
 * (code)
 * var data = [
 *     ["姓名","年龄","性别","成绩"],  //标题
 *     ["小王","16","男","87"],        //数据
 *     ["小李","17","男","89"]
 * ];
 * var myDataGrid = new DataGrid({
 *     "body":document.getElementById("divID"),
 *     "data":data
 * });
 * (end)
 */
(function(){
    function A(options){
        var t = this;
        /**
         * APIProperty: body
         * {HTMLElement} 父容器
         */
        t.body = null;
        /**
         * APIProperty: data
         * {Array} 数据
         *
         * Examples:
         * (code)
         * var data = [
         *     ["姓名","年龄","性别","成绩"],  //标题
         *     ["小王","16","男","87"],        //数据
         *     ["小李","17","男","89"]
         * ]
         * (end)
         */
        t.data = null;
        /**
         * APIProperty: table
         * {HTMLElement} 表格对象
         */
        t.table = null;
        t.init(options);
    }
    var B = A.prototype;
    /**
     * Constructor: DataGrid
     * 实例化 DataGrid 类。
     *
     * Parameters:
     * options - {Object} 参数
     *
     * Examples:
     * (code)
     * {
     *     "body":(div)   //{HTMLElement} 父容器
     * }
     * (end)
     */
    B.init = function(options){
        var t = this;
        for(var key in options){
            this[key] = options[key];
        }
        t.create();
    }
    /**
     * Method: create
     * 创建表格.
     */
    B.create = function(){
        var doc = document,t=this;
        if(t.data&&t.body){
            t.table = doc.createElement("table");
            for(var i=0;i< t.data.length;i++){
                t.tableRow(t.data[i]);
            }
            t.body.appendChild(t.table);
        }
    }
    /**
     * Method: tableRow
     * 创建表格中的一行.
     *
     * Parameters:
     * data - {Array} 一行的参数
     *
     * Examples:
     * (code)
     * var data = ["小王","16","男","87"];
     * (end)
     */
    B.tableRow = function(data){
        var doc = document,row=null,t=this,td,tn;
        if(t.table&&data){
            row = doc.createElement("tr");
            for(var i=0;i<data.length;i++){
                td = doc.createElement("td");
                tn = doc.createTextNode(data[i]);
                td.appendChild(tn);
                row.appendChild(td);
            }
            t.table.appendChild(row);
        }

        return row;
    }
    window.DataGrid = A;
})()