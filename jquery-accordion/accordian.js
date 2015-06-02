$(document).on("ready", function() {
	// find all tabs
	$(".headerTab").each(function(index,tab) {

		var $headerTab = $(tab)

		$headerTab.attr("data-tab", index)

		$( $(".content")[index]).attr('data-tab', index)

	})// end of $(.header)

	// Binding the CLick event to each headerTab
	$(".headerTab").on("click", function() {

		$(".headerTab").removeClass("active")

		$(this).addClass("active")

		$(".content").removeClass("active")

		$(".content[data-tab='" + $(this).attr("data-tab") + "']").addClass("active")

	})// end of Binding click event to each headerTab

	// Adding the active state to first headerTab/content when page loads
	$(".headerTab:eq(0), .content:eq(0)").addClass("active")

})// end of $(document)