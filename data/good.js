const data={
	isCollect: false, //是否收藏该商品	
	//商品基本信息
	goodbasic: {
		goodName: "Sandro Moscoloni2018夏季新款显瘦直筒裙小个子V领针织连衣裙女", //商品名称	
		goodPrice: "909", //商品价格				
		goodOldPrice: "416", //商品原价				
		goodFree: "4张优惠券，共￥220", //商品优惠卷信息				
		goodFreeDetail: "购买最多可获得99个，会员等级越高**币越多", //商品优惠详情		
		//商品图片				
		goodImgList: [{
			url: "/static/goods/TO_DELETE/large1.jpg", //商品图片路径	
		}, {
			url: "/static/goods/TO_DELETE/large2.jpg"
		}, ]
	},
	//商品规格信息			
	specficlist: {
		//规格				
		specfic: [{
			select: true,
			//商品当前选中的规格					
			value: "网格",
			//规格名称				
		}, {
			select: false,
			value: "文字"
		}, {
			select: false,
			value: "彩圈"
		}], 
		//尺寸				
		size: [{
				select: true, //商品当前选中的尺寸		
				value: "X", //尺寸名称				
			},
			{
				select: false,
				value: "M"
			},
			{
				select: false,
				value: "L"
			},
			{
				select: false,
				value: "XL"
			}
		]
	},
	//商品评论信息			
	comment: {
		//评论关键字列表				
		keywordList: ["舒适", "透气", "时尚美观"],
		//评论详情列表				
		detail: [{
			userName: "Jiaqi", //用户评论名称					
			userIcon: "/static/goods/TO_DELETE/user.png", //用户评论头像					
			commentsText: "相对而言，对白T恤一字领独特，长短页非常合适。相对而言，对白T恤一字领独特，长短也非常合适。", //用户评论文字					
			commentsImg: "/static/goods/TO_DELETE/good4.png", //用户评论图片				
		}]
	},
	//推荐商品			
	recommendgood: [{
		icon: "/static/goods/TO_DELETE/good1.png", //推荐商品图片			
		title: "BLUEerror秋季七分袖t恤", //推荐商品名称				
		price: "￥196", //推荐商品价格		
		id: "1", //推荐商品id			
	}, {
		icon: "/static/goods/TO_DELETE/good2.png",
		title: "俏皮套装女两件套小女孩最爱",
		price: "￥339.98",
		id: "3"
	}, {
		icon: "/static/goods/TO_DELETE/good3.png",
		title: "韩都衣舍2018韩版女装潮流上衣",
		price: "￥188",
		oldPrice: "￥398",
		id: "4"
	}], 
	//商品介绍
	goodintroduced: [{
		title: "产地",
		value: "中国"
	}, {
		title: "风格",
		value: "轻熟风"
	}, {
		title: "流行元素",
		value: "透视"
	}], //商家备注			
	notes: {
		//备注标题			
		title: "咨询与售后", //备注详情
		detail: [{
			title: "退货说明",
			detail: "该商品支持7天无理由退货，请您放心购买"
		}, {
			title: "换货说明",
			detail: "该商品支持换货，订单签收7天内可申请换货。"
		}, {
			title: "尺码表上的尺码标准吗？",
			detail: "我们所售商品尺寸均为人工测量，可能会存在1-2cm的正常误差范围。"
		}]
	}
}
export default{
	data
}

