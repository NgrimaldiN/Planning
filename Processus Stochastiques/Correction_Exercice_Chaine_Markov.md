# 📝 Correction Exercice : Chaîne de Markov sur $\mathbb{N}$

## Énoncé
Soit $p \in ]0, 1/2[$ et $q = 1/2 - p$. On considère une chaîne de Markov sur $\mathbb{N}$ de matrice de transition $P$ telle que :
- $P(i, i+1) = p$ pour tout $i \ge 0$
- $P(i, i-1) = 1/2$ pour tout $i > 0$
- $P(i, i) = q$ pour tout $i > 0$
- $P(0, 0) = 1 - p$

---

## 1. Irréductibilité
Pour montrer que la chaîne est irréductible, il faut montrer que tout état peut atteindre tout autre état (tous les états communiquent).

* **Chemin montant $i \to j$ (avec $i < j$) :**
  Pour tout $k \ge 0$, $P(k, k+1) = p > 0$.
  On peut donc aller de $i$ à $j$ en enchaînant les transitions $+1$ :
  $i \to i+1 \to \dots \to j$.

* **Chemin descendant $j \to i$ (avec $j > i$) :**
  Pour tout $k > 0$, $P(k, k-1) = 1/2 > 0$.
  On peut donc aller de $j$ à $i$ en enchaînant les transitions $-1$ :
  $j \to j-1 \to \dots \to i$.

**Conclusion :** La chaîne est **irréductible** sur l'espace d'états $\mathbb{N}$.

---

## 2. Équations de la loi invariante $\pi$
Une mesure invariant $\pi = (\pi_n)_{n \in \mathbb{N}}$ doit vérifier $\pi P = \pi$, c'est-à-dire :
$$ \pi_j = \sum_{i \in \mathbb{N}} \pi_i P_{ij} \quad \forall j \in \mathbb{N} $$

* **Pour $j = 0$ :**
  Les seuls états menant à 0 sont 0 (reste) et 1 (descend).
  $$ \pi_0 = \pi_0 P(0,0) + \pi_1 P(1,0) $$
  $$ \pi_0 = \pi_0 (1-p) + \pi_1 (1/2) $$
  $$ \pi_0 - \pi_0(1-p) = \pi_1/2 \implies p \pi_0 = \frac{1}{2} \pi_1 \implies \mathbf{\pi_1 = 2p \pi_0} $$

* **Pour $j > 0$ :**
  On peut arriver en $j$ depuis $j-1$ (monte), $j$ (reste) ou $j+1$ (descend).
  $$ \pi_j = \pi_{j-1} P(j-1, j) + \pi_j P(j, j) + \pi_{j+1} P(j+1, j) $$
  $$ \pi_j = \pi_{j-1} p + \pi_j q + \pi_{j+1} (1/2) $$
  On sait que $q = 1/2 - p$, donc :
  $$ \pi_j = p \pi_{j-1} + (1/2 - p) \pi_j + \frac{1}{2} \pi_{j+1} $$
  En regroupant les termes $\pi_j$ :
  $$ \pi_j (1 - (1/2 - p)) = p \pi_{j-1} + \frac{1}{2} \pi_{j+1} $$
  $$ \pi_j (1/2 + p) = p \pi_{j-1} + \frac{1}{2} \pi_{j+1} $$
  En multipliant par 2 :
  $$ (1 + 2p) \pi_j = 2p \pi_{j-1} + \pi_{j+1} $$

---

## 3. Vérification de la forme $\pi_i = c \alpha^i$

On cherche $\pi_i = c \alpha^i$ avec $c > 0$ et $\alpha \in [0, 1]$.

**Utilisons l'équation en $j=0$ :**
$$\pi_1 = 2p \pi_0 \implies c \alpha^1 = 2p (c \alpha^0) \implies \mathbf{\alpha = 2p}$$
Comme $p < 1/2$, on a $\alpha = 2p < 1$, ce qui est cohérent.

**Vérifions si cela convient pour les équations $j > 0$ :**
Remplaçons $\pi_k$ par $c \alpha^k$ dans l'équation $(1 + 2p) \pi_j = 2p \pi_{j-1} + \pi_{j+1}$ :
$$ (1 + 2p) c \alpha^j = 2p c \alpha^{j-1} + c \alpha^{j+1} $$
Divisons par $c \alpha^{j-1}$ (car $c \neq 0, \alpha \neq 0$) :
$$ (1 + 2p) \alpha = 2p + \alpha^2 $$
$$ \alpha^2 - (1 + 2p) \alpha + 2p = 0 $$

C'est une équation du second degré en $\alpha$.
On remarque que $1$ est racine évidente ($1 - (1+2p) + 2p = 0$).
Le produit des racines est $2p$. Donc l'autre racine est $2p$.
Les racines sont $\alpha_1 = 1$ et $\alpha_2 = 2p$.

Pour avoir une **probabilité** invariante (somme finie égale à 1), il faut que la série géométrique $\sum \alpha^i$ converge, ce qui impose $|\alpha| < 1$.
* $\alpha_1 = 1$ ne convient pas (somme infinie).
* $\alpha_2 = 2p$ convient car $p < 1/2 \implies 2p < 1$.

**Calcul de la constante $c$ (Normalisation) :**
$$ \sum_{i=0}^{\infty} \pi_i = 1 \implies \sum_{i=0}^{\infty} c (2p)^i = 1 $$
$$ c \frac{1}{1 - 2p} = 1 \implies c = 1 - 2p $$

**Solution :**
Les valeurs sont $\mathbf{\alpha = 2p}$ et $\mathbf{c = 1 - 2p}$.
La loi invariante est $\pi_i = (1 - 2p) (2p)^i$.
(C'est une loi Géométrique modifiée sur $\mathbb{N}$).

---

## 4. Nature de la chaîne (Récurrence Positive)

* **Rappel :** Une chaîne irréductible qui admet une probabilité invariante est **récurrente positive**.
* Ici, nous avons trouvé une probabilité invariante $\pi$ explicite (car $2p < 1$).
* **Conclusion :** La chaîne est donc **Récurrente Positive**.

### Cas $p = 1/2$
Si $p = 1/2$, alors la probabilité de monter est $1/2$ et celle de descendre est $1/2$.
C'est une **Marche Aléatoire Symétrique sur $\mathbb{Z}$ réfléchie en 0**.
* On aurait $\alpha = 2p = 1$.
* La mesure invariante serait $\pi_i = c \cdot 1^i = c$ (mesure constante).
* La somme $\sum \pi_i = \sum c = +\infty$.
* Il n'existe pas de **probabilité** invariante (pas normalisable).
* La chaîne ne peut pas être récurrente positive.
* Comme une marche aléatoire symétrique sur $\mathbb{N}$ (ou $\mathbb{Z}$) est récurrente nulle (elle revient en 0 ps mais espérance du temps de retour infinie), la chaîne est **Récurrente Nulle**.
