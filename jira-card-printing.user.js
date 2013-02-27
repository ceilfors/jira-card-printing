// ==UserScript==
// @name        JIRA - Card print
// @namespace   https://github.com/ceilfors
// @description For printing JIRA cards, eliminating the unnecessaries, highlighting the necessary
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @include     http://eda-prod-hud02:*/jira/secure/Print.jspa*
// @updateURL	https://github.com/ceilfors/jira-card-printing/blob/master/jira-card-printing.meta.js
// @downloadURL	https://github.com/ceilfors/jira-card-printing/blob/master/jira-card-printing.user.js
// @version 	0.1
// ==/UserScript==

// Make them big
$("[id*='summary']").css('font-size', 30).children('div').css('overflow', 'visible').css('margin-bottom', '90px');
$("[id*='customfield']").css('font-size', 20);
$("[id*='assignee']").css('font-size', 20);

// Enable print CSS
$('body').css('-webkit-print-color-adjust', 'exact');

// Remove not important stuff
$("[id*='fixVersions']").hide();
$("[id*='status']").hide();
$("[id*='components']").hide();
$("[id*='timeestimate']").hide();
$("[id*='timeoriginalestimate']").hide();
$("[id*='timespent']").hide();
$("[id*='status']").hide();
$("[id*='timespent']").hide();
$('.gh-issue-inner').css('background-image', 'none');
$('.gh-subhead').css('background-image', 'none');
$('.gh-grabber').css('background-image', 'none');