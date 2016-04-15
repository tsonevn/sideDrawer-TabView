"use strict";
var observable_1 = require("data/observable");
var callbacksModelModule = require("./drawer-callbacks-model");
var drawerCallbacksModel;
function loaded(args) {
    var page = args.object;
    var sideDrawer = page.getViewById("mySideDrawer");
    drawerCallbacksModel = new callbacksModelModule.DrawerCallbacksModel();
    drawerCallbacksModel.addEventListener(observable_1.Observable.propertyChangeEvent, function (pcd) {
        console.log(drawerCallbacksModel.get('tabIndex'));
        var itemIndex = drawerCallbacksModel.get('tabIndex');
        console.log(itemIndex);
        if (itemIndex == 0) {
            sideDrawer.showDrawer();
        }
    });
    page.bindingContext = drawerCallbacksModel;
}
exports.loaded = loaded;
function onDrawerClosed(args) {
    drawerCallbacksModel.onDrawerClosed();
    console.log("closed");
}
exports.onDrawerClosed = onDrawerClosed;
function onDrawerClosing(args) {
    drawerCallbacksModel.onDrawerClosing();
    drawerCallbacksModel.set('tabIndex', 1);
    console.log("closing");
}
exports.onDrawerClosing = onDrawerClosing;
function onDrawerOpened(args) {
    drawerCallbacksModel.onDrawerOpened();
}
exports.onDrawerOpened = onDrawerOpened;
function onDrawerOpening(args) {
    drawerCallbacksModel.onDrawerClosing();
}
exports.onDrawerOpening = onDrawerOpening;
//# sourceMappingURL=main-page.js.map