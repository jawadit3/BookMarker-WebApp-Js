(function (){
    for(var i=0;i<window.localStorage.length;i++){
        var store_value=window.localStorage.getItem(window.localStorage.key(i));
        var store_key=window.localStorage.key(i);
        var list_container=document.querySelector(".container .list-container ");
        var list = document.createElement("div");
        var list_name=document.createElement("span");
        var remove_button =document.createElement("span");
        var visit_button=document.createElement("a");
        var att=document.createAttribute("href");
        remove_button.addEventListener("click",function(e){
            var target=e.target.parentElement;
            
            target.parentElement.removeChild(target);
                for(var i=0;i<window.localStorage.length;i++){
                if(target.children[0].textContent==window.localStorage.key(i)){
                    window.localStorage.removeItem(window.localStorage.key(i));
                
                }
            }
        })
        remove_button.textContent="remove";
        remove_button.setAttribute("id","remove");
        visit_button.textContent="visit";
        list_name.setAttribute("id","list-name");
        list_name.textContent=store_key;
        att.value=store_value;
        visit_button.setAttributeNode(att);
        list.classList.add("list");
        list.appendChild(list_name);
        list.appendChild(visit_button);
        list.appendChild(remove_button);
        list_container.appendChild(list);

    }
    
})();
function addlist() {
    var list_container=document.querySelector(".container .list-container ");
    var att=document.createAttribute("href");
    var get_name=document.querySelector(".container .main #form1 input"); 
    var get_url=document.querySelector(".container .main #form2 input");
    var visit_button=document.createElement("a");
    var remove_button =document.createElement("span");
    remove_button.addEventListener("click",function(e){
        var target=e.target.parentElement;
        
        
        target.parentElement.removeChild(target);
        for(var i=0;i<window.localStorage.length;i++){
            if(target.children[0].textContent==window.localStorage.key(i)){
                window.localStorage.removeItem(window.localStorage.key(i));
            
            }
        }
    })
    var list = document.createElement("div");
    var list_name=document.createElement("span");
    remove_button.textContent="remove";
    remove_button.setAttribute("id","remove");
    remove_button.style.marginLeft="4px";
    visit_button.textContent="visit";
    list_name.setAttribute("id","list-name");
    list_name.textContent=get_name.value;
    att.value=get_url.value;
    visit_button.setAttributeNode(att);
    list.classList.add("list");
    list.appendChild(list_name);
    list.appendChild(visit_button);
    list.appendChild(remove_button);
    list_container.appendChild(list);

    //local storage work
    var key = get_name.value;
    var value = get_url.value;
    window.localStorage.setItem(key,value);

}