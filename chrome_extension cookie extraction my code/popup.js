console.log("Hi from popup");
let temp="";
document.getElementById("extract-cookies").addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs.length > 0) {
      
      const a=chrome.cookies.getAll({ url: "https://64bfa044e9e2014f48cb683e--snazzy-tulumba-8042ad.netlify.app/"});
      console.log(a)
      console.log("hii one end")
      async function getData() {
        try {
          const response = await a;
          console.log(response)
          temp+="below are cookie names"
                
          response.map((data)=>{
            console.log("this is name of cookie:-->") 
            temp+="\n"
            temp+="-------------------"
            temp+="\n";
            //temp+=data.value; 
            console.log("type");
           console.log(data.value);

           const decodedData = decodeURIComponent(data.value);
           const jsonData = JSON.parse(decodedData);
           const username = jsonData.username;
           console.log(username);
           temp+=username;
          
          })
        } catch (error) {
          console.error(error);
        }
        if(temp){
        document.getElementById("cookie-data").innerText =temp;
        }
        console.log(temp)
      }
      getData()
    }
  });
});

