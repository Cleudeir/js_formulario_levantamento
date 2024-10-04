function checarTipoTela() {
    const tipoTela = document.getElementById("tipoTela").value;
    const campoOutros = document.getElementById("campoOutros");
    campoOutros.style.display = tipoTela === "Outros" ? "block" : "none";
}

function adicionarCampo() {
    const camposAdicionais = document.getElementById("camposAdicionais");
    const campoIndividual = document.createElement("div");
    campoIndividual.className = "campoIndividual";

    campoIndividual.innerHTML = `
    <div class="card">
        <label for="nomeCampo">Nome do Campo:</label>
        <input type="text" class="nomeCampo" placeholder="Nome de exibição e nome técnico" >
        
        <label for="tipoCampo">Tipo:</label>
        <input type="text" class="tipoCampo" placeholder="Texto, Numérico, Lista suspensa, etc." >
        
        <label for="tamanhoCampo">Tamanho:</label>
        <input type="text" class="tamanhoCampo" placeholder="Limite de caracteres ou tamanho do campo" >
        
        <label for="validacaoCampo">Validações:</label>
        <textarea class="validacaoCampo" placeholder="Regras de validação (obrigatório, formato específico, etc.)" ></textarea>
        
        <label for="restricoesCampo">Restrições:</label>
        <textarea class="restricoesCampo" placeholder="Campo desabilitado, só leitura, máscaras, etc." ></textarea>
        
        <label for="valoresPadraoCampo">Valores Padrão:</label>
        <input type="text" class="valoresPadraoCampo" placeholder="Valores que aparecem por padrão (se houver)">
        
        <label for="eventosCampo">Eventos:</label>
        <textarea class="eventosCampo" placeholder="Eventos ou triggers associados ao campo"></textarea>
        
        <label for="provedorDadosCampo">Provedor de Dados:</label>
        <input type="text" class="provedorDadosCampo" placeholder="Quais APIs ou fontes de dados alimentam este campo?">
        </div>
    `;
    
    camposAdicionais.appendChild(campoIndividual);
}
function gerarCSV() {
    const nomeFormulario = document.getElementById("nomeFormulario").value;
    const tipoTela = document.getElementById("tipoTela").value;
    const funcaoTela = document.getElementById("funcaoTela").value;
    const responsavelTela = document.getElementById("responsavelTela").value;
    const campos = document.querySelectorAll(".campoIndividual");
    
    // Initialize an array to store key-value pairs
    const csvData = [];

    // Add general form information
    csvData.push(["Nome da Tela", nomeFormulario]);
    csvData.push(["Tipo de Tela", tipoTela]);
    csvData.push(["Função", funcaoTela]);
    csvData.push(["Responsável", responsavelTela]);

    // Add Campos information
    csvData.push(["", ""]); // Blank row for separation
    csvData.push(["Campo", "Valor"]);
    campos.forEach(campo => {
        csvData.push(["", ""]); // Blank row for separation
        const nomeCampo = campo.querySelector(".nomeCampo").value;
        const tipoCampo = campo.querySelector(".tipoCampo").value;
        const tamanhoCampo = campo.querySelector(".tamanhoCampo").value;
        const validacaoCampo = campo.querySelector(".validacaoCampo").value;
        const restricoesCampo = campo.querySelector(".restricoesCampo").value;
        const valoresPadraoCampo = campo.querySelector(".valoresPadraoCampo").value;
        const eventosCampo = campo.querySelector(".eventosCampo").value;
        const provedorDadosCampo = campo.querySelector(".provedorDadosCampo").value;

        // Push each field's values as key-value pairs
        csvData.push([`Nome`, nomeCampo]);
        csvData.push([`Tipo`, tipoCampo]);
        csvData.push([`Tamanho`, tamanhoCampo]);
        csvData.push([`Validações`, validacaoCampo]);
        csvData.push([`Restrições`, restricoesCampo]);
        csvData.push([`Valores Padrão`, valoresPadraoCampo]);
        csvData.push([`Eventos`, eventosCampo]);
        csvData.push([`Provedor de Dados`, provedorDadosCampo]);
    });

    // Add regras de negocio
    csvData.push(["", ""]); // Blank row for separation
    csvData.push(["Regras de Negócio", ""]);
    for (const [key, value] of Object.entries({
        logicaProcessamento: document.getElementById("logicaProcessamento").value,
        acoesCondicionais: document.getElementById("acoesCondicionais").value,
        permissoes: document.getElementById("permissoes").value,
        calculosAutomatizados: document.getElementById("calculosAutomatizados").value,
        fluxoAcao: document.getElementById("fluxoAcao").value
    })) {
        csvData.push([key, value]);
    }

    // Add UI/UX
    csvData.push(["", ""]); // Blank row for separation
    csvData.push(["UI/UX", ""]);
    for (const [key, value] of Object.entries({
        layout: document.getElementById("layout").value,
        estilo: document.getElementById("estilo").value,
        feedbackVisual: document.getElementById("feedbackVisual").value,
        navegacao: document.getElementById("navegacao").value
    })) {
        csvData.push([key, value]);
    }

    // Add integração
    csvData.push(["", ""]); // Blank row for separation
    csvData.push(["Integração", ""]);
    for (const [key, value] of Object.entries({
        apis: document.getElementById("apis").value,
        bancoDeDados: document.getElementById("bancoDeDados").value,
        outrosSistemas: document.getElementById("outrosSistemas").value
    })) {
        csvData.push([key, value]);
    }

    // Add desempenho
    csvData.push(["", ""]); // Blank row for separation
    csvData.push(["Desempenho", ""]);
    for (const [key, value] of Object.entries({
        tempoResposta: document.getElementById("tempoResposta").value,
        cargaDeDados: document.getElementById("cargaDeDados").value
    })) {
        csvData.push([key, value]);
    }

    // Add mensagens de erro
    csvData.push(["", ""]); // Blank row for separation
    csvData.push(["Mensagens de Erro", ""]);
    for (const [key, value] of Object.entries({
        mensagensDeErro: document.getElementById("mensagensDeErro").value,
        logging: document.getElementById("logging").value
    })) {
        csvData.push([key, value]);
    }

    // Add testes
    csvData.push(["", ""]); // Blank row for separation
    csvData.push(["Testes", ""]);
    for (const [key, value] of Object.entries({
        criteriosAceitacao: document.getElementById("criteriosAceitacao").value,
        cenariosTeste: document.getElementById("cenariosTeste").value
    })) {
        csvData.push([key, value]);
    }

    // Add links e dependências
    csvData.push(["", ""]); // Blank row for separation
    csvData.push(["Links e Dependências", ""]);
    for (const [key, value] of Object.entries({
        dependencias: document.getElementById("dependencias").value,
        linksUteis: document.getElementById("linksUteis").value
    })) {
        csvData.push([key, value]);
    }

    // Convert the data to CSV format
    const csvContent = csvData.map(e => e.join(",")).join("\n");

    // Create a Blob and trigger the download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", `${nomeFormulario}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

