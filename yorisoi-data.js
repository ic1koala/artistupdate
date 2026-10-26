// キッコーマン「よりそいアーモンド」全国販売・販促・広告情報データ
// 毎日 7:00 / 19:00 の定時更新で公式情報・X（旧Twitter）の目撃投稿を元に自動更新されます

window.YORISOI_UPDATE_TIME = "10月26日19時 更新!";

// 全47都道府県の中心座標とデフォルトズームレベル
window.PREFECTURES_DATA = [
    // 北海道・東北
    { code: "01", name: "北海道", region: "北海道・東北", lat: 43.0642, lng: 141.3469, zoom: 7 },
    { code: "02", name: "青森県", region: "北海道・東北", lat: 40.8244, lng: 140.7400, zoom: 9 },
    { code: "03", name: "岩手県", region: "北海道・東北", lat: 39.7036, lng: 141.1527, zoom: 8 },
    { code: "04", name: "宮城県", region: "北海道・東北", lat: 38.2688, lng: 140.8721, zoom: 10 },
    { code: "05", name: "秋田県", region: "北海道・東北", lat: 39.7186, lng: 140.1024, zoom: 9 },
    { code: "06", name: "山形県", region: "北海道・東北", lat: 38.2404, lng: 140.3633, zoom: 9 },
    { code: "07", name: "福島県", region: "北海道・東北", lat: 37.7503, lng: 140.4676, zoom: 9 },
    // 関東
    { code: "08", name: "茨城県", region: "関東", lat: 36.3418, lng: 140.4468, zoom: 9 },
    { code: "09", name: "栃木県", region: "関東", lat: 36.5657, lng: 139.8836, zoom: 9 },
    { code: "10", name: "群馬県", region: "関東", lat: 36.3911, lng: 139.0608, zoom: 9 },
    { code: "11", name: "埼玉県", region: "関東", lat: 35.8570, lng: 139.6489, zoom: 10 },
    { code: "12", name: "千葉県", region: "関東", lat: 35.6051, lng: 140.1233, zoom: 10 },
    { code: "13", name: "東京都", region: "関東", lat: 35.6895, lng: 139.6917, zoom: 11 },
    { code: "14", name: "神奈川県", region: "関東", lat: 35.4478, lng: 139.6425, zoom: 11 },
    // 中部
    { code: "15", name: "新潟県", region: "中部", lat: 37.9026, lng: 139.0232, zoom: 8 },
    { code: "16", name: "富山県", region: "中部", lat: 36.6953, lng: 137.2113, zoom: 10 },
    { code: "17", name: "石川県", region: "中部", lat: 36.5947, lng: 136.6256, zoom: 9 },
    { code: "18", name: "福井県", region: "中部", lat: 36.0652, lng: 136.2216, zoom: 9 },
    { code: "19", name: "山梨県", region: "中部", lat: 35.6642, lng: 138.5684, zoom: 10 },
    { code: "20", name: "長野県", region: "中部", lat: 36.6513, lng: 138.1810, zoom: 8 },
    { code: "21", name: "岐阜県", region: "中部", lat: 35.3912, lng: 136.7223, zoom: 9 },
    { code: "22", name: "静岡県", region: "中部", lat: 34.9769, lng: 138.3831, zoom: 9 },
    { code: "23", name: "愛知県", region: "中部", lat: 35.1802, lng: 136.9066, zoom: 10 },
    // 近畿
    { code: "24", name: "三重県", region: "近畿", lat: 34.7303, lng: 136.5086, zoom: 9 },
    { code: "25", name: "滋賀県", region: "近畿", lat: 35.0045, lng: 135.8686, zoom: 10 },
    { code: "26", name: "京都府", region: "近畿", lat: 35.0212, lng: 135.7556, zoom: 11 },
    { code: "27", name: "大阪府", region: "近畿", lat: 34.6863, lng: 135.5197, zoom: 11 },
    { code: "28", name: "兵庫県", region: "近畿", lat: 34.6913, lng: 135.1830, zoom: 10 },
    { code: "29", name: "奈良県", region: "近畿", lat: 34.6851, lng: 135.8327, zoom: 10 },
    { code: "30", name: "和歌山県", region: "近畿", lat: 34.2260, lng: 135.1675, zoom: 9 },
    // 中国・四国
    { code: "31", name: "鳥取県", region: "中国・四国", lat: 35.5039, lng: 134.2377, zoom: 9 },
    { code: "32", name: "島根県", region: "中国・四国", lat: 35.4723, lng: 133.0505, zoom: 8 },
    { code: "33", name: "岡山県", region: "中国・四国", lat: 34.6618, lng: 133.9344, zoom: 9 },
    { code: "34", name: "広島県", region: "中国・四国", lat: 34.3966, lng: 132.4596, zoom: 10 },
    { code: "35", name: "山口県", region: "中国・四国", lat: 34.1859, lng: 131.4706, zoom: 9 },
    { code: "36", name: "徳島県", region: "中国・四国", lat: 34.0658, lng: 134.5594, zoom: 10 },
    { code: "37", name: "香川県", region: "中国・四国", lat: 34.3401, lng: 134.0434, zoom: 10 },
    { code: "38", name: "愛媛県", region: "中国・四国", lat: 33.8416, lng: 132.7657, zoom: 9 },
    { code: "39", name: "高知県", region: "中国・四国", lat: 33.5597, lng: 133.5311, zoom: 9 },
    // 九州・沖縄
    { code: "40", name: "福岡県", region: "九州・沖縄", lat: 33.6064, lng: 130.4183, zoom: 10 },
    { code: "41", name: "佐賀県", region: "九州・沖縄", lat: 33.2494, lng: 130.2988, zoom: 10 },
    { code: "42", name: "長崎県", region: "九州・沖縄", lat: 32.7448, lng: 129.8737, zoom: 9 },
    { code: "43", name: "熊本県", region: "九州・沖縄", lat: 32.7898, lng: 130.7417, zoom: 9 },
    { code: "44", name: "大分県", region: "九州・沖縄", lat: 33.2382, lng: 131.6126, zoom: 9 },
    { code: "45", name: "宮崎県", region: "九州・沖縄", lat: 31.9111, lng: 131.4239, zoom: 9 },
    { code: "46", name: "鹿児島県", region: "九州・沖縄", lat: 31.5602, lng: 130.5581, zoom: 8 },
    { code: "47", name: "沖縄県", region: "九州・沖縄", lat: 26.2124, lng: 127.6809, zoom: 10 }
];

