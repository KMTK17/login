let  usuario = 'Kmtk';
let  contraseña = '123';


document.getElementById('ingresar').addEventListener('click', ()=>{
    
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;


if(user == usuario && pass == contraseña){

    alert("Bienvenido");
    setTimeout(()=>{

        location = 'welcome.html'},1000);
    

}else{

    alert('Usuario o contrañesa incorrecto');
    document.querySelector('#message').style.display = 'block';
    
    setTimeout(()=>{document.querySelector('#message').style.display = 'none'},3000);

}
})

document.getElementById('pass').addEventListener('mouseenter',mostrar);

function mostrar(){

    document.getElementById('pass').type ='text';   

}

document.getElementById('pass').addEventListener('mouseleave',ocultar);

function ocultar(){

    document.getElementById('pass').type ='password';   

}

document.getElementById('remenber').addEventListener('change',function(z){
    if (z.target.checked == true){
        alert("Desea que recordemos sus datos")
    }
})

