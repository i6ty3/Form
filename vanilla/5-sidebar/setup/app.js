const menutoggle = document.querySelector('.sidebar-toggle');
const cancelbutton = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');

menutoggle.addEventListener('click', fun);

function fun() {
    sidebar.classList.toggle('show-sidebar');
}
cancelbutton.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
