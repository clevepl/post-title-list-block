=== Post Title List Block ===
Contributors:      Will Skora & the CPL Team
Tags:              block
Tested up to:      6.1
Stable tag:        0.1.1
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Block that displays recently published posts within an unordered list element (ul).

You can control the number of posts and the post type to load. 

Source code available at https://gitlab.com/cpl/post-title-list-block

== Description ==

Created using WordPress' create-block; credit to [OsomPress](https://wordpress.org/plugins/osomblocks/) for techniques how to subscribe and load posts in the sidepanel.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/post-title-list-block` directory
1. Activate the plugin through the 'Plugins' screen in WordPress

== Development/Customization ==

If you wish to heavily customize the block for your own use (e.g. restrict the available post types to select); you will need to complete the following (not very thorough)

1. clone repository
1. inside post-title-list-block directory, run `npm install`
1. run `npm start` within that directory;
1. make your code changes
1. ; run `npm run build` ; additional build commands at the [create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/#available-commands) site.


== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).

== Changelog ==

= 0.1.1 =
* First public Release

== Arbitrary section ==

You may provide arbitrary sections, in the same format as the ones above. This may be of use for extremely complicated
plugins where more information needs to be conveyed that doesn't fit into the categories of "description" or
"installation." Arbitrary sections will be shown below the built-in sections outlined above.
