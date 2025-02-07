import {
    TElement
} from '../core/element';

import {
    TPromise
} from '../core/utils/deferred';

import DataSource, {
    DataSourceOptions
} from '../data/data_source';

import {
    TEvent,
    Cancelable,
    ComponentEvent,
    ComponentNativeEvent,
    ComponentInitializedEvent,
    ChangedOptionInfo,
    ItemInfo
} from '../events/index';

import CollectionWidget, {
    CollectionWidgetItem,
    CollectionWidgetOptions
} from './collection/ui.collection_widget.base';

/** @public */
export type CancelClickEvent = ComponentEvent<dxActionSheet> & Cancelable;

/** @public */
export type ContentReadyEvent = ComponentEvent<dxActionSheet>;

/** @public */
export type DisposingEvent = ComponentEvent<dxActionSheet>;

/** @public */
export type InitializedEvent = ComponentInitializedEvent<dxActionSheet>;

/** @public */
export type ItemClickEvent = ComponentNativeEvent<dxActionSheet> & ItemInfo;

/** @public */
export type ItemContextMenuEvent = ComponentNativeEvent<dxActionSheet> & ItemInfo;

/** @public */
export type ItemHoldEvent = ComponentNativeEvent<dxActionSheet> & ItemInfo;

/** @public */
export type ItemRenderedEvent = ComponentNativeEvent<dxActionSheet> & ItemInfo;

/** @public */
export type OptionChangedEvent = ComponentEvent<dxActionSheet> & ChangedOptionInfo;

export interface dxActionSheetOptions extends CollectionWidgetOptions<dxActionSheet> {
    /**
     * @docid
     * @default "Cancel"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    cancelText?: string;
    /**
     * @docid
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: string | Array<string | dxActionSheetItem | any> | DataSource | DataSourceOptions;
    /**
     * @docid
     * @fires dxActionSheetOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    items?: Array<string | dxActionSheetItem | any>;
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field4 cancel:boolean
     * @type_function_param1_field1 component:dxActionSheet
     * @type_function_param1_field2 element:TElement
     * @type_function_param1_field3 model:any
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onCancelClick?: ((e: CancelClickEvent) => void) | string;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showCancelButton?: boolean;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showTitle?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    target?: string | TElement;
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    title?: string;
    /**
     * @docid
     * @default false
     * @default true [for](iPad)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    usePopover?: boolean;
    /**
     * @docid
     * @default false
     * @fires dxActionSheetOptions.onOptionChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    visible?: boolean;
}
/**
 * @docid
 * @inherits CollectionWidget
 * @module ui/action_sheet
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxActionSheet extends CollectionWidget {
    constructor(element: TElement, options?: dxActionSheetOptions)
    /**
     * @docid
     * @publicName hide()
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hide(): TPromise<void>;
    /**
     * @docid
     * @publicName show()
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    show(): TPromise<void>;
    /**
     * @docid
     * @publicName toggle(showing)
     * @param1 showing:boolean
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toggle(showing: boolean): TPromise<void>;
}

/**
 * @docid
 * @inherits CollectionWidgetItem
 * @type object
 */
export interface dxActionSheetItem extends CollectionWidgetItem {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    icon?: string;
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field1 component:dxActionSheet
     * @type_function_param1_field2 element:dxElement
     * @type_function_param1_field3 model:object
     * @type_function_param1_field4 event:event
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onClick?: ((e: { component?: dxActionSheet, element?: TElement, model?: any, event?: TEvent }) => void) | string;
    /**
     * @docid
     * @type Enums.ButtonType
     * @default 'normal'
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'back' | 'danger' | 'default' | 'normal' | 'success';
}

export type Options = dxActionSheetOptions;

/** @deprecated use Options instead */
export type IOptions = dxActionSheetOptions;
