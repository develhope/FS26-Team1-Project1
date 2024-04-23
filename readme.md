# Istruzioni per lavorare al progetto LEGO.com tramite Git

Questo repository contiene il codice sorgente per ricreare la struttura del sito web [LEGO.com](https://www.lego.com/it-it).

## Clonare il Repository

Per iniziare a lavorare al progetto, segui questi passaggi per clonare il repository sul tuo computer:

1. Apri il tuo terminale o prompt dei comandi.

2. Utilizza il comando `git clone` seguito dall'URL del repository:
https://github.com/develhope/FS26-Team1-Project1.git



## Ramificazione (Branching)

Quando lavori su nuove funzionalità o correzioni di bug, è buona prassi creare un nuovo ramo (branch) per il lavoro. Ecco come farlo:

1. Assicurati di trovarti nella directory del repository clonato sul tuo computer, verifica sempre dove ti trovi e in quale percorso.

2. Utilizza il comando `git checkout -b` seguito dal nome del nuovo ramo:

3. La nominazione dei nuovi branch passano tutti da "development" il quale altro non è che un raccoglitore generale di tutte le varie modifiche.

4. Nominazione di nuovi branch in fase di sviluppo: 
Dal branch development si lancia un comando git branch nome-nuovo ramo.
I vari sotto branch di development devono avere la seguente nominazione come esempio:
"development/navbar", "development/footer" oppure "development/sezioneacquista", a seconda dell'oggetto in cui si vuole lavorare.



## Lavoro sul Codice

Una volta clonato il repository e creato il tuo ramo di lavoro, puoi iniziare a modificare il codice. Usa il tuo editor di testo o IDE preferito per aprire i file e apportare le modifiche necessarie.

## Aggiungere e Committare le Modifiche

Dopo aver apportato le modifiche, devi aggiungerle al tuo repository locale e fare un commit. Ecco come farlo:

1. Utilizza il comando `git add` seguito dal nome dei file che desideri aggiungere al commit, oppure utilizza `git add .` per aggiungere tutti i file modificati:

2. Fai un commit delle modifiche utilizzando il comando `git commit -m"Messaggio del commit che descrive le modifiche apportate`

3. I COMMIT RIGOROSAMENTE IN INGLESE ED IN PRIMA PERSONA. ESEMPIO:
"add navbar" dunque NON "adding navbar".
oppure "fix bug in place" ecc.


## Push delle Modifiche

Una volta che hai fatto il commit delle tue modifiche nel tuo repository locale, devi caricarle nel repository remoto su GitHub. Ecco come farlo:

1. Utilizza il comando `git push` seguito dal nome del repository remoto e del ramo:
`git push origin nome-del-tuo-ramo`

## Git Pull per aggiornamenti vari della propria repo in locale

Ricordarsi di lanciare un git pull a momenti alterni per far sì che la propria repo sia aggiornata assieme a quella remota.


## Pull Request

Dopo aver caricato le tue modifiche nel repository remoto su GitHub, puoi aprire una Pull Request per integrare le tue modifiche nel ramo principale del progetto.

## Risoluzione dei Conflitti

Durante la collaborazione con altri membri del team, potresti incontrare conflitti durante il merge dei tuoi cambiamenti. Assicurati di risolverli prima di procedere con il merge.

---

Queste sono le istruzioni di base per lavorare al progetto LEGO.com tramite Git. Assicurati di seguire le best practice di sviluppo e le linee guida del team durante il lavoro sul progetto.
