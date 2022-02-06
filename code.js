function cambiarColor()
{
    console.log("start")
    var bodycolor=document.body.style.backgroundColor
    var textoColor=document.getElementById("changable").style.color
    if(bodycolor!=="rgba(0, 0, 0, 0.9)")
    {
        document.body.style.backgroundColor="rgba(0, 0, 0, 0.9)"
    }else
    {
        document.body.style.backgroundColor="rgba(19, 19, 18, 0.233)"
    }

    if(textoColor!=="silver")
    {
        document.getElementById("changable").style.color="silver"
    }else
    {
        document.getElementById("changable").style.color="black"
    }

    console.log("end")
   
}