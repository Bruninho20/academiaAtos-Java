
//função de alerta
function exibirAlerta(){
    alert('O Formulário foi enviado')
}
document.getElementById('1').onclick = exibirAlerta

var nome = document.getElementById('nome')
var sobrenome = document.getElementById('sobrenome')
var login = document.getElementById('login')

var loginl = ''
var login2 = ''

nome.addEventListener('input' , function(){ 

    login1 =  nome.value
    login.value = login1 + '.' + login2
})

sobrenome.addEventListener('input' , function(){ 

    login2 =  sobrenome.value
    login.value = login1 + '.' + login2
})

const btn =document.getElementById('1');
btn.addEventListener('click' , function(e){ 
    
    document.getElementById("login").value = document.getElementById("nome").value + '.' + document.getElementById("sobrenome").value;

    e.preventDefault()

    const nome = document.querySelector('#nome');
    const nomeImpre = nome.value; 
    
    const sobreNome = document.querySelector('#sobrenome')
    const sobreNomeImpre = sobreNome.value

    const email = document.querySelector('#e-mail')
    const emailImpre = email.value

    const login = document.querySelector('#login')
    const loginImpre = login.value

    const senha = document.querySelector('#senha')
    const senhaImpre = senha.value

    const cep = document.querySelector('#cep')
    const cepImpre = cep.value

    const endereco = document.querySelector('#endereco')
    const enderecoImpre = endereco.value

    const comple = document.querySelector('#complemento')
    const compleImpre = comple.value

    const bairro=document.querySelector('#bairro')
    const bairroImpre = bairro.value

    const cidade = document.querySelector('#cidade')
    const cidadeImpre = cidade.value

    const estado = document.querySelector('#estado')
    const estadoImpre = estado.value

    const github = document.querySelector('#github')
    const githubImpre = github.value

    const academia = document.querySelector('#academia')
    const academiaImpre = academia.value

    const prof = document.querySelector('#professor')
    const profImpre = prof.value

    const termos = document.querySelector('#termoslegais')
    const termosImpre = termos.value

    const info = document.querySelector('input[name=info-email]:checked')
    const infoImpre = info.value

    document.getElementById('nome-enviado').innerText=nomeImpre
    document.getElementById('sobrenome-enviado').innerText=sobreNomeImpre
    document.getElementById('email-enviado').innerText=emailImpre
    document.getElementById('login-enviado').innerText=loginImpre
    document.getElementById('senha-enviado').innerText=senhaImpre
    document.getElementById('cep-enviado').innerText=cepImpre
    document.getElementById('endereco-enviado').innerText=enderecoImpre
    document.getElementById('complemento-enviado').innerText=compleImpre
    document.getElementById('bairro-enviado').innerText=bairroImpre
    document.getElementById('cidade-enviado').innerText=cidadeImpre
    document.getElementById('estado-enviado').innerText=estadoImpre
    document.getElementById('github-enviado').innerText=githubImpre
    document.getElementById('academia-enviado').innerText=academiaImpre
    document.getElementById('professor-enviado').innerText=profImpre
    document.getElementById('termoslegais-enviado').innerText=termosImpre
    document.getElementById('info-enviado').innerText=infoImpre
    
});








