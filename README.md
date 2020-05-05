# Web Design @cmda-minor-web 1920
Dit vak gaat geheel over exclusive design. Kort samengevat: een design op maat gemaakt voor één persoon. Het is dus belangrijk dat het design volledig aansluit op deze persoon z'n wensen. Daarbij moet je denken aan wat deze persoon leuk vindt, hoe hij of zij werkt, wat valkuilen zijn in algemeen design, etc. 

- **Wie:** Marie van Driessche. Marie is Doof (met een hoofdletter inderdaad, dat betekent dat ze zichzelf als Doof identificeert, wat simpelgezegd betekent dat haar eerste taal Nederlandse Gebarentaal is). Je zult begrijpen dat Marie moeite heeft met dingen waar geluid een grote rol speelt. Marie is interaction designer, werkzaam bij de op de digitale afdeling van de NPO. Marie komt over als iemand die zeer positief in het leven staat en er zin in heeft. Haar hobbies zijn haar werk, yoga, koken en kickboxen. 

- **Wat:** Hoe werkt closed captions voor Marie? Hoe kan je dit binnen een inclusive design leuker, beter en met meer emotie ontwerpen?

## Installeren
1. Open je terminal op je computer
2. Maak een map aan waar je het project in wil hebben met `mkdir`
3. Clone de repo met 
<br></br>
`https://github.com/Coenmathijssen/functional-programming.git`
<br></br>
4. Navigeer via je terminal naar de repo met `cd`. Installeer vervolgens de benodigde dependencies met
<br></br>
`npm install`
<br></br>
5. Voor het builden, bundlen en compilen (om te publiceren) van de javascript gebruik
<br></br>
`npm run build`
<br></br>
6. Open de index.html in je browser om de website te bekijken

## Week 1
### Over dit vak
Vandaag kregen we te horen wat de planning is voor de aankomende weken. We gaan werken aan een exclusive design. Dit is een design wat volledig ontworpen is voor een persoon. Het is dus op maat gemaakt.

### Eerste concept
Een hoop genres films en series komen nog prima over zonder geluid. Dit zijn voornamelijk genres waarbij geluid niet heel veel emotie hoeft over te brengen. Een genre waarbij het ontbreken van geluid een enorm gemis is? Horror en thriller. Ik dacht meteen terug aan vroeger. Dat ik als puber met vrienden naar de bioscoop ging om een nieuwe horror film te kijken. In de bioscoop was het altijd zoveel enger dan thuis. Hoe komt dat toch? Door het geluid. Probeer maar eens een horror film te kijken zonder. Geluid maakt een horror film. Voornamelijk jumpscares worden pas écht eng met een passend hard geluid. Voor Marie ontbreekt dit natuurlijk. Dus ik zat na te denken hoe ik deze ervaring tóch zo goed mogelijk over kan brengen voor Marie. Ik kwam op het volgende:

Geluid is eigenlijk niets meer dan trilling in de lucht. Het geluid kan Marie dan weliswaar niet horen, maar de trilling wel. De trilling kan je namelijk voelen in je lichaam. Ik had wel eens gehoord van dove mensen die naar festivals gaan, omdat die ritmische trillingen heel fijn voelt. Wat nou als ik de angst die geluid brengt bij horror kan vervangen door trilling? Door middel van een socket verbinding en de navigator.vibrate() API kan ik trillingen synchroon laten lopen met video. Zo kan ik de angst die geluid brengt vervangen door trilling.  

Ik ga dit concept voorleggen, kijken of ik in de goede richting zit of dat ik het heel ergens anders moet zoeken.

### Eerste meeting
Vandaag hebben we de eerste meeting met Marie. Omdat de eerste meeting is, gaat ons hele groepje veel algemene vragen stellen. Door de beperkte tijd en om te voorkomen dat er dubbele vragen zijn, hebben we besloten om samen een aantal vragen op te stellen. Deze hebben we losjes verdeeld, zodat iedereen wijzer kon worden van deze algemene kennis. Daarnaast had ik een aantal vragen gerelateerd aan mijn idee/concept. 

#### Vragen
**Over Marie:**
- Wat doe je graag als je thuis bent?
- Ben je iemand die meer houdt van naar buiten gaat en een activiteit ondernemen of toch liever op de bank een serietje kijkt?
- Wat doe je het meest op internet? Wat vermijd je liever?
- Welk device, systeem en browser gebruik je bij het kijken van video’s?
- Op welk platform kijk je graag series/films?
- Wat is het eerste dat je opent als je achter je computer zit?
- Favoriete seizoen?
- Ochtend of avond mens?
- Favoriete kleuren?

