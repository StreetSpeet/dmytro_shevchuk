var elmnt = document.getElementById('timer');
function birthday(date) {
  return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
}
elmnt.innerHTML=birthday('1997-03-17');
