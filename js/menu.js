/* 
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 4/18/2015
*/

$(document).ready(function() {
	var template = '<div id="fp-nav" class="right" style="margin-top: -163.5px;"> \
		<ul> \
			<li> \
				<a onclick="location.href=\'index.html\'" class="{{? it.section == 0 }}active{{?}}"><span></span><div class="fp-tooltip right">Intro</div></a> \
			</li> \
			<li> \
				<a onclick="location.href=\'emphasis.html\'" class="{{? it.section == 1 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Emphasis</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'headings.html\'" class="{{? it.section == 2 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Headings</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'links.html\'" class="{{? it.section == 3 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Links</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'images.html\'" class="{{? it.section == 4 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Images</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'code.html\'" class="{{? it.section == 5 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Code</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'blockquotes.html\'" class="{{? it.section == 6 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Blockquotes</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'paragraphs.html\'" class="{{? it.section == 7 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Paragraphs</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'lists.html\'" class="{{? it.section == 8 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Lists</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'nestedLists.html\'" class="{{? it.section == 9 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Nested Lists</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'autolinking.html\'" class="{{? it.section == 10 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Autolinking</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'strikethrough.html\'" class="{{? it.section == 11 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Strikethrough</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'githubCodeBlocks.html\'" class="{{? it.section == 12 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Github Code Blocks</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'redditSuperscript.html\'" class="{{? it.section == 13 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Reddit Superscript</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'tables.html\'" class="{{? it.section == 14 }}active{{?}}"><span></span></a><div class="fp-tooltip right">Tables</div> \
			</li> \
			<li> \
				<a onclick="location.href=\'end.html\'" class="{{? it.section == 15 }}active{{?}}"><span></span></a><div class="fp-tooltip right">The End</div> \
			</li> \
		</ul> \
	</div>';
	var menuFn = doT.template(template);
	$(document.body).append(menuFn({section: CURRENT_SECTION}));
});