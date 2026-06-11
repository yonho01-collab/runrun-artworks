const artworks = [
  {
    id: "overview",
    title: "作品集总览",
    image: "绘画版-总览.jpg",
    category: "总览",
    filter: "all",
    layout: "overview feature",
    orientation: "overview",
    summary: "像一面小小展墙，把陈小润不同方向的作品集中呈现出来。",
    description:
      "这张总览图把设计图、线描、建筑、游乐场、校园标识、参观记录和农民画主题放在同一个页面里。它不是单幅创作，而像一次迷你展览的入口，让观众先看到作品之间的关系。",
    interpretation:
      "从总览可以看出，陈小润的兴趣不只在一种画法里。他会画想象中的工具，也会画真实校园和城市；会用黑白线条处理树，也会用明亮色块表现鱼和游乐场。",
    highlight:
      "总览最适合作为作品集封面，因为它把“观察世界”和“重新发明世界”这两种能力同时展示出来。",
    question:
      "如果把这些作品排成一次真正的展览，你会先走向哪一幅？为什么？",
  },
  {
    id: "mythic-runner",
    title: "云上少年",
    image: "painting-style-artwork.png",
    category: "人物想象",
    filter: "design",
    layout: "feature",
    orientation: "portrait",
    summary: "一位带着速度感的少年站在云纹之间，像从故事里冲出来。",
    description:
      "作品以粗黑线条勾勒人物、云朵和运动轨迹，再用橙、红、紫等色块铺出热烈背景。画面中的人物姿态舒展，手中的环形线条让整个画面产生旋转和飞行感。",
    interpretation:
      "这幅画有明显的故事气质。云纹不是简单装饰，而像舞台、风和道路。人物身边的小人和符号让画面变成一个正在发生的场景，观众能感到人物正处在一次冒险里。",
    highlight:
      "最亮眼的是线条的节奏：黑色云纹、人物动作和背景色带互相推着走，让静止的画纸有了速度。",
    question:
      "这个少年正在去哪里？他手里的圆环会带来什么神奇变化？",
  },
  {
    id: "future-fan",
    title: "转啊转：未来便携电风扇设计图",
    image: "绘画版-便携电扇转啊转未来电风扇设计图.png",
    category: "设计想象",
    filter: "design",
    layout: "feature",
    orientation: "portrait",
    summary: "一张儿童版产品设计图，把电风扇画成多功能小发明。",
    description:
      "画面围绕一个高高的主风扇展开，旁边标注了大扇、小扇、开关、电线、电池盒、纸杯、太阳能板、喷雾圆、手控器和平台等细节。它不是单纯画外形，而是在解释这个装置如何工作。",
    interpretation:
      "这幅作品很像一个小工程师的草图。陈小润把“凉爽”这件事拆成许多功能：吹风、转向、供电、喷雾、控制和放置。文字标注与箭头让观众能顺着他的思路阅读。",
    highlight:
      "最大的亮点是功能意识。画面中既有夸张的大扇叶，也有尺寸、线路和部件说明，说明作者在尝试把想象变成可讨论的方案。",
    question:
      "如果这台未来电风扇真的被做出来，你最想先试用哪一个功能？",
  },
  {
    id: "big-tree",
    title: "参天大树",
    image: "绘画版-参天大树.png",
    category: "自然观察",
    filter: "nature",
    layout: "",
    orientation: "portrait",
    summary: "用黑白线条表现树干、枝条和叶子的生长节奏。",
    description:
      "作品没有依靠大面积颜色，而是用线条组织画面。树干向上扭转，枝条向四周伸展，叶子由连续的小圈和重复线条构成，形成一种很有秩序的自然纹样。",
    interpretation:
      "这棵树并不是写实地复制一棵树，而是在表现“生长”的感觉。树干的弧线像身体，枝条像手臂，叶子像一串串正在展开的音符。",
    highlight:
      "黑白对比让画面更安静，也更能看清线条。重复的小圆圈需要耐心，体现出作者对细节的持续控制。",
    question:
      "你觉得这棵树是在安静地站着，还是正在风里轻轻摆动？",
  },
  {
    id: "skyscrapers",
    title: "全国前三高建筑",
    image: "绘画版-吹塑纸板画全国前三高建筑.png",
    category: "城市建筑",
    filter: "city",
    layout: "wide",
    orientation: "landscape",
    summary: "以吹塑纸板画的方式，把高楼的挺拔和城市的高度感表现出来。",
    description:
      "作品左右并置了建筑的版画效果和线稿效果。蓝色建筑被拉长到画面上方，灰色云层穿过楼体，局部红色点缀让冷静的城市画面有了跳动感。",
    interpretation:
      "高楼在孩子眼中常常不是冰冷的建筑，而是可以直冲云朵的巨大形体。吹塑纸板画带来的纹理，让楼体有了粗粝的边缘和手工印痕，正好对应城市建筑的高度和力量。",
    highlight:
      "蓝色和灰色的搭配很克制，建筑线条却很有张力。左右两种状态放在一起，也让观众看见从草稿到印制效果的过程。",
    question:
      "如果你站在这些高楼下面，会先抬头看楼顶，还是先观察楼身上的线条？",
  },
  {
    id: "school-wayfinding",
    title: "放学通道指示牌",
    image: "绘画版-放学通道指示牌.png",
    category: "校园生活",
    filter: "school",
    layout: "wide",
    orientation: "panorama",
    summary: "把校园秩序画成醒目的导视设计，清楚又有孩子气。",
    description:
      "画面主体是绿色和黄色组成的大箭头，上方写着“放学通道”。中间的小人正在奔跑，箭头内部的方向线让观众一眼就能明白路线。",
    interpretation:
      "这幅作品有很强的公共设计意识。它不是画一个普通场景，而是在解决校园里的实际问题：放学时应该往哪里走，怎样让标识更醒目。",
    highlight:
      "汉字被画得很大，成为画面主角；箭头和奔跑小人共同组成行动感，让标识既清楚又有亲和力。",
    question:
      "如果这块指示牌真的挂在学校里，你觉得应该放在校门口、楼梯口，还是操场边？",
  },
  {
    id: "class-card",
    title: "朝外班级名片",
    image: "绘画版-朝外三七班班级名片.png",
    category: "校园生活",
    filter: "school",
    layout: "wide",
    orientation: "panorama",
    summary: "用旗帜和徽章的形式，为班级设计一张有身份感的名片。",
    description:
      "作品把白色旗帜作为底面，中间用圆形徽章组织信息。画面里出现了“朝外”“三(7)”“从小事做起”“学习好”等关键词，也有 BRTV 和课程相关文字。",
    interpretation:
      "班级名片不只是写名字，它需要表达一个集体的精神。陈小润用圆形构图把信息收拢起来，再用旗帜边缘增加仪式感，使这张作品像一枚属于这个班级的小徽章。",
    highlight:
      "蓝色线条干净，信息层级清楚。旗帜外形与徽章中心形成对比，让班级身份既正式又保留手绘温度。",
    question:
      "如果你也为自己的班级设计名片，你会把哪一句班级口号放在最中间？",
  },
  {
    id: "playground",
    title: "欢游游乐场",
    image: "绘画版-欢游游乐场.png",
    category: "生活想象",
    filter: "design",
    layout: "wide",
    orientation: "landscape",
    summary: "橙黄色的游乐场里，摩天轮、过山车和大门一起热闹起来。",
    description:
      "画面用明亮的橙色和黄色铺满背景，黑色大形体立在前方，旁边有摩天轮、过山车轨道和建筑入口。线条在画面中不断转弯，带出游乐场的热闹和速度。",
    interpretation:
      "这幅作品不追求安静的透视，而是在表达游乐场给人的感受：拥挤、开心、旋转、上升和突然下滑。黑色剪影让前景很有重量，鲜亮背景则像孩子记忆里的灯光。",
    highlight:
      "过山车轨道的弯折很有表现力，和摩天轮的圆形形成对比。画面因此既有高低变化，也有路线变化。",
    question:
      "你会先坐摩天轮慢慢看风景，还是先冲向过山车？",
  },
  {
    id: "rongbaozhai",
    title: "荣宝斋记录稿",
    image: "绘画版-荣宝斋记录稿.png",
    category: "传统文化",
    filter: "culture",
    layout: "wide",
    orientation: "panorama",
    summary: "一张参观后的思维记录，把老字号、工艺和观察整理成图。",
    description:
      "作品以“荣宝斋”为中心，向外延伸出许多关键词和短句。画面中能看到关于品牌、工艺、文房、品质、人才、传统文化和参观感受的记录。",
    interpretation:
      "这张不是普通的画，而是一份视觉笔记。陈小润把参观过程中听到、看到、想到的信息重新组织起来，用圈线连接，让知识像地图一样展开。",
    highlight:
      "最有价值的是记录能力。它说明作者不仅会画形象，也会把一次文化体验转化成可阅读、可回顾的结构。",
    question:
      "当你参观一个地方时，你会更愿意画下看到的东西，还是写下想到的问题？",
  },
  {
    id: "fish-folk",
    title: "鱼儿游啊游：农民画",
    image: "绘画版-鱼儿游啊游农民画.png",
    category: "传统文化",
    filter: "culture",
    layout: "feature",
    orientation: "landscape",
    summary: "用明亮色块和装饰纹样，画出一群在水里游动的鱼。",
    description:
      "画面以蓝色水面和粉色天空为背景，几条大鱼用红、橙、紫、黄等色块装饰。鱼身上的几何纹样让它们像穿着节日衣服一样，在水中向前游动。",
    interpretation:
      "农民画常常重视鲜明色彩、装饰感和生活气息。陈小润抓住了这种热闹明快的特点，把鱼画得饱满、快乐，也让水面充满童话感。",
    highlight:
      "鱼身上的色块分割非常醒目，每条鱼都有不同图案。小鱼和波浪让画面不空，形成大鱼带着小鱼一起游的节奏。",
    question:
      "你觉得这些鱼是在去参加节日，还是正在海里玩追逐游戏？",
  },
];

