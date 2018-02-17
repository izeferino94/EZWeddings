function verifyLogin()
{  
   document.getElementById("pidL").style.visibility = "hidden";
   var dict = {};               
   dict["a@a.com"] = "123";     
   dict["b@b.com"] = "123";                 
   dict["planner@aol.com"] = "123"; 
     
   if( dict[document.getElementById("emailIdL").value] == document.getElementById("passwordIdL").value )               
   {
       return true;
   }
   else
   {
        document.getElementById("pidL").style.visibility = "visible";
        return false;
   }
}    