// You can modify these questions to create your own quiz
export const config = {
    // Points gained for correct answers
    correctPoints: 10,
    
    // Points deducted for incorrect answers
    incorrectPoints: 5,
    
    // All the questions for the quiz
    questions: [
        {
            "question": "Welche Einheit wird verwendet, um die Datenmenge von 1.024 Bytes zu beschreiben?",
            "options": ["Bit", "Kilobyte", "Megabyte", "Gigabyte"],
            "correctAnswer": "Kilobyte"
        },
        {
            "question": "Welches Protokoll wird hauptsächlich für die Übertragung von Webseiten im Internet verwendet?",
            "options": ["FTP", "SMTP", "HTTP", "POP3"],
            "correctAnswer": "HTTP"
        },
        {
            "question": "Was ist ein grundlegender Schutzmechanismus, um unbefugten Zugriff auf ein IT-System zu verhindern?",
            "options": ["Firewall", "Router", "Switch", "Hub"],
            "correctAnswer": "Firewall"
        },
        {
            "question": "Welche Methode wird verwendet, um die Wirtschaftlichkeit eines IT-Projekts zu bewerten?",
            "options": ["Netzplan", "Gantt-Diagramm", "Kosten-Nutzen-Analyse", "UML-Diagramm"],
            "correctAnswer": "Kosten-Nutzen-Analyse"
        },
        {
            "question": "Welche Hardware-Komponente ist für die kurzfristige Speicherung von Daten während der Verarbeitung zuständig?",
            "options": ["Festplatte", "RAM", "Prozessor", "Grafikkarte"],
            "correctAnswer": "RAM"
        },

        {
            "question": "Wie viele Bits sind in einem Kilobyte enthalten?",
            "options": ["8", "256", "1.024", "8.192"],
            "correctAnswer": "8.192"
        },
        {
            "question": "Welches Gerät verbindet verschiedene Netzwerke miteinander?",
            "options": ["Switch", "Router", "Hub", "Access Point"],
            "correctAnswer": "Router"
        },
        {
            "question": "Welche Adresse wird verwendet, um ein Gerät in einem Netzwerk eindeutig zu identifizieren?",
            "options": ["IP-Adresse", "MAC-Adresse", "URL", "DNS"],
            "correctAnswer": "MAC-Adresse"
        },
        {
            "question": "Was bedeutet die Abkürzung 'TCP'?",
            "options": ["Transmission Control Protocol", "Transfer Capacity Protocol", "Terminal Control Process", "Transport Communication Protocol"],
            "correctAnswer": "Transmission Control Protocol"
        },
        {
            "question": "Welche Schicht des OSI-Modells ist für die Datenverbindung zuständig?",
            "options": ["Schicht 1", "Schicht 2", "Schicht 3", "Schicht 4"],
            "correctAnswer": "Schicht 2"
        },
        {
            "question": "Welches Dateiformat wird für Bilder ohne Qualitätsverlust verwendet?",
            "options": [".jpg", ".png", ".gif", ".bmp"],
            "correctAnswer": ".bmp"
        },
        {
            "question": "Welches Betriebssystem ist Open Source?",
            "options": ["Windows", "macOS", "Linux", "iOS"],
            "correctAnswer": "Linux"
        },
        {
            "question": "Welche Übertragungsrate beschreibt 1.000 Megabit pro Sekunde?",
            "options": ["1 Gbps", "1 Mbps", "1 Tbps", "1 Kbps"],
            "correctAnswer": "1 Gbps"
        },
        {
            "question": "Welche Hardware ist für die Stromversorgung eines PCs verantwortlich?",
            "options": ["Mainboard", "Netzteil", "CPU", "RAM"],
            "correctAnswer": "Netzteil"
        },
        {
            "question": "Was ist ein Hauptziel der DSGVO?",
            "options": ["Datenverarbeitung beschleunigen", "Datenschutz in der EU gewährleisten", "Hardwarekosten senken", "Netzwerke optimieren"],
            "correctAnswer": "Datenschutz in der EU gewährleisten"
        },
        {
            "question": "Welche Art von Malware verbreitet sich selbstständig über Netzwerke?",
            "options": ["Virus", "Wurm", "Trojaner", "Spyware"],
            "correctAnswer": "Wurm"
        },
        {
            "question": "Welches Protokoll wird für den Versand von E-Mails verwendet?",
            "options": ["IMAP", "POP3", "SMTP", "HTTP"],
            "correctAnswer": "SMTP"
        },
        {
            "question": "Welche Sprache wird für die Strukturierung von Webseiten verwendet?",
            "options": ["CSS", "HTML", "Python", "Java"],
            "correctAnswer": "HTML"
        },
        {
            "question": "Welche Datenbankstruktur verwendet Tabellen mit Beziehungen?",
            "options": ["Hierarchisch", "Netzwerk", "Relational", "Flach"],
            "correctAnswer": "Relational"
        },
        {
            "question": "Welche Komponente speichert das Betriebssystem dauerhaft?",
            "options": ["RAM", "Festplatte", "Cache", "GPU"],
            "correctAnswer": "Festplatte"
        },
        {
            "question": "Was bedeutet 'WAN'?",
            "options": ["Wide Area Network", "Wireless Access Node", "Workstation Area Network", "Web Application Network"],
            "correctAnswer": "Wide Area Network"
        },
        {
            "question": "Welche Maßnahme schützt vor Datenverlust?",
            "options": ["Firewall", "Antivirus", "Backup", "Router"],
            "correctAnswer": "Backup"
        },
        {
            "question": "Was beschreibt die Anforderungen an ein IT-System?",
            "options": ["Lastenheft", "Pflichtenheft", "Rechnung", "Vertrag"],
            "correctAnswer": "Pflichtenheft"
        },
        {
            "question": "Welche Einheit misst die Datenübertragungsrate?",
            "options": ["Byte", "Bit pro Sekunde", "Hertz", "Watt"],
            "correctAnswer": "Bit pro Sekunde"
        },
        {
            "question": "Was ist ein Vorteil von Cloud Computing?",
            "options": ["Höherer Energieverbrauch", "Skalierbarkeit", "Weniger Sicherheit", "Langsamere Zugriffe"],
            "correctAnswer": "Skalierbarkeit"
        },
        {
            "question": "Welche Adresse ist eine IPv6-Adresse?",
            "options": ["192.168.0.1", "2001:0db8::1", "10.0.0.1", "172.16.254.1"],
            "correctAnswer": "2001:0db8::1"
        },
        {
            "question": "Welches Gerät modulieren Signale für Internetverbindungen?",
            "options": ["Router", "Switch", "Modem", "Hub"],
            "correctAnswer": "Modem"
        },
        {
            "question": "Welche Taste wird verwendet, um einen Befehl in der Kommandozeile auszuführen?",
            "options": ["Enter", "Esc", "Tab", "Shift"],
            "correctAnswer": "Enter"
        },
        {
            "question": "Welches Tool wird zur Fehleranalyse in Netzwerken verwendet?",
            "options": ["Ping", "Paint", "Excel", "Word"],
            "correctAnswer": "Ping"
        },
        {
            "question": "Was ist eine typische Aufgabe eines Betriebssystems?",
            "options": ["Datenbanken erstellen", "Prozesse verwalten", "Webseiten gestalten", "Netzwerke installieren"],
            "correctAnswer": "Prozesse verwalten"
        },
        {
            "question": "Welche Farbe hat ein standardmäßiges Ethernetkabel oft?",
            "options": ["Rot", "Blau", "Grün", "Gelb"],
            "correctAnswer": "Blau"
        },
        {
            "question": "Welche Software schützt vor Viren?",
            "options": ["Browser", "Antivirusprogramm", "Texteditor", "Datenbank"],
            "correctAnswer": "Antivirusprogramm"
        },
        {
            "question": "Was ist ein Beispiel für ein Office-Programm?",
            "options": ["Excel", "Photoshop", "Linux", "Apache"],
            "correctAnswer": "Excel"
        },
        {
            "question": "Welches Protokoll wird für den Zugriff auf E-Mails verwendet?",
            "options": ["SMTP", "IMAP", "FTP", "HTTP"],
            "correctAnswer": "IMAP"
        },
        {
            "question": "Welche Einheit beschreibt 1.000 Gigabyte?",
            "options": ["Megabyte", "Terabyte", "Petabyte", "Kilobyte"],
            "correctAnswer": "Terabyte"
        },
        {
            "question": "Was ist ein typischer Bestandteil eines Netzwerkkabels?",
            "options": ["Kupferdrähte", "Glasfasern", "Silberdrähte", "Plastikfolien"],
            "correctAnswer": "Kupferdrähte"
        },
        {
            "question": "Welche Technologie verbindet Geräte kabellos?",
            "options": ["Ethernet", "WLAN", "USB", "HDMI"],
            "correctAnswer": "WLAN"
        },
        {
            "question": "Welche Hardware steuert die Grafikanzeige?",
            "options": ["CPU", "RAM", "GPU", "SSD"],
            "correctAnswer": "GPU"
        },
        {
            "question": "Was ist ein Beispiel für eine Eingabegerät?",
            "options": ["Monitor", "Tastatur", "Lautsprecher", "Drucker"],
            "correctAnswer": "Tastatur"
        },
        {
            "question": "Welches Dateisystem wird oft unter Windows verwendet?",
            "options": ["NTFS", "FAT32", "ext4", "HFS+"],
            "correctAnswer": "NTFS"
        },
        {
            "question": "Welche Methode sichert Daten durch Verschlüsselung?",
            "options": ["Komprimierung", "Kodierung", "Kryptografie", "Partitionierung"],
            "correctAnswer": "Kryptografie"
        },
        {
            "question": "Was bedeutet 'DNS'?",
            "options": ["Domain Name System", "Digital Network Service", "Data Node Structure", "Dynamic Name Server"],
            "correctAnswer": "Domain Name System"
        },
        {
            "question": "Welche Taste löscht den Text vor dem Cursor?",
            "options": ["Entf", "Backspace", "Strg", "Alt"],
            "correctAnswer": "Backspace"
        },
        {
            "question": "Welche Software wird zur Verwaltung von Projekten genutzt?",
            "options": ["Trello", "Firefox", "Notepad", "VLC"],
            "correctAnswer": "Trello"
        },
        {
            "question": "Welche Netzwerkart verbindet Geräte in einem Gebäude?",
            "options": ["WAN", "LAN", "MAN", "PAN"],
            "correctAnswer": "LAN"
        },
        {
            "question": "Was ist ein Beispiel für eine Ausgabe-Hardware?",
            "options": ["Maus", "Monitor", "Tastatur", "Mikrofon"],
            "correctAnswer": "Monitor"
        },
        {
            "question": "Welches Protokoll wird für Dateiübertragungen genutzt?",
            "options": ["FTP", "HTTP", "SMTP", "DNS"],
            "correctAnswer": "FTP"
        },
        {
            "question": "Welche Einheit misst die Speichergröße?",
            "options": ["Hertz", "Byte", "Volt", "Sekunde"],
            "correctAnswer": "Byte"
        },
        {
            "question": "Was ist ein Beispiel für ein relationale Datenbankmanagementsystem?",
            "options": ["Oracle", "Photoshop", "GIMP", "Nginx"],
            "correctAnswer": "Oracle"
        },
        {
            "question": "Welche Hardware verbindet die CPU mit anderen Komponenten?",
            "options": ["Mainboard", "Netzteil", "RAM", "SSD"],
            "correctAnswer": "Mainboard"
        },
        {
            "question": "Welche Maßnahme schützt vor Phishing?",
            "options": ["Regelmäßige Updates", "E-Mail-Filter", "Backups", "Router-Konfiguration"],
            "correctAnswer": "E-Mail-Filter"
        },
        {
            "question": "Was ist ein Beispiel für eine Skriptsprache?",
            "options": ["Python", "C++", "Java", "Assembly"],
            "correctAnswer": "Python"
        },
        {
            "question": "Welche Technologie speichert Daten auf optischen Medien?",
            "options": ["SSD", "HDD", "CD", "RAM"],
            "correctAnswer": "CD"
        },
        {
            "question": "Welches Protokoll wird für die Zeit synchronisation verwendet?",
            "options": ["NTP", "HTTP", "FTP", "DNS"],
            "correctAnswer": "NTP"
        },
        {
            "question": "Welche Hardware ist für die Kühlung der CPU zuständig?",
            "options": ["Lüfter", "Netzteil", "RAM", "GPU"],
            "correctAnswer": "Lüfter"
        },
        {
            "question": "Was bedeutet 'SSD'?",
            "options": ["Solid State Drive", "System Storage Device", "Simple Serial Drive", "Static System Disk"],
            "correctAnswer": "Solid State Drive"
        },
        {
            "question": "Welche Methode wird verwendet, um Daten dauerhaft zu löschen?",
            "options": ["Formatieren", "Überschreiben", "Komprimieren", "Partitionieren"],
            "correctAnswer": "Überschreiben"
        },
        {
            "question": "Welche Taste speichert in vielen Programmen Änderungen?",
            "options": ["F5", "Strg+S", "Alt+F4", "Esc"],
            "correctAnswer": "Strg+S"
        },
        {
            "question": "Welches Tool überwacht den Netzwerkverkehr?",
            "options": ["Wireshark", "Notepad", "Paint", "Calculator"],
            "correctAnswer": "Wireshark"
        },
        {
            "question": "Welche Einheit beschreibt die Bildwiederholrate eines Monitors?",
            "options": ["Hertz", "Byte", "Watt", "Pixel"],
            "correctAnswer": "Hertz"
        },
        {
            "question": "Was ist ein Beispiel für ein Cloud-Speicher-Dienst?",
            "options": ["Google Drive", "Apache", "MySQL", "VLC"],
            "correctAnswer": "Google Drive"
        },
        {
            "question": "Welches Kabel überträgt Daten mit Licht?",
            "options": ["Twisted-Pair", "Koaxialkabel", "Glasfaserkabel", "USB-Kabel"],
            "correctAnswer": "Glasfaserkabel"
        },
        {
            "question": "Welche Software wird für Tabellenkalkulation verwendet?",
            "options": ["Word", "Excel", "PowerPoint", "Access"],
            "correctAnswer": "Excel"
        },
        {
            "question": "Was ist ein Beispiel für ein Netzwerkprotokoll?",
            "options": ["USB", "TCP/IP", "HDMI", "Bluetooth"],
            "correctAnswer": "TCP/IP"
        },
        {
            "question": "Welche Hardware speichert Daten ohne Strom?",
            "options": ["RAM", "SSD", "Cache", "Register"],
            "correctAnswer": "SSD"
        },
        {
            "question": "Welches Tool wird für die Verwaltung von IP-Adressen verwendet?",
            "options": ["DHCP", "FTP", "SMTP", "HTTP"],
            "correctAnswer": "DHCP"
        },
        {
            "question": "Welche Sprache wird für Datenbankabfragen verwendet?",
            "options": ["SQL", "HTML", "CSS", "JavaScript"],
            "correctAnswer": "SQL"
        },
        {
            "question": "Was ist ein Beispiel für ein Eingabe- und Ausgabegerät?",
            "options": ["Monitor", "Touchscreen", "Tastatur", "Drucker"],
            "correctAnswer": "Touchscreen"
        },
        {
            "question": "Welche Technologie verbindet Geräte in einem kleinen Bereich?",
            "options": ["LAN", "WAN", "PAN", "MAN"],
            "correctAnswer": "PAN"
        },
        {
            "question": "Welches Protokoll wird für die Namensauflösung verwendet?",
            "options": ["DNS", "FTP", "SMTP", "HTTP"],
            "correctAnswer": "DNS"
        },
        {
            "question": "Welche Hardware wird für die Datenspeicherung auf Magnetbändern verwendet?",
            "options": ["HDD", "SSD", "Tape-Laufwerk", "RAM"],
            "correctAnswer": "Tape-Laufwerk"
        },
        {
            "question": "Was bedeutet 'URL'?",
            "options": ["Uniform Resource Locator", "Universal Routing Language", "Unique Resource Link", "User Request Locator"],
            "correctAnswer": "Uniform Resource Locator"
        },
        {
            "question": "Welche Taste aktualisiert eine Webseite im Browser?",
            "options": ["F5", "Strg+C", "Alt", "Entf"],
            "correctAnswer": "F5"
        },
        {
            "question": "Welches Tool wird für die Versionsverwaltung verwendet?",
            "options": ["Git", "Excel", "Word", "Paint"],
            "correctAnswer": "Git"
        },
        {
            "question": "Welche Einheit beschreibt die Auflösung eines Bildschirms?",
            "options": ["Hertz", "Pixel", "Byte", "Watt"],
            "correctAnswer": "Pixel"
        },
        {
            "question": "Was ist ein Beispiel für ein Virtualisierungstool?",
            "options": ["VMware", "Notepad", "Chrome", "VLC"],
            "correctAnswer": "VMware"
        },
        {
            "question": "Welches Kabel überträgt Video- und Audiosignale?",
            "options": ["USB", "HDMI", "Ethernet", "VGA"],
            "correctAnswer": "HDMI"
        },
        {
            "question": "Welche Software wird für Präsentationen verwendet?",
            "options": ["Word", "Excel", "PowerPoint", "Access"],
            "correctAnswer": "PowerPoint"
        },
        {
            "question": "Was ist ein Beispiel für ein drahtloses Übertragungsmedium?",
            "options": ["Ethernetkabel", "WLAN", "Glasfaser", "Koaxialkabel"],
            "correctAnswer": "WLAN"
        },
        {
            "question": "Welche Hardware wird für die Eingabe von Audio verwendet?",
            "options": ["Lautsprecher", "Mikrofon", "Monitor", "Drucker"],
            "correctAnswer": "Mikrofon"
        },
        {
            "question": "Welches Dateisystem wird oft unter Linux verwendet?",
            "options": ["NTFS", "FAT32", "ext4", "HFS+"],
            "correctAnswer": "ext4"
        },
        {
            "question": "Welche Methode schützt Daten durch Zugriffskontrolle?",
            "options": ["Verschlüsselung", "Authentifizierung", "Komprimierung", "Partitionierung"],
            "correctAnswer": "Authentifizierung"
        },
        {
            "question": "Was bedeutet 'ISP'?",
            "options": ["Internet Service Provider", "Internal System Protocol", "Integrated Security Platform", "Information Storage Process"],
            "correctAnswer": "Internet Service Provider"
        },
        {
            "question": "Welche Taste kopiert markierten Text?",
            "options": ["Strg+C", "Strg+V", "Strg+X", "Strg+P"],
            "correctAnswer": "Strg+C"
        },
        {
            "question": "Welches Tool wird für die Netzwerkkonfiguration verwendet?",
            "options": ["ipconfig", "Notepad", "Paint", "Calculator"],
            "correctAnswer": "ipconfig"
        },
        {
            "question": "Welche Einheit beschreibt die Leistung eines Netzteils?",
            "options": ["Hertz", "Byte", "Watt", "Pixel"],
            "correctAnswer": "Watt"
        },
        {
            "question": "Was ist ein Beispiel für ein Backup-Medium?",
            "options": ["USB-Stick", "RAM", "Cache", "GPU"],
            "correctAnswer": "USB-Stick"
        },
        {
            "question": "Welches Kabel wird für ältere Monitore verwendet?",
            "options": ["HDMI", "VGA", "USB-C", "DisplayPort"],
            "correctAnswer": "VGA"
        },
        {
            "question": "Welche Software wird für Datenbankverwaltung verwendet?",
            "options": ["Word", "Excel", "Access", "PowerPoint"],
            "correctAnswer": "Access"
        },
        {
            "question": "Was ist ein Beispiel für ein Peer-to-Peer-Netzwerk?",
            "options": ["Client-Server", "BitTorrent", "LAN", "WAN"],
            "correctAnswer": "BitTorrent"
        },
        {
            "question": "Welche Hardware wird für die Ausgabe von Papierdokumenten verwendet?",
            "options": ["Scanner", "Drucker", "Monitor", "Tastatur"],
            "correctAnswer": "Drucker"
        },
        {
            "question": "Welches Dateisystem ist für USB-Sticks üblich?",
            "options": ["NTFS", "FAT32", "ext4", "HFS+"],
            "correctAnswer": "FAT32"
        },
        {
            "question": "Welche Methode verteilt Daten auf mehrere Festplatten?",
            "options": ["RAID", "Backup", "Partitionierung", "Komprimierung"],
            "correctAnswer": "RAID"
        },
        {
            "question": "Was bedeutet 'BIOS'?",
            "options": ["Basic Input Output System", "Binary Information Operating System", "Built-In Operating Software", "Base Internet Output Service"],
            "correctAnswer": "Basic Input Output System"
        },
        {
            "question": "Welche Taste schließt ein Programm unter Windows?",
            "options": ["Alt+F4", "Strg+S", "F5", "Esc"],
            "correctAnswer": "Alt+F4"
        },
        {
            "question": "Welches Tool wird für die Fernwartung verwendet?",
            "options": ["TeamViewer", "Notepad", "Paint", "Calculator"],
            "correctAnswer": "TeamViewer"
        },
        {
            "question": "Welche Einheit beschreibt die Latenzzeit?",
            "options": ["Sekunde", "Byte", "Hertz", "Watt"],
            "correctAnswer": "Sekunde"
        },
        {
            "question": "Was ist ein Beispiel für ein Betriebssystem für Server?",
            "options": ["Windows Server", "Photoshop", "Chrome", "VLC"],
            "correctAnswer": "Windows Server"
        },
        {
            "question": "Welches Kabel überträgt Daten und Strom gleichzeitig?",
            "options": ["USB", "HDMI", "Ethernet", "VGA"],
            "correctAnswer": "USB"
        },
        {
            "question": "Welche Software wird für Textbearbeitung verwendet?",
            "options": ["Word", "Excel", "PowerPoint", "Access"],
            "correctAnswer": "Word"
        },
        
        {
            "question": "Wie viele Bits enthält ein Byte?",
            "options": ["4", "8", "16", "32"],
            "correctAnswer": "8"
        },
        {
            "question": "Welche Netzwerkkomponente verbindet Geräte innerhalb eines lokalen Netzwerks (LAN)?",
            "options": ["Router", "Switch", "Modem", "Gateway"],
            "correctAnswer": "Switch"
        },
        {
            "question": "Welche IP-Adresse gehört zum privaten Adressbereich?",
            "options": ["172.16.0.1", "8.8.8.8", "203.0.113.1", "198.51.100.1"],
            "correctAnswer": "172.16.0.1"
        },
        {
            "question": "Was beschreibt die Abkürzung 'OSI' in der Netzwerktechnik?",
            "options": ["Open System Interconnection", "Operating System Interface", "Online Security Integration", "Organizational System Information"],
            "correctAnswer": "Open System Interconnection"
        },
        {
            "question": "Welche Schicht des OSI-Modells ist für die physische Übertragung von Daten zuständig?",
            "options": ["Schicht 1", "Schicht 3", "Schicht 5", "Schicht 7"],
            "correctAnswer": "Schicht 1"
        },
        {
            "question": "Welches Dateiformat wird häufig für komprimierte Archive verwendet?",
            "options": [".txt", ".zip", ".docx", ".exe"],
            "correctAnswer": ".zip"
        },
        {
            "question": "Was ist ein typisches Beispiel für ein Betriebssystem?",
            "options": ["Microsoft Word", "Linux", "Google Chrome", "Adobe Photoshop"],
            "correctAnswer": "Linux"
        },
        {
            "question": "Welches Kabel wird üblicherweise für Ethernet-Verbindungen verwendet?",
            "options": ["Koaxialkabel", "Glasfaserkabel", "Twisted-Pair-Kabel", "USB-Kabel"],
            "correctAnswer": "Twisted-Pair-Kabel"
        },
        {
            "question": "Welche Maßeinheit beschreibt die Geschwindigkeit eines Prozessors?",
            "options": ["Gigabyte", "Hertz", "Watt", "Bit"],
            "correctAnswer": "Hertz"
        },
        {
            "question": "Was ist ein Ziel des Datenschutzes?",
            "options": ["Daten schneller verarbeiten", "Persönliche Daten schützen", "Daten öffentlich zugänglich machen", "Hardwarekosten senken"],
            "correctAnswer": "Persönliche Daten schützen"
        },
        {
            "question": "Welche Art von Angriff versucht, Passwörter durch systematisches Ausprobieren zu knacken?",
            "options": ["Phishing", "Brute-Force", "Man-in-the-Middle", "SQL-Injection"],
            "correctAnswer": "Brute-Force"
        },
        {
            "question": "Welches Protokoll wird für den sicheren Datentransfer im Internet verwendet?",
            "options": ["HTTP", "FTP", "HTTPS", "SMTP"],
            "correctAnswer": "HTTPS"
        },
        {
            "question": "Welche Programmiersprache wird häufig für Webanwendungen verwendet?",
            "options": ["HTML", "JavaScript", "Excel", "SQL"],
            "correctAnswer": "JavaScript"
        },
        {
            "question": "Was ist ein typisches Beispiel für eine relationale Datenbank?",
            "options": ["MySQL", "Notepad", "WordPress", "Apache"],
            "correctAnswer": "MySQL"
        },
        {
            "question": "Welche Hardware-Komponente führt Berechnungen im Computer aus?",
            "options": ["RAM", "Festplatte", "CPU", "Netzteil"],
            "correctAnswer": "CPU"
        },
        {
            "question": "Was bedeutet die Abkürzung 'LAN'?",
            "options": ["Local Area Network", "Large Access Node", "Logical Application Network", "Limited Access Number"],
            "correctAnswer": "Local Area Network"
        },
        {
            "question": "Welche Maßnahme hilft, Datenverlust bei einem Hardwaredefekt zu vermeiden?",
            "options": ["Updates installieren", "Backups erstellen", "Antivirussoftware nutzen", "Router neu starten"],
            "correctAnswer": "Backups erstellen"
        },
        {
            "question": "Welches Dokument beschreibt die Anforderungen an ein IT-Projekt?",
            "options": ["Pflichtenheft", "Rechnung", "Netzplan", "Protokoll"],
            "correctAnswer": "Pflichtenheft"
        },
        {
            "question": "Welche Einheit wird für die Speicherkapazität einer Festplatte verwendet?",
            "options": ["Megahertz", "Terabyte", "Kilowatt", "Baud"],
            "correctAnswer": "Terabyte"
        },
        {
            "question": "Was ist ein Vorteil der Virtualisierung?",
            "options": ["Höherer Stromverbrauch", "Bessere Ressourcennutzung", "Langsamere Prozesse", "Weniger Sicherheit"],
            "correctAnswer": "Bessere Ressourcennutzung"
        }
    ]
};

