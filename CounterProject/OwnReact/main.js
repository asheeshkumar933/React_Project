

 function customRender(container , reactElement){

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target' , reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innnerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if(prop == "children") continue ;
        domElement.setAttribute(prop , reactElement.props[prop])
        
    }
    container.appendChild(domElement)


 }
 
 const reactElement ={
    type: "a",
    props : {
        href : "https://google.com" ,
        target : "_Blank"
    
    }  , 
    Children :"Visit me google"

 }
 
 const mainContainer = document.querySelector("#root")
customRender(reactElement , mainContainer)