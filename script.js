
    $(document).ready(function() {
        // "ORDER NOW" ve "PORTFOLIO" butonlarına tıklandığında dropdown içeriği açılacak
        $("#nav-order-now-button, #nav-portfolio-button,#nav-contact-order").click(function() {
            // İlgili dropdown içeriğini göster veya gizle
            $(this).siblings(".dropdown-content, .portfolio-dropdown-content").toggle();
        });

        // Sayfa herhangi bir yere tıklandığında dropdown içeriklerini kapat
        $(document).on("hover", function(event) {
            if (!$(event.target).closest(".dropdown, .portfolio-dropdown").length) {
                $(".dropdown-content, .portfolio-dropdown-content").hide();
            }
        });
    });

    $(window).scroll(function() {
        $(".gallery-item").each(function() {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();
          if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $(this).fadeIn(1000);
            $(this).addClass("visible");
          } else if (!$(this).hasClass("visible")) {
            $(this).fadeOut(1000);
          }
        });
      });