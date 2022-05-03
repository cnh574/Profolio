$(() => {
  $("<container>").attr("id", "container").appendTo("body");

  $("<div>").attr("id", "leftContainer").appendTo("#container");
  $("<div>").attr("id", "section1").appendTo("#leftContainer");
  $("<h2>").text("Candace Harris").attr("id", "name").appendTo("#section1");
  $("<h3>")
    .text("Software Engineer Student")
    .attr("id", "title")
    .appendTo("#section1");

  $("<div>").attr("id", "section2").appendTo("#leftContainer");
  $("<h4>")
    .text("Contact Information")
    .attr("id", "contactInfo")
    .appendTo("#section2");
  $("<div>")
    .text("Indianapolis,IN")
    .attr("id", "city")
    .appendTo("#contactInfo");
  $("<div>").text("512-903-1587").attr("id", "num").appendTo("#contactInfo");
  $("<div>")
    .text("harriscandace2@gmail.com")
    .attr("id", "email")
    .appendTo("#contactInfo");
  $("<div>").attr("id", "section3").appendTo("#leftContainer");
  $("<h4>").text("Skills").attr("id", "skills").appendTo("#section3");
  $("<ul>").attr("id", "skills2").appendTo("#section3");
  $("<li>").text("Skill 1").appendTo("#skills2");
  $("<li>").text("Skill 2").appendTo("#skills2");
  $("<li>").text("Skill 3").appendTo("#skills2");
  $("<li>").text("Skill 4").appendTo("#skills2");
  $("<li>").text("Skill 5").appendTo("#skills2");
  $("<li>").text("Skill 6").appendTo("#skills2");
});

$(() => {
  $("<div>").attr("id", "rightContainer").appendTo("#container");
  $("<div>").attr("id", "bodyText").appendTo("#rightContainer");
  $("<h2>")
    .text("Employment History")
    .attr("id", "employment")
    .appendTo("#bodyText");
  $("<div>").text("Job Title 1").attr("id", "jobTitle").appendTo("#bodyText");
  $("<li>").text("Responsibility 1").appendTo($("#bodyText"));
  $("<li>").text("Responsibility  2").appendTo($("#bodyText"));
  $("<li>").text("Responsibility  3").appendTo($("#bodyText"));
  $("<div>").text("Job Title 2").attr("id", "jobTitle2").appendTo("#bodyText");
  $("<li>").text("Responsibility 1").appendTo($("#bodyText"));
  $("<li>").text("Responsibility 2").appendTo($("#bodyText"));
  $("<li>").text("Responsibility  3").appendTo($("#bodyText"));
  $("<div>").text("Job Title 3").attr("id", "jobTitle2").appendTo("#bodyText");
  $("<li>").text("Responsibilty  1").appendTo($("#bodyText"));
  $("<li>").text("Responsibility  2").appendTo($("#bodyText"));
  $("<li>").text("Responsibility  3").appendTo($("#bodyText"));
});
$(() => {
  $("<h2>").text("Education").attr("id", "education").appendTo("#bodyText");

  $("<li>").text("education 1").appendTo($("#bodyText"));
  $("<li>").text("education 2").appendTo($("#bodyText"));
  $("<li>").text("education 3").appendTo($("#bodyText"));
});

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
  $("#linkedin").on({
    mouseenter: function () {
      $("#linkedin").css("color", "Green");
    },
  });
});

$(() => {
  $("#Github").on({
    mouseenter: function () {
      $("#Github").css("color", "Green");
    },
  });
});
