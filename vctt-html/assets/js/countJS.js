/* Count JS */
var a = 0;

function countNumber() {
  var oTop = $(".count-number-card").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 3000,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
          complete: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
        }
      );
    });
    a = 1;
  }
}

countNumber();

$(window).scroll(function () {
  countNumber();
});

/* End of Count JS */
