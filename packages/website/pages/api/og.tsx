import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

// Make sure the font exists in the specified path:
const font = fetch(
  new URL('../../assets/fonts/OpenSans-SemiBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const fontLight = fetch(
  new URL('../../assets/fonts/OpenSans-Light.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;
  const fontDataLight = await fontLight;

  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#0b77c2',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}>
            {/*<img
              alt="Vercel"
              height={200}
              src="data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E"
              style={{ margin: '0 30px' }}
              width={232}
        />*/}
          </div>
          <div
            style={{
              fontSize: 110,
              fontStyle: 'normal',
              fontFamily: 'OpenSansLight',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}>
            {title}
          </div>
          <div
            style={{
              fontSize: 50,
              fontStyle: 'bold',
              fontFamily: 'OpenSans',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}>
            WFP
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: 'OpenSans',
            data: fontData,
            style: 'normal',
          },
          {
            name: 'OpenSansLight',
            data: fontDataLight,
            style: 'normal',
          },
        ],
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
