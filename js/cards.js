  if ($(window).width() > 479) {
    $(document).ready(function () {
      var list = $(".new-products__card");
      var numToShow = 20; //сколько показывать элементов
      var button = $(".show");
      var numInList = list.length;
      list.hide();
      if (numInList > numToShow) {
        button.show();
      }
      list.slice(0, 10).show();
      button.click(function () {
        var showing = list.filter(":visible").length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(":visible").length;
        if (nowShowing >= numInList) {
          button.hide();
          $(".new-products__inner").css("padding", "0 0 85px 0");
        }
      });
    });
    $(document).ready(function () {
      var list = $(".sale__card");
      var numToShow = 20; //сколько показывать элементов
      var button = $(".show2");
      var numInList = list.length;
      list.hide();
      if (numInList > numToShow) {
        button.show();
      }
      list.slice(0, 10).show();
      button.click(function () {
        var showing = list.filter(":visible").length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(":visible").length;
        if (nowShowing >= numInList) {
          button.hide();
          $(".sale__inner").css("padding", "0 0 85px 0");
        }
      });
    });
  }