**CC related questions:**
- Wat zijn volgens jou de huidige problemen met CC?
- Wanneer gebruik je CC? (alleen video’s die langer duren dan een paar minuten of ook voor video’s die korter dan een minuut duren)
- Hoe vaak per dag gebruik je CC?
- Op welke sites gebruik je CC het meest?
- Op welk soort media mis je CC? (Zijn er media die jij graag wilt gebruiken maar die geen CC hebben)
- Is het handig om toonhoogtes uit te beelden?
- Zijn er dingen waar je extra context nodig hebt om te begrijpen waar het over gaat?
- Wat zou jij graag willen veranderen aan CC?
- Als websites je de mogelijkheid aanboeden om captions aan te passen qua grootte,snelheid etc. doe je dat?
- Is het belangrijk waar de closed captions op het beeld staan gepositioneerd? (Wat is volgens jou de beste positie voor CC)
- Is emotie overbrengen/begrijpen een probleem met de huidige CC? Hoe moeilijk is het voor jou om emoties op te vangen wanneer je films kijkt?
- Vind je het fijn als de CC woord-voor-woord is of liever de hele zin in een keer?
- Zou je het fijn vinden als de closed captions visueel ook aangeven of een geluid hard/zacht is (bijvoorbeeld: ipv dat er *screaming* in de CC staat is de CC tekst een grotere font-size)
- Wat zijn volgens jou de huidige problemen met CC?

#### Belangrijkste bevindingen
- Interactiviteit, gebruiksvriendelijkheiid en multidevice zijn belangrijk voor Marie tijdens het kijken van een video.
- Closed captions kijkt Marie eigenlijk altijd in het Engels. Dan krijgt ze de taal direct binnen en snapt ze het best wat er bedoeld wordt. Als ze vertaalde ondertitels leest, heeft ze toch het gevoel dat iemand met de vertaling toch nog bepaalde keuzes heeft gemaakt met het vertalen van de informatie.
- 'Spannende muziek', wat is dat dan? Geluid is voor Marie heel abstract. Een rijdende auto of een fluitende vogel is bijvoorbeeld makkelijker voor te stellen.
- Doven houden over het algemeen van actie films. Daar gebeurt veel en is weinig dialoog. Wat aantrekkelijk is om te kijken. **HAAR DOET HORROR EN FILMS VRIJ WEINIG**
- Naar aanleiding hiervan stelde ik een vraag aansluitend op mijn concept: een groot deel van het plezier bij het kijken van een horror / thriller, is naar mijn idee de spanning en angst die ontstaat door het geluid. Geluid kun jij natuurlijk niet ervaren, maar trilling wel. En geluid is tenslotte trilling. Zou je meer interesse hebben in een horror/thriller als de trillingen de jump scares (schrikmomenten met geluid) worden gecomplementeerd met trillingen? Dat leek haar wel een interessant iets. Dat zou ze zeker proberen. Wel waarschuwde ze mij dat het subtiel moet worden doorgevoerd. In de bioscoop keek ze een keer een actiefilm waarbij ze het geluid kon voelen, dat vond ze wel heel gaaf. Hier kan ik dus wel wat mee!
- Ze heeft een telefoon, iPad, laptop en TV als apparaten thuis.
- De manier van schrijven van CC brengt wel emotie door.
- Emotie is natuurlijk heel subjectief. Hoe weet je wat wat betekent? Bijvoorbeeld bij kleuren.
- Haar favoriete series zijn iets als een detective serie, the bridge of f.r.i.e.n.d.s. 
- Namen bij CC is best wel handig en voorkomt verwarring.
- Interesses van Marie zijn: koken/eten, kickboxen, UX/UI.
- New Kids Turbo is een goed voorbeeld van CC, omdat zij dialect doorvertalen in de ondertiteling. Bijvoorbeeld 'jonguh'.

#### Conclusie met betrekking tot mijn concept:
Trillingen zouden tof kunnen zijn, maar wel in subtiele mate. Vooral bij de genres actie, thriller en horror zou dit goed kunnen werken. Trillingen die ze meekrijgt in de bioscoop verbeteren de kijkervaring ook. Goed opletten: welke trilling is nou wat.

## Week 2
Ik ben druk bezig geweest om een werkend gecodeerd concept te bouwen. Dit is gelukt en ik ben ready voor de volgende test. Er zijn wel een aantal beperkingen aan het licht gekomen met de vibrate() javascript functie:
- Het werkt alleen op mobiele browsers zoals Chrome, FireFox of Edge, **niet** op Safari. Ik hoop dus heel erg dat ze geen Safari op haar mobiel gebruikt of bereid zou zijn om een andere browser te gebruiken bij deze website.
- Intensiteit kan je niet meegeven aan trillingen. Alleen duur en frequentie. Onderscheid maken is dus moeilijk.

De app staat op https://webdesign-coen.herokuapp.com/ gedeployed.

### Tweede meeting
Vandaag is het een kwestie van bovenstaande vragen beantwoorden en de ervaring met het eerste prototype te toetsen. Om een realistischere setting te geven, heb ik er één geschreven die ik ga voorleggen:

Het liefste zou ik willen dat je het een beetje donker maakt in de kamer, om een goede setting te creëeren. Stel je voor dat je nu op een Winterse vrijdavond alleen thuis bent en een horror film besluit te kijken. De openhaart is aan en de lichten staan uit. Bezoek de website en laat je leiden. Sidenote: de introductieschermen moet je op beide apparaten doorklikken. Ik had te weinig tijd om dit elegant op te lossen.

#### Bevindingen bij anderen

