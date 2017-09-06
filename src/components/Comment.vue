<template>
    <div class="container">
        <!-- <div>{{commentText}}</div> -->
        <div class="start">
            <button class="myBnt" @click="show=true">
                <i class="iconfont icon-pingjia"></i>
            </button>
        </div>
        <div class="comment-main" :class="{'showComment':show}">
            <div class="main">
                <header class="basic">
                    <h2> 评价 </h2>
                </header>
                <!-- 第一排stars -->
                <div class="star">
                    <span v-for="n in 5" :key="n" class="iconfont" :class="{'icon-star':!stars[n],'icon-staring':stars[n]}"></span>
                </div>
                <!-- 第二排stars -->
                <div class="star2">
                    <span v-for="n in 5" :key="n" class="iconfont" @click="stars2check(n)" :class="{'icon-star':!stars2[n],'icon-staring':stars2[n]}"></span>
                </div>
                <div class="content">
                    <!-- 评价因素 -->
                    <ul class="basic">
                        <li v-for="(item,index) in items" :key="index" class="factor" @click="$set(focused,index,!focused[index])" :class="{'focused':focused[index]}">
                            {{item}}
                        </li>
                    </ul>
                </div>
                <footer class="basic">
                    <!-- 文字评价 -->
                    <textarea type="textArea" placeholder="详细评价..." v-model="commentText"></textarea>
                    <button class="myBnt" @click="show=false"><!-- 保留评价记录 -->
                        <i class="iconfont icon-gou"></i>
                    </button>
                </footer>
            </div>
        </div>
        <!-- 灰色透明背景 -->
        <div class="overlay"></div>
    </div>
</template>

<script>
import '../iconfont/myicon/icon-1/iconfont.css' /* 引入icon */
export default {
    name: "comment-vue",
    props: ['items'],//父组件评价因素数据
    data() {        //()=>( {isFunc:"false"} )
        return {
            show: false,
            focused: [],
            commentText: "",
            stars: [],
            stars2: []
        }
    },
    watch: {
        focused: function() {  //监听focused,更新stars
            // console.log(this.items);
            this.stars = [];
            var i = 0;
            for (let n = 0; n < this.items.length; n++) {
                if (this.focused[n] == true)
                    ++i;
            }
            for (let m = 1; m <= (i / this.items.length * 5); m++)
                this.stars[m] = true;
        }
    },
    methods: {
        stars2check: function(n) {
            if (n != this.stars2.length - 1) { //若评分未变,则不再次渲染
                // console.log("changed");
                this.stars2 = [];
                while (n--) {
                    this.$set(this.stars2, n + 1, true);
                }
            }
        }
        /* focusedChange:function (index){
            // console.log(this.focused[index],!this.focused[index],!!this.focused[index]);
            var state=this.focused[index]==true?false:true;
            this.$set(this.focused,index,state);
        } */ //被替代  : @click="$set(focused,index,!focused[index])"
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.start {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.star,
.star2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 2em;
    margin: 5px
}

.comment-main {
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    z-index: 100;
    transform: translate(-50%, -50%);
    perspective: 1000px;
}

.main {
    opacity: 0;
    transform: rotateY(-70deg);
    /* rotateY和translateX会导致另一个失效 */
    background: white;
    border-radius: 10px;
    transition: 0.6s;
}

.showComment .main {
    opacity: 1;
    transform: rotateY(0);
}

.showComment {
    visibility: visible;
    /* z-index:100; */
}

header {
    /* margin: 40px; */
    background: #0090d3;
    padding: 10px;
    color: white;
    border-radius: 0 0 5px 5px;
    margin-bottom: 20px;
}

.content {
    /* background: white; */
    margin: 25px 0 10px 0;
    /* padding:20px; */
}

.showComment~.overlay {
    opacity: 1;
    visibility: visible;
}

.overlay {
    transition: 0.7s;
    opacity: 0;
    visibility: hidden;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
}

.basic {
    display: flex;
    justify-content: center;
    /* font-size: 1em; */
    flex-wrap: wrap;
}

li.factor {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    margin: 0 10px 10px 10px;
    font-size: 0.9em;
    border-radius: 5px;
    transition: 0.5s;
}

li.factor.focused {
    color: #0090D3;
    border-color: #0090d3;
}

.factor:hover {
    cursor: pointer;
    /* 光标 */
    opacity: 0.9;
    box-shadow: 0 2px 2px 0 rgba(181, 50, 85, 0.3);
}

footer textarea {
    width: 80%;
    height: 80px;
    font-size: 1.1em;
    color: rgba(0, 0, 0, 0.6);
    resize: none;
    /* overflow-y: hidden; */
    outline-color: #0090d3;
    padding: 5px;
    /* margin-top: 20px; */
}

.start .myBnt {
    padding: 7px 10px;
    font-size: 2em;
    width: 60px;
}

.myBnt {
    margin: 20px;
    background-color: #0090d3;
    border: none;
    border-radius: 7px;
    padding: 10px 0;
    font-size: 20px;
    outline: none;
    color: white;
    width: 80px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    transition: 0.5s;
}

.myBnt:active {
    /* transition: 1s; */
    background-color: #0e5c83;
}

.myBnt:hover {
    /* padding-right: 10px; */
    cursor: pointer;
    /* 光标 */
    opacity: 0.9;
    box-shadow: 0 7px 12px 0 rgba(0, 0, 0, 0.5);
}
</style>