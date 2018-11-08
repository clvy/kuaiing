/*Created by Administrator on 2016/12/05*/
//rem布局总控制
    var oldDriver = {max: 750, min: 320, px: 100};
    $(window).on('resize', function () {
        var w = $(this).width();
        if (w < oldDriver.min) {
            w = oldDriver.min;
        } else if (w > oldDriver.max) {
            w = oldDriver.max;
        }
        $('html').css('font-size', oldDriver.px * w / oldDriver.max + 'px');
    }).trigger('resize');
