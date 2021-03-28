let home = document.getElementById("home");
let blog = document.getElementById("blog");
let education = document.getElementById("education");

home.onmouseover = function () {
  home.style.textDecoration = "underline";
};

blog.onmouseover = function () {
  blog.style.textDecoration = "underline";
};

education.onmouseover = function () {
  education.style.textDecoration = "underline";
};

home.onmouseleave = function () {
  home.style.textDecoration = "none";
};

blog.onmouseleave = function () {
  blog.style.textDecoration = "none";
};

education.onmouseleave = function () {
  education.style.textDecoration = "none";
};
