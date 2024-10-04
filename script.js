function checarTipoTela() {
    const tipoTela = document.getElementById("tipoTela").value;
    const campoOutros = document.getElementById("campoOutros");
    campoOutros.style.display = (tipoTela === "Outros") ? "block" : "none";
}

function gerarCSV() {
    // Função auxiliar para criar o CSV
    const criarCSV = (dados) => {
        const linhas = dados.map(d => d.join(","));
        return linhas.join("\n");
    };

    // Dados a serem exportados
    const dados = [
        ["Seção", "Conteúdo"],
        ["1. Tipo de Tela", `
            1.1 Tipo: ${document.getElementById("tipoTela").value}
            1.2 Outro Tipo: ${document.getElementById("outroTipoTela").value || 'N/A'}
            1.3 Função: ${document.getElementById("funcaoTela").value}
            1.4 Responsável: ${document.getElementById("responsavelTela").value}
        `],
        ["2. Campos", ` 
            Nome do Campo: ${document.getElementById("nomeCampo").value}
            2.1 Tipo: ${document.getElementById("tipoCampo").value}
            2.2 Tamanho: ${document.getElementById("tamanhoCampo").value}
            2.3 Validações: ${document.getElementById("validacaoCampo").value}
            2.4 Restrições: ${document.getElementById("restricoesCampo").value}
            2.5 Valores Padrão: ${document.getElementById("valoresPadraoCampo").value}
            2.6 Eventos: ${document.getElementById("eventosCampo").value}
            2.7 Provedor de Dados: ${document.getElementById("provedorDadosCampo").value}
        `],
        ["3. Regras de Negócio", `
            3.1 Lógica de Processamento: ${document.getElementById("logicaProcessamento").value}
            3.2 Ações Condicionais: ${document.getElementById("acoesCondicionais").value}
            3.3 Permissões: ${document.getElementById("permissoes").value}
            3.4 Cálculos Automatizados: ${document.getElementById("calculosAutomatizados").value}
            3.5 Fluxo de Ação: ${document.getElementById("fluxoAcao").value}
        `],
        ["4. UI/UX (Interface e Experiência)", `
            4.1 Layout: ${document.getElementById("layout").value}
            4.2 Estilo: ${document.getElementById("estilo").value}
            4.3 Feedback Visual: ${document.getElementById("feedbackVisual").value}
            4.4 Navegação: ${document.getElementById("navegacao").value}
        `],
        ["5. Integração com Outros Sistemas", `
            5.1 APIs: ${document.getElementById("apis").value}
            5.2 Banco de Dados: ${document.getElementById("bancoDeDados").value}
            5.3 Outros Sistemas: ${document.getElementById("outrosSistemas").value}
        `],
        ["6. Desempenho e Escalabilidade", `
            6.1 Tempo de Resposta: ${document.getElementById("tempoResposta").value}
            6.2 Carga de Dados: ${document.getElementById("cargaDeDados").value}
        `],
        ["7. Mensagens de Erro e Logging", `
            7.1 Mensagens de Erro: ${document.getElementById("mensagensDeErro").value}
            7.2 Logging: ${document.getElementById("logging").value}
        `],
        ["8. Testes", `
            8.1 Critérios de Aceitação: ${document.getElementById("criteriosAceitacao").value}
            8.2 Cenários de Teste: ${document.getElementById("cenariosTeste").value}
        `],
        ["9. Links e Dependências", `
            9.1 Dependências: ${document.getElementById("dependencias").value}
            9.2 Outros Módulos/Telas: ${document.getElementById("outrosModulos").value}
        `]
    ];

    // Criação do CSV
    const csv = criarCSV(dados);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    // Criação do link para download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "relatorio.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
