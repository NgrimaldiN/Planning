import fitz  # PyMuPDF
import os
from pathlib import Path

def extract_pdf_text(pdf_path):
    """Extract text from a PDF file."""
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        doc.close()
        return text
    except Exception as e:
        return f"Error: {e}"

def analyze_folder(folder_path, output_file):
    """Analyze all PDFs in a folder and write summary to file."""
    folder = Path(folder_path)
    results = []
    
    for pdf_file in sorted(folder.glob("*.pdf")):
        print(f"Analyzing: {pdf_file.name}")
        text = extract_pdf_text(pdf_file)
        
        # Count pages
        try:
            doc = fitz.open(pdf_file)
            num_pages = len(doc)
            doc.close()
        except:
            num_pages = "?"
        
        # Get word count
        word_count = len(text.split()) if text and not text.startswith("Error") else 0
        
        # Extract first 500 chars as preview
        preview = text[:800].replace('\n', ' ').strip() if text else ""
        
        results.append({
            "file": pdf_file.name,
            "pages": num_pages,
            "words": word_count,
            "preview": preview
        })
    
    # Write to output file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"# Analyse des PDFs - {folder.name}\n\n")
        for r in results:
            f.write(f"## {r['file']}\n")
            f.write(f"- **Pages**: {r['pages']}\n")
            f.write(f"- **Mots**: {r['words']}\n")
            f.write(f"- **Aperçu**: {r['preview'][:300]}...\n\n")
            f.write("---\n\n")
    
    return results

# Analyze all subject folders
base_path = r"c:\Users\nicol\Planning"
subjects = ["Econométrie", "Macroéconomie", "Microéconomie", "Processus Stochastiques", "Statistiques"]

for subject in subjects:
    folder_path = os.path.join(base_path, subject)
    output_file = os.path.join(base_path, f"analyse_{subject.lower().replace(' ', '_')}.md")
    print(f"\n=== Analyzing {subject} ===")
    analyze_folder(folder_path, output_file)
    print(f"Output saved to: {output_file}")

print("\n✅ All analyses complete!")
