<template>
  <div>
  	<div class="bg2"></div>
  	<div class="tabWrap">
  		<div style="display: inline-block;background-color: #fff;">
  			<router-link to="/aboutus1" class="list">机构简介</router-link>
        <router-link to="/aboutus" class="list">爱心顾问团</router-link>
        <router-link to="/aboutus2" class="list">脊椎损伤</router-link>
  			<span class="list tabsel">组织架构</span>
  		</div>
  	</div>
  	<div class="brumbWrap">
  		<span>您的位置：关于我们>组织架构</span>
  	</div>
    <p style="width: 600px;margin:0 auto;font-size: 18px;color:#333333;margin-bottom:20px;">架构</p>
    <div style="width: 600px;margin:0 auto;height: 370px;margin-bottom:20px;">
      <!-- <img :src="bg5" style="width: 600px;height: 370px;"> -->
      <img :src="jiagoutu.conVal" style="width: 600px;height: 370px;">
    </div>
  	<div class="content1Wrap">
  		<p class="title">我们的团队</p>
  		<div class="imgWrap">
        <div class="imgWrap1" v-for="(item,index) in mytuandui" :key="index">
          <img :src="item.avatar">
          <span class="name">{{item.name}}</span>
          <p class="line"></p>
        </div>
  			<!-- <div class="imgWrap1">
  				<img :src="people">
  				<span class="name">王建国</span>
  				<p class="line"></p>
  			</div>
  			<div class="imgWrap1">
  				<img :src="people">
  				<span class="name">王建国</span>
  				<p class="line"></p>
  			</div>
  			<div class="imgWrap1">
  				<img :src="people">
  				<span class="name">王建国</span>
  				<p class="line"></p>
  			</div>
  			<div class="imgWrap1">
  				<img :src="people">
  				<span class="name">王建国</span>
  				<p class="line"></p>
  			</div>
  			<div class="imgWrap1">
  				<img :src="people">
  				<span class="name">王建国</span>
  				<p class="line"></p>
  			</div>
  			<div class="imgWrap1">
  				<img :src="people">
  				<span class="name">王建国</span>
  				<p class="line"></p>
  			</div>
        <div class="imgWrap1">
          <img :src="people">
          <span class="name">王建国</span>
          <p class="line"></p>
        </div>
        <div class="imgWrap1">
          <img :src="people">
          <span class="name">王建国</span>
          <p class="line"></p>
        </div>
        <div class="imgWrap1">
          <img :src="people">
          <span class="name">王建国</span>
          <p class="line"></p>
        </div>
        <div class="imgWrap1">
          <img :src="people">
          <span class="name">王建国</span>
          <p class="line"></p>
        </div>
        <div class="imgWrap1">
          <img :src="people">
          <span class="name">王建国</span>
          <p class="line"></p>
        </div>
        <div class="imgWrap1">
          <img :src="people">
          <span class="name">王建国</span>
          <p class="line"></p>
        </div>
        <div class="imgWrap1">
          <img :src="people">
          <span class="name">王建国</span>
          <p class="line"></p>
        </div>
        <div class="imgWrap1">
          <img :src="people">
          <span class="name">王建国</span>
          <p class="line"></p>
        </div> -->
  		</div>
  	</div>
  </div>
</template>

<script>
import people from '@/assets/people.png'
import bg5 from '@/assets/bg5.png'

export default {
  data() {
    return {
    	people,
      bg5,
      mytuandui:[],
      jiagoutu:{}
    }
  },
  mounted() {
  	this.$store.dispatch('Getmytuandui').then((data) => {
      // console.log(data);
      this.mytuandui = data.list;
    }).catch(() => {
    })
    this.$store.dispatch('Getjiagoutu').then((data) => {
      // console.log(data);
      this.jiagoutu = data;
    }).catch(() => {
    })
  },
  beforeDestroy() {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>
.bg2{
	width: 100%;
	height: 281px;
	background:url('../../assets/bg2.png') no-repeat center center;
	background-size: cover;
}
.tabWrap{
	font-size: 0;
	width: 600px;
	margin: 0 auto;
	position: relative;
	top:-20px;
}
.tabWrap .list{
	display: inline-block;
	width: 113px;
	height: 51px;
	background-color: #C0C0C0;
	color: #fff;
	font-size: 15px;
	text-align: center;
	line-height: 51px;
	margin-right:1px;
}
.tabWrap .list:nth-child(4){
	margin-right:0px;
}
.tabWrap .tabsel{
	background-color: #03A692;
}
.brumbWrap{
	width: 600px;
	margin: 0 auto;
	margin-top:5px;
	margin-bottom:25px;
}
.brumbWrap span{
	font-size: 12px;
	color: #666666;
}
.content1Wrap{
	font-size: 0;
	width: 600px;
	margin: 0 auto;
	margin-bottom:21px;
}
.content1Wrap .title{
	font-size: 18px;
	color: #333333;
	text-align: left;
	margin-bottom:25px;
}
.content1Wrap .imgWrap{
	font-size: 0;
}
.content1Wrap .imgWrap1{
	width: 180px;
	height: 198px;
	position: relative;
	display: inline-block;
	margin-right:30px;
	margin-bottom:29px;
}
.content1Wrap .imgWrap1:nth-child(3n){
	margin-right:0;
}
.content1Wrap .imgWrap1 img{
	width: 180px;
	height: 198px;
}
.content1Wrap .imgWrap1 .name{
	font-size: 13px;
	color: #333333;
	position: absolute;
	top:16px;
	left: -20px;
}
.content1Wrap .imgWrap1 .line{
	background-color: #03A692;
	height: 2px;
	width: 63px;
	position: absolute;
	top:36px;
	left: -20px;
}
</style>

