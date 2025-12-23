
import genanki
import re
import os

# Define the Anki Model (Note Type)
model_id = 1607392319
model = genanki.Model(
  model_id,
  'Stochastic Calculus Model',
  fields=[
    {'name': 'Question'},
    {'name': 'Answer'},
  ],
  templates=[
    {
      'name': 'Card 1',
      'qfmt': '<div class="card_content">{{Question}}</div>',
      'afmt': '{{FrontSide}}<hr id="answer"><div class="card_content">{{Answer}}</div>',
    },
  ],
  css="""
  .card {
   font-family: arial;
   font-size: 20px;
   text-align: center;
   color: black;
   background-color: white;
  }
  .card_content {
    padding: 20px;
  }
  """
)

# Parse the Markdown file to extract questions
questions_file = r"C:\Users\nicol\Planning\Processus Stochastiques\Liste_questions_stochastiques.md"
content = ""

with open(questions_file, "r", encoding="utf-8") as f:
    content = f.read()

# Define decks
# Main deck
main_deck_id = 2059400110
main_deck = genanki.Deck(main_deck_id, 'Processus Stochastiques')

# Sub decks map
sub_decks = {}
current_chapter = ""
chapter_counter = 0

lines = content.split('\n')
for line in lines:
    line = line.strip()
    
    # Detect Chapter Header
    chapter_match = re.match(r"^## (Chapitre \d+ : .+)", line)
    if chapter_match:
        current_chapter = chapter_match.group(1)
        chapter_counter += 1
        # Create a new sub-deck for this chapter
        # Anki uses "Main::Sub" syntax for subdecks, but genanki requires separate deck objects often packaged together
        # Actually genanki handles "Name::Subname" automatically if you import them all.
        deck_name = f'Processus Stochastiques::{current_chapter}'
        deck_id = main_deck_id + chapter_counter
        sub_decks[current_chapter] = genanki.Deck(deck_id, deck_name)
        continue

    # Detect Question
    # Matches: "1. **Question text**" or "1. Question text"
    question_match = re.match(r"^\d+\.\s+(.+)", line)
    if question_match and current_chapter:
        question_text = question_match.group(1)
        
        # Convert markdown bold to HTML bold for Anki
        question_html = re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", question_text)
        
        # Convert LaTeX $...$ to Anki's \(...\) or just keep $ for MathJax if user has it, 
        # but let's use standard Anki LaTeX format `\( ... \)` for inline and `\[ ... \]` for block
        # Actually, simpler: replace $ with \( and \)
        
        def replace_latex(match):
            return "\\(" + match.group(1) + "\\)"
            
        question_html = re.sub(r"\$(.*?)\$", replace_latex, question_html)

        # Create Note
        note = genanki.Note(
            model=model,
            fields=[question_html, ""] 
        )
        # We leave the Answer empty for now as it's a "Question list" for the user to learn from (as per request "Liste de questions")
        # WAIT, the user asked for an Anki deck "ready to be imported". 
        # Usually Anki cards have back sides. 
        # But the USER PROVIDED "Liste questions.pdf" from the prof which ONLY had questions.
        # The user wanted "une liste similaire... puis après un deck anki".
        # If I don't have the answers, I can't put them. 
        # HOWEVER, for Anki to be useful, it needs answers. 
        # Given the prompt, the user "learns the course by having a list of questions that could fall".
        # The PROMPT says: "Liste questions.pdf" and "Polycopié Statistiques.pdf". 
        # The user likely wants the QUESTIONS on the front. 
        # Does he want the ANSWERS on the back? 
        # "J'aimerais que tu me renvoies d'abord la liste, puis après un deck anki... un joli deck bien pensé"
        # It is implied the deck should be usable. A deck without answers is useless.
        # I SHOULD GENERATE ANSWERS based on the notes I extracted!
        # I have the content in `stoch_calc_content.txt`.
        # Generating high quality answers for 32 proofs is hard to do perfectly in one shot without mistakes.
        # BUT, producing a deck with JUST the questions is probably not what "un joli deck bien pensé" means.
        # Strategy: I will generate concise answers/sketches of proofs for the fields.
        
        # Mocking answer generation for now to ensure the script works, 
        # but in reality I should populate this. 
        # I will leave a placeholder "Voir cours ou à compléter" if I can't generate it, 
        # but I will try to generate simple answers for definitions and theorem statements.
        
        # For the purpose of this script artifact, I'll add a placeholder. 
        # I will update the script to actually map some answers if I can, or I should have generated the answers in a previous step.
        # Since I didn't generate a text file with answers, I will auto-generate some generic guidance 
        # or maybe I should update the script to read a file that HAS answers.
        
        # Let's try to do a "best effort" mapping here or just put "Voir cours" to start 
        # OR better: I will update the script to populate answers for the definitions/theorems I know.
        
        pass 

# RE-STRATEGY: 
# The user wants the deck. I need to provide the answers. 
# I will create a dictionary in this script with the answers to the questions 
# based on my knowledge and the extracted text.

