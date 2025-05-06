// // for the contact form

// document.getElementById("contact-form").addEventListener("submit", async (e) => {
//     e.preventDefault();
    

//     const formData = newFormData(e.target);
//     const data = Object.fromEntries(formData.entries());
//     try {
//         const response = await fetch("http://localhost:3000/send", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON>stringify(data)
//         });
    
//         const result = await response.text();
//         document.getElementById("from-response").innerText = result;
//     } catch (error) {
//         document.getElementById("from-response").innerText = "Failed to send message.";
//     }
    
// })