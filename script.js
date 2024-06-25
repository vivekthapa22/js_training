function checkpassword()
{
const n = document.getElementById('name');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener( 'submit', (e) => {
    let messages = []
    if (n.value == '' || n.value == null)
        {
            messages.push("Name is required");
        }
    if(password.value.length<=6)    
        {
            messages.push("Password must be more than six character")
        }
    if(password.value.length>=15)
        {
            messages.push("Password must be less than 15 characters")
        } 
    if(password.value == 'password')
        {
            messages.push('Password cannot be password')
        }
        //prevent form submission if there are errors
    if (messages.length>0)
        {
            e.preventDefault()
            errorElement.innerText = messages.join(", ")
        }
        // if there is no error
    else
        {
            errorElement.innerText = "";
        }
    document.write("User name is :" + n.value);
    document.write(password,password2);
})
}
