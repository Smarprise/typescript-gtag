declare global  {
    interface Window {
        dataLayer: any[];
    }
}
export interface GtagParams {
    groups?: string;
    send_to?: boolean;
}
export interface GtagAnalyticsEvent extends GtagParams {
    event_category?: string;
    event_label?: string;
    non_interaction?: boolean;
    value?: any;
    [key: string]: any;
}
export interface GtagAnalyticsEventTimingComplete extends GtagAnalyticsEvent {
    name: string;
    value: number;
}
export interface GtagAnalyticsEventScreenView extends GtagAnalyticsEvent {
    screen_name: string;
    app_name: string;
    app_id?: string;
    app_version?: string;
    app_installer_id?: string;
}
export interface GtagAnalyticsEventException extends GtagAnalyticsEvent {
    description?: string;
    fatal?: boolean;
}
export interface GtagAnalyticsConfig extends GtagParams {
    page_title?: string;
    page_location?: string;
    page_path?: string;
}
export declare class Gtag {
    static isInit: boolean;
    static init(trackingID: string): void;
    static gtag(command: "js", date: Date): void;
    static gtag(command: "config", targetID: string, value?: GtagAnalyticsConfig): void;
    static gtag(command: "config", targetID: string, value?: {
        [param: string]: any;
    }): void;
    static gtag(command: "set", value?: GtagAnalyticsConfig): void;
    static gtag(command: "set", value?: {
        [param: string]: any;
    }): void;
    static gtag(command: "event", eventName: "timing_complete", value: GtagAnalyticsEventTimingComplete): void;
    static gtag(command: "event", eventName: "screen_view", value: GtagAnalyticsEventScreenView): void;
    static gtag(command: "event", eventName: "exception", value: GtagAnalyticsEventException): void;
    static gtag(command: "event", eventName: string, value?: GtagAnalyticsEvent): void;
    static gtag(command: "event", eventName: string, value?: {
        [param: string]: any;
    }): void;
}
