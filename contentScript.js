function runScript() {
  // Inject the button into every comment's header
  $(".details").append("<button class='collapser'>Collapse</button>");

  // Also, re-add whenever a link is clicked
  // this is because dev.to uses AJAX loading and I can't figure out a simple solution
  // to the problem
  $("a").click(function(e) {
    runScript();
  });

  $(".collapser").click(function(e) {
    // First, collapse the parent comment's body and actions, leaving the header
    $(this)
      .parent()
      .parent()
      .children(":nth-child(2), :nth-child(3)")
      .slideToggle();

    // Next, collapse all children
    $(this)
      .parent()
      .parent()
      .parent()
      .children(":not(:first-child)")
      .slideToggle();

    // Finally, change the text on the button to reflect the state
    if ($(this).text() == "Collapse") {
      $(this).text("Expand");
    } else {
      $(this).text("Collapse");
    }
  });
}

// initial run to get it going
runScript();
