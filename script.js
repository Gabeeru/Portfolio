        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname) {
            for(tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
    
        
        // Function to update the greeting based on the time of day
        function updateGreeting() {
            const now = new Date();
            const hours = now.getHours(); // kuhaon ang karon na oras
            const greetingElement = document.getElementById("greeting");

            let greeting = "";

            if (hours < 12) {
                greeting = "Good Morning!"; // Morning 
            } else if (hours >= 12 && hours < 18) {
                greeting = "Good Afternoon!"; // Afternoon 
            } else {
                greeting = "Good Evening!"; // Evening 
            }

            // Set the greeting text
            greetingElement.textContent = greeting;
        }

        
        updateGreeting();
    

        var sidemen = document.getElementById("sidemenu");

        function openmenu(){
            sidemen.style.right = "0"
        }    
        function closemenu(){
            sidemen.style.right = "-200px"
        }
