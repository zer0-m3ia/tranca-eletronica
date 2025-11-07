document.addEventListener('DOMContentLoaded', () => {
    const circle = document.getElementById('conteudo-dinamico');
    const status = document.getElementById('status');
    const paragraph = document.getElementById('paragrafo-dinamico');
    const title = document.getElementById('titulo-dinamico');

    if (!circle || !status || !paragraph || !title) return;

    // Exemplo: ajustar conteúdo e cor dinamicamente
    title.textContent = 'clube da luiza';
    circle.innerHTML = 'X'; // ou manter o SVG conforme necessário
    setCircleColor('#ff0000'); // vermelho -> acesso negado
    status.textContent = 'acesso negado';
    status.style.color = '#ff0000';
    paragraph.textContent = 'Detalhes sobre o acesso';

    function setCircleColor(color) {
        circle.style.backgroundColor = color;
        circle.style.borderColor = color;
        // ajustar cor do ícone (se estiver usando currentColor)
        circle.style.color = color === '#ff0000' ? '#182527' : '#182527';
    }

    // Exemplo: função pública para mudar no futuro
    window.updateAccess = (allowed) => {
        if (allowed) {
            setCircleColor('#198754');
            circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/></svg>`;
            status.textContent = 'acesso autorizado';
            status.style.color = '#198754';
        } else {
            setCircleColor('#ff0000');
            circle.textContent = 'X';
            status.textContent = 'acesso negado';
            status.style.color = '#ff0000';
        }
    };
});
