"use strict";
var frame_1 = require("ui/frame");
function loaded(args) {
    var page = args.object;
    var sideDrawer = page.getViewById("mySideDrawer");
}
exports.loaded = loaded;
function onTap(args) {
    var label = args.object;
    var tmppage = label.get("id");
    frame_1.topmost().navigate(tmppage);
}
exports.onTap = onTap;
//# sourceMappingURL=page2.js.map