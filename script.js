const xhr = new XMLHttpRequest()
var documento
const content = document.querySelector('.content')

xhr.responseType = "json"

xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    documento = xhr.response
    content.innerHTML = `<img src=${documento.avatar_url} alt="" class="content-image">`
  }
}

xhr.open('GET', 'https://api.github.com/users/mahflima')

xhr.send()