import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dallas Concrete Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1C1C1E',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '6px',
              backgroundColor: '#063289',
              borderRadius: '3px',
            }}
          />
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#FFFFFF',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Dallas Concrete Solutions
          </div>
          <div
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Professional Concrete Contractors Serving Dallas-Fort Worth
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              marginTop: '24px',
            }}
          >
            <div
              style={{
                fontSize: '22px',
                color: '#063289',
                fontWeight: 600,
              }}
            >
              214-239-0709
            </div>
            <div
              style={{
                width: '4px',
                height: '4px',
                backgroundColor: 'rgba(255,255,255,0.4)',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                fontSize: '22px',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Free Estimates
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
