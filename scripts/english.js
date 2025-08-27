(function(){
    function loadScript(url, callback) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = callback;
      script.src = url;
      document.head.appendChild(script);
    }
  
    function loadCSS(url) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    }
  
    function injectStyle(css) {
      var style = document.createElement("style");
      style.type = "text/css";
      style.appendChild(document.createTextNode(css));
      document.head.appendChild(style);
    }
  
    function showPopup() {
      console.log("popup para ingles exibido");
  
      const englishVersionUrl = "https://amathyzin.com/EN-US/index.html";
      const imageUrl = window.swalImageUrl || '../img/english.png';
  
      injectStyle(`
        .swal2-container {
          z-index: 2147483647 !important;
          position: fixed !important;
        }
        body.swal2-shown {
          overflow: hidden !important;
        }
      `);
  
      Swal.fire({
        title: "Switch to English version?",
        text: "Hey, we noticed that your connection is not from Brazil. Would you like to go to the English version of our site for better understanding?",
        imageUrl: imageUrl,
        imageWidth: 200,
        imageAlt: "English",
        showCancelButton: true,
        confirmButtonText: '<img src="https://flagcdn.com/us.svg" alt="US Flag" style="height:20px; vertical-align: middle; margin-right: 5px;"/> ENGLISH VERSION',
        cancelButtonText: 'Sair',
        background: '#fff'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = englishVersionUrl;
        } else {
          const now = new Date().getTime();
          localStorage.setItem("popupDismissedAt", now);
        }
      });
    }
  
    function detectCountry() {
      const dismissedAt = localStorage.getItem("popupDismissedAt");
      const now = new Date().getTime();
  
      if (dismissedAt && (now - dismissedAt) < 3 * 60 * 60 * 1000) {
        console.log("popup não será exibido (fechado recentemente)");
        return;
      }
  
      fetch("https://ipapi.co/json/")
        .then(res => res.json())
        .then(data => {
          if (data.country) {
            if (data.country !== "BR") {
              if (typeof Swal !== "undefined") {
                showPopup();
              } else {
                loadScript("https://cdn.jsdelivr.net/npm/sweetalert2@11", showPopup);
                loadCSS("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css");
              }
            } else {
              console.log("essa pessoa esta no brasil");
            }
          }
        })
        .catch(err => console.error("Erro ao detectar país", err));
    }
  
    window.addEventListener("load", function() {
      const loadingScreen = document.getElementById("loading-screen");
  
      if (loadingScreen && getComputedStyle(loadingScreen).display !== "none") {
        const observer = new MutationObserver(() => {
          if (getComputedStyle(loadingScreen).display === "none") {
            detectCountry();
            observer.disconnect();
          }
        });
        observer.observe(loadingScreen, { attributes: true, attributeFilter: ["style", "class"] });
      } else {
        detectCountry();
      }
    });
  })();
  