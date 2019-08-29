<template>
	<view>
		<!-- 列表 -->
		<view class="cart-list">
			<block v-for="(item, index) in cartList" :key="item.id">
				<view class="cart-item" :class="{'b-b': index!==cartList.length-1}">
					<view class="image-wrapper">
						<image :src="item.goods.image" :class="[item.loaded]" mode="aspectFill" lazy-load @load="onImageLoad('cartList', index)"
						 @error="onImageError('cartList', index)"></image>
						<view class="yticon icon-xuanzhong2 checkbox" :class="{checked: item.checked}" @click="check('item', index)"></view>
					</view>
					<view class="item-right">
						<text class="clamp title">{{item.goods.name}}</text>
						<text class="attr">{{item.spec}}</text>
						<text class="price">¥{{item.goods.shop_price}}</text>
						<uni-number-box class="step" :min="1" :max="item.goods.stock_count" :value="item.number" :isMin="item.number===1"
						 :index="index" @eventChange="numberChange"></uni-number-box>
					</view>
					<text class="del-btn yticon icon-fork" @click="deleteCartItem(index)"></text>
				</view>
			</block>
		</view>
		<!-- 底部菜单栏 -->
		<view class="action-section">
			<view class="checkbox">
				<image :src="allChecked?'http://cdn.mzyun.tech/shop/selected.png':'http://cdn.mzyun.tech/shop/select.png'" mode="aspectFit"
				 @click="check('all')"></image>
				<view class="clear-btn" :class="{show: allChecked}" @click="clearCart">
					清空
				</view>
			</view>
			<view class="total-box">
				<text class="price">¥{{totalPrice}}</text>

			</view>
			<button type="primary" class="no-border confirm-btn" @click="createOrder">去结算</button>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/cart/uni-number-box.vue'
	export default {
		name: 'cart-item',
		components:{uniNumberBox},
		props: {
			cartList: {
				type:Array,
				default:function(){
					return []
				}
			},
			allChecked:{
				type:Boolean,
				default:true
			}
		},
		methods: {
			//数量
			numberChange(data) {
				console.log(data)
				this.cartList[data.index].number = data.number;
				this.updateTotalPrice();
			},
			//计算总价
			updateTotalPrice() {
				let list = this.cartList;
				if (list.length === 0) {
					this.empty = true;
					return;
				}
				let totalPrice = 0;
				let checked = true;
				list.forEach(item => {
					if (item.checked === true) {
						totalPrice += item.goods.shop_price * item.number;
					} else if (checked === true) {
						checked = false;
					}
				})
				this.allChecked = checked;
				this.totalPrice = Number(totalPrice.toFixed(2));
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].image = 'http://cdn.mzyun.tech/shop/errorImage.jpg';
			},
			
			 //选中状态处理
			check(type, index){
				if(type === 'item'){
					this.cartList[index].checked = !this.cartList[index].checked;
				}else{
					const checked = !this.allChecked
					const list = this.cartList;
					list.forEach(item=>{
						item.checked = checked;
					})
					this.allChecked = checked;
				}
				this.updateTotalPrice(type);
			},
			
			//删除
			deleteCartItem(index){
				let list = this.cartList;
				let row = list[index];
				let id = row.id;
			
				this.cartList.splice(index, 1);
				this.updateTotalPrice();
				uni.hideLoading();
				let data={type:'delete',id:list.id,user_id:this.user_id};
				this.$get('/index/cart',data)
				
			},
			//清空
			clearCart(){
				uni.showModal({
					content: '清空购物车？',
					success: (e)=>{
						if(e.confirm){
							this.cartList = [];
							let data={type:'clear'};
							let result=this.$get('/index/cart',data);
							if(result){
								this.loadData()
							}
						}
					}
				})
			},
			
		}
	}
</script>

<style lang="scss">
	/* 购物车列表项 */
	.cart-item {
		display: flex;
		position: relative;
		padding: 30upx 40upx;

		.image-wrapper {
			width: 230upx;
			height: 230upx;
			flex-shrink: 0;
			position: relative;

			image {
				border-radius: 8upx;
			}
		}

		.checkbox {
			position: absolute;
			left: -16upx;
			top: -16upx;
			z-index: 8;
			font-size: 44upx;
			line-height: 1;
			padding: 4upx;
			color: gray;
			background: #fff;
			border-radius: 50px;
		}

		.item-right {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position: relative;
			padding-left: 30upx;

			.title,
			.price {
				font-size: 30upx;
				color: black;
				height: 40upx;
				line-height: 40upx;
			}

			.attr {
				font-size: 26upx;
				color: gray;
				height: 50upx;
				line-height: 50upx;
			}

			.price {
				height: 50upx;
				line-height: 50upx;
			}
		}

		.del-btn {
			padding: 4upx 10upx;
			font-size: 34upx;
			height: 50upx;
			color: gray;
		}
	}

	/* 底部栏 */
	.action-section {
		/* #ifdef H5 */
		margin-bottom: 100upx;
		/* #endif */
		position: fixed;
		left: 30upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 690upx;
		height: 100upx;
		padding: 0 30upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
		border-radius: 16upx;

		.checkbox {
			height: 52upx;
			position: relative;

			image {
				width: 52upx;
				height: 100%;
				position: relative;
				z-index: 5;
			}
		}

		.clear-btn {
			position: absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52upx;
			line-height: 52upx;
			padding-left: 38upx;
			font-size: 28upx;
			color: #fff;
			background: gray;
			border-radius: 0 50px 50px 0;
			opacity: 0;
			transition: .2s;

			&.show {
				opacity: 1;
				width: 120upx;
			}
		}

		.total-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			text-align: right;
			padding-right: 40upx;

			.price {
				font-size: 32upx;
				color: black;
			}

			.coupon {
				font-size: 24upx;
				color: gray;

				text {
					color: black
				}
			}
		}

		.confirm-btn {
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: 26upx;
			background: $theme-color;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
		}
	}

	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked {
		color: $uni-color-primary;
	}
</style>
