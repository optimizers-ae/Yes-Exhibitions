import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { Resend } from 'resend'

function apiDevPlugin() {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', async () => {
            try {
              const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')
              const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY
              const parsedBody = body ? JSON.parse(body) : {}

              const resend = new Resend(apiKey)
              const {
                name,
                email,
                phone,
                company,
                cityCountry,
                standType,
                standSize,
                eventName,
                eventDate,
                eventLocation,
                budget,
                selectedFeatures,
                message,
              } = parsedBody

              const toEmail = env.CONTACT_TO_EMAIL || process.env.CONTACT_TO_EMAIL || 'optimizersae@gmail.com'

              const { data, error } = await resend.emails.send({
                from: 'YES Exhibition <onboarding@resend.dev>',
                to: toEmail,
                replyTo: email || undefined,
                subject: `New Website Inquiry - ${name || 'Client'} (${company || 'Exhibition Inquiry'})`,
                html: `
                  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                    <h2 style="color: #D49942; border-bottom: 2px solid #D49942; padding-bottom: 10px; margin-top: 0;">New Exhibition Inquiry</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                      <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold; width: 35%;">Name:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${name || 'N/A'}</td></tr>
                      <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Email:</td><td style="padding: 8px 12px; border: 1px solid #eee;"><a href="mailto:${email}">${email || 'N/A'}</a></td></tr>
                      <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Phone:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${phone || 'N/A'}</td></tr>
                      <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Company:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${company || 'N/A'}</td></tr>
                      ${cityCountry ? `<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">City/Country:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${cityCountry}</td></tr>` : ''}
                      ${standType ? `<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Stand Type:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${standType}</td></tr>` : ''}
                      ${standSize ? `<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Stand Size:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${standSize}</td></tr>` : ''}
                      ${budget ? `<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Budget Range:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${budget}</td></tr>` : ''}
                      ${eventName ? `<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Event Name:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${eventName}</td></tr>` : ''}
                      ${eventDate ? `<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Event Date:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${eventDate}</td></tr>` : ''}
                      ${eventLocation ? `<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Event Location:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${eventLocation}</td></tr>` : ''}
                      ${selectedFeatures && selectedFeatures.length > 0 ? `<tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Requested Features:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${Array.isArray(selectedFeatures) ? selectedFeatures.join(', ') : selectedFeatures}</td></tr>` : ''}
                      <tr><td style="padding: 8px 12px; border: 1px solid #eee; background-color: #f9f9f9; font-weight: bold;">Project Brief / Message:</td><td style="padding: 8px 12px; border: 1px solid #eee;">${message || 'No message provided'}</td></tr>
                    </table>
                    <p style="font-size: 11px; color: #888; margin-top: 20px; text-align: center;">Sent from YES Exhibition Website Inquiry System</p>
                  </div>
                `,
              })

              if (error) {
                console.error('Resend error:', error)
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: false, message: error.message }))
                return
              }

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: true, data }))
            } catch (err) {
              console.error('API error:', err)
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: false, message: err.message || 'Failed to send' }))
            }
          })
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), apiDevPlugin()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/.git/**', '**/node_modules/**'],
    },
  },
})
