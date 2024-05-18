function openIframe(window) {
    let iframe = document.getElementsByTagName('iframe')[0];
    let iframe1 = document.getElementsByTagName('iframe')[1];
    let close = document.getElementById('close');
    let close1 = document.getElementById('close1');
    if(window == 1){
      iframe.style.display = 'block';
      close.style.display = 'block';
    }
    else if(window == 2){
      iframe1.style.display = 'block';
      close1.style.display = 'block';
    }
}
function closeIframe() {
  let iframe = document.getElementsByTagName('iframe')[0];
  let iframe1 = document.getElementsByTagName('iframe')[1];
  let close = document.getElementById('close');
  let close1 = document.getElementById('close1');
  iframe.style.display = 'none';
  iframe1.style.display = 'none';
  close.style.display = 'none';
  close1.style.display = 'none';
}