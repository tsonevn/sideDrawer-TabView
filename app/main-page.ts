import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Observable } from "data/observable";

export function loaded(args:EventData){
    var page:Page = <Page> args.object;
    var sideDrawer = <any>page.getViewById("mySideDrawer");
}