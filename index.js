
    let h = document.createElement("div");
let top1 = document.createElement("div");
let top1l = document.createElement("div");
let top1r = document.createElement("div");
let button_one=document.createElement("button")
let button_two=document.createElement("button")
let linkOne = document.createElement("a");
let linkTwo = document.createElement("a");
let linkTree = document.createElement("a");
let linkFour = document.createElement("a");
let button_tree=document.createElement("button")




h.classList.add('d')
top1.classList.add('t')
button_one.classList.add('but')
button_two.classList.add('but2')
button_tree.classList.add('but3')
top1.classList.add('t1')
top1l.classList.add("tl")
top1r.classList.add("tr")


button_one.innerHTML="% скидки"
button_two.innerHTML="0% расрочка"
button_tree.innerHTML="запросить звонок"
linkOne.innerHTML="Присоединяйтесь к нам"
linkTwo.innerHTML="Помощь"
linkTree.innerHTML="Карта сайта"
linkFour.innerHTML="+998 (71) 202 202 1"





top1l.append(button_one,button_two)
top1r.append(linkOne,linkTwo,linkTree,linkFour,button_tree)

top1.append(top1l,top1r)
h.append(top1)
document.body.append(h);
for(let item of[1,2]){
    
    let div1=document.createElement("div")
    let img=document.createElement("img")
    let p=document.createElement("p")
    let p_two=document.createElement("p")
    let p_tree=document.createElement("div")
    let p_four=document.createElement("p")
    let button_four=document.createElement("button")
    let div=document.createElement("div")
    
    
    p.innerHTML="смартфон"
    p_two.innerHTML="3 167 000"
    p_tree.innerHTML="от 328000 сум/месец"
    p_four.innerHTML="смартфон xiami redmi <br>not 10pro 128GB 8GB"
    img.src="./img/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL_.jpg"
    button_four.innerHTML="купить"
    
    div1.classList.add("div1")
    div.classList.add("div")

        div1.append( img,p,p_two,p_tree,p_four,button_four)
        div.append(div1)  
        document.body.append(div)
        
        
        
        
        
        document.body.append(div)
    }