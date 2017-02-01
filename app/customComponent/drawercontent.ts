import {Label} from "ui/label"
import {topmost} from "ui/frame"

export function onTap(args){
    var label:Label = <Label> args.object;
    var tmppage = label.get("id");
    topmost().navigate(tmppage);
}