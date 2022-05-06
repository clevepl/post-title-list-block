/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	InspectorControls,
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

import {
	BaseControl,
	PanelBody,
	Placeholder,
	QueryControls,
	RadioControl,
	RangeControl,
	Spinner,
	ToolbarGroup,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes: { numberOfPostsToDisplay, postTypesToObtain },
	setAttributes,
}) {
	return (
		<ul {...useBlockProps()}>
			<li>Example list of an item that will be fetchable</li>
			<li>Will fetch different post types</li>
			<li>
				and <a href="https://linktothatpost.com">a too these posts </a>
			</li>
			<InspectorControls>
				<PanelBody
					title={__('settings', 'cpl')}
					initialOpen={true}
				></PanelBody>
				<QueryControls />
				<RangeControl
					label={__('Number of posts to display')}
					value={numberOfPostsToDisplay}
					onChange={(value) =>
						setAttributes({ numberOfPostsToDisplay: value })
					}
					min={1}
					max={1000}
				/>
			</InspectorControls>
		</ul>
	);
}
