<template>
  <div id="app">
  	<!--渲染数据-->
    <v-header :seller="seller"></v-header>
    <div class="tab">
        <div class="tab-item">
            <router-link to="/goods" exact>商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/ratings">评价</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/seller">商家</router-link>
        </div>
    </div>
    <keep-alive>
        <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
    import header from './components/header/header.vue';
    // document.addEventListener('touchstart',function(ev){ 
    //     ev.preventDefault();
    // }, { passive: false });
    
    const ERR_OK = 0;
    
    export default {
    	//获取到data中的商家信息
        data() {
            return {
                seller : {}
            }
        },
        created() {
        	//参考vue-resource的github，获取seller数据
        	this.$http.get('/api/seller').then((response) => {
        		response = response.body;
//      			console.log(response);
        		if(response.errno === ERR_OK) {
        			this.seller = response.data;
        		}
        	});
        },
        components : {
            "v-header":header
        }
    }
</script>

<style lang="less">
		@import "./common/css/base.less";
    .tab{
        display: flex;
        position:relative;
        width:100%;
        height:40px;
        line-height:40px;
        .tab-item{
            flex:1;
            text-align:center;
            a{
                display:block;
                cursor:pointer;
                font-size: 14px;
                color:rgb(77,85,93);
            }
            .active{
                color:rgb(240,20,20);
            }
        }
        .border-1px(rgba(7,17,27,0.1));
    }
</style>
