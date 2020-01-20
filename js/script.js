$(document).ready(
  function() {
    $('.drop_link').mouseenter(
      function() {
        $(this).children().addClass('active')
      }

    )
    $('.drop_link').mouseleave(
      function() {
        $(this).children().removeClass('active')
      }

    )
  }
)
