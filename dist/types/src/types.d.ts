export declare enum TabElementDisplayOptions {
    ICON_ONLY = "icon-only",
    LABEL_ONLY = "label-only",
    BOTH = "both"
}
export declare enum DotSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    DEFAULT = "default"
}
export declare enum TabButtonLayout {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
export interface IAppearanceOptions {
    topPadding: number;
    bottomPadding: number;
    horizontalPadding: number;
    tabBarBackground: string;
    activeTabBackgrounds?: string | string[];
    activeColors?: string | string[];
    floating: boolean;
    dotCornerRadius: number;
    whenActiveShow: TabElementDisplayOptions;
    whenInactiveShow: TabElementDisplayOptions;
    dotSize: DotSize;
    shadow: boolean;
    tabButtonLayout: TabButtonLayout;
}
