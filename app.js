if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function ZmenStranku1()
{
    document.getElementById("strana1").className = "page_visible"
    document.getElementById("strana2").className = "page";
}

function ZmenStranku2()
{
    document.getElementById("strana1").className = "page";
    document.getElementById("strana2").className = "page_visible";
}


function uloz() {
    let pribeh = document.getElementById("zadejtext").value;
    let kam = document.getElementById("vyber").value;

    let zacatek = JSON.parse(sessionStorage.getItem("zacatek")) || [];
    let stred = JSON.parse(sessionStorage.getItem("stred")) || [];
    let zaver = JSON.parse(sessionStorage.getItem("zaver")) || [];
    
    if (kam === "1") {
        zacatek.push(pribeh);
        sessionStorage.setItem("zacatek", JSON.stringify(zacatek));
    } else if (kam === "2") {
        stred.push(pribeh);
        sessionStorage.setItem("stred", JSON.stringify(stred));
    } else if (kam === "3") {
        zaver.push(pribeh);
        sessionStorage.setItem("zaver", JSON.stringify(zaver));
    }

    document.getElementById("zacatek").querySelector('p').textContent = zacatek.length > 0 ? zacatek.join(', ') : "Žádný cíl nebyl nastaven.";
    document.getElementById("stred").querySelector('p').textContent = stred.length > 0 ? stred.join(', ') : "Žádný cíl nebyl nastaven.";
    document.getElementById("zaver").querySelector('p').textContent = zaver.length > 0 ? zaver.join(', ') : "Žádný cíl nebyl nastaven.";
}




