function fazerPedido() {
    const telefoneLocal = '5511942442175'; 
    const form = document.getElementById("menupedidos");
    const formData = new FormData(form);

    const nomeCliente = formData.get('nomeCliente');
    const enderecoCliente = formData.get('enderecoCliente');
    const complemento = formData.get('complemento');
    const numeradaresidencia = formData.get("numeradaresidencia");
    const cep = formData.get("cep");
    const cidade = formData.get("cidade");

    // Verifica se os campos obrigatórios estão preenchidos
    if (!nomeCliente || !enderecoCliente) {
        alert("Por favor, preencha seu nome e endereço para continuar com o pedido.");
        return;
    }

    let mensagem = '*Olá, gostaria de fazer um pedido*:\n\n';
    let valorTotal = 0;

    // Itera sobre todos os itens do formulário para processar pastéis e bebidas
    formData.forEach((quantidade, item) => {
        if (quantidade > 0 && item) { // Verifica se a quantidade é válida e se o item não está vazio
            let preco = 0;
            let nomeFormatado = '';

            // Verifica se o item é um pastel
            if (item.startsWith('pastel-')) {
                const [, nome] = item.split('-').map(x => x.toLowerCase());

                switch (nome) {
                    case 'carne':
                        preco = 10.00;
                        break;
                    case 'queijo':
                        preco = 12.00;
                        break;
                    case 'frango':
                        preco = 11.00;
                        break;
                    case 'pizza':
                        preco = 10.00;
                        break;
                    case 'bauru':
                        preco = 10.00;
                        break;
                    case 'calabresa':
                        preco = 10.00;
                        break;
                    case 'catupiri':
                        preco = 12.50;
                        break;
                    case 'carnecomqueijo':
                        preco = 12.50;
                        break;
                    case 'palmito':
                        preco = 13.00;
                        break;
                    case 'palmitocomqueijo':
                        preco = 15.00;
                        break;
                    case 'carneseca':
                        preco = 13.00;
                        break;
                    case 'carnesecacomqueijo':
                        preco = 15.00;
                        break;
                    default:
                        preco = 0.00;
                }
                nomeFormatado = `Pastel de ${nome.charAt(0).toUpperCase() + nome.slice(1)}`;
            } 
            // Verifica se o item é uma bebida
            else if (item.startsWith('bebida-')) {
                const [, nome] = item.split('-').map(x => x.toLowerCase());

                switch (nome) {
                    case 'cocacola':
                        preco = 6.00;
                        break;
                    case 'skol':
                        preco = 8.00;
                        break;
                    case 'agua':
                        preco = 3.00;
                        break;
                    default:
                        preco = 0.00;
                }
                nomeFormatado = `Bebida ${nome.charAt(0).toUpperCase() + nome.slice(1)}`;
            }

            // Adiciona o item à mensagem apenas se o nome estiver definido e o preço for maior que zero
            if (nomeFormatado && preco > 0) {
                const quantidadeNum = parseInt(quantidade);
                const subtotal = quantidadeNum * preco;
                valorTotal += subtotal;

                mensagem += `Item: ${nomeFormatado}\nQuantidade: ${quantidadeNum}\nPreço Unitário: R$${preco.toFixed(2)}\nSubtotal: R$${subtotal.toFixed(2)}\n\n`;
            }
        }
    });

    // Verifica se algum item foi adicionado
    if (valorTotal === 0) {
        alert("Por favor, selecione ao menos um item (pastel ou bebida) válido para continuar com o pedido.");
        return;
    }

    // Adiciona o valor total e os dados do cliente à mensagem
    mensagem += `*Valor Total: R$${valorTotal.toFixed(2)}*\n`;
    mensagem += `\n*Dados do Cliente:*\nNome: ${nomeCliente}\nEndereço: ${enderecoCliente}, ${numeradaresidencia}, ${complemento}\nCEP: ${cep}\nCidade: ${cidade}`;

    // URL para enviar o pedido via WhatsApp
    const urlWhatsApp = `https://wa.me/${telefoneLocal}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp);
}


let mube = 1;

function con() {
    const confirme = document.getElementById("confirme");

    if (mube % 2 == 1) {
        confirme.classList.remove("teledeconfirmacao");
        confirme.classList.remove("teledeconfirmacaoff");
        confirme.classList.add("teledeconfirmacaoon");
    } else {
        confirme.classList.remove("teledeconfirmacaoon");
        confirme.classList.add("teledeconfirmacaoff");
    }

    mube++; 
}


let pop = 1;

function thepas(){
    const endercotelacli = document.getElementById("endercotelacli");

    if (pop % 2 == 1) {
        endercotelacli.classList.remove("teladerelco");
        endercotelacli.classList.remove("teladerelcovai");
        endercotelacli.classList.add("teladerelcovem");
    } else {
        endercotelacli.classList.remove("teladerelcovem");
        endercotelacli.classList.add("teladerelcovai");
    }

    pop++; 
}



let hsh = 1;
function themas(){
    const menuteble1 = document.getElementById("menuteble1");
    

    if (hsh % 2 == 1) {
        menuteble1.classList.remove("menu1");
        menuteble1.classList.remove("menu1off");
        menuteble1.classList.add("menu1on");
    } else {
        menuteble1.classList.remove("menu1on");
        menuteble1.classList.add("menu1off");
    }

    hsh++; 
}


function suport(){
    window.location = "https://wa.me/5511942442175";
}

function loca(){
    alert("Avenida Marginal, Itaquara Parque, Pirapora do Bom Jesus - SP, 06550-000");
}
function card(){
    window.location = "cardapio.html";
}

function final(){
    window.location = "carregabmeto.html";
}



function verificarHorario() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutosAtuais = agora.getMinutes();

  
    const aberturaHora = 8;
    const aberturaMinuto = 30;
    const fechamentoHora = 21;
    const fechamentoMinuto = 0;

 
    const estaAberto = (horaAtual > aberturaHora || (horaAtual === aberturaHora && minutosAtuais >= aberturaMinuto)) &&
                       (horaAtual < fechamentoHora || (horaAtual === fechamentoHora && minutosAtuais < fechamentoMinuto));

    const mensagemElemento = document.getElementById('mensagemmm');
    if (estaAberto) {
        mensagemElemento.textContent = 'ESTAMOS ABERTOS';
        mensagemElemento.style.color = 'greenyellow';
    } else {
        mensagemElemento.textContent = 'ESTAMOS FECHADO';
        mensagemElemento.style.color = 'red';
    }
}


verificarHorario();