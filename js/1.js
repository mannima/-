$(function(){
	$("#btnD").click(function(){
      let xml=new XMLHttpRequest();
      xml.open('post','php/loginCheck.php',true);
      xml.onreadystatechange=function(){
         if(xml.readyState==4&&xml.status==200){
              // var a=xml.responseText;
              //   console.log(a);
            if(xml.responseText=="1"){
               // addCookie("userphone",$("#userId").value,7);
               alert("1");
               // window.localStorage.useremail=$("#useremail").val();
               // console.log(localStorage.useremail);
               location.href="index.html";
            }else{
               alert("电邮或密码不正确");
            }
         }
      }
      xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   
   let str = `userphone=${$("#userId").val()}&userpass=${$("#userPas").val()}`;
   console.log("userphone");
   xml.send(str);

  });

	
})