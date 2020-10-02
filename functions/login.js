const {BFast} = require('bfastnode');

exports.loginHere= BFast.functions().onGetHttpRequest('/login' , (Request , Response)=>{
Response.send(`
<html lang="en">
<head>

    <title>Login</title>
    <style>
        .login{
            background-color:blanchedalmond;
           text-align: center;
           padding-block: 90px;
           margin-left: 20%;
           margin-right: 20%;
        }
        input{
            padding-block: 10px;
            width:70%;
            text-align: center;
            border: 2px solid black;
            border-radius: 12px;
        }
        h1{
            color: blue;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }

    </style>
</head>
<body>
    
    <form action="POST" class="login" >
        <h1>LOGIN</h1><br>
        <div>
            <label for=""> Username</label><br>
            <input type="text" placeholder="Username">
        </div><br><br>
        <div>
            <label for=""> Password</label><br>
            <input type="password" placeholder="Password">
        </div>

    </form>
    
</body>
</html>


`)
})