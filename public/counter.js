function counterCh() {
    var liveTime = new Date();
    var conTime = new Date('2021-8-21 15:50:00'); {
        if (conTime > liveTime) {
            $('.coming-soon').show();
            $('.page-wrapper').hide();
            $('.header-main').hide();
        } else {
            $('.coming-soon').hide();
            $('.page-wrapper').show();
            $('.header-main').show();
        }
    }
}
window.onload = function() {
    counterCh();
}