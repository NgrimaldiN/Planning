
import pypdf
import os

def extract_text(pdf_path, max_pages=None):
    if not os.path.exists(pdf_path):
        return f"File not found: {pdf_path}"
    
    try:
        reader = pypdf.PdfReader(pdf_path)
        text_content = []
        num_pages = len(reader.pages)
        frames_to_read = min(num_pages, max_pages) if max_pages else num_pages
        
        text_content.append(f"--- Extracting from {os.path.basename(pdf_path)} ({frames_to_read}/{num_pages} pages) ---")
        
        for i in range(frames_to_read):
            page = reader.pages[i]
            text = page.extract_text()
            text_content.append(f"\n[Page {i+1}]\n{text}")
            
        return "\n".join(text_content)
    except Exception as e:
        return f"Error reading {pdf_path}: {e}"

base_dir = r"c:\Users\nicol\Planning\Statistiques"
files = [
    (os.path.join(base_dir, "Liste questions.pdf"), None), # Read all
    (os.path.join(base_dir, "Polycopié Statistiques.pdf"), 20) # Read first 20 pages
]

output_file = "stats_pdf_content.txt"
with open(output_file, "w", encoding="utf-8") as f:
    for path, limit in files:
        f.write(extract_text(path, limit))
        f.write("\n\n" + "="*50 + "\n\n")

print(f"Extraction complete. Saved to {output_file}")
