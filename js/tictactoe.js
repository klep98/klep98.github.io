var control = true;

function Chturn(boton)
{
    if(control)
    {
        boton.value="O";
        document.getElementById("turno").innerHTML="Turno X";
    }
    else
    {
        boton.value="X";
        document.getElementById("turno").innerHTML="Turno O";
    }
    boton.disabled=true;
    control=!control;
    Verificar();
}

function Verificar()
{
    var botones = document.querySelectorAll("input[type=button]");
    if(botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value!="")
    {
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall();
    }
    else if(botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value!="")
    {
        document.getElementById("turno").innerHTML = `Gana ${botones[3].value}`;
        Dall();
    }
    else if(botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value!="")
    {
        document.getElementById("turno").innerHTML = `Gana ${botones[6].value}`;
        Dall();
    }
    else if(botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value!="")
    {
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall();
    }
    else if(botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value!="")
    {
        document.getElementById("turno").innerHTML = `Gana ${botones[1].value}`;
        Dall();
    }
    else if(botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value!="")
    {
        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;
        Dall();
    }
    else if(botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value!="")
    {
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall();
    }
    else if(botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value!="")
    {
        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;
        Dall();
    }
}

function Dall()
{
    var botones = document.querySelectorAll("input[type=button]");
    for(let i=0;i<botones.length;i++)
    {
        botones[i].disabled=true;
    }
}