#### Bevindingen naar aanleiding van mijn test
Ik kwam van een koude kermis thuis tijdens het testen. Ik wist al dat Safari de vibreer web API niet ondersteund. Helaas blijkt heel IOS deze web API niet te ondertussen. Het ongelukkige toeval betreft dat Marie ook een iPhone heeft. Dit is dus wel een enorme setback. Ik was al redelijk ver met mijn ontwerp en dit moet ik dus helemaal om gaan gooien. Ook heel spijtig dat ik nu een test moment mis. Ik ga nog even nadenken wat ik hiermee ga doen.

### Spoedoverleg
De leraren deden doorschemeren dat ze het huidige concept best tof en orgineel vonden. Hier ben ik het mee eens en ik vind het eigenlijk heel jammer om hier van af te wijken. Ik heb dus even overlegd met Koop en Vasilis. Naar aanleiding hiervan heb ik besloten om het huidige concept door te zetten en een Android telefoon bij haar thuis te krijgen. Zo blijft dit concept een vette enhancement.

### Concept verder ontwikkelen
Ik heb gekozen om closed captions uit te werken voor een fragment uit de film Insidious gekozen. Dit is een (redelijk) goede horror film met redelijk wat jump scares. Dit past perfect bij mijn concept dus. Ik heb een fragment uitgekozen waar een aantal jump scares in voorkomen die ik kan uitwerken met trillingen. Daarnaast zitten er genoeg achtergrond geluiden in waar ik wat nuttigs mee zou kunnen doen met closed captions. Deze heb ik uitgeschreven op papier:
![image](https://user-images.githubusercontent.com/43337909/79979052-327ee700-84a1-11ea-89f4-a48524998642.png)

## Week 3
Ik heb het fragment een aantal keer geanalyseerd en heb alle dialoog en geluiden genoteerd:

**Dialoog**
1.	01:08-01:11 = ‘Something really weird happened to me today.’ (68 – 71)
2.	01:11-01:12 = ‘Huh, what?’ (71 – 72)
3.	01:13-01:15 =  ‘I heard this noice coming from Cali’s room’ (73 – 75)
4.	01:15,5-01:19 = ‘It was on the baby monitor. It was like… voices.’ (75,5 – 79)
5.	01:19-01:22 = ‘And I ran up here and had a look, but there was no one in there’. (79 – 82)
6.	01:24-01:26 = ‘Hmm, it’s probably just interference.’ (84 – 86)
7.	01:26-01:28,5 = ‘Those things are always picking up somebody’s signal.’ (86 – 88)
8.	01:28,5-01:31 = Aaah I dunno. It sounded so clear.’ (88 – 91)
9.	01:31-01:33 = ‘It was like this… whispering.’ (91 – 93)
10.	01:34-01:36 = ‘It scared the hell out of me.’ (94 – 96)
11.	01:36-01:38,5 = ‘I… I was at the piano and I could hear it on the monitor.’ (96 – 98,5)
12.	01:38,5-01:41 = ‘And I turned up the volume and’ (98.5 – 101)
13.	01:43-01:44 = ‘What the hell was that’ (103 – 104)
14.	01:49-01:52 = ‘Hold on. Stay here.’ (109 – 112)
15.	02:11-02:22 = ‘Who is it?’ (131 – 132)
16.	02:48-02:49 = ‘Hello?’ (168 – 169)
17.	03:24-03:26 = ‘OH MY GOD, JOSH! JOSH!!’ (204 – 206)
18.	03:26-03:28 = ‘Please come into Cali’s room.’ (206 – 208)
19.	03:28-03:30 = ‘Someone’s in Cali’s room! There’s someone there!’ (208 – 210)
20.	03:30-03:31 = ‘I saw somebody.’ (210 – 211)
21.	03:34-03:36 = ‘He was standing right there! He was standing right there!!’ (214 – 216)
22.	03:40-03:41 = ‘There’s nobody here…’ (220 – 221)
23.	03:41-03:42 = ‘I saw someone.’ (221 – 222)
24.	03:44-03:48 = ‘Okay, okay, take her, get Foster, go into Dalton’s room.’ (224 – 228)
25.	04:03-04:05 = ‘Foster!! What’s going on? The alarm has gone off’ (243 – 245)
26.	05:13-05:14 = ‘Goddammit.’ (313 – 314)

**geluiden**
1. 00:09-1:05 = beeping monitor (9 – 65)
2. 00:35-00:39 = voetstappen (35 – 39)
3. 00:45-00:49 = deur kraakt dicht tot kiertje (45 – 49)
4. 00:53-00:56 = deur helemaal dicht (53 - 56)
5. 01:04-01:06 = geluid en voetstappen (64 – 66)
6. 01:41-01:43 = banging on door (101 – 103)
7. 01:48-01:49 = banging on door (108 – 109)
8. 03:11-03:24 = baby crying (191 – 204)

### Probleem oplossen voor de test
Nadat ik mijn app had gedeployed, kwam ik erachter dat de video niet afspeelt op een ander apparaat, wanneer je op play drukt met je mobiel. Ik kwam erachter dat je eerst op beide apparaten interactie moet hebben op de website, voordat je een video kan afspelen via een socket event. 

### Derde meeting



