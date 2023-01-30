    // SignUp validation.
    function validation()
    {  
        var usernames = document.getElementById('userInp').value;
        var email = document.getElementById('emailInp').value;
        var pass = document.getElementById('passwordInp').value;

        // Validation For Username.
        if (usernames == "")
        {
            document.getElementById('usernamee').innerHTML="*Please Write Username.";
            return false;
        }
        if (usernames.search(" ")==0)
        {
            document.getElementById('usernamee').innerHTML="*Space Is Not Allowed.";
            return false;
        }
        if(usernames.length<2)
        {
            document.getElementById('usernamee').innerHTML="*Please Write More than One Character.";
            return false;
        }
        if(!isNaN(usernames))
        {
            document.getElementById('usernamee').innerHTML="*Please Write Alphabets Only.";
            return false;
        }
        else
        {
                document.getElementById('usernamee').innerHTML=""
        }

        
        // Validation For Eamil.
        if (email == "")
        {
            document.getElementById('emaill').innerHTML="*Please Enter Email.";
            return false;
        }
        if (email.indexOf('@') <=0)
        {
            document.getElementById('emaill').innerHTML="*Invalid Position Of @";
            return false;
        }
        if (email.charAt(email.length-4)!='.' && email.charAt(email.length-3)!='.')
        {
            document.getElementById('emaill').innerHTML="*Invalid Position Of . ";
            return false;
        }
        else
        {
            document.getElementById('emaill').innerHTML="";
        }
         

        // Validation For Password. 
        if (pass == "")
        {
            document.getElementById('passwordd').innerHTML="*Please Enter the Password.";
            return false;
        }
        if (pass.length<8)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 8 Characters.";
            return false;
        }
        if (pass.search(/[0-9]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 NUmeric Characters.";
            return false;
        }
        if (pass.search(/[a-z]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Lower Case Characters.";
            return false;
        }
        if (pass.search(/[A-Z]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Upper Case Characters.";
            return false;
        }
        if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\<\,\>\[\]\?]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Special Symbol.";
            return false;
        }
        else
            {
                document.getElementById('passwordd').innerHTML="";
            }
    }

    //Login Validation.
    function loginValidation()
    {  
        var email = document.getElementById('emailInp').value;
        var pass = document.getElementById('passwordInp').value;

        // Validation For Eamil.
        if (email == "")
        {
            document.getElementById('emaill').innerHTML="*Please Enter Email.";
            return false;
        }
        if (email.indexOf('@') <=0)
        {
            document.getElementById('emaill').innerHTML="*Invalid Position Of @";
            return false;
        }
        if (email.charAt(email.length-4)!='.' && email.charAt(email.length-3)!='.')
        {
            document.getElementById('emaill').innerHTML="*Invalid Position Of . ";
            return false;
        }
        else
        {
            document.getElementById('emaill').innerHTML="";
        }

        // Validation For Password. 
        if (pass == "")
        {
            document.getElementById('passwordd').innerHTML="*Please Enter the Password.";
            return false;
        }
        if (pass.length<8)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 8 Characters.";
            return false;
        }
        if (pass.search(/[0-9]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 NUmeric Characters.";
            return false;
        }
        if (pass.search(/[a-z]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Lower Case Characters.";
            return false;
        }
        if (pass.search(/[A-Z]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Upper Case Characters.";
            return false;
        }
        if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\<\,\>\[\]\?]/)==-1)
        {
            document.getElementById('passwordd').innerHTML="*Please Write Password of Atleast 1 Special Symbol.";
            return false;
        }
        else
            {
                document.getElementById('passwordd').innerHTML=""
            }
    }

    // Local Storage of Data.
    function saveData()
    {
    let name,email,psw,dob;
    name=document.getElementById("userInp").value;
    email=document.getElementById("emailInp").value;
    psw=document.getElementById("passwordInp").value;
    dob=document.getElementById("dobInp").value;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email}))
    {
      alert("duplicate data");
    }
    else
    {
      user_records.push({
      "Name":name,
      "Email":email,
      "Password":psw,
      "DOB":dob })
    localStorage.setItem("users",JSON.stringify(user_records));
    }
    }

    //Login Verification.
    function loginAuthentic()
    {
        let email,psw;
        email=document.getElementById("emailInp").value;
        psw=document.getElementById("passwordInp").value;
        
        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(user_records.some((v)=>{return v.Email==email && v.Password==psw}))
        {
            document.getElementById('LoginPass').innerHTML="*Login Successful, Welcome Back!";
        }
        else
        {
            document.getElementById('LoginFail').innerHTML="*Incorrect Email or Password, Please Enter Correct Email and Password!";
        }
    }