"use strict";
var observableModule = require("ui/core/dependency-observable");
var DrawerCallbacksModel = (function (_super) {
    __extends(DrawerCallbacksModel, _super);
    function DrawerCallbacksModel() {
        _super.call(this);
        this.set("tabIndex", 1);
    }
    DrawerCallbacksModel.prototype.onDrawerOpening = function () {
        this.set("currentDrawerNotification", "Drawer opening");
    };
    DrawerCallbacksModel.prototype.onDrawerOpened = function () {
        this.set("currentDrawerNotification", "Drawer opened");
    };
    DrawerCallbacksModel.prototype.onDrawerClosing = function () {
        this.set("currentDrawerNotification", "Drawer closing");
    };
    DrawerCallbacksModel.prototype.onDrawerClosed = function () {
        this.set("currentDrawerNotification", "Drawer closed");
    };
    return DrawerCallbacksModel;
}(observableModule.DependencyObservable));
exports.DrawerCallbacksModel = DrawerCallbacksModel;
//# sourceMappingURL=drawer-callbacks-model.js.map