import fitz
import os
from pathlib import Path

def analyze_td_detail(pdf_path):
    """Analyze a TD PDF to count exercises and estimate time."""
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        num_pages = len(doc)
        doc.close()
        
        # Count exercises
        import re
        exercices = len(re.findall(r'Exercice\s*\d|Exercise\s*\d', text, re.IGNORECASE))
        questions = len(re.findall(r'\d+\.\s|Question\s*\d', text))
        
        return {
            "pages": num_pages,
            "exercices": exercices,
            "questions_approx": questions,
            "words": len(text.split())
        }
    except Exception as e:
        return {"error": str(e)}

# Analyze key TDs for time estimation
base_path = r"c:\Users\nicol\Planning"

tds_to_analyze = [
    ("Statistiques", "TD5 (1).pdf"),
    ("Statistiques", "TD6.pdf"),
    ("Statistiques", "TD7.pdf"),
    ("Statistiques", "TD_corrigés_2020_2021.pdf"),
    ("Econométrie", "Recap TD1.pdf"),
    ("Econométrie", "Recap TD5.pdf"),
    ("Econométrie", "Quiz 1 - Sol.pdf"),
    ("Econométrie", "Quiz 4 sol.pdf"),
    ("Macroéconomie", "Macro - TD1.pdf"),
    ("Macroéconomie", "Macro - TD3.pdf"),
    ("Microéconomie", "Micro - TD1.pdf"),
    ("Microéconomie", "Micro - TD4.pdf"),
    ("Processus Stochastiques", "tp1.pdf"),
    ("Processus Stochastiques", "tp3.pdf"),
]

print("=" * 60)
print("ANALYSE DÉTAILLÉE DES TDs POUR ESTIMATION DU TEMPS")
print("=" * 60)

for subject, filename in tds_to_analyze:
    filepath = os.path.join(base_path, subject, filename)
    if os.path.exists(filepath):
        result = analyze_td_detail(filepath)
        print(f"\n📄 {subject} / {filename}")
        print(f"   Pages: {result.get('pages', '?')}")
        print(f"   Exercices détectés: {result.get('exercices', '?')}")
        print(f"   Questions approx: {result.get('questions_approx', '?')}")
        print(f"   Mots: {result.get('words', '?')}")
    else:
        print(f"\n❌ {subject} / {filename} - NOT FOUND")

print("\n" + "=" * 60)
