"use strict";
exports.__esModule = true;
var Gtag = (function () {
    function Gtag() {
    }
    Gtag.init = function (trackingID, param) {
        if (!Gtag.isInit) {
            window.dataLayer = window.dataLayer || [];
            var script = window.document.createElement("script");
            script.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingID;
            script.async = true;
            window.document.head.appendChild(script);
            Gtag.isInit = true;
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