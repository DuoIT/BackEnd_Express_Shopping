var Products = require('../models/product.model')
var mongoose = require('mongoose');

const code = [
    // {
    //     code : "duongxinhdep",
    //     startDate : '2019-05-15',
    //     endDate    : '2019-05-30',
    //     numberOfUses : 5,
    //     reduced : 50000
    // }
    // ,
    // {
    //     code : "codetest2",
    //     startDate : '2019-5-15',
    //     endDate    : '2019-5-25',
    //     numberOfUses : 5,
    //     reduced : 200000
    // },
    // {
    //     code : "codetest3",
    //     startDate : '2019-5-19',
    //     endDate    : '2019-5-30',
    //     numberOfUses : 0,
    //     reduced : 300000
    // },
    // {
    //     code : "codetest4",
    //     startDate : '2019-5-14',
    //     endDate    : '2019-5-16',
    //     numberOfUses : 5,
    //     reduced : 50000
    // }
    {
		name: "Ổ cứng SSD Western Digital Black SN750 250GB M.2 NVMe - WDS250G3X0C",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/19030132/6447932e475bc4a60f5be1a84912a9df_ssd%20wd%20black%20250gb%20m.2%202280%20nvme%20pcie%20(wds250g3x0c)_1.jpg',
		des: "	- Dung lượng: 250GB - Kích thước: M.2 - Kết nối: M.2 NVMe - NAND: 3D-NAND - Tốc độ đọc / ghi (tối đa): 3100MB/s / 1600MB/s",
		price: 172.000,
		quantity: 15, cate: "SSD"
	},
	{
		name: "Ổ cứng SSD Kingston A400 480GB 2.5\" SATA 3",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/s/ssd-kingston-480gb-2.5-a400-1.jpg',
		des: "	- Dung lượng: 480GB - Kích thước: 2.5\" - Kết nối: SATA 3 - Tốc độ đọc / ghi (tối đa): 500MB/s / 320MB/s",
        price: 1700500,
		quantity: 15, cate: "SSD"
	},
	{
		name: "Ổ cứng SSD Kingston 480GB M.2 2280 SATA 3 - SUV500M8",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/_/c/_c_ng_ssd_kingston_480gb_m2_sata_suv500m8__1.jpg',
		des: "	- Dung lượng: 480GB - Kích thước: M.2 2280 - Kết nối: M.2 SATA - NAND: 3D-NAND - Tốc độ đọc / ghi (tối đa): 520MB/s / 500MB/s",
		price: 2690000,
		quantity: 15, cate: "SSD"
	},
	{
		name: "Ổ cứng SSD Crucial P1 1TB M.2 2280 NVMe - CT1000P1SSD8",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/s/ssd_crucial_p1_m.2_2280_1tb_nvme_pcie_gen3_x4_ct1000p1ssd8__1.jpg',
		des: "	- Dung lượng: 1TB - Kích thước: M.2 2280 - Kết nối: M.2 NVMe - NAND: 3D-NAND - Tốc độ đọc / ghi (tối đa): 2000MB/s / 1700MB/s",
		price: 5990000,
		quantity: 15, cate: "SSD"
	},
    {
		name: "Ổ cứng di động SSD Seagate Fast 500GB USB 3.0 - STCM500401",
		img: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/s/ssd_seagate_fast_1_1.jpg',
		des: "	- Dung lượng: 500GB - Kích thước: - Kết nối: USB 3.0 - Tốc độ đọc / ghi (tối đa): 540MB/s / 500MB/s",
		price: 4690000,
		quantity: 15, cate: "SSD"
	}
]

mongoose.connect("mongodb+srv://phuochoaile:lephuochoai@cluster0-m3edx.mongodb.net/shopHD", {useNewUrlParser: true});

var done = 0;
for(var i = 0; i<code.length; i++) {
    code[i] = new Products(code[i]);
    code[i].save((err, result) => {
        done++;
        if(done === code.length) exit();
    });
}

function exit() {
    mongoose.disconnect();
}