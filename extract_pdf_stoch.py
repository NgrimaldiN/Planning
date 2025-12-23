
import pypdf
import os

pdf_path = r"c:\Users\nicol\Planning\Processus Stochastiques\poly_processus (1).pdf"
output_file = "stoch_calc_content.txt"

def extract_text(pdf_path):
    if not os.path.exists(pdf_path):
        return f"CRITICAL ERROR: File not found at {pdf_path}"
    
    try:
        reader = pypdf.PdfReader(pdf_path)
        text_content = []
        num_pages = len(reader.pages)
        
        text_content.append(f"--- Extracting from {os.path.basename(pdf_path)} ({num_pages} pages) ---")
        
        # Read all pages to be sure we have full access
        for i in range(num_pages):
            try:
                page = reader.pages[i]
                text = page.extract_text()
                text_content.append(f"\n[Page {i+1}]\n{text}")
            except Exception as e:
                 text_content.append(f"\n[Page {i+1}] ERROR EXTRACTING TEXT: {e}")

        return "\n".join(text_content)
    except Exception as e:
        return f"CRITICAL ERROR reading PDF: {e}"

print(f"Attempting to extract from: {pdf_path}")
content = extract_text(pdf_path)

with open(output_file, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Extraction attempt complete. Check {output_file} for results.")
