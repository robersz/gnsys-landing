import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

const newslettersData: Record<string, {
  id: string;
  title: string;
  date: string;
  description: string;
  pdfUrl: string;
  coverImage?: string;
}> = {
  "2602": {
    id: "2602",
    title: "Febrero 2026",
    date: "Febrero 2026",
    description: "Segunda edición de Vektor con novedades tecnológicas, recomendaciones prácticas y noticias clave para infraestructura y transformación digital.",
    pdfUrl: "/vektor/2602-Vektor.pdf",
    coverImage: "/vektor/2602-Vektor.png",
  },
  "2601": {
    id: "2601",
    title: "Enero 2026",
    date: "Enero 2026",
    description: "Primera edición de nuestro boletín mensual con las últimas tendencias en tecnología, actualizaciones de productos y casos de éxito.",
    pdfUrl: "/vektor/2601-Vektor.pdf",
    coverImage: "/vektor/2601-Vektor.png",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const newsletter = newslettersData[params.id];
  
  if (!newsletter) {
    return {
      title: 'Newsletter no encontrado - Gnsys',
    };
  }

  const title = `Vektor ${newsletter.title} - Gnsys`;
  const description = newsletter.description;
  const imageUrl = newsletter.coverImage
    ? `https://gnsys.com.mx${newsletter.coverImage}`
    : `https://gnsys.com.mx/vektor/${newsletter.id}/opengraph-image`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1600,
          alt: `Vektor ${newsletter.title}`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(newslettersData).map((id) => ({
    id,
  }));
}
