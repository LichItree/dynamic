var result=`/*面试官你好
 *我是一位前端实习求职者
 *想用一些代码来介绍自己
 *首先准备一些样式
 */

*{
  transition:all 1s;
}
html{
  background:rgb(222,222,222);
}
#code{
  border:1px solid red;
  padding:16px;
}
/*颜色有点枯燥哦，上个色吧*/

.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}
/*加点3D效果*/
#code{
    transform:rotate(360deg);
}
/*不玩了，下面我来介绍自己吧*/
/*我需要一张白纸*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}

`
var result2=`
#paper{
    position:fixed;
    right:0;
    width:50%;
    height: 100%;
    background-color: white;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper .content{
    background-color:#ddd;
    width:100%;
    height:100%;

}
    `
    var md = `
    # 自我介绍
    
    我叫 XXX
    1990 年 1 月出生
    XXX 学校毕业
    自学前端半年
    希望应聘前端开发岗位
    
    # 技能介绍
    
    熟悉 JavaScript CSS
    
    # 项目介绍
    
    1. XXX 轮播
    2. XXX 简历
    3. XXX 画板
    `
function writeMarkdown(markdown){
    let domPaper=document.querySelector('#paper>.content')
      let n=0
      let id=setInterval(()=>{
          n+=1
          domPaper.innerHTML = markdown.substring(0, n)
          domPaper.scrollTop = domPaper.scrollHeight
          if(n>=markdown.length){
              window.clearInterval(id)
          }
      },10)
  } 
function writeCode(preCode,code,fn3){
    var domCode=document.querySelector('#code')
    var n=0
    var id=setInterval(()=>{
    n+=1
    domCode.innerHTML=preCode+code.substring(0,n)
    domCode.innerHTML=Prism.highlight(domCode.innerHTML,Prism.languages.css)
    domCode.scrollTop = domCode.scrollHeight
    styleTag.innerHTML=preCode+code.substring(0,n)
        if(n>=code.length){
        clearInterval(id)
        fn3()
        }
    },10)
   
}


function createPaper(fn2){
    var paper=document.createElement('div')
    paper.id='paper'
    var content=document.createElement('div')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn2()
}


writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    }) 
})