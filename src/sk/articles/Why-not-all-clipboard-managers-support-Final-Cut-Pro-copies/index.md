---
canonicalUrl: "https://cleanclip.cc/sk/articles/Why-not-all-clipboard-managers-support-Final-Cut-Pro-copies/"
---

# Odpověď na dotaz uživatele: Proč ne všechny správce schránky podporují kopie z Final Cut Pro?

Final Cut Pro nikdy neměl užitečnou funkci záložek, takže nástroj správce schránky s funkcí záložek by byl skvělým partnerem pro Final Cut Pro.
![Spolupráce s Final Cut Pro a bezplatným správcem schránky CleanClip](./cooperate-with-final-cut-pro.png)

Nicméně, ne všechny nástroje správce schránky podporují funkci záložek a ne všechny nástroje podporují záznamy kopií z Final Cut Pro.

## **Otázka uživatele:**

> Zaznamenává (CleanClip) kopírované položky z profesionálních aplikací jako Final Cut Pro? Používám Paste k rychlému vložení klipů a efektů klipů a vím, že ne všechny správce schránky zaznamenávají tyto typy ne-textových a neobrázkových položek ze schránek.
Zvědavě se ptám, jaké další kroky byly nutné k provedení tohoto (ptám se jako ne-vývojář)? Zajímá mě, proč toto nepodporují všechny správce schránky.

> [CleanClip](https://cleanclip.cc) zaznamenává položky z profesionálních aplikací jako Final Cut Pro? Používám Paste k rychlému vkládání klipů a efektů klipů a vím, že ne všechny správce schránky zaznamenávají tyto specifické položky ze schránek obsahující ne-textová a neobrázková data.

https://www.reddit.com/r/macapps/comments/193ds1j/comment/khe5xjx/?utm_source=share&utm_medium=web2x&context=3

## **Odpověď:**

Dovolte mi to jednoduše vysvětlit.

Pracovní postup se schránkou je jednoduchý: A aplikace vkládá své vlastní věci do schránky, B si je vezme zpět z schránky a vloží je do svého prostředí.

Zde vzniká jeden problém, **jak B ví, co A vložil a jak práci s těmito daty?**
Mac má dohodu, že každá položka vložená do schránky musí mít alespoň dvě věci: 1. **Název typu**, který slouží k identifikaci, o jaký typ se jedná. 2. **Samotný obsah kopie**.

Poté B, když si vezme data, se nejprve zeptá schránky: "O jaká data se jedná?" Schránka odpoví: "Je to **obrázek (název typu)**". B poté řekne: "Tak mi tu data dej." Poté, co B získá data, použije **způsob k analýze obrázku tohoto úseku dat** a poté je zobrazí.
Stejné platí pro jakékoli jiné typy dat.

------
**Teď pojďme mluvit o veřejných a privátních typech schránky.**

**Veřejné typy:**
Základní text, obrázek, soubor, jsou veřejné typy. Jejichž definice je součástí systému Mac, takže všechny aplikace na Macu vědí, jaká jsou jejich jména typů a jak vypadá jejich datová struktura.

**Privátní typy:**
Existují také typy, jako je například FCP, které chtějí kopírovat složitější obsah, například po každém stisknutí CMD+C by mohly být v schránce uloženy tato data: 3 videa, délka každého videa, pozice na časové ose při kopírování, hierarchický vztah atd.
V takovém případě běžné veřejné typy Macu nestačí, co s tím? FCP říká, vytvořím nový typ s názvem „fcp“, a já si naplánuji strukturu dat sám.
V tom případě FCP ve svém vnitřku může volně kopírovat a vkládat data typu „fcp“, protože si FCP sám ví, že tento typ dat s názvem „fcp“ má jak data interpretovat.

**Jako takové, aplikace jeden druhému jistě ukáží, že existuje tento datový typ „fcp“, jenom ho nemůžou interpretovat.**

-------
**Jak je důležité moci interpretovat privátní data?**
Důležité je vědět, že správce schránky potřebuje znát typy dat, nemusí je však nutně interpretovat.

**Vědět, jaké datové typy existují, nám pomůže označit typ kopírované položky ve správci schránky**: textový typ, obrázkový typ, fcp typ.

**Pokud bychom mohli data interpretovat, mohlo by nám to pomoci udělat uživatelské prostředí přívětivější**, například bychom mohli v prostředí správce schránky označit přibližný obsah těchto dat:
- Pokud je to text, mohli bychom zobrazit několik prvních znaků.
- Pokud je to obrázek, mohli bychom zobrazit náhled, rozměry obrázku.
- Pokud je to fcp, my nemůžeme interpretovat. Proto není jiná možnost, jak data zobrazit uživatelsky přívětivěji.
![image](https://github.com/auv1107/blug/assets/2681464/e0f8786a-7078-449d-83b4-21d080853f28)

------

**Proč některé správce schránky podporují a některé ne?**

Důvody mohou být různorodé. Podle výše uvedeného vysvětlení můžeme zjistit jednu možnou příčinu:

**1. Tato privátní data nemají žádné identifikační znaky, a tím nezlepšují uživatelský zážitek**

Pokud v FCP zkopírujete deset obsahů a nemáte informace o datovém obsahu, i když by to bylo podporováno, uživatel nepozná, který obsah patří kam. To nemá žádný smysl pro používání.

**2. Omezení cíle produktu**

Některé aplikace kvůli určitým potřebám uživatelů nastavují funkci bílého seznamu typů. Maccy například umožňuje uživatelům vybrat, které typy mají být sledovány a uloženy na bílém seznamu.

Protože privátní typy jsou nekonečné, nemůžeme je všechny vypsat. Pokud se nedá všechny vypsat, tak všechny privátní datové typy nebudou povoleny. Proto je zřejmé, že bude blokována velká část privátních dat.

**3. Malá poptávka, tým se rozhodne nepodporovat**

V porovnání s těmi běžnými typy, poptávka těchto privátních datových typů patří mezi skupinu s malým počtem uživatelů. Uživatelská základna je malá, a tým se může aktivně rozhodnout nepodporovat.

Myslím si však, že pro správce schránky v oblasti editací existuje obrovský potenciál k objevování, plánuji to podpořit a doufám, že budeme mít příležitost k dalším diskusím, abychom objevili další potřeby uživatelů.

**4. Chyby vývojářů**

To je velmi pravděpodobné, pokud vývojáři nebyli upozorněni na tento problém dostatečným počtem uživatelů, a neměli dostatečné zkušenosti s vývojem správce schránky. Existuje pravděpodobnost, že na tento problém nebudou věnovat pozornost.


Původně jsem chtěl jen stručně vysvětlit, ale omylem jsem toho vylil příliš mnoho haha. Doufám, že vás tyto informace uspokojují.

---

Autor: Sintone Li

Článek naleznete zde: {{ $page.frontmatter.canonicalUrl }}
