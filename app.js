const elements = {
  H:  {num:1,  group:1,  period:1, name:"الهيدروجين", type:"لا فلز"},
  He: {num:2,  group:18, period:1, name:"الهيليوم", type:"غاز نبيل"},
  Li: {num:3,  group:1,  period:2, name:"الليثيوم", type:"فلز"},
  Be: {num:4,  group:2,  period:2, name:"البيريليوم", type:"فلز"},
  B:  {num:5,  group:13, period:2, name:"البورون", type:"شبه فلز"},
  C:  {num:6,  group:14, period:2, name:"الكربون", type:"لا فلز"},
  N:  {num:7,  group:15, period:2, name:"النيتروجين", type:"لا فلز"},
  O:  {num:8,  group:16, period:2, name:"الأكسجين", type:"لا فلز"},
  F:  {num:9,  group:17, period:2, name:"الفلور", type:"لا فلز"},
  Ne: {num:10, group:18, period:2, name:"النيون", type:"غاز نبيل"},
  Na: {num:11, group:1,  period:3, name:"الصوديوم", type:"فلز"},
  Mg: {num:12, group:2,  period:3, name:"المغنيسيوم", type:"فلز"},
  Al: {num:13, group:13, period:3, name:"الألومنيوم", type:"فلز"},
  Si: {num:14, group:14, period:3, name:"السيليكون", type:"شبه فلز"},
  P:  {num:15, group:15, period:3, name:"الفوسفور", type:"لا فلز"},
  S:  {num:16, group:16, period:3, name:"الكبريت", type:"لا فلز"},
  Cl: {num:17, group:17, period:3, name:"الكلور", type:"لا فلز"},
  Ar: {num:18, group:18, period:3, name:"الأرجون", type:"غاز نبيل"},
  K:  {num:19, group:1,  period:4, name:"البوتاسيوم", type:"فلز"},
  Ca: {num:20, group:2,  period:4, name:"الكالسيوم", type:"فلز"},
  Fe: {num:26, group:8,  period:4, name:"الحديد", type:"فلز"},
  Cu: {num:29, group:11, period:4, name:"النحاس", type:"فلز"},
  Zn: {num:30, group:12, period:4, name:"الزنك", type:"فلز"},
  Br: {num:35, group:17, period:4, name:"البروم", type:"لا فلز"},
  Kr: {num:36, group:18, period:4, name:"الكريبتون", type:"غاز نبيل"}
};

// دالة لحساب التوزيع الإلكتروني
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

// عرض المعلومات عند الاختيار
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
    <strong>الدورة:</strong> ${el.period}<br>
    <strong>النوع:</strong> ${el.type}
  `;
}
