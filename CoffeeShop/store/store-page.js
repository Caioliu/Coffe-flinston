function getProductData() {
    let produtos = [];
    const url = "http://localhost:3333/produtos";
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        // Verifique se a resposta está vazia
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        
        const contentType = response.headers.get('content-type');
        
        // Verifique se a resposta contém dados JSON
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        } else {
            // Se não for JSON, retorne um objeto vazio ou outra manipulação adequada
            return {};
        }
    })
    .then(data => {
        // Faça algo com os dados, se necessário
        produtos = data;
        console.log(produtos);
        alert('Produtos obtidos com sucesso!');
        // Retorne os produtos se necessário
        return produtos;
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
}

function getCategoryData() {
    let produtos = [];
    const url = "http://localhost:3333/categorias";
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        // Verifique se a resposta está vazia
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        
        const contentType = response.headers.get('content-type');
        
        // Verifique se a resposta contém dados JSON
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        } else {
            // Se não for JSON, retorne um objeto vazio ou outra manipulação adequada
            return {};
        }
    })
    .then(data => {
        // Faça algo com os dados, se necessário
        produtos = data;
        console.log(produtos);
        alert('Produtos obtidos com sucesso!');
        // Retorne os produtos se necessário
        return produtos;
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });
}

function handleProductData() {
    const dados = getProductData();

    dados.then(produtos => {
        // Verifique se há produtos antes de prosseguir
        if (produtos && produtos.length > 0) {
            // Encontre a div container-produtos no DOM
            const containerProdutos = document.querySelector('.container-produtos');

            // Itere sobre os produtos e crie elementos HTML para cada um
            produtos.forEach(produto => {
                // Crie uma tabela para cada produto
                const tabelaProduto = document.createElement('table');

                // Crie uma linha (tr) para o produto
                const linhaProduto = document.createElement('tr');

                // Crie células (td) para cada atributo do produto
                const celulaNome = document.createElement('td');
                celulaNome.textContent = produto.nome;

                const celulaDescricao = document.createElement('td');
                celulaDescricao.textContent = produto.descricao;

                const celulaPreco = document.createElement('td');
                celulaPreco.textContent = produto.preco;

                // Adicione as células à linha
                linhaProduto.appendChild(celulaNome);
                linhaProduto.appendChild(celulaDescricao);
                linhaProduto.appendChild(celulaPreco);

                // Adicione a linha à tabela
                tabelaProduto.appendChild(linhaProduto);

                // Crie uma div row-produtos para cada produto
                const divProduto = document.createElement('div');
                divProduto.classList.add('row-produtos');
                divProduto.appendChild(tabelaProduto);

                // Adicione a divProduto ao containerProdutos
                containerProdutos.appendChild(divProduto);
            });
        } else {
            console.log('Nenhum produto encontrado.');
        }
    });
}

function handleCategoryData() {
    const dados = getCategoryData();

    dados.then(categorias => {
        const ulElement = document.getElementById('categorias-lista');

        categorias.forEach(categoria => {
            const liElement = document.createElement('li');
            const buttonElement = document.createElement('button');

            buttonElement.textContent = categoria.nome; // Substitua 'nome' pelo nome do atributo que contém o nome da categoria
            buttonElement.addEventListener('click', () => {
                // Lógica para lidar com o clique no botão da categoria, se necessário
                console.log(`Categoria selecionada: ${categoria.nome}`);
            });

            liElement.appendChild(buttonElement);
            ulElement.appendChild(liElement);
        });
    });
}

// Chame a função para iniciar o processo
handleCategoryData();

// Chame a função handleProductData para iniciar o processo
handleProductData();

