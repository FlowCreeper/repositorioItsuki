import { Button, Checkbox, Input, Typography } from "@mui/material";
import { useState } from "react";

export default function ProvaLuciene() {
    const [quantidade, setQuantidade] = useState(0);  // Tamanho do array
    const [organizado, setOrganizado] = useState(false);  // Estado do checkbox (ordenado/desordenado)
    const [numeros, setNumeros] = useState([]);  // Lista para mostrar os resultados
  
    // Componente que alterna o estado de ordenado/desordenado
    function LabelOrganizado() {
      return (
        <Typography>
          <Checkbox checked={organizado} onChange={() => setOrganizado(!organizado)} />
          {organizado ? "Ordenada" : "Desordenada"}
        </Typography>
      );
    }
  
    // Função que gera os dados e executa os algoritmos
    function handleClick() {
      let array = [];
      let min = 0;
      let max = 1000000;
      let stringlist = [];
      let inicio, fim;
  
      // Função Merge Sort
      const mergeSort = (array) => {
        if (array.length <= 1) {
          return array;
        }
  
        const middle = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle));
  
        return merge(left, right);
      };
  
      const merge = (left, right) => {
        let resultArray = [], leftIndex = 0, rightIndex = 0;
  
        while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
          } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
          }
        }
  
        return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
      };
  
      // Gerando números aleatórios
      for (let i = 0; i < parseInt(quantidade); i++) {
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(numeroAleatorio);
      }
  
      // Se a lista deve ser organizada previamente
      if (organizado) {
        array.sort((a, b) => a - b);
      }
  
      // Medindo o tempo do Merge Sort e exibindo o resultado
      inicio = new Date();
      let resultadoMergeSort = mergeSort([...array]);
      fim = new Date();
      stringlist.push(
        "Merge Sort levou: " + (fim - inicio) + " ms\n" +
        "Resultado Merge Sort: " + resultadoMergeSort.join(', ') + "\n"
      );
  
      // Medindo o tempo do método .sort() e exibindo o resultado
      inicio = new Date();
      let resultadoSort = array.sort((a, b) => a - b);
      fim = new Date();
      stringlist.push(
        "Método .sort() levou: " + (fim - inicio) + " ms\n" +
        "Resultado .sort(): " + resultadoSort.join(', ') + "\n"
      );
  
      setNumeros(stringlist);
    }
  
    return (
      <>
        <Input type="number" placeholder="Quantidade de elementos" onChange={(e) => setQuantidade(e.target.value)} />
  
        <LabelOrganizado />
  
        <Button onClick={handleClick}> Testar </Button>
  
        {numeros.map((e, index) => (
          <div key={index}>{e}</div>
        ))}
      </>
    );
}