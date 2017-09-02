<template>
    <div class="container">
        <div class="comment-main">
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
                    <button class="myBnt">提交</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "comment-vue",//什么用？
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

.comment-main {
    position: fixed;
    z-index: 10;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%,-50%);
    border:1px #0090d3 solid;
}

.main {
    background: white;
    border-radius: 10px;
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
    transition: 0.5s;
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