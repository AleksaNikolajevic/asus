  window.console = window.console || function(t) {};
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }

  <script id="rendered-js" >
  window.addEventListener("load", function () {
    // store tabs variable
    var theTabs = document.querySelectorAll("ul.nav-tabs > li");
  
    function theTabClicks(tabClickEvent) {
      var clickedTab = tabClickEvent.currentTarget;
      var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
      var theTabs = tabParent.querySelectorAll("ul.nav-tabs > li");
      for (var i = 0; i < theTabs.length; i++) {if (window.CP.shouldStopExecution(0)) break;
        theTabs[i].classList.remove("active");
      }window.CP.exitedLoop(0);
  
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      var contentPanes = tabParent.querySelectorAll(".tab-pane");
      for (i = 0; i < contentPanes.length; i++) {if (window.CP.shouldStopExecution(1)) break;
        contentPanes[i].classList.remove("active");
      }window.CP.exitedLoop(1);
      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute("href");
      var activePane = tabParent.querySelector(activePaneId);
      activePane.classList.add("active");
    }
    for (i = 0; i < theTabs.length; i++) {if (window.CP.shouldStopExecution(2)) break;
      theTabs[i].addEventListener("click", theTabClicks);
    }window.CP.exitedLoop(2);
  });
  //# sourceURL=pen.js
      </script>