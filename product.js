const Product = require('./models/product.model');
var mongoose = require('mongoose');

const products =[
	{
		name: "Ram GSkill TridentZ 16GB (2*8GB) DDR4 Bus 3000 F4-3000C15D-16GTZB",
		img: 'https://phongvu.vn/media/wysiwyg/tekshop/RamTeko_SEO/9346c6f3530b1b2469c2499e72921234.image.750x467.jpg',
		des: "	- Dung lượng: 128GB - Hỗ trợ XMP: 2.0 - Ghi xung 5000MHz - Tốc độ vòng quay: 4000MHz XMP",
		price: 4779000,
		quantity: 20 , cate: "RAM"
	},
	{
		name: "Ram Corsair DOMINATOR Platinum RGB 16GB (2x8GB) DDR4 3200 (CMT16GX4M2C3200C16)",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/ram/19020169/55da0956ef2f7a1464e7725e6eecf94b_dominator%C2%AE%20platinum%20rgb_x2_1.jpg',
		des: "	- Dung lượng: 2 x 8GB - Thế hệ: DDR4 - Bus: 3200MHz - Cas: 16",
		price: 4490000,
		quantity: 20 , cate: "RAM"
	},
	{
		name: "RAM G.SKILL TridentZ Royal RGB 2x8GB DDR4 3200MHz - F4-3200C16D-16GTRG",
		img: 'https://img1.phongvu.vn/media/catalog/product/g/_/g.skill_trident_z_royal_rgb_gold_1.jpg',
		des: "	- Dung lượng: 2 x 8GB - Thế hệ: DDR4 - Bus: 3200MHz - Cas: 16",
		price: 4360000,
		quantity: 20 , cate: "RAM"
	},
	{
		name: "RAM ADATA 2x8GB DDR4 3200MHz - AX4U320038G16-DRS",
		img: 'https://img1.phongvu.vn/media/catalog/product/d/d/ddr4-adata-drs-1_1.png',
		des: "	- Dung lượng: 2 x 8GB - Thế hệ: DDR4 - Bus: 3200MHz - Cas: 16",
		price: 4740500,
		quantity: 20 , cate: "RAM"
	},
	{
		name: "RAM KINGMAX Zeus 1x16GB DDR4 3000MHz",
		img: 'https://img1.phongvu.vn/media/catalog/product/g/_/g.skill_trident_z_royal_rgb_gold_1.jpg',
		des: "	- Dung lượng: 2 x 8GB - Thế hệ: DDR4 - Bus: 3200MHz - Cas: 16",
		price: 3270000,
		quantity: 20 , cate: "RAM"
	},
	{
		name: "RAM CORSAIR Vengeance RGB Pro 2x8GB DDR4 3600MHz - CMW16GX4M2C3600C18",
		img: 'https://img1.phongvu.vn/media/catalog/product/1/_/1_26_133.jpg',
		des: "	- Dung lượng: 1 x 16GB - Thế hệ: DDR4 - Bus: 3200MHz - Cas: 18",
		price: 3190000,
		quantity: 20 , cate: "RAM"
	},
	{
		name: "CPU AMD Ryzen 5 2400G (3.6GHz - 3.9GHz)",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/r/y/ryzen-5-vega-1.png',
		des: "  - Socket: AM4 , AMD Ryzen thế hệ thứ 2 - Tốc độ xử lý: 3.6 GHz - 3.9 GHz ( 4 nhân, 8 luồng) - Bộ nhớ đệm: 4MB - Đồ họa tích hợp: AMD Vega 11 Graphics",
		price: 4170500 ,
		quantity: 20 , cate: "CPU"
	},
	{
		name: "CPU Intel Core i7-9700K (3.6GHz - 4.9GHz)",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_52_13.jpg',
		des: "  - Socket: LGA 1151-v2 , Intel Core thế hệ thứ 9  - Tốc độ xử lý: 3.6 GHz - 4.9 GHz ( 8 nhân, 8 luồng) - Bộ nhớ đệm: 12MB - Đồ họa tích hợp: Intel UHD Graphics 630",
		price: 9690000 ,
		quantity: 20 , cate: "CPU"
	},
	{
		name: "CPU Intel Core i9-9900K (3.6GHz - 5.0GHz)",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/c/p/cpu_core_i9-9900k_1.jpg',
		des: "  - Socket: LGA 1151-v2 , Intel Core thế hệ thứ 9 - Tốc độ xử lý: 3.6 GHz - 5.0 GHz ( 8 nhân, 16 luồng) - Bộ nhớ đệm: 16MB - Đồ họa tích hợp: Intel UHD Graphics 630 ",
		price: 13190000 ,
		quantity: 20 , cate: "CPU"
	},
	{
		name: "CPU Intel Core i5-9600K (3.7GHz - 4.6GHz)",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/2/2/22._cpu__intel_core_i5_9600k.jpg',
		des: "  - Socket: LGA 1151-v2 , Intel Core thế hệ thứ 9 - Tốc độ xử lý: 3.7 GHz - 4.6 GHz ( 6 nhân, 6 luồng) - Bộ nhớ đệm: 9MB - Đồ họa tích hợp: Intel UHD Graphics 630",
		price: 6811500 ,
		quantity: 20 , cate: "CPU"
	},
	{
		name: "AMD Ryzen Threadripper 2970WX (3.0GHz - 4.2GHz)",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/r/y/ryzen-5-vega-1.png',
		des: "  - Socket: TR4 , AMD Ryzen thế hệ thứ 2 - Tốc độ xử lý: 3.0 GHz - 4.2 GHz ( 24 nhân, 48 luồng) - Bộ nhớ đệm: 64MB ",
		price: 34300000,
		quantity: 20 , cate: "CPU"
	},
	{
		name: "Nguồn máy tính Aerocool VX Plus 500 - 500W",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/psu/19030231/251f13c41ef9c3eb04f6b2fdce85c670_power%20aerocool%20vx%20plus%20500%20230v%20n-pfc_1.jpg',
		des: "	-  Công suất: 500W - Quạt: 1 x 120 mm",
		price: 513000,
		quantity: 20 , cate: "POWER"
	},
	{
		name: "Nguồn máy tính Cooler Master MWE Bronze 550 - 550W - 80 Plus Bronze",
		img: 'https://img1.phongvu.vn/media/catalog/product/n/g/ngu_n_power_cooler_master_mwe_bronze_550w_1.jpg',
		des: "	- Công suất: 550W - Chuẩn hiệu suất: 80 Plus Bronze - Quạt: 1 x 120 mm",
		price: 1254000,
		quantity: 20 , cate: "POWER"
	},
	{
		name: "Nguồn máy tính CORSAIR VS650 - 650W - 80 Plus White",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/c/o/corsair-vs650-1.jpg',
		des: "	- Công suất: 650W - Chuẩn hiệu suất: 80 Plus White - Quạt: 1 x 120 mm",
		price: 1425000,
		quantity: 20 , cate: "POWER"
	},
	{
		name: "Nguồn máy tính Seasonic M12II-520 Evo - 520W - 80 Plus Bronze - Full Modular",
		img: 'https://img1.phongvu.vn/media/catalog/product/s/e/seasonic_m12ii_620w_evo_-_80_plus_bronze_full_modular_master.jpg',
		des: "	- Công suất: 520W - Chuẩn hiệu suất: 80 Plus Bronze - Quạt: 1 x 120 mm",
		price: 1700500,
		quantity: 20 , cate: "POWER"
	},
	{
		name: "Nguồn máy tính Cooler Master Masterwatt Lite - 700W - 80 Plus White",
		img: 'https://img1.phongvu.vn/media/catalog/product/1/2/129532-628854-full.jpg',
		des: "	- Công suất: 700W - Chuẩn hiệu suất: 80 Plus White - Quạt: 1 x 120 mm",
		price: 1786000,
		quantity: 20 , cate: "POWER"
	},
	{
		name: "Ổ cứng HDD Western Digital Blue 1TB 3.5\" SATA 3 - WD10EZEX",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
		des: "	-  Dung lượng: 1TB - Kích thước: 3.5\" - Kết nối: SATA 3- Tốc độ vòng quay: 7200RPM",
		price: 1035500,
		quantity: 20 , cate: "HDD"
	},
	{
		name: "Ổ cứng HDD Western Digital Black 1TB 3.5\" SATA 3 - WD1003FZEX",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
		des: "	- Dung lượng: 1TB - Kích thước: 3.5\" - Kết nối: SATA 3 - Tốc độ vòng quay: 7200RPM",
		price: 1890500,
		quantity: 20 , cate: "HDD"
	},
	{
		name: "Ổ cứng HDD Western Digital Gold 8TB 3.5\" SATA 3 - WD8003FRYZ",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
		des: "	- Dung lượng: 8TB - Kích thước: 3.5\" - Kết nối: SATA 3 - Tốc độ vòng quay: 7200RPM",
		price: 11500000,
		quantity: 20 , cate: "HDD"
	},
	{
		name: "Ổ cứng HDD Seagate Barracuda Pro 12TB 3.5\" SATA 3 - ST12000DM0007",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1508426433000_1365535-r.jpg',
		des: "	-  Dung lượng: 12TB - Kích thước: 3.5\" - Kết nối: SATA 3 - Tốc độ vòng quay: 7200RPM",
		price: 13700000,
		quantity: 20 , cate: "HDD"
	},
	{
		name: "Ổ cứng HDD Toshiba S300 Surveillance 10TB 3.5\" SATA 3 - HDWT31AUZSVA",
		img: 'https://img1.phongvu.vn/media/catalog/product/h/d/hdd_toshiba_s300_surveillance_3.5_10tb_sata_7200rpm_256mb_hdwt31auzsva__1.jpg',
		des: "	-  Dung lượng: 10TB - Kích thước: 3.5\" - Kết nối: SATA 3 - Tốc độ vòng quay: 7200RPM - Cache: 256MB",
		price: 9500000,
		quantity: 20 , cate: "HDD"
	},
	{
		name: "Card màn hình ASUS GeForce RTX 2080Ti 11GB GDDR6 ROG Strix OC (ROG-STRIX-RTX2080TI-O11G-GAMING)",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/a/s/asus_rog_strix_geforce_rtx_2080_ti_oc__1.jpg',
		des: "	- Chip đồ họa: NVIDIA GeForce RTX 2080Ti - Bộ nhớ: 11GB GDDR6 ( 352-bit ) - GPU clock OC Mode - GPU Boost Clock : 1665 MHz , GPU Base Clock : 1350 MHz Gaming Mode (Default) - GPU Boost Clock : 1650 MHz , GPU Base Clock : 1350 MHz - Nguồn phụ: 2 x 8-pin",
		price: 40510000,
		quantity: 20 , cate: "GPU"
	},
	{
		name: "Card màn hình ASUS GeForce GTX 1050Ti 4GB GDDR5 Cerberus",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/a/s/asus_cerberus-gtx1050ti-a4g_1.jpg',
		des: "	- Chip đồ họa: NVIDIA GeForce GTX 1050Ti - Bộ nhớ: 4GB GDDR5 ( 128-bit ) - GPU clock OC Mode - GPU Boost Clock : 1442 MHz , GPU Base Clock : 1328 MHz Gaming Mode (Default) - GPU Boost Clock : 1417 MHz , GPU Base Clock : 1303 MHz - Nguồn phụ: Không nguồn phụ",
		price: 4417500,
		quantity: 20 , cate: "GPU"
	},
	{
		name: "Card màn hình GIGABYTE GeForce RTX 2070 8GB GDDR6 AORUS (N2070AORUS-8GC)",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/g/i/gigabyte_aorus_rtx_2070_8gb_gddr6_n2070aorus-8gc__1.jpg',
		des: "	- Chip đồ họa: NVIDIA GeForce RTX 2070 - Bộ nhớ: 8GB GDDR6 ( 256-bit ) - GPU clock GPU clock: 1770 MHz - Nguồn phụ: 1 x 6-pin + 1 x 8-pin",
		price: 16790000,
		quantity: 20 , cate: "GPU"
	},
	{
		name: "Card màn hình MSI GeForce RTX 2080Ti 11GB GDDR6 LIGHTNING",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/card_do_hoa/19020088/7a7182d93af6ca97be938df54158bdc1_msi%20geforce%20rtx%202080%20ti%20lightning%20z%2011gb%20gddr6_1.jpg',
		des: "	- Chip đồ họa: NVIDIA GeForce RTX 2080Ti - Bộ nhớ: 11GB GDDR6 ( 352-bit ) - GPU clock 1770 MHz - Nguồn phụ: 3 x 8-pin",
		price: 39490000,
		quantity: 20 , cate: "GPU"
	},
	{
		name: "Card màn hình ASUS GeForce GTX 1660Ti 6GB GDDR6 TUF (TUF-GTX1660TI-6G-GAMING)",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/card_do_hoa/19040605/153008a30210ebef382fd5f9ce47886f_asus-tuf-gaming-geforce-gtx-1660-ti-6gb-gddr6-(tuf-gtx1660ti-6g-gaming)-1.jpg',
		des: "	- Chip đồ họa: NVIDIA GeForce GTX 1660Ti - Bộ nhớ: 6GB GDDR6 ( 192-bit ) - GPU clock OC Mode - GPU Boost Clock : 1800 MHz , GPU Base Clock : 1530 MHz Gaming Mode (Default) - GPU Boost Clock : 1770 MHz , GPU Base Clock : 1500 MHz - Nguồn phụ: 1 x 8-pin",
		price: 8200000,
		quantity: 20 , cate: "GPU"
	},
	{
		name: "HDD Seagate Ironwolf ST3000VN007",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/n/a/nas-seagate-ironwolf-3tb-1.jpg',
		des: "	- Dung lượng: 3TB - Kích thước: 3.5\" - Kết nối: SATA 3 - Tốc độ vòng quay: 5900RPM",
		price: 2350000,
		quantity: 20 , cate: "HDD"
	},
	{
		name: "RAM GeIL 1x4GB DDR4 2400MHz GP44GB2400C17SC",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/d/d/ddr4-geil-1.jpg',
		des: "	- Dung lượng: 1 x 4GB 	- Thế hệ: DDR4 - Bus: 2400MHz - Cas: 17",
		price: 774000,
		quantity: 20 , cate: "RAM"
	},
	{
		name: "Nguồn máy tính GIGABYTE B700H",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/g/i/gigabyte-700w-gp-b700h-1.jpg',
		des: "	- Công suất: 700W - Chuẩn hiệu suất: 80 Plus Bronze - Quạt: 1 x 120 mm",
		price: 1781250,
		quantity: 20 , cate: "GPU"
	},
	{
		name: "Ram Corsair DOMINATOR Platinum RGB 16GB (2x8GB) DDR4 3200 (CMT16GX4M2C3200C16)",
		img: 'http://localhost:3000/uploads/1557911953421ram2.jpg',
		des: "- Dung lượng: 2 x 8GB - Thế hệ: DDR4 - Bus: 3200MHz - Cas: 16",
		price: 4490000,
		quantity: 20 , cate: "RAM"
	},
	{
		name: "CPU Intel Core I7-7820X (3.6GHz - 4.3GHz)",
		img: "https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/i/7/i7-0000x-1_2.jpg",
		des: "	- Socket: LGA 2066 , Intel Core X - Tốc độ xử lý: 3.6 GHz - 4.3 GHz ( 8 nhân, 16 luồng) Bộ nhớ đệm: 11MB",
		price: 15190000,
		quantity: 20 , cate: "CPU"
	},
	{
		name: "Card màn hình MSI GeForce GTX 1660Ti 6GB GDDR6 Gaming",
		img: "https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/card_do_hoa/19020184/d42c1aaf97d2e8940a36f13a7bf15436_vga%20msi%20gtx%201660%20ti%20gaming%206gb%20gddr6_1.jpg",
		des: "	- Chip đồ họa: NVIDIA GeForce GTX 1660Ti - Bộ nhớ: 6GB GDDR6 ( 192-bit ) - GPU clock 1800 MHz - Nguồn phụ: 1 x 8-pin",
		price: 9299000,
		quantity: 20 , cate: "CARD"
	}
]

// products.map(product => {
// 	const pro = new Product({
// 		name : product.name,
// 		price: product.price,
// 		img: product.img,
// 		quantity: product.quantity,
// 		cate: product.cate,
// 		des: product.des
// 	})
// 	return pro.save(err => {
// 		if(err) console.log(err);
// 		console.log(pro);
// 	})
// })
mongoose.connect("mongodb+srv://phuochoaile:lephuochoai@cluster0-m3edx.mongodb.net/shopHD", {useNewUrlParser: true});
var done = 0;
for(var i = 0; i<products.length; i++) {
    products[i] = new Product(products[i]);
    products[i].save((err, result) => {
        done++;
        if(done === products.length) exit();
    });
}

function exit() {
    mongoose.disconnect();
}
