export async function onRequest(context) {
    // Extract the request body
    const { nome, curso, horas, backgroundUrl } = await context.request.json();
  
    if (!nome || !curso || !horas || !backgroundUrl) {
      return new Response(JSON.stringify({ error: 'Missing required parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  
    try {
      const certificateHtml = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Certificado - ${nome}</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
            }
            .certificate {
              width: 1050px;
              height: 740px;
              background-image: url('${backgroundUrl}');
              background-size: cover;
              background-position: center;
              color: #000;
              text-align: center;
              padding: 50px;
              box-sizing: border-box;
            }
            .content {
              background-color: rgba(255, 255, 255, 0.8);
              padding: 20px;
              border-radius: 10px;
            }
            h1 {
              font-size: 48px;
              margin-bottom: 20px;
            }
            p {
              font-size: 24px;
              margin-bottom: 10px;
            }
          </style>
          <script>
            window.onload = function() {
              const element = document.getElementById('certificate');
              const opt = {
                margin:       0,
                filename:     'certificado-${nome}.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
              };
              html2pdf().set(opt).from(element).save();
            }
          </script>
        </head>
        <body>
          <div id="certificate" class="certificate">
            <div class="content">
              <h1>Certificado</h1>
              <p>Certificamos que</p>
              <p><strong>${nome}</strong></p>
              <p>concluiu com êxito o curso de</p>
              <p><strong>${curso}</strong></p>
              <p>com carga horária de <strong>${horas} horas</strong>.</p>
              <p>Data: ${new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </body>
        </html>
      `;
  
      return new Response(certificateHtml, {
        headers: { 'Content-Type': 'text/html' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to generate certificate' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }