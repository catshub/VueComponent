<template>
    <div class="container">
        <div class="start">
            <button class="myBnt" @click="show=true">评价</button>
        </div>
        <div class="comment-main" :class="{'showComment':show}">
            <div class="main">
                <header class="basic">
                    <h2> 评价 </h2>
                </header>
                <div class="content">
                    <ul class="basic">
                        <li v-for="(item,index) in items" :key="index" class="factor">
                            {{item}}
                        </li>
                    </ul>
                </div>
                <footer class="basic">
                    <textarea type="textArea" placeholder="详细评价..."></textarea>
                    <button class="myBnt" @click="show=false">提交</button>
                </footer>
            </div>
        </div>
        <div class="overlay"></div>
    </div>
</template>

<script>
export default {
    name: "comment-vue",
    props: ['items'],
    data() {
        return { show: false } //()=>( {isFunc:"false"} )
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.start {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.comment-main {
    visibility: hidden;
    position: fixed;
    z-index: 10;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%,-50%);
    perspective: 1000px;
}

.main {
    background: white;
    border-radius: 10px;
}

.showComment .main {
    opacity: 1;
    transform: rotateY(0);
}

.showComment {
    visibility: visible;
}

header {
    /* margin: 40px; */
    background: #0090d3;
    padding: 10px;
    color: white;
    border-radius: 0 0 5px 5px;
    margin-bottom: 30px;
}

.content {
    /* background: white; */
    margin: 20px;
    /* padding:20px; */
}

.showComment~.overlay {
    visibility: visible;
}

.overlay {
    visibility: hidden;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.basic {
    display: flex;
    justify-content: center;
    font-size: 1em;
    flex-wrap: wrap;
}

li.factor {
    display: inline-block;
    border: 1px solid;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}

footer textarea {
    width: 80%;
    height: 80px;
    font-size: 0.8em;
    resize:none;
    /* overflow-y: hidden; */
    outline-color:#0090d3;
    padding:5px;
    /* margin: 20px; */
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
    width: 100px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.myBnt:active {
    /* transition: 1s; */
    background-color: #0e5c83;
}

.myBnt:hover {
    /* padding-right: 10px; */
    /*cursor:not-allowed;光标*/
    opacity: 0.9;
    box-shadow: 0 7px 12px 0 rgba(0, 0, 0, 0.5);
}
</style>