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
         * APIProperty: amountPerPage
         * {Number} 每页显示的数据量
         */
        t.amountPerPage = 10;
        /**
         * APIProperty: height
         * {Number} 控件高度,不设置则自适应高度
         */
        //t.height = null;
        /**
         * APIProperty: width
         * {Number} 控件宽度,不设置则自适应宽度
         */
        //t.width = null;
        /**
         * APIProperty: colTitles
         * {Array} 表格列标题
         */
        t.colTitles = null;
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
        /**
         * Property: paginationLinks
         * {PaginationLinks} 页码控件
         */
        t.paginationLinks = null;
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
        var cts,doc = document,d1,t=this;
        if(t.data&&t.body){
            cts = t.data.splice(0,1);
            if(cts){
                t.colTitles = cts[0];
            }
            t.table = doc.createElement("table");
            t.table.className = "DG_TABLE";
            d1 = doc.createElement("div");
            t.paginationLinks = new PaginationLinks({
                "body":d1,
                "totleAmount":t.data.length,
                "amountPerPage":t.amountPerPage,
                "maxDisplayLinks":5,
                "click":function(index){
                    create(index);
                }
            });
            create(0);
            t.body.appendChild(t.table);
            t.body.appendChild(d1);
        }

        function create(index){
            var t1 = t;
            t1.table.innerHTML = "";
            var data = t1.getData(index);
            t1.tableRow(t1.colTitles,true);
//            if(data.length<t1.amountPerPage){
//                var colCount = data[0].length;
//                var rowCount = t1.amountPerPage-data.length;
//                var row = [];
//                for(var i=0;i<colCount;i++){
//                    row.push("  ");
//                }
//                var rows = [];
//                for(var i=0;i<rowCount;i++){
//                    rows.push(row.concat([]));
//                }
//                data = data.concat(rows);
//            }
            for(var i=0;i<data.length;i++){
                t1.tableRow(data[i]);
            }
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
    B.tableRow = function(data,isHead){
        var doc = document,row=null,t=this,td,tn;
        if(t.table&&data){
            row = doc.createElement("tr");
            for(var i=0;i<data.length;i++){
                td = doc.createElement(isHead?"th":"td");
                tn = doc.createTextNode(data[i]);
                td.appendChild(tn);
                row.appendChild(td);
            }
            t.table.appendChild(row);
        }

        return row;
    }
    /**
     * Method: getData
     * 获取当前页要显示的数据
     *
     * Parameters:
     * index - {Number} 当前页的起始索引
     */
    B.getData = function(index){
        var data=[],end,t=this,n1,n2;
        n1 = index+t.amountPerPage;
        n2 = t.data.length;
        end = n1<n2?n1:n2;
        for(var i=index;i<end;i++){
            data.push(t.data[i]);
        }
        return data;
    }
    window.DataGrid = A;
})()