/* ---- DOM Refs ---- */

const gallery = document.querySelector("#gallery");
const emptyState = document.querySelector("#empty-state");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const navLinks = Array.from(document.querySelectorAll(".site-nav a[data-section]"));
const modal = document.querySelector("#art-modal");
const modalCard = modal.querySelector(".modal-card");
const modalImage = document.querySelector("#modal-image");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalSummary = document.querySelector("#modal-summary");
const modalDescription = document.querySelector("#modal-description");
const modalInterpretation = document.querySelector("#modal-interpretation");
const modalHighlight = document.querySelector("#modal-highlight");
const modalQuestion = document.querySelector("#modal-question");
const prevButton = document.querySelector("#prev-art");
const nextButton = document.querySelector("#next-art");
const mainContent = document.querySelector("#main-content");

let activeFilter = "all";
let visibleArtworks = [...artworks];
let currentIndex = 0;
let lastFocus = null;

/* ---- Intersection Observer: Scroll Spy ---- */

const sectionIds = navLinks.map(function (link) {
  return link.getAttribute("data-section");
});

function updateActiveNav(activeId) {
  navLinks.forEach(function (link) {
    var section = link.getAttribute("data-section");
    if (section === activeId) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if ("IntersectionObserver" in window) {
  var sectionElements = sectionIds
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var navObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          updateActiveNav(entry.target.id);
        }
      });
    },
    { rootMargin: "-30% 0px -65% 0px" }
  );

  sectionElements.forEach(function (el) { navObserver.observe(el); });
}

