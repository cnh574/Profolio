$(() => {
  $("<div>").attr("id", "navbar").appendTo("#container");
  $("<div>").attr("id", "btn2").text("Resume").appendTo("#navbar");
  $("#btn2").on("click", () => {
    location.href = "/Portfolio/Resumeindex.html";
  });
});

$(() => {
  $("<div>").attr("id", "btn3").text("Bio").appendTo("#navbar");
  $("#btn3").on("click", () => {
    location.href = "/Portfolio/bioindex.html";
  });
});

$(() => {
  $("<div>").attr("id", "btn1").text("Projects").appendTo("#navbar");
  $("#btn1").on("click", () => {
    location.href = "/Portfolio/projectindex.html";
  });
});

$(() => {
  $("h1").on({
    mouseenter: function () {
      $("h1").css("color", "pink");
    },
  });
});
