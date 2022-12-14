import { obterNoticias } from "./fakeRest";

export const obterInformacoes = async () => {
  const MILISECONDS_TO_MINUTES = 60000;
  const resposta = await obterNoticias();
  const data = resposta.map((noticia) => {
    const horaAtual = new Date();
    const minutosDecorridos = Math.floor((horaAtual.getTime() - noticia.date.getTime()) / MILISECONDS_TO_MINUTES);
    return {
      id: noticia.id,
      titulo: noticia.titulo,
      description: noticia.description,
      date: `Há ${minutosDecorridos} minutos`,
      premium: noticia.premium,
      image: noticia.image,
      shortDescription: noticia.description.substring(0, 100),
    };
  });
  return data;
};
