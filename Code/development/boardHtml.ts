import {funFactButtons} from "./funfacts";

export function bigBoard() {
    // @ts-ignore
    document.getElementById("boardContent").innerHTML =
        `
                <div class="center">
                    <div class="community-chest-deck">
                        <h2 class="label">Event</h2>
                        <div class="deck">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front2">
                                        <div>
                                            <span class="title2">
                                                <h2>EVENT</h2>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flip-card-back2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 class="title">Monopoly Belval Edition</h1>
                    <div class="chance-deck">
                        <h2 class="label">Quiz</h2>
                        <div class="deck">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div>
                                            <span class="title1">
                                                <h2>QUIZ</h2>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-135">Just Visiting / In Erasmus</div>
                </div>
                <div class="sm-box rot-180 sm-box-pink buildingFunFact">
                    <span class="stars"><img class="star" id="1-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='kinepolis'>
                        <span class="title">Kinepolis</span>
                        <span class="price">140 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-white">
                    <div>
                        <span class="title">PARKING MAISON DU SAVOIR</span>
                        <span class="price">150 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-pink buildingFunFact">
                    <span class="stars"><img class="star" id="1-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='rockhal'>
                        <span class="title">Rockhal</span>
                        <span class="price">140 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-pink buildingFunFact">
                    <span class="stars"><img class="star" id="1-star14"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star14"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star14"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star14"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star14"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='belval_plaza'>
                        <span class="title">Belval Plaza</span>
                        <span class="price">160 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-white">
                    <div>
                        <span class="title">PORTE DE FRANCE</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-orange buildingFunFact">
                    <span class="stars"><img class="star" id="1-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='student_lounge_belval'>
                        <span class="title">Student Lounge Belval</span>
                        <span class="price">180 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-white">
                    <div id="event-card3">
                        <span class="title">EVENT</span>
                        <span class="price">Follow Instructions</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-orange buildingFunFact">
                    <span class="stars"><img class="star" id="1-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_arts_etudiants'>
                        <span class="title">Maison des Arts et des Etudiants</span>
                        <span class="price">180 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-orange buildingFunFact">
                    <span class="stars"><img class="star" id="1-star19"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star19"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star19"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star19"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star19"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_science_humaines'>
                        <span class="title">Maison des Sciences Humaines</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-135-reverse">Free Parking</div>
                </div>
                <div class="sm-box sm-box-lightBlue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='maison_du_nombre'>
                        <span class="title">Maison du Nombre</span>
                        <span class="price">120 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-red buildingFunFact">
                    <span class="stars"><img class="star" id="1-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='cafe_savoir'>
                        <span class="title">Café du Savoir</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-lightBlue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star8"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star8"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star8"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star8"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star8"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='luxembourg_institute_science_technology'>
                        <span class="title">L.I.S.T</span>
                        <span class="price">100 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90-reverse" id="quiz-card3">
                        <span class="title">QUIZ</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90 " id="quiz-card2">
                        <span class="title">QUIZ</span>
                    </div>
                </div>
                <div class="sm-box sm-box-red buildingFunFact">
                    <span class="stars"><img class="star" id="1-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='restaurant_uni'>
                        <span class="title">Restaurant Universitaire</span>
                        <span class="price">220 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-lightBlue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='halles_essais_ingenieur'>
                        <span class="title">Halles d’Essais Ingénieurs</span>
                        <span class="price">100 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-red buildingFunFact">
                    <span class="stars"><img class="star" id="1-star24"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star24"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star24"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star24"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star24"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='gaart_belval'>
                        <span class="title">Gaart Belval</span>
                        <span class="price">220 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90">
                        <span class="title">BELVAL RAILROAD</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90-reverse">
                        <span class="title">PORTE DES SCIENCES</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90">
                        <span class="title">STUDIES FEES</span>
                        <span class="price">Pay 10% or 200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-yellow buildingFunFact">
                    <span class="stars"><img class="star" id="1-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='massenoire'>
                        <span class="title">Massenoire</span>
                        <span class="price">260 BCoins</span>
                    </div>
                </div>


                <div class="sm-box sm-box-brown buildingFunFact">
                    <span class="stars"><img class="star" id="1-star3"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star3"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star3"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star3"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star3"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='residence_etudiante_Uni-ValII'>
                        <span class="title">Résidence Etudiante Uni-Val II</span>
                        <span class="price">50 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-yellow buildingFunFact">
                    <span class="stars"><img class="star" id="1-star27"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star27"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star27"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star27"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star27"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='lycee_belval'>
                        <span class="title">Lycée Belval</span>
                        <span class="price">260 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90" id="event-card">
                        <span class="title">EVENT</span>
                        <span class="price">Follow Instructions</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90-reverse">
                        <span class="title">SQUARE MILE BELVAL</span>
                        <span class="price">150 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-brown buildingFunFact">
                    <span class="stars"><img class="star" id="1-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='residence_etudiante_Uni-ValI'>
                        <span class="title">Résidence Etudiante Uni-Val I</span>
                        <span class="price">50 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-yellow buildingFunFact">
                    <span class="stars"><img class="star" id="1-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='bil_bank'>
                        <span class="title">Bil Bank</span>
                        <span class="price">280 Bcoins</span>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-45">Start and Go (Collect Salary)</div>
                </div>
                <div class="sm-box sm-box-blue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_du_savoir'>
                        <span class="title">Maison du Savoir</span>
                        <span class="price">Price 5</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div>
                        <span class="title">LUXURY TAX</span>
                        <span class="price">Pay 100 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-blue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star37"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star37"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star37"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star37"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star37"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='llc'>
                        <span class="title">Luxembourg Learning Center</span>
                        <span class="price">Price 3</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div id="quiz-card">
                        <span class="title">QUIZ</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div>
                        <span class="title">MAISON DU SAVOIR</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-green buildingFunFact">
                    <span class="stars"><img class="star" id="1-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_biomedecineII'>
                        <span class="title">Maison Biomédecine II</span>
                        <span class="price">320 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div id="event-card2">
                        <span class="title">EVENT</span>
                        <span class="price">Follow Instructions</span>
                    </div>
                </div>
                <div class="sm-box sm-box-green buildingFunFact">
                    <span class="stars"><img class="star" id="1-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_biomedecineI'>
                        <span class="title">Maison Biomédecine I</span>
                        <span class="price">300 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-green buildingFunFact">
                    <span class="stars"><img class="star" id="1-star31"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star31"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star31"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star31"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star31"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_innovation'>
                        <span class="title">Maison de l'Innovation</span>
                        <span class="price">300 BCoins</span>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-45-reverse">Go to Erasmus</div>
                </div>
    `;

    $(".board").css("grid-template-columns", "120px repeat(9, 75px) 120px");
    $(".board").css("grid-template-rows", "120px repeat(9, 75px) 120px");
    $(".center").css("grid-column", "2 / 11");
    $(".center").css("grid-row", "2 / 11");
    $(".figure-start").css("width", "915px");
    $(".board .center .title").css("font-size", "35px");
    funFactButtons();
}

