function CriaTab(){
    tabela=document.getElementById("tabuleiro");
    for(c=0;c<6;c++){
        tr=document.createElement("tr");
        for(i=0;i<5;i++){
            td=document.createElement("td");
            td.setAttribute("id",""+c+i);
            if(c==0){
                td.style.border="2px solid black";
                td.style.background="transparent";
                td.setAttribute("onclick","pos=["+c+","+i+"];Seleciona();");
                if(i==0){
                    td.style.borderBottom="5px solid black";
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
                img.style.width="10px";
                img.style.height="10px";
                input.appendChild(img);
                input.setAttribute("onclick","TiraLetra()");
            }
            else{
                texto=document.createTextNode(letras[c][i]);
                input.appendChild(texto);
                input.setAttribute("onclick","ColocaLetra('"+letras[c][i]+"')");
            }
            div.appendChild(input);
        }
        br=document.createElement("br");
        div.appendChild(br);
    }

}
function ColocaLetra(letra){
    td=document.getElementById(""+pos[0]+pos[1]);
    if(td.style.borderBottom=="5px solid black"){
        td.innerHTML=letra;
        td.style.borderBottom="2px solid black";
        if(pos[1]<4){
            pos[1]++
            td=document.getElementById(""+pos[0]+pos[1]);
            td.style.borderBottom="5px solid black";
        }
    }
}
function Seleciona(){
    td=document.getElementById(""+pos[0]+pos[1]);
    for(c=0;c<5;c++){
        td1=document.getElementById(""+pos[0]+c);
        td1.style.borderBottom="2px solid black";
    }
    td.style.borderBottom="5px solid black";
}
var pos=[0,0];
CriaTab();
CriaTeclado();
