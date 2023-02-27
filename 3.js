fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    const valores = data.faturamento;
    
    const menorValor = Math.min(...valores);
    console.log(`Menor valor de faturamento: ${menorValor}`);
    
    const maiorValor = Math.max(...valores);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    
    const media = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
    
    const acimaDaMedia = valores.filter(valor => valor > media).length;
    console.log(`Número de dias com faturamento acima da média: ${acimaDaMedia}`);
  })
  .catch(error => console.error(error));