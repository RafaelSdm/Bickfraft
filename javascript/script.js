console.log('teste de script')

const links = document.querySelectorAll('.header-menu a')



function ativarLink(link){
    
    const url = location.href;
    const href = link.href;


    


    if(url.includes(href) ){
        link.classList.add('ativo')

    }

    console.log(`url: ${url}`)
    console.log(`href: ${href}`)
}


links.forEach(ativarLink)




const parametros = new URLSearchParams(location.search);



function ativarProduto(item){
    const elemento = document.getElementById(item);

    if(item){
        elemento.checked = true;
    }
    console.log(item)
}



parametros.forEach(ativarProduto);

//console.log(parametros)