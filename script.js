// ===== Данные — редактируйте здесь =====
// bg — цвет фона витрины под аромат. Цвет текста подбирается автоматически.

const STARS = [
  {
    id: "toktar",
    name: "Еркебулан Токтар",
    poster: "assets/stars/toktar-poster.jpg",
    perfumes: [
      {
        slug: "oud-for-greatness", brand: "Initio Parfums Privés", name: "Oud for Greatness", bg: "#d6b689",
        desc: "Глубокий и статусный уд с пряностями — аромат, который входит в комнату раньше владельца.",
        notes: ["Шафран", "Мускатный орех", "Лаванда", "Уд", "Пачули"],
        prices: { "3 мл": 12000, "6 мл": 24000, "10 мл": 40000 },
        full: { label: "90 мл", price: 180000, gift: true },
      },
      {
        slug: "monarc", brand: "CEVI", name: "Monarc", bg: "#bcb68f",
        desc: "Фруктово-кожаный экстрейт в духе культовых «королевских» ароматов — ярко и уверенно.",
        notes: ["Ананас", "Чёрная смородина", "Кожа"],
        prices: { "10 мл": 9000 },
        full: { label: "100 мл", price: 45000 },
      },
      {
        slug: "limmensite", brand: "Louis Vuitton", name: "L’Immensité", bg: "#86bfca",
        desc: "Свежесть открытого горизонта: сочные цитрусы, имбирь и чистый минеральный шлейф.",
        notes: ["Грейпфрут", "Имбирь", "Бергамот", "Амброксан"],
        prices: { "3 мл": 15000, "6 мл": 30000, "10 мл": 50000 },
      },
      {
        slug: "meteore", brand: "Louis Vuitton", name: "Météore", bg: "#a8c2d8",
        desc: "Искрящиеся цитрусы и нероли на пряной ветиверной базе — элегантная свежесть на каждый день.",
        notes: ["Бергамот", "Мандарин", "Нероли", "Перец", "Ветивер"],
        prices: { "3 мл": 15000, "6 мл": 30000, "10 мл": 50000 },
      },
      {
        slug: "ombre-nomade", brand: "Louis Vuitton", name: "Ombre Nomade", bg: "#e0b296",
        desc: "Дымный уд, малина и ладан — тёплый, роскошный и очень шлейфовый.",
        notes: ["Уд", "Малина", "Роза", "Ладан", "Бензоин"],
        prices: { "3 мл": 16500, "6 мл": 33000, "10 мл": 55000 },
      },
    ],
    bundle: {
      title: "Весь образ: набор из 5 ароматов",
      sub: "Все ароматы Еркебулана в одном наборе — и подарок от нас.",
      prices: { "по 3 мл": 61200, "по 6 мл": 122400, "по 10 мл": 204000 },
    },
  },
  {
    id: "abilova",
    name: "Мерей Абилова",
    poster: "assets/stars/abilova-poster.jpg",
    perfumes: [
      {
        slug: "gaba", brand: "Hormone Paris", name: "Gaba", bg: "#efc1a2",
        desc: "Чистый, спокойный и притягательный: сочная мандариновая свежесть, нежный османтус и мягкий мускус создают эффект «дорогой кожи».",
        notes: ["Мандарин", "Османтус", "Мускус"],
        prices: { "3 мл": 12000, "6 мл": 24000, "10 мл": 40000 },
      },
      {
        slug: "kosmala-4", brand: "Thomas Kosmala", name: "Nº 4 Après l’Amour", bg: "#c2cebd",
        desc: "Свежий и чистый аромат с яркими цитрусами и мягкой амбро-мускусной дымкой. Звучит дорого и современно.",
        notes: ["Цитрусы", "Амбра", "Мускус"],
        prices: null, // цена не указана на Taplink
      },
    ],
    bundle: {
      title: "MIX «Gaba + Kosmala 4»",
      sub: "Kosmala 4 даёт искристую свежесть, Gaba — бархатную мягкость. Вместе — идеальный баланс свежести и нежности.",
      prices: { "по 3 мл": 19500, "по 6 мл": 39000, "по 10 мл": 65000 },
    },
  },
  {
    id: "bayan",
    name: "Баян Максатқызы",
    poster: "assets/stars/bayan-poster.jpg",
    perfumes: [
      {
        slug: "cassiopea", brand: "Tiziana Terenzi", name: "Cassiopea", bg: "#e4d1aa",
        desc: "Аромат нежности и света: маракуйя, свежая зелень и белые цветы на мягком мускусе и сандале. Как облако на коже.",
        notes: ["Маракуйя", "Белые цветы", "Мускус", "Сандал"],
        prices: { "3 мл": 7500, "6 мл": 15000, "10 мл": 25000 },
      },
      {
        slug: "beautiful-wild", brand: "Haute Fragrance Company", name: "Beautiful & Wild", bg: "#dfb0ab",
        desc: "Утончённый аромат с феромонами: сочная роза и личи, пряная герань и фрезия на тёплой древесной базе.",
        notes: ["Роза", "Личи", "Герань", "Фрезия", "Дерево"],
        prices: { "3 мл": 15000, "6 мл": 30000, "10 мл": 50000 },
      },
      {
        slug: "kosmala-7", brand: "Thomas Kosmala", name: "Nº 7 Le Sel de la Terre", bg: "#a6d0de",
        desc: "Унисекс, словно морской бриз в лучах лимонного солнца: бергамот, лимон и солёная вода.",
        notes: ["Бергамот", "Лимон", "Морская соль"],
        prices: { "3 мл": 7500, "6 мл": 15000, "10 мл": 25000 },
      },
      {
        slug: "delina", brand: "Parfums de Marly", name: "Delina", bg: "#efc4cd",
        desc: "Чарующий аромат для женщины, излучающей женственность и силу: свежий, слегка кисловатый, с изысканной сладостью.",
        notes: ["Роза", "Пион", "Личи", "Мускус"],
        prices: { "3 мл": 12000, "6 мл": 24000, "10 мл": 40000 },
      },
      {
        slug: "honour-43", brand: "Amouage", name: "Honour 43", bg: "#e2cda4",
        desc: "Один из самых стойких ароматов Amouage: симфония белых цветов с бархатистой глубиной и восточным теплом.",
        notes: ["Белые цветы", "Восточные ноты"],
        prices: { "3 мл": 15000, "6 мл": 30000, "10 мл": 50000 },
      },
    ],
    bundle: {
      title: "Совет: лайеринг с Molecule 05",
      sub: "Наслаивайте её ароматы с Escentric Molecules — Molecule 05 или 01 раскрывают их глубже и шлейфовее. Спросите консультанта.",
      prices: null,
    },
  },
];