answers_map = {
    # Chap 1
    1: r"<b>Processus :</b> Famille $(X_t)_{t \in T}$ de v.a. à valeurs dans $E$.<br><b>Trajectoire :</b> Application $t \mapsto X_t(\omega)$ pour $\omega$ fixé.<br><b>Filtration :</b> famille de tribus $(\mathcal{F}_t)$ croissante ($s \le t \implies \mathcal{F}_s \subset \mathcal{F}_t$).",
    2: r"Pour tout $t$, $X_t$ est $\mathcal{F}_t$-mesurable.<br><b>Exemple :</b> Processus AR(1) $X_{t+1} = \alpha X_t + \beta + \epsilon_t$ avec sa filtration naturelle.",
    3: r"<b>Thm :</b> Il existe unique $Z$ $\mathcal{A}$-mesurable telle que $E[ZU]=E[XU]$ pour tout $U$ $\mathcal{A}$-mesurable bornée.<br><b>Preuve $L^2$ :</b> $E[X|\mathcal{A}]$ est la projection orthogonale de $X$ sur le sous-espace fermé $L^2(\mathcal{A})$. On a $<X - \pi(X), Z> = 0$ pour tout $Z \in L^2(\mathcal{A})$.",
    4: r"Linéarité, Positivité, $E[E[X|\mathcal{A}]] = E[X]$, $X \perp \mathcal{A} \implies E[X|\mathcal{A}] = E[X]$, $X \in \mathcal{A} \implies E[X|\mathcal{A}] = X$, Jensen, Fatou conditionnel, etc.",
    # Chap 2
    5: r"Processus $(X_n)$ t.q. $P(X_{n+1}=y | \mathcal{F}_n) = P(X_{n+1}=y | X_n) = P(X_n, y)$.<br>$P$ est stochastique : $P(x,y) \ge 0$ et $\sum_y P(x, y) = 1$.<br><b>Exemple :</b> Chaine à 2 états $\{1,2\}$ avec $P = \begin{pmatrix} p & 1-p \\ 1-q & q \end{pmatrix}$.",
    6: r"Récurrence sur $m$. Vrai pour $m=1$ (déf).<br>Pour $m > 1$, $P(X_{n+m}=y|X_n=x) = \sum_z P(X_{n+m}=y|X_{n+m-1}=z)P(X_{n+m-1}=z|X_n=x)$ (Markov) $= \sum_z P(z,y)P^{m-1}(x,z) = P^m(x,y)$.",
    7: r"$E[f(X_t)|X_0=x] = \sum_z f(z) P(X_t=z|X_0=x) = \sum_z f(z) P^t(x, z) = (P^t f)(x)$.",
    8: r"$\pi P = \pi$.<br>Preuve : Si $X_0 \sim \pi$, loi de $X_1$ est $\pi P = \pi$. Par récurrence $X_t \sim \pi P^t = \pi$.",
    9: r"<b>Exemple Unique :</b> Chaine à 2 états avec $p,q \in (0,1)$ (solution unique $\pi = (\frac{1-q}{2-p-q}, \dots)$).<br><b>Exemple Infinité :</b> Cas $p=q=1$ (identite), toute distribution est invariante.",
    10: r"Pour un temps d'arrêt $\tau$, $E[\phi((X_{\tau+n})) | \mathcal{F}_\tau] = E_{X_\tau}[\phi((X_n))]$ sur $\{\tau < \infty\}$.",
    11: r"$i \leftrightarrow j \iff \exists n, P^n(i,j)>0$ et $\exists m, P^m(j,i)>0$.<br>Reflexive ($P^0=I$), Symétrique (def), Transitive (via $P^{n+m}(i,k) \ge P^n(i,j)P^m(j,k) > 0$).",
    12: r"$N_y = \sum_{n \ge 0} 1_{X_n=y}$. $U(x,y) = \sum P^n(x,y) = \sum E_x[1_{X_n=y}] = E_x[N_y]$.",
    13: r"Récurrent : $U(x,x) = \infty$ (ou $P_x(\sigma_x < \infty) = 1$).<br>Transient : $U(x,x) < \infty$.",
    14: r"<b>Preuve $U(x,y) \le U(y,y)$ :</b> $U(x,y) = P_x(\sigma_y < \infty) U(y,y) \le U(y,y)$ (Markov forte).<br><b>Classe :</b> Si $x \leftrightarrow y$, $x$ rec, alors $U(x,y)>0$ et infini car $U(x,x)=\infty$. Donc $U(y,y)=\infty$.",
    15: r"Si transiente, chaque état visité un nombre fini de fois p.s. Mais il y a une infinité d'instants. Impossible (Tiroirs).",
    16: r"Rec Pos : $E_x[\sigma_x] < \infty$ (prob invar unique). Rec Nulle : $E_x[\sigma_x] = \infty$.<br><b>Exemple :</b> Marche aléatoire symétrique sur $\mathbb{Z}$ ($p=1/2$) est récurrente nulle. Asymétrique ($p \ne 1/2$) est transiente.",
    17: r"Thm : Existe mesure invariante unique (à cte près).<br>$\mu_x(y) = E_x[\sum_{k=0}^{\sigma_x-1} 1_y(X_k)]$ (Nb moyen de visites en $y$ entre deux passages en $x$).",
    18: r"Calcul de $\mu_x P$. Décomposer selon $k$ et utiliser Markov. Voir preuve cours (Etape 1).",
    19: r"$\mu_x(E) = \sum_y E_x[\sum_{k=0}^{\sigma_x-1} 1_{X_k=y}] = E_x[\sum_{k=0}^{\sigma_x-1} \sum_y 1_{X_k=y}] = E_x[\sum_{k=0}^{\sigma_x-1} 1] = E_x[\sigma_x]$.",
    20: r"Rec Pos : $\frac{1}{n} \sum f(X_i) \to \int f d\pi$.<br>Rec Nulle : $\frac{1}{n} \sum 1_x(X_i) \to 0$.",
    21: r"$d(x) = PGCD\{n : P^n(x,x)>0\}$. $x \leftrightarrow y \implies d(x)=d(y)$.<br><b>Exemple :</b> Chaine périodique sur un cercle ($1 \to 2 \to 3 \to 1 \dots$), $d=3$.",
    22: r"Si irréductible, Récurrente Positive ET **Apériodique** : $P(X_n=x) \to \pi(x)$ quelque soit la loi initiale.",
    # Chap 3
    23: r"Adapté, Intégrable. Martingale : $E[X_{n+1}|\mathcal{F}_n] = X_n$. Sous : $\ge$. Sur : $\le$.",
    24: r"<b>Exemple :</b> Somme de v.a. centrées i.i.d. $S_n = \sum X_i$.<br>Autre : Urne de Polya ($X_n = $ proportion de boules rouges).",
    25: r"$\{ \tau \le n \} \in \mathcal{F}_n$.<br><b>Exemple :</b> $\tau_A = \inf \{ n \ge 0 : X_n \in A \}$.",
    26: r"Si $\tau$ borné ($\tau \le N$), $E[X_\tau] = E[X_0]$. Preuve par décomposition sur les événements $\{\tau = k\}$ ou indicatrices.",
    27: r"$\lambda P(\max_{k \le n} X_k \ge \lambda) \le E[|X_n|]$ (version positive). Preuve par découpage selon premier instant de dépassement.",
    28: r"Une sur-martingale positive converge p.s. vers une v.a. finie.",
    29: r"Bornée $L^p$ ($p>1$) ou $L^2$ $\implies$ cv p.s. et $L^p$.",
    30: r"Bornée $L^2 \implies$ de Cauchy dans $L^2$ (car $E[(M_n-M_m)^2] = E[M_n^2] - E[M_m^2]$). $L^2$ complet $\implies$ cv.",
    31: r"<b>Galton-Watson :</b> $Z_{n+1} = \sum_{i=1}^{Z_n} \xi_{n,i}$.<br>$Z_n / m^n$ est une martingale (si $m = E[\xi]$).",
    # Chap 4
    32: r"$N_0=0$, accroissements indépendants stationnaires, $N_t - N_s \sim \mathcal{P}(\lambda(t-s))$.",
    33: r"Résoudre equadiff $p_k'(t) = -\lambda p_k(t) + \lambda p_{k-1}(t)$ ou par fonction génératrice.",
    34: r"Continu, $B_0=0$, accroissements gaussiens indépendants $B_t - B_s \sim \mathcal{N}(0, t-s)$.",
    35: r"$E[B_t B_s] = E[B_s (B_s + B_t-B_s)] = E[B_s^2] + 0 = s$ (pour $s<t$). Donc $\min(t,s)$."
}

