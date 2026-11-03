const U = "https:\x2f\x2fimages.unsplash.com/photo-";
const imgSrc = (s) =>
  (s.includes("/") || s.includes(".")) && !s.includes("?auto=")
    ? s
    : s.startsWith("http")
      ? s
      : U + s;
const BAGS = [
  [
    1,
    "AX-01",
    "Apex Stealth 30L Pack",
    "Tactical",
    245,
    "30L",
    "1.2kg",
    '17"',
    "HOT DROP",
    "1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    '1680D ballistic nylon tactical pack with dual YKK AquaGuard zippers and 17" suspended laptop vault.',
  ],
  [
    2,
    "AX-02",
    "Vanguard 1680D Assault",
    "Tactical",
    279,
    "35L",
    "1.4kg",
    '17"',
    "BESTSELLER",
    "1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=85",
    "Laser-cut MOLLE architecture, magnetic sternum hardware, and full weatherproof shell for men.",
  ],
  [
    3,
    "AX-03",
    "Recon Urban Commuter 24L",
    "Tactical",
    215,
    "24L",
    "1.0kg",
    '16"',
    "IN STOCK",
    "1581605405669-fcdf81165afa?auto=format&fit=crop&w=900&q=85",
    "Streamlined boys and mens daily carry with RFID stealth pocket and external USB-C power routing.",
  ],
  [
    4,
    "AX-04",
    "Kuro Ops Weatherproof 28L",
    "Tactical",
    260,
    "28L",
    "1.25kg",
    '17"',
    "PRO SPEC",
    "1547949003-9792a18a2601?auto=format&fit=crop&w=900&q=85",
    "Storm-sealed roll-top expansion with high-visibility cobalt interior liner and armor frame.",
  ],
  [
    5,
    "AX-05",
    "Sentinel Heavy Duty 34L",
    "Tactical",
    295,
    "34L",
    "1.5kg",
    '18"',
    "LIMITED",
    "1577733966973-d680bffd2e80?auto=format&fit=crop&w=900&q=85",
    "Maximum load tactical hauler built for heavy gear, gaming rigs, and multi-day field operations.",
  ],
  [
    6,
    "AX-06",
    "Titan Pro 45L Gym Duffle",
    "Gym",
    195,
    "45L",
    "1.15kg",
    '16"',
    "GYM PRO",
    "1553062407-98eeb64c6a62?auto=format&fit=crop&w=850&q=82",
    "Ventilated antimicrobial shoe garage, waterproof wet pocket, and convertible backpack straps.",
  ],
  [
    7,
    "AX-07",
    "Velocity Crossfit 38L Bag",
    "Gym",
    175,
    "38L",
    "0.98kg",
    '15"',
    "ACTIVE",
    "1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    "Lightweight ripstop training duffle with magnetic bottle holsters and belt loop storage.",
  ],
  [
    8,
    "AX-08",
    "Ironclad Locker Hauler 42L",
    "Gym",
    210,
    "42L",
    "1.2kg",
    '16"',
    "NEW",
    "1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    "Structured base shell stands upright in lockers with crush-proof optics and tech vault.",
  ],
  [
    9,
    "AX-09",
    "Enduro Sport Hybrid 32L",
    "Gym",
    185,
    "32L",
    "1.05kg",
    '16"',
    "IN STOCK",
    "1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85",
    "Seamless office-to-gym hybrid featuring isolated laptop sleeve and expandable laundry zone.",
  ],
  [
    10,
    "AX-10",
    "Pulse HyperLite 28L Duffle",
    "Gym",
    160,
    "28L",
    "0.82kg",
    '15"',
    "FAST SHIP",
    "1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=85",
    "Featherweight daily athletics bag for boys and men with reflective hyper-blue piping.",
  ],
  [
    11,
    "AX-11",
    "AeroX Cyber Sling 8L",
    "Sling",
    129,
    "8L",
    "0.48kg",
    '11"',
    "HOT DROP",
    "1622560480654-d96214fdc887?auto=format&fit=crop&w=900&q=85",
    "Quick-release Fidlock V-Buckle chest sling sized for iPad Pro, handheld consoles, and EDC.",
  ],
  [
    12,
    "AX-12",
    "Vector Tactical Chest Rig",
    "Sling",
    145,
    "10L",
    "0.55kg",
    '12"',
    "PRO SPEC",
    "1575032617751-6ddec2089882?auto=format&fit=crop&w=900&q=85",
    "Ergonomic 3-point stabilizer strap keeps load locked during motorcycle and e-bike rides.",
  ],
  [
    13,
    "AX-13",
    "Phantom Metro Crossbody 7L",
    "Sling",
    118,
    "7L",
    "0.42kg",
    '11"',
    "BESTSELLER",
    "1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    "Slash-resistant strap and hidden rear passport vault for high-mobility urban transit.",
  ],
  [
    14,
    "AX-14",
    "Pulse EDC Compact Sling 6L",
    "Sling",
    105,
    "6L",
    "0.38kg",
    '10"',
    "IN STOCK",
    "1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    "Origami internal dividers organize cables, power banks, keys, and compact camera gear.",
  ],
  [
    15,
    "AX-15",
    "Apex CEO 3-Way Brief 22L",
    "Briefcase",
    289,
    "22L",
    "1.18kg",
    '17"',
    "EXECUTIVE",
    "1553062407-98eeb64c6a62?auto=format&fit=crop&w=920&q=85",
    "Transforms instantly from boardroom briefcase to backpack with stowable ergonomic harness.",
  ],
  [
    16,
    "AX-16",
    "Silicon Valley Tech Brief",
    "Briefcase",
    255,
    "20L",
    "1.05kg",
    '16"',
    "NEW",
    "1511556820780-d912e42b4980?auto=format&fit=crop&w=900&q=85",
    "Dual laptop + tablet suspension sleeves with 100W GaN charger cable pass-through dock.",
  ],
  [
    17,
    "AX-17",
    "Boardroom Stealth Messenger",
    "Briefcase",
    235,
    "18L",
    "0.96kg",
    '16"',
    "IN STOCK",
    "1491637639811-60e2756cc1c7?auto=format&fit=crop&w=900&q=85",
    "Magnetic auto-latch storm flap over ballistic weave with luggage trolley pass-through sleeve.",
  ],
  [
    18,
    "AX-18",
    "Nomad 50L Cabin Weekender",
    "Travel",
    325,
    "50L",
    "1.65kg",
    '17"',
    "LIMITED",
    "1565026057447-bc90a3dceb87?auto=format&fit=crop&w=900&q=85",
    "Clamshell 180-degree flat opening with integrated garment folder and TSA lock hardware.",
  ],
  [
    19,
    "AX-19",
    "Odyssey Global 42L Carry-On",
    "Travel",
    310,
    "42L",
    "1.48kg",
    '17"',
    "BESTSELLER",
    "1501555088652-021faa106b9b?auto=format&fit=crop&w=900&q=85",
    "International cabin compliant travel pack with compression wings and hidden AirTag pocket.",
  ],
  [
    20,
    "AX-20",
    "Horizon Transcontinental 55L",
    "Travel",
    359,
    "55L",
    "1.78kg",
    '18"',
    "PRO SPEC",
    "1473188588951-666fce8e7c68?auto=format&fit=crop&w=900&q=85",
    "Expedition-grade men travel system with detachable daypack sling and waterproof base armor.",
  ],
];
let cart = JSON.parse(localStorage.getItem("ax_cart") || "[]"),
  cat = "All",
  q = "";