/* ---- Skip Link: 焦点管理 ---- */

var skipLink = document.querySelector(".skip-link");
if (skipLink) {
  skipLink.addEventListener("click", function () {
    mainContent.setAttribute("tabindex", "-1");
    mainContent.focus({ preventScroll: true });
  });

  mainContent.addEventListener("blur", function () {
    mainContent.removeAttribute("tabindex");
  });
}

/* ---- Render Gallery ---- */

function renderGallery() {
  visibleArtworks = artworks.filter(function (artwork) {
    return activeFilter === "all" || artwork.filter === activeFilter;
  });

  gallery.innerHTML = "";
  emptyState.hidden = visibleArtworks.length > 0;

  visibleArtworks.forEach(function (artwork, index) {
    var card = document.createElement("button");
    card.className = ("art-card " + artwork.layout + " " + artwork.orientation).trim();
    card.type = "button";
    card.dataset.index = String(index);
    card.setAttribute("aria-label", "查看《" + artwork.title + "》作品解说");

    var media = document.createElement("span");
    media.className = "art-media";

    var img = document.createElement("img");
    img.src = artwork.image;
    img.alt = artwork.summary;
    img.loading = index < 2 ? "eager" : "lazy";
    img.decoding = "async";

    /* 图片加载状态 */
    img.addEventListener("load", function () {
      media.classList.add("image-loaded");
    });
    img.addEventListener("error", function () {
      media.textContent = "图片暂时无法显示";
      media.classList.add("image-error");
    });

    var copy = document.createElement("span");
    copy.className = "art-copy";
    copy.innerHTML =
      '<span class="art-meta">' + artwork.category + '</span>' +
      '<h3>' + artwork.title + '</h3>' +
      '<p>' + artwork.summary + '</p>' +
      '<span class="art-cta">查看解说</span>';

    media.append(img);
    card.append(media, copy);
    card.addEventListener("click", function () { openModal(index); });
    gallery.append(card);
  });
}

