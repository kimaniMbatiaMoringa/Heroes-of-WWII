const init = () =>{
    let pointsNumber = document.getElementById('numberOfPoints')
    fetch('http://localhost:3000/articles')                                                                //Fetches the films in db.json
        .then(function(res){
        return res.json()
    })
        .then(function(object){
        console.log(object)
    })

    let submitButton = document.getElementById('submitArticle')
    
    submitButton.addEventListener('click', function(){
        alert("submit button clicked")
        event.preventDefault()
        let newArticleName= document.getElementById('articleNameInput').value
        let newArticleCreatorName= document.getElementById('articleCreatorInput').value
        let newArticleFirstHeading = document.getElementById('articleHeadingInput1').value
        let newArticleFirstHeadingContent = document.getElementById('articleHeadingInput1Content').value

        alert(newArticleName+ " is about to be posted")
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let currentDate =`${day}-${month}-${year}`;

        let newArticle = {
            "mainTitle": newArticleName,
            "creator" : newArticleCreatorName,
            "creationDate" : currentDate,
            "mainPoints":[
                {
                    "title": newArticleFirstHeading,
                    "staticImage": "",
                    "simplePoint": newArticleFirstHeadingContent
                }

            ]

        }

        const patchConfigurationObject ={
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newArticle)
        }

        fetch("http://localhost:3000/articles", patchConfigurationObject)
            .then(function (res){
                return res.json()
            })
            .then(function (object){
                console.log(object)
            })
    })
   

    }

   

document.addEventListener('DOMContentLoaded', init);