export function mediumBoard() {
    // @ts-ignore
    document.getElementById("boardContent").innerHTML =
        `
                <div class="center">
                    <div class="community-chest-deck">
                        <h2 class="label">Event</h2>
                        <div class="deck">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front2">
                                        <div>
                                            <span class="title2">
                                                <h2>EVENT</h2>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flip-card-back2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 class="title">Monopoly Belval Edition</h1>
                    <div class="chance-deck">
                        <h2 class="label">Quiz</h2>
                        <div class="deck">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div>
                                            <span class="title1">
                                                <h2>QUIZ</h2>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-135">Just Visiting / In Erasmus</div>
                </div>
                <div class="sm-box rot-180 sm-box-pink buildingFunFact">
                    <span class="stars"><img class="star" id="1-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star11"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='kinepolis'>
                        <span class="title">Kinepolis</span>
                        <span class="price">140 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-white">
                    <div>
                        <span class="title">PARKING MAISON DU SAVOIR</span>
                        <span class="price">150 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-pink buildingFunFact">
                    <span class="stars"><img class="star" id="1-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='rockhal'>
                        <span class="title">Rockhal</span>
                        <span class="price">140 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-white">
                    <div>
                        <span class="title">PORTE DE FRANCE</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-orange buildingFunFact">
                    <span class="stars"><img class="star" id="1-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star16"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='student_lounge_belval'>
                        <span class="title">Student Lounge Belval</span>
                        <span class="price">180 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-white">
                    <div id="event-card3">
                        <span class="title">EVENT</span>
                        <span class="price">Follow Instructions</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-orange buildingFunFact">
                    <span class="stars"><img class="star" id="1-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_arts_etudiants'>
                        <span class="title">Maison des Arts et des Etudiants</span>
                        <span class="price">180 BCoins</span>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-135-reverse">Free Parking</div>
                </div>
                <div class="sm-box sm-box-lightBlue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star9"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='maison_du_nombre'>
                        <span class="title">Maison du Nombre</span>
                        <span class="price">120 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-red buildingFunFact">
                    <span class="stars"><img class="star" id="1-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star21"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='cafe_savoir'>
                        <span class="title">Café du Savoir</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90 " id="quiz-card2">
                        <span class="title">QUIZ</span>
                    </div>
                </div>                
                <div class="sm-box sm-box-white">
                    <div class="rot-90-reverse" id="quiz-card3">
                        <span class="title">QUIZ</span>
                    </div>
                </div>
                <div class="sm-box sm-box-lightBlue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='halles_essais_ingenieur'>
                        <span class="title">Halles d’Essais Ingénieurs</span>
                        <span class="price">100 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-red buildingFunFact">
                    <span class="stars"><img class="star" id="1-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='restaurant_uni'>
                        <span class="title">Restaurant Universitaire</span>
                        <span class="price">220 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90">
                        <span class="title">BELVAL RAILROAD</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90-reverse">
                        <span class="title">PORTE DES SCIENCES</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90">
                        <span class="title">STUDIES FEES</span>
                        <span class="price">Pay 10% or 200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-yellow buildingFunFact">
                    <span class="stars"><img class="star" id="1-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star26"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='massenoire'>
                        <span class="title">Massenoire</span>
                        <span class="price">260 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90" id="event-card">
                        <span class="title">EVENT</span>
                        <span class="price">Follow Instructions</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90-reverse">
                        <span class="title">SQUARE MILE BELVAL</span>
                        <span class="price">150 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-brown buildingFunFact">
                    <span class="stars"><img class="star" id="1-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='residence_etudiante_Uni-ValI'>
                        <span class="title">Résidence Etudiante Uni-Val I</span>
                        <span class="price">50 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-yellow buildingFunFact">
                    <span class="stars"><img class="star" id="1-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='bil_bank'>
                        <span class="title">Bil Bank</span>
                        <span class="price">280 Bcoins</span>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-45">Start and Go (Collect Salary)</div>
                </div>
                <div class="sm-box sm-box-blue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_du_savoir'>
                        <span class="title">Maison du Savoir</span>
                        <span class="price">Price 5</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div>
                        <span class="title">LUXURY TAX</span>
                        <span class="price">Pay 100 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div id="quiz-card">
                        <span class="title">QUIZ</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div>
                        <span class="title">MAISON DU SAVOIR</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-green buildingFunFact">
                    <span class="stars"><img class="star" id="1-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star34"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_biomedecineII'>
                        <span class="title">Maison Biomédecine II</span>
                        <span class="price">320 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div id="event-card2">
                        <span class="title">EVENT</span>
                        <span class="price">Follow Instructions</span>
                    </div>
                </div>
                <div class="sm-box sm-box-green buildingFunFact">
                    <span class="stars"><img class="star" id="1-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_biomedecineI'>
                        <span class="title">Maison Biomédecine I</span>
                        <span class="price">300 BCoins</span>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-45-reverse">Go to Erasmus</div>
                </div>
    `;

    $(".board").css("grid-template-columns", "120px repeat(7, 75px) 120px");
    $(".board").css("grid-template-rows", "120px repeat(7, 75px) 120px");
    $(".center").css("grid-column", "2 / 9");
    $(".center").css("grid-row", "2 / 9");
    $(".figure-start").css("width", "767px");
    $(".board .center .title").css("font-size", "27px");
    funFactButtons();
}

