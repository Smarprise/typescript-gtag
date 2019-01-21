"use strict";
exports.__esModule = true;
var Gtag = (function () {
    function Gtag() {
    }
    Gtag.init = function (trackingID, param) {
        this.isInit = true;
        if (!(window.dataLayer && window.dataLayer.push)) {
            window.dataLayer = window.dataLayer || [];
            var script = window.document.createElement("script");
            script.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingID;
            script.async = true;
            window.document.head.appendChild(script);
            Gtag.gtag('js', new Date());
        }
        Gtag.gtag('config', trackingID, param);
    };
    Gtag.gtag = function (a, b, c) {
        window.dataLayer.push(arguments);
    };
    Gtag.isInit = false;
    return Gtag;
}());
exports.Gtag = Gtag;
//# sourceMappingURL=index.js.map