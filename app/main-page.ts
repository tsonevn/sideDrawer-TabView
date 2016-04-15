import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Observable } from "data/observable";
import listViewModule = require("nativescript-telerik-ui/listview");
import drawerModule = require("nativescript-telerik-ui/sidedrawer");
import callbacksModelModule = require("./drawer-callbacks-model");
import {SideDrawerLocation} from "nativescript-telerik-ui/sidedrawer";
var drawerCallbacksModel : callbacksModelModule.DrawerCallbacksModel;
export function loaded(args:EventData){
    var page:Page = <Page> args.object;
    var sideDrawer = <any>page.getViewById("mySideDrawer");
    
    
    drawerCallbacksModel = new callbacksModelModule.DrawerCallbacksModel();
    drawerCallbacksModel.addEventListener(Observable.propertyChangeEvent, function (pcd) {
        console.log(drawerCallbacksModel.get('tabIndex'));
        var itemIndex:number =<number> drawerCallbacksModel.get('tabIndex');
        console.log(itemIndex);
        if(itemIndex == 0){
            sideDrawer.showDrawer();
        }
    });
     
    page.bindingContext = drawerCallbacksModel;
}

export function onDrawerClosed(args) {
    drawerCallbacksModel.onDrawerClosed();
    console.log("closed");
}

export function onDrawerClosing(args) {
    drawerCallbacksModel.onDrawerClosing();
    drawerCallbacksModel.set('tabIndex', 1);
    console.log("closing");

}

export function onDrawerOpened(args) {
  drawerCallbacksModel.onDrawerOpened();

}

export function onDrawerOpening(args) {
    drawerCallbacksModel.onDrawerClosing();
}