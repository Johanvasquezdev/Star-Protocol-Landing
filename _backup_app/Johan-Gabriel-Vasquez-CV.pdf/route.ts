const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 552 >>
stream
BT
/F1 24 Tf
72 720 Td
(Johan Gabriel Vasquez) Tj
/F1 14 Tf
0 -32 Td
(Full-Stack Developer) Tj
0 -28 Td
(Email: johanvasquezdev@gmail.com) Tj
0 -24 Td
(GitHub: github.com/Johanvasquezdev) Tj
0 -24 Td
(LinkedIn: linkedin.com/in/johan-gabriel-vasquez-5b539a312) Tj
0 -42 Td
(Focus Areas:) Tj
0 -24 Td
(Frontend, backend, APIs, databases, AI/RAG, cloud, DevOps, QA, security,) Tj
0 -20 Td
(data engineering, and scalable software architecture.) Tj
0 -42 Td
(Featured Projects: MedAgenda, SupportMind AI, ImportCost Pro, HobbiSport.) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000241 00000 n 
0000000843 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
913
%%EOF`;

export function GET() {
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Johan-Gabriel-Vasquez-CV.pdf"'
    }
  });
}
