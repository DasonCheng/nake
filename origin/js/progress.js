import '../sass/nprogress.css';
var NProgress = require('../lib/bower_components/nprogress/nprogress');
NProgress.start();
NProgress.set(0.4);
document.onreadystatechange = subSomething;
function subSomething() {
    if (document.readyState === 'complete') {
        NProgress.done();
        $(".fade").removeClass("out");
        $("#loading").remove();
    } else {
        NProgress.inc()
    }
}