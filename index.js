var nameGet = localStorage.getItem('name')
  if (nameGet) {
    document.querySelector('#nameGet').innerHTML=nameGet
    console.log(nameGet);
  }else {
    console.log('no');
  }

  