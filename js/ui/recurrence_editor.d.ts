import {
    TElement
} from '../core/element';

import Editor, {
    EditorOptions
} from './editor/editor';

export interface dxRecurrenceEditorOptions extends EditorOptions<dxRecurrenceEditor> {
    /**
     * @docid
     * @default null
     * @fires dxRecurrenceEditorOptions.onValueChanged
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value?: string;
}
/**
 * @docid
 * @isEditor
 * @inherits Editor
 * @module ui/recurrence_editor
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxRecurrenceEditor extends Editor {
    constructor(element: TElement, options?: dxRecurrenceEditorOptions)
}

export type Options = dxRecurrenceEditorOptions;

/** @deprecated use Options instead */
export type IOptions = dxRecurrenceEditorOptions;
