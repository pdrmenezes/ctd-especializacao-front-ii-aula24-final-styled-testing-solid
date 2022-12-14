import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";
import { BioContainer, BioDescription, BioImage, BioName, BotaoBio, ContainerBotoes } from "./styled";

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const setActiveCharacter: (nome: NomesSimpsons) => void = (nome) => setBioActive(INFO_SIMPSONS[nome]);

  const generateButtons = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      <BotaoBio key={nome as string} onClick={() => setActiveCharacter(nome as NomesSimpsons)} active={bioActive.id === nome}>
        {nome}
      </BotaoBio>
    ));
  };

  return (
    <BioContainer>
      <ContainerBotoes>{generateButtons()}</ContainerBotoes>
      <div>
        <div>
          <BioImage src={bioActive.image} alt={bioActive.nome} />
        </div>
        <div>
          <BioName>{bioActive.nome}</BioName>
          <BioDescription>{bioActive.description}</BioDescription>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
