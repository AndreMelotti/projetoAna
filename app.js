document.addEventListener('DOMContentLoaded', () => {

    // CONTROLAR O SUMIÇO TEMPORÁRIO DA FOLHA
    document.querySelectorAll('.folha').forEach(folha => {
        folha.addEventListener('mouseenter', () => {

            // se a folha já foi "morta", não faz nada
            if (folha.classList.contains('folha-sumida')) return;

            // some devagar
            folha.style.opacity = '0';
            folha.style.zIndex = '0';   // coloca ATRÁS da joaninha

            // volta depois de 4 segundos (caso não tenha sido morta)
            setTimeout(() => {
                if (!folha.classList.contains('folha-sumida')) {
                    folha.style.opacity = '1';
                    folha.style.zIndex = '5';
                }
            }, 550); //  segundos
        });
    });


    // TRANSFORMAR JOANINHA EM GOSMA E MATAR A FOLHA
    document.querySelectorAll('.joaninha').forEach(j => {
        j.addEventListener('click', () => {

            // troca imagem
            j.src = './img/gosma.png';
            j.style.width = '80px';
            j.style.zIndex = '6';

            // pegar folha logo antes no HTML
            const folha = j.previousElementSibling;

            if (folha && folha.classList.contains('folha')) {

                // marca como morta
                folha.classList.add('folha-sumida');

                // garante que não reapareça
                folha.style.opacity = '0';
                folha.style.zIndex = '0';
                folha.style.pointerEvents = 'none';
            }
        });
    });

});
