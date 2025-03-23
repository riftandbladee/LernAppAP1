// You can modify these questions to create your own quiz
export const config = {
    // Points gained for correct answers
    correctPoints: 10,
    
    // Points deducted for incorrect answers
    incorrectPoints: 5,
    
    // All the questions for the quiz
    questions:

    [
        {
            "question": "Welche Aufgabe hat die physikalische Schicht (Layer 1) im OSI-Modell?",
            "options": [
                "Sie sorgt für die Verschlüsselung der Daten.",
                "Sie überträgt Bits als elektrische Signale, Lichtimpulse oder Funkwellen.",
                "Sie stellt sicher, dass Pakete in der richtigen Reihenfolge ankommen.",
                "Sie verwaltet die IP-Adressen im Netzwerk."
            ],
            "correctAnswer": "Sie überträgt Bits als elektrische Signale, Lichtimpulse oder Funkwellen."
        },
        {
            "question": "Welches Gerät arbeitet hauptsächlich auf der Sicherungsschicht (Layer 2) des OSI-Modells?",
            "options": [
                "Router",
                "Switch",
                "Firewall",
                "Repeater"
            ],
            "correctAnswer": "Switch"
        },
        {
            "question": "Welche Schicht im OSI-Modell ist für das Routing von Daten verantwortlich?",
            "options": [
                "Transportschicht (Layer 4)",
                "Netzwerkschicht (Layer 3)",
                "Sicherungsschicht (Layer 2)",
                "Anwendungsschicht (Layer 7)"
            ],
            "correctAnswer": "Netzwerkschicht (Layer 3)"
        },
        {
            "question": "Welches Protokoll wird auf der Transportschicht (Layer 4) verwendet, um eine zuverlässige Datenübertragung sicherzustellen?",
            "options": [
                "UDP",
                "IP",
                "TCP",
                "HTTP"
            ],
            "correctAnswer": "TCP"
        },
        {
            "question": "Welches Protokoll wird auf der Anwendungsschicht (Layer 7) für den Abruf von Webseiten genutzt?",
            "options": [
                "FTP",
                "HTTP",
                "ICMP",
                "ARP"
            ],
            "correctAnswer": "HTTP"
        },
        {
            "question": "Welche Aufgabe hat die Darstellungsschicht (Layer 6) im OSI-Modell?",
            "options": [
                "Sie sorgt für die Datenverschlüsselung und -kompression.",
                "Sie regelt den Datenfluss zwischen Sender und Empfänger.",
                "Sie stellt eine physische Verbindung zwischen zwei Geräten her.",
                "Sie verwaltet die Kommunikation zwischen mehreren Geräten in einem Netzwerk."
            ],
            "correctAnswer": "Sie sorgt für die Datenverschlüsselung und -kompression."
        },
        {
            "question": "Welches Protokoll wird verwendet, um eine IP-Adresse einer MAC-Adresse zuzuordnen?",
            "options": [
                "DNS",
                "ARP",
                "HTTP",
                "SMTP"
            ],
            "correctAnswer": "ARP"
        },
        {
            "question": "Welche der folgenden Aussagen über UDP (User Datagram Protocol) ist korrekt?",
            "options": [
                "UDP ist zuverlässiger als TCP.",
                "UDP ist schneller, aber bietet keine Fehlerkorrektur.",
                "UDP wird für sichere E-Mail-Kommunikation verwendet.",
                "UDP stellt sicher, dass Pakete in der richtigen Reihenfolge ankommen."
            ],
            "correctAnswer": "UDP ist schneller, aber bietet keine Fehlerkorrektur."
        },
        {
            "question": "Welches der folgenden Geräte arbeitet hauptsächlich auf der Netzwerkschicht (Layer 3)?",
            "options": [
                "Switch",
                "Router",
                "Hub",
                "Repeater"
            ],
            "correctAnswer": "Router"
        },
        {
            "question": "Welches Protokoll wird auf der Anwendungsschicht (Layer 7) für die Dateiübertragung verwendet?",
            "options": [
                "SMTP",
                "FTP",
                "TCP",
                "ICMP"
            ],
            "correctAnswer": "FTP"
        },
        
        {
            "question": "Welche Schicht im OSI-Modell verwaltet die Kommunikationssitzungen zwischen zwei Geräten?",
            "options": [
                "Transport Layer (Layer 4)",
                "Session Layer (Layer 5)",
                "Network Layer (Layer 3)",
                "Data Link Layer (Layer 2)"
            ],
            "correctAnswer": "Session Layer (Layer 5)"
        },
        {
            "question": "Welche der folgenden Technologien gehört zur physikalischen Schicht (Layer 1)?",
            "options": [
                "IP-Adressen",
                "RJ45-Stecker",
                "MAC-Adressen",
                "HTTP-Protokoll"
            ],
            "correctAnswer": "RJ45-Stecker"
        },
        {
            "question": "Welche Schicht im OSI-Modell ist für die Flusskontrolle und die Fehlerkorrektur zwischen zwei Endpunkten verantwortlich?",
            "options": [
                "Sicherungsschicht (Layer 2)",
                "Transportschicht (Layer 4)",
                "Netzwerkschicht (Layer 3)",
                "Anwendungsschicht (Layer 7)"
            ],
            "correctAnswer": "Transportschicht (Layer 4)"
        },
        {
            "question": "Welches der folgenden Protokolle wird für das Routing von Paketen verwendet?",
            "options": [
                "TCP",
                "UDP",
                "IP",
                "SMTP"
            ],
            "correctAnswer": "IP"
        },
        {
            "question": "Welche Aufgabe hat die Sicherungsschicht (Layer 2) im OSI-Modell?",
            "options": [
                "Sie stellt eine Ende-zu-Ende-Verbindung zwischen Anwendungen her.",
                "Sie kümmert sich um die physikalische Übertragung der Signale.",
                "Sie sorgt für die fehlerfreie Übertragung auf der direkten Verbindung zwischen zwei Geräten.",
                "Sie verwaltet die Kommunikationssitzungen zwischen Geräten."
            ],
            "correctAnswer": "Sie sorgt für die fehlerfreie Übertragung auf der direkten Verbindung zwischen zwei Geräten."
        },
        {
            "question": "Welche der folgenden Aussagen über Switches ist korrekt?",
            "options": [
                "Ein Switch arbeitet auf Layer 3 und verwendet IP-Adressen.",
                "Ein Switch arbeitet auf Layer 2 und verwendet MAC-Adressen.",
                "Ein Switch ist ein veraltetes Gerät und wird nicht mehr verwendet.",
                "Ein Switch arbeitet auf Layer 1 und leitet nur elektrische Signale weiter."
            ],
            "correctAnswer": "Ein Switch arbeitet auf Layer 2 und verwendet MAC-Adressen."
        },
        {
            "question": "Welche Schicht ist für die Verschlüsselung und Datenkompression zuständig?",
            "options": [
                "Transportschicht (Layer 4)",
                "Anwendungsschicht (Layer 7)",
                "Darstellungsschicht (Layer 6)",
                "Sicherungsschicht (Layer 2)"
            ],
            "correctAnswer": "Darstellungsschicht (Layer 6)"
        },
        {
            "question": "Welches Protokoll wird auf der Netzwerkschicht (Layer 3) verwendet, um die beste Route für Daten zu bestimmen?",
            "options": [
                "FTP",
                "OSPF",
                "UDP",
                "DHCP"
            ],
            "correctAnswer": "OSPF"
        },
        {
            "question": "Welche der folgenden Aussagen über MAC-Adressen ist korrekt?",
            "options": [
                "MAC-Adressen werden von Routern für das Routing verwendet.",
                "MAC-Adressen sind weltweit einmalig und werden auf der Sicherungsschicht genutzt.",
                "MAC-Adressen werden dynamisch von einem DHCP-Server vergeben.",
                "MAC-Adressen bestehen aus 64 Bit."
            ],
            "correctAnswer": "MAC-Adressen sind weltweit einmalig und werden auf der Sicherungsschicht genutzt."
        },
        {
            "question": "Welches Protokoll ist für die Namensauflösung von Domains zu IP-Adressen verantwortlich?",
            "options": [
                "HTTP",
                "DHCP",
                "DNS",
                "ICMP"
            ],
            "correctAnswer": "DNS"
        },
        {
            "question": "Welche Schicht im OSI-Modell stellt eine Schnittstelle für Benutzeranwendungen bereit?",
            "options": [
                "Sicherungsschicht (Layer 2)",
                "Netzwerkschicht (Layer 3)",
                "Anwendungsschicht (Layer 7)",
                "Transportschicht (Layer 4)"
            ],
            "correctAnswer": "Anwendungsschicht (Layer 7)"
        },
        {
            "question": "Welche Geräte arbeiten hauptsächlich auf Layer 1 (Physikalische Schicht)?",
            "options": [
                "Router und Firewalls",
                "Repeater und Hubs",
                "Switches und Access Points",
                "Server und Clients"
            ],
            "correctAnswer": "Repeater und Hubs"
        },
        {
            "question": "Welche der folgenden Aussagen über Firewalls ist korrekt?",
            "options": [
                "Firewalls arbeiten ausschließlich auf der Anwendungsschicht.",
                "Firewalls blockieren oder erlauben Datenverkehr basierend auf Regeln.",
                "Firewalls ersetzen Switches und Router in Netzwerken.",
                "Firewalls sind ausschließlich Hardware-Geräte."
            ],
            "correctAnswer": "Firewalls blockieren oder erlauben Datenverkehr basierend auf Regeln."
        },
        {
            "question": "Welches Protokoll ermöglicht die automatische Zuweisung von IP-Adressen?",
            "options": [
                "DNS",
                "DHCP",
                "ARP",
                "ICMP"
            ],
            "correctAnswer": "DHCP"
        },
        {
            "question": "Welches Protokoll wird verwendet, um zu testen, ob ein Host im Netzwerk erreichbar ist?",
            "options": [
                "FTP",
                "ICMP",
                "UDP",
                "HTTP"
            ],
            "correctAnswer": "ICMP"
        }
    ]
       






};