window.axFallback = (img) => {
  img.onerror = null;
  img.src = U + "1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85";
};
const fmt = (n) => "$" + Number(n).toFixed(2);
const observeReveals = () => {
  if (!("IntersectionObserver" in window)) {
    document
      .querySelectorAll(".scroll-reveal")
      .forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) =>
        en.target.classList.toggle("visible", en.isIntersecting),
      ),
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
  );
  document.querySelectorAll(".scroll-reveal:not([data-io])").forEach((el) => {
    el.dataset.io = "1";
    io.observe(el);
  });
};
const renderCatalog = () => {
  const g = document.getElementById("catalog-grid");
  if (!g) return;
  const list = BAGS.filter(
    (b) =>
      (cat === "All" || b[3] === cat) &&
      (b[2] + b[1] + b[3] + b[10]).toLowerCase().includes(q.toLowerCase()),
  );
  document.getElementById("catalog-count").textContent =
    `Showing ${list.length} of 20 Men's Engineered Bags`;
  g.innerHTML = list
    .map(
      (b, i) =>
        `<article class="bag-card ax-card scroll-reveal visible" data-bag-id="${b[0]}" style="transition-delay:${(i % 4) * 0.08}s"><div class="card-media"><span class="badge-tag ${b[8].includes("HOT") || b[8].includes("LIMITED") ? "flame" : ""}">${b[8]}</span><span class="sku-tag">${b[1]}</span><img src="${imgSrc(b[9])}" alt="${b[2]}" onerror="axFallback(this)"></div><div class="card-body"><div class="card-meta"><span>${b[3].toUpperCase()}</span><span>${b[5]} • ${b[6]} • FITS ${b[7]}</span></div><h3>${b[2]}</h3><p>${b[10]}</p><div class="card-footer"><div class="price-block"><span class="price-now">${fmt(b[4])}</span><span class="price-was">${fmt(b[4] + 45)}</span></div><div class="card-actions"><button class="btn-ghost" onclick="openSpec(${b[0]})">SPECS</button><button class="btn-primary" onclick="addCart(${b[0]})">ADD +</button></div></div></div></article>`,
    )
    .join("");
  observeReveals();
};
const syncCart = () => {
  localStorage.setItem("ax_cart", JSON.stringify(cart));
  const cnt = cart.reduce((s, i) => s + i.qty, 0),
    sub = cart.reduce((s, i) => s + i.qty * i.price, 0);
  document
    .querySelectorAll(".cart-count")
    .forEach((el) => (el.textContent = cnt));
  const box = document.getElementById("cart-items");
  if (!box) return;
  document.getElementById("cart-subtotal").textContent = fmt(sub);
  document.getElementById("ship-fill").style.width =
    Math.min(100, (sub / 150) * 100) + "%";
  document.getElementById("ship-msg").textContent =
    sub >= 150
      ? "UNLOCKED: FREE EXPRESS AIR SHIPPING + VIP TAG!"
      : `Add ${fmt(150 - sub)} more for Free Express Shipping`;
  box.innerHTML = cart.length
    ? cart
        .map(
          (c) =>
            `<div class="cart-row"><img src="${imgSrc(c.img)}" alt="${c.name}" onerror="axFallback(this)"><div class="cart-info"><h4>${c.name}</h4><span>${c.sku} • ${fmt(c.price)}</span><div class="qty-ctrl"><button onclick="modQty(${c.id},-1)">-</button><span>${c.qty}</span><button onclick="modQty(${c.id},1)">+</button></div></div></div>`,
        )
        .join("")
    : '<p class="empty-cart">Your AX Gear Locker is empty. Add a tactical pack or duffle to start.</p>';
};
window.addCart = (id) => {
  const b = BAGS.find((x) => x[0] === id),
    ex = cart.find((x) => x.id === id);
  ex
    ? ex.qty++
    : cart.push({
        id: b[0],
        sku: b[1],
        name: b[2],
        price: b[4],
        img: b[9],
        qty: 1,
      });
  syncCart();
  toggleCart(true);
};
window.modQty = (id, d) => {
  const it = cart.find((x) => x.id === id);
  if (it) {
    it.qty += d;
    if (it.qty <= 0) cart = cart.filter((x) => x.id !== id);
    syncCart();
  }
};
window.toggleCart = (open) =>
  document.getElementById("cart-drawer")?.classList.toggle("open", open);
