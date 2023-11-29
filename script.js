console.log("...........");
document.querySelector('.cross').style.display ='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline'
        },300);
    }
})
function saveData() {
    console.log("Data is saving");

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var Enquiry = document.getElementById('Enquiry').value;
    var isClient = document.getElementById('isclient').checked;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Enquiry:", Enquiry);
    console.log("Is Client:", isClient);

    var contact = {
        name: name,
        email: email,
        phone: phone,
        Enquiry: Enquiry,
        isClient: isClient
    };

    console.log("Contact Object:", contact);

    var contactData = JSON.stringify(contact);
    localStorage.setItem('contactData', contactData);
    console.log("Data saved to localStorage");
      //clear form after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('Enquiry').value = '';
    document.getElementById('isclient').checked = false;
}

