===================================================================	

Jquery Sliding feedback panel by James Barnden
	http://www.jamqes.com/uni
	
	You are free to use, modify and redistribute this script
	    under the terms of the MIT license.

===================================================================

How to use:

1. Make sure you've included the JQuery library in your <head> section
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

2. Add the sliding-panel.js file to your <head> section (found in js folder)

3. Add the panelstyle.css file to your <head> section (found in css folder)

4. In your body, paste the following template:
<div class="panel-wrapper">
            <div class="panel-controller">
                <div class="tab-controller">
                    <span class="show">Feedback</span>
                    <span class="close">Close</span>
                </div>
            </div>
            <div class="panel-content">
                <div class="content clearfix"><iframe id="feedBackIframe" src="http://jamqes.com/uni"  scrolling="yes" frameborder = "no" width="700" height="400"></iframe>
            </div>
</div>

5. The code uses an iframe to display its content, to change the url the iframe will load, change the url in src="http://www.jamqes.com/uni" to your desired url.

6. All done!  You might want to play with the CSS to get the panel looking right for your site.


===================================================================