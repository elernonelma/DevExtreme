import {
    TElement
} from '../core/element';

import {
    ComponentEvent,
    ComponentNativeEvent,
    ComponentInitializedEvent,
    ChangedOptionInfo
} from '../events/index';

import Widget, {
    WidgetOptions
} from './widget/ui.widget';

/** @public */
export type ClickEvent = ComponentNativeEvent<dxSpeedDialAction> & {
    actionElement?: TElement
}

/** @public */
export type ContentReadyEvent = ComponentEvent<dxSpeedDialAction> & {
    actionElement?: TElement
};

/** @public */
export type DisposingEvent = ComponentEvent<dxSpeedDialAction>;

/** @public */
export type InitializedEvent = ComponentInitializedEvent<dxSpeedDialAction>;

/** @public */
export type OptionChangedEvent = ComponentEvent<dxSpeedDialAction> & ChangedOptionInfo;

export interface dxSpeedDialActionOptions extends WidgetOptions<dxSpeedDialAction> {
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    icon?: string;
    /**
     * @docid
     * @default 0
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    index?: number;
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    label?: string;
    /**
     * @docid
     * @type_function_param1 e:object
     * @type_function_param1_field1 event:event
     * @type_function_param1_field2 component:this
     * @type_function_param1_field3 element:dxElement
     * @type_function_param1_field4 actionElement:dxElement
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onClick?: ((e: ClickEvent) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field1 component:dxSpeedDialAction
     * @type_function_param1_field2 element:TElement
     * @type_function_param1_field3 model:any
     * @type_function_param1_field4 actionElement:dxElement
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onContentReady?: ((e: ContentReadyEvent) => void);
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    visible?: boolean;
}
/**
 * @docid
 * @inherits Widget
 * @module ui/speed_dial_action
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxSpeedDialAction extends Widget {
    constructor(element: TElement, options?: dxSpeedDialActionOptions)
}

export type Options = dxSpeedDialActionOptions;

/** @deprecated use Options instead */
export type IOptions = dxSpeedDialActionOptions;