const BOUTIQUES = [
  { street: "Улы Дала, 65", place: "ЖК Алем", wa: "77007580058" },
  { street: "Абая, 45", place: "ТРЦ Окан Мерей, бутик 15", wa: "77007580059" },
  { street: "Асфендиярова, 8", place: "ЖК Sat City, блок G", waLink: "https://wa.me/message/QCJQ2PT5QOBKJ1" },
];

// ===== Утилиты =====

const $ = (id) => document.getElementById(id);
const fmt = (n) => n.toLocaleString("ru-RU").replace(/ /g, " ") + " ₸";
const img = (slug) => `assets/perfumes/${slug}.png`;

// Ароматы со светлым постером из Nano Banana (assets/posters-light/<slug>.jpg).
// У кого постера нет — в витрине показывается вырезанный флакон.
const POSTERS = new Set(["oud-for-greatness", "monarc", "limmensite", "meteore", "ombre-nomade", "gaba",
  "kosmala-4", "cassiopea", "beautiful-wild", "kosmala-7", "delina", "honour-43"]);
const visual = (p) => (POSTERS.has(p.slug) ? `assets/posters-light/${p.slug}.jpg` : img(p.slug));

function inkFor(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255].map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return L > 0.3 ? "#1b1612" : "#fbf6ee";
}
function setTheme(bg) {
  const ink = inkFor(bg);
  const dark = ink === "#1b1612";
  const root = document.documentElement.style;
  root.setProperty("--stage-bg", bg);
  root.setProperty("--stage-ink", ink);
  root.setProperty("--stage-soft", dark ? "rgba(27,22,18,0.7)" : "rgba(251,246,238,0.72)");
  root.setProperty("--stage-line", dark ? "rgba(27,22,18,0.2)" : "rgba(251,246,238,0.24)");
}

