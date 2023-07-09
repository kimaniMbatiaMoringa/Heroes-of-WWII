const init = () =>{
    

    fetch('http://localhost:3000/articles')                                                                //Fetches the films in db.json
    .then(function(res){
        return res.json()
    })
    .then(function(object){
        console.log(object)
        object.forEach(function({id,mainTitle,creator,creationDate, mainPoints}){
            //alert(mainTitle)

            let navBarRow = document.getElementById('navBarRow')
            let navBarContent = document.createElement('div')
            navBarContent.className = "col"
            navBarContent.style.cssText =`
            font-family:Bahnschrift;
            font-size: 36px;
            border:5px solid black;
            text-align: center;
            `;
            navBarContent.innerHTML = mainTitle
            navBarContent.id = id
            navBarRow.append(navBarContent);

            
        })
    })

    /* 
    
    */
    function showArticle(){
        fetch(selectedArticle)                                                                         //Gets the selected url (See lines 46 and 51)
        .then(function(res){
            return res.json()
        })
        .then(function (object){
            let articleContainer = document.createElement('div')
            articleContainer.style.height= "auto"
            articleContainer.style.backgroundColor = "black"
            articleContainer.id = object.id

            let mainTitleDisplay = document.createElement('div');
            mainTitleDisplay.style.borderBottom = "5pt solid white;"

            let mainTitleDisplayText = document.createElement('h3');
            mainTitleDisplayText.style.fontSize = "60px"
            mainTitleDisplayText.style.textAlign ="center"
            mainTitleDisplayText.style.color = "white"
            mainTitleDisplayText.innerText= object.mainTitle;

            mainTitleDisplay.append(mainTitleDisplayText)
            
            mainTitleDisplay.style.width = "auto"

            articleContainer.append(mainTitleDisplay,/* creatorDisplay,creationDateDisplay */)

             object.mainPoints.forEach(function({title,staticImage, simplePoint, animatedInfoGraphic}){
                let mainPointContainer = document.createElement('div');
                mainPointContainer.className = "container-fluid"
                mainPointContainer.style.backgroundColor = "black"
                mainPointContainer.style.height ="600px"
                //mainPointContainer.style.padding = "15px";
                mainPointContainer.style.borderBottom = "3px solid white"
                row1 = document.createElement('div');
                row1.className = 'row'
                
                //let mainPointTitleDisplayContainer = document.createElement('div');
                //mainPointTitleDisplayContainer.className = 'container'
               
                //mainPointTitleDisplayContainer.append(mainPointTitleDisplay)

                let column1 = document.createElement('div');
                column1.className = 'col-md-4'
                //column1.style.border = "3px solid white"

                let mainpointImageContainer = document.createElement('div');
                mainpointImageContainer.className = "container-fluid"
                mainpointImageContainer.style.width = "500px"
                mainpointImageContainer.style.height = "500px"
                mainpointImageContainer.style.marginLeft ="5%"
                //mainpointImageContainer.style.border = "3px solid white"
                let mainpointImageDisplay = document.createElement('img')
                mainpointImageDisplay.src = staticImage;

                mainpointImageContainer.append(mainpointImageDisplay)

                column1.append(mainpointImageContainer)

                let column2 = document.createElement('div')
                column2.className = 'col-md-8'

                let simplePointTextContainer = document.createElement('div')
                simplePointTextContainer.className ="container"
                simplePointTextContainer.style.width = "600px"
                simplePointTextContainer.style.height = "200px"
                simplePointTextContainer.style.alignContent ="center"
                simplePointTextContainer.style.marginTop ="15%"
                //simplePointTextContainer.setAttribute("data-aos","fade-up")
                //simplePointTextContainer.style.border = "3px solid white"

                let mainPointTitleDisplay = document.createElement('h4')
                mainPointTitleDisplay.innerText = title;
                mainPointTitleDisplay.style.fontSize = "40pt";
                mainPointTitleDisplay.style.textAlign = 'center'
            
                let simplePointText = document.createElement('p')
                simplePointText.innerText = simplePoint
                simplePointText.style.fontSize = "14pt"

                simplePointTextContainer.append(mainPointTitleDisplay,simplePointText)



                column2.append(simplePointTextContainer)

                row1.append(column1,column2)

                let row2 = document.createElement('div')
                row2.className = "col"

                let animatedInfoGraphicContainer = document.createElement('div')
                animatedInfoGraphicContainer.className = "container"
                let animatedInfoGraphicImg = document.createElement('img')
                animatedInfoGraphicImg.src = animatedInfoGraphic
                animatedInfoGraphicContainer.append(animatedInfoGraphicImg)

                row2.append(animatedInfoGraphicContainer)

                mainPointContainer.append(/* mainPointTitleDisplayContainer */row1,row2)

                articleContainer.append(mainPointContainer)
            })

            let articleArea = document.getElementById('articleArea')
            articleArea.append(articleContainer)
        })


    }

    let selectedArticle = `http://localhost:3000/articles/${1}`;
    
    showArticle()

    let navBarContainer = document.getElementById('navBarRow')

    navBarContainer.addEventListener('click', (event)=>{
        let articleId = event.target.id                                                         //Gets the id of the element selected (See lines 31-33)
        //alert (articleId )
        selectedArticle = `http://localhost:3000/articles/${articleId}`                                     //Sets "selectedMovieURL" to match the id of the selected element (See line 77 for its use)                                  
        clearArticle()                                                                        //Clears the firstMovieDisplay of its default values and adds that of the selected movie (See line 49 and)
        showArticle()                                                                             
    })

    function clearArticle(){
        let article = document.getElementById('articleArea');
        article.innerHTML = "";
    }

/*     function clearFirstMovieDisplay(){
        let firstMovieDisplay =document.getElementById('firstMovieDisplay')
        firstMovieDisplay.innerHTML=''
     } */

    $(function(){
        AOS.init();
    })
    
}

document.addEventListener('DOMContentLoaded', init);