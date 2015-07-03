/* 
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 4/18/2015
*/

$(document).ready(function() {
	// Constants
	var NUMBER_OF_SECTIONS = 15;
	var COMMON_MD = 0;
	var GITHUB_MD = 1;
	var REDDIT_MD = 2;
	var EDITOR_ID_PREFIX = "editor_";
	var CK_SHOW_HTML_ID_PREFIX = "ck_show_html_";
	var BTN_SHOW_ANSWER_ID_PREFIX = "btn_answer_";
	var RENDER_PAD_ID_PREFIX = "render_pad_";
	var HTML_PAD_ID_PREFIX = "html_pad_";
	
	// Set up fullpage.js
	$('#fullpage').fullpage({
		navigation: false,
		slidesNavigation: true,
		keyboardScrolling: false,
		controlArrows: false,
		scrollOverflow: true
	});
	
	// Set up progress bar
	var nanobar = new Nanobar( {id:'bar', bg:'#000'} );
	var advancedPercentage = (CURRENT_SECTION / NUMBER_OF_SECTIONS) * 100;
	if (advancedPercentage == 0) advancedPercentage = 0.01;
	nanobar.go( advancedPercentage );
	
	// Set up next/previous buttons
	$(".button-next").on('click', function(event){
	  $.fn.fullpage.moveSlideRight();
	});
	$(".button-previous").on('click', function(event){
	  $.fn.fullpage.moveSlideLeft();
	});
	
	// Open interest point descriptions
	$('.cd-single-point').children('a').on('click', function(event){
		event.preventDefault();
		var selectedPoint = $(this).parent('li');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.cd-single-point.is-open').removeClass('is-open').addClass('visited');
		}
	});
	// Close interest point descriptions
	$('.cd-close-info').on('click', function(event){
		event.preventDefault();
		$(this).parents('.cd-single-point').eq(0).removeClass('is-open').addClass('visited');
	});
	
	// Set up markdown editors
	$('.editor').each(function() {
		var elementId = $(this)[0].id;
		var exerciseId = getExerciseId(elementId);
		
		// Set up ace editor
		var editor = ace.edit(elementId);
		editor.setStyle("ace-overrides");
		editor.setTheme("ace/theme/xcode");
		editor.getSession().setMode("ace/mode/markdown");
		editor.getSession().setUseWrapMode(true);
		editor.setShowPrintMargin(false);
		editor.renderer.setShowGutter(false);
		editor.setHighlightActiveLine(false);
		editor.$blockScrolling = Infinity;
		
		// Set up event to update markdown/html when the user writes something
		$(this).on('keyup', function(event){
			var md = generateMd(exerciseId);
			
			if(exercises[exerciseId] != undefined && md.trim() == exercises[exerciseId]["answer"]) {
				if(exerciseId == "15-1") {
					swal({title:"Excelect job!", text: "You are now a Markdown Master", type: "success"});
				} else {
					swal({title:"Good job!", text: "That's correct. Now you can go to the next exercise.", type: "success"});
				}
			}
		});
		
		// For the initial text
		generateMd(exerciseId);
	});
	
	// Set up pads where html will be shown
	$('.html-pad').each(function() {
		var elementId = $(this)[0].id;
		
		// Set up ace editor
		var htmlEditor = ace.edit(elementId);
		htmlEditor.setStyle("ace-overrides");
		htmlEditor.setTheme("ace/theme/xcode");
		htmlEditor.getSession().setMode("ace/mode/html");
		htmlEditor.getSession().setUseWrapMode(true);
		htmlEditor.setShowPrintMargin(false);
		htmlEditor.renderer.setShowGutter(false);
		htmlEditor.setHighlightActiveLine(false);
		htmlEditor.setReadOnly(true);
		htmlEditor.$blockScrolling = Infinity;
	});
	
	// Set up show answer buttons
	$('.button-answer').each(function() {
		var elementId = $(this)[0].id;
		var exerciseId = getExerciseId(elementId);
		var htmlPadElement = $("#" + RENDER_PAD_ID_PREFIX + exerciseId)
		
		// Set up click event for the button
		$(this).on('click', function(event){
			ace.edit(EDITOR_ID_PREFIX + exerciseId).getSession().setValue(exercises[exerciseId]["correctMd"]);
			generateMd(exerciseId);
		});
	});
	
	// Set up show html checkboxes
	$('.show-html').each(function() {
		var elementId = $(this)[0].id;
		var exerciseId = getExerciseId(elementId);
		
		// Set up click event for the checkbox
		$(this).on('click', function(event){
			var toggle = 'hidden';
			if( $("#" + HTML_PAD_ID_PREFIX + exerciseId).css('visibility') == 'hidden' ) {
				toggle = 'visible';
			}
			$("#" + HTML_PAD_ID_PREFIX + exerciseId).css('visibility', toggle);
			generateMd(exerciseId);
		});
	});
	
	// Set up next lesson buttons checkboxes 
	$('.button-next-lesson').each(function() {
		// Set up click event for the checkbox
		$(this).on('click', function(event){
			$.fn.fullpage.moveSectionDown();
		});
	});
	
	
	function generateMd(exerciseId) {
		var text = ace.edit(EDITOR_ID_PREFIX + exerciseId).getSession().getValue();
		var mdFlavour = configureExtensions(exerciseId);
		
		// Set up marked options
		if(mdFlavour == GITHUB_MD) {
			marked.setOptions({
			  //renderer: new marked.Renderer(),
			  gfm: true,
			  tables: true,
			  breaks: false,
			  pedantic: false,
			  sanitize: true,
			  smartLists: false,
			  smartypants: false,
			  highlight: function(code, lang) {
				var languageToDetect = typeof(lang) !== "undefined" ? lang.toLowerCase() : '';
				return hljs.highlightAuto(code, [languageToDetect]).value;
			  }
			});
		} else {
			marked.setOptions({
			  //renderer: new marked.Renderer(),
			  gfm: false,
			  tables: false,
			  breaks: false,
			  pedantic: false,
			  sanitize: true,
			  smartLists: false,
			  smartypants: false
			});
		}
		
		var html = "";
		if(mdFlavour == REDDIT_MD) {
			html = SnuOwnd.getParser().render(text);
		} else {
			html = marked(text);
		}
		$("#" + RENDER_PAD_ID_PREFIX + exerciseId).html("").html(html);
		
		var chk = $("#" + CK_SHOW_HTML_ID_PREFIX + exerciseId)[0];
		if(typeof(chk) !== 'undefined' && chk.checked) {
			ace.edit(HTML_PAD_ID_PREFIX + exerciseId).getSession().setValue(html);
		}
		
		return html;
	}
	
	function getExerciseId(elementId) {
		var exerciseId = elementId.substring(elementId.lastIndexOf("_") + 1);
		
		return exerciseId;
	}
	
	function configureExtensions(exerciseId) {
		// The format of exerciseId is lesson-exercise
		var lesson = parseInt(exerciseId.split("-")[0], 10);
		var mdFlavor = GITHUB_MD;
		
		// From lesson 10 onward, extensions have to be enable
		if(lesson == 13) {
			mdFlavor = REDDIT_MD;
		}
		else if (lesson < 10 || lesson == 15) {
			mdFlavor = COMMON_MD; 
		}
		
		return mdFlavor;
	}
});