function mostrar(){
    html=``;
    html=`
    <div><a href="autores.html"><Button class="bt-link">Autor</Button></a></div>
    <div><a href="resumo.html"><button class="bt-link">Resumo</button></a></div>
    <div><select name="cartas" id="cartas" onchange="location.href=this.value" class="bt-link">
            <option value="">Cartas</option>
            <option value="">Carta1</option>
            <option value="">Carta2</option>
        </select></div>
    <div><a href="autores.html"><button class="bt-link">Alunos</button></a></div>
    `
    document.getElementById("mobile").innerHTML = html;
}

document.getElementById('bt-mostrar').addEventListener('click', function(event){
    mostrar();
});
