import { AssinarImage, CloseButton as Close } from "../../assets";
import { ContainerModal, CardModal, CloseButton, ImageModal, ContainerTexto, TituloModal, DescriptionModal, BotaoAssinar } from "./styled";

export function ModalPremium() {
  return (
    <ContainerModal>
      <CardModal>
        <CloseButton onClick={() => null}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImageModal src={AssinarImage} alt="mr-burns-excelent" />
        <ContainerTexto>
          <TituloModal>Assine a nossa newsletter</TituloModal>
          <DescriptionModal>Assine nossa newsletter e receba novidades de nossos personagens favoritos</DescriptionModal>
          <BotaoAssinar
            onClick={() =>
              setTimeout(() => {
                alert("Inscrito!");
                return null;
              }, 1000)
            }
          >
            Assinar
          </BotaoAssinar>
        </ContainerTexto>
      </CardModal>
    </ContainerModal>
  );
}
