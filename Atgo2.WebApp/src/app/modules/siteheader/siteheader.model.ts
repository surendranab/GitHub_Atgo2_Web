import { SiteheaderItemModel } from "./siteheaderItem.model";

export interface SiteheaderModel {
    siteId: number;
    siteName: string;
    siteLogoIconPath: string;
    siteLogoTooltip: string;
    siteLogoLink: string;
    siteBrandName: string;
    siteHeaderItems: SiteheaderItemModel[];
    UserDisplayName: string;
    LoggedInUserId: number;
}
