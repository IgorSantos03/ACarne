function mostrarIndex() {
    html = ``;
    html = `           
    <div class="links">
    <a href="#utf" onclick="window.location.reload()">Instituição</a>
    <a href="#prof" onclick="window.location.reload()">Professores e Alunos</a>
    <a href="#livro" onclick="window.location.reload()">Livro</a>
    <a href="#personagens" onclick="window.location.reload()">Personagens</a>
    <a href="#carta" onclick="window.location.reload()">Cartas</a>
</div>
`
    document.getElementById("mostra").innerHTML = html;
    mudar();
}

function mudar() {
    html = ``;
    html = `<button class="menu_icon" onclick="window.location.reload()"><img src="https://cdn-icons-png.flaticon.com/512/170/170275.png" id="menuIcon" alt="menu" class="icon"></button>`
    document.getElementById("menu").innerHTML = html;
}

document.getElementById("menu_link").addEventListener('click', function (event) {
    mostrarIndex();
});
