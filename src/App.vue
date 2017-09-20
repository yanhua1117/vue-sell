<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
        <div class="tab-item">
            <router-link to="/goods" exact>商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/ratings">评价</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/sellers">商家</router-link>
        </div>
    </div>
    <keep-alive>
        <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
    import header from './components/header/header.vue';
    // document.addEventListener('touchstart',function(ev){ 
    //     ev.preventDefault();
    // }, { passive: false });
    
    const ERR_OK = 0;
    
    export default{
        data() {
        	return {
        		sellers:{}
        	};
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