window.openSpec = (id) => {
  const b = BAGS.find((x) => x[0] === id),
    m = document.getElementById("spec-modal");
  if (!b || !m) return;
  document.getElementById("spec-body").innerHTML =
    `<div class="spec-grid"><img src="${imgSrc(b[9])}" alt="${b[2]}" onerror="axFallback(this)"><div><span class="badge-tag">${b[1]} • ${b[3]}</span><h2>${b[2]}</h2><p class="spec-lead">${b[10]}</p><div class="spec-pills"><div><strong>CAPACITY</strong><span>${b[5]}</span></div><div><strong>WEIGHT</strong><span>${b[6]}</span></div><div><strong>LAPTOP</strong><span>Up to ${b[7]}</span></div><div><strong>SHELL</strong><span>1680D Ballistic</span></div></div><button class="btn-primary full-w" onclick="addCart(${b[0]});closeSpec()">ADD TO LOCKER — ${fmt(b[4])}</button></div></div>`;
  m.classList.add("open");
};
window.closeSpec = () =>
  document.getElementById("spec-modal")?.classList.remove("open");
window.filterCat = (c, btn) => {
  cat = c;
  document
    .querySelectorAll(".cat-btn")
    .forEach((x) => x.classList.remove("active"));
  btn.classList.add("active");
  renderCatalog();
};
window.searchBags = (val) => {
  q = val;
  renderCatalog();
};
window.setSizeCap = (cap, title, desc, img, btn) => {
  document
    .querySelectorAll(".size-tab")
    .forEach((x) => x.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("size-title").textContent = `${cap} — ${title}`;
  document.getElementById("size-desc").textContent = desc;
  document.getElementById("size-img").src = imgSrc(img);
};
window.axNav = (target, linkEl, ev) => {
  if (ev) ev.preventDefault();
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  if (linkEl) linkEl.classList.add("active");
  const isContact = target === "contact-view";
  document.body.classList.toggle("contact-mode", isContact);
  if (isContact) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    observeReveals();
    return false;
  }
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  return false;
};
window.handleLogin = (e) => {
  e.preventDefault();
  const f = e.target,
    email = f.email.value.trim(),
    password = f.password.value;
  console.log("AX BAGS - LOG IN DATA:", { email, password });
  const msg = f.querySelector(".toast-msg");
  if (msg) {
    msg.textContent = `✓ LOG IN DATA LOGGED TO CONSOLE (${email})`;
    msg.classList.add("show");
  }
  f.reset();
};
window.handleSignup = (e) => {
  e.preventDefault();
  const f = e.target,
    fullName = f.fullName.value.trim(),
    email = f.email.value.trim(),
    phone = f.phone.value.trim(),
    password = f.password.value;
  console.log("AX BAGS - SIGN UP DATA:", { fullName, email, phone, password });
  const msg = f.querySelector(".toast-msg");
  if (msg) {
    msg.textContent = `✓ SIGN UP DATA LOGGED TO CONSOLE (${fullName} • ${email})`;
    msg.classList.add("show");
  }
  f.reset();
};
document.addEventListener("DOMContentLoaded", () => {
  const pre = document.getElementById("bag-preloader");
  if (pre) {
    setTimeout(() => pre.classList.add("unzipping"), 80);
    setTimeout(() => pre.classList.add("opened"), 1550);
    setTimeout(() => pre.classList.add("done"), 4600);
  }
  document.querySelectorAll("#catalog-grid [data-bag-id]").forEach((el) => {
    const b = BAGS.find((x) => x[0] === +el.dataset.bagId),
      im = el.querySelector("img");
    if (b && im && im.getAttribute("src")) b[9] = im.getAttribute("src");
  });
  syncCart();
  observeReveals();
  const links = document.querySelectorAll(".nav-links a[data-sec]");
  window.addEventListener(
    "scroll",
    () => {
      if (document.body.classList.contains("contact-mode")) return;
      let cur = "page-home";
      document.querySelectorAll('main section[id^="page-"]').forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 200) cur = sec.id;
      });
      links.forEach((a) => a.classList.toggle("active", a.dataset.sec === cur));
    },
    { passive: true },
  );
});
