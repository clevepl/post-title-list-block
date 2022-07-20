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
	RangeControl,
	SelectControl,
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

/**
 * need to fetch the post types,
 *
 * then load those post types in a SelectControl that can be accessed by the content editort
 */
//

// so i think i need to take posttypestoObtain and (which is an attribute)

// modding ososmblocks
export default function Edit({ attributes, setAttributes }) {
	const { postTypesToObtain, numberOfPostsToDisplay } = attributes;
	var postTypes = wp.data.select('core').getPostTypes({ per_page: -1 });
	let excluded = [
		'attachment',
		'announcement',
		'nav_menu_item',
		'revision',
		'secondline_psb_post',
		'wp_block',
		'wp_navigation',
		'wp_template_part',
		'wp_template',
	];
	let choices = [];
	let filled = false;

	wp.data.subscribe(() => {
		postTypes = wp.data.select('core').getPostTypes({ per_page: -1 });

		if (postTypes && !filled) {
			postTypes.forEach((postTypes) => {
				if (!excluded.includes(postTypes.slug))
					choices.push({
						value: postTypes.slug,
						label: postTypes.name,
					});
			});
			filled = true;
		}
	});

	// if I remove this; the post types are not loaded into the selectControl
	if (postTypes && !filled) {
		postTypes.forEach((postTypes) => {
			if (!excluded.includes(postTypes.slug))
				choices.push({ value: postTypes.slug, label: postTypes.name });
		});
		filled = true;
	}

	return (
		<ul {...useBlockProps()}>
			<li>
				This will display a list of titles on the front-end of the
				website once published.
			</li>
			<li>
				and{' '}
				<a href="https://linktothatpost.com">
					will hyperlink to each of these posts
				</a>
			</li>

			<InspectorControls>
				<PanelBody title={__('Settings', 'cpl')} initialOpen={true}>
					<SelectControl
						label={__('Select post type:')}
						value={postTypesToObtain}
						options={choices}
						onChange={(value) =>
							setAttributes({ postTypesToObtain: value })
						}
					/>
					<RangeControl
						label={__('Number of posts to display')}
						value={numberOfPostsToDisplay}
						onChange={(value) =>
							setAttributes({ numberOfPostsToDisplay: value })
						}
						min={1}
						max={500}
					/>
				</PanelBody>
			</InspectorControls>
		</ul>
	);
}
