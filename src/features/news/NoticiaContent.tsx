import { DateCardNoticia, DescriptionCardNoticia, ImageCardNoticia, TituloCardNoticia } from "./styled";
import { INoticiasNormalizadas } from "./INoticiasNormalizadas";

export function NoticiaContent({ noticia }: { noticia: INoticiasNormalizadas }) {
  return (
    <>
      <ImageCardNoticia src={noticia.image} />
      <TituloCardNoticia>{noticia.titulo}</TituloCardNoticia>
      <DateCardNoticia>{noticia.date}</DateCardNoticia>
      <DescriptionCardNoticia>{noticia.shortDescription}</DescriptionCardNoticia>
    </>
  );
}
