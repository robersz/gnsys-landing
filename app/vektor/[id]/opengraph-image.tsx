import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Vektor Newsletter - Gnsys';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // Newsletter data mapping
  const newsletterTitles: Record<string, string> = {
    "2601": "Enero 2026",
    // Add more as needed
  };

  const title = newsletterTitles[id] || "Newsletter";

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            background: 'white',
            borderRadius: '24px',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#1e3a8a',
              marginBottom: '20px',
              display: 'flex',
            }}
          >
            Vektor
          </div>
          <div
            style={{
              fontSize: 48,
              color: '#374151',
              marginBottom: '20px',
              display: 'flex',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#6b7280',
              display: 'flex',
            }}
          >
            Boletín Mensual - Gnsys Informática
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
