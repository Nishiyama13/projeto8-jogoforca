import { useState } from "react";
import palavras from "./Palavras";
import forca0 from "../assets/forca0.png";
import forca0 from "../assets/forca1.png";
import forca0 from "../assets/forca2.png";
import forca0 from "../assets/forca3.png";
import forca0 from "../assets/forca4.png";
import forca0 from "../assets/forca5.png";
import forca0 from "../assets/forca6.png";

export default function Jogo({
  listaPalavrasAleatorias,
  setListaPalavrasAleatorias,
  palavraCerta,
  setPalavraCerta,
  arrayPalavraCerta,
  setArrayPalavraCerta,
  contadorErro,
  setContadorErro,
  imagem,
  setImagem,
  cor,
  setCor,
  divPalavraOculta,
  setDivPalavraOculta,
  setDesabilitar,
}) {
  function geradorDePalavras() {
    //logica de escolher uma palavras
    let comparador = () => Math.random() - 0.5;
    setListaPalavrasAleatorias = palavras.sort(comparador);
    setPalavraCerta(listaPalavrasAleatorias[0]);
    setArrayPalavraCerta(palavraCerta.split("")); //transforma a String em Array //depois .join('') transforma array em string sem espaco
    console.log(`palavraCerta:${palavraCerta}`);
    console.log(`arrayPalavraCerta:${arrayPalavraCerta}`);
  }

  function iniciarJogo() {
    alert("iniciou a partida!");

    //setContadorErro(0); //limpa o contador de erros
    //setImagem(contadorErro); //coloca imagem inicial se contadorErro(0)
    setDesabilitar(false); //habilita o teclado, input e botao de chute

    setDivPalavraOculta(
      <div className="palavra" data-test="word" style={{ color: cor }}>
        {arrayPalavraCerta}
      </div>
    );

    geradorDePalavras(); //chama funcao que escolhe uma palavra da lista em Palavras.js
  }

  return (
    <>
      <div className="containerGame">
        <div className="esquerdaContainer">
          <img
            data-test="game-image"
            className={"imagemForca"}
            src={`./assets/forca${imagem ? contadorErro : contadorErro}.png`}
            alt="forca"
          />
        </div>
        <div className="direitaContainer">
          <button
            onClick={iniciarJogo}
            data-test="choose-word"
            className="botaoEscolher"
          >
            Escolher Palavra
          </button>
          <div className="palavra" data-answer={palavraCerta}>
            {divPalavraOculta}
          </div>
        </div>
      </div>
    </>
  );
}

/*import { useState } from "react";
import palavras from "./Palavras";

export default function Jogo({
  palavraCerta,
  setPalavraCerta,

  contadorErro,
  setContadorErro,

  cor,
  setCor,

  chute,
  setChute,

  imagem,
  setImagem,

  arrayPalavraCerta,
  setArrayPalavraCerta,

  divPalavraOculta,
  setDivPalavraOculta,

  listaLetrasAcertos,
  setListaLetrasAcertos,

  setDesabilitar,
}) {
  let comparador = () => Math.random() - 0.5;
  const listaPalavrasAleatorias = palavras.sort(comparador);

  function geradorDePalavras() {
    //logica de escolher uma palavras
    setPalavraCerta = listaPalavrasAleatorias[0];
    arrayPalavraCerta = palavraCerta.split(""); //transforma a String em Array //depois .join('') transforma array em string sem espaco
    setArrayPalavraCerta(arrayPalavraCerta);
  }

  function iniciarJogo() {
    alert("iniciou a partida!");

    setContadorErro(0); //limpa o contador de erros
    setImagem(contadorErro); //coloca imagem inicial se contadorErro(0)
    setDesabilitar(false); //habilita o teclado, input e botao de chute
    //{arrayPalavraCerta.join(" ")}
    setDivPalavraOculta(
      <div className="palavra" data-test="word" style={{ color: cor }}>
        {palavraCerta}
      </div>
    );

    geradorDePalavras(); //chama funcao que escolhe uma palavra da lista em Palavras.js
  }

  return (
    <>
      <div className="containerGame">
        <div className="esquerdaContainer">
          <img
            data-test="game-image"
            className={"imagemForca"}
            src={`./assets/forca${imagem ? contadorErro : contadorErro}.png`}
            alt="forca"
          />
        </div>
        <div className="direitaContainer">
          <button
            onClick={iniciarJogo}
            data-test="choose-word"
            className="botaoEscolher"
          >
            Escolher Palavra
          </button>
          <div className="palavra" data-answer={palavraCerta}>
            {divPalavraOculta}
          </div>
        </div>
      </div>
    </>
  );
}
*/