/* ---- Filter Logic ---- */

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach(function (button) {
    var isActive = button.dataset.filter === filter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderGallery();
}

/* ---- Modal Logic ---- */

function getFocusableElements() {
  return modalCard.querySelectorAll(
    'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
}

function trapFocus(event) {
  if (event.key !== "Tab") return;
  var focusable = getFocusableElements();
  if (!focusable.length) return;
  var first = focusable[0];
  var last = focusable[focusable.length - 1];

  if (event.shiftKey) {
    if (document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}

function openModal(index) {
  currentIndex = index;
  lastFocus = document.activeElement;
  updateModal();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  /* 焦点移到 modal，稍后移到关闭按钮避免动画期间焦点偏移 */
  requestAnimationFrame(function () {
    var closeBtn = modalCard.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  });
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocus && typeof lastFocus.focus === "function") {
    lastFocus.focus({ preventScroll: true });
  }
}

function updateModal() {
  var artwork = visibleArtworks[currentIndex];
  modalImage.src = artwork.image;
  modalImage.alt = artwork.summary;
  modalCategory.textContent = artwork.category;
  modalTitle.textContent = artwork.title;
  modalSummary.textContent = artwork.summary;
  modalDescription.textContent = artwork.description;
  modalInterpretation.textContent = artwork.interpretation;
  modalHighlight.textContent = artwork.highlight;
  modalQuestion.textContent = artwork.question;
}

function moveModal(direction) {
  if (!visibleArtworks.length) return;
  currentIndex = (currentIndex + direction + visibleArtworks.length) % visibleArtworks.length;
  updateModal();
}

/* ---- Event Bindings ---- */

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () { setFilter(button.dataset.filter); });
});

modal.addEventListener("click", function (event) {
  if (event.target.matches("[data-close]")) {
    closeModal();
  }
});

prevButton.addEventListener("click", function () { moveModal(-1); });
nextButton.addEventListener("click", function () { moveModal(1); });

document.addEventListener("keydown", function (event) {
  if (!modal.classList.contains("is-open")) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeModal();
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveModal(-1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveModal(1);
  }
  trapFocus(event);
});

/* ---- Init ---- */

setFilter("all");
