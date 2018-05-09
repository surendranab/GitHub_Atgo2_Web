import { SubNavItemModel } from "./subnavitem.model";

export interface LeftsideNavModel {
    NavId: number;
    NavName: string;
    NavIconPath: string;
    NavTooltip: string;
    NavLink: string;    
    SubNavItems: SubNavItemModel[]; 
}