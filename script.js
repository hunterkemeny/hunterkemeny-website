let home = document.getElementById('home');
let blog = document.getElementById('blog');
let philosophy = document.getElementById('philosophy');

home.onmouseover = function() {
    home.style.textDecoration = 'underline';
}

blog.onmouseover = function() {
    blog.style.textDecoration = 'underline';
}

philosophy.onmouseover = function() {
    philosophy.style.textDecoration = 'underline';
}

home.onmouseleave = function() {
    home.style.textDecoration = '';
}

blog.onmouseleave = function() {
    blog.style.textDecoration = '';
}

philosophy.onmouseleave = function() {
    philosophy.style.textDecoration = '';
}

