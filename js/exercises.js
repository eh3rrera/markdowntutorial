/* 
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 4/18/2015
*/

// Exercise data
var exercises = {
	"1-1": {
		answer: "<p>The music video for Rihanna&#39;s song <strong>American Oxygen</strong> depicts various moments from American history, including the inauguration of Barack Obama.</p>",
		correctMd: "The music video for Rihanna's song **American Oxygen** depicts various moments from American history, including the inauguration of Barack Obama."
	}, 
	"1-2": {
		answer: "<p>Pearl Schiff couldn&#39;t find an American publisher for her second novel after her first made <strong><em>The New York Times</em> Best Seller</strong> list.</p>",
		correctMd: "Pearl Schiff couldn't find an American publisher for her second novel after her first made **_The New York Times_ Best Seller** list."
	}, 
	"1-3": {
		answer: "<p>TODAY ONLY! Pizzas *20% OFF*</p>",
		correctMd: "TODAY ONLY! Pizzas \\*20% OFF*"
	}, 
	"2-1": {
		answer: "<h2 id=\"april-18-1938\">April 18, 1938</h2>\n<p>Superman made his debut in Action Comics #1.</p>",
		correctMd: "##April 18, 1938\n\nSuperman made his debut in Action Comics #1."
	}, 
	"3-1": {
		answer: "<p>The <a href=\"http://www.ur.ac.rw\">University of Rwanda</a> was formed in 2013 through the merger of Rwanda&#39;s seven public institutions of higher education.</p>",
		correctMd: "The [University of Rwanda](http://www.ur.ac.rw) was formed in 2013 through the merger of Rwanda's seven public institutions of higher education."
	}, 
	"3-2": {
		answer: "<p><a href=\"http://en.wikipedia.org/w/index.php?title=Hurricane\">Hurricane</a> Erika was the strongest and longest-lasting tropical cyclone in the 1997 Atlantic <a href=\"http://en.wikipedia.org/w/index.php?title=Hurricane\">hurricane</a> season.</p>",
		correctMd: "[Hurricane][1] Erika was the strongest and longest-lasting tropical cyclone in the 1997 Atlantic [hurricane][1] season.\n[1]:http://en.wikipedia.org/w/index.php?title=Hurricane"
	}, 
	"4-1": {
		answer: "<p><img src=\"http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png\" alt=\"Wikipedia\" title=\"Wikipedia\"></p>",
		correctMd: "![Wikipedia](http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png \"Wikipedia\")"
	}, 
	"5-1": {
		answer: "<p>What&#39;s the result of <code>c=a+++++b;</code>?</p>",
		correctMd: "What's the result of `c=a+++++b;`?"
	}, 
	"5-2": {
		answer: "<p>Try this:</p>\n<pre><code>a^=b;\nb^=a;\na^=b;\n</code></pre>",
		correctMd: "Try this:\n\n    a^=b;\n    b^=a;\n    a^=b;"
	},  
	"6-1": {
		answer: "<blockquote>\n<p>The quote:</p>\n<blockquote>\n<p>&quot;Somewhere, something incredible is waiting to be known&quot;</p>\n</blockquote>\n<p>Has been ascribed to Carl Sagan.</p>\n</blockquote>",
		correctMd: "> The quote:\n>\n>> \"Somewhere, something incredible is waiting to be known\"\n> \n>Has been ascribed to Carl Sagan."
	}, 
	"6-2": {
		answer: "<blockquote>\n<p>JavaScript has two sets of equality operators: === and !==, and their evil twins == and !=. The good ones work the way you would expect. If the two operands are of the same type and have the same value, then === produces true and !== produces false. The evil twins do the right thing when the operands are of the same type, but if they are of different types, they attempt to coerce the values. the rules by which they do that are complicated and unmemorable. These are some of the interesting cases:</p>\n<pre><code>&#39;&#39; == &#39;0&#39;           // false\n0 == &#39;&#39;             // true\n0 == &#39;0&#39;            // true\n\nfalse == &#39;false&#39;    // false\nfalse == &#39;0&#39;        // true\n\nfalse == undefined  // false\nfalse == null       // false\nnull == undefined   // true\n</code></pre></blockquote>",
		correctMd: "> JavaScript has two sets of equality operators: === and !==, and their evil twins == and !=. The good ones work the way you would expect. If the two operands are of the same type and have the same value, then === produces true and !== produces false. The evil twins do the right thing when the operands are of the same type, but if they are of different types, they attempt to coerce the values. the rules by which they do that are complicated and unmemorable. These are some of the interesting cases:\n>\n>     '' == '0'           // false\n    0 == ''             // true\n    0 == '0'            // true\n>\n    false == 'false'    // false\n    false == '0'        // true\n>\n    false == undefined  // false\n    false == null       // false\n    null == undefined   // true"
	}, 
	"7-1": {
		answer: "<p>Actress Amy Adams has been nominated five times for an Academy Award.</p>\n<p>265 million people kick a football in association football matches every year.</p>",
		correctMd: "Actress Amy Adams has been nominated five times for an Academy Award.\n\n265 million people kick a football in association football matches every year."
	}, 
	"7-2": {
		answer: "<p>Two roads diverged in a yellow wood,<br>And sorry I could not travel both<br>And be one traveler, long I stood<br>And looked down one as far as I could<br>To where it bent in the undergrowth</p>",
		correctMd: "Two roads diverged in a yellow wood,  \nAnd sorry I could not travel both  \nAnd be one traveler, long I stood  \nAnd looked down one as far as I could  \nTo where it bent in the undergrowth"
	},
	"8-1": {
		answer: "<ul>\n<li>The Slovene botanist Fran Jesenko died while doing research for Triglav National Park, which he helped establish.</li>\n<li>The entrance porch of the Shankaragaurishvara Temple in Patan in Jammu and Kashmir, built in the late ninth century, has intricately sculpted carvings that appear freshly chiseled.</li>\n<li>The contralto Maria Radner, who died in the Germanwings plane crash, performed Wagner&#39;s Wesendonck Lieder at his villa, Wahnfried.</li>\n</ul>",
		correctMd: "* The Slovene botanist Fran Jesenko died while doing research for Triglav National Park, which he helped establish.\n* The entrance porch of the Shankaragaurishvara Temple in Patan in Jammu and Kashmir, built in the late ninth century, has intricately sculpted carvings that appear freshly chiseled.\n* The contralto Maria Radner, who died in the Germanwings plane crash, performed Wagner's Wesendonck Lieder at his villa, Wahnfried."
	}, 
	"8-2": {
		answer: "<p>4 steps to better sleep:</p>\n<ol>\n<li>Stick to a sleep schedule</li>\n<li>Create a bedtime ritual</li>\n<li>Get comfortable</li>\n<li>Manage stress</li>\n</ol>",
		correctMd: "4 steps to better sleep:\n\n1. Stick to a sleep schedule\n2. Create a bedtime ritual\n3. Get comfortable\n4. Manage stress"
	},
	"9-1": {
		answer: "<ol>\n<li>In a large skillet, brown onion and ground beef over medium heat. Add spaghetti sauce, and simmer 15 minutes.</li>\n<li>Preheat the oven to 350 degrees F (175 degrees C). Butter a 9x13 inch baking dish. Layer as follows:<ul>\n<li>1/2 of the ziti</li>\n<li>Provolone cheese</li>\n<li>Sour cream</li>\n<li>1/2 sauce mixture</li>\n<li>Remaining ziti</li>\n<li>Mozzarella cheese and</li>\n<li>Remaining sauce mixture.</li>\n</ul>\n</li>\n<li>Bake for 30 minutes in the preheated oven, or until cheeses are melted.</li>\n</ol>",
		correctMd: "1. In a large skillet, brown onion and ground beef over medium heat. Add spaghetti sauce, and simmer 15 minutes.\n2. Preheat the oven to 350 degrees F (175 degrees C). Butter a 9x13 inch baking dish. Layer as follows:\n * 1/2 of the ziti\n * Provolone cheese\n * Sour cream\n * 1/2 sauce mixture\n * Remaining ziti\n * Mozzarella cheese and\n * Remaining sauce mixture.\n3. Bake for 30 minutes in the preheated oven, or until cheeses are melted."
	}, 
	"9-2": {
		answer: '<ol>\n<li>CSS<pre><code> .s1 {\n     font-size:80px;\n     color: blue;\n }\n</code></pre></li>\n<li>HTML<pre><code>&lt;span class="s1"&gt;A Paragraph&lt;/span&gt;\n</code></pre></li>\n<li>JS:<pre><code>$(&quot;.s1&quot;).each(function(idx, el) {\n     text = $(el).text();\n     console.log(text);\n}\n</code></pre></li>\n</ol>',
		correctMd: "1. CSS\n        .s1 {\n            font-size:80px;\n            color: blue;\n        }\n2. HTML\n       <span class=\"s1\">A Paragraph</span>\n3. JS:\n       $(\".s1\").each(function(idx, el) {\n            text = $(el).text();\n            console.log(text);\n       }"
	},
	"11-1": {
		answer: "<p>Esther Ballestrino, the former boss of <del>Jorge Mario Bergoglio</del> Pope Francis, was thrown from an aircraft by the Argentine security services in 1977.</p>",
		correctMd: "Esther Ballestrino, the former boss of ~~Jorge Mario Bergoglio~~ Pope Francis, was thrown from an aircraft by the Argentine security services in 1977."
	}, 
	"12-1": {
		answer: '<pre><code class="lang-ruby"><span class="hljs-comment"># Generates array of primes up to the square root of N</span>\n\nprimes = [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]\n\n(<span class="hljs-number">4</span>..<span class="hljs-constant">Math</span>.sqrt(<span class="hljs-constant">N</span>).floor).each <span class="hljs-keyword">do</span> |i|\n    (<span class="hljs-number">0</span>..primes.length-<span class="hljs-number">1</span>).each <span class="hljs-keyword">do</span> |j|\n        <span class="hljs-keyword">if</span> i % primes[j] == <span class="hljs-number">0</span>\n            isitprime = <span class="hljs-number">0</span>\n            <span class="hljs-keyword">break</span>\n        <span class="hljs-keyword">else</span> \n            isitprime = <span class="hljs-number">1</span>\n        <span class="hljs-keyword">end</span>        \n        <span class="hljs-keyword">end</span>\n    <span class="hljs-keyword">if</span> isitprime == <span class="hljs-number">1</span>\n        primes &lt;&lt; i\n    <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">end</span>\n</code></pre>',
		correctMd: "```ruby\n# Generates array of primes up to the square root of N\n \nprimes = [2,3]\n \n(4..Math.sqrt(N).floor).each do |i|\n	(0..primes.length-1).each do |j|\n		if i % primes[j] == 0\n			isitprime = 0\n			break\n		else \n			isitprime = 1\n		end		\n		end\n	if isitprime == 1\n		primes << i\n	end\nend\n```"
	}, 
	"13-1": {
		answer: "<p>40<sup>x - 6x + 2</sup> + 7 = 100</p>",
		correctMd: "40^(x - 6x + 2) + 7 = 100"
	}, 
	"14-1": {
		answer: "<table>\n<thead>\n<tr>\n<th>2000</th>\n<th>2010</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>50</td>\n<td>30</td>\n</tr>\n</tbody>\n</table>",
		correctMd: "|2000|2010|\n|----|----|\n|50|30|"
	},
	"14-2": {
		answer: '<table>\n<thead>\n<tr>\n<th style="text-align:right">On the left</th>\n<th style="text-align:right">On the right</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:right">88</td>\n<td style="text-align:right">99</td>\n</tr>\n</tbody>\n</table>',
		correctMd: "|On the left|On the right|\n|----------:|-----------:|\n|88|99|"
	},
	"14-3": {
		answer: '<table>\n<thead>\n<tr>\n<th style="text-align:left">Left Column</th>\n<th style="text-align:center">Center Column</th>\n<th style="text-align:right">Right Column</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left">one</td>\n<td style="text-align:center">two</td>\n<td style="text-align:right">three</td>\n</tr>\n<tr>\n<td style="text-align:left"><strong>four</strong></td>\n<td style="text-align:center"><strong>five</strong></td>\n<td style="text-align:right"><strong>six</strong></td>\n</tr>\n<tr>\n<td style="text-align:left">seven</td>\n<td style="text-align:center">eight</td>\n<td style="text-align:right">nine</td>\n</tr>\n</tbody>\n</table>',
		correctMd: "|Left Column|Center Column|Right Column|\n|:----------|:-----------:|-----------:|\n|one|two|three|\n|**four**|**five**|**six**|\n|seven|eight|nine|"
	}, 
	"15-1": {
		answer: '<h2 id="markdown">Markdown</h2>\n<p><strong>Markdown</strong> is a markup language with plain text formatting syntax designed so that it can be converted to <em>HTML</em> and many other formats using a tool by the same name.</p>\n<h3 id="history">History</h3>\n<p>John Gruber, with substantial contributions from Aaron Swartz, created the <strong>Markdown</strong> language in 2004 with the goal of enabling people</p>\n<blockquote>\n<p>&quot;To write using an easy-to-read, easy-to-write plain text format, and optionally convert it to structurally valid <em>XHTML</em> (or <em>HTML</em>&gt;).&quot;</p>\n</blockquote>\n<p>Sites such as:</p>\n<ul>\n<li><a href="http://github.com">http://github.com</a></li>\n<li><a href="http://reddit.com">http://reddit.com</a></li>\n<li><a href="http://stackexchange.com">http://stackexchange.com</a></li>\n</ul>\n<p>Use variants of <strong>Markdown</strong> to facilitate discussion between users.</p>\n<h3 id="standardization">Standardization</h3>\n<p>There is no clearly defined <strong>Markdown</strong> standard. From 2012 through 2014, a group of people including Jeff Atwood launched what Atwood characterized as a standardization effort, a new dialect named <code>CommonMark</code>.</p>\n<p>Adapted from <a href="http://en.wikipedia.org/wiki/Markdown">http://en.wikipedia.org/wiki/Markdown</a></p>',
		correctMd: '##Markdown\n\n**Markdown** is a markup language with plain text formatting syntax designed so that it can be converted to *HTML* and many other formats using a tool by the same name.\n###History\nJohn Gruber, with substantial contributions from Aaron Swartz, created the **Markdown** language in 2004 with the goal of enabling people\n>"To write using an easy-to-read, easy-to-write plain text format, and optionally convert it to structurally valid *XHTML* (or *HTML*>)."\n\nSites such as:\n\n* [http://github.com](http://github.com)\n* [http://reddit.com](http://reddit.com)\n* [http://stackexchange.com](http://stackexchange.com)\n\nUse variants of **Markdown** to facilitate discussion between users.\n\n###Standardization\nThere is no clearly defined **Markdown** standard. From 2012 through 2014, a group of people including Jeff Atwood launched what Atwood characterized as a standardization effort, a new dialect named `CommonMark`.\n\nAdapted from [http://en.wikipedia.org/wiki/Markdown](http://en.wikipedia.org/wiki/Markdown)'
		/**
		##Markdown

**Markdown** is a markup language with plain text formatting syntax designed so that it can be converted to *HTML* and many other formats using a tool by the same name.
###History
John Gruber, with substantial contributions from Aaron Swartz, created the **Markdown** language in 2004 with the goal of enabling people
>"To write using an easy-to-read, easy-to-write plain text format, and optionally convert it to structurally valid *XHTML* (or *HTML*>)."

Sites such as:

* [http://github.com](http://github.com)
* [http://reddit.com](http://reddit.com)
* [http://stackexchange.com](http://stackexchange.com)
 
Use variants of **Markdown** to facilitate discussion between users.

###Standardization
There is no clearly defined **Markdown** standard. From 2012 through 2014, a group of people including Jeff Atwood launched what Atwood characterized as a standardization effort, a new dialect named `CommonMark`.

Adapted from [http://en.wikipedia.org/wiki/Markdown](http://en.wikipedia.org/wiki/Markdown)
		**/
	}
};