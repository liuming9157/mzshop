const userInfo = {
	username: '小明',
	avatar: 'http://cdn.mzyun.tech/mzyun.png'
}
const walletInfo = [{
	number: 12,
	name: '优惠券'
}, {
	number: 34,
	name: '积分'
}, {
	number: 56,
	name: '零钱'
}]
const nav = [{
	image: '/static/mine/order1.png',
	name: '全部订单'
}, {
	image: '/static/mine/order2.png',
	name: '待付款'
}, {
	image: '/static/mine/order3.png',
	name: '待收货'
}, {
	image: '/static/mine/order4.png',
	name: '待评价'
}, {
	image: '/static/mine/order5.png',
	name: '已完成'
}]
export default {
	userInfo,
	walletInfo,
	nav
}
