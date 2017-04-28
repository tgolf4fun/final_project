    $(document).ready(function(){
    console.log("LETS GO!!");
    $('#hdr-menu').hide();
    $('#dg-menu').click(menuAction);

    function menuAction(){
    //event.preventDefault();
    $('#hdr-menu').slideDown("slow");
    $('.main-up').hide();
    $('.main-dn').hide();
    $('#submit-btn').hide();
     }

    // create an array of classes
    var myClasses = ["Monday: Hip Hop, Breakdancing - 4:30-5:30 P.M. ages 8 & up","Monday: Jumps/Turns/Progressions - 5:30-6:30 P.M. ages 8 & up","Tuesday: Hip Hop, Jazz/Musical Theater - 4:30-5:30 P.M. ages 5 & up","Wednesday: Hip Hop/Breakdancing - 4:30-5:30 P.M. ages 5 & up","Wednesday: Advanced - Co-Ed Hip Hop/Breakdancing - 6:30-7:30 P.M. 10 & up","Thursday: Ballet Technique 2 - 5:30-6:30 P.M. ages 12 & up","Thursday: Ballet Technique 1 - 6:30-7:30 P.M. ages 7-11","****Audition Only Classes Below****","Wednesday: Int./Advanced Hip Hop Choreography and Bboy Power/Dynamics BOYS ONLY - 5:30-6:30 P.M","Thursday: Director's Choice Adv. Lyrical 4:00-4:30 P.M.","Thursday: Int./Advanced Hip Hop/Jazz/Contemporary Girls ONLY 4:30-5:30 P.M.","Saturday: Int./Advanced Hip Hop/Lyrical Contemporary CO-ED - 11:00 A.M.- Noon"];
    //not needed but just making sure I can read my array
    console.log(myClasses[0]);

    //add array values to the option menu on the html page
    myClasses.forEach(function(item){
            $('.class-list').append($("<option>"+item+"</option>"));
        });

    });