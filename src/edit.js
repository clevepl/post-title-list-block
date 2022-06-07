/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';


import { store as coreStore } from '@wordpress/core-data';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	InspectorControls
} from '@wordpress/block-editor';

import { useEffect, useState, useCallback, useMemo } from '@wordpress/element';

import { useSelect } from '@wordpress/data';

import {
	BaseControl,
	PanelBody,
	Placeholder,
	QueryControls,
	RadioControl,
	RangeControl,
	SelectControl,
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


// from block-library/src/query/edit/inspector-controls/index.js
 function useIsPostTypeHierarchical( postType ) {
	return useSelect(
		( select ) => {
			const type = select( coreStore ).getPostType( postType );
			return type?.viewable && type?.hierarchical;
		},
		[ postType ]
	);
}

/**
 *
 * FROM block-library/src/query/utils.js in gutenberg
 * Returns a helper object that contains:
 * 1. An `options` object from the available post types, to be passed to a `SelectControl`.
 * 2. A helper map with available taxonomies per post type.
 *
 * @return {Object} The helper object related to post types.
 */
 function usePostTypes() {
	const postTypes = useSelect((select) => {
		const { getPostTypes } = select(coreStore);
		const excludedPostTypes = ['attachment'];
		const filteredPostTypes = getPostTypes({ per_page: -1 })?.filter(
			({ viewable, slug }) => viewable && !excludedPostTypes.includes(slug)
		);
		return filteredPostTypes;
	}, []);
	const postTypesTaxonomiesMap = useMemo(() => {
		if (!postTypes?.length)
			return;
		return postTypes.reduce((accumulator, type) => {
			accumulator[type.slug] = type.taxonomies;
			return accumulator;
		}, {});
	}, [postTypes]);
	const postTypesSelectOptions = useMemo(
		() => (postTypes || []).map(({ labels, slug }) => ({
			label: labels.singular_name,
			value: slug,
		})),
		[postTypes]
	);
	return { postTypesTaxonomiesMap, postTypesSelectOptions };
}


 export default function Edit({attributes,
 	setAttributes}) {
		 const { numberOfPostsToDisplay, postTypeToObtain } = attributes;


	 const { postTypesTaxonomiesMap, postTypesSelectOptions } = usePostTypes();

	return (
		<>
		<ul {...useBlockProps()}>
			<li>
				This will display a list of titles on the front-end of the
				website.
			</li>
			<li>
				and{' '}
				<a href="https://linktothatpost.com">
					will hyperlink to each of these posts
				</a>
				.
			</li>

		</ul>

		 <InspectorControls>
				<PanelBody
					title={__('Settings', 'cpl')}
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
					max={500}
				/>


		<SelectControl
		options={ postTypesSelectOptions }
		value={ postType }
		label={ __( 'Post type' ) }
		onChange={ onPostTypeChange }
		help={ __(
			'WordPress contains different types of content and they are divided into collections called "Post types". By default there are a few different ones such as blog posts and pages, but plugins could add more.'
		) }
		/>
	</InspectorControls>
	</>
	);
}