// ===== Бренды (бегущая строка) =====

const BRANDS = ["Initio", "Louis Vuitton", "Maison Francis Kurkdjian", "Tom Ford", "Creed", "Parfums de Marly", "Amouage",
  "Kilian", "Roja Parfums", "Tiziana Terenzi", "Clive Christian", "Ex Nihilo", "Mancera", "Montale", "Thomas Kosmala", "HFC"];
$("marquee").innerHTML = [...BRANDS, ...BRANDS].map((b) => `<span>${b}</span>`).join("");

// ===== Коллекция: все ароматы, сначала с постерами =====

const minPrice = (p) => {
  const all = [...Object.values(p.prices || {}), ...(p.full ? [p.full.price] : [])];
  return all.length ? Math.min(...all) : null;
};

// Окно быстрого заказа: выбор объёма прямо поверх аромата, без прокрутки страницы
const quick = $("quick-buy");
let quickText = "";
function openQuick(si, pi) {
  const s = STARS[si];
  const p = s.perfumes[pi];
  $("qb-img").src = visual(p);
  $("qb-img").alt = `${p.brand} ${p.name}`;
  $("qb-brand").textContent = p.brand;
  $("qb-name").textContent = p.name;
  $("qb-notes").textContent = p.notes.join(" · ");
  $("qb-star").textContent = `★ Аромат ${s.name}`;
  renderVolumes(p, { box: "qb-volumes", price: "qb-price", label: "#qb-label" }, (text) => { quickText = text; });
  quick.showModal();
}
$("qb-order").addEventListener("click", () => { quick.close(); openOrder(quickText); });
quick.addEventListener("click", (e) => { if (e.target === quick) quick.close(); });

// Видео ароматов: assets/videos/<slug>.mp4. Скорость воспроизведения — меняйте здесь.
const VIDEO_SPEED = 1.25;

const collection = STARS.flatMap((s, si) => s.perfumes.map((p, pi) => ({ s, si, p, pi })));
const total = String(collection.length).padStart(2, "0");

$("story").innerHTML = collection.map(({ s, si, p, pi }, k) => {
  const price = minPrice(p);
  return `
    <article class="chapter" id="aroma-${p.slug}" style="--c:${p.bg}">
      <div class="chapter__frame">
        <video class="chapter__video" data-src="assets/videos/${p.slug}.mp4" muted loop playsinline preload="none" aria-label="${p.brand} ${p.name}"></video>
        <div class="chapter__shade" aria-hidden="true"></div>
      </div>
      <div class="chapter__content">
        <p class="chapter__no"><b>${String(k + 1).padStart(2, "0")}</b> / ${total}</p>
        <p class="chapter__brand">${p.brand}</p>
        <h3 class="chapter__name"><span>${p.name}</span></h3>
        <p class="chapter__desc">${p.desc}</p>
        <ul class="chapter__notes">${p.notes.map((x) => `<li>${x}</li>`).join("")}</ul>
        <div class="chapter__buy">
          <span class="chapter__price">${price ? `от ${fmt(price)}` : "цена по запросу"}</span>
          <button class="btn btn--gold btn--sm" type="button" data-open="${si}:${pi}">Выбрать объём</button>
        </div>
        <p class="chapter__star">★ Аромат ${s.name}</p>
      </div>
    </article>`;
}).join("");

$("story").addEventListener("click", (e) => {
  const b = e.target.closest("[data-open]");
  if (!b) return;
  const [si, pi] = b.dataset.open.split(":").map(Number);
  openQuick(si, pi);
});

const chapters = [...document.querySelectorAll(".chapter")];
const storyNav = $("story-nav");
$("story-dots").innerHTML = collection.map(({ p }, k) =>
  `<li><button type="button" data-k="${k}" aria-label="${p.brand} ${p.name}"></button></li>`).join("");
$("story-dots").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) chapters[+b.dataset.k].scrollIntoView({ behavior: "smooth", block: "center" });
});

