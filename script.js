async function atualizarVagas() {
    try {
        // Exibe a animação de carregamento
        const vaga1Status = document.getElementById('statusVaga1');
        const vaga1Icon = document.getElementById('vaga1-icon');
        vaga1Status.classList.add('loading');
        vaga1Status.textContent = "Carregando...";

        const response = await fetch('vagas.json');
        if (!response.ok) throw new Error("Erro ao acessar o arquivo vagas.json");

        const data = await response.json();

        // Atualiza a Vaga 1
        if (data.vaga1 === 'ocupada') {
            vaga1Status.textContent = "Ocupada";
            vaga1Status.classList.remove('loading', 'livre');
            vaga1Status.classList.add('ocupada');
            vaga1Icon.style.backgroundImage = "url('carro-icon.png')"; // Substitua pela imagem do carro
        } else {
            vaga1Status.textContent = "Livre";
            vaga1Status.classList.remove('loading', 'ocupada');
            vaga1Status.classList.add('livre');
            vaga1Icon.style.backgroundImage = "none"; // Remove o carro
        }

    } catch (error) {
        console.error("Erro ao atualizar as vagas:", error);
        const vagaStatus = document.getElementById('statusVaga1');
        vagaStatus.textContent = "Erro ao carregar status!";
        vagaStatus.classList.remove('loading');
        vagaStatus.classList.add('ocupada');
    }
}

// Atualiza o status da vaga a cada 5 segundos
setInterval(atualizarVagas, 5000);
atualizarVagas();  // Chama uma vez inicialmente
