$(() => {
  const $h1 = $("<h1>").text("Welcome to my portfolio!").appendTo("body");
});

$(() => {
  //   const $btn1 = $("<btn1>").attr("id", "btn1");
  //   console.log($("#btn1"));
  $("#btn1").on("click", () => {
    location.href = "PASTE BIO .HTML";

    $("#btn2").on("click", () => {
      location.href = "Paste Resume link";

      $("#btn3").on("click", () => {
        location.href = "Paste Projects link";
      });
    });
  });
});

$(() => {
  const $div = $("<div>").attr("id", "popUp").text("Thanks").appendTo("body");

  $("#popUp").on("click", function () {
    alert(" Thanks for visiting my page and getting to know me! ");
  });
});

$(() => {
  $("<div>").attr("id", "ending").appendTo("body");
  const $footer = $("<footer>").attr("id", "footer").appendTo($("#ending"));
});
$(() => {
  const $ul = $("<ul>").attr("id", "contact").appendTo($("#footer"));
  $("#contact").append(
    '<li><a href="https://www.linkedin.com/in/candace-harris-b99921124/">Linkedin</a></li>'
  );
  $("#contact").append('<li><a href="#">Instagram</a></li>');
  $("#contact").append('<li><a href="#">Facebook</a></li>');
});
