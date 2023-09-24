


// 1. изменение размера текста при двойном клике
    $(document).ready(function() {
  $(".w3-container").dblclick(function() {
    if ($(this).css("font-size") === "24px") {
      $(this).css("font-size", "");
    } else {
      $(this).css("font-size", "24px");
    }
  });
});


// 2. изменение прозрачности при прокрутке tour dates
var scrollDirection = 0;

var tour = document.getElementById("tour");
var tourDistance = tour.offsetTop; // расстояние элемента от начала страницы

window.addEventListener("scroll", function() {
    var scroll = window.scrollY || document.documentElement.scrollTop;

    if (scroll > scrollDirection) {
        // Прокрутка вниз
        if (scroll > tourDistance) {
            var opacity = 1 - ((scroll - tourDistance) / 1600);
            tour.style.opacity = opacity;
        }
    } else {
        // Прокрутка вверх
        if (scroll > tourDistance) {
            var opacity = 1 - ((scroll - tourDistance) / 1600);
            tour.style.opacity = opacity;
        }
    }

    scrollDirection = scroll;
});

// 3. search
    $(document).ready(function() {
        $(".search").hover(
            function() {
                
                $(this).css("transform", "scale(1.5)");
                $(this).css("opacity", "0.5");
            },
            function() {
                
                $(this).css("transform", "scale(1)");
                $(this).css("opacity", "1");
            }
        );
    });


// 4. Эффект при отправке формы
  const contactForm = document.querySelector('form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Форма отправлена!');
  });

// 5. скрытие карты
  $(document).ready(function() {
  
  $(".fa-facebook-official").click(function() {
    $(".w3-image").slideToggle("slow");
    
  });
});

// 6. contact text
$(document).ready(function() {
  $(".color").hover(function() {
    $(this).css("color", "#d36262");
  }, function() {
    
    $(this).css("color", "");
  });
});

  // 1. аним заголовка после загрузки страницы
  function animBand(element) {
  var text = element.text();
  element.empty();
  text.split('').forEach(function(char, index) {
    var letter = $('<span class="animLetter">' + char + '</span>').hide();
    element.append(letter);
    letter.delay(index * 200).fadeIn(3600);
  });
}
  $(document).ready(function () {
    var band = $('.w3-container.w3-content.w3-center.w3-padding-64 h2.w3-wide:contains("THE BAND")');
    animBand(band);
  });

// 2. аним img
  document.addEventListener("DOMContentLoaded", function () {
    var image = document.querySelectorAll(".w3-round");

    image.forEach(function (element) {
        gsap.set(element, { rotationY: 180, opacity: 0.2 });
        gsap.to(element, {
            rotationY: 0, 
            opacity: 1, 
            duration: 2.5, 
            ease: "power2.out", 
            delay: 0.9, 
        });
    });
});









//эти скрипты изначально были в исходном хтмл:

    // Automatic Slideshow - change image every 4 seconds
    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
    }

    // Used to toggle the menu on small screens when clicking on the menu button
    function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
    }

    // When the user clicks anywhere outside of the modal, close it
    var modal = document.getElementById('ticketModal');
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