// Первый экран: вся коллекция по очереди в арке, подпись меняется вместе с картинкой
(() => {
  const box = $("hero-slides");
  const tag = $("hero-tag");
  box.innerHTML = collection.map(({ p }, k) =>
    `<img src="${visual(p)}" alt="${p.brand} ${p.name}" ${k ? 'loading="lazy"' : 'class="is-on"'}>`).join("");
  const slides = [...box.children];
  let cur = 0;
  const caption = (k) => {
    const { p } = collection[k];
    const price = minPrice(p);
    $("hero-brand").textContent = p.brand;
    $("hero-name").textContent = p.name;
    $("hero-price").textContent = price ? `распив от ${fmt(price)}` : "цена по запросу";
  };
  caption(0);
  setInterval(() => {
    if (document.hidden || window.scrollY > window.innerHeight) return;
    const next = (cur + 1) % slides.length;
    slides[next].loading = "eager";
    slides[cur].classList.remove("is-on");
    slides[next].classList.add("is-on");
    tag.classList.add("is-swap");
    setTimeout(() => { caption(next); tag.classList.remove("is-swap"); }, 450);
    cur = next;
  }, 4500);
})();

// видео грузим заранее (за экран до появления), играем — только пока аромат на экране
const videoLoader = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (!en.isIntersecting) return;
  const v = en.target.querySelector("video");
  if (!v.src) { v.src = v.dataset.src; v.preload = "auto"; }
  videoLoader.unobserve(en.target);
}), { rootMargin: "100% 0px" });

const videoPlayer = new IntersectionObserver((entries) => entries.forEach((en) => {
  const v = en.target.querySelector("video");
  en.target.classList.toggle("is-in", en.isIntersecting);
  if (en.isIntersecting) {
    v.playbackRate = VIDEO_SPEED;
    v.play().then(() => { v.playbackRate = VIDEO_SPEED; }).catch(() => {});
  } else {
    v.pause();
  }
}), { threshold: 0.45 });

chapters.forEach((c) => { videoLoader.observe(c); videoPlayer.observe(c); });

// раскрытие кадра при прокрутке: из скруглённой рамки — на весь экран
function updateStory(vh) {
  let active = -1;
  let best = Infinity;
  chapters.forEach((c, k) => {
    const r = c.getBoundingClientRect();
    if (r.bottom < -vh * 0.2 || r.top > vh * 1.2) return;
    const enter = Math.min(Math.max((vh - r.top) / vh, 0), 1);   // 0 → 1 пока кадр въезжает
    const leave = Math.min(Math.max(-r.top / r.height, 0), 1);   // 0 → 1 пока кадр уходит вверх
    const e = 1 - (1 - enter) ** 2;
    c.style.setProperty("--open", e.toFixed(3));
    c.style.setProperty("--leave", leave.toFixed(3));
    const d = Math.abs(r.top + r.height / 2 - vh / 2);
    if (d < best) { best = d; active = k; }
  });
  const coll = $("story").getBoundingClientRect();
  const inStory = coll.top < vh * 0.5 && coll.bottom > vh * 0.5;
  storyNav.classList.toggle("is-on", inStory);
  if (inStory && active >= 0) {
    $("story-count").textContent = String(active + 1).padStart(2, "0");
    $("story-name").textContent = collection[active].p.name;
    $("story-dots").querySelectorAll("button").forEach((b, k) => b.classList.toggle("is-active", k === active));
  }
}

// ===== Наборы-пробники 5 × 2 мл (со слайдов Taplink) =====
// Каждый аромат: [бренд, название, id картинки в assets/sets]

