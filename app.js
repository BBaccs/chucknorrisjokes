document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  
  const number = document.querySelector('input[type="number"]').value;
  // console.log(number);

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){

    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);

      let output = '';

      if(response.type === 'success'){

        response.value.forEach(function(joke) {
          output += `
            <li>${joke.joke}</li>
          `;
        });
      } else {
        output += '<li>try again</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }

    // const body = document.getElementById('body');
    // const form = document.getElementById('form');
    // const div = document.createElement('div');

    // body.appendChild('div');

    // body.insertBefore(div, form)

    // div.innerHTML = `<div>${xhr.responseText}</div>`;

  }

  // xhr.onerror = function(){

  // }

  xhr.send();

  e.preventDefault();
}	
