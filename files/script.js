$(document).ready(function () {
  // ========Steps======== //
  const nextBtns = document.querySelectorAll('.next-btn');
  const secondStep = document.querySelector('.step2');

  function hideShowStep() {
    const prevStep = this.closest('.step');
    const nextStep = prevStep.nextElementSibling;

    prevStep.style.display = 'none';
    prevStep.classList.remove('active');
    nextStep.style.display = 'flex';
    nextStep.classList.add('active');
  }

  nextBtns.forEach(btn => {
    btn.addEventListener("click", hideShowStep);
  });

  // ========Resize function======== //
  (function init100vh() {
    function setHeight() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
  })();

  // ========Two parts together======== //
  $(".my-link").on('click touchstart', function (event) {
    event.preventDefault();
    $(".view-1").hide();
    $("#style1").attr("disabled", "disabled");
    $("#style2").removeAttr("disabled");
    $("body").removeAttr("class");
    $("body").removeAttr("style");
    $(".view-2").fadeTo("slow", 1, function () {
      $(".view-2").show();
      
      (function initCharactersCarousel() {
        var $carousel = $("#carouselCharacters");

        if ($.fn.slick && $carousel.length) {
          $carousel.slick({
            prevArrow:
              '<button type="button" class="slick-prev"><span>‹</span></button>',
            nextArrow:
              '<button type="button" class="slick-next"><span>›</span></button>',
            initialSlide: 1,
          });
        }
      })();
    });
  });
});