const SETS = {
  w: [
    { price: 31000, items: [["Louis Vuitton", "Attrape-Rêves", 51016], ["Maison Francis Kurkdjian", "Baccarat Rouge 540 Extrait", 46066], ["Tom Ford", "Jasmin Rouge", 12765], ["Gritti", "Tutù", 54822]] },
    { price: 36000, items: [["Tom Ford", "Rose Prick", 58781], ["Maison Francis Kurkdjian", "Baccarat Rouge 540", 33519], ["Kilian", "Good Girl Gone Bad", 15924], ["Parfums de Marly", "Delina", 43871]] },
    { price: 33000, items: [["Ex Nihilo", "Blue Talisman", 84224], ["Amouage", "Guidance", 78656], ["HFC", "Indian Venus", 52793], ["Marc-Antoine Barrois", "Tilia", 91688]] },
  ],
  m: [
    { price: 20200, items: [["Armani", "Stronger With You Intensely", 52802], ["Essential Parfums", "Bois Impérial", 64338], ["Louis Vuitton", "Imagination", 67370], ["Jean Paul Gaultier", "Le Male Le Parfum", 61856]] },
    { price: 15600, items: [["Chanel", "Bleu de Chanel", 25967], ["Montale", "Aoud Forest", 9559], ["Mancera", "Cedrat Boisé", 15211], ["Parfums de Marly", "Layton", 39314]] },
    { price: 30000, items: [["Amouage", "Interlude Man", 15294], ["Jo Malone", "Myrrh & Tonka", 55760], ["Louis Vuitton", "LV Lovers", 93785], ["Tiziana Terenzi", "Dionisio", 49662]] },
    { price: 37600, items: [["Creed", "Green Irish Tweed", 474], ["Kilian", "Back to Black", 6457], ["Louis Vuitton", "Imagination", 67370], ["Tom Ford", "Oud Wood", 1826]] },
    { price: 38000, items: [["Louis Vuitton", "L’Immensité", 49751], ["Roja", "Elysium Eau Intense", 81839], ["Creed", "Absolu Aventus", 84112], ["Tom Ford", "Tobacco Vanille", 1825]] },
    { price: 26400, items: [["Tom Ford", "Ombré Leather", 50239], ["Clive Christian", "Matsukita", 65983], ["Attar Collection", "Crystal Love for Him", 59565], ["Roja", "Elysium Pour Homme", 46296]] },
    { price: 25800, items: [["Louis Vuitton", "Ombre Nomade", 49755], ["Tiziana Terenzi", "Gumin", 40440], ["Mancera", "Red Tobacco", 46663], ["Armani", "Stronger With You Intensely", 52802]] },
  ],
};

function renderSets(who) {
  const label = who === "w" ? "для неё" : "для него";
  document.querySelectorAll(".seg__btn").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.for === who)));
  $("sets-grid").innerHTML = SETS[who].map((set, i) => {
    const title = `Набор ${label} № ${i + 1}`;
    const photo = `assets/set-photos/${who}${i + 1}.jpg`; // фото набора из Nano Banana
    return `
      <article class="set">
        <button class="set__visual" type="button" data-zoom="${photo}" data-title="${title}" data-price="${set.price}" aria-label="Посмотреть крупно: ${title}">
          <img src="${photo}" alt="${title}: ${set.items.map(([b, n]) => `${b} ${n}`).join(", ")}" loading="lazy">
          <span class="set__no">№ ${String(i + 1).padStart(2, "0")}</span>
          <span class="set__zoom" aria-hidden="true">⤢</span>
        </button>
        <div class="set__body">
          <h3 class="set__title">${title}</h3>
          <ul class="set__list">
            ${set.items.map(([b, n]) => `<li>${n}<span>${b}</span></li>`).join("")}
            <li>+ аромат в подарок</li>
          </ul>
          <div class="set__foot">
            <p class="set__price">${fmt(set.price)}<small>5 ароматов × 2 мл</small></p>
            <button class="btn btn--gold btn--sm" type="button" data-order="${title} (${fmt(set.price)})">Заказать</button>
          </div>
        </div>
      </article>`;
  }).join("");
}
document.querySelectorAll(".seg__btn").forEach((b) => b.addEventListener("click", () => renderSets(b.dataset.for)));
renderSets("w");

// фото набора крупно
const setView = $("set-view");
$("sets-grid").addEventListener("click", (e) => {
  const z = e.target.closest("[data-zoom]");
  if (!z) return;
  $("sv-img").src = z.dataset.zoom;
  $("sv-img").alt = z.dataset.title;
  $("sv-title").textContent = z.dataset.title;
  $("sv-price").textContent = fmt(+z.dataset.price);
  $("sv-order").dataset.order = `${z.dataset.title} (${fmt(+z.dataset.price)})`;
  setView.showModal();
});
setView.addEventListener("click", (e) => {
  if (e.target === setView || e.target.closest("[data-order]")) setView.close();
});

// ===== Карточки звёзд =====

const starsGrid = $("stars-grid");
STARS.forEach((s, i) => {
  const b = document.createElement("button");
  b.className = "star reveal";
  b.type = "button";
  b.style.transitionDelay = `${i * 0.08}s`;
  b.innerHTML = `
    <span class="star__frame"><img class="star__poster" src="${s.poster}" alt="${s.name} — ${s.perfumes[0].brand} ${s.perfumes[0].name}" loading="lazy"></span>
    <span class="star__info">
      <span>
        <span class="star__name">${s.name}</span>
        <span class="star__meta">${s.perfumes.length} ${s.perfumes.length === 2 ? "аромата" : "ароматов"}</span>
      </span>
      <span class="star__go">→</span>
    </span>`;
  b.addEventListener("click", () => {
    selectStar(i, 0);
    $("showcase").scrollIntoView({ behavior: "smooth" });
  });
  starsGrid.appendChild(b);
});

// ===== Витрина =====

let starIdx = 0;
let perfIdx = 0;
let volume = null;

const tabsEl = $("stage-tabs");
STARS.forEach((s, i) => {
  const t = document.createElement("button");
  t.className = "tab";
  t.type = "button";
  t.setAttribute("role", "tab");
  t.textContent = s.name;
  t.addEventListener("click", () => selectStar(i, 0));
  tabsEl.appendChild(t);
});

function selectStar(i, p) {
  starIdx = i;
  const s = STARS[i];
  [...tabsEl.children].forEach((t, j) => t.setAttribute("aria-selected", String(j === i)));

  const thumbs = $("stage-thumbs");
  thumbs.innerHTML = s.perfumes.map((p, j) => `
    <button class="thumb" type="button" role="tab" data-i="${j}">
      <span class="thumb__img"><img src="${visual(p)}" alt=""></span>
      <span><b>${p.name}</b><span>${p.brand}</span></span>
    </button>`).join("");
  thumbs.querySelectorAll(".thumb").forEach((t) =>
    t.addEventListener("click", () => selectPerfume(+t.dataset.i)));

  renderBundle(s);
  selectPerfume(p, 0, true);
}

function selectPerfume(j, dir = 0, instant = false) {
  const s = STARS[starIdx];
  const n = s.perfumes.length;
  perfIdx = (j + n) % n;
  const p = s.perfumes[perfIdx];
  if (dir === 0 && !instant) dir = 1;

  setTheme(p.bg);
  const thumbs = $("stage-thumbs");
  thumbs.querySelectorAll(".thumb").forEach((t, k) => {
    t.setAttribute("aria-selected", String(k === perfIdx));
    // прокручиваем только ленту превью, не страницу
    if (k === perfIdx) thumbs.scrollTo({ left: t.offsetLeft - (thumbs.clientWidth - t.offsetWidth) / 2, behavior: "smooth" });
  });

  const stage = $("showcase");
  const bottle = $("stage-bottle");
  const word = $("stage-word");

  const apply = () => {
    $("stage-count").textContent = `${String(perfIdx + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
    $("stage-brand").textContent = p.brand;
    $("stage-name").textContent = p.name;
    $("stage-desc").textContent = p.desc;
    $("stage-notes").innerHTML = p.notes.map((x) => `<li>${x}</li>`).join("");
    word.textContent = p.name;
    renderVolumes(p);
    stage.classList.toggle("has-poster", POSTERS.has(p.slug));
    bottle.src = visual(p);
    bottle.alt = `${p.brand} ${p.name}`;
  };

  if (instant) {
    apply();
    return;
  }

  stage.classList.add("is-switching");
  word.classList.add("is-out");
  bottle.classList.add(dir > 0 ? "out-left" : "out-right");
  setTimeout(() => {
    apply();
    bottle.classList.add("no-anim");
    bottle.classList.remove("out-left", "out-right");
    bottle.classList.add(dir > 0 ? "out-right" : "out-left");
    void bottle.offsetWidth; // перезапуск анимации
    bottle.classList.remove("no-anim", "out-left", "out-right");
    stage.classList.remove("is-switching");
    word.classList.remove("is-out");
  }, 320);
}

// Кнопки объёма + цена. ui: { box, price, label } — элементы витрины или окна быстрого заказа.
// onPick получает текст для заказа в WhatsApp.
const STAGE_UI = { box: "stage-volumes", price: "stage-price", label: ".stage__label" };

function renderVolumes(p, ui = STAGE_UI, onPick = (text) => { volume = { text }; }) {
  const box = $(ui.box);
  const labelEl = document.querySelector(ui.label);
  const opts = [];
  if (p.prices) Object.entries(p.prices).forEach(([v, price]) => opts.push({ v, price }));
  if (p.full) opts.push({ v: p.full.label, price: p.full.price, full: true, gift: p.full.gift });

  if (!opts.length) {
    box.innerHTML = "";
    $(ui.price).textContent = "Цена по запросу";
    labelEl.textContent = "Распив";
    onPick(`${p.brand} ${p.name}`);
    return;
  }
  box.innerHTML = opts.map((o, k) => `<button type="button" data-k="${k}">${o.v}</button>`).join("");
  const pick = (k) => {
    const o = opts[k];
    box.querySelectorAll("button").forEach((b, m) => b.setAttribute("aria-pressed", String(m === k)));
    $(ui.price).textContent = fmt(o.price);
    labelEl.textContent = o.full ? `Полный флакон${o.gift ? " + подарок 🎁" : ""}` : "Распив";
    onPick(`${p.brand} ${p.name} — ${o.full ? "флакон " : ""}${o.v} (${fmt(o.price)})`);
  };
  box.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => pick(+b.dataset.k)));
  const defaultK = opts.findIndex((o) => !o.full && o.v.startsWith("10")) ;
  pick(defaultK >= 0 ? defaultK : 0);
}

function renderBundle(s) {
  const el = $("bundle");
  const b = s.bundle;
  if (!b) { el.innerHTML = ""; return; }
  el.innerHTML = `
    <div class="bundle__inner">
      <div>
        <h3 class="bundle__title">${b.title}</h3>
        <p class="bundle__sub">${b.sub}</p>
      </div>
      <div class="bundle__opts">
        ${b.prices
          ? Object.entries(b.prices).map(([v, price]) =>
              `<button class="bundle__opt" type="button" data-order="${b.title} — ${v} (${fmt(price)})"><span>${v}</span><b>${fmt(price)}</b></button>`).join("")
          : `<button class="bundle__opt" type="button" data-order="Хочу консультацию по лайерингу (${s.name})"><span>консультация</span><b>Спросить →</b></button>`}
      </div>
    </div>`;
}

$("stage-prev").addEventListener("click", () => selectPerfume(perfIdx - 1, -1));
$("stage-next").addEventListener("click", () => selectPerfume(perfIdx + 1, 1));
$("stage-order").addEventListener("click", () => openOrder(volume?.text || ""));

// свайп по флакону
(() => {
  const area = $("stage-visual");
  let x0 = null;
  area.addEventListener("pointerdown", (e) => { x0 = e.clientX; });
  area.addEventListener("pointerup", (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 45) selectPerfume(perfIdx + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
  });
})();

// стрелки клавиатуры, когда витрина на экране
let stageVisible = false;
new IntersectionObserver(([e]) => { stageVisible = e.isIntersecting; }, { threshold: 0.5 }).observe($("showcase"));
document.addEventListener("keydown", (e) => {
  if (!stageVisible || document.querySelector("dialog[open]")) return;
  if (e.key === "ArrowRight") selectPerfume(perfIdx + 1, 1);
  if (e.key === "ArrowLeft") selectPerfume(perfIdx - 1, -1);
});

// заранее загружаем все флаконы, чтобы смена была мгновенной
STARS.forEach((s) => s.perfumes.forEach((p) => { new Image().src = visual(p); }));
selectStar(0, 0);

// ===== Бутики и заказ =====

const WA_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;

function waUrl(b, text) {
  if (b.waLink) return b.waLink; // короткие ссылки WhatsApp не принимают текст
  const msg = text ? `Здравствуйте! Хочу заказать: ${text}` : "Здравствуйте! Хочу проконсультироваться по ароматам.";
  return `https://wa.me/${b.wa}?text=${encodeURIComponent(msg)}`;
}

$("boutiques-grid").innerHTML = BOUTIQUES.map((b, i) => `
  <article class="boutique reveal">
    <small>Бутик № ${i + 1}</small>
    <h3>${b.street}</h3>
    <p>${b.place}</p>
    <div class="boutique__actions">
      <a href="${waUrl(b)}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="https://2gis.kz/astana/search/${encodeURIComponent(b.street.replace(",", ""))}" target="_blank" rel="noopener">На карте</a>
    </div>
  </article>`).join("");

const sheet = $("order-sheet");
function openOrder(text) {
  $("order-item").textContent = text || "";
  $("order-list").innerHTML = BOUTIQUES.map((b) => `
    <a class="sheet__opt" href="${waUrl(b, text)}" target="_blank" rel="noopener">
      ${WA_ICON}<span><b>${b.street}</b><span>${b.place}</span></span>
    </a>`).join("");
  sheet.showModal();
}
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-order]");
  if (t) openOrder(t.dataset.order);
});
sheet.addEventListener("click", (e) => { if (e.target === sheet || e.target.closest(".sheet__opt")) sheet.close(); });

