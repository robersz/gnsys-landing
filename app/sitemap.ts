import { MetadataRoute } from "next";

const BASE_URL = "https://gnsys.com.mx";

const newsletterIds = ["2602", "2601"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "monthly" },
    { url: `${BASE_URL}/servicios`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/infraestructura`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/cloud`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/virtualizacion`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/ai`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/alianzas`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/clientes`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/nosotros`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE_URL}/contacto`, priority: 0.8, changeFrequency: "yearly" },
    { url: `${BASE_URL}/vektor`, priority: 0.7, changeFrequency: "monthly" },
  ];

  const newsletterRoutes: MetadataRoute.Sitemap = newsletterIds.map((id) => ({
    url: `${BASE_URL}/vektor/${id}`,
    priority: 0.6,
    changeFrequency: "yearly",
  }));

  return [...staticRoutes, ...newsletterRoutes];
}
