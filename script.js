window.onload = function (){
    let formulaire2 = document.getElementById('formulaire2').style.display = "none";
    let formulaire3 = document.getElementById('formulaire3').style.display = "none";
    let formulaire4 = document.getElementById('formulaire4').style.display = "none";
    let formulaire5 = document.getElementById('formulaire5').style.display = "none";
    let formulaire6 = document.getElementById('formulaire6').style.display = "none";
    
    let message ="";
    let image = "";
    let message1 ="";
    let image1 = "";
    let message2 ="";
    let image2 = "";
    let message3 ="";
    let image3 = "";
    let message4 ="";
    let image4 = "";
    let message5 ="";
    let image5 = "";

    document.getElementById("formulaire1").addEventListener("change", function(event){
        let jour = form1.elements.jour.value;
        let mois = form1.elements.mois.value;
        let année = form1.elements.année.value;
            if ((jour == 7 ) && (mois == 6) && (année == 2015)) { 
                    message = "Quelle merveilleuse soirée";
                    formulaire2 = document.getElementById('formulaire2').style.display = "block";
                    document.getElementById("formulaire2").addEventListener("change", function(event){  
                        let value = event.target.value;    
                        if (value === "rose1"){ 
                            formulaire3 = document.getElementById('formulaire3').style.display = "none";
                            formulaire4 = document.getElementById('formulaire4').style.display = "none";
                            formulaire5 = document.getElementById('formulaire5').style.display = "none";
                            formulaire6 = document.getElementById('formulaire6').style.display = "none";
                            document.getElementById('form3').reset();
                            document.getElementById('form4').reset();
                            document.getElementById('form5').reset();
                            document.getElementById('form6').reset();
                            message1 = " Ce n'était pas cette rose là !";
                        }else if(value === "rose2"){
                            formulaire3 = document.getElementById('formulaire3').style.display = "block";
                            message1 = " C'était bien celle là ! ";
                            document.getElementById("formulaire3").addEventListener("change", function(event){
                                    let value1 = event.target.value;
                                        if (value1 === "oui1"){ 
                                            message2 = " Ca me fait drôlement plaisir alors !";
                                            formulaire4 = document.getElementById('formulaire4').style.display = "block";
                                                document.getElementById("formulaire4").addEventListener("change", function(event){
                                                    let value2 = event.target.value;
                                                        if (value2 === "oui2"){ 
                                                            message3 = " Tu en auras autant que tu le souhaites !";
                                                            formulaire5 = document.getElementById('formulaire5').style.display = "block";
                                                                document.getElementById("formulaire5").addEventListener("change", function(event){
                                                                    let value3 = event.target.value;
                                                                        if (value3 === "oui3"){ 
                                                                            message4 = " D'accord, je vais faire des efforts pour passer plus de temps avec toi ! ";
                                                                            formulaire6 = document.getElementById('formulaire6').style.display = "block";    
                                                                            document.getElementById("formulaire6").addEventListener("change", function(event){
                                                                                let value4 = event.target.value;
                                                                                    if (value4 === "amical"){ 
                                                                                            message5 = " Ca me fend le coeur...";
                                                                                            image5 = "../jeux-js/images/coeur2.png";
                                                                                    }else if(value4 === "amour"){
                                                                                            message5 = " Aimons-nous jusqu'à la fin de nos jours !";
                                                                                            image5 = "../jeux-js/images/infinity.png";
                                                                                    }else if(value4 === "sex"){
                                                                                            message5 = " Grrr Grrr !";
                                                                                            image5 = "../jeux-js/images/grr.png";
                                                                                    }                                                                           
                                                                                    document.getElementById("message5").textContent = message5;
                                                                                    document.getElementById("img5").src = image5;
                                                                                });
                                                                        }else if(value3 === "non3"){
                                                                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                                        document.getElementById('form6').reset();                                                           
                                                                            message4 = " Allez, s'il te plait......!!!! ";
                                                                        }
                                                                        document.getElementById("message4").textContent = message4;
                                                                        document.getElementById("img4").src = image4;
                                                                }); 
                                                        }else if(value2 === "non2"){
                                                        formulaire5 = document.getElementById('formulaire5').style.display = "none";
                                                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                        document.getElementById('form5').reset();
                                                        document.getElementById('form6').reset();
                                                            message3 = " Serieusement ? ";
                                                        }
                                                        document.getElementById("message3").textContent = message3;
                                                        document.getElementById("img3").src = image3;
                                                }); 
                                        }else if(value1 === "non1"){
                                        formulaire4 = document.getElementById('formulaire4').style.display = "none";
                                        formulaire5 = document.getElementById('formulaire5').style.display = "none";
                                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                        document.getElementById('form4').reset();
                                        document.getElementById('form5').reset();
                                        document.getElementById('form6').reset();
                                            message2 = " Je suis déçu...! ";
                                        }
                                    document.getElementById("message2").textContent = message2;
                                    document.getElementById("img2").src = image2;
                                });          
                        }else if(value === "rose3"){
                            formulaire3 = document.getElementById('formulaire3').style.display = "none";
                            formulaire4 = document.getElementById('formulaire4').style.display = "none";
                            formulaire5 = document.getElementById('formulaire5').style.display = "none";
                            formulaire6 = document.getElementById('formulaire6').style.display = "none";
                            document.getElementById('form3').reset();
                            document.getElementById('form4').reset();
                            document.getElementById('form5').reset();
                            document.getElementById('form6').reset();  
                            message1 = "Ce n'était pas celle-ci !"
                        }else if(value === "rose4"){
                            formulaire3 = document.getElementById('formulaire3').style.display = "none";
                            formulaire4 = document.getElementById('formulaire4').style.display = "none";
                            formulaire5 = document.getElementById('formulaire5').style.display = "none";
                            formulaire6 = document.getElementById('formulaire6').style.display = "none";
                            document.getElementById('form3').reset();
                            document.getElementById('form4').reset();
                            document.getElementById('form5').reset();
                            document.getElementById('form6').reset();
                            message1 = "Ce n'était pas un bouquet de rose !";
                        }
                        document.getElementById("message1").textContent = message1; 
                        document.getElementById("img1").src = image1; 
                });
            }else if ((jour == 11 ) && (mois == 9) && (année == 2020)) {
                message = "C'était une super journée";
                formulaire2 = document.getElementById('formulaire2').style.display = "block";
                document.getElementById("formulaire2").addEventListener("change", function(event){  
                    let value = event.target.value;    
                    if (value === "rose1"){
                        formulaire3 = document.getElementById('formulaire3').style.display = "none";
                        formulaire4 = document.getElementById('formulaire4').style.display = "none";
                        formulaire5 = document.getElementById('formulaire5').style.display = "none";
                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                        document.getElementById('form3').reset();
                        document.getElementById('form4').reset();
                        document.getElementById('form5').reset();
                        document.getElementById('form6').reset();
                        message1 = "Ce n'était pas une rose en papier !";
                    }else if(value === "rose2"){
                        formulaire3 = document.getElementById('formulaire3').style.display = "none";
                        formulaire4 = document.getElementById('formulaire4').style.display = "none";
                        formulaire5 = document.getElementById('formulaire5').style.display = "none";
                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                        document.getElementById('form3').reset();
                        document.getElementById('form4').reset();
                        document.getElementById('form5').reset();
                        document.getElementById('form6').reset();  
                        message1 = "Ce n'était pas une rose éternelle !"
                              
                    }else if(value === "rose3"){
                        formulaire3 = document.getElementById('formulaire3').style.display = "none";
                        formulaire4 = document.getElementById('formulaire4').style.display = "none";
                        formulaire5 = document.getElementById('formulaire5').style.display = "none";
                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                        document.getElementById('form3').reset();
                        document.getElementById('form4').reset();
                        document.getElementById('form5').reset();
                        document.getElementById('form6').reset();  
                        message1 = "Ce n'était pas une vrai rose !"
                    }else if  (value === "rose4"){ 
                        formulaire3 = document.getElementById('formulaire3').style.display = "block";
                        message1 = "C'était bien un bouquet rose ! ";
                        document.getElementById("formulaire3").addEventListener("change", function(event){
                                let value1 = event.target.value;
                                    if (value1 === "oui1"){ 
                                        message2 = "Ca me fait drôlement plaisir alors !";
                                        formulaire4 = document.getElementById('formulaire4').style.display = "block";
                                            document.getElementById("formulaire4").addEventListener("change", function(event){
                                                let value2 = event.target.value;
                                                    if (value2 === "oui2"){ 
                                                        message3 = "Tu en aura bientôt un autre alors!";
                                                        formulaire5 = document.getElementById('formulaire5').style.display = "block";
                                                            document.getElementById("formulaire5").addEventListener("change", function(event){
                                                                let value3 = event.target.value;
                                                                    if (value3 === "oui3"){ 
                                                                        message4 = " C'est génial moi aussi, vivement que l'ont ce revoit ! ";
                                                                        formulaire6 = document.getElementById('formulaire6').style.display = "block";    
                                                                        document.getElementById("formulaire6").addEventListener("change", function(event){
                                                                            let value4 = event.target.value;
                                                                                if (value4 === "amical"){ 
                                                                                        message5 = " Restons amis alors!";
                                                                                        image5 = "../jeux-js/images/coeur2.png";
                                                                                }else if(value4 === "amour"){
                                                                                        message5 = " Amour un jours, amour toujours !";
                                                                                        image5 = "../jeux-js/images/infinity.png";
                                                                                }else if(value4 === "sex"){
                                                                                        message5 = " Grrr Grrr !";
                                                                                        image5 = "../jeux-js/images/grr.png";
                                                                                }                                                                           
                                                                                document.getElementById("message5").textContent = message5;
                                                                                document.getElementById("img5").src = image5;
                                                                            });
                                                                    }else if(value3 === "non3"){
                                                                    formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                                    document.getElementById('form6').reset();                                                           
                                                                        message4 = "J'aimerais tellement......!!!! ";
                                                                    }
                                                                    document.getElementById("message4").textContent = message4;
                                                                    document.getElementById("img4").src = image4;
                                                            }); 
                                                    }else if(value2 === "non2"){
                                                    formulaire5 = document.getElementById('formulaire5').style.display = "none";
                                                    formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                    document.getElementById('form5').reset();
                                                    document.getElementById('form6').reset();
                                                        message3 = "C'est vraiment ce que tu souhaites ? ";
                                                        
                                                    }
                                                document.getElementById("message3").textContent = message3;
                                                document.getElementById("img3").src = image3;
                                            }); 
                                    }else if(value1 === "non1"){
                                    formulaire4 = document.getElementById('formulaire4').style.display = "none";
                                    formulaire5 = document.getElementById('formulaire5').style.display = "none";
                                    formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                    document.getElementById('form4').reset();
                                    document.getElementById('form5').reset();
                                    document.getElementById('form6').reset();
                                        message2 = " Je suis vraiment déçu...! ";
                                    }
                                document.getElementById("message2").textContent = message2;
                                document.getElementById("img2").src = image2;
                            });  
                    document.getElementById("message1").textContent = message1; 
                    document.getElementById("img1").src = image1;  
                    }
                document.getElementById("message1").textContent = message1; 
                document.getElementById("img1").src = image1;        
              });
            }else if ((jour == 23 ) && (mois == 6) && (année == 2018)) {
                message = "Quelle merveilleuse soirée";
                formulaire2 = document.getElementById('formulaire2').style.display = "block";
                document.getElementById("formulaire2").addEventListener("change", function(event){  
                    let value = event.target.value;    
                    if (value === "rose1"){ 
                        formulaire3 = document.getElementById('formulaire3').style.display = "block";
                        message1 = " C'était bien cette rose ! ";
                        document.getElementById("formulaire3").addEventListener("change", function(event){
                                let value1 = event.target.value;
                                    if (value1 === "oui1"){ 
                                        message2 = " Ca me fait drôlement plaisir alors !";
                                        formulaire4 = document.getElementById('formulaire4').style.display = "block";
                                            document.getElementById("formulaire4").addEventListener("change", function(event){
                                                let value2 = event.target.value;
                                                    if (value2 === "oui2"){ 
                                                        message3 = "Génial, tu en auras d'autres alors!";
                                                        formulaire5 = document.getElementById('formulaire5').style.display = "block";
                                                            document.getElementById("formulaire5").addEventListener("change", function(event){
                                                                let value3 = event.target.value;
                                                                    if (value3 === "oui3"){ 
                                                                        message4 = " C'est génial moi aussi, on se voit quand ? ";
                                                                        formulaire6 = document.getElementById('formulaire6').style.display = "block";    
                                                                        document.getElementById("formulaire6").addEventListener("change", function(event){
                                                                            let value4 = event.target.value;
                                                                                if (value4 === "amical"){ 
                                                                                        message5 = " Ca me rend triste, mais restons amis...";
                                                                                        image5 = "../jeux-js/images/coeur2.png";
                                                                                }else if(value4 === "amour"){
                                                                                        message5 = " Aimons-nous jusqu'à la fin de nos jours !";
                                                                                        image5 = "../jeux-js/images/infinity.png";
                                                                                }else if(value4 === "sex"){
                                                                                        message5 = " Grrr Grrr !";
                                                                                        image5 = "../jeux-js/images/grr.png";
                                                                                }                                                                           
                                                                                document.getElementById("message5").textContent = message5;
                                                                                document.getElementById("img5").src = image5;
                                                                            });
                                                                    }else if(value3 === "non3"){
                                                                    formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                                    document.getElementById('form6').reset();                                                           
                                                                        message4 = "Allez s'il te plait......!!!! ";
                                                                    }
                                                                    document.getElementById("message4").textContent = message4;
                                                                    document.getElementById("img4").src = image4;
                                                            }); 
                                                    }else if(value2 === "non2"){
                                                    formulaire5 = document.getElementById('formulaire5').style.display = "none";
                                                    formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                                    document.getElementById('form5').reset();
                                                    document.getElementById('form6').reset();
                                                        message3 = "C'est vraiment ce que tu souhaites ? ";
                                                        
                                                    }
                                                document.getElementById("message3").textContent = message3;
                                                document.getElementById("img3").src = image3;
                                            }); 
                                    }else if(value1 === "non1"){
                                    formulaire4 = document.getElementById('formulaire4').style.display = "none";
                                    formulaire5 = document.getElementById('formulaire5').style.display = "none";
                                    formulaire6 = document.getElementById('formulaire6').style.display = "none";
                                    document.getElementById('form4').reset();
                                    document.getElementById('form5').reset();
                                    document.getElementById('form6').reset();
                                        message2 = " Je suis vraiment déçu...! ";
                                    }
                                document.getElementById("message2").textContent = message2;
                                document.getElementById("img2").src = image2;
                            });   
                    }else if(value === "rose2"){
                        formulaire3 = document.getElementById('formulaire3').style.display = "none";
                        formulaire4 = document.getElementById('formulaire4').style.display = "none";
                        formulaire5 = document.getElementById('formulaire5').style.display = "none";
                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                        document.getElementById('form3').reset();
                        document.getElementById('form4').reset();
                        document.getElementById('form5').reset();
                        document.getElementById('form6').reset();  
                        message1 = "Ce n'était pas celle-ci !"
                              
                    }else if(value === "rose3"){
                        formulaire3 = document.getElementById('formulaire3').style.display = "none";
                        formulaire4 = document.getElementById('formulaire4').style.display = "none";
                        formulaire5 = document.getElementById('formulaire5').style.display = "none";
                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                        document.getElementById('form3').reset();
                        document.getElementById('form4').reset();
                        document.getElementById('form5').reset();
                        document.getElementById('form6').reset();  
                        message1 = "Ce n'était pas cette rose là !"
                    }else if(value === "rose4"){
                        formulaire3 = document.getElementById('formulaire3').style.display = "none";
                        formulaire4 = document.getElementById('formulaire4').style.display = "none";
                        formulaire5 = document.getElementById('formulaire5').style.display = "none";
                        formulaire6 = document.getElementById('formulaire6').style.display = "none";
                        document.getElementById('form3').reset();
                        document.getElementById('form4').reset();
                        document.getElementById('form5').reset();
                        document.getElementById('form6').reset();
                        message1 = "Ce n'était pas un bouquet de rose !";
                    }
            document.getElementById("message1").textContent = message1; 
            document.getElementById("img1").src = image1;  
             });
            }else{
                formulaire2 = document.getElementById('formulaire2').style.display = "none";
                formulaire3 = document.getElementById('formulaire3').style.display = "none";
                formulaire4 = document.getElementById('formulaire4').style.display = "none";
                formulaire5 = document.getElementById('formulaire5').style.display = "none";
                formulaire6 = document.getElementById('formulaire6').style.display = "none";
                document.getElementById('form2').reset();
                document.getElementById('form3').reset();
                document.getElementById('form4').reset();
                document.getElementById('form5').reset();
                document.getElementById('form6').reset();
                message = "Ce n'était pas ce jour là !";
            }
            document.getElementById("message").textContent = message; 
            document.getElementById("img").src = image; 
        });
    }
