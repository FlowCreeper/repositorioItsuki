para rodar este codigo e nescessario instalar as dependencias atravez do comando:
npm install react-bootstrap bootstrap @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom recharts@alpha express

# seleção de problema

ordenação de listas

# implementação dos algoritimos

Merge sort / .sort() [nativo js] 
obs: dentro do arquivo provaLuciene.js

# geração de dados de entrada

(for) dentro do [handleClick( )]
tamanho da lista inserido via front-end e a seleção de ordenação ou desordem feito via front-end

# (OPCIONAL) Medição de Desempenho

feito em volta das chamadas de funções MargeSort() && .sort()

# Análise de Complexidade 

function handleClick() {
  let array = []; // Inicializa o array vazio                                           c1
  let min = 0; // Define o valor mínimo para os números aleatórios                      c2
  let max = 1000000; // Define o valor máximo para os números aleatórios                c3
  let resultados = []; // Lista para armazenar os resultados de cada algoritmo          c4
  let inicio, fim; // Variáveis para medir o tempo de execução                          

  // Função Merge Sort
  const mergeSort = (array) => {
    if (array.length <= 1) {
      return array; // Caso base: se o array tiver 1 ou 0 elementos, já está ordenado
    }

    const middle = Math.floor(array.length / 2); // Calcula o índice do meio 
    const left = mergeSort(array.slice(0, middle)); // Ordena a metade esquerda recursivamente
    const right = mergeSort(array.slice(middle)); // Ordena a metade direita recursivamente

    return merge(left, right); // Mescla as duas metades
  };

  // Função para mesclar dois arrays ordenados
  const merge = (left, right) => {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // Compara os elementos de ambos os arrays e insere o menor no resultado
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // Adiciona os elementos restantes de cada array ao resultado
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  // Gera números aleatórios e os insere no array
  for (let i = 0; i < parseInt(quantidade); i++) {                                      c5 + c6(n+1) + c7n
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min; // Gera um número aleatório entre min e max c8n +c9n + c10n + c11n + c12n
    array.push(numeroAleatorio); // Adiciona o número ao array c13n
  }

  // Se a lista deve ser organizada previamente
  if (organizado) { c14
    array.sort((a, b) => a - b); // Ordena o array se o checkbox estiver marcado c15(n log n) *pior caso*
  }

  // Medindo o tempo do Merge Sort
  inicio = new Date(); // Início da contagem do tempo c16
  let resultadoMergeSort = mergeSort([...array]); // Executa o Merge Sort c17(n log n) *todos os casos*
  fim = new Date(); // Fim da contagem do tempo c18

  // Adiciona o resultado do Merge Sort 
  resultados.push({  c19
    metodo: "Merge Sort", c20
    tempo: (fim - inicio) + " ms", c21 + c22
    bigOMelhor: "O(n log n)", // O melhor caso do Merge Sort é sempre O(n log n) c23
    bigOPior: "O(n log n)",  // O pior caso também é O(n log n) c24
    numeros: resultadoMergeSort.join(', ') // Números ordenados pelo Merge Sort c25(n)
  });

  // Medindo o tempo do método .sort()
  inicio = new Date(); // Início da contagem do tempo c26
  let resultadoSort = array.sort((a, b) => a - b); // Executa o método .sort() c27(n log n) *pior caso* || c27(n) *melhor caso*
  fim = new Date(); // Fim da contagem do tempo c28

  // Adiciona o resultado do método .sort()
  resultados.push({ c29
    metodo: "Método .sort()", c30
    tempo: (fim - inicio) + " ms", c31 + c32
    bigOMelhor: organizado ? "O(n)" : "O(n log n)",  // Melhor caso: O(n) se já estiver ordenada c33 + c34
    bigOPior: "O(n log n)", // Pior caso: O(n log n) c35
    numeros: resultadoSort.join(', ') // Números ordenados pelo método .sort() c36(n)
  }); 

  // Atualiza a lista de resultados
  setNumeros(resultados); c37
}

c6(n+1) = c6n + c6

c15(n log n) + c17(n log n) + c27(n log n)

c1 + c2 + c3 + c4 + c5 + c14 + c16 + c18 + c19 + c20 + c21 + c22 + c23 + c24 + c26 + c28 + c29 + c30 + c31 + c32 + c33 + c34 + c35 + c37

c7n + c8n + c9n + c10n + c11n + c12n + c13n + c25n + c36n

25c + 10cn + 3c(n log n)

# Conclusões

1 - Complexidade de Tempo:

Ambos os algoritmos, Merge Sort e .sort(), têm uma complexidade de tempo de O(n log n) no pior e no melhor caso. No entanto, o método .sort() pode ser otimizado internamente dependendo do navegador e do ambiente JavaScript, potencialmente utilizando algoritmos híbridos como Timsort (que tem melhor desempenho em listas parcialmente ordenadas).

2 - Desempenho Real:

No teste, o método .sort() geralmente será mais rápido do que uma implementação manual de Merge Sort. Isso ocorre porque .sort() é altamente otimizado e implementado em baixo nível nos motores de JavaScript, o que traz um desempenho superior.

3 - Caso Ordenado:

Quando a lista já está parcialmente ou totalmente ordenada (dependendo do estado do checkbox), o .sort() pode ter desempenho O(n) em alguns casos, enquanto o Merge Sort continuará a ser O(n log n) em todos os cenários. Isso faz com que o .sort() seja mais eficiente em listas já ordenadas ou quase ordenadas.

4 - Facilidade de Uso:

O método .sort() é muito mais simples de usar, pois é uma função nativa da linguagem e não requer a implementação de algoritmos adicionais, como no caso do Merge Sort, o que também o torna mais preferível para a maioria dos casos de uso práticos.