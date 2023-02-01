function CriaTab(){
    tabela=document.getElementById("tabuleiro");
    for(c=0;c<6;c++){
        tr=document.createElement("tr");
        for(i=0;i<5;i++){
            td=document.createElement("td");
            td.setAttribute("id",""+c+i);
            if(c==0){
                td.style.border="2px solid white";
                td.style.background="transparent";
                if(i==0){
                    td.style.borderBottom="5px solid white";
                }
            }
            tr.appendChild(td);
        }
        tabela.appendChild(tr);
    }
}
function CriaTeclado(){
    letras=[['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L','ola'],['Z','X','C','V','B','N','M']];
    div=document.getElementById("teclado")
    for(c=0;c<3;c++){
        for(i=0;i<letras[c].length;i++){
            input=document.createElement("button");
            if(c==1 && i==letras[c].length-1){
                img=new Image();
                img.src="Imagens/apagar.png";
                img.style.width="15px";
                img.style.height="15px";
                img.style.color="white";
                img.style.filter="brightness(200%)"
                input.appendChild(img);
                input.setAttribute("onclick","if(pos[1]>0){TiraLetra();}");
            }
            else{
                texto=document.createTextNode(letras[c][i]);
                input.appendChild(texto);
                input.setAttribute("onclick","ColocaLetra('"+letras[c][i]+"')");
            }
            input.setAttribute("class","teclado");
            div.appendChild(input);
        }
        if(c==2){
            input=document.createElement("button");
            texto=document.createTextNode("ENTER");
            input.appendChild(texto);
            input.setAttribute("onclick","if(Posicao()==4){Testa()};");
            input.setAttribute("class","enter");
            div.appendChild(input);
        }
        br=document.createElement("br");
        div.appendChild(br);
    }

}
function ColocaLetra(letra){
    td=document.getElementById(""+pos[0]+pos[1]);
    if(td.style.borderBottom=="5px solid white"){
        console.log("entrou");
        td.innerHTML=letra;
        td.style.borderBottom="2px solid white";
        if(pos[1]<4){
            pos[1]++
            td=document.getElementById(""+pos[0]+pos[1]);
            td.style.borderBottom="5px solid white";
        }
    }
}
function Posicao(){
    for(c=0;c<5;c++){
        if(document.getElementById(""+pos[0]+c).innerHTML==""){
            break
        }
    }
    return c-1;
}
function TiraLetra(){
    posi=Posicao();
    td=document.getElementById(""+pos[0]+posi);
    td.innerHTML="";
    td.style.borderBottom="5px solid white";
    td=document.getElementById(""+pos[0]+(posi+1));
    td.style.borderBottom="2px solid white";
    pos[1]--;
    console.log(pos);
}
function SorteiaPalavra(){
    n=Math.floor(Math.random()*palavras.length);
    palavra=palavras[n].toUpperCase();
    console.log(palavra);
}
function TestaPalavra(){
    tof=true;
    for(c=0;c<5;c++){
        td=document.getElementById(""+pos[0]+c);
        if(td.style.backgroundColor!="green"){
            tof=false
        }
    }
    return tof;
}
function Testa(){
    for(c=0;c<5;c++){
        td=document.getElementById(""+pos[0]+c)
        if(td.innerHTML==palavra[c]){
            td.style="";
            td.style.backgroundColor="green";
            palavra=palavra.substring(0,c)+td.innerHTML.toLowerCase()+palavra.substring(c+1);
            console.log(palavra);
        }
        else{
            td.style="";
        }
    }
    for(c=0;c<5;c++){
        td=document.getElementById(""+pos[0]+c)
        posi=palavra.indexOf(td.innerHTML)
        if(posi!=-1){
            td.style="";
            td.style.backgroundColor="yellow";
            palavra=palavra.substring(0,posi)+palavra[posi].toLowerCase()+palavra.substring(posi+1);
            console.log(palavra);
        }
    }
    if(TestaPalavra()==true){
        tela=[
            '<div class="container">',
            '    <div class="box">',
            '        <h1>Meus Parabéns! Você ganhou!</h1>',
            '        <a href="index.html"><button class="botao2">Jogar Novamente</button></a>',
            '    <div>',
            '</div>'
        ]
        setTimeout(()=>{document.querySelector("body").innerHTML=tela.join("\n")},500);
    }
    else if(pos[0]==5){
        tela=[
            '<div class="container">',
            '    <div class="box">',
            '        <h1>Sinto muito! Você perdeu!</h1>',
            '        <a href="index.html"><button class="botao2">Tentar Novamente</button></a>',
            '    <div>',
            '</div>'
        ]
        setTimeout(()=>{document.querySelector("body").innerHTML=tela.join("\n")},500);
    }
    else{
        palavra=palavra.toUpperCase();
        pos=[pos[0]+1,0];
        for(c=0;c<5;c++){
            td=document.getElementById(""+pos[0]+c);
            td.style.border="2px solid white";
            td.style.background="transparent";
            if(c==0){
                td.style.borderBottom="5px solid white";
            }
        }
        
    }
}
var pos=[0,0], palavra;
var palavras=["carro","comer","fazer","fruta","termo","livro","tabua","porta","lapis","viver","boiar","lindo","farto","parto","sorte","casar","jogar","bolsa","manto","carta","cinto"];
CriaTab();
CriaTeclado();
SorteiaPalavra();


