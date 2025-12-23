# Questions de cours - Processus Stochastiques

Cette liste vise à couvrir de manière exhaustive les définitions, théorèmes et démonstrations du cours de Calculs Stochastiques, ainsi que des exemples illustratifs.

## Chapitre 1 : Introduction
1.  **Définir** un processus stochastique, une trajectoire et une filtration.
2.  **Définir** un processus adapté à une filtration. **Donner un exemple** de processus adapté (ex: processus Auto-Régressif).
3.  **Rappeler** la caractérisation de l'espérance conditionnelle $E[X|\mathcal{A}]$ (Théorème 1.2.1) et la démontrer dans le cas $L^2$ (projection orthogonale).
4.  **Énoncer** les propriétés fondamentales de l'espérance conditionnelle (linéarité, positivité, tour, etc.).

## Chapitre 2 : Chaînes de Markov
5.  **Définir** une chaîne de Markov homogène sur un espace fini ou dénombrable et sa matrice de transition $P$. **Donner un exemple** simple à 2 états.
6.  **Démontrer** que pour tout $(x, y) \in E^2$, $P(X_{n+m} = y | X_n = x) = P^m(x, y)$ (Proposition 2.2.1).
7.  **Démontrer** que $E[f(X_t) | X_0 = x] = P^t f(x)$ pour toute fonction $f$ bornée ou positive (Proposition 2.2.3).
8.  **Définir** une loi invariante $\pi$. **Démontrer** que si $\pi$ est invariante, alors $X_0 \sim \pi \implies \forall t, X_t \sim \pi$.
9.  **Donner un exemple** où la mesure invariante est unique et un exemple où il y en a une infinité (cas $p=q=1$).
10. **Énoncer** la propriété de Markov forte (Proposition 2.3.2) pour un temps d'arrêt $\tau$.
11. **Définir** la relation de communication $i \leftrightarrow j$ et **démontrer** que c'est une relation d'équivalence (Prop 2.4.1).
12. **Définir** le nombre de passages $N_y$ et le potentiel $U(x, y)$. **Montrer** que $U(x, y) = E_x[N_y]$.
13. **Définir** un état récurrent et un état transient. Énoncer le critère utilisant $U(x,x)$ et la probabilité de retour $\sigma_x$ (Théorème 2.5.2).
14. **Démontrer** l'inégalité $U(x, y) \le U(y, y)$ (Lemme 2.5.4) et en déduire que la récurrence est une propriété de classe (Théorème 2.5.3).
15. **Démontrer** que toute chaîne irréductible sur un espace fini est récurrente (Prop 2.5.5).
16. **Définir** une chaîne récurrente positive et une chaîne récurrente nulle. **Donner l'exemple** de la marche aléatoire symétrique sur $\mathbb{Z}$ (récurrente nulle) vs marche asymétrique (transiente).
17. **Énoncer** le théorème d'existence d'une mesure invariante pour une chaîne récurrente (Théorème 2.6.1) et donner l'expression de la mesure $\mu_x(y) = E_x[\sum_{k=0}^{\sigma_x-1} \mathbb{1}_y(X_k)]$.
18. **Démontrer** que $\mu_x$ définie ci-dessus est bien une mesure invariante (Étape 1 de la preuve du Thm 2.6.1).
19. **Montrer** que $\mu_x(E) = E_x[\sigma_x]$ (Prop 2.6.2).
20. **Énoncer** les théorèmes ergodiques (Loi des Grands Nombres) pour les chaînes récurrentes positives (Thm 2.6.5) et nulles (Thm 2.6.7).
21. **Définir** la période $d(x)$ d'un état. **Démontrer** que la période est une propriété de classe (Prop 2.7.1). **Donner un exemple** de chaîne périodique.
22. **Énoncer** le théorème de convergence en loi pour une chaîne ergodique (irréductible, récurrente positive, apériodique).

## Chapitre 3 : Martingales
23. **Définir** une martingale, une sous-martingale et une sur-martingale par rapport à $(\mathcal{F}_n)$.
24. **Donner un exemple** de martingale (ex: somme de v.a. centrées i.i.d., ou Urne de Polya).
25. **Définir** un temps d'arrêt. **Donner l'exemple** du temps d'atteinte.
26. **Énoncer** et **démontrer** le théorème d'arrêt de Doob pour un temps d'arrêt borné (Théorème 3.3.1).
27. **Démontrer** l'Inégalité Maximale de Doob (Théorème 3.5.2) pour une sous-martingale positive ou martingale.
28. **Énoncer** le théorème de convergence presque sûre des sur-martingales positives (Lemme 3.8.2).
29. **Énoncer** le théorème de convergence $L^p$ ($p>1$) et $L^2$ pour les martingales bornées dans $L^p$.
30. **Démontrer** que si $(M_n)$ est une martingale bornée dans $L^2$, elle converge dans $L^2$ (utilisation de Cauchy).
31. **Donner un exemple** de processus de branchement (Galton-Watson) et discuter sa nature de martingale.

## Chapitre 4 : Processus en temps continu
32. **Définir** un processus de Poisson $(N_t)$ d'intensité $\lambda$.
33. **Montrer** que $P(N_t = k) = e^{-\lambda t} \frac{(\lambda t)^k}{k!}$.
34. **Définir** un mouvement brownien standard $(B_t)$.
35. **Donner** la fonction de covariance du mouvement brownien $E[B_t B_s] = \min(t, s)$ et la calculer.
