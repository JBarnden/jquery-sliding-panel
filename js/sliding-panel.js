/*
	Jquery Sliding feedback panel by James Barnden
	http://www.jamqes.com/uni
	
	You are free to use, modify and redistribute this script for both commercial and non-commercial purposes.
*/

(function($) {

    jQuery(document).ready(function() {

        Panel.init();

        $(document).on('click', '.tab-controller', function() {
             Panel.togglePanel();
        });

    });

    var Panel = {

        isVisible : false, //Flag to determine wether panel starts as open or closed, change to true to start with open panel.
        showMessage : null,
        hideMessage : null,
        animationDuration : 350, //Use this to change the length of time it takes for the panel to slide.
        animationEasing : 'linear', 

        init : function() {
			if (!this.isVisible){
        		this.hidePanel(true);
    		}
        }, //Checks the "isVisible" flag and promptly shuts it if necessary.

        showPanel : function() {
            $('.panel-wrapper').animate({
                bottom : 0
            }, Panel.animationDuration, Panel.animationEasing, function() {
                Panel.isVisible = true;
                Panel.updateTabMessage();
            });
        },
		
		hidePanel : function(snap) {
            $('.panel-wrapper').animate({
                bottom : -(Panel.getAnimationOffset())
            }, (snap ? 0: Panel.animationDuration), Panel.animationEasing, function() {
                Panel.isVisible = false;
                Panel.updateTabMessage();
            });
        },

        togglePanel : function() {
            ((this.isVisible) ? this.hidePanel(false) : this.showPanel)();
        },

        updateTabMessage : function() {
            if (this.isVisible) {
                $('.tab-controller .close').show();
                $('.tab-controller .show').hide();
            } else {
                $('.tab-controller .close').hide();
                $('.tab-controller .show').show();
            }
        },

        getAnimationOffset : function() {
            return $('.panel-content').height();
        }

    }

})(jQuery);