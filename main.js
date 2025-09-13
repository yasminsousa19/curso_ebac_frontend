document.addEventListener("DOMContentLoaded", function () {
    const avatar = document.querySelector("#avatar");
    const nome = document.querySelector("#nome");
    const usuario = document.querySelector("#usuario");
    const repositorios = document.querySelector("#repositorios");
    const seguidores = document.querySelector("#seguidores");
    const seguindo = document.querySelector("#seguindo");
    const verGithub = document.querySelector("#ver-github");

    fetch("https://api.github.com/users/yasminsousa19")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            avatar.src = data.avatar_url;
            nome.innerText = data.name;
            usuario.innerText = "@" + data.login;
            repositorios.innerText = data.public_repos;
            seguidores.innerText = data.followers;
            seguindo.innerText = data.following;
            verGithub.href = data.html_url;
        })
});

