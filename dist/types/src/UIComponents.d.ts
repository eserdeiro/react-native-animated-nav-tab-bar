import { Animated } from "react-native";
import { DotSize, TabButtonLayout, TabElementDisplayOptions } from "./types";
interface IBottomTabBarWrapper {
    floating: boolean;
    shadow: boolean;
    tabBarBackground: string;
    topPadding: number;
    horizontalPadding: number;
    bottomPadding: number;
}
declare const BottomTabBarWrapper: import("styled-components/native/dist/types").IStyledComponentBase<"native", import("styled-components/native/dist/types").Substitute<import("react-native").ViewProps, IBottomTabBarWrapper>>;
interface ITabButton {
    tabButtonLayout: TabButtonLayout;
    focused: boolean;
    labelLength: number;
    dotSize: DotSize;
}
declare const TabButton: import("styled-components/native/dist/types").IStyledComponentBase<"native", import("styled-components/native/dist/types").Substitute<import("react-native").TouchableOpacityProps, ITabButton>>;
interface ILabelProps {
    whenInactiveShow: TabElementDisplayOptions;
    whenActiveShow: TabElementDisplayOptions;
    tabButtonLayout: TabButtonLayout;
    activeColor: string;
}
declare const Label: import("styled-components/native/dist/types").IStyledComponentBase<"native", import("styled-components/native/dist/types").Substitute<Animated.AnimatedProps<import("react-native").TextProps & import("react").RefAttributes<import("react-native").Text>>, ILabelProps>>;
interface IDotProps {
    topPadding: number;
    width: number;
    height: number;
    dotCornerRadius: number;
    activeTabBackground: string;
}
declare const Dot: import("styled-components/native/dist/types").IStyledComponentBase<"native", import("styled-components/native/dist/types").Substitute<Animated.AnimatedProps<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>>, IDotProps>>;
declare const SHADOW: import("styled-components/native/dist/types").RuleSet<object>;
export { BottomTabBarWrapper, TabButton, Label, Dot, SHADOW };
