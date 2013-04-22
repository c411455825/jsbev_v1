/**
 * Class: PaginationLinks
 * 页码控件。
 *
 * Examples:
 * (code)
 * (end)
 */
(function(){
    function A(options){
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
         * APIProperty: amountPerPage
         * {Number} 每页显示的数据量
         */
        t.amountPerPage = 10;
        /**
         * APIProperty: maxDisplayLinks
         * {Number} 最多显示的页码数
         */
        t.maxDisplayLinks = 5;
        /**
         * APIProperty: curPage
         * {Number} 当前显示的页面索引
         */
        t.curPage=0;
        /**
         * APIProperty: click
         * {Function} 点击页码触发的事件,返回该页显示的数据的起始索引
         */
        t.click=function(i){};
        t.init(options);
    }
    var B = A.prototype;
    /**
     * Constructor: SuperMap.Bev.PaginationLinks
     * 实例化 PaginationLinks 类。
     *
     * Parameters:
     * options - {Object} 初始化所需的参数
     *
     * Examples:
     * (code)
     * paginationLinks = new SuperMap.Bev.PaginationLinks({
     *    "body":div,
     *    "totleAmount":1000,
     *    "amountPerPage":10,
     *    "maxDisplayLinks":5,
     *    "click":function(){}
     * });
     * (end)
     */
    B.init=function (options) {
        var t = this;
        for(key in options){
            if(options[key])this[key] = options[key];
        }

        t.body.style.textAlign = "center";

        t.create(1);
    };
    /**
     * APIMethod: clear
     * 清除控件。
     */
    B.clear=function(){
        this.body.innerHTML="";
    };
    /**
     * APIMethod: create
     * 创建该控件的dom对象。
     * Parameters:
     * curNum - {Number} 当前显示的页码
     */
    B.create=function(curNum){
        var o,tt,pa,pageNumber,t=this;

        t.curPage = curNum;
        t.clear();
        tt = t.totleAmount;
        pa = t.amountPerPage;
        pageNumber = Math.ceil(tt/pa);
        var midNumber = Math.ceil(t.maxDisplayLinks/2);

        if(pageNumber>1){
            if(curNum<=midNumber){
                t.createLinks(false,true,1,t.maxDisplayLinks,curNum);
            }
            else if(curNum>midNumber&&curNum<=pageNumber-midNumber+1){
                t.createLinks(true,true,curNum-midNumber+1,curNum+midNumber-1,curNum,true);
            }
            else if(curNum>pageNumber-midNumber+1){
                t.createLinks(true,false,pageNumber-t.maxDisplayLinks+1,pageNumber,curNum,true);
            }
        }
        else {
            t.createLinks(false,false,1,1,1);
        }
    };
    /**
     * APIMethod: createLinks
     * 创建页码链接。
     *
     * Parameters:
     * isShowPre - {Boolean} 是否显示“<<上一页”.
     * isShowNext - {Boolean} 是否显示“下一页>>”.
     * from - {Number} 所显示的页码的起始数.
     * to - {Number} 所显示的页码的终止数.
     * clickNum - {Number} 当前显示的页码数.
     * isShowFirst - {Boolean} 是否显示“首页”.
     */
    B.createLinks=function(isShowPre,isShowNext,from,to,clickNum,isShowFirst){
        var d,me=this;
        if(isShowFirst){
            d = this.createTextLink(this.body,"首页");
//            d.click(function(){
//                me.create(1);
//                me.click(0);
//                return false;
//            });
            d.onclick = function(){
                var me1 = me;
                me1.create(1);
                me1.click(0);
            }
        }
        if(isShowPre){
            d = this.createTextLink(this.body,"<<上一页");
//            d.click(function(){
//                me.create(me.curPage-1);
//                me.click((me.curPage-1)*me.amountPerPage);
//                return false;
//            });
            d.onclick = function(){
                var me1 = me;
                me1.create(me1.curPage-1);
                me1.click((me1.curPage-1)*me1.amountPerPage);
            }
        }
        for(var i=from;i<=to;i++){
            d = this.createTextLink(this.body,i,clickNum==i);
//            d.click(function(i){
//                return function(){
//                    me.create(i);
//                    me.click((i-1)*me.amountPerPage);
//                    return false;
//                }
//            }(i));
            d.onclick = function(i){
                return function(){
                    var me1 = me;
                    me1.create(i);
                    me1.click((i-1)*me1.amountPerPage);
                }
            }(i)
        }
        if(isShowNext){
            d=this.createTextLink(this.body,"下一页>>");
//            d.click(function(){
//                me.create(me.curPage+1);
//                me.click((me.curPage-1)*me.amountPerPage);
//                return false;
//            });
            d.onclick = function(){
                var me1 = me;
                me1.create(me1.curPage+1);
                me1.click((me1.curPage-1)*me1.amountPerPage);
            }
        }
    };
    /**
     * APIMethod: createTextLink
     * 创建单个页码链接。
     *
     * Parameters:
     * container - {HTMLElement} 父容器.
     * text - {String} 链接上的文字.
     * isNumClick - {Boolean} 是否是数字链接.
     */
    B.createTextLink=function(container,text,isNumClick){
        var d,doc=document,s,t,me = this;

//        d = $("<span>")
//            .css({
//                "display":"inline-block",
//                "margin":"0px 3px 0px 3px"
//            })
//            .appendTo(container);
        if(!container)return false;
        d = doc.createElement("span");
        s = d.style;
        s.display = "inlineBlock";
        s.margin = "0px 3px 0px 3px";

        if(isNumClick){
            text = "["+text+"]";
        }
        else{
//            d.mouseover(function(){
//                $(this).css({
//                    "text-decoration":"underline"
//                })
//            })
//                .mouseout(function(){
//                    $(this).css({
//                        "text-decoration":"none"
//                    })
//                });
            d.onmouseover = function(d){
                return function(){
                    d.style.textDecoration = "underline";
                }
            }(d);
            d.onmouseout = function(d){
                return function(){
                    d.style.textDecoration = "none";
                }
            }(d);

//            d.css({
//                "cursor":"pointer"
//            });
            d.style.cursor = "pointer";
        }

        //d.html(text);
        d.appendChild(doc.createTextNode(text));
        container.appendChild(d);
        return d;
    };
    window.PaginationLinks = A;
})()