// Height and Width  
// console.log(`Width: ${window.innerWidth}. Height: ${window.innerHeight}).`);

$(window).resize(function () {
  $(window).scrollTop(100);
  // console.log(`Width: ${window.innerWidth}. Height: ${window.innerHeight}).`);
});

var character1 = "./files/img/mob/12.1.jpg",
  character2 = "./files/img/mob/12.2.jpg",
  character3 = "./files/img/mob/12.3.jpg",
  character4 = "./files/img/mob/12.4.jpg",
  character5 = "./files/img/mob/12.5.jpg";

var stepCurrent,
  stepNext;

(function stepActive() {
  $("[data-btn]").on("click", function () {
    if ($(this).hasClass("padv1215-btn--hidden")) return;
    nextStep();
  });

  function nextStep() {
    var $progressBar = $(".progressBar"),
      stepsQty = $(".padv1215-step").length,
      progress = 100 / (stepsQty - 1);

    stepCurrent = $(".padv1215-step.active").data("step");
    stepNext = $(".padv1215-step.active").next().data("step");

    // $progressBar.css('width', progress * stepCurrent + "%");
    $(".padv1215-step.active")
      .removeClass("active")
      .next()
      .addClass("active");

    if (stepNext === 2) {
      $(".padv1215-hidden").removeClass("padv1215-hidden");
    } else if (stepNext === 6) {
      $("#character1").attr("src", character1);
      $("#character2").attr("src", character2);
      $("#character3").attr("src", character3);
      $("#character4").attr("src", character4);
      $("#character5").attr("src", character5);
    }

    if (stepNext === stepsQty - 1) {
        $(".padv1215-btn--hidden").removeClass("padv1215-btn--hidden");
    }
  }
})();

