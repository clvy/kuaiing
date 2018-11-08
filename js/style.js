/* 
* @Author: Marte
* @Date:   2017-01-03 18:05:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-22 09:34:28
*/

$(document).ready(function(){
    /*---------------------------purifier_Problem.html-------------------------------*/
    function  show(){
        $('.p-problem ul li').click(function(){
            $(this).find('h3').next('p').toggle();
            $(this).find('h3 i').toggleClass('hover');
        })
    }

    show();

    /*---------------------------recharge.html-------------------------------*/
    function tab(list){
        $(list).click(function(){
            var index=$(this).index();
            $(this).addClass('hover').siblings().removeClass('hover');
        })
    }
    tab('.con-money ul li');

    /*---------------------------repair_Apply.html-------------------------------*/
    /*单选*/
    function  select(select){
        $(select).click(function(){
            $(this).toggleClass('hover').parent('li').siblings('li').find('.select').removeClass('hover');
        })

    }
    select('.apply-select ul li .select');
    /*---------------------------bind_Remove.html-------------------------------*/
    /*多选*/
    /*function  muSelect(select){
        $(select).click(function(){
            $(this).toggleClass('hover');
            var hover=0;
            var mybinds=new Array();
            $('.remove-select ul li').each(function(){
                if($(this).find('span').hasClass('hover')){
                    mybinds[hover]=$(this).find('h3').text();
                    hover++;
                }       
            }) 
        })

    }
    muSelect('.remove-select ul li .select');*/
    /*解除绑定弹窗 并添加删除内容*/
    function  winClick(click,cancel,content,conform){
        var mybinds=new Array();
        $('.remove-select ul li .select').click(function(){
            $(this).toggleClass('hover'); 
        })
        $(click).click(function(){
            var hover=0;
            /*mybinds.splice(0,mybinds.length);*/
            mybinds.length = 0;
            $('.remind-con p').remove()
            $('.remove-select ul li').each(function(){
                if($(this).find('span').hasClass('hover')){
                    mybinds[hover]=$(this).find('h3').text();
                    hover++;
                }       
            })
            $(content).show();
            console.log(mybinds)
            for(var i=hover-1;i>=0;i--){
                $('.remind-con').find('h3').after('<p>解除绑定的机器为<span>['+mybinds[i]+']</span><br>解除绑定后将不再收到信息</p>')
            }
            $(conform).click(function(){
                $(content).hide();
                $('.remove-select ul li').each(function(){
                    if($(this).find('span').hasClass('hover')){
                        $(this).remove();
                    }  
                })
            })
        })
        $(cancel).click(function(){
            $(content).hide();
        })
    }
    winClick('.b-remove .submit','.remind-cancel','.remind','.remind-conform');
    /*---------------------------news_Center.html-------------------------------*/
    /*显示完全*/
    function lineShow(){
        $('.center-con i').click(function(){
            $(this).toggleClass('hover').prev().toggleClass('hover');
        })
    }
    lineShow();



    /*---------------------------evaluate.html-------------------------------*/
    function star(){
        $('.stars ul li').click(function(){
            var index=$(this).index();
            var num=index+1;
            $(this).parent().children('li').removeClass('hover');
            $(this).parent().children('li:lt('+num+')').addClass('hover');
        })
    }
    star();

    /*---------------------------install_Apply.html-------------------------------*/
    ~function(){

        //判断输入框是否为空 电话号码是否填写正确 为空给出相应提示
        function isNull(list,submit){
            var isInteger = RegExp(/^[0-9]+$/);
            var re =  RegExp(/^[1][358][0-9]{9}$/);
            var arr=new Array();
            $(submit).click(function(){
                var num=0;
                arr.length = 0;
                $('.complete p span').text('');
                var val=$('.phone').find('input').val();
                $(list).each(function(){              
                    if($(this).find('input').val()==""){
                        num++;
                        arr[num]=$(this).find('input').attr('data-val')+" ";
                    }
                    else if($(this).find('input').val()==val&&(!isInteger.test($.trim(val)) || !re.test($.trim(val)) ) ){
                        num++;
                        arr[num]=$(this).find('input').attr('data-val')+" ";
                    }
                }) 
                //相应提示弹窗
                
                var len=arr.length;
                if(len!=0){
                    var myTime=null;
                    var timeNum=2;
                    var speed=1000;
                    for(var i=0;i<=num;i++){
                        $('.complete p span').append(arr[i]);
                    }
                    $('.complete').fadeIn(speed);
                    myTime=setInterval(function(){
                    timeNum--;
                    if(timeNum==0){
                        clearInterval(myTime);
                        $('.complete').fadeOut(speed);
                        }
                    }, 1000)
                }else{
                    $('.complete').hide();
                }
                            
            })
        }

        /*调用函数isNull(list)*/
        /*purrifier_reg.html*/
        isNull(('.p-register .re-input .name,.p-register .re-input .phone,.p-register .re-input .address,.p-register .re-name .detail'),'.p-register .submit');
        /*install_Apply.html recommend_Detail.html*/
        isNull(('.i-apply .re-input .name,.i-apply .re-input .phone,.i-apply .re-input .address,.i-apply .re-input .detail,.i-apply .re-input .time,.i-apply .re-input .machine'),'.i-apply .submit');
        

    }();


























});