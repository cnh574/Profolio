$(() => {
  $("<div>").attr("id", "navbar").appendTo("body");
  const $div = $("<div>")
    .text("Home")
    .attr("id", "Home")
    .appendTo($("#navbar"));
  $("#Home").on("click", () => {
    location.href = "/Portfolio/resume/index.html";
  });
});

$(() => {
  $("<div>").text("Bio").attr("id", "Bio").appendTo($("#navbar"));
  $("#Bio").on("click", () => {
    location.href = "/Portfolio/bio/index.html";
  });
});

$(() => {
  $("<div>").text("Resume").attr("id", "Resume").appendTo($("#navbar"));
  $("#Resume").on("click", () => {
    location.href = "/Portfolio/resume/index.html";
  });
});
$(() => {
  $("<h1>").attr("id", "h1").text("Projects").appendTo("body");
});

$(() => {
  $("<container>").attr("id", "container").appendTo("body");
});
const url1 =
  "https://i.pinimg.com/564x/d4/d6/96/d4d696dc8591c0a2efbd21829e128b2f.jpg";
$(() => {
  const $div = $("<div>")
    .attr("id", "image1")
    .text("Project 1")
    .appendTo($("#container"));
  $(`<img src='${url1}'>`).attr("id", "green").appendTo("#image1");

  $("#image1").click(function () {
    alert("You are now exiting the page. ");
    location.href = "projects.com";
  });
});

//   const $div = $("<div>").attr("id", "image2");
//   const $container = $("<container2>").attr("id", "container2");
const url2 =
  "https://i.pinimg.com/564x/69/58/ac/6958acf19d9a9dc5a369dabddfd93790.jpg";

$(() => {
  const $div = $("<div>")
    .attr("id", "image2")
    .text("Project 2")
    .appendTo($("#container"));
  $(`<img src='${url2}'>`).attr("id", "orange").appendTo("#image2");

  $("#image2").click(function () {
    alert("You are now exiting the page. ");
    location.href = "projects.com";
  });
});

const url3 =
  "https://i.pinimg.com/564x/0c/be/62/0cbe6275a7a43c8f6e094e2d11fa739b.jpg";
$(() => {
  const $div = $("<div>")
    .attr("id", "image3")
    .text("Project 3")
    .appendTo($("#container"));
  $(`<img src='${url3}'>`).attr("id", "purple").appendTo("#image3");

  $("#image3").click(function () {
    alert("You are now exiting the page. ");
    location.href = "projects.com";
  });
});

//   $("<container1>").attr("id", "container1").appendTo("body");
//   $("<h1>").text("Projects").attr("id", "title").appendTo("#container1");

// $('body').css('background-image',"url("https://previews.123rf.com/images/eigens/eigens1909/eigens190900127/129457921-abstract-colorful-background-with-lavender-pastel-violet-and-rosy-brown-colors-can-be-used-for-postc.jpg")")

$(() => {
  $("<container2>").attr("id", "container2").appendTo("body");
  const $footer = $("<footer>").attr("id", "footer").appendTo($("body"));
  const $ul = $("<ul>")
    .attr("id", "contact")
    .text("Connect with me!")
    .appendTo($("#footer"));

  $(
    '<li><a href="https://www.linkedin.com/in/candace-harris-b99921124/">Linkedin</a></li>'
  )
    .attr("id", "linkedin")
    .appendTo("#contact");

  $('<li><a href="https://github.com/cnh574?tab=repositories">Github</a></li>')
    .attr("id", "Github")
    .appendTo("#contact");
});

$(() => {
  $("#h1").on({
    mouseenter: function () {
      $("#h1").css("color", "Green");
    },
  });
});

// // $(() => {
// //   const $footer = $("<footer>").attr("id", "footer").appendTo($("body"));
// //   const $ul = $("<ul>")
// //     .attr("id", "contact")
// //     .text("Connect with me!")
// //     .appendTo($("#footer"));
// //   // .appendTo($("#container"));
// //   $("#contact").append(
// //     '<li><a href="https://www.linkedin.com/in/candace-harris-b99921124/">Linkedin</a></li>'
// //   );
// //   $("#contact").append('<li><a href="#">Instagram</a></li>');
// //   $("#contact").append('<li><a href="#">Facebook</a></li>');
// // });
