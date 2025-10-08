// قاعدة بيانات مبسطة
const elements = {
  H:  {num:1,  group:1,  period:1, name:"الهيدروجين"},
  He: {num:2,  group:18, period:1, name:"الهيليوم"},
  Li: {num:3,  group:1,  period:2, name:"الليثيوم"},
  Be: {num:4,  group:2,  period:2, name:"البيريليوم"},
  B:  {num:5,  group:13, period:2, name:"البورون"},
  C:  {num:6,  group:14, period:2, name:"الكربون"},
  N:  {num:7,  group:15, period:2, name:"النيتروجين"},
  O:  {num:8,  group:16, period:2, name:"الأكسجين"},
  F:  {num:9,  group:17, period:2, name:"الفلور"},
  Ne: {num:10, group:18, period:2, name:"النيون"},
  Na: {num:11, group:1,  period:3, name:"الصوديوم"},
  Mg: {num:12, group:2,  period:3, name:"المغنيسيوم"},
  Al: {num:13, group:13, period:3, name:"الألومنيوم"},
  Si: {num:14, group:14, period:3, name:"السيليكون"},
  P:  {num:15, group:15, period:3, name:"الفوسفور"},
  S:  {num:16, group:16, period:3, name:"الكبريت"},
  Cl: {num:17, group:17, period:3, name:"الكلور"},
  Ar: {num:18, group:18, period:3, name:"الأرجون"},
  K:  {num:19, group:1,  period:4, name:"البوتاسيوم"},
  Ca: {num:20, group:2,  period:4, name:"الكالسيوم"},
  Fe: {num:26, group:8,  period:4, name:"الحديد"},
  Cu: {num:29, group:11, period:4, name:"النحاس"},
  Zn: {num:30, group:12, period:4, name:"الزنك"},
  Br: {num:35, group:17, period:4, name:"البروم"},
  Kr: {num:36, group:18, period:4, name:"الكريبتون"}
};

// حساب التوزيع الإلكتروني
function electronicConfiguration(n) {
  const order = ["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p",
                 "6s","4f","5d","6p","7s","5f","6d","7p"];
  const capacities = { s:2, p:6, d:10, f:14 };
  let remaining = n;
  let result = "";

  for (const sub of order) {
    const orbital = sub.slice(-1);
    const max = capacities[orbital];
    const fill = Math.min(remaining, max);
    result += `${sub}${fill} `;
    remaining -= fill;
    if (remaining <= 0) break;
  }

  return result.trim();
}

// عرض المعلومات
function showInfo() {
  const symbol = document.getElementById("elementSelect").value;
  const res = document.getElementById("result");

  if (!symbol) {
    res.innerHTML = "⚠️ يرجى اختيار عنصر من القائمة.";
    return;
  }

  const el = elements[symbol];
  const config = electronicConfiguration(el.num);

  res.innerHTML = `
    <strong>الرمز:</strong> ${symbol}<br>
    <strong>الاسم:</strong> ${el.name}<br>
    <strong>العدد الذري:</strong> ${el.num}<br>
    <strong>التوزيع الإلكتروني:</strong> ${config}<br>
    <strong>المجموعة:</strong> ${el.group}<br>
    <strong>الدورة:</strong> ${el.period}
  `;
}
