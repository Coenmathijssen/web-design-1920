# Web Design @cmda-minor-web 1920
//Interactie ontwerpen: Rapid prototypen en testen met echte mensen

Web Design gaat over het ontwerpen en testen van Interactie. Het voordeel van een Frontend Developer (en Web Designer) is dat die techniek begrijpt, kan toepassen én verstand heeft van UX en design. Als je Web technieken begrijpt kun je je ideeën snel prototypen en testen met echte gebruikers, in een browser. Je kan dan aanpassingen doorvoeren, uitproberen en weer testen ...

In het vak Web design gaan we dingen ontwerpen voor echte mensen. Is er goede interactie? Kan je 'mens' je product op een prettige manier bedienen? Wat voor principes heb je gebruikt en getest? En zit er wel _nonsense_ in?


## Opdracht 1 
- **Wie:** Marie van Driessche. Marie is Doof (met een hoofdletter inderdaad, dat betekent dat ze zichzelf als Doof identificeert, wat simpelgezegd betekent dat haar eerste taal Nederlandse Gebarentaal is). Je zult begrijpen dat Marie moeite heeft met dingen waar geluid een grote rol speelt.
- **Wat:** Hoe werkt closed captions voor Marie?

## Week 1
### Over dit vak
Vandaag kregen we te horen wat de planning is voor de aankomende weken. We gaan werken aan een exclusive design. Dit is een design wat volledig ontworpen is voor een persoon. Het is dus op maat gemaakt.

Ik ga dit concept voorleggen, kijken of ik in de goede richting zit of dat ik het heel ergens anders moet zoeken.

### First meeting
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

### Second meeting
Vandaag is het een kwestie van bovenstaande vragen beantwoorden en de ervaring met het eerste prototype te toetsen. Om een realistischere setting te geven, heb ik er één geschreven die ik ga voorleggen:

Het liefste zou ik willen dat je het een beetje donker maakt in de kamer, om een goede setting te creëeren. Stel je voor dat je nu op een Winterse vrijdavond alleen thuis bent en een horror film besluit te kijken. De openhaart is aan en de lichten staan uit. Bezoek de website en laat je leiden. Sidenote: de introductieschermen moet je op beide apparaten doorklikken. Ik had te weinig tijd om dit elegant op te lossen.

#### Bevindingen bij anderen

#### Bevindingen naar aanleiding van mijn test
Ik kwam van een koude kermis thuis tijdens het testen. Ik wist al dat Safari de vibreer web API niet ondersteund. Helaas blijkt heel IOS deze web API niet te ondertussen. Het ongelukkige toeval betreft dat Marie ook een iPhone heeft. Dit is dus wel een enorme setback. Ik was al redelijk ver met mijn ontwerp en dit moet ik dus helemaal om gaan gooien. Ook heel spijtig dat ik nu een test moment mis. Ik ga nog even nadenken wat ik hiermee ga doen.

### Spoedoverleg
De leraren deden doorschemeren dat ze het huidige concept best tof en orgineel vonden. Hier ben ik het mee eens en ik vind het eigenlijk heel jammer om hier van af te wijken. Ik heb dus even overlegd met Koop en Vasilis. Naar aanleiding hiervan heb ik besloten om het huidige concept door te zetten en een Android telefoon bij haar thuis te krijgen. Zo blijft dit concept een vette enhancement.

### Concept verder ontwikkelen
Ik heb gekozen om closed captions uit te werken voor een fragment uit de film Insidious gekozen. Dit is een (redelijk) goede horror film met redelijk wat jump scares. Dit past perfect bij mijn concept dus. Ik heb een fragment uitgekozen waar een aantal jump scares in voorkomen die ik kan uitwerken met trillingen. Daarnaast zitten er genoeg achtergrond geluiden in waar ik wat nuttigs mee zou kunnen doen met closed captions. Deze heb ik uitgeschreven op papier:


