/**
 * Class: PaginationLinks
 * 页码控件。
 *
 * Examples:
 * (code)
 * (end)
 */
(function(){
    function A(){
        var t = this;
        /**
         * APIProperty: body
         * {HTMLElement} 父容器
         */
        t.body=null;
        /**
         * APIProperty: totleAmount
         * {Number} 总数据量
         */
        t.totleAmount = 0;
        /**
         * APIProperty: pageAmount
         * {Number} 每页显示的数据量
         */
        t.pageAmount = 10;
        /**
         * APIProperty: options
         * {Object} 初始化所需的参数
         *
         *(code)
         *options:{
         *    "totleAmount":100,
         *    "pageAmount":10,
         *    "maxDisplayLinks":5
         *},
         * (end)
         */
        t.options:{
            "totleAmount":100,
                "pageAmount":10,
                "maxDisplayLinks":5
        },
    }
    var B = A.prototype;

})()