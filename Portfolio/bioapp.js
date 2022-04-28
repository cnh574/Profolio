$(() => {
  $(() => {
    const $btn4 = $("<button>")
      .text("home")
      .attr("id", "home")
      .appendTo($("body"));
    $("#home").on("click", () => {
      location.href = "#";
    });
  });
  const $container = $("<container>").attr("id", "container").appendTo("body");
  $("<div>").attr("id", "name").appendTo("#container");
  const $h1 = $("<h1>")
    .text("Hi, I'm Candace.")
    .attr("id", "h1")
    .appendTo($("body"));
  //   const $h3 = $("<h3>")
  //     .attr("id", "h3")
  //     .text("Aspiring Developer")
  //     .appendTo($("#name"));
  $("<div>").attr("id", "p").appendTo($("#container"));
  const $p = $("<p>")
    .attr("id", "1st")
    .text(
      "I am a thriving individual always looking to expand my knowledge and understanding of the world around me.Learning new things excite me. I've never been one to back down from a challenge.I like solving  problems and enjoy being able to see  results in real time. This has led me to taking the first step in my journey and  enrolling in a software engineering course. Upon the completion of my course I hope to find a developer role that will allow me to continue building on what I\ve learned thus far, as well as challenge me to become a better developer. Venturing into the unknown  is what excites me the most. Whether that be professionally or in my personal life."
    )
    .appendTo($("#p"));
  $("<p>")
    .attr("id", "2nd")
    .text(
      "Over the years I've gotten a chance to meet and interact with diverse sets of individuals from my traveling adventures. I love to travel! I get to experience new things and learn about different cultures. Seeing how others may live their daily lives so differently while still working toward the same goals is intriguing. I feel like traveling has helped me to evolve my thinking and see the world differently. It has deeply impacted me personally as well as professionally.I personally feel it  Improved my communication, leadership and team building skills. "
    )
    .appendTo($("#p"));
  $("<p>")
    .attr("id", "3rd")
    .text(
      "I've been able to improve customer satisfaction rates in one of my previous roles by implementing better communication tactics and  educating others about local community resources. I value teamwork and open communication. Honestly, it's the  only way my husband and I are able to manage our 5year daughter. My family’s support is another reason why I’ve gotten to where I am today and I will continue to work hard everyday to ensure I can provide for them and be a role model to my daughter. "
    )
    .appendTo($("#p"));
});
const $div = $("<div>").attr("id", "image");
const url = "https://avatarfiles.alphacoders.com/822/82242.png";

$(() => {
  const $div = $("<div>").attr("id", "image").appendTo($("#container"));
  $(`<img src='${url}'>`).appendTo("#image");
});

$(() => {
  const $btn4 = $("<button>")
    .text("Next")
    .attr("id", "next")
    .appendTo($("#container"));
  $("#next").on("click", () => {
    location.href = "#";
  });
});

$(() => {
  const $footer = $("<footer>").attr("id", "footer").appendTo($("body"));
  const $ul = $("<ul>").attr("id", "contact").appendTo($("#footer"));
  // .appendTo($("#container"));
  $("#contact").append(
    '<li><a href="https://www.linkedin.com/in/candace-harris-b99921124/">Linkedin</a></li>'
  );
  $("#contact").append('<li><a href="#">Instagram</a></li>');
  $("#contact").append('<li><a href="#">Facebook</a></li>');
});