// スポット一覧データ
// category:
//   "hot"     = 🌟 激アツ店舗（特設コーナー・パネル・付箋など複数展開）
//   "promo"   = 🩵 販促物あり（パネル・付箋・応募チラシのいずれか確認）
//   "product" = 🥛 製品販売確認店舗
//   "ad"      = 🚇 駅・大型交通広告スポット
window.YORISOI_SPOTS = [
    // 【東京都】
    {
        id: "tokyo-shibuya-ad",
        prefecture: "東京都",
        city: "渋谷区",
        name: "東急田園都市線 渋谷駅 道玄坂ハッピーボード（A・B）",
        chain: "大型交通広告",
        category: "ad",
        lat: 35.6590,
        lng: 139.6996,
        address: "東京都渋谷区道玄坂2丁目 渋谷駅B1F 道玄坂改札外コンコース（A0・A1出口付近）",
        status: {
            product: false,
            corner: false,
            fusen: false,
            panel: true,
            flyer: false
        },
        productTypes: "広告掲出（10/5〜10/18期間限定・掲出終了）",
        detail: "寺西拓人さん『よりそいアーモンド』巨大シート広告！「ひといきつこっか」篇の大型ビジュアルが壁面いっぱいに掲出されました（10/18をもって大盛況のうちに掲出終了）。",
        source: "公式発表・X目撃情報",
        updatedAt: "2026/10/25"
    },
    {
        id: "tokyo-life-shibuya",
        prefecture: "東京都",
        city: "渋谷区",
        name: "ライフ 渋谷東店",
        chain: "ライフ",
        category: "hot",
        lat: 35.6542,
        lng: 139.7082,
        address: "東京都渋谷区東1-26-20",
        status: {
            product: true,
            corner: true,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml（砂糖不使用・ほんのり甘い）",
        detail: "渋谷駅広告帰りのファン多数！豆乳・植物性ミルク売場エンドに『よりそいアーモンド』特設コーナー＆寺西拓人さんPOPパネル・ポーチ応募用チラシ設置あり。",
        source: "X目撃情報",
        updatedAt: "2026/10/16"
    },
    {
        id: "tokyo-iy-kiba",
        prefecture: "東京都",
        city: "江東区",
        name: "イトーヨーカドー 木場店",
        chain: "イトーヨーカドー",
        category: "hot",
        lat: 35.6657,
        lng: 139.8058,
        address: "東京都江東区木場1-5-30",
        status: {
            product: true,
            corner: true,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 全種大量陳列",
        detail: "特設エンドコーナー展開！寺西拓人さんボードパネルに加え、店員さんによる水色付箋コメントPOP『てら担さんへ🩵ひといきつこっか♪』の掲示＆キャンペーン応募チラシ完備の神店舗！",
        source: "X目撃情報",
        updatedAt: "2026/10/16"
    },
    {
        id: "tokyo-aeon-shinonome",
        prefecture: "東京都",
        city: "江東区",
        name: "イオンスタイル 東雲",
        chain: "イオン",
        category: "hot",
        lat: 35.6416,
        lng: 139.8034,
        address: "東京都江東区東雲1-9-10",
        status: {
            product: true,
            corner: true,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 両方あり",
        detail: "キッコーマン豆乳コーナー隣に特設棚あり。寺西拓人さんビジュアルPOPと『寺西拓人チャーム付きポーチ』応募リーフレット（チラシ）が吊り下げ設置されています。",
        source: "X目撃情報",
        updatedAt: "2026/10/15"
    },
    {
        id: "tokyo-seiyu-kichijoji",
        prefecture: "東京都",
        city: "武蔵野市",
        name: "西友 吉祥寺店",
        chain: "西友",
        category: "promo",
        lat: 35.7042,
        lng: 139.5808,
        address: "東京都武蔵野市吉祥寺本町1-12-10",
        status: {
            product: true,
            corner: false,
            fusen: true,
            panel: false,
            flyer: true
        },
        productTypes: "200ml（砂糖不使用・ほんのり甘い）",
        detail: "飲料棚に手書き付箋風カード『CM話題沸騰！よりそいアーモンド』とキャンペーン応募チラシの設置を確認。",
        source: "X目撃情報",
        updatedAt: "2026/10/14"
    },
    {
        id: "tokyo-maruetsu-shinjuku",
        prefecture: "東京都",
        city: "新宿区",
        name: "マルエツ 新宿六丁目店",
        chain: "マルエツ",
        category: "product",
        lat: 35.6968,
        lng: 139.7112,
        address: "東京都新宿区新宿6-27-29",
        status: {
            product: true,
            corner: false,
            fusen: false,
            panel: false,
            flyer: false
        },
        productTypes: "200ml / 1000ml",
        detail: "冷蔵・常温豆乳売場にて『よりそいアーモンド』2種とも販売確認。レシート印字も『よりそいアーモンド』でWEB応募にバッチリ対応。",
        source: "X目撃情報",
        updatedAt: "2026/10/13"
    },

    // 【神奈川県】
    {
        id: "kanagawa-iy-musashikosugi",
        prefecture: "神奈川県",
        city: "川崎市中原区",
        name: "イトーヨーカドー 武蔵小杉駅前店",
        chain: "イトーヨーカドー",
        category: "hot",
        lat: 35.5760,
        lng: 139.6584,
        address: "神奈川県川崎市中原区小杉町3-420",
        status: {
            product: true,
            corner: true,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 全種あり",
        detail: "寺西拓人さんの出身地・神奈川ならではの激アツ展開！特設コーナーにパネル・応募チラシ・店員さん愛あふれる水色付箋POP『おかえりなさい！全力応援中🩵』あり！",
        source: "X目撃情報",
        updatedAt: "2026/10/16"
    },
    {
        id: "kanagawa-maruetsu-kawasaki",
        prefecture: "神奈川県",
        city: "川崎市高津区",
        name: "マルエツ 川崎坂戸店",
        chain: "マルエツ",
        category: "promo",
        lat: 35.5986,
        lng: 139.6190,
        address: "神奈川県川崎市高津区坂戸1-6-23",
        status: {
            product: true,
            corner: false,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml",
        detail: "棚横に寺西拓人さんスイングPOPとチャーム付きポーチ応募用チラシの束が設置されています。",
        source: "X目撃情報",
        updatedAt: "2026/10/15"
    },
    {
        id: "kanagawa-aeon-minatomirai",
        prefecture: "神奈川県",
        city: "横浜市中区",
        name: "イオンスタイル 横浜瀬谷 / みなとみらい周辺",
        chain: "イオン",
        category: "promo",
        lat: 35.4540,
        lng: 139.6380,
        address: "神奈川県横浜市中区新港2-2-1（横浜ワールドポーターズ周辺量販店）",
        status: {
            product: true,
            corner: true,
            fusen: false,
            panel: true,
            flyer: false
        },
        productTypes: "200ml（砂糖不使用・ほんのり甘い）",
        detail: "ケース積みの特設ディスプレイと寺西拓人さんCM告知ボードを確認。",
        source: "X目撃情報",
        updatedAt: "2026/10/14"
    },

    // 【埼玉県】
    {
        id: "saitama-aeon-laketown",
        prefecture: "埼玉県",
        city: "越谷市",
        name: "イオンスタイル レイクタウン（mori 1F 食品売場）",
        chain: "イオン",
        category: "hot",
        lat: 35.8797,
        lng: 139.8266,
        address: "埼玉県越谷市レイクタウン3-1-1",
        status: {
            product: true,
            corner: true,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 大量展開",
        detail: "大型エンドにて『よりそいアーモンド』大特設コーナー！寺西拓人さん等身大風トップボードパネル、手書き付箋POP、キャンペーン応募チラシすべて揃っています。",
        source: "X目撃情報",
        updatedAt: "2026/10/16"
    },
    {
        id: "saitama-yaoko-kawagoe",
        prefecture: "埼玉県",
        city: "川越市",
        name: "ヤオコー 川越西口店",
        chain: "ヤオコー",
        category: "promo",
        lat: 35.9056,
        lng: 139.4801,
        address: "埼玉県川越市新宿町1-17-1",
        status: {
            product: true,
            corner: false,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml",
        detail: "豆乳コーナーに寺西拓人さんPOPとキャンペーン応募チラシあり。在庫も豊富です。",
        source: "X目撃情報",
        updatedAt: "2026/10/14"
    },

    // 【千葉県】
    {
        id: "chiba-aeon-makuhari",
        prefecture: "千葉県",
        city: "千葉市美浜区",
        name: "イオンスタイル 幕張新都心",
        chain: "イオン",
        category: "hot",
        lat: 35.6548,
        lng: 140.0297,
        address: "千葉県千葉市美浜区豊砂1-1",
        status: {
            product: true,
            corner: true,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 全ラインナップ",
        detail: "キッコーマンのお膝元・千葉県！超大型のキッコーマン豆乳＆『よりそいアーモンド』特設コーナーがあり、寺西拓人さん大型パネル・モニターCM放映・付箋POP・応募チラシすべて完備！",
        source: "X目撃情報",
        updatedAt: "2026/10/16"
    },
    {
        id: "chiba-iy-funabashi",
        prefecture: "千葉県",
        city: "船橋市",
        name: "イトーヨーカドー 船橋店",
        chain: "イトーヨーカドー",
        category: "promo",
        lat: 35.7023,
        lng: 139.9854,
        address: "千葉県船橋市本町7-6-1",
        status: {
            product: true,
            corner: false,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml",
        detail: "売場に寺西拓人さんボードPOPとキャンペーン応募ハガキ・チラシ設置あり。",
        source: "X目撃情報",
        updatedAt: "2026/10/15"
    },

    // 【大阪府】
    {
        id: "osaka-umeda-ad",
        prefecture: "大阪府",
        city: "大阪市北区",
        name: "大阪梅田駅 周辺大型ビジョン・ボード広告",
        chain: "大型交通広告",
        category: "ad",
        lat: 34.7025,
        lng: 135.4979,
        address: "大阪府大阪市北区梅田 地下コンコースエリア",
        status: {
            product: false,
            corner: false,
            fusen: false,
            panel: true,
            flyer: false
        },
        productTypes: "広告掲出（10月中旬期間限定）",
        detail: "東京・渋谷と並び大阪・梅田エリアでも『よりそいアーモンド』寺西拓人さんの大型ビジュアルが展開中！",
        source: "公式発表・X目撃情報",
        updatedAt: "2026/10/16"
    },
    {
        id: "osaka-life-namba",
        prefecture: "大阪府",
        city: "大阪市浪速区",
        name: "ライフ なんば店",
        chain: "ライフ",
        category: "hot",
        lat: 34.6626,
        lng: 135.4991,
        address: "大阪府大阪市浪速区湊町1-2-3 マルイト難波ビルB1F",
        status: {
            product: true,
            corner: true,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 全種あり",
        detail: "関西てら担の聖地化！特設コーナーに寺西拓人さんパネル、スタッフさん手書きの『ひといきつこっか☕️』付箋POP、さらにポーチ応募チラシも大量設置！",
        source: "X目撃情報",
        updatedAt: "2026/10/16"
    },
    {
        id: "osaka-aeon-osakadome",
        prefecture: "大阪府",
        city: "大阪市西区",
        name: "イオンスタイル 大阪ドームシティ",
        chain: "イオン",
        category: "promo",
        lat: 34.6708,
        lng: 135.4790,
        address: "大阪府大阪市西区千代崎3-13-1",
        status: {
            product: true,
            corner: true,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml",
        detail: "1F食品売場エンドに特設ケース陳列あり。寺西拓人さんPOPパネルと応募リーフレット確認済み。",
        source: "X目撃情報",
        updatedAt: "2026/10/15"
    },

    // 【愛知県】
    {
        id: "aichi-aeon-nagoyachaya",
        prefecture: "愛知県",
        city: "名古屋市港区",
        name: "イオンスタイル 名古屋茶屋",
        chain: "イオン",
        category: "hot",
        lat: 35.1023,
        lng: 136.8202,
        address: "愛知県名古屋市港区西茶屋2-11",
        status: {
            product: true,
            corner: true,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml",
        detail: "豆乳コーナー横に『よりそいアーモンド』特設コーナー設置！寺西拓人さんビジュアルパネル＆応募チラシあり。",
        source: "X目撃情報",
        updatedAt: "2026/10/15"
    },
    {
        id: "aichi-apita-nagoyakita",
        prefecture: "愛知県",
        city: "名古屋市北区",
        name: "アピタ 名古屋北店",
        chain: "アピタ",
        category: "promo",
        lat: 35.2072,
        lng: 136.9114,
        address: "愛知県名古屋市北区辻町9-1",
        status: {
            product: true,
            corner: false,
            fusen: true,
            panel: false,
            flyer: true
        },
        productTypes: "200ml / 1000ml",
        detail: "店員さんによる可愛い手書き付箋POPとキャンペーン応募チラシが吊り下げられています。",
        source: "X目撃情報",
        updatedAt: "2026/10/14"
    },
    {
        id: "aichi-aeon-atsuta",
        prefecture: "愛知県",
        city: "名古屋市熱田区",
        name: "イオン 熱田店（イオンモール熱田）",
        chain: "イオン",
        category: "hot",
        lat: 35.1378,
        lng: 136.9082,
        address: "愛知県名古屋市熱田区六野1-2-11",
        status: {
            product: true,
            corner: true,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 全種取り扱い",
        detail: "イオンモール熱田でも特設コーナー開設確認！寺西拓人さんパネル、手書き付箋POP、ポーチ応募チラシが完備された激アツスポット！",
        source: "X目撃情報",
        updatedAt: "2026/10/17"
    },

    // 【北海道】
    {
        id: "hokkaido-aeon-hassamu",
        prefecture: "北海道",
        city: "札幌市西区",
        name: "イオン 札幌発寒店",
        chain: "イオン",
        category: "hot",
        lat: 43.0956,
        lng: 141.2778,
        address: "北海道札幌市西区発寒8条12-1",
        status: {
            product: true,
            corner: true,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml",
        detail: "北海道でも特設コーナー展開確認！寺西拓人さんのボードPOPと『チャーム付きポーチ』応募チラシ設置あり。",
        source: "X目撃情報",
        updatedAt: "2026/10/15"
    },

    // 【宮城県】
    {
        id: "miyagi-aeon-sendaioroshimachi",
        prefecture: "宮城県",
        city: "仙台市若林区",
        name: "イオンスタイル 仙台卸町",
        chain: "イオン",
        category: "promo",
        lat: 38.2547,
        lng: 140.9204,
        address: "宮城県仙台市若林区卸町1-1-1",
        status: {
            product: true,
            corner: false,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml",
        detail: "売場に寺西拓人さんPOPパネルと手書き応援付箋、キャンペーン応募チラシを確認。",
        source: "X目撃情報",
        updatedAt: "2026/10/14"
    },
    {
        id: "miyagi-aeon-natori",
        prefecture: "宮城県",
        city: "名取市",
        name: "イオンスタイル 名取（イオンモール名取）",
        chain: "イオン",
        category: "hot",
        lat: 38.1648,
        lng: 140.8906,
        address: "宮城県名取市杜せきのした5-3-1",
        status: {
            product: true,
            corner: true,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 全種あり",
        detail: "東北最大級の特設コーナー！寺西拓人さん特大ボードパネルとスタッフさん手書きPOP『てらにっし読者必見🩵』、応募ハガキも完備！",
        source: "X目撃情報",
        updatedAt: "2026/10/17"
    },

    // 【京都府】
    {
        id: "kyoto-life-shijokarasuma",
        prefecture: "京都府",
        city: "京都市下京区",
        name: "ライフ 四条烏丸店",
        chain: "ライフ",
        category: "promo",
        lat: 35.0016,
        lng: 135.7562,
        address: "京都府京都市下京区四条通油小路東入傘鉾町50",
        status: {
            product: true,
            corner: false,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml（砂糖不使用・ほんのり甘い）",
        detail: "豆乳・アーモンドミルク棚に寺西拓人さんスイングPOPとキャンペーン応募チラシあり。",
        source: "X目撃情報",
        updatedAt: "2026/10/14"
    },

    // 【兵庫県】
    {
        id: "hyogo-aeon-itamikoya",
        prefecture: "兵庫県",
        city: "伊丹市",
        name: "イオンスタイル 伊丹昆陽",
        chain: "イオン",
        category: "hot",
        lat: 34.7828,
        lng: 135.3792,
        address: "兵庫県伊丹市池尻4-1-1",
        status: {
            product: true,
            corner: true,
            fusen: false,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml",
        detail: "エンド特設コーナーにてケース積み展開！寺西拓人さんボードパネルと応募チラシ設置あり。",
        source: "X目撃情報",
        updatedAt: "2026/10/15"
    },

    // 【広島県】
    {
        id: "hiroshima-aeon-fuchu",
        prefecture: "広島県",
        city: "安芸郡府中町",
        name: "イオンスタイル 広島府中",
        chain: "イオン",
        category: "promo",
        lat: 34.3944,
        lng: 132.5028,
        address: "広島県安芸郡府中町大須2-1-1",
        status: {
            product: true,
            corner: true,
            fusen: false,
            panel: true,
            flyer: false
        },
        productTypes: "200ml / 1000ml",
        detail: "特設コーナーと寺西拓人さんPOPパネルの掲出を確認！",
        source: "X目撃情報",
        updatedAt: "2026/10/13"
    },

    // 【福岡県】
    {
        id: "fukuoka-aeon-fukuoka",
        prefecture: "福岡県",
        city: "糟屋郡粕屋町",
        name: "イオンスタイル 福岡（イオンモール福岡）",
        chain: "イオン",
        category: "hot",
        lat: 33.6098,
        lng: 130.4789,
        address: "福岡県糟屋郡粕屋町大字酒殿字老ノ木192-1",
        status: {
            product: true,
            corner: true,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 全種あり",
        detail: "九州エリアの激アツ店！特設コーナーに寺西拓人さんパネル・手書き付箋POP・ポーチ応募用チラシが揃っています。",
        source: "X目撃情報",
        updatedAt: "2026/10/16"
    },
    {
        id: "fukuoka-sunny-watanabedori",
        prefecture: "福岡県",
        city: "福岡市中央区",
        name: "サニー 渡辺通店",
        chain: "サニー（西友）",
        category: "product",
        lat: 33.5818,
        lng: 130.4046,
        address: "福岡県福岡市中央区清川1-8-13",
        status: {
            product: true,
            corner: false,
            fusen: false,
            panel: false,
            flyer: true
        },
        productTypes: "200ml（砂糖不使用・ほんのり甘い）",
        detail: "製品2種販売中。棚に応募チラシも設置されています。",
        source: "X目撃情報",
        updatedAt: "2026/10/13"
    },
    {
        id: "fukuoka-youmetown-hakata",
        prefecture: "福岡県",
        city: "福岡市東区",
        name: "ゆめタウン博多",
        chain: "ゆめタウン",
        category: "hot",
        lat: 33.6152,
        lng: 130.4147,
        address: "福岡県福岡市東区東浜1-1-1",
        status: {
            product: true,
            corner: true,
            fusen: true,
            panel: true,
            flyer: true
        },
        productTypes: "200ml / 1000ml 全種取り扱い",
        detail: "食品売場エンドに特設コーナー設置！寺西拓人さん大型POPパネル、手書き付箋コメント、キャンペーン応募ハガキが大量設置！",
        source: "X目撃情報",
        updatedAt: "2026/10/17"
    }
];
