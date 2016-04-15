import observableModule = require("ui/core/dependency-observable");

export class DrawerCallbacksModel extends observableModule.DependencyObservable {

    constructor() {
        super();
        this.set("tabIndex", 1);
    }

    public onDrawerOpening() {
        this.set("currentDrawerNotification", "Drawer opening");
    }

    public onDrawerOpened() {
        this.set("currentDrawerNotification", "Drawer opened");
    }

    public onDrawerClosing() {
        this.set("currentDrawerNotification", "Drawer closing");
    }

    public onDrawerClosed() {
        this.set("currentDrawerNotification", "Drawer closed");
    }
}