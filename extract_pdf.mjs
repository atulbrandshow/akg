import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import fs from 'fs';

// Some versions of pdfjs-dist need the workerSrc to be set
// But in recent versions it might work out of the box or need a different approach for Node

async function extractText() {
  try {
    const data = new Uint8Array(fs.readFileSync('SKILLS FOUNDATION PAGE.pdf'));
    const loadingTask = pdfjsLib.getDocument({
      data,
      useSystemFonts: true,
      disableFontFace: true,
    });
    const pdf = await loadingTask.promise;
    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      fullText += `--- Page ${i} ---\n` + pageText + '\n\n';
    }
    fs.writeFileSync('extracted_text.txt', fullText);
    console.log('Text extracted to extracted_text.txt');
  } catch (err) {
    console.error('Error:', err);
  }
}

extractText();