// ===== Скролл: шапка, параллакс, появление =====

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// разбиваем заголовки на слова, чтобы они выезжали по одному
function splitWords(el) {
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(" "); return; }
          const w = document.createElement("span");
          w.className = "w";
          w.innerHTML = `<span style="--i:${i++}">${part}</span>`;
          frag.append(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== "BR") {
        walk(n);
      }
    });
  };
  walk(el);
}
document.querySelectorAll(".hero__title, .section-title, .chapter__name span").forEach(splitWords);

// текст «О нас» подсвечивается по словам по мере прокрутки
const aboutText = document.querySelector(".about__text");
aboutText.classList.remove("reveal");
splitWords(aboutText);
const aboutWords = [...aboutText.querySelectorAll(".w > span")];

// первый экран собирается при загрузке
setTimeout(() => document.body.classList.add("is-loaded"), 80);

// бегущая строка: базовая скорость + ускорение от прокрутки
const marquee = $("marquee");
let mqX = 0;
let boost = 0;
let lastY = window.scrollY;
let lastT = performance.now();
function marqueeLoop(t) {
  const dt = Math.min(t - lastT, 64);
  lastT = t;
  const y = window.scrollY;
  boost = Math.min(boost * 0.92 + Math.abs(y - lastY) * 0.9, 900);
  lastY = y;
  mqX -= (40 + boost) * dt / 1000;
  const half = marquee.scrollWidth / 2;
  if (half && -mqX >= half) mqX += half;
  marquee.style.transform = `translate3d(${mqX}px,0,0)`;
  requestAnimationFrame(marqueeLoop);
}
if (!reduceMotion) requestAnimationFrame(marqueeLoop);

const header = document.querySelector(".header");
const parallax = document.querySelectorAll(".hero [data-speed]");
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  const vh = window.innerHeight;
  header.classList.toggle("is-scrolled", y > 30);
  if (y < vh * 1.2) {
    parallax.forEach((el) => { el.style.transform = `translateY(${-y * el.dataset.speed}px)`; });
  }
  const r = aboutText.getBoundingClientRect();
  const prog = Math.min(Math.max((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0), 1);
  const lit = Math.round(prog * aboutWords.length);
  aboutWords.forEach((w, k) => w.classList.toggle("is-lit", k < lit));
  updateStory(vh);
  ticking = false;
}
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(onScroll);
}, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

// появление блоков; карточки в сетке — с небольшой задержкой друг за другом
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (!en.isIntersecting) return;
  en.target.classList.add("is-visible");
  io.unobserve(en.target);
  setTimeout(() => { en.target.style.transitionDelay = ""; }, 1500); // чтобы наведение потом срабатывало без задержки
}), { threshold: 0.15 });
document.querySelectorAll(".reveal, .section-head, .set, .star, .about__points li, .service__item, .boutique").forEach((el) => {
  el.classList.add("reveal");
  const siblings = [...el.parentElement.children].filter((x) => x.tagName === el.tagName);
  if (siblings.length > 1) el.style.transitionDelay = `${(siblings.indexOf(el) % 4) * 0.09}s`;
  io.observe(el);
});
