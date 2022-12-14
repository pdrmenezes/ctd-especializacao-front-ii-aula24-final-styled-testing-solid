import { useEffect, useState } from "react";
import { AssinarImage, CloseButton as Close } from "../../assets";
import { INoticiasNormalizadas } from "./INoticiasNormalizadas";
import { NoticiaContent } from "./NoticiaContent";
import { obterInformacoes } from "./obterInformacoes";
import {
  CloseButton,
  CardModal,
  ContainerModal,
  DescriptionModal,
  ImageModal,
  TituloModal,
  CardNoticia,
  ContainerNoticias,
  ListaNoticias,
  TituloNoticias,
  BotaoLeitura,
  BotaoAssinar,
  ContainerTexto,
} from "./styled";

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    try {
      obterInformacoes().then((noticias) => setNoticias(noticias));
    } catch (error) {
      throw new Error("Error fetching news" + error);
    }
  }, []);

  return (
    <ContainerNoticias>
      <TituloNoticias>Notícias dos Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <CardNoticia key={noticia.id}>
            <NoticiaContent noticia={noticia} />
            <BotaoLeitura onClick={() => setModal(noticia)}>Ver mais</BotaoLeitura>
          </CardNoticia>
        ))}
        {modal ? (
          modal.premium ? (
            <ContainerModal>
              <CardModal>
                <CloseButton onClick={() => setModal(null)}>
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
                        setModal(null);
                      }, 1000)
                    }
                  >
                    Assinar
                  </BotaoAssinar>
                </ContainerTexto>
              </CardModal>
            </ContainerModal>
          ) : (
            <ContainerModal>
              <CardModal>
                <CloseButton onClick={() => setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImageModal src={modal.image} alt="news-image" />
                <ContainerTexto>
                  <TituloModal>{modal.titulo}</TituloModal>
                  <DescriptionModal>{modal.description}</DescriptionModal>
                </ContainerTexto>
              </CardModal>
            </ContainerModal>
          )
        ) : null}
      </ListaNoticias>
    </ContainerNoticias>
  );
};

export default Noticias;