export function smallBoard() {
// @ts-ignore
    document.getElementById("boardContent").innerHTML =
        `
                <div class="center">
                    <div class="community-chest-deck">
                        <h2 class="label">Event</h2>
                        <div class="deck">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front2">
                                        <div>
                                            <span class="title2">
                                                <h2>EVENT</h2>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flip-card-back2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 class="title">Monopoly Belval Edition</h1>
                    <div class="chance-deck">
                        <h2 class="label">Quiz</h2>
                        <div class="deck">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <div>
                                            <span class="title1">
                                                <h2>QUIZ</h2>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flip-card-back">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-135">Just Visiting / In Erasmus</div>
                </div>
                <div class="sm-box rot-180 sm-box-white">
                    <div>
                        <span class="title">PARKING MAISON DU SAVOIR</span>
                        <span class="price">150 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-pink buildingFunFact">
                    <span class="stars"><img class="star" id="1-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star13"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='rockhal'>
                        <span class="title">Rockhal</span>
                        <span class="price">140 BCoins</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-white">
                    <div id="event-card3">
                        <span class="title">EVENT</span>
                        <span class="price">Follow Instructions</span>
                    </div>
                </div>
                <div class="sm-box rot-180 sm-box-orange buildingFunFact">
                    <span class="stars"><img class="star" id="1-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star18"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_arts_etudiants'>
                        <span class="title">Maison des Arts et des Etudiants</span>
                        <span class="price">180 BCoins</span>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-135-reverse">Free Parking</div>
                </div>
                <div class="sm-box sm-box-lightBlue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star6"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='halles_essais_ingenieur'>
                        <span class="title">Halles d’Essais Ingénieurs</span>
                        <span class="price">100 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90-reverse" id="quiz-card3">
                        <span class="title">QUIZ</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90">
                        <span class="title">BELVAL RAILROAD</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-red buildingFunFact">
                    <span class="stars"><img class="star" id="1-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star23"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='restaurant_uni'>
                        <span class="title">Restaurant Universitaire</span>
                        <span class="price">220 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90" id="event-card">
                        <span class="title">EVENT</span>
                        <span class="price">Follow Instructions</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div class="rot-90-reverse">
                        <span class="title">PORTE DES SCIENCES</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-brown buildingFunFact">
                    <span class="stars"><img class="star" id="1-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star1"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90" id='residence_etudiante_Uni-ValI'>
                        <span class="title">Résidence Etudiante Uni-Val I</span>
                        <span class="price">50 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-yellow buildingFunFact">
                    <span class="stars"><img class="star" id="1-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star29"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div class="rot-90-reverse" id='bil_bank'>
                        <span class="title">Bil Bank</span>
                        <span class="price">280 Bcoins</span>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-45">Start and Go (Collect Salary)</div>
                </div>
                <div class="sm-box sm-box-blue buildingFunFact">
                    <span class="stars"><img class="star" id="1-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star39"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_du_savoir'>
                        <span class="title">Maison du Savoir</span>
                        <span class="price">Price 5</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div>
                        <span class="title">LUXURY TAX</span>
                        <span class="price">Pay 100 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-white">
                    <div>
                        <span class="title">MAISON DU SAVOIR</span>
                        <span class="price">200 BCoins</span>
                    </div>
                </div>
                <div class="sm-box sm-box-green buildingFunFact">
                    <span class="stars"><img class="star" id="1-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="2-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="3-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="4-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <span class="stars"><img class="star" id="5-star32"
                            src="../Code/graphic/images/small/star2.png"></span>
                    <div id='maison_biomedecineI'>
                        <span class="title">Maison Biomédecine I</span>
                        <span class="price">300 BCoins</span>
                    </div>
                </div>
                <div class="lg-box">
                    <div class="lg-rot rot-45-reverse">Go to Erasmus</div>
                </div>
    `;

    $(".board").css("grid-template-columns", "120px repeat(4, 75px) 120px");
    $(".board").css("grid-template-rows", "120px repeat(4, 75px) 120px");
    $(".center").css("grid-column", "2 / 6");
    $(".center").css("grid-row", "2 / 6");
    $(".figure-start").css("width", "541px");
    $(".board .center .title").css("font-size", "10px");
    funFactButtons();
}