# Add notes
question_counter = 0
for line in lines:
    line = line.strip()
    chapter_match = re.match(r"^## (Chapitre \d+ : .+)", line)
    if chapter_match:
        current_chapter = chapter_match.group(1)
        continue

    question_match = re.match(r"^(\d+)\.\s+(.+)", line)
    if question_match and current_chapter:
        idx = int(question_match.group(1))
        question_text = question_match.group(2)
        
        # HTML formatting
        question_html = re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", question_text)
        def replace_latex(match):
            return "\\(" + match.group(1) + "\\)"
        question_html = re.sub(r"\$(.*?)\$", replace_latex, question_html)
        
        answer_text = answers_map.get(idx, "Voir cours.")
        answer_html = answer_text # Already HTML formatted in map
         # Latex in answers too if needed (simple replacement)
        answer_html = re.sub(r"\$(.*?)\$", replace_latex, answer_html)

        note = genanki.Note(
            model=model,
            fields=[question_html, answer_html]
        )
        
        if current_chapter in sub_decks:
            sub_decks[current_chapter].add_note(note)

# Package decks
package = genanki.Package([main_deck] + list(sub_decks.values()))
package.write_to_file(r'C:\Users\nicol\Planning\Processus Stochastiques\Stochastiques.apkg')

print("Created Stochastiques.apkg")
