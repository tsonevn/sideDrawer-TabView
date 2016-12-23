import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Observable } from "data/observable";
import {Label} from "ui/label"
import {topmost} from "ui/frame"

export function loaded(args:EventData){
    var page:Page = <Page> args.object;
    var sideDrawer = <any>page.getViewById("mySideDrawer");
}
export function onTap(args){
    var label:Label = <Label> args.object;
    var tmppage = label.get("id");
    topmost().navigate(tmppage);
}