function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function fireEvent(element,event){
    if (document.createEventObject){
    // dispatch for IE
    var evt = document.createEventObject();
    return element.fireEvent('on'+event,evt)
    }
    else{
    // dispatch for firefox + others
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent(event, true, true ); // event type,bubbling,cancelable
    return !element.dispatchEvent(evt);
    }
}

setTimeout(function(){

    var links = document.getElementsByTagName("link");
    var st = [];
    for(var x=0;x<links.length;x++)
    if(links[x].getAttribute("rel") == "stylesheet")
    {
        st.push(links[x]);
        links[x].wasAtt = links[x].getAttribute("href");
        links[x].setAttribute("href", "");
    }
    setTimeout(function()
    {
        for(var x =0;x<st.length;x++)
            st[x].setAttribute("href", st[x].wasAtt);
        setTimeout(function(){
            fireEvent(window, "load");
        },1000);
    },1000);
},5000); // test reload after five seconds