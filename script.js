const status = document.getElementById('status');

function update(){
  if(navigator.onLine){
    status.innerText = '🟢 You are Online';
    status.style.color = 'green';
  }else{
    status.innerText = '🔴 You are Offline';
    status.style.color = 'red';
  }
}

window.addEventListener('online', update);
window.addEventListener('offline', update);

update();
