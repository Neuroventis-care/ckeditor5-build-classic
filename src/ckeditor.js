/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	FontColor,
	Underline,
	Alignment,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'link',
			'bulletedList',
			'numberedList',
			'fontColor',
			'|',
			'alignment',
			'outdent',
			'indent',
			'|',
			'uploadImage',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	heading: {
		options: [ {
			model: 'paragraph',
			title: 'Paragraph',
			class: 'ck-heading_paragraph'
		},
		{
			model: 'heading1',
			view: 'h1',
			title: 'Heading 1',
			class: 'ck-heading_heading1'
		},
		{
			model: 'heading2',
			view: 'h2',
			title: 'Heading 2',
			class: 'ck-heading_heading2'
		},
		{
			model: 'heading3',
			view: 'h3',
			title: 'Heading 3',
			class: 'ck-heading_heading3'
		},
		{
			model: 'heading4',
			view: 'h4',
			title: 'Heading 4',
			class: 'ck-heading_heading4'
		},
		{
			model: 'heading5',
			view: 'h5',
			title: 'Heading 5',
			class: 'ck-heading_heading5'
		}
		]
	},
	fontColor: {
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black'
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey'
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey'
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey'
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'hsl(0, 75%, 60%)',
				label: 'Red'
			},
			{
				color: 'hsl(30, 75%, 60%)',
				label: 'Orange'
			},
			{
				color: 'hsl(60, 75%, 60%)',
				label: 'Yellow'
			},
			{
				color: 'hsl(90, 75%, 60%)',
				label: 'Light green'
			},
			{
				color: 'hsl(120, 75%, 60%)',
				label: 'Green'
			},
			{
				color: 'hsl(150, 75%, 60%)',
				label: 'Aquamarine'
			},
			{
				color: 'hsl(180, 75%, 60%)',
				label: 'Turquoise'
			},
			{
				color: 'hsl(210, 75%, 60%)',
				label: 'Light blue'
			},
			{
				color: 'hsl(240, 75%, 60%)',
				label: 'Blue'
			},
			{
				color: 'hsl(270, 75%, 60%)',
				label: 'Purple'
			},
			{
				color: '#6D14EE',
				label: 'Helpilepsy - Purple'
			},
			{
				color: '#7F7F7F',
				label: 'Helpilepsy - Light grey'
			},
			{
				color: '#FFB714',
				label: 'Helpilepsy - Yellow'
			},
			{
				color: '#FF6767',
				label: 'Helpilepsy - Red'
			},
			{
				color: '#333333',
				label: 'Helpilepsy - Dark grey'
			},
			{
				color: '#a772f5',
				label: 'Helpilepsy - Light purple'
			},
			{
				color: '#410c8f',
				label: 'Helpilepsy - Dark purple'
			},
			{
				color: '#08CB00',
				label: 'Helpilepsy - Green'
			},
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
