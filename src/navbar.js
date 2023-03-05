fetch('navbar.html')
    .then(response => response.text())
    .then(text = "hello")
    .then(text => { document.getElementById('nav-placeholder').innerHTML = text; })
    .catch(error => {
        console.error('error loading navbar');
    });
