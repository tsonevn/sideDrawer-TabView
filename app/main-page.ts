import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Observable } from "data/observable";
import {Label} from "ui/label"
import {topmost} from "ui/frame"
import {ObservableArray} from "data/observable-array"

export function loaded(args:EventData){
    var page:Page = <Page> args.object;
    var sideDrawer = <any>page.getViewById("mySideDrawer");
    var array= new ObservableArray([
        {title: "Title1", body: "Body1"},
        {title: "Title2", body: "Body2"}
    ])
    page.bindingContext = {notificationList:array};
}
// export function onTap(args){
//     var label:Label = <Label> args.object;
//     var tmppage = label.get("id");
//     topmost().navigate(tmppage);
// }