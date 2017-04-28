function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}
var myPgname = GetURLParameter('p.name');
var myPgemail = GetURLParameter('email');
var myStu = GetURLParameter('stu1');
var myPgname = myPgname.replace("+", " ");

 $('#register').html("Thank you" + " " + myPgname + " " + "for signing up" + " " + myStu + " " + "for classes at D@G Dance studio. Be sure to check any emails received from dancegrooveswithjeffielou@gmail.com, we have the following email address as a contact email for you:" + " " + myPgemail );
//console.log(Pgname);
