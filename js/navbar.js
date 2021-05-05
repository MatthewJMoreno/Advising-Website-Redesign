let url = window.location.href;

if (url.includes('home')){
  document.getElementById('home-tab').classList.add('current-link');
} else if (url.includes('when')){
  document.getElementById('when-to-seek-advising-tab').classList.add('current-link');
} else if (url.includes('find')){
  document.getElementById('find-advising-tab').classList.add('current-link');
} else if (url.includes('additional')){
  document.getElementById('additional-resources-tab').classList.add('current-link');
}