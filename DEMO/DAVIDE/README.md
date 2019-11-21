# TRACCIA DEMO WSL

Per procedere è necessario [installare WSL](https://docs.microsoft.com/it-it/windows/dev-environment/) su Windows 10 Pro e installare una distribuzione di Linux (suggerita Ubuntu)
E' consigliabile installare il nuovo Windows Terminal che consente l'accesso in modo semplice alle istanza WSL.
Dalla console WSL va installato Phyton e copiati i file presenti in questa cartella ( è possibile usare la condivisione \\wsl$\)

# STEPS
- Dalla console, posizionarsu sulla cartella che contiene i file demo e scrivere "code ."
- Verrà installato in automatico VS Code Remote Server
- Attivare extesion per Phyton
- Verificare che l'intellicense inizia a funzionare solo dopo l'attivazione dell' estensione
- Per far funzionare demo2.py è necessario installare cowsay: pip install cowsay
- Provare il debug (F5)
- Il file demo3.py contiene un errore che verrà segnalato subito grazie all'estensione precedentemente installata
-	Il file demo3.py consente di eseguire un debug più completo step by step
