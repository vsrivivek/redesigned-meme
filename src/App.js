import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Routes, Route } from 'react-router-dom';

//  import BioClassOne from './plantkingdom/BioClassOne';
//  import BioClassTwo from './Biology/biologicalclassification/BioClassTwo';
//  import BioClassOne from './Biology/biologicalclassification/BioClassOne';
// import BCThree from './Biology/biologicalclassification/BCThree';

import Register from './Welcome/Register';
// import QuestionTwo from './components/QuestionTwo';
// import QuestionThree from './components/QuestionThree';
// import QuestionFour from './components/QuestionFour';
// import QuestionFive from './components/QuestionFive';
// import QuestionSix from './components/QuestionSix';
// import QuestionSeven from './components/QuestionSeven';
// import QuestionEight from './components/QuestionEight';
// import QuestionNine from './components/QuestionNine';
// import QuestionTen from './components/QuestionTen';
// import QuestionEleven from './components/QuestionEleven';
// import QuestionTwelve from './components/QuestionTwelve';
// import QuestionThirteen from './components/QuestionThirteen';
// import QuestionFourteen from './components/QuestionFourteen';
// import QuestionFifteen from './components/QuestionFifteen';
// import QuestionSixteen from './components/QuestionSixteen';
// import QuestionSeventeen from './components/QuestionSeventeen';
// import QuestionEighteen from './components/QuestionEighteen';
// import QuestionNineteen from './components/QuestionNineteen';
// import QuestionTwenty from './components/QuestionTwenty';
// import QuestionTwentyOne from './components/QuestionTwentyOne';
// import QuestionTwentyTwo from './components/QuestionTwentyTwo';
// import QuestionTwentyThree from './components/QuestionTwentyThree';
// import QuestionTwentyFour from './components/QuestionTwentyFour';
// import QuestionTwentyFive from './components/QuestionTwentyFive';
// import QuestionTwentySix from './components/QuestionTwentySix';
// import QuestionTwentySeven from './components/QuestionTwentySeven';
// import QuestionTwentyEight from './components/QuestionTwentyEight';
// import QuestionTwentyNine from './components/QuestionTwentyNine';
// import QuestionThirty from './components/QuestionThirty';
// import QuestionThirtyOne from './components/QuestionThirtyOne';
// import QuestionThirtyTwo from './components/QuestionThirtyTwo';
// import QuestionThirtyThree from './components/QuestionThirtyThree';
// import QuestionThirtyFour from './components/QuestionThirtyFour';
// import QuestionThirtyFive from './components/QuestionThirtyFive';
// import QuestionThirtySix from './components/QuestionThirtySix';
// import QuestionThirtySeven from './components/QuestionThirtySeven';
// import QuestionThirtyEight from './components/QuestionThirtyEight';
// import QuestionThirtyNine from './components/QuestionThirtyNine';
// import QuestionForty from './components/QuestionForty';
// import Score from './components/Score'
// import Welcome from './components/Welcome';
// import Submit from './components/Submit';
 
// import routes from './routes';
// import Welcom from './Welcome/Welcom';
import CakeNumbers from './components/CakeNumbers';
// import Cname from './Welcome/Cname';
const LazyWelcom=React.lazy(()=>import('./Welcome/Welcom'));
const LazySubmit=React.lazy(()=>import('./components/Submit'));
// import Firstpage from './Welcome/Firstpage';
const LazyFirstpage=React.lazy(()=>import('./Welcome/Firstpage'));
 const LazyWelcomone= React.lazy(()=>import('./Welcome/Welcomone'));
 const LazyWelcomtwo= React.lazy(()=>import('./Welcome/Welcomtwo'));
 const LazyWelcomthree= React.lazy(()=>import('./Welcome/Welcomthree'));
 const LazyWelcomfour= React.lazy(()=>import('./Welcome/Welcomfour'));
 const LazyWelcomfive= React.lazy(()=>import('./Welcome/Welcomfive'));
 const LazyWelcomsix= React.lazy(()=>import('./Welcome/Welcomsix'));
 const LazyWelcomseven= React.lazy(()=>import('./Welcome/Welcomseven'));
 const LazyWelcomeight= React.lazy(()=>import('./Welcome/Welcomeight'));
 const LazyWelcomnine= React.lazy(()=>import('./Welcome/Welcomnine'));
 const LazyWelcomten= React.lazy(()=>import('./Welcome/Welcomten'));
 const LazyWelcomeleven= React.lazy(()=>import('./Welcome/Welcomeleven'));
 const LazyWelcomtwelve= React.lazy(()=>import('./Welcome/Welcomtwelve'));
 const LazyWelcomthirteen= React.lazy(()=>import('./Welcome/Welcomthirteen'));
 const LazyWelcomfourteen= React.lazy(()=>import('./Welcome/Welcomfourteen'));
 const LazyWelcomfifteen= React.lazy(()=>import('./Welcome/Welcomfifteen'));
 const LazyWelcomsixteen= React.lazy(()=>import('./Welcome/Welcomsixteen'));
 const LazyWelcomseventeen= React.lazy(()=>import('./Welcome/Welcomseventeen'));
 const LazyWelcomeighteen= React.lazy(()=>import('./Welcome/Welcomeighteen'));
 const LazyWelcomnineteen= React.lazy(()=>import('./Welcome/Welcomnineteen'));
 const LazyWelcomtwenty= React.lazy(()=>import('./Welcome/Welcomtwenty'));






const LazyDYscore= React.lazy(()=>import('./Biology/diseases/DYscore'));
// const LazyQuestionOne= React.lazy(()=>import('./Biology/diseases/QuestionOne'));
// const LazyQuestionTwo= React.lazy(()=>import('./components/QuestionTwo'));
const LazyDYone= React.lazy(()=>import('./Biology/diseases/DYone'));
const LazyDYtwo= React.lazy(()=>import('./Biology/diseases/DYtwo'));
const LazyDYthree= React.lazy(()=>import('./Biology/diseases/DYthree'));
const LazyDYfour= React.lazy(()=>import('./Biology/diseases/DYfour'));
const LazyDYfive= React.lazy(()=>import('./Biology/diseases/DYfive'));
const LazyDYsix= React.lazy(()=>import('./Biology/diseases/DYsix'));
const LazyDYseven= React.lazy(()=>import('./Biology/diseases/DYseven'));
const LazyDYeight= React.lazy(()=>import('./Biology/diseases/DYeight'));
const LazyDYnine= React.lazy(()=>import('./Biology/diseases/DYnine'));
const LazyDYten= React.lazy(()=>import('./Biology/diseases/DYten'));
const LazyDYeleven= React.lazy(()=>import('./Biology/diseases/DYeleven'));
const LazyDYtwelve= React.lazy(()=>import('./Biology/diseases/DYtwelve'));
const LazyDYthirteen= React.lazy(()=>import('./Biology/diseases/DYthirteen'));
const LazyDYfourteen= React.lazy(()=>import('./Biology/diseases/DYfourteen'));
const LazyDYfifteen= React.lazy(()=>import('./Biology/diseases/DYfifteen'));
const LazyDYsixteen= React.lazy(()=>import('./Biology/diseases/DYsixteen'));
const LazyDYseventeen= React.lazy(()=>import('./Biology/diseases/DYseventeen'));
 const LazyDYeighteen= React.lazy(()=>import('./Biology/diseases/DYeighteen'));
 const LazyDYnineteen= React.lazy(()=>import('./Biology/diseases/DYnineteen'));
 const LazyDYtwenty= React.lazy(()=>import('./Biology/diseases/DYtwenty'));
 const LazyDYtwentyOne= React.lazy(()=>import('./Biology/diseases/DYtwentyOne'));
 const LazyDYtwentyTwo= React.lazy(()=>import('./Biology/diseases/DYtwentyTwo'));
 const LazyDYtwentyThree= React.lazy(()=>import('./Biology/diseases/DYtwentyThree'));
 const LazyDYtwentyFour= React.lazy(()=>import('./Biology/diseases/DYtwentyFour'));
 const LazyDYtwentyFive= React.lazy(()=>import('./Biology/diseases/DYtwentyFive'));
 const LazyDYtwentySix= React.lazy(()=>import('./Biology/diseases/DYtwentySix'));
 const LazyDYtwentySeven= React.lazy(()=>import('./Biology/diseases/DYtwentySeven'));
 const LazyDYtwentyEight= React.lazy(()=>import('./Biology/diseases/DYtwentyEight'));
 const LazyDYtwentyNine= React.lazy(()=>import('./Biology/diseases/DYtwentyNine'));
 const LazyDYthirty= React.lazy(()=>import('./Biology/diseases/DYthirty'));
 const LazyDYthirtyOne= React.lazy(()=>import('./Biology/diseases/DYthirtyOne'));
 const LazyDYthirtyTwo= React.lazy(()=>import('./Biology/diseases/DYthirtyTwo'));
 const LazyDYthirtyThree= React.lazy(()=>import('./Biology/diseases/DYthirtyThree'));
 const LazyDYthirtyFour= React.lazy(()=>import('./Biology/diseases/DYthirtyFour'));
 const LazyDYthirtyFive= React.lazy(()=>import('./Biology/diseases/DYthirtyFive'));
 const LazyDYthirtySix= React.lazy(()=>import('./Biology/diseases/DYthirtySix'));
 const LazyDYthirtySeven= React.lazy(()=>import('./Biology/diseases/DYthirtySeven'));
 const LazyDYthirtyEight= React.lazy(()=>import('./Biology/diseases/DYthirtyEight'));
 const LazyDYthirtyNine= React.lazy(()=>import('./Biology/diseases/DYthirtyNine'));
 const LazyDYforty= React.lazy(()=>import('./Biology/diseases/DYforty'));
 const LazyDYsummary= React.lazy(()=>import('./Biology/diseases/DYsummary'));
 const LazyDYconfirm= React.lazy(()=>import('./Biology/diseases/DYconfirm'));
 const LazyDYtimeup= React.lazy(()=>import('./Biology/diseases/DYtimeup'));
 



const LazyBCscore= React.lazy(()=>import('./Biology/biologicalclassification/BCscore'));
const LazyBCone= React.lazy(()=>import('./Biology/biologicalclassification/BCone'));
const LazyBCtwo= React.lazy(()=>import('./Biology/biologicalclassification/BCtwo'));
const LazyBCthree= React.lazy(()=>import('./Biology/biologicalclassification/BCthree'));
const LazyBCfour= React.lazy(()=>import('./Biology/biologicalclassification/BCfour'));
const LazyBCfive= React.lazy(()=>import('./Biology/biologicalclassification/BCfive'));
const LazyBCsix= React.lazy(()=>import('./Biology/biologicalclassification/BCsix'));
const LazyBCseven= React.lazy(()=>import('./Biology/biologicalclassification/BCseven'));
const LazyBCeight= React.lazy(()=>import('./Biology/biologicalclassification/BCeight'));
const LazyBCnine= React.lazy(()=>import('./Biology/biologicalclassification/BCnine'));
const LazyBCten= React.lazy(()=>import('./Biology/biologicalclassification/BCten'));
const LazyBCeleven= React.lazy(()=>import('./Biology/biologicalclassification/BCeleven'));
const LazyBCtwelve= React.lazy(()=>import('./Biology/biologicalclassification/BCtwelve'));
const LazyBCthirteen= React.lazy(()=>import('./Biology/biologicalclassification/BCthirteen'));
const LazyBCfourteen= React.lazy(()=>import('./Biology/biologicalclassification/BCfourteen'));
const LazyBCfifteen= React.lazy(()=>import('./Biology/biologicalclassification/BCfifteen'));
const LazyBCsixteen= React.lazy(()=>import('./Biology/biologicalclassification/BCsixteen'));
const LazyBCseventeen= React.lazy(()=>import('./Biology/biologicalclassification/BCseventeen'));
 const LazyBCeighteen= React.lazy(()=>import('./Biology/biologicalclassification/BCeighteen'));
 const LazyBCnineteen= React.lazy(()=>import('./Biology/biologicalclassification/BCnineteen'));
 const LazyBCtwenty= React.lazy(()=>import('./Biology/biologicalclassification/BCtwenty'));
 const LazyBCtwentyone= React.lazy(()=>import('./Biology/biologicalclassification/BCtwentyone'));
 const LazyBCtwentytwo= React.lazy(()=>import('./Biology/biologicalclassification/BCtwentytwo'));
 const LazyBCtwentythree= React.lazy(()=>import('./Biology/biologicalclassification/BCtwentythree'));
 const LazyBCtwentyfour= React.lazy(()=>import('./Biology/biologicalclassification/BCtwentyfour'));
 const LazyBCtwentyfive= React.lazy(()=>import('./Biology/biologicalclassification/BCtwentyfive'));
 const LazyBCtwentysix= React.lazy(()=>import('./Biology/biologicalclassification/BCtwentysix'));
 const LazyBCtwentyseven= React.lazy(()=>import('./Biology/biologicalclassification/BCtwentyseven'));
 const LazyBCtwentyeight= React.lazy(()=>import('./Biology/biologicalclassification/BCtwentyeight'));
 const LazyBCtwentynine= React.lazy(()=>import('./Biology/biologicalclassification/BCtwentynine'));
 const LazyBCthirty= React.lazy(()=>import('./Biology/biologicalclassification/BCthirty'));
 const LazyBCthirtyone= React.lazy(()=>import('./Biology/biologicalclassification/BCthirtyone'));
 const LazyBCthirtytwo= React.lazy(()=>import('./Biology/biologicalclassification/BCthirtytwo'));
 const LazyBCthirtythree= React.lazy(()=>import('./Biology/biologicalclassification/BCthirtythree'));
 const LazyBCthirtyfour= React.lazy(()=>import('./Biology/biologicalclassification/BCthirtyfour'));
 const LazyBCthirtyfive= React.lazy(()=>import('./Biology/biologicalclassification/BCthirtyfive'));
 const LazyBCthirtysix= React.lazy(()=>import('./Biology/biologicalclassification/BCthirtysix'));
 const LazyBCthirtyseven= React.lazy(()=>import('./Biology/biologicalclassification/BCthirtyseven'));
 const LazyBCthirtyeight= React.lazy(()=>import('./Biology/biologicalclassification/BCthirtyeight'));
 const LazyBCthirtynine= React.lazy(()=>import('./Biology/biologicalclassification/BCthirtynine'));
 const LazyBCforty= React.lazy(()=>import('./Biology/biologicalclassification/BCforty'));
 const LazyBCsummary= React.lazy(()=>import('./Biology/biologicalclassification/BCsummary'));
 const LazyBCconfirm= React.lazy(()=>import('./Biology/biologicalclassification/BCconfirm'));
 const LazyBCtimeup= React.lazy(()=>import('./Biology/biologicalclassification/BCtimeup'));




 
const LazyPKone= React.lazy(()=>import('./Biology/plantkingdom/PKone'));
const LazyPKtwo= React.lazy(()=>import('./Biology/plantkingdom/PKtwo'));
const LazyPKthree= React.lazy(()=>import('./Biology/plantkingdom/PKthree'));
const LazyPKfour= React.lazy(()=>import('./Biology/plantkingdom/PKfour'));
const LazyPKfive= React.lazy(()=>import('./Biology/plantkingdom/PKfive'));
const LazyPKsix= React.lazy(()=>import('./Biology/plantkingdom/PKsix'));
const LazyPKseven= React.lazy(()=>import('./Biology/plantkingdom/PKseven'));
const LazyPKeight= React.lazy(()=>import('./Biology/plantkingdom/PKeight'));
const LazyPKnine= React.lazy(()=>import('./Biology/plantkingdom/PKnine'));
const LazyPKten= React.lazy(()=>import('./Biology/plantkingdom/PKten'));
const LazyPKeleven= React.lazy(()=>import('./Biology/plantkingdom/PKeleven'));
const LazyPKtwelve= React.lazy(()=>import('./Biology/plantkingdom/PKtwelve'));
const LazyPKthirteen= React.lazy(()=>import('./Biology/plantkingdom/PKthirteen'));
const LazyPKfourteen= React.lazy(()=>import('./Biology/plantkingdom/PKfourteen'));
const LazyPKfifteen= React.lazy(()=>import('./Biology/plantkingdom/PKfifteen'));
const LazyPKsixteen= React.lazy(()=>import('./Biology/plantkingdom/PKsixteen'));
const LazyPKseventeen= React.lazy(()=>import('./Biology/plantkingdom/PKseventeen'));
 const LazyPKeighteen= React.lazy(()=>import('./Biology/plantkingdom/PKeighteen'));
 const LazyPKnineteen= React.lazy(()=>import('./Biology/plantkingdom/PKnineteen'));
 const LazyPKtwenty= React.lazy(()=>import('./Biology/plantkingdom/PKtwenty'));
 const LazyPKtwentyone= React.lazy(()=>import('./Biology/plantkingdom/PKtwentyone'));
 const LazyPKtwentytwo= React.lazy(()=>import('./Biology/plantkingdom/PKtwentytwo'));
 const LazyPKtwentythree= React.lazy(()=>import('./Biology/plantkingdom/PKtwentythree'));
 const LazyPKtwentyfour= React.lazy(()=>import('./Biology/plantkingdom/PKtwentyfour'));
 const LazyPKtwentyfive= React.lazy(()=>import('./Biology/plantkingdom/PKtwentyfive'));
 const LazyPKtwentysix= React.lazy(()=>import('./Biology/plantkingdom/PKtwentysix'));
 const LazyPKtwentyseven= React.lazy(()=>import('./Biology/plantkingdom/PKtwentyseven'));
 const LazyPKtwentyeight= React.lazy(()=>import('./Biology/plantkingdom/PKtwentyeight'));
 const LazyPKtwentynine= React.lazy(()=>import('./Biology/plantkingdom/PKtwentynine'));
 const LazyPKthirty= React.lazy(()=>import('./Biology/plantkingdom/PKthirty'));
 const LazyPKthirtyone= React.lazy(()=>import('./Biology/plantkingdom/PKthirtyone'));
 const LazyPKthirtytwo= React.lazy(()=>import('./Biology/plantkingdom/PKthirtytwo'));
 const LazyPKthirtythree= React.lazy(()=>import('./Biology/plantkingdom/PKthirtythree'));
 const LazyPKthirtyfour= React.lazy(()=>import('./Biology/plantkingdom/PKthirtyfour'));
 const LazyPKthirtyfive= React.lazy(()=>import('./Biology/plantkingdom/PKthirtyfive'));
 const LazyPKthirtysix= React.lazy(()=>import('./Biology/plantkingdom/PKthirtysix'));
 const LazyPKthirtyseven= React.lazy(()=>import('./Biology/plantkingdom/PKthirtyseven'));
 const LazyPKthirtyeight= React.lazy(()=>import('./Biology/plantkingdom/PKthirtyeight'));
 const LazyPKthirtynine= React.lazy(()=>import('./Biology/plantkingdom/PKthirtynine'));
 const LazyPKforty= React.lazy(()=>import('./Biology/plantkingdom/PKforty'));
 const LazyPKscore= React.lazy(()=>import('./Biology/plantkingdom/PKscore'));
 const LazyPKsummary= React.lazy(()=>import('./Biology/plantkingdom/PKsummary'));
 const LazyPKconfirm= React.lazy(()=>import('./Biology/plantkingdom/PKconfirm'));
 const LazyPKtimeup= React.lazy(()=>import('./Biology/plantkingdom/PKtimeup'));


 



const LazyMIone= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIone'));
const LazyMItwo= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwo'));
const LazyMIthree= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthree'));
const LazyMIfour= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIfour'));
const LazyMIfive= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIfive'));
const LazyMIsix= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIsix'));
const LazyMIseven= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIseven'));
const LazyMIeight= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIeight'));
const LazyMInine= React.lazy(()=>import('./Mathematics/mathematicalinduction/MInine'));
const LazyMIten= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIten'));
const LazyMIeleven= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIeleven'));
const LazyMItwelve= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwelve'));
const LazyMIthirteen= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirteen'));
const LazyMIfourteen= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIfourteen'));
const LazyMIfifteen= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIfifteen'));
const LazyMIsixteen= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIsixteen'));
const LazyMIseventeen= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIseventeen'));
 const LazyMIeighteen= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIeighteen'));
 const LazyMInineteen= React.lazy(()=>import('./Mathematics/mathematicalinduction/MInineteen'));
 const LazyMItwenty= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwenty'));
 const LazyMItwentyone= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwentyone'));
 const LazyMItwentytwo= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwentytwo'));
 const LazyMItwentythree= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwentythree'));
 const LazyMItwentyfour= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwentyfour'));
 const LazyMItwentyfive= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwentyfive'));
 const LazyMItwentysix= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwentysix'));
 const LazyMItwentyseven= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwentyseven'));
 const LazyMItwentyeight= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwentyeight'));
 const LazyMItwentynine= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItwentynine'));
 const LazyMIthirty= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirty'));
 const LazyMIthirtyone= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirtyone'));
 const LazyMIthirtytwo= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirtytwo'));
 const LazyMIthirtythree= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirtythree'));
 const LazyMIthirtyfour= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirtyfour'));
 const LazyMIthirtyfive= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirtyfive'));
 const LazyMIthirtysix= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirtysix'));
 const LazyMIthirtyseven= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirtyseven'));
 const LazyMIthirtyeight= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirtyeight'));
 const LazyMIthirtynine= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIthirtynine'));
 const LazyMIforty= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIforty'));
 const LazyMIscore= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIscore'));
 const LazyMIsummary= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIsummary'));
 const LazyMIconfirm= React.lazy(()=>import('./Mathematics/mathematicalinduction/MIconfirm'));
 const LazyMItimeup= React.lazy(()=>import('./Mathematics/mathematicalinduction/MItimeup'));



 const LazyMFone= React.lazy(()=>import('./Biology/morphologyofplants/MFone'));
const LazyMFtwo= React.lazy(()=>import('./Biology/morphologyofplants/MFtwo'));
const LazyMFthree= React.lazy(()=>import('./Biology/morphologyofplants/MFthree'));
const LazyMFfour= React.lazy(()=>import('./Biology/morphologyofplants/MFfour'));
const LazyMFfive= React.lazy(()=>import('./Biology/morphologyofplants/MFfive'));
const LazyMFsix= React.lazy(()=>import('./Biology/morphologyofplants/MFsix'));
const LazyMFseven= React.lazy(()=>import('./Biology/morphologyofplants/MFseven'));
const LazyMFeight= React.lazy(()=>import('./Biology/morphologyofplants/MFeight'));
const LazyMFnine= React.lazy(()=>import('./Biology/morphologyofplants/MFnine'));
const LazyMFten= React.lazy(()=>import('./Biology/morphologyofplants/MFten'));
const LazyMFeleven= React.lazy(()=>import('./Biology/morphologyofplants/MFeleven'));
const LazyMFtwelve= React.lazy(()=>import('./Biology/morphologyofplants/MFtwelve'));
const LazyMFthirteen= React.lazy(()=>import('./Biology/morphologyofplants/MFthirteen'));
const LazyMFfourteen= React.lazy(()=>import('./Biology/morphologyofplants/MFfourteen'));
const LazyMFfifteen= React.lazy(()=>import('./Biology/morphologyofplants/MFfifteen'));
const LazyMFsixteen= React.lazy(()=>import('./Biology/morphologyofplants/MFsixteen'));
const LazyMFseventeen= React.lazy(()=>import('./Biology/morphologyofplants/MFseventeen'));
 const LazyMFeighteen= React.lazy(()=>import('./Biology/morphologyofplants/MFeighteen'));
 const LazyMFnineteen= React.lazy(()=>import('./Biology/morphologyofplants/MFnineteen'));
 const LazyMFtwenty= React.lazy(()=>import('./Biology/morphologyofplants/MFtwenty'));
 const LazyMFtwentyone= React.lazy(()=>import('./Biology/morphologyofplants/MFtwentyone'));
 const LazyMFtwentytwo= React.lazy(()=>import('./Biology/morphologyofplants/MFtwentytwo'));
 const LazyMFtwentythree= React.lazy(()=>import('./Biology/morphologyofplants/MFtwentythree'));
 const LazyMFtwentyfour= React.lazy(()=>import('./Biology/morphologyofplants/MFtwentyfour'));
 const LazyMFtwentyfive= React.lazy(()=>import('./Biology/morphologyofplants/MFtwentyfive'));
 const LazyMFtwentysix= React.lazy(()=>import('./Biology/morphologyofplants/MFtwentysix'));
 const LazyMFtwentyseven= React.lazy(()=>import('./Biology/morphologyofplants/MFtwentyseven'));
 const LazyMFtwentyeight= React.lazy(()=>import('./Biology/morphologyofplants/MFtwentyeight'));
 const LazyMFtwentynine= React.lazy(()=>import('./Biology/morphologyofplants/MFtwentynine'));
 const LazyMFthirty= React.lazy(()=>import('./Biology/morphologyofplants/MFthirty'));
 const LazyMFthirtyone= React.lazy(()=>import('./Biology/morphologyofplants/MFthirtyone'));
 const LazyMFthirtytwo= React.lazy(()=>import('./Biology/morphologyofplants/MFthirtytwo'));
 const LazyMFthirtythree= React.lazy(()=>import('./Biology/morphologyofplants/MFthirtythree'));
 const LazyMFthirtyfour= React.lazy(()=>import('./Biology/morphologyofplants/MFthirtyfour'));
 const LazyMFthirtyfive= React.lazy(()=>import('./Biology/morphologyofplants/MFthirtyfive'));
 const LazyMFthirtysix= React.lazy(()=>import('./Biology/morphologyofplants/MFthirtysix'));
 const LazyMFthirtyseven= React.lazy(()=>import('./Biology/morphologyofplants/MFthirtyseven'));
 const LazyMFthirtyeight= React.lazy(()=>import('./Biology/morphologyofplants/MFthirtyeight'));
 const LazyMFthirtynine= React.lazy(()=>import('./Biology/morphologyofplants/MFthirtynine'));
 const LazyMFforty= React.lazy(()=>import('./Biology/morphologyofplants/MFforty'));
 const LazyMFscore= React.lazy(()=>import('./Biology/morphologyofplants/MFscore'));
 const LazyMFsummary= React.lazy(()=>import('./Biology/morphologyofplants/MFsummary'));
 const LazyMFconfirm= React.lazy(()=>import('./Biology/morphologyofplants/MFconfirm'));
 const LazyMFtimeup= React.lazy(()=>import('./Biology/morphologyofplants/MFtimeup'));




 const LazyAVone= React.lazy(()=>import('./Mathematics/additionofvectors/AVone'));
 const LazyAVtwo= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwo'));
 const LazyAVthree= React.lazy(()=>import('./Mathematics/additionofvectors/AVthree'));
 const LazyAVfour= React.lazy(()=>import('./Mathematics/additionofvectors/AVfour'));
 const LazyAVfive= React.lazy(()=>import('./Mathematics/additionofvectors/AVfive'));
 const LazyAVsix= React.lazy(()=>import('./Mathematics/additionofvectors/AVsix'));
 const LazyAVseven= React.lazy(()=>import('./Mathematics/additionofvectors/AVseven'));
 const LazyAVeight= React.lazy(()=>import('./Mathematics/additionofvectors/AVeight'));
 const LazyAVnine= React.lazy(()=>import('./Mathematics/additionofvectors/AVnine'));
 const LazyAVten= React.lazy(()=>import('./Mathematics/additionofvectors/AVten'));
 const LazyAVeleven= React.lazy(()=>import('./Mathematics/additionofvectors/AVeleven'));
 const LazyAVtwelve= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwelve'));
 const LazyAVthirteen= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirteen'));
 const LazyAVfourteen= React.lazy(()=>import('./Mathematics/additionofvectors/AVfourteen'));
 const LazyAVfifteen= React.lazy(()=>import('./Mathematics/additionofvectors/AVfifteen'));
 const LazyAVsixteen= React.lazy(()=>import('./Mathematics/additionofvectors/AVsixteen'));
 const LazyAVseventeen= React.lazy(()=>import('./Mathematics/additionofvectors/AVseventeen'));
  const LazyAVeighteen= React.lazy(()=>import('./Mathematics/additionofvectors/AVeighteen'));
  const LazyAVnineteen= React.lazy(()=>import('./Mathematics/additionofvectors/AVnineteen'));
  const LazyAVtwenty= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwenty'));
  const LazyAVtwentyone= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwentyone'));
  const LazyAVtwentytwo= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwentytwo'));
  const LazyAVtwentythree= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwentythree'));
  const LazyAVtwentyfour= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwentyfour'));
  const LazyAVtwentyfive= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwentyfive'));
  const LazyAVtwentysix= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwentysix'));
  const LazyAVtwentyseven= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwentyseven'));
  const LazyAVtwentyeight= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwentyeight'));
  const LazyAVtwentynine= React.lazy(()=>import('./Mathematics/additionofvectors/AVtwentynine'));
  const LazyAVthirty= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirty'));
  const LazyAVthirtyone= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirtyone'));
  const LazyAVthirtytwo= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirtytwo'));
  const LazyAVthirtythree= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirtythree'));
  const LazyAVthirtyfour= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirtyfour'));
  const LazyAVthirtyfive= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirtyfive'));
  const LazyAVthirtysix= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirtysix'));
  const LazyAVthirtyseven= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirtyseven'));
  const LazyAVthirtyeight= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirtyeight'));
  const LazyAVthirtynine= React.lazy(()=>import('./Mathematics/additionofvectors/AVthirtynine'));
  const LazyAVforty= React.lazy(()=>import('./Mathematics/additionofvectors/AVforty'));
  const LazyAVscore= React.lazy(()=>import('./Mathematics/additionofvectors/AVscore'));
  const LazyAVsummary= React.lazy(()=>import('./Mathematics/additionofvectors/AVsummary'));
  const LazyAVconfirm= React.lazy(()=>import('./Mathematics/additionofvectors/AVconfirm'));
  const LazyAVtimeup= React.lazy(()=>import('./Mathematics/additionofvectors/AVtimeup'));
 



  const LazyAKone= React.lazy(()=>import('./Biology/animalkingdom/AKone'));
  const LazyAKtwo= React.lazy(()=>import('./Biology/animalkingdom/AKtwo'));
  const LazyAKthree= React.lazy(()=>import('./Biology/animalkingdom/AKthree'));
  const LazyAKfour= React.lazy(()=>import('./Biology/animalkingdom/AKfour'));
  const LazyAKfive= React.lazy(()=>import('./Biology/animalkingdom/AKfive'));
  const LazyAKsix= React.lazy(()=>import('./Biology/animalkingdom/AKsix'));
  const LazyAKseven= React.lazy(()=>import('./Biology/animalkingdom/AKseven'));
  const LazyAKeight= React.lazy(()=>import('./Biology/animalkingdom/AKeight'));
  const LazyAKnine= React.lazy(()=>import('./Biology/animalkingdom/AKnine'));
  const LazyAKten= React.lazy(()=>import('./Biology/animalkingdom/AKten'));
  const LazyAKeleven= React.lazy(()=>import('./Biology/animalkingdom/AKeleven'));
  const LazyAKtwelve= React.lazy(()=>import('./Biology/animalkingdom/AKtwelve'));
  const LazyAKthirteen= React.lazy(()=>import('./Biology/animalkingdom/AKthirteen'));
  const LazyAKfourteen= React.lazy(()=>import('./Biology/animalkingdom/AKfourteen'));
  const LazyAKfifteen= React.lazy(()=>import('./Biology/animalkingdom/AKfifteen'));
  const LazyAKsixteen= React.lazy(()=>import('./Biology/animalkingdom/AKsixteen'));
  const LazyAKseventeen= React.lazy(()=>import('./Biology/animalkingdom/AKseventeen'));
   const LazyAKeighteen= React.lazy(()=>import('./Biology/animalkingdom/AKeighteen'));
   const LazyAKnineteen= React.lazy(()=>import('./Biology/animalkingdom/AKnineteen'));
   const LazyAKtwenty= React.lazy(()=>import('./Biology/animalkingdom/AKtwenty'));
   const LazyAKtwentyone= React.lazy(()=>import('./Biology/animalkingdom/AKtwentyone'));
   const LazyAKtwentytwo= React.lazy(()=>import('./Biology/animalkingdom/AKtwentytwo'));
   const LazyAKtwentythree= React.lazy(()=>import('./Biology/animalkingdom/AKtwentythree'));
   const LazyAKtwentyfour= React.lazy(()=>import('./Biology/animalkingdom/AKtwentyfour'));
   const LazyAKtwentyfive= React.lazy(()=>import('./Biology/animalkingdom/AKtwentyfive'));
   const LazyAKtwentysix= React.lazy(()=>import('./Biology/animalkingdom/AKtwentysix'));
   const LazyAKtwentyseven= React.lazy(()=>import('./Biology/animalkingdom/AKtwentyseven'));
   const LazyAKtwentyeight= React.lazy(()=>import('./Biology/animalkingdom/AKtwentyeight'));
   const LazyAKtwentynine= React.lazy(()=>import('./Biology/animalkingdom/AKtwentynine'));
   const LazyAKthirty= React.lazy(()=>import('./Biology/animalkingdom/AKthirty'));
   const LazyAKthirtyone= React.lazy(()=>import('./Biology/animalkingdom/AKthirtyone'));
   const LazyAKthirtytwo= React.lazy(()=>import('./Biology/animalkingdom/AKthirtytwo'));
   const LazyAKthirtythree= React.lazy(()=>import('./Biology/animalkingdom/AKthirtythree'));
   const LazyAKthirtyfour= React.lazy(()=>import('./Biology/animalkingdom/AKthirtyfour'));
   const LazyAKthirtyfive= React.lazy(()=>import('./Biology/animalkingdom/AKthirtyfive'));
   const LazyAKthirtysix= React.lazy(()=>import('./Biology/animalkingdom/AKthirtysix'));
   const LazyAKthirtyseven= React.lazy(()=>import('./Biology/animalkingdom/AKthirtyseven'));
   const LazyAKthirtyeight= React.lazy(()=>import('./Biology/animalkingdom/AKthirtyeight'));
   const LazyAKthirtynine= React.lazy(()=>import('./Biology/animalkingdom/AKthirtynine'));
   const LazyAKforty= React.lazy(()=>import('./Biology/animalkingdom/AKforty'));
   const LazyAKscore= React.lazy(()=>import('./Biology/animalkingdom/AKscore'));
   const LazyAKsummary= React.lazy(()=>import('./Biology/animalkingdom/AKsummary'));
const LazyAKconfirm= React.lazy(()=>import('./Biology/animalkingdom/AKconfirm'));
const LazyAKtimeup= React.lazy(()=>import('./Biology/animalkingdom/AKtimeup'));




  const LazyFscore= React.lazy(()=>import('./Mathematics/functions/Fscore'));
  const LazyFone= React.lazy(()=>import('./Mathematics/functions/Fone'));
  const LazyFtwo= React.lazy(()=>import('./Mathematics/functions/Ftwo'));
  const LazyFthree= React.lazy(()=>import('./Mathematics/functions/Fthree'));
  const LazyFfour= React.lazy(()=>import('./Mathematics/functions/Ffour'));
  const LazyFfive= React.lazy(()=>import('./Mathematics/functions/Ffive'));
  const LazyFsix= React.lazy(()=>import('./Mathematics/functions/Fsix'));
  const LazyFseven= React.lazy(()=>import('./Mathematics/functions/Fseven'));
  const LazyFeight= React.lazy(()=>import('./Mathematics/functions/Feight'));
  const LazyFnine= React.lazy(()=>import('./Mathematics/functions/Fnine'));
  const LazyFten= React.lazy(()=>import('./Mathematics/functions/Ften'));
  const LazyFeleven= React.lazy(()=>import('./Mathematics/functions/Feleven'));
  const LazyFtwelve= React.lazy(()=>import('./Mathematics/functions/Ftwelve'));
  const LazyFthirteen= React.lazy(()=>import('./Mathematics/functions/Fthirteen'));
  const LazyFfourteen= React.lazy(()=>import('./Mathematics/functions/Ffourteen'));
  const LazyFfifteen= React.lazy(()=>import('./Mathematics/functions/Ffifteen'));
  const LazyFsixteen= React.lazy(()=>import('./Mathematics/functions/Fsixteen'));
  const LazyFseventeen= React.lazy(()=>import('./Mathematics/functions/Fseventeen'));
   const LazyFeighteen= React.lazy(()=>import('./Mathematics/functions/Feighteen'));
   const LazyFnineteen= React.lazy(()=>import('./Mathematics/functions/Fnineteen'));
   const LazyFtwenty= React.lazy(()=>import('./Mathematics/functions/Ftwenty'));
   const LazyFtwentyone= React.lazy(()=>import('./Mathematics/functions/Ftwentyone'));
   const LazyFtwentytwo= React.lazy(()=>import('./Mathematics/functions/Ftwentytwo'));
   const LazyFtwentythree= React.lazy(()=>import('./Mathematics/functions/Ftwentythree'));
   const LazyFtwentyfour= React.lazy(()=>import('./Mathematics/functions/Ftwentyfour'));
   const LazyFtwentyfive= React.lazy(()=>import('./Mathematics/functions/Ftwentyfive'));
   const LazyFtwentysix= React.lazy(()=>import('./Mathematics/functions/Ftwentysix'));
   const LazyFtwentyseven= React.lazy(()=>import('./Mathematics/functions/Ftwentyseven'));
   const LazyFtwentyeight= React.lazy(()=>import('./Mathematics/functions/Ftwentyeight'));
   const LazyFtwentynine= React.lazy(()=>import('./Mathematics/functions/Ftwentynine'));
   const LazyFthirty= React.lazy(()=>import('./Mathematics/functions/Fthirty'));
   const LazyFthirtyone= React.lazy(()=>import('./Mathematics/functions/Fthirtyone'));
   const LazyFthirtytwo= React.lazy(()=>import('./Mathematics/functions/Fthirtytwo'));
   const LazyFthirtythree= React.lazy(()=>import('./Mathematics/functions/Fthirtythree'));
   const LazyFthirtyfour= React.lazy(()=>import('./Mathematics/functions/Fthirtyfour'));
   const LazyFthirtyfive= React.lazy(()=>import('./Mathematics/functions/Fthirtyfive'));
   const LazyFthirtysix= React.lazy(()=>import('./Mathematics/functions/Fthirtysix'));
   const LazyFthirtyseven= React.lazy(()=>import('./Mathematics/functions/Fthirtyseven'));
   const LazyFthirtyeight= React.lazy(()=>import('./Mathematics/functions/Fthirtyeight'));
   const LazyFthirtynine= React.lazy(()=>import('./Mathematics/functions/Fthirtynine'));
   const LazyFforty= React.lazy(()=>import('./Mathematics/functions/Fforty'));
   const LazyFsummary= React.lazy(()=>import('./Mathematics/functions/Fsummary'));
   const LazyFconfirm= React.lazy(()=>import('./Mathematics/functions/Fconfirm'));
   const LazyFtimeup= React.lazy(()=>import('./Mathematics/functions/Ftimeup'));


   const LazyPTone= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTone'));
   const LazyPTtwo= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwo'));
   const LazyPTthree= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthree'));
   const LazyPTfour= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTfour'));
   const LazyPTfive= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTfive'));
   const LazyPTsix= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTsix'));
   const LazyPTseven= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTseven'));
   const LazyPTeight= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTeight'));
   const LazyPTnine= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTnine'));
   const LazyPTten= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTten'));
   const LazyPTeleven= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTeleven'));
   const LazyPTtwelve= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwelve'));
   const LazyPTthirteen= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirteen'));
   const LazyPTfourteen= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTfourteen'));
   const LazyPTfifteen= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTfifteen'));
   const LazyPTsixteen= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTsixteen'));
   const LazyPTseventeen= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTseventeen'));
    const LazyPTeighteen= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTeighteen'));
    const LazyPTnineteen= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTnineteen'));
    const LazyPTtwenty= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwenty'));
    const LazyPTtwentyone= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwentyone'));
    const LazyPTtwentytwo= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwentytwo'));
    const LazyPTtwentythree= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwentythree'));
    const LazyPTtwentyfour= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwentyfour'));
    const LazyPTtwentyfive= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwentyfive'));
    const LazyPTtwentysix= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwentysix'));
    const LazyPTtwentyseven= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwentyseven'));
    const LazyPTtwentyeight= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwentyeight'));
    const LazyPTtwentynine= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtwentynine'));
    const LazyPTthirty= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirty'));
    const LazyPTthirtyone= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirtyone'));
    const LazyPTthirtytwo= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirtytwo'));
    const LazyPTthirtythree= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirtythree'));
    const LazyPTthirtyfour= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirtyfour'));
    const LazyPTthirtyfive= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirtyfive'));
    const LazyPTthirtysix= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirtysix'));
    const LazyPTthirtyseven= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirtyseven'));
    const LazyPTthirtyeight= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirtyeight'));
    const LazyPTthirtynine= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTthirtynine'));
    const LazyPTforty= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTforty'));
    const LazyPTscore= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTscore'));
    const LazyPTsummary= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTsummary'));
    const LazyPTconfirm= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTconfirm'));
    const LazyPTtimeup= React.lazy(()=>import('./Mathematics/propertiesoftriangles/PTtimeup'));





    
    const LazyPVone= React.lazy(()=>import('./Mathematics/productsofvectors/PVone'));
    const LazyPVtwo= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwo'));
    const LazyPVthree= React.lazy(()=>import('./Mathematics/productsofvectors/PVthree'));
    const LazyPVfour= React.lazy(()=>import('./Mathematics/productsofvectors/PVfour'));
    const LazyPVfive= React.lazy(()=>import('./Mathematics/productsofvectors/PVfive'));
    const LazyPVsix= React.lazy(()=>import('./Mathematics/productsofvectors/PVsix'));
    const LazyPVseven= React.lazy(()=>import('./Mathematics/productsofvectors/PVseven'));
    const LazyPVeight= React.lazy(()=>import('./Mathematics/productsofvectors/PVeight'));
    const LazyPVnine= React.lazy(()=>import('./Mathematics/productsofvectors/PVnine'));
    const LazyPVten= React.lazy(()=>import('./Mathematics/productsofvectors/PVten'));
    const LazyPVeleven= React.lazy(()=>import('./Mathematics/productsofvectors/PVeleven'));
    const LazyPVtwelve= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwelve'));
    const LazyPVthirteen= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirteen'));
    const LazyPVfourteen= React.lazy(()=>import('./Mathematics/productsofvectors/PVfourteen'));
    const LazyPVfifteen= React.lazy(()=>import('./Mathematics/productsofvectors/PVfifteen'));
    const LazyPVsixteen= React.lazy(()=>import('./Mathematics/productsofvectors/PVsixteen'));
    const LazyPVseventeen= React.lazy(()=>import('./Mathematics/productsofvectors/PVseventeen'));
     const LazyPVeighteen= React.lazy(()=>import('./Mathematics/productsofvectors/PVeighteen'));
     const LazyPVnineteen= React.lazy(()=>import('./Mathematics/productsofvectors/PVnineteen'));
     const LazyPVtwenty= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwenty'));
     const LazyPVtwentyone= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwentyone'));
     const LazyPVtwentytwo= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwentytwo'));
     const LazyPVtwentythree= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwentythree'));
     const LazyPVtwentyfour= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwentyfour'));
     const LazyPVtwentyfive= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwentyfive'));
     const LazyPVtwentysix= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwentysix'));
     const LazyPVtwentyseven= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwentyseven'));
     const LazyPVtwentyeight= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwentyeight'));
     const LazyPVtwentynine= React.lazy(()=>import('./Mathematics/productsofvectors/PVtwentynine'));
     const LazyPVthirty= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirty'));
     const LazyPVthirtyone= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirtyone'));
     const LazyPVthirtytwo= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirtytwo'));
     const LazyPVthirtythree= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirtythree'));
     const LazyPVthirtyfour= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirtyfour'));
     const LazyPVthirtyfive= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirtyfive'));
     const LazyPVthirtysix= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirtysix'));
     const LazyPVthirtyseven= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirtyseven'));
     const LazyPVthirtyeight= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirtyeight'));
     const LazyPVthirtynine= React.lazy(()=>import('./Mathematics/productsofvectors/PVthirtynine'));
     const LazyPVforty= React.lazy(()=>import('./Mathematics/productsofvectors/PVforty'));
     const LazyPVscore= React.lazy(()=>import('./Mathematics/productsofvectors/PVscore'));
     const LazyPVsummary= React.lazy(()=>import('./Mathematics/productsofvectors/PVsummary'));
     const LazyPVconfirm= React.lazy(()=>import('./Mathematics/productsofvectors/PVconfirm'));
     const LazyPVtimeup= React.lazy(()=>import('./Mathematics/productsofvectors/PVtimeup'));




  
    const LazyZXone= React.lazy(()=>import('./Physics/waveoptics/ZXone'));
    const LazyZXtwo= React.lazy(()=>import('./Physics/waveoptics/ZXtwo'));
    const LazyZXthree= React.lazy(()=>import('./Physics/waveoptics/ZXthree'));
    const LazyZXfour= React.lazy(()=>import('./Physics/waveoptics/ZXfour'));
    const LazyZXfive= React.lazy(()=>import('./Physics/waveoptics/ZXfive'));
    const LazyZXsix= React.lazy(()=>import('./Physics/waveoptics/ZXsix'));
    const LazyZXseven= React.lazy(()=>import('./Physics/waveoptics/ZXseven'));
    const LazyZXeight= React.lazy(()=>import('./Physics/waveoptics/ZXeight'));
    const LazyZXnine= React.lazy(()=>import('./Physics/waveoptics/ZXnine'));
    const LazyZXten= React.lazy(()=>import('./Physics/waveoptics/ZXten'));
    const LazyZXeleven= React.lazy(()=>import('./Physics/waveoptics/ZXeleven'));
    const LazyZXtwelve= React.lazy(()=>import('./Physics/waveoptics/ZXtwelve'));
    const LazyZXthirteen= React.lazy(()=>import('./Physics/waveoptics/ZXthirteen'));
    const LazyZXfourteen= React.lazy(()=>import('./Physics/waveoptics/ZXfourteen'));
    const LazyZXfifteen= React.lazy(()=>import('./Physics/waveoptics/ZXfifteen'));
    const LazyZXsixteen= React.lazy(()=>import('./Physics/waveoptics/ZXsixteen'));
    const LazyZXseventeen= React.lazy(()=>import('./Physics/waveoptics/ZXseventeen'));
     const LazyZXeighteen= React.lazy(()=>import('./Physics/waveoptics/ZXeighteen'));
     const LazyZXnineteen= React.lazy(()=>import('./Physics/waveoptics/ZXnineteen'));
     const LazyZXtwenty= React.lazy(()=>import('./Physics/waveoptics/ZXtwenty'));
     const LazyZXtwentyone= React.lazy(()=>import('./Physics/waveoptics/ZXtwentyone'));
     const LazyZXtwentytwo= React.lazy(()=>import('./Physics/waveoptics/ZXtwentytwo'));
     const LazyZXtwentythree= React.lazy(()=>import('./Physics/waveoptics/ZXtwentythree'));
     const LazyZXtwentyfour= React.lazy(()=>import('./Physics/waveoptics/ZXtwentyfour'));
     const LazyZXtwentyfive= React.lazy(()=>import('./Physics/waveoptics/ZXtwentyfive'));
     const LazyZXtwentysix= React.lazy(()=>import('./Physics/waveoptics/ZXtwentysix'));
     const LazyZXtwentyseven= React.lazy(()=>import('./Physics/waveoptics/ZXtwentyseven'));
     const LazyZXtwentyeight= React.lazy(()=>import('./Physics/waveoptics/ZXtwentyeight'));
     const LazyZXtwentynine= React.lazy(()=>import('./Physics/waveoptics/ZXtwentynine'));
     const LazyZXthirty= React.lazy(()=>import('./Physics/waveoptics/ZXthirty'));
     const LazyZXthirtyone= React.lazy(()=>import('./Physics/waveoptics/ZXthirtyone'));
     const LazyZXthirtytwo= React.lazy(()=>import('./Physics/waveoptics/ZXthirtytwo'));
     const LazyZXthirtythree= React.lazy(()=>import('./Physics/waveoptics/ZXthirtythree'));
     const LazyZXthirtyfour= React.lazy(()=>import('./Physics/waveoptics/ZXthirtyfour'));
     const LazyZXthirtyfive= React.lazy(()=>import('./Physics/waveoptics/ZXthirtyfive'));
     const LazyZXthirtysix= React.lazy(()=>import('./Physics/waveoptics/ZXthirtysix'));
     const LazyZXthirtyseven= React.lazy(()=>import('./Physics/waveoptics/ZXthirtyseven'));
     const LazyZXthirtyeight= React.lazy(()=>import('./Physics/waveoptics/ZXthirtyeight'));
     const LazyZXthirtynine= React.lazy(()=>import('./Physics/waveoptics/ZXthirtynine'));
     const LazyZXforty= React.lazy(()=>import('./Physics/waveoptics/ZXforty'));
     const LazyZXscore= React.lazy(()=>import('./Physics/waveoptics/ZXscore'));
     const LazyZXsummary= React.lazy(()=>import('./Physics/waveoptics/ZXsummary'));
     const LazyZXconfirm= React.lazy(()=>import('./Physics/waveoptics/ZXconfirm'));
     const LazyZXtimeup= React.lazy(()=>import('./Physics/waveoptics/ZXtimeup'));





     const LazyZDone= React.lazy(()=>import('./Physics/electrostatics/ZDone'));
     const LazyZDtwo= React.lazy(()=>import('./Physics/electrostatics/ZDtwo'));
     const LazyZDthree= React.lazy(()=>import('./Physics/electrostatics/ZDthree'));
     const LazyZDfour= React.lazy(()=>import('./Physics/electrostatics/ZDfour'));
     const LazyZDfive= React.lazy(()=>import('./Physics/electrostatics/ZDfive'));
     const LazyZDsix= React.lazy(()=>import('./Physics/electrostatics/ZDsix'));
     const LazyZDseven= React.lazy(()=>import('./Physics/electrostatics/ZDseven'));
     const LazyZDeight= React.lazy(()=>import('./Physics/electrostatics/ZDeight'));
     const LazyZDnine= React.lazy(()=>import('./Physics/electrostatics/ZDnine'));
     const LazyZDten= React.lazy(()=>import('./Physics/electrostatics/ZDten'));
     const LazyZDeleven= React.lazy(()=>import('./Physics/electrostatics/ZDeleven'));
     const LazyZDtwelve= React.lazy(()=>import('./Physics/electrostatics/ZDtwelve'));
     const LazyZDthirteen= React.lazy(()=>import('./Physics/electrostatics/ZDthirteen'));
     const LazyZDfourteen= React.lazy(()=>import('./Physics/electrostatics/ZDfourteen'));
     const LazyZDfifteen= React.lazy(()=>import('./Physics/electrostatics/ZDfifteen'));
     const LazyZDsixteen= React.lazy(()=>import('./Physics/electrostatics/ZDsixteen'));
     const LazyZDseventeen= React.lazy(()=>import('./Physics/electrostatics/ZDseventeen'));
      const LazyZDeighteen= React.lazy(()=>import('./Physics/electrostatics/ZDeighteen'));
      const LazyZDnineteen= React.lazy(()=>import('./Physics/electrostatics/ZDnineteen'));
      const LazyZDtwenty= React.lazy(()=>import('./Physics/electrostatics/ZDtwenty'));
      const LazyZDtwentyone= React.lazy(()=>import('./Physics/electrostatics/ZDtwentyone'));
      const LazyZDtwentytwo= React.lazy(()=>import('./Physics/electrostatics/ZDtwentytwo'));
      const LazyZDtwentythree= React.lazy(()=>import('./Physics/electrostatics/ZDtwentythree'));
      const LazyZDtwentyfour= React.lazy(()=>import('./Physics/electrostatics/ZDtwentyfour'));
      const LazyZDtwentyfive= React.lazy(()=>import('./Physics/electrostatics/ZDtwentyfive'));
      const LazyZDtwentysix= React.lazy(()=>import('./Physics/electrostatics/ZDtwentysix'));
      const LazyZDtwentyseven= React.lazy(()=>import('./Physics/electrostatics/ZDtwentyseven'));
      const LazyZDtwentyeight= React.lazy(()=>import('./Physics/electrostatics/ZDtwentyeight'));
      const LazyZDtwentynine= React.lazy(()=>import('./Physics/electrostatics/ZDtwentynine'));
      const LazyZDthirty= React.lazy(()=>import('./Physics/electrostatics/ZDthirty'));
      const LazyZDthirtyone= React.lazy(()=>import('./Physics/electrostatics/ZDthirtyone'));
      const LazyZDthirtytwo= React.lazy(()=>import('./Physics/electrostatics/ZDthirtytwo'));
      const LazyZDthirtythree= React.lazy(()=>import('./Physics/electrostatics/ZDthirtythree'));
      const LazyZDthirtyfour= React.lazy(()=>import('./Physics/electrostatics/ZDthirtyfour'));
      const LazyZDthirtyfive= React.lazy(()=>import('./Physics/electrostatics/ZDthirtyfive'));
      const LazyZDthirtysix= React.lazy(()=>import('./Physics/electrostatics/ZDthirtysix'));
      const LazyZDthirtyseven= React.lazy(()=>import('./Physics/electrostatics/ZDthirtyseven'));
      const LazyZDthirtyeight= React.lazy(()=>import('./Physics/electrostatics/ZDthirtyeight'));
      const LazyZDthirtynine= React.lazy(()=>import('./Physics/electrostatics/ZDthirtynine'));
      const LazyZDforty= React.lazy(()=>import('./Physics/electrostatics/ZDforty'));
      const LazyZDscore= React.lazy(()=>import('./Physics/electrostatics/ZDscore'));
      const LazyZDsummary= React.lazy(()=>import('./Physics/electrostatics/ZDsummary'));
      const LazyZDconfirm= React.lazy(()=>import('./Physics/electrostatics/ZDconfirm'));
      const LazyZDtimeup= React.lazy(()=>import('./Physics/electrostatics/ZDtimeup'));





     const LazyTQone= React.lazy(()=>import('./Physics/heattransfer/TQone'));
    const LazyTQtwo= React.lazy(()=>import('./Physics/heattransfer/TQtwo'));
    const LazyTQthree= React.lazy(()=>import('./Physics/heattransfer/TQthree'));
    const LazyTQfour= React.lazy(()=>import('./Physics/heattransfer/TQfour'));
    const LazyTQfive= React.lazy(()=>import('./Physics/heattransfer/TQfive'));
    const LazyTQsix= React.lazy(()=>import('./Physics/heattransfer/TQsix'));
    const LazyTQseven= React.lazy(()=>import('./Physics/heattransfer/TQseven'));
    const LazyTQeight= React.lazy(()=>import('./Physics/heattransfer/TQeight'));
    const LazyTQnine= React.lazy(()=>import('./Physics/heattransfer/TQnine'));
    const LazyTQten= React.lazy(()=>import('./Physics/heattransfer/TQten'));
    const LazyTQeleven= React.lazy(()=>import('./Physics/heattransfer/TQeleven'));
    const LazyTQtwelve= React.lazy(()=>import('./Physics/heattransfer/TQtwelve'));
    const LazyTQthirteen= React.lazy(()=>import('./Physics/heattransfer/TQthirteen'));
    const LazyTQfourteen= React.lazy(()=>import('./Physics/heattransfer/TQfourteen'));
    const LazyTQfifteen= React.lazy(()=>import('./Physics/heattransfer/TQfifteen'));
    const LazyTQsixteen= React.lazy(()=>import('./Physics/heattransfer/TQsixteen'));
    const LazyTQseventeen= React.lazy(()=>import('./Physics/heattransfer/TQseventeen'));
     const LazyTQeighteen= React.lazy(()=>import('./Physics/heattransfer/TQeighteen'));
     const LazyTQnineteen= React.lazy(()=>import('./Physics/heattransfer/TQnineteen'));
     const LazyTQtwenty= React.lazy(()=>import('./Physics/heattransfer/TQtwenty'));
     const LazyTQtwentyone= React.lazy(()=>import('./Physics/heattransfer/TQtwentyone'));
     const LazyTQtwentytwo= React.lazy(()=>import('./Physics/heattransfer/TQtwentytwo'));
     const LazyTQtwentythree= React.lazy(()=>import('./Physics/heattransfer/TQtwentythree'));
     const LazyTQtwentyfour= React.lazy(()=>import('./Physics/heattransfer/TQtwentyfour'));
     const LazyTQtwentyfive= React.lazy(()=>import('./Physics/heattransfer/TQtwentyfive'));
     const LazyTQtwentysix= React.lazy(()=>import('./Physics/heattransfer/TQtwentysix'));
     const LazyTQtwentyseven= React.lazy(()=>import('./Physics/heattransfer/TQtwentyseven'));
     const LazyTQtwentyeight= React.lazy(()=>import('./Physics/heattransfer/TQtwentyeight'));
     const LazyTQtwentynine= React.lazy(()=>import('./Physics/heattransfer/TQtwentynine'));
     const LazyTQthirty= React.lazy(()=>import('./Physics/heattransfer/TQthirty'));
     const LazyTQthirtyone= React.lazy(()=>import('./Physics/heattransfer/TQthirtyone'));
     const LazyTQthirtytwo= React.lazy(()=>import('./Physics/heattransfer/TQthirtytwo'));
     const LazyTQthirtythree= React.lazy(()=>import('./Physics/heattransfer/TQthirtythree'));
     const LazyTQthirtyfour= React.lazy(()=>import('./Physics/heattransfer/TQthirtyfour'));
     const LazyTQthirtyfive= React.lazy(()=>import('./Physics/heattransfer/TQthirtyfive'));
     const LazyTQthirtysix= React.lazy(()=>import('./Physics/heattransfer/TQthirtysix'));
     const LazyTQthirtyseven= React.lazy(()=>import('./Physics/heattransfer/TQthirtyseven'));
     const LazyTQthirtyeight= React.lazy(()=>import('./Physics/heattransfer/TQthirtyeight'));
     const LazyTQthirtynine= React.lazy(()=>import('./Physics/heattransfer/TQthirtynine'));
     const LazyTQforty= React.lazy(()=>import('./Physics/heattransfer/TQforty'));
     const LazyTQscore= React.lazy(()=>import('./Physics/heattransfer/TQscore'));
     const LazyTQsummary= React.lazy(()=>import('./Physics/heattransfer/TQsummary'));
     const LazyTQconfirm= React.lazy(()=>import('./Physics/heattransfer/TQconfirm'));
     const LazyTQtimeup= React.lazy(()=>import('./Physics/heattransfer/TQtimeup'));




     const LazyQMone= React.lazy(()=>import('./Physics/gravitation/QMone'));
     const LazyQMtwo= React.lazy(()=>import('./Physics/gravitation/QMtwo'));
     const LazyQMthree= React.lazy(()=>import('./Physics/gravitation/QMthree'));
     const LazyQMfour= React.lazy(()=>import('./Physics/gravitation/QMfour'));
     const LazyQMfive= React.lazy(()=>import('./Physics/gravitation/QMfive'));
     const LazyQMsix= React.lazy(()=>import('./Physics/gravitation/QMsix'));
     const LazyQMseven= React.lazy(()=>import('./Physics/gravitation/QMseven'));
     const LazyQMeight= React.lazy(()=>import('./Physics/gravitation/QMeight'));
     const LazyQMnine= React.lazy(()=>import('./Physics/gravitation/QMnine'));
     const LazyQMten= React.lazy(()=>import('./Physics/gravitation/QMten'));
     const LazyQMeleven= React.lazy(()=>import('./Physics/gravitation/QMeleven'));
     const LazyQMtwelve= React.lazy(()=>import('./Physics/gravitation/QMtwelve'));
     const LazyQMthirteen= React.lazy(()=>import('./Physics/gravitation/QMthirteen'));
     const LazyQMfourteen= React.lazy(()=>import('./Physics/gravitation/QMfourteen'));
     const LazyQMfifteen= React.lazy(()=>import('./Physics/gravitation/QMfifteen'));
     const LazyQMsixteen= React.lazy(()=>import('./Physics/gravitation/QMsixteen'));
     const LazyQMseventeen= React.lazy(()=>import('./Physics/gravitation/QMseventeen'));
      const LazyQMeighteen= React.lazy(()=>import('./Physics/gravitation/QMeighteen'));
      const LazyQMnineteen= React.lazy(()=>import('./Physics/gravitation/QMnineteen'));
      const LazyQMtwenty= React.lazy(()=>import('./Physics/gravitation/QMtwenty'));
      const LazyQMtwentyone= React.lazy(()=>import('./Physics/gravitation/QMtwentyone'));
      const LazyQMtwentytwo= React.lazy(()=>import('./Physics/gravitation/QMtwentytwo'));
      const LazyQMtwentythree= React.lazy(()=>import('./Physics/gravitation/QMtwentythree'));
      const LazyQMtwentyfour= React.lazy(()=>import('./Physics/gravitation/QMtwentyfour'));
      const LazyQMtwentyfive= React.lazy(()=>import('./Physics/gravitation/QMtwentyfive'));
      const LazyQMtwentysix= React.lazy(()=>import('./Physics/gravitation/QMtwentysix'));
      const LazyQMtwentyseven= React.lazy(()=>import('./Physics/gravitation/QMtwentyseven'));
      const LazyQMtwentyeight= React.lazy(()=>import('./Physics/gravitation/QMtwentyeight'));
      const LazyQMtwentynine= React.lazy(()=>import('./Physics/gravitation/QMtwentynine'));
      const LazyQMthirty= React.lazy(()=>import('./Physics/gravitation/QMthirty'));
      const LazyQMthirtyone= React.lazy(()=>import('./Physics/gravitation/QMthirtyone'));
      const LazyQMthirtytwo= React.lazy(()=>import('./Physics/gravitation/QMthirtytwo'));
      const LazyQMthirtythree= React.lazy(()=>import('./Physics/gravitation/QMthirtythree'));
      const LazyQMthirtyfour= React.lazy(()=>import('./Physics/gravitation/QMthirtyfour'));
      const LazyQMthirtyfive= React.lazy(()=>import('./Physics/gravitation/QMthirtyfive'));
      const LazyQMthirtysix= React.lazy(()=>import('./Physics/gravitation/QMthirtysix'));
      const LazyQMthirtyseven= React.lazy(()=>import('./Physics/gravitation/QMthirtyseven'));
      const LazyQMthirtyeight= React.lazy(()=>import('./Physics/gravitation/QMthirtyeight'));
      const LazyQMthirtynine= React.lazy(()=>import('./Physics/gravitation/QMthirtynine'));
      const LazyQMforty= React.lazy(()=>import('./Physics/gravitation/QMforty'));
      const LazyQMscore= React.lazy(()=>import('./Physics/gravitation/QMscore'));
      const LazyQMsummary= React.lazy(()=>import('./Physics/gravitation/QMsummary'));
      const LazyQMconfirm= React.lazy(()=>import('./Physics/gravitation/QMconfirm'));
      const LazyQMtimeup= React.lazy(()=>import('./Physics/gravitation/QMtimeup'));



     const LazyQXone= React.lazy(()=>import('./Physics/oscillations/QXone'));
     const LazyQXtwo= React.lazy(()=>import('./Physics/oscillations/QXtwo'));
     const LazyQXthree= React.lazy(()=>import('./Physics/oscillations/QXthree'));
     const LazyQXfour= React.lazy(()=>import('./Physics/oscillations/QXfour'));
     const LazyQXfive= React.lazy(()=>import('./Physics/oscillations/QXfive'));
     const LazyQXsix= React.lazy(()=>import('./Physics/oscillations/QXsix'));
     const LazyQXseven= React.lazy(()=>import('./Physics/oscillations/QXseven'));
     const LazyQXeight= React.lazy(()=>import('./Physics/oscillations/QXeight'));
     const LazyQXnine= React.lazy(()=>import('./Physics/oscillations/QXnine'));
     const LazyQXten= React.lazy(()=>import('./Physics/oscillations/QXten'));
     const LazyQXeleven= React.lazy(()=>import('./Physics/oscillations/QXeleven'));
     const LazyQXtwelve= React.lazy(()=>import('./Physics/oscillations/QXtwelve'));
     const LazyQXthirteen= React.lazy(()=>import('./Physics/oscillations/QXthirteen'));
     const LazyQXfourteen= React.lazy(()=>import('./Physics/oscillations/QXfourteen'));
     const LazyQXfifteen= React.lazy(()=>import('./Physics/oscillations/QXfifteen'));
     const LazyQXsixteen= React.lazy(()=>import('./Physics/oscillations/QXsixteen'));
     const LazyQXseventeen= React.lazy(()=>import('./Physics/oscillations/QXseventeen'));
      const LazyQXeighteen= React.lazy(()=>import('./Physics/oscillations/QXeighteen'));
      const LazyQXnineteen= React.lazy(()=>import('./Physics/oscillations/QXnineteen'));
      const LazyQXtwenty= React.lazy(()=>import('./Physics/oscillations/QXtwenty'));
      const LazyQXtwentyone= React.lazy(()=>import('./Physics/oscillations/QXtwentyone'));
      const LazyQXtwentytwo= React.lazy(()=>import('./Physics/oscillations/QXtwentytwo'));
      const LazyQXtwentythree= React.lazy(()=>import('./Physics/oscillations/QXtwentythree'));
      const LazyQXtwentyfour= React.lazy(()=>import('./Physics/oscillations/QXtwentyfour'));
      const LazyQXtwentyfive= React.lazy(()=>import('./Physics/oscillations/QXtwentyfive'));
      const LazyQXtwentysix= React.lazy(()=>import('./Physics/oscillations/QXtwentysix'));
      const LazyQXtwentyseven= React.lazy(()=>import('./Physics/oscillations/QXtwentyseven'));
      const LazyQXtwentyeight= React.lazy(()=>import('./Physics/oscillations/QXtwentyeight'));
      const LazyQXtwentynine= React.lazy(()=>import('./Physics/oscillations/QXtwentynine'));
      const LazyQXthirty= React.lazy(()=>import('./Physics/oscillations/QXthirty'));
      const LazyQXthirtyone= React.lazy(()=>import('./Physics/oscillations/QXthirtyone'));
      const LazyQXthirtytwo= React.lazy(()=>import('./Physics/oscillations/QXthirtytwo'));
      const LazyQXthirtythree= React.lazy(()=>import('./Physics/oscillations/QXthirtythree'));
      const LazyQXthirtyfour= React.lazy(()=>import('./Physics/oscillations/QXthirtyfour'));
      const LazyQXthirtyfive= React.lazy(()=>import('./Physics/oscillations/QXthirtyfive'));
      const LazyQXthirtysix= React.lazy(()=>import('./Physics/oscillations/QXthirtysix'));
      const LazyQXthirtyseven= React.lazy(()=>import('./Physics/oscillations/QXthirtyseven'));
      const LazyQXthirtyeight= React.lazy(()=>import('./Physics/oscillations/QXthirtyeight'));
      const LazyQXthirtynine= React.lazy(()=>import('./Physics/oscillations/QXthirtynine'));
      const LazyQXforty= React.lazy(()=>import('./Physics/oscillations/QXforty'));
      const LazyQXscore= React.lazy(()=>import('./Physics/oscillations/QXscore'));
      const LazyQXsummary= React.lazy(()=>import('./Physics/oscillations/QXsummary'));
      const LazyQXconfirm= React.lazy(()=>import('./Physics/oscillations/QXconfirm'));
      const LazyQXtimeup= React.lazy(()=>import('./Physics/oscillations/QXtimeup'));


     const LazyZTone= React.lazy(()=>import('./Chemistry/metallurgy/ZTone'));
    const LazyZTtwo= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwo'));
    const LazyZTthree= React.lazy(()=>import('./Chemistry/metallurgy/ZTthree'));
    const LazyZTfour= React.lazy(()=>import('./Chemistry/metallurgy/ZTfour'));
    const LazyZTfive= React.lazy(()=>import('./Chemistry/metallurgy/ZTfive'));
    const LazyZTsix= React.lazy(()=>import('./Chemistry/metallurgy/ZTsix'));
    const LazyZTseven= React.lazy(()=>import('./Chemistry/metallurgy/ZTseven'));
    const LazyZTeight= React.lazy(()=>import('./Chemistry/metallurgy/ZTeight'));
    const LazyZTnine= React.lazy(()=>import('./Chemistry/metallurgy/ZTnine'));
    const LazyZTten= React.lazy(()=>import('./Chemistry/metallurgy/ZTten'));
    const LazyZTeleven= React.lazy(()=>import('./Chemistry/metallurgy/ZTeleven'));
    const LazyZTtwelve= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwelve'));
    const LazyZTthirteen= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirteen'));
    const LazyZTfourteen= React.lazy(()=>import('./Chemistry/metallurgy/ZTfourteen'));
    const LazyZTfifteen= React.lazy(()=>import('./Chemistry/metallurgy/ZTfifteen'));
    const LazyZTsixteen= React.lazy(()=>import('./Chemistry/metallurgy/ZTsixteen'));
    const LazyZTseventeen= React.lazy(()=>import('./Chemistry/metallurgy/ZTseventeen'));
     const LazyZTeighteen= React.lazy(()=>import('./Chemistry/metallurgy/ZTeighteen'));
     const LazyZTnineteen= React.lazy(()=>import('./Chemistry/metallurgy/ZTnineteen'));
     const LazyZTtwenty= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwenty'));
     const LazyZTtwentyone= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwentyone'));
     const LazyZTtwentytwo= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwentytwo'));
     const LazyZTtwentythree= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwentythree'));
     const LazyZTtwentyfour= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwentyfour'));
     const LazyZTtwentyfive= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwentyfive'));
     const LazyZTtwentysix= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwentysix'));
     const LazyZTtwentyseven= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwentyseven'));
     const LazyZTtwentyeight= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwentyeight'));
     const LazyZTtwentynine= React.lazy(()=>import('./Chemistry/metallurgy/ZTtwentynine'));
     const LazyZTthirty= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirty'));
     const LazyZTthirtyone= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirtyone'));
     const LazyZTthirtytwo= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirtytwo'));
     const LazyZTthirtythree= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirtythree'));
     const LazyZTthirtyfour= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirtyfour'));
     const LazyZTthirtyfive= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirtyfive'));
     const LazyZTthirtysix= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirtysix'));
     const LazyZTthirtyseven= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirtyseven'));
     const LazyZTthirtyeight= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirtyeight'));
     const LazyZTthirtynine= React.lazy(()=>import('./Chemistry/metallurgy/ZTthirtynine'));
     const LazyZTforty= React.lazy(()=>import('./Chemistry/metallurgy/ZTforty'));
     const LazyZTscore= React.lazy(()=>import('./Chemistry/metallurgy/ZTscore'));
     const LazyZTsummary= React.lazy(()=>import('./Chemistry/metallurgy/ZTsummary'));
     const LazyZTtimer= React.lazy(()=>import('./Chemistry/metallurgy/ZTtimer'));
     const LazyZTconfirm= React.lazy(()=>import('./Chemistry/metallurgy/ZTconfirm'));
     const LazyZTtimeup= React.lazy(()=>import('./Chemistry/metallurgy/ZTtimeup'));


     const LazyYMone= React.lazy(()=>import('./Chemistry/grpseventeen/YMone'));
    const LazyYMtwo= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwo'));
    const LazyYMthree= React.lazy(()=>import('./Chemistry/grpseventeen/YMthree'));
    const LazyYMfour= React.lazy(()=>import('./Chemistry/grpseventeen/YMfour'));
    const LazyYMfive= React.lazy(()=>import('./Chemistry/grpseventeen/YMfive'));
    const LazyYMsix= React.lazy(()=>import('./Chemistry/grpseventeen/YMsix'));
    const LazyYMseven= React.lazy(()=>import('./Chemistry/grpseventeen/YMseven'));
    const LazyYMeight= React.lazy(()=>import('./Chemistry/grpseventeen/YMeight'));
    const LazyYMnine= React.lazy(()=>import('./Chemistry/grpseventeen/YMnine'));
    const LazyYMten= React.lazy(()=>import('./Chemistry/grpseventeen/YMten'));
    const LazyYMeleven= React.lazy(()=>import('./Chemistry/grpseventeen/YMeleven'));
    const LazyYMtwelve= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwelve'));
    const LazyYMthirteen= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirteen'));
    const LazyYMfourteen= React.lazy(()=>import('./Chemistry/grpseventeen/YMfourteen'));
    const LazyYMfifteen= React.lazy(()=>import('./Chemistry/grpseventeen/YMfifteen'));
    const LazyYMsixteen= React.lazy(()=>import('./Chemistry/grpseventeen/YMsixteen'));
    const LazyYMseventeen= React.lazy(()=>import('./Chemistry/grpseventeen/YMseventeen'));
     const LazyYMeighteen= React.lazy(()=>import('./Chemistry/grpseventeen/YMeighteen'));
     const LazyYMnineteen= React.lazy(()=>import('./Chemistry/grpseventeen/YMnineteen'));
     const LazyYMtwenty= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwenty'));
     const LazyYMtwentyone= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwentyone'));
     const LazyYMtwentytwo= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwentytwo'));
     const LazyYMtwentythree= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwentythree'));
     const LazyYMtwentyfour= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwentyfour'));
     const LazyYMtwentyfive= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwentyfive'));
     const LazyYMtwentysix= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwentysix'));
     const LazyYMtwentyseven= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwentyseven'));
     const LazyYMtwentyeight= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwentyeight'));
     const LazyYMtwentynine= React.lazy(()=>import('./Chemistry/grpseventeen/YMtwentynine'));
     const LazyYMthirty= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirty'));
     const LazyYMthirtyone= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirtyone'));
     const LazyYMthirtytwo= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirtytwo'));
     const LazyYMthirtythree= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirtythree'));
     const LazyYMthirtyfour= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirtyfour'));
     const LazyYMthirtyfive= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirtyfive'));
     const LazyYMthirtysix= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirtysix'));
     const LazyYMthirtyseven= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirtyseven'));
     const LazyYMthirtyeight= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirtyeight'));
     const LazyYMthirtynine= React.lazy(()=>import('./Chemistry/grpseventeen/YMthirtynine'));
     const LazyYMforty= React.lazy(()=>import('./Chemistry/grpseventeen/YMforty'));
     const LazyYMscore= React.lazy(()=>import('./Chemistry/grpseventeen/YMscore'));
     const LazyYMsummary= React.lazy(()=>import('./Chemistry/grpseventeen/YMsummary'));
     const LazyYMtimer= React.lazy(()=>import('./Chemistry/grpseventeen/YMtimer'));
     const LazyYMconfirm= React.lazy(()=>import('./Chemistry/grpseventeen/YMconfirm'));
     const LazyYMtimeup= React.lazy(()=>import('./Chemistry/grpseventeen/YMtimeup'));





     const LazyZPone= React.lazy(()=>import('./Chemistry/solutions/ZPone'));
     const LazyZPtwo= React.lazy(()=>import('./Chemistry/solutions/ZPtwo'));
     const LazyZPthree= React.lazy(()=>import('./Chemistry/solutions/ZPthree'));
     const LazyZPfour= React.lazy(()=>import('./Chemistry/solutions/ZPfour'));
     const LazyZPfive= React.lazy(()=>import('./Chemistry/solutions/ZPfive'));
     const LazyZPsix= React.lazy(()=>import('./Chemistry/solutions/ZPsix'));
     const LazyZPseven= React.lazy(()=>import('./Chemistry/solutions/ZPseven'));
     const LazyZPeight= React.lazy(()=>import('./Chemistry/solutions/ZPeight'));
     const LazyZPnine= React.lazy(()=>import('./Chemistry/solutions/ZPnine'));
     const LazyZPten= React.lazy(()=>import('./Chemistry/solutions/ZPten'));
     const LazyZPeleven= React.lazy(()=>import('./Chemistry/solutions/ZPeleven'));
     const LazyZPtwelve= React.lazy(()=>import('./Chemistry/solutions/ZPtwelve'));
     const LazyZPthirteen= React.lazy(()=>import('./Chemistry/solutions/ZPthirteen'));
     const LazyZPfourteen= React.lazy(()=>import('./Chemistry/solutions/ZPfourteen'));
     const LazyZPfifteen= React.lazy(()=>import('./Chemistry/solutions/ZPfifteen'));
     const LazyZPsixteen= React.lazy(()=>import('./Chemistry/solutions/ZPsixteen'));
     const LazyZPseventeen= React.lazy(()=>import('./Chemistry/solutions/ZPseventeen'));
      const LazyZPeighteen= React.lazy(()=>import('./Chemistry/solutions/ZPeighteen'));
      const LazyZPnineteen= React.lazy(()=>import('./Chemistry/solutions/ZPnineteen'));
      const LazyZPtwenty= React.lazy(()=>import('./Chemistry/solutions/ZPtwenty'));
      const LazyZPtwentyone= React.lazy(()=>import('./Chemistry/solutions/ZPtwentyone'));
      const LazyZPtwentytwo= React.lazy(()=>import('./Chemistry/solutions/ZPtwentytwo'));
      const LazyZPtwentythree= React.lazy(()=>import('./Chemistry/solutions/ZPtwentythree'));
      const LazyZPtwentyfour= React.lazy(()=>import('./Chemistry/solutions/ZPtwentyfour'));
      const LazyZPtwentyfive= React.lazy(()=>import('./Chemistry/solutions/ZPtwentyfive'));
      const LazyZPtwentysix= React.lazy(()=>import('./Chemistry/solutions/ZPtwentysix'));
      const LazyZPtwentyseven= React.lazy(()=>import('./Chemistry/solutions/ZPtwentyseven'));
      const LazyZPtwentyeight= React.lazy(()=>import('./Chemistry/solutions/ZPtwentyeight'));
      const LazyZPtwentynine= React.lazy(()=>import('./Chemistry/solutions/ZPtwentynine'));
      const LazyZPthirty= React.lazy(()=>import('./Chemistry/solutions/ZPthirty'));
      const LazyZPthirtyone= React.lazy(()=>import('./Chemistry/solutions/ZPthirtyone'));
      const LazyZPthirtytwo= React.lazy(()=>import('./Chemistry/solutions/ZPthirtytwo'));
      const LazyZPthirtythree= React.lazy(()=>import('./Chemistry/solutions/ZPthirtythree'));
      const LazyZPthirtyfour= React.lazy(()=>import('./Chemistry/solutions/ZPthirtyfour'));
      const LazyZPthirtyfive= React.lazy(()=>import('./Chemistry/solutions/ZPthirtyfive'));
      const LazyZPthirtysix= React.lazy(()=>import('./Chemistry/solutions/ZPthirtysix'));
      const LazyZPthirtyseven= React.lazy(()=>import('./Chemistry/solutions/ZPthirtyseven'));
      const LazyZPthirtyeight= React.lazy(()=>import('./Chemistry/solutions/ZPthirtyeight'));
      const LazyZPthirtynine= React.lazy(()=>import('./Chemistry/solutions/ZPthirtynine'));
      const LazyZPforty= React.lazy(()=>import('./Chemistry/solutions/ZPforty'));
      const LazyZPscore= React.lazy(()=>import('./Chemistry/solutions/ZPscore'));
      const LazyZPsummary= React.lazy(()=>import('./Chemistry/solutions/ZPsummary'));
      const LazyZPconfirm= React.lazy(()=>import('./Chemistry/solutions/ZPconfirm'));
      const LazyZPtimeup= React.lazy(()=>import('./Chemistry/solutions/ZPtimeup'));



      const LazyYTone= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTone'));
     const LazyYTtwo= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwo'));
     const LazyYTthree= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthree'));
     const LazyYTfour= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTfour'));
     const LazyYTfive= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTfive'));
     const LazyYTsix= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTsix'));
     const LazyYTseven= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTseven'));
     const LazyYTeight= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTeight'));
     const LazyYTnine= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTnine'));
     const LazyYTten= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTten'));
     const LazyYTeleven= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTeleven'));
     const LazyYTtwelve= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwelve'));
     const LazyYTthirteen= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirteen'));
     const LazyYTfourteen= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTfourteen'));
     const LazyYTfifteen= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTfifteen'));
     const LazyYTsixteen= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTsixteen'));
     const LazyYTseventeen= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTseventeen'));
      const LazyYTeighteen= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTeighteen'));
      const LazyYTnineteen= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTnineteen'));
      const LazyYTtwenty= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwenty'));
      const LazyYTtwentyone= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwentyone'));
      const LazyYTtwentytwo= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwentytwo'));
      const LazyYTtwentythree= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwentythree'));
      const LazyYTtwentyfour= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwentyfour'));
      const LazyYTtwentyfive= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwentyfive'));
      const LazyYTtwentysix= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwentysix'));
      const LazyYTtwentyseven= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwentyseven'));
      const LazyYTtwentyeight= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwentyeight'));
      const LazyYTtwentynine= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtwentynine'));
      const LazyYTthirty= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirty'));
      const LazyYTthirtyone= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirtyone'));
      const LazyYTthirtytwo= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirtytwo'));
      const LazyYTthirtythree= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirtythree'));
      const LazyYTthirtyfour= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirtyfour'));
      const LazyYTthirtyfive= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirtyfive'));
      const LazyYTthirtysix= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirtysix'));
      const LazyYTthirtyseven= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirtyseven'));
      const LazyYTthirtyeight= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirtyeight'));
      const LazyYTthirtynine= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTthirtynine'));
      const LazyYTforty= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTforty'));
      const LazyYTscore= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTscore'));
      const LazyYTsummary= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTsummary'));
      const LazyYTconfirm= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTconfirm'));
      const LazyYTtimeup= React.lazy(()=>import('./Chemistry/aaaearthmetals/YTtimeup'));
 

      const LazyZQone= React.lazy(()=>import('./Chemistry/electrochemistry/ZQone'));
      const LazyZQtwo= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwo'));
      const LazyZQthree= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthree'));
      const LazyZQfour= React.lazy(()=>import('./Chemistry/electrochemistry/ZQfour'));
      const LazyZQfive= React.lazy(()=>import('./Chemistry/electrochemistry/ZQfive'));
      const LazyZQsix= React.lazy(()=>import('./Chemistry/electrochemistry/ZQsix'));
      const LazyZQseven= React.lazy(()=>import('./Chemistry/electrochemistry/ZQseven'));
      const LazyZQeight= React.lazy(()=>import('./Chemistry/electrochemistry/ZQeight'));
      const LazyZQnine= React.lazy(()=>import('./Chemistry/electrochemistry/ZQnine'));
      const LazyZQten= React.lazy(()=>import('./Chemistry/electrochemistry/ZQten'));
      const LazyZQeleven= React.lazy(()=>import('./Chemistry/electrochemistry/ZQeleven'));
      const LazyZQtwelve= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwelve'));
      const LazyZQthirteen= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirteen'));
      const LazyZQfourteen= React.lazy(()=>import('./Chemistry/electrochemistry/ZQfourteen'));
      const LazyZQfifteen= React.lazy(()=>import('./Chemistry/electrochemistry/ZQfifteen'));
      const LazyZQsixteen= React.lazy(()=>import('./Chemistry/electrochemistry/ZQsixteen'));
      const LazyZQseventeen= React.lazy(()=>import('./Chemistry/electrochemistry/ZQseventeen'));
       const LazyZQeighteen= React.lazy(()=>import('./Chemistry/electrochemistry/ZQeighteen'));
       const LazyZQnineteen= React.lazy(()=>import('./Chemistry/electrochemistry/ZQnineteen'));
       const LazyZQtwenty= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwenty'));
       const LazyZQtwentyone= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwentyone'));
       const LazyZQtwentytwo= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwentytwo'));
       const LazyZQtwentythree= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwentythree'));
       const LazyZQtwentyfour= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwentyfour'));
       const LazyZQtwentyfive= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwentyfive'));
       const LazyZQtwentysix= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwentysix'));
       const LazyZQtwentyseven= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwentyseven'));
       const LazyZQtwentyeight= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwentyeight'));
       const LazyZQtwentynine= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtwentynine'));
       const LazyZQthirty= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirty'));
       const LazyZQthirtyone= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirtyone'));
       const LazyZQthirtytwo= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirtytwo'));
       const LazyZQthirtythree= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirtythree'));
       const LazyZQthirtyfour= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirtyfour'));
       const LazyZQthirtyfive= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirtyfive'));
       const LazyZQthirtysix= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirtysix'));
       const LazyZQthirtyseven= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirtyseven'));
       const LazyZQthirtyeight= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirtyeight'));
       const LazyZQthirtynine= React.lazy(()=>import('./Chemistry/electrochemistry/ZQthirtynine'));
       const LazyZQforty= React.lazy(()=>import('./Chemistry/electrochemistry/ZQforty'));
       const LazyZQscore= React.lazy(()=>import('./Chemistry/electrochemistry/ZQscore'));
       const LazyZQsummary= React.lazy(()=>import('./Chemistry/electrochemistry/ZQsummary'));
       const LazyZQtimer= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtimer'));
       const LazyZQconfirm= React.lazy(()=>import('./Chemistry/electrochemistry/ZQconfirm'));
       const LazyZQtimeup= React.lazy(()=>import('./Chemistry/electrochemistry/ZQtimeup'));





function App() {
  return (
     
    <>
       
 <Routes>
      
 {/* <Route path="/" element={ <Welcome />} /> */}
 <Route path="/Welcom" element={<React.Suspense fallback="Loading...."><LazyWelcom /></React.Suspense>} /> 
 <Route path="/register" element = { <Register /> } />
 {/* <Route path="/Cname" element = { <Cname /> } /> */}
 <Route path="/" element={<React.Suspense fallback="Loading...."><LazyFirstpage /></React.Suspense>} />
 <Route path="/Welcomone" element={<React.Suspense fallback="Loading...."><LazyWelcomone /></React.Suspense>} />
 <Route path="/Welcomtwo" element={<React.Suspense fallback="Loading...."><LazyWelcomtwo /></React.Suspense>} />
 <Route path="/Welcomthree" element={<React.Suspense fallback="Loading...."><LazyWelcomthree /></React.Suspense>} />
 <Route path="/Welcomfour" element={<React.Suspense fallback="Loading...."><LazyWelcomfour /></React.Suspense>} />
 <Route path="/Welcomfive" element={<React.Suspense fallback="Loading...."><LazyWelcomfive /></React.Suspense>} />
 <Route path="/Welcomsix" element={<React.Suspense fallback="Loading...."><LazyWelcomsix /></React.Suspense>} />
 <Route path="/Welcomseven" element={<React.Suspense fallback="Loading...."><LazyWelcomseven /></React.Suspense>} />
 <Route path="/Welcomeight" element={<React.Suspense fallback="Loading...."><LazyWelcomeight /></React.Suspense>} />
 <Route path="/Welcomnine" element={<React.Suspense fallback="Loading...."><LazyWelcomnine /></React.Suspense>} />
 <Route path="/Welcomten" element={<React.Suspense fallback="Loading...."><LazyWelcomten /></React.Suspense>} />
 <Route path="/Welcomeleven" element={<React.Suspense fallback="Loading...."><LazyWelcomeleven /></React.Suspense>} />
 <Route path="/Welcomtwelve" element={<React.Suspense fallback="Loading...."><LazyWelcomtwelve /></React.Suspense>} />
 <Route path="/Welcomthirteen" element={<React.Suspense fallback="Loading...."><LazyWelcomthirteen /></React.Suspense>} />
 <Route path="/Welcomfourteen" element={<React.Suspense fallback="Loading...."><LazyWelcomfourteen /></React.Suspense>} />
 <Route path="/Welcomfifteen" element={<React.Suspense fallback="Loading...."><LazyWelcomfifteen /></React.Suspense>} />
 <Route path="/Welcomsixteen" element={<React.Suspense fallback="Loading...."><LazyWelcomsixteen /></React.Suspense>} />
 <Route path="/Welcomseventeen" element={<React.Suspense fallback="Loading...."><LazyWelcomseventeen /></React.Suspense>} />
 <Route path="/Welcomeighteen" element={<React.Suspense fallback="Loading...."><LazyWelcomeighteen /></React.Suspense>} />
 <Route path="/Welcomnineteen" element={<React.Suspense fallback="Loading...."><LazyWelcomnineteen /></React.Suspense>} />
 <Route path="/Welcomtwenty" element={<React.Suspense fallback="Loading...."><LazyWelcomtwenty /></React.Suspense>} />





 <Route path="/BCone" element={<React.Suspense fallback="Loading...."><LazyBCone /></React.Suspense>} />
 <Route path="/BCtwo" element={<React.Suspense fallback="Loading...."><LazyBCtwo /></React.Suspense>} />
 <Route path="/BCthree" element={<React.Suspense fallback="Loading...."><LazyBCthree /></React.Suspense>} />
 <Route path="/BCfour" element={<React.Suspense fallback="Loading...."><LazyBCfour /></React.Suspense>} />
 <Route path="/BCfive" element={<React.Suspense fallback="Loading...."><LazyBCfive /></React.Suspense>} />
 <Route path="/BCsix" element={<React.Suspense fallback="Loading...."><LazyBCsix /></React.Suspense>} />
 <Route path="/BCseven" element={<React.Suspense fallback="Loading...."><LazyBCseven /></React.Suspense>} />
 <Route path="/BCeight" element={<React.Suspense fallback="Loading...."><LazyBCeight /></React.Suspense>} />
 <Route path="/BCnine" element={<React.Suspense fallback="Loading...."><LazyBCnine /></React.Suspense>} />
 <Route path="/BCten" element={<React.Suspense fallback="Loading...."><LazyBCten /></React.Suspense>} />
 <Route path="/BCeleven" element={<React.Suspense fallback="Loading...."><LazyBCeleven /></React.Suspense>} />
 <Route path="/BCtwelve" element={<React.Suspense fallback="Loading...."><LazyBCtwelve /></React.Suspense>} />
 <Route path="/BCthirteen" element={<React.Suspense fallback="Loading...."><LazyBCthirteen /></React.Suspense>} />
 <Route path="/BCfourteen" element={<React.Suspense fallback="Loading...."><LazyBCfourteen /></React.Suspense>} />
 <Route path="/BCfifteen" element={<React.Suspense fallback="Loading...."><LazyBCfifteen /></React.Suspense>} />
 <Route path="/BCsixteen" element={<React.Suspense fallback="Loading...."><LazyBCsixteen /></React.Suspense>} />
 <Route path="/BCseventeen" element={<React.Suspense fallback="Loading...."><LazyBCseventeen /></React.Suspense>} />
 <Route path="/BCeighteen" element={<React.Suspense fallback="Loading...."><LazyBCeighteen /></React.Suspense>} /> 
 <Route path="/BCnineteen" element={<React.Suspense fallback="Loading...."><LazyBCnineteen /></React.Suspense>} />
 <Route path="/BCtwenty" element={<React.Suspense fallback="Loading...."><LazyBCtwenty /></React.Suspense>} />
 <Route path="/BCtwentyone" element={<React.Suspense fallback="Loading...."><LazyBCtwentyone /></React.Suspense>} />
 <Route path="/BCtwentytwo" element={<React.Suspense fallback="Loading...."><LazyBCtwentytwo /></React.Suspense>} />
 <Route path="/BCtwentythree" element={<React.Suspense fallback="Loading...."><LazyBCtwentythree /></React.Suspense>} />
 <Route path="/BCtwentyfour" element={<React.Suspense fallback="Loading...."><LazyBCtwentyfour /></React.Suspense>} />
 <Route path="/BCtwentyfive" element={<React.Suspense fallback="Loading...."><LazyBCtwentyfive /></React.Suspense>} />
 <Route path="/BCtwentysix" element={<React.Suspense fallback="Loading...."><LazyBCtwentysix /></React.Suspense>} />
 <Route path="/BCtwentyseven" element={<React.Suspense fallback="Loading...."><LazyBCtwentyseven /></React.Suspense>} />
 <Route path="/BCtwentyeight" element={<React.Suspense fallback="Loading...."><LazyBCtwentyeight /></React.Suspense>} />
 <Route path="/BCtwentynine" element={<React.Suspense fallback="Loading...."><LazyBCtwentynine /></React.Suspense>} />
 <Route path="/BCtwentynine" element={<React.Suspense fallback="Loading...."><LazyBCtwentynine /></React.Suspense>} />
 <Route path="/BCthirty" element={<React.Suspense fallback="Loading...."><LazyBCthirty /></React.Suspense>} />
 <Route path="/BCthirtyone" element={<React.Suspense fallback="Loading...."><LazyBCthirtyone /></React.Suspense>} />
 <Route path="/BCthirtytwo" element={<React.Suspense fallback="Loading...."><LazyBCthirtytwo /></React.Suspense>} />
 <Route path="/BCthirtythree" element={<React.Suspense fallback="Loading...."><LazyBCthirtythree /></React.Suspense>} />
 <Route path="/BCthirtyfour" element={<React.Suspense fallback="Loading...."><LazyBCthirtyfour /></React.Suspense>} />
 <Route path="/BCthirtyfive" element={<React.Suspense fallback="Loading...."><LazyBCthirtyfive /></React.Suspense>} />
 <Route path="/BCthirtysix" element={<React.Suspense fallback="Loading...."><LazyBCthirtysix /></React.Suspense>} />
 <Route path="/BCthirtyseven" element={<React.Suspense fallback="Loading...."><LazyBCthirtyseven /></React.Suspense>} />
 <Route path="/BCthirtyeight" element={<React.Suspense fallback="Loading...."><LazyBCthirtyeight /></React.Suspense>} />
 <Route path="/BCthirtynine" element={<React.Suspense fallback="Loading...."><LazyBCthirtynine /></React.Suspense>} />
 <Route path="/BCforty" element={<React.Suspense fallback="Loading...."><LazyBCforty /></React.Suspense>} />
 <Route path="/BCscore" element={<React.Suspense fallback="Loading...."><LazyBCscore /></React.Suspense>} />
 <Route path="/BCsummary" element={<React.Suspense fallback="Loading...."><LazyBCsummary /></React.Suspense>} />
 <Route path="/BCconfirm" element={<React.Suspense fallback="Loading...."><LazyBCconfirm /></React.Suspense>} />
 <Route path="/BCtimeup" element={<React.Suspense fallback="Loading...."><LazyBCtimeup /></React.Suspense>} />




 <Route path="/PKone" element={<React.Suspense fallback="Loading...."><LazyPKone /></React.Suspense>} />
 <Route path="/PKtwo" element={<React.Suspense fallback="Loading...."><LazyPKtwo /></React.Suspense>} />
 <Route path="/PKthree" element={<React.Suspense fallback="Loading...."><LazyPKthree /></React.Suspense>} />
 <Route path="/PKfour" element={<React.Suspense fallback="Loading...."><LazyPKfour /></React.Suspense>} />
 <Route path="/PKfive" element={<React.Suspense fallback="Loading...."><LazyPKfive /></React.Suspense>} />
 <Route path="/PKsix" element={<React.Suspense fallback="Loading...."><LazyPKsix /></React.Suspense>} />
 <Route path="/PKseven" element={<React.Suspense fallback="Loading...."><LazyPKseven /></React.Suspense>} />
 <Route path="/PKeight" element={<React.Suspense fallback="Loading...."><LazyPKeight /></React.Suspense>} />
 <Route path="/PKnine" element={<React.Suspense fallback="Loading...."><LazyPKnine /></React.Suspense>} />
 <Route path="/PKten" element={<React.Suspense fallback="Loading...."><LazyPKten /></React.Suspense>} />
 <Route path="/PKeleven" element={<React.Suspense fallback="Loading...."><LazyPKeleven /></React.Suspense>} />
 <Route path="/PKtwelve" element={<React.Suspense fallback="Loading...."><LazyPKtwelve /></React.Suspense>} />
 <Route path="/PKthirteen" element={<React.Suspense fallback="Loading...."><LazyPKthirteen /></React.Suspense>} />
 <Route path="/PKfourteen" element={<React.Suspense fallback="Loading...."><LazyPKfourteen /></React.Suspense>} />
 <Route path="/PKfifteen" element={<React.Suspense fallback="Loading...."><LazyPKfifteen /></React.Suspense>} />
 <Route path="/PKsixteen" element={<React.Suspense fallback="Loading...."><LazyPKsixteen /></React.Suspense>} />
 <Route path="/PKseventeen" element={<React.Suspense fallback="Loading...."><LazyPKseventeen /></React.Suspense>} />
 <Route path="/PKeighteen" element={<React.Suspense fallback="Loading...."><LazyPKeighteen /></React.Suspense>} /> 
 <Route path="/PKnineteen" element={<React.Suspense fallback="Loading...."><LazyPKnineteen /></React.Suspense>} />
 <Route path="/PKtwenty" element={<React.Suspense fallback="Loading...."><LazyPKtwenty /></React.Suspense>} />
 <Route path="/PKtwentyone" element={<React.Suspense fallback="Loading...."><LazyPKtwentyone /></React.Suspense>} />
 <Route path="/PKtwentytwo" element={<React.Suspense fallback="Loading...."><LazyPKtwentytwo /></React.Suspense>} />
 <Route path="/PKtwentythree" element={<React.Suspense fallback="Loading...."><LazyPKtwentythree /></React.Suspense>} />
 <Route path="/PKtwentyfour" element={<React.Suspense fallback="Loading...."><LazyPKtwentyfour /></React.Suspense>} />
 <Route path="/PKtwentyfive" element={<React.Suspense fallback="Loading...."><LazyPKtwentyfive /></React.Suspense>} />
 <Route path="/PKtwentysix" element={<React.Suspense fallback="Loading...."><LazyPKtwentysix /></React.Suspense>} />
 <Route path="/PKtwentyseven" element={<React.Suspense fallback="Loading...."><LazyPKtwentyseven /></React.Suspense>} />
 <Route path="/PKtwentyeight" element={<React.Suspense fallback="Loading...."><LazyPKtwentyeight /></React.Suspense>} />
 <Route path="/PKtwentynine" element={<React.Suspense fallback="Loading...."><LazyPKtwentynine /></React.Suspense>} />
 <Route path="/PKtwentynine" element={<React.Suspense fallback="Loading...."><LazyPKtwentynine /></React.Suspense>} />
 <Route path="/PKthirty" element={<React.Suspense fallback="Loading...."><LazyPKthirty /></React.Suspense>} />
 <Route path="/PKthirtyone" element={<React.Suspense fallback="Loading...."><LazyPKthirtyone /></React.Suspense>} />
 <Route path="/PKthirtytwo" element={<React.Suspense fallback="Loading...."><LazyPKthirtytwo /></React.Suspense>} />
 <Route path="/PKthirtythree" element={<React.Suspense fallback="Loading...."><LazyPKthirtythree /></React.Suspense>} />
 <Route path="/PKthirtyfour" element={<React.Suspense fallback="Loading...."><LazyPKthirtyfour /></React.Suspense>} />
 <Route path="/PKthirtyfive" element={<React.Suspense fallback="Loading...."><LazyPKthirtyfive /></React.Suspense>} />
 <Route path="/PKthirtysix" element={<React.Suspense fallback="Loading...."><LazyPKthirtysix /></React.Suspense>} />
 <Route path="/PKthirtyseven" element={<React.Suspense fallback="Loading...."><LazyPKthirtyseven /></React.Suspense>} />
 <Route path="/PKthirtyeight" element={<React.Suspense fallback="Loading...."><LazyPKthirtyeight /></React.Suspense>} />
 <Route path="/PKthirtynine" element={<React.Suspense fallback="Loading...."><LazyPKthirtynine /></React.Suspense>} />
 <Route path="/PKforty" element={<React.Suspense fallback="Loading...."><LazyPKforty /></React.Suspense>} />
 <Route path="/PKscore" element={<React.Suspense fallback="Loading...."><LazyPKscore /></React.Suspense>} /> 
 <Route path="/PKsummary" element={<React.Suspense fallback="Loading...."><LazyPKsummary /></React.Suspense>} /> 
 <Route path="/PKconfirm" element={<React.Suspense fallback="Loading...."><LazyPKconfirm /></React.Suspense>} /> 
 <Route path="/PKtimeup" element={<React.Suspense fallback="Loading...."><LazyPKtimeup /></React.Suspense>} /> 


 <Route path="/AKone" element={<React.Suspense fallback="Loading...."><LazyAKone /></React.Suspense>} />
 <Route path="/AKtwo" element={<React.Suspense fallback="Loading...."><LazyAKtwo /></React.Suspense>} />
 <Route path="/AKthree" element={<React.Suspense fallback="Loading...."><LazyAKthree /></React.Suspense>} />
 <Route path="/AKfour" element={<React.Suspense fallback="Loading...."><LazyAKfour /></React.Suspense>} />
 <Route path="/AKfive" element={<React.Suspense fallback="Loading...."><LazyAKfive /></React.Suspense>} />
 <Route path="/AKsix" element={<React.Suspense fallback="Loading...."><LazyAKsix /></React.Suspense>} />
 <Route path="/AKseven" element={<React.Suspense fallback="Loading...."><LazyAKseven /></React.Suspense>} />
 <Route path="/AKeight" element={<React.Suspense fallback="Loading...."><LazyAKeight /></React.Suspense>} />
 <Route path="/AKnine" element={<React.Suspense fallback="Loading...."><LazyAKnine /></React.Suspense>} />
 <Route path="/AKten" element={<React.Suspense fallback="Loading...."><LazyAKten /></React.Suspense>} />
 <Route path="/AKeleven" element={<React.Suspense fallback="Loading...."><LazyAKeleven /></React.Suspense>} />
 <Route path="/AKtwelve" element={<React.Suspense fallback="Loading...."><LazyAKtwelve /></React.Suspense>} />
 <Route path="/AKthirteen" element={<React.Suspense fallback="Loading...."><LazyAKthirteen /></React.Suspense>} />
 <Route path="/AKfourteen" element={<React.Suspense fallback="Loading...."><LazyAKfourteen /></React.Suspense>} />
 <Route path="/AKfifteen" element={<React.Suspense fallback="Loading...."><LazyAKfifteen /></React.Suspense>} />
 <Route path="/AKsixteen" element={<React.Suspense fallback="Loading...."><LazyAKsixteen /></React.Suspense>} />
 <Route path="/AKseventeen" element={<React.Suspense fallback="Loading...."><LazyAKseventeen /></React.Suspense>} />
 <Route path="/AKeighteen" element={<React.Suspense fallback="Loading...."><LazyAKeighteen /></React.Suspense>} /> 
 <Route path="/AKnineteen" element={<React.Suspense fallback="Loading...."><LazyAKnineteen /></React.Suspense>} />
 <Route path="/AKtwenty" element={<React.Suspense fallback="Loading...."><LazyAKtwenty /></React.Suspense>} />
 <Route path="/AKtwentyone" element={<React.Suspense fallback="Loading...."><LazyAKtwentyone /></React.Suspense>} />
 <Route path="/AKtwentytwo" element={<React.Suspense fallback="Loading...."><LazyAKtwentytwo /></React.Suspense>} />
 <Route path="/AKtwentythree" element={<React.Suspense fallback="Loading...."><LazyAKtwentythree /></React.Suspense>} />
 <Route path="/AKtwentyfour" element={<React.Suspense fallback="Loading...."><LazyAKtwentyfour /></React.Suspense>} />
 <Route path="/AKtwentyfive" element={<React.Suspense fallback="Loading...."><LazyAKtwentyfive /></React.Suspense>} />
 <Route path="/AKtwentysix" element={<React.Suspense fallback="Loading...."><LazyAKtwentysix /></React.Suspense>} />
 <Route path="/AKtwentyseven" element={<React.Suspense fallback="Loading...."><LazyAKtwentyseven /></React.Suspense>} />
 <Route path="/AKtwentyeight" element={<React.Suspense fallback="Loading...."><LazyAKtwentyeight /></React.Suspense>} />
 <Route path="/AKtwentynine" element={<React.Suspense fallback="Loading...."><LazyAKtwentynine /></React.Suspense>} />
 <Route path="/AKtwentynine" element={<React.Suspense fallback="Loading...."><LazyAKtwentynine /></React.Suspense>} />
 <Route path="/AKthirty" element={<React.Suspense fallback="Loading...."><LazyAKthirty /></React.Suspense>} />
 <Route path="/AKthirtyone" element={<React.Suspense fallback="Loading...."><LazyAKthirtyone /></React.Suspense>} />
 <Route path="/AKthirtytwo" element={<React.Suspense fallback="Loading...."><LazyAKthirtytwo /></React.Suspense>} />
 <Route path="/AKthirtythree" element={<React.Suspense fallback="Loading...."><LazyAKthirtythree /></React.Suspense>} />
 <Route path="/AKthirtyfour" element={<React.Suspense fallback="Loading...."><LazyAKthirtyfour /></React.Suspense>} />
 <Route path="/AKthirtyfive" element={<React.Suspense fallback="Loading...."><LazyAKthirtyfive /></React.Suspense>} />
 <Route path="/AKthirtysix" element={<React.Suspense fallback="Loading...."><LazyAKthirtysix /></React.Suspense>} />
 <Route path="/AKthirtyseven" element={<React.Suspense fallback="Loading...."><LazyAKthirtyseven /></React.Suspense>} />
 <Route path="/AKthirtyeight" element={<React.Suspense fallback="Loading...."><LazyAKthirtyeight /></React.Suspense>} />
 <Route path="/AKthirtynine" element={<React.Suspense fallback="Loading...."><LazyAKthirtynine /></React.Suspense>} />
 <Route path="/AKforty" element={<React.Suspense fallback="Loading...."><LazyAKforty /></React.Suspense>} />
 <Route path="/AKscore" element={<React.Suspense fallback="Loading...."><LazyAKscore /></React.Suspense>} /> 
 <Route path="/AKsummary" element={<React.Suspense fallback="Loading...."><LazyAKsummary /></React.Suspense>} />
 <Route path="/AKconfirm" element={<React.Suspense fallback="Loading...."><LazyAKconfirm /></React.Suspense>} />
 <Route path="/AKtimeup" element={<React.Suspense fallback="Loading...."><LazyAKtimeup /></React.Suspense>} />





 <Route path="/AVone" element={<React.Suspense fallback="Loading...."><LazyAVone /></React.Suspense>} />
 <Route path="/AVtwo" element={<React.Suspense fallback="Loading...."><LazyAVtwo /></React.Suspense>} />
 <Route path="/AVthree" element={<React.Suspense fallback="Loading...."><LazyAVthree /></React.Suspense>} />
 <Route path="/AVfour" element={<React.Suspense fallback="Loading...."><LazyAVfour /></React.Suspense>} />
 <Route path="/AVfive" element={<React.Suspense fallback="Loading...."><LazyAVfive /></React.Suspense>} />
 <Route path="/AVsix" element={<React.Suspense fallback="Loading...."><LazyAVsix /></React.Suspense>} />
 <Route path="/AVseven" element={<React.Suspense fallback="Loading...."><LazyAVseven /></React.Suspense>} />
 <Route path="/AVeight" element={<React.Suspense fallback="Loading...."><LazyAVeight /></React.Suspense>} />
 <Route path="/AVnine" element={<React.Suspense fallback="Loading...."><LazyAVnine /></React.Suspense>} />
 <Route path="/AVten" element={<React.Suspense fallback="Loading...."><LazyAVten /></React.Suspense>} />
 <Route path="/AVeleven" element={<React.Suspense fallback="Loading...."><LazyAVeleven /></React.Suspense>} />
 <Route path="/AVtwelve" element={<React.Suspense fallback="Loading...."><LazyAVtwelve /></React.Suspense>} />
 <Route path="/AVthirteen" element={<React.Suspense fallback="Loading...."><LazyAVthirteen /></React.Suspense>} />
 <Route path="/AVfourteen" element={<React.Suspense fallback="Loading...."><LazyAVfourteen /></React.Suspense>} />
 <Route path="/AVfifteen" element={<React.Suspense fallback="Loading...."><LazyAVfifteen /></React.Suspense>} />
 <Route path="/AVsixteen" element={<React.Suspense fallback="Loading...."><LazyAVsixteen /></React.Suspense>} />
 <Route path="/AVseventeen" element={<React.Suspense fallback="Loading...."><LazyAVseventeen /></React.Suspense>} />
 <Route path="/AVeighteen" element={<React.Suspense fallback="Loading...."><LazyAVeighteen /></React.Suspense>} /> 
 <Route path="/AVnineteen" element={<React.Suspense fallback="Loading...."><LazyAVnineteen /></React.Suspense>} />
 <Route path="/AVtwenty" element={<React.Suspense fallback="Loading...."><LazyAVtwenty /></React.Suspense>} />
 <Route path="/AVtwentyone" element={<React.Suspense fallback="Loading...."><LazyAVtwentyone /></React.Suspense>} />
 <Route path="/AVtwentytwo" element={<React.Suspense fallback="Loading...."><LazyAVtwentytwo /></React.Suspense>} />
 <Route path="/AVtwentythree" element={<React.Suspense fallback="Loading...."><LazyAVtwentythree /></React.Suspense>} />
 <Route path="/AVtwentyfour" element={<React.Suspense fallback="Loading...."><LazyAVtwentyfour /></React.Suspense>} />
 <Route path="/AVtwentyfive" element={<React.Suspense fallback="Loading...."><LazyAVtwentyfive /></React.Suspense>} />
 <Route path="/AVtwentysix" element={<React.Suspense fallback="Loading...."><LazyAVtwentysix /></React.Suspense>} />
 <Route path="/AVtwentyseven" element={<React.Suspense fallback="Loading...."><LazyAVtwentyseven /></React.Suspense>} />
 <Route path="/AVtwentyeight" element={<React.Suspense fallback="Loading...."><LazyAVtwentyeight /></React.Suspense>} />
 <Route path="/AVtwentynine" element={<React.Suspense fallback="Loading...."><LazyAVtwentynine /></React.Suspense>} />
 <Route path="/AVtwentynine" element={<React.Suspense fallback="Loading...."><LazyAVtwentynine /></React.Suspense>} />
 <Route path="/AVthirty" element={<React.Suspense fallback="Loading...."><LazyAVthirty /></React.Suspense>} />
 <Route path="/AVthirtyone" element={<React.Suspense fallback="Loading...."><LazyAVthirtyone /></React.Suspense>} />
 <Route path="/AVthirtytwo" element={<React.Suspense fallback="Loading...."><LazyAVthirtytwo /></React.Suspense>} />
 <Route path="/AVthirtythree" element={<React.Suspense fallback="Loading...."><LazyAVthirtythree /></React.Suspense>} />
 <Route path="/AVthirtyfour" element={<React.Suspense fallback="Loading...."><LazyAVthirtyfour /></React.Suspense>} />
 <Route path="/AVthirtyfive" element={<React.Suspense fallback="Loading...."><LazyAVthirtyfive /></React.Suspense>} />
 <Route path="/AVthirtysix" element={<React.Suspense fallback="Loading...."><LazyAVthirtysix /></React.Suspense>} />
 <Route path="/AVthirtyseven" element={<React.Suspense fallback="Loading...."><LazyAVthirtyseven /></React.Suspense>} />
 <Route path="/AVthirtyeight" element={<React.Suspense fallback="Loading...."><LazyAVthirtyeight /></React.Suspense>} />
 <Route path="/AVthirtynine" element={<React.Suspense fallback="Loading...."><LazyAVthirtynine /></React.Suspense>} />
 <Route path="/AVforty" element={<React.Suspense fallback="Loading...."><LazyAVforty /></React.Suspense>} />
 <Route path="/AVscore" element={<React.Suspense fallback="Loading...."><LazyAVscore /></React.Suspense>} /> 
 <Route path="/AVsummary" element={<React.Suspense fallback="Loading...."><LazyAVsummary /></React.Suspense>} /> 
 <Route path="/AVconfirm" element={<React.Suspense fallback="Loading...."><LazyAVconfirm /></React.Suspense>} /> 
 <Route path="/AVtimeup" element={<React.Suspense fallback="Loading...."><LazyAVtimeup /></React.Suspense>} /> 




 <Route path="/MIone" element={<React.Suspense fallback="Loading...."><LazyMIone /></React.Suspense>} />
 <Route path="/MItwo" element={<React.Suspense fallback="Loading...."><LazyMItwo /></React.Suspense>} />
 <Route path="/MIthree" element={<React.Suspense fallback="Loading...."><LazyMIthree /></React.Suspense>} />
 <Route path="/MIfour" element={<React.Suspense fallback="Loading...."><LazyMIfour /></React.Suspense>} />
 <Route path="/MIfive" element={<React.Suspense fallback="Loading...."><LazyMIfive /></React.Suspense>} />
 <Route path="/MIsix" element={<React.Suspense fallback="Loading...."><LazyMIsix /></React.Suspense>} />
 <Route path="/MIseven" element={<React.Suspense fallback="Loading...."><LazyMIseven /></React.Suspense>} />
 <Route path="/MIeight" element={<React.Suspense fallback="Loading...."><LazyMIeight /></React.Suspense>} />
 <Route path="/MInine" element={<React.Suspense fallback="Loading...."><LazyMInine /></React.Suspense>} />
 <Route path="/MIten" element={<React.Suspense fallback="Loading...."><LazyMIten /></React.Suspense>} />
 <Route path="/MIeleven" element={<React.Suspense fallback="Loading...."><LazyMIeleven /></React.Suspense>} />
 <Route path="/MItwelve" element={<React.Suspense fallback="Loading...."><LazyMItwelve /></React.Suspense>} />
 <Route path="/MIthirteen" element={<React.Suspense fallback="Loading...."><LazyMIthirteen /></React.Suspense>} />
 <Route path="/MIfourteen" element={<React.Suspense fallback="Loading...."><LazyMIfourteen /></React.Suspense>} />
 <Route path="/MIfifteen" element={<React.Suspense fallback="Loading...."><LazyMIfifteen /></React.Suspense>} />
 <Route path="/MIsixteen" element={<React.Suspense fallback="Loading...."><LazyMIsixteen /></React.Suspense>} />
 <Route path="/MIseventeen" element={<React.Suspense fallback="Loading...."><LazyMIseventeen /></React.Suspense>} />
 <Route path="/MIeighteen" element={<React.Suspense fallback="Loading...."><LazyMIeighteen /></React.Suspense>} /> 
 <Route path="/MInineteen" element={<React.Suspense fallback="Loading...."><LazyMInineteen /></React.Suspense>} />
 <Route path="/MItwenty" element={<React.Suspense fallback="Loading...."><LazyMItwenty /></React.Suspense>} />
 <Route path="/MItwentyone" element={<React.Suspense fallback="Loading...."><LazyMItwentyone /></React.Suspense>} />
 <Route path="/MItwentytwo" element={<React.Suspense fallback="Loading...."><LazyMItwentytwo /></React.Suspense>} />
 <Route path="/MItwentythree" element={<React.Suspense fallback="Loading...."><LazyMItwentythree /></React.Suspense>} />
 <Route path="/MItwentyfour" element={<React.Suspense fallback="Loading...."><LazyMItwentyfour /></React.Suspense>} />
 <Route path="/MItwentyfive" element={<React.Suspense fallback="Loading...."><LazyMItwentyfive /></React.Suspense>} />
 <Route path="/MItwentysix" element={<React.Suspense fallback="Loading...."><LazyMItwentysix /></React.Suspense>} />
 <Route path="/MItwentyseven" element={<React.Suspense fallback="Loading...."><LazyMItwentyseven /></React.Suspense>} />
 <Route path="/MItwentyeight" element={<React.Suspense fallback="Loading...."><LazyMItwentyeight /></React.Suspense>} />
 <Route path="/MItwentynine" element={<React.Suspense fallback="Loading...."><LazyMItwentynine /></React.Suspense>} />
 <Route path="/MItwentynine" element={<React.Suspense fallback="Loading...."><LazyMItwentynine /></React.Suspense>} />
 <Route path="/MIthirty" element={<React.Suspense fallback="Loading...."><LazyMIthirty /></React.Suspense>} />
 <Route path="/MIthirtyone" element={<React.Suspense fallback="Loading...."><LazyMIthirtyone /></React.Suspense>} />
 <Route path="/MIthirtytwo" element={<React.Suspense fallback="Loading...."><LazyMIthirtytwo /></React.Suspense>} />
 <Route path="/MIthirtythree" element={<React.Suspense fallback="Loading...."><LazyMIthirtythree /></React.Suspense>} />
 <Route path="/MIthirtyfour" element={<React.Suspense fallback="Loading...."><LazyMIthirtyfour /></React.Suspense>} />
 <Route path="/MIthirtyfive" element={<React.Suspense fallback="Loading...."><LazyMIthirtyfive /></React.Suspense>} />
 <Route path="/MIthirtysix" element={<React.Suspense fallback="Loading...."><LazyMIthirtysix /></React.Suspense>} />
 <Route path="/MIthirtyseven" element={<React.Suspense fallback="Loading...."><LazyMIthirtyseven /></React.Suspense>} />
 <Route path="/MIthirtyeight" element={<React.Suspense fallback="Loading...."><LazyMIthirtyeight /></React.Suspense>} />
 <Route path="/MIthirtynine" element={<React.Suspense fallback="Loading...."><LazyMIthirtynine /></React.Suspense>} />
 <Route path="/MIforty" element={<React.Suspense fallback="Loading...."><LazyMIforty /></React.Suspense>} />
 <Route path="/MIscore" element={<React.Suspense fallback="Loading...."><LazyMIscore /></React.Suspense>} /> 
 <Route path="/MIsummary" element={<React.Suspense fallback="Loading...."><LazyMIsummary /></React.Suspense>} /> 
 <Route path="/MIconfirm" element={<React.Suspense fallback="Loading...."><LazyMIconfirm /></React.Suspense>} /> 
 <Route path="/MItimeup" element={<React.Suspense fallback="Loading...."><LazyMItimeup /></React.Suspense>} /> 



 <Route path="/MFone" element={<React.Suspense fallback="Loading...."><LazyMFone /></React.Suspense>} />
 <Route path="/MFtwo" element={<React.Suspense fallback="Loading...."><LazyMFtwo /></React.Suspense>} />
 <Route path="/MFthree" element={<React.Suspense fallback="Loading...."><LazyMFthree /></React.Suspense>} />
 <Route path="/MFfour" element={<React.Suspense fallback="Loading...."><LazyMFfour /></React.Suspense>} />
 <Route path="/MFfive" element={<React.Suspense fallback="Loading...."><LazyMFfive /></React.Suspense>} />
 <Route path="/MFsix" element={<React.Suspense fallback="Loading...."><LazyMFsix /></React.Suspense>} />
 <Route path="/MFseven" element={<React.Suspense fallback="Loading...."><LazyMFseven /></React.Suspense>} />
 <Route path="/MFeight" element={<React.Suspense fallback="Loading...."><LazyMFeight /></React.Suspense>} />
 <Route path="/MFnine" element={<React.Suspense fallback="Loading...."><LazyMFnine /></React.Suspense>} />
 <Route path="/MFten" element={<React.Suspense fallback="Loading...."><LazyMFten /></React.Suspense>} />
 <Route path="/MFeleven" element={<React.Suspense fallback="Loading...."><LazyMFeleven /></React.Suspense>} />
 <Route path="/MFtwelve" element={<React.Suspense fallback="Loading...."><LazyMFtwelve /></React.Suspense>} />
 <Route path="/MFthirteen" element={<React.Suspense fallback="Loading...."><LazyMFthirteen /></React.Suspense>} />
 <Route path="/MFfourteen" element={<React.Suspense fallback="Loading...."><LazyMFfourteen /></React.Suspense>} />
 <Route path="/MFfifteen" element={<React.Suspense fallback="Loading...."><LazyMFfifteen /></React.Suspense>} />
 <Route path="/MFsixteen" element={<React.Suspense fallback="Loading...."><LazyMFsixteen /></React.Suspense>} />
 <Route path="/MFseventeen" element={<React.Suspense fallback="Loading...."><LazyMFseventeen /></React.Suspense>} />
 <Route path="/MFeighteen" element={<React.Suspense fallback="Loading...."><LazyMFeighteen /></React.Suspense>} /> 
 <Route path="/MFnineteen" element={<React.Suspense fallback="Loading...."><LazyMFnineteen /></React.Suspense>} />
 <Route path="/MFtwenty" element={<React.Suspense fallback="Loading...."><LazyMFtwenty /></React.Suspense>} />
 <Route path="/MFtwentyone" element={<React.Suspense fallback="Loading...."><LazyMFtwentyone /></React.Suspense>} />
 <Route path="/MFtwentytwo" element={<React.Suspense fallback="Loading...."><LazyMFtwentytwo /></React.Suspense>} />
 <Route path="/MFtwentythree" element={<React.Suspense fallback="Loading...."><LazyMFtwentythree /></React.Suspense>} />
 <Route path="/MFtwentyfour" element={<React.Suspense fallback="Loading...."><LazyMFtwentyfour /></React.Suspense>} />
 <Route path="/MFtwentyfive" element={<React.Suspense fallback="Loading...."><LazyMFtwentyfive /></React.Suspense>} />
 <Route path="/MFtwentysix" element={<React.Suspense fallback="Loading...."><LazyMFtwentysix /></React.Suspense>} />
 <Route path="/MFtwentyseven" element={<React.Suspense fallback="Loading...."><LazyMFtwentyseven /></React.Suspense>} />
 <Route path="/MFtwentyeight" element={<React.Suspense fallback="Loading...."><LazyMFtwentyeight /></React.Suspense>} />
 <Route path="/MFtwentynine" element={<React.Suspense fallback="Loading...."><LazyMFtwentynine /></React.Suspense>} />
 <Route path="/MFtwentynine" element={<React.Suspense fallback="Loading...."><LazyMFtwentynine /></React.Suspense>} />
 <Route path="/MFthirty" element={<React.Suspense fallback="Loading...."><LazyMFthirty /></React.Suspense>} />
 <Route path="/MFthirtyone" element={<React.Suspense fallback="Loading...."><LazyMFthirtyone /></React.Suspense>} />
 <Route path="/MFthirtytwo" element={<React.Suspense fallback="Loading...."><LazyMFthirtytwo /></React.Suspense>} />
 <Route path="/MFthirtythree" element={<React.Suspense fallback="Loading...."><LazyMFthirtythree /></React.Suspense>} />
 <Route path="/MFthirtyfour" element={<React.Suspense fallback="Loading...."><LazyMFthirtyfour /></React.Suspense>} />
 <Route path="/MFthirtyfive" element={<React.Suspense fallback="Loading...."><LazyMFthirtyfive /></React.Suspense>} />
 <Route path="/MFthirtysix" element={<React.Suspense fallback="Loading...."><LazyMFthirtysix /></React.Suspense>} />
 <Route path="/MFthirtyseven" element={<React.Suspense fallback="Loading...."><LazyMFthirtyseven /></React.Suspense>} />
 <Route path="/MFthirtyeight" element={<React.Suspense fallback="Loading...."><LazyMFthirtyeight /></React.Suspense>} />
 <Route path="/MFthirtynine" element={<React.Suspense fallback="Loading...."><LazyMFthirtynine /></React.Suspense>} />
 <Route path="/MFforty" element={<React.Suspense fallback="Loading...."><LazyMFforty /></React.Suspense>} />
 <Route path="/MFscore" element={<React.Suspense fallback="Loading...."><LazyMFscore /></React.Suspense>} /> 
 <Route path="/MFsummary" element={<React.Suspense fallback="Loading...."><LazyMFsummary /></React.Suspense>} /> 
 <Route path="/MFconfirm" element={<React.Suspense fallback="Loading...."><LazyMFconfirm /></React.Suspense>} /> 
 <Route path="/MFtimeup" element={<React.Suspense fallback="Loading...."><LazyMFtimeup /></React.Suspense>} /> 



 {/* <Route path="/one" element={ <React.Suspense fallback="Loading...."><LazyQuestionOne /></React.Suspense>} />  
  <Route path="/two" element={ <React.Suspense fallback="Loading...."><LazyQuestionTwo /></React.Suspense>} />    
 <Route path="/three" element={ <QuestionThree />} /> 
 <Route path="/four" element={ <QuestionFour />} />
 <Route path="/five" element={ <QuestionFive />} />
 <Route path="/six" element={ <QuestionSix />} />
 <Route path="/seven" element={ <QuestionSeven />} />
 <Route path="/eight" element={ <QuestionEight />} />
 <Route path="/nine" element={ <QuestionNine />} />
 <Route path="/ten" element={ <QuestionTen />} /> 
 <Route path="/eleven" element={ <QuestionEleven />} /> 
 <Route path="/twelve" element={ <QuestionTwelve />} />    
 <Route path="/thirteen" element={ <QuestionThirteen />} /> 
 <Route path="/fourteen" element={ <QuestionFourteen />} /> 
 <Route path="/fifteen" element={ <QuestionFifteen />} /> 
<Route path="/sixteen" element={ <QuestionSixteen />} /> 
<Route path="/seventeen" element={ <QuestionSeventeen />} /> 
 <Route path="/eighteen" element={ <QuestionEighteen />} /> 
 <Route path="/nineteen" element={ <QuestionNineteen />} /> 
 <Route path="/twenty" element={ <QuestionTwenty />} /> 
 <Route path="/twentyone" element={ <QuestionTwentyOne />} />    
 <Route path="/twentytwo" element={ <QuestionTwentyTwo />} />
 <Route path="/twentythree" element={ <QuestionTwentyThree />} />    
 <Route path="/twentyfour" element={ <QuestionTwentyFour />} />
 <Route path="/twentyfive" element={ <QuestionTwentyFive />} />
 <Route path="/twentysix" element={ <QuestionTwentySix />} />
 <Route path="/twentyseven" element={ <QuestionTwentySeven />} />
 <Route path="/twentyeight" element={ <QuestionTwentyEight />} />
 <Route path="/twentynine" element={ <QuestionTwentyNine />} />
 <Route path="/thirty" element={ <QuestionThirty />} />
 <Route path="/thirtyone" element={ <QuestionThirtyOne />} />
 <Route path="/thirtytwo" element={ <QuestionThirtyTwo />} />
 <Route path="/thirtythree" element={ <QuestionThirtyThree />} />
 <Route path="/thirtyfour" element={ <QuestionThirtyFour />} />
 <Route path="/thirtyfive" element={ <QuestionThirtyFive />} />
 <Route path="/thirtysix" element={ <QuestionThirtySix />} />
 <Route path="/thirtyseven" element={ <QuestionThirtySeven />} />
 <Route path="/thirtyeight" element={ <QuestionThirtyEight />} />
 <Route path="/thirtynine" element={ <QuestionThirtyNine />} />
 <Route path="/forty" element={ <QuestionForty />} />
 <Route path="/submit" element={ <Submit />} />
 <Route path="/score" element={ <Score />} /> */}
 {/* <Route path="/submit" element={ <Submit />} /> */}
 <Route path="/Submit" element={<React.Suspense fallback="Loading...."><LazySubmit /></React.Suspense>} />



 <Route path="/Fone" element={<React.Suspense fallback="Loading...."><LazyFone /></React.Suspense>} />
 <Route path="/Ftwo" element={<React.Suspense fallback="Loading...."><LazyFtwo /></React.Suspense>} />
 <Route path="/Fthree" element={<React.Suspense fallback="Loading...."><LazyFthree /></React.Suspense>} />
 <Route path="/Ffour" element={<React.Suspense fallback="Loading...."><LazyFfour /></React.Suspense>} />
 <Route path="/Ffive" element={<React.Suspense fallback="Loading...."><LazyFfive /></React.Suspense>} />
 <Route path="/Fsix" element={<React.Suspense fallback="Loading...."><LazyFsix /></React.Suspense>} />
 <Route path="/Fseven" element={<React.Suspense fallback="Loading...."><LazyFseven /></React.Suspense>} />
 <Route path="/Feight" element={<React.Suspense fallback="Loading...."><LazyFeight /></React.Suspense>} />
 <Route path="/Fnine" element={<React.Suspense fallback="Loading...."><LazyFnine /></React.Suspense>} />
 <Route path="/Ften" element={<React.Suspense fallback="Loading...."><LazyFten /></React.Suspense>} />
 <Route path="/Feleven" element={<React.Suspense fallback="Loading...."><LazyFeleven /></React.Suspense>} />
 <Route path="/Ftwelve" element={<React.Suspense fallback="Loading...."><LazyFtwelve /></React.Suspense>} />
 <Route path="/Fthirteen" element={<React.Suspense fallback="Loading...."><LazyFthirteen /></React.Suspense>} />
 <Route path="/Ffourteen" element={<React.Suspense fallback="Loading...."><LazyFfourteen /></React.Suspense>} />
 <Route path="/Ffifteen" element={<React.Suspense fallback="Loading...."><LazyFfifteen /></React.Suspense>} />
 <Route path="/Fsixteen" element={<React.Suspense fallback="Loading...."><LazyFsixteen /></React.Suspense>} />
 <Route path="/Fseventeen" element={<React.Suspense fallback="Loading...."><LazyFseventeen /></React.Suspense>} />
 <Route path="/Feighteen" element={<React.Suspense fallback="Loading...."><LazyFeighteen /></React.Suspense>} /> 
 <Route path="/Fnineteen" element={<React.Suspense fallback="Loading...."><LazyFnineteen /></React.Suspense>} />
 <Route path="/Ftwenty" element={<React.Suspense fallback="Loading...."><LazyFtwenty /></React.Suspense>} />
 <Route path="/Ftwentyone" element={<React.Suspense fallback="Loading...."><LazyFtwentyone /></React.Suspense>} />
 <Route path="/Ftwentytwo" element={<React.Suspense fallback="Loading...."><LazyFtwentytwo /></React.Suspense>} />
 <Route path="/Ftwentythree" element={<React.Suspense fallback="Loading...."><LazyFtwentythree /></React.Suspense>} />
 <Route path="/Ftwentyfour" element={<React.Suspense fallback="Loading...."><LazyFtwentyfour /></React.Suspense>} />
 <Route path="/Ftwentyfive" element={<React.Suspense fallback="Loading...."><LazyFtwentyfive /></React.Suspense>} />
 <Route path="/Ftwentysix" element={<React.Suspense fallback="Loading...."><LazyFtwentysix /></React.Suspense>} />
 <Route path="/Ftwentyseven" element={<React.Suspense fallback="Loading...."><LazyFtwentyseven /></React.Suspense>} />
 <Route path="/Ftwentyeight" element={<React.Suspense fallback="Loading...."><LazyFtwentyeight /></React.Suspense>} />
 <Route path="/Ftwentynine" element={<React.Suspense fallback="Loading...."><LazyFtwentynine /></React.Suspense>} />
 <Route path="/Ftwentynine" element={<React.Suspense fallback="Loading...."><LazyFtwentynine /></React.Suspense>} />
 <Route path="/Fthirty" element={<React.Suspense fallback="Loading...."><LazyFthirty /></React.Suspense>} />
 <Route path="/Fthirtyone" element={<React.Suspense fallback="Loading...."><LazyFthirtyone /></React.Suspense>} />
 <Route path="/Fthirtytwo" element={<React.Suspense fallback="Loading...."><LazyFthirtytwo /></React.Suspense>} />
 <Route path="/Fthirtythree" element={<React.Suspense fallback="Loading...."><LazyFthirtythree /></React.Suspense>} />
 <Route path="/Fthirtyfour" element={<React.Suspense fallback="Loading...."><LazyFthirtyfour /></React.Suspense>} />
 <Route path="/Fthirtyfive" element={<React.Suspense fallback="Loading...."><LazyFthirtyfive /></React.Suspense>} />
 <Route path="/Fthirtysix" element={<React.Suspense fallback="Loading...."><LazyFthirtysix /></React.Suspense>} />
 <Route path="/Fthirtyseven" element={<React.Suspense fallback="Loading...."><LazyFthirtyseven /></React.Suspense>} />
 <Route path="/Fthirtyeight" element={<React.Suspense fallback="Loading...."><LazyFthirtyeight /></React.Suspense>} />
 <Route path="/Fthirtynine" element={<React.Suspense fallback="Loading...."><LazyFthirtynine /></React.Suspense>} />
 <Route path="/Fforty" element={<React.Suspense fallback="Loading...."><LazyFforty /></React.Suspense>} />
 <Route path="/Fscore" element={<React.Suspense fallback="Loading...."><LazyFscore /></React.Suspense>} /> 
 <Route path="/Fsummary" element={<React.Suspense fallback="Loading...."><LazyFsummary /></React.Suspense>} /> 
 <Route path="/Fconfirm" element={<React.Suspense fallback="Loading...."><LazyFconfirm /></React.Suspense>} /> 
 <Route path="/Ftimeup" element={<React.Suspense fallback="Loading...."><LazyFtimeup /></React.Suspense>} /> 

 

 <Route path="/PVone" element={<React.Suspense fallback="Loading...."><LazyPVone /></React.Suspense>} />
 <Route path="/PVtwo" element={<React.Suspense fallback="Loading...."><LazyPVtwo /></React.Suspense>} />
 <Route path="/PVthree" element={<React.Suspense fallback="Loading...."><LazyPVthree /></React.Suspense>} />
 <Route path="/PVfour" element={<React.Suspense fallback="Loading...."><LazyPVfour /></React.Suspense>} />
 <Route path="/PVfive" element={<React.Suspense fallback="Loading...."><LazyPVfive /></React.Suspense>} />
 <Route path="/PVsix" element={<React.Suspense fallback="Loading...."><LazyPVsix /></React.Suspense>} />
 <Route path="/PVseven" element={<React.Suspense fallback="Loading...."><LazyPVseven /></React.Suspense>} />
 <Route path="/PVeight" element={<React.Suspense fallback="Loading...."><LazyPVeight /></React.Suspense>} />
 <Route path="/PVnine" element={<React.Suspense fallback="Loading...."><LazyPVnine /></React.Suspense>} />
 <Route path="/PVten" element={<React.Suspense fallback="Loading...."><LazyPVten /></React.Suspense>} />
 <Route path="/PVeleven" element={<React.Suspense fallback="Loading...."><LazyPVeleven /></React.Suspense>} />
 <Route path="/PVtwelve" element={<React.Suspense fallback="Loading...."><LazyPVtwelve /></React.Suspense>} />
 <Route path="/PVthirteen" element={<React.Suspense fallback="Loading...."><LazyPVthirteen /></React.Suspense>} />
 <Route path="/PVfourteen" element={<React.Suspense fallback="Loading...."><LazyPVfourteen /></React.Suspense>} />
 <Route path="/PVfifteen" element={<React.Suspense fallback="Loading...."><LazyPVfifteen /></React.Suspense>} />
 <Route path="/PVsixteen" element={<React.Suspense fallback="Loading...."><LazyPVsixteen /></React.Suspense>} />
 <Route path="/PVseventeen" element={<React.Suspense fallback="Loading...."><LazyPVseventeen /></React.Suspense>} />
 <Route path="/PVeighteen" element={<React.Suspense fallback="Loading...."><LazyPVeighteen /></React.Suspense>} /> 
 <Route path="/PVnineteen" element={<React.Suspense fallback="Loading...."><LazyPVnineteen /></React.Suspense>} />
 <Route path="/PVtwenty" element={<React.Suspense fallback="Loading...."><LazyPVtwenty /></React.Suspense>} />
 <Route path="/PVtwentyone" element={<React.Suspense fallback="Loading...."><LazyPVtwentyone /></React.Suspense>} />
 <Route path="/PVtwentytwo" element={<React.Suspense fallback="Loading...."><LazyPVtwentytwo /></React.Suspense>} />
 <Route path="/PVtwentythree" element={<React.Suspense fallback="Loading...."><LazyPVtwentythree /></React.Suspense>} />
 <Route path="/PVtwentyfour" element={<React.Suspense fallback="Loading...."><LazyPVtwentyfour /></React.Suspense>} />
 <Route path="/PVtwentyfive" element={<React.Suspense fallback="Loading...."><LazyPVtwentyfive /></React.Suspense>} />
 <Route path="/PVtwentysix" element={<React.Suspense fallback="Loading...."><LazyPVtwentysix /></React.Suspense>} />
 <Route path="/PVtwentyseven" element={<React.Suspense fallback="Loading...."><LazyPVtwentyseven /></React.Suspense>} />
 <Route path="/PVtwentyeight" element={<React.Suspense fallback="Loading...."><LazyPVtwentyeight /></React.Suspense>} />
 <Route path="/PVtwentynine" element={<React.Suspense fallback="Loading...."><LazyPVtwentynine /></React.Suspense>} />
 <Route path="/PVtwentynine" element={<React.Suspense fallback="Loading...."><LazyPVtwentynine /></React.Suspense>} />
 <Route path="/PVthirty" element={<React.Suspense fallback="Loading...."><LazyPVthirty /></React.Suspense>} />
 <Route path="/PVthirtyone" element={<React.Suspense fallback="Loading...."><LazyPVthirtyone /></React.Suspense>} />
 <Route path="/PVthirtytwo" element={<React.Suspense fallback="Loading...."><LazyPVthirtytwo /></React.Suspense>} />
 <Route path="/PVthirtythree" element={<React.Suspense fallback="Loading...."><LazyPVthirtythree /></React.Suspense>} />
 <Route path="/PVthirtyfour" element={<React.Suspense fallback="Loading...."><LazyPVthirtyfour /></React.Suspense>} />
 <Route path="/PVthirtyfive" element={<React.Suspense fallback="Loading...."><LazyPVthirtyfive /></React.Suspense>} />
 <Route path="/PVthirtysix" element={<React.Suspense fallback="Loading...."><LazyPVthirtysix /></React.Suspense>} />
 <Route path="/PVthirtyseven" element={<React.Suspense fallback="Loading...."><LazyPVthirtyseven /></React.Suspense>} />
 <Route path="/PVthirtyeight" element={<React.Suspense fallback="Loading...."><LazyPVthirtyeight /></React.Suspense>} />
 <Route path="/PVthirtynine" element={<React.Suspense fallback="Loading...."><LazyPVthirtynine /></React.Suspense>} />
 <Route path="/PVforty" element={<React.Suspense fallback="Loading...."><LazyPVforty /></React.Suspense>} />
 <Route path="/PVscore" element={<React.Suspense fallback="Loading...."><LazyPVscore /></React.Suspense>} /> 
 <Route path="/PVsummary" element={<React.Suspense fallback="Loading...."><LazyPVsummary /></React.Suspense>} /> 
 <Route path="/PVconfirm" element={<React.Suspense fallback="Loading...."><LazyPVconfirm /></React.Suspense>} /> 
 <Route path="/PVtimeup" element={<React.Suspense fallback="Loading...."><LazyPVtimeup /></React.Suspense>} /> 




 <Route path="/PTone" element={<React.Suspense fallback="Loading...."><LazyPTone /></React.Suspense>} />
 <Route path="/PTtwo" element={<React.Suspense fallback="Loading...."><LazyPTtwo /></React.Suspense>} />
 <Route path="/PTthree" element={<React.Suspense fallback="Loading...."><LazyPTthree /></React.Suspense>} />
 <Route path="/PTfour" element={<React.Suspense fallback="Loading...."><LazyPTfour /></React.Suspense>} />
 <Route path="/PTfive" element={<React.Suspense fallback="Loading...."><LazyPTfive /></React.Suspense>} />
 <Route path="/PTsix" element={<React.Suspense fallback="Loading...."><LazyPTsix /></React.Suspense>} />
 <Route path="/PTseven" element={<React.Suspense fallback="Loading...."><LazyPTseven /></React.Suspense>} />
 <Route path="/PTeight" element={<React.Suspense fallback="Loading...."><LazyPTeight /></React.Suspense>} />
 <Route path="/PTnine" element={<React.Suspense fallback="Loading...."><LazyPTnine /></React.Suspense>} />
 <Route path="/PTten" element={<React.Suspense fallback="Loading...."><LazyPTten /></React.Suspense>} />
 <Route path="/PTeleven" element={<React.Suspense fallback="Loading...."><LazyPTeleven /></React.Suspense>} />
 <Route path="/PTtwelve" element={<React.Suspense fallback="Loading...."><LazyPTtwelve /></React.Suspense>} />
 <Route path="/PTthirteen" element={<React.Suspense fallback="Loading...."><LazyPTthirteen /></React.Suspense>} />
 <Route path="/PTfourteen" element={<React.Suspense fallback="Loading...."><LazyPTfourteen /></React.Suspense>} />
 <Route path="/PTfifteen" element={<React.Suspense fallback="Loading...."><LazyPTfifteen /></React.Suspense>} />
 <Route path="/PTsixteen" element={<React.Suspense fallback="Loading...."><LazyPTsixteen /></React.Suspense>} />
 <Route path="/PTseventeen" element={<React.Suspense fallback="Loading...."><LazyPTseventeen /></React.Suspense>} />
 <Route path="/PTeighteen" element={<React.Suspense fallback="Loading...."><LazyPTeighteen /></React.Suspense>} /> 
 <Route path="/PTnineteen" element={<React.Suspense fallback="Loading...."><LazyPTnineteen /></React.Suspense>} />
 <Route path="/PTtwenty" element={<React.Suspense fallback="Loading...."><LazyPTtwenty /></React.Suspense>} />
 <Route path="/PTtwentyone" element={<React.Suspense fallback="Loading...."><LazyPTtwentyone /></React.Suspense>} />
 <Route path="/PTtwentytwo" element={<React.Suspense fallback="Loading...."><LazyPTtwentytwo /></React.Suspense>} />
 <Route path="/PTtwentythree" element={<React.Suspense fallback="Loading...."><LazyPTtwentythree /></React.Suspense>} />
 <Route path="/PTtwentyfour" element={<React.Suspense fallback="Loading...."><LazyPTtwentyfour /></React.Suspense>} />
 <Route path="/PTtwentyfive" element={<React.Suspense fallback="Loading...."><LazyPTtwentyfive /></React.Suspense>} />
 <Route path="/PTtwentysix" element={<React.Suspense fallback="Loading...."><LazyPTtwentysix /></React.Suspense>} />
 <Route path="/PTtwentyseven" element={<React.Suspense fallback="Loading...."><LazyPTtwentyseven /></React.Suspense>} />
 <Route path="/PTtwentyeight" element={<React.Suspense fallback="Loading...."><LazyPTtwentyeight /></React.Suspense>} />
 <Route path="/PTtwentynine" element={<React.Suspense fallback="Loading...."><LazyPTtwentynine /></React.Suspense>} />
 <Route path="/PTtwentynine" element={<React.Suspense fallback="Loading...."><LazyPTtwentynine /></React.Suspense>} />
 <Route path="/PTthirty" element={<React.Suspense fallback="Loading...."><LazyPTthirty /></React.Suspense>} />
 <Route path="/PTthirtyone" element={<React.Suspense fallback="Loading...."><LazyPTthirtyone /></React.Suspense>} />
 <Route path="/PTthirtytwo" element={<React.Suspense fallback="Loading...."><LazyPTthirtytwo /></React.Suspense>} />
 <Route path="/PTthirtythree" element={<React.Suspense fallback="Loading...."><LazyPTthirtythree /></React.Suspense>} />
 <Route path="/PTthirtyfour" element={<React.Suspense fallback="Loading...."><LazyPTthirtyfour /></React.Suspense>} />
 <Route path="/PTthirtyfive" element={<React.Suspense fallback="Loading...."><LazyPTthirtyfive /></React.Suspense>} />
 <Route path="/PTthirtysix" element={<React.Suspense fallback="Loading...."><LazyPTthirtysix /></React.Suspense>} />
 <Route path="/PTthirtyseven" element={<React.Suspense fallback="Loading...."><LazyPTthirtyseven /></React.Suspense>} />
 <Route path="/PTthirtyeight" element={<React.Suspense fallback="Loading...."><LazyPTthirtyeight /></React.Suspense>} />
 <Route path="/PTthirtynine" element={<React.Suspense fallback="Loading...."><LazyPTthirtynine /></React.Suspense>} />
 <Route path="/PTforty" element={<React.Suspense fallback="Loading...."><LazyPTforty /></React.Suspense>} />
 <Route path="/PTscore" element={<React.Suspense fallback="Loading...."><LazyPTscore /></React.Suspense>} /> 
 <Route path="/PTsummary" element={<React.Suspense fallback="Loading...."><LazyPTsummary /></React.Suspense>} /> 
 <Route path="/PTconfirm" element={<React.Suspense fallback="Loading...."><LazyPTconfirm /></React.Suspense>} /> 
 <Route path="/PTtimeup" element={<React.Suspense fallback="Loading...."><LazyPTtimeup /></React.Suspense>} /> 




 <Route path="/ZPone" element={<React.Suspense fallback="Loading...."><LazyZPone /></React.Suspense>} />
 <Route path="/ZPtwo" element={<React.Suspense fallback="Loading...."><LazyZPtwo /></React.Suspense>} />
 <Route path="/ZPthree" element={<React.Suspense fallback="Loading...."><LazyZPthree /></React.Suspense>} />
 <Route path="/ZPfour" element={<React.Suspense fallback="Loading...."><LazyZPfour /></React.Suspense>} />
 <Route path="/ZPfive" element={<React.Suspense fallback="Loading...."><LazyZPfive /></React.Suspense>} />
 <Route path="/ZPsix" element={<React.Suspense fallback="Loading...."><LazyZPsix /></React.Suspense>} />
 <Route path="/ZPseven" element={<React.Suspense fallback="Loading...."><LazyZPseven /></React.Suspense>} />
 <Route path="/ZPeight" element={<React.Suspense fallback="Loading...."><LazyZPeight /></React.Suspense>} />
 <Route path="/ZPnine" element={<React.Suspense fallback="Loading...."><LazyZPnine /></React.Suspense>} />
 <Route path="/ZPten" element={<React.Suspense fallback="Loading...."><LazyZPten /></React.Suspense>} />
 <Route path="/ZPeleven" element={<React.Suspense fallback="Loading...."><LazyZPeleven /></React.Suspense>} />
 <Route path="/ZPtwelve" element={<React.Suspense fallback="Loading...."><LazyZPtwelve /></React.Suspense>} />
 <Route path="/ZPthirteen" element={<React.Suspense fallback="Loading...."><LazyZPthirteen /></React.Suspense>} />
 <Route path="/ZPfourteen" element={<React.Suspense fallback="Loading...."><LazyZPfourteen /></React.Suspense>} />
 <Route path="/ZPfifteen" element={<React.Suspense fallback="Loading...."><LazyZPfifteen /></React.Suspense>} />
 <Route path="/ZPsixteen" element={<React.Suspense fallback="Loading...."><LazyZPsixteen /></React.Suspense>} />
 <Route path="/ZPseventeen" element={<React.Suspense fallback="Loading...."><LazyZPseventeen /></React.Suspense>} />
 <Route path="/ZPeighteen" element={<React.Suspense fallback="Loading...."><LazyZPeighteen /></React.Suspense>} /> 
 <Route path="/ZPnineteen" element={<React.Suspense fallback="Loading...."><LazyZPnineteen /></React.Suspense>} />
 <Route path="/ZPtwenty" element={<React.Suspense fallback="Loading...."><LazyZPtwenty /></React.Suspense>} />
 <Route path="/ZPtwentyone" element={<React.Suspense fallback="Loading...."><LazyZPtwentyone /></React.Suspense>} />
 <Route path="/ZPtwentytwo" element={<React.Suspense fallback="Loading...."><LazyZPtwentytwo /></React.Suspense>} />
 <Route path="/ZPtwentythree" element={<React.Suspense fallback="Loading...."><LazyZPtwentythree /></React.Suspense>} />
 <Route path="/ZPtwentyfour" element={<React.Suspense fallback="Loading...."><LazyZPtwentyfour /></React.Suspense>} />
 <Route path="/ZPtwentyfive" element={<React.Suspense fallback="Loading...."><LazyZPtwentyfive /></React.Suspense>} />
 <Route path="/ZPtwentysix" element={<React.Suspense fallback="Loading...."><LazyZPtwentysix /></React.Suspense>} />
 <Route path="/ZPtwentyseven" element={<React.Suspense fallback="Loading...."><LazyZPtwentyseven /></React.Suspense>} />
 <Route path="/ZPtwentyeight" element={<React.Suspense fallback="Loading...."><LazyZPtwentyeight /></React.Suspense>} />
 <Route path="/ZPtwentynine" element={<React.Suspense fallback="Loading...."><LazyZPtwentynine /></React.Suspense>} />
 <Route path="/ZPtwentynine" element={<React.Suspense fallback="Loading...."><LazyZPtwentynine /></React.Suspense>} />
 <Route path="/ZPthirty" element={<React.Suspense fallback="Loading...."><LazyZPthirty /></React.Suspense>} />
 <Route path="/ZPthirtyone" element={<React.Suspense fallback="Loading...."><LazyZPthirtyone /></React.Suspense>} />
 <Route path="/ZPthirtytwo" element={<React.Suspense fallback="Loading...."><LazyZPthirtytwo /></React.Suspense>} />
 <Route path="/ZPthirtythree" element={<React.Suspense fallback="Loading...."><LazyZPthirtythree /></React.Suspense>} />
 <Route path="/ZPthirtyfour" element={<React.Suspense fallback="Loading...."><LazyZPthirtyfour /></React.Suspense>} />
 <Route path="/ZPthirtyfive" element={<React.Suspense fallback="Loading...."><LazyZPthirtyfive /></React.Suspense>} />
 <Route path="/ZPthirtysix" element={<React.Suspense fallback="Loading...."><LazyZPthirtysix /></React.Suspense>} />
 <Route path="/ZPthirtyseven" element={<React.Suspense fallback="Loading...."><LazyZPthirtyseven /></React.Suspense>} />
 <Route path="/ZPthirtyeight" element={<React.Suspense fallback="Loading...."><LazyZPthirtyeight /></React.Suspense>} />
 <Route path="/ZPthirtynine" element={<React.Suspense fallback="Loading...."><LazyZPthirtynine /></React.Suspense>} />
 <Route path="/ZPforty" element={<React.Suspense fallback="Loading...."><LazyZPforty /></React.Suspense>} />
 <Route path="/ZPscore" element={<React.Suspense fallback="Loading...."><LazyZPscore /></React.Suspense>} /> 
 <Route path="/ZPsummary" element={<React.Suspense fallback="Loading...."><LazyZPsummary /></React.Suspense>} /> 
 <Route path="/ZPconfirm" element={<React.Suspense fallback="Loading...."><LazyZPconfirm /></React.Suspense>} /> 
 <Route path="/ZPtimeup" element={<React.Suspense fallback="Loading...."><LazyZPtimeup /></React.Suspense>} /> 






 <Route path="/ZQone" element={<React.Suspense fallback="Loading...."><LazyZQone /></React.Suspense>} />
 <Route path="/ZQtwo" element={<React.Suspense fallback="Loading...."><LazyZQtwo /></React.Suspense>} />
 <Route path="/ZQthree" element={<React.Suspense fallback="Loading...."><LazyZQthree /></React.Suspense>} />
 <Route path="/ZQfour" element={<React.Suspense fallback="Loading...."><LazyZQfour /></React.Suspense>} />
 <Route path="/ZQfive" element={<React.Suspense fallback="Loading...."><LazyZQfive /></React.Suspense>} />
 <Route path="/ZQsix" element={<React.Suspense fallback="Loading...."><LazyZQsix /></React.Suspense>} />
 <Route path="/ZQseven" element={<React.Suspense fallback="Loading...."><LazyZQseven /></React.Suspense>} />
 <Route path="/ZQeight" element={<React.Suspense fallback="Loading...."><LazyZQeight /></React.Suspense>} />
 <Route path="/ZQnine" element={<React.Suspense fallback="Loading...."><LazyZQnine /></React.Suspense>} />
 <Route path="/ZQten" element={<React.Suspense fallback="Loading...."><LazyZQten /></React.Suspense>} />
 <Route path="/ZQeleven" element={<React.Suspense fallback="Loading...."><LazyZQeleven /></React.Suspense>} />
 <Route path="/ZQtwelve" element={<React.Suspense fallback="Loading...."><LazyZQtwelve /></React.Suspense>} />
 <Route path="/ZQthirteen" element={<React.Suspense fallback="Loading...."><LazyZQthirteen /></React.Suspense>} />
 <Route path="/ZQfourteen" element={<React.Suspense fallback="Loading...."><LazyZQfourteen /></React.Suspense>} />
 <Route path="/ZQfifteen" element={<React.Suspense fallback="Loading...."><LazyZQfifteen /></React.Suspense>} />
 <Route path="/ZQsixteen" element={<React.Suspense fallback="Loading...."><LazyZQsixteen /></React.Suspense>} />
 <Route path="/ZQseventeen" element={<React.Suspense fallback="Loading...."><LazyZQseventeen /></React.Suspense>} />
 <Route path="/ZQeighteen" element={<React.Suspense fallback="Loading...."><LazyZQeighteen /></React.Suspense>} /> 
 <Route path="/ZQnineteen" element={<React.Suspense fallback="Loading...."><LazyZQnineteen /></React.Suspense>} />
 <Route path="/ZQtwenty" element={<React.Suspense fallback="Loading...."><LazyZQtwenty /></React.Suspense>} />
 <Route path="/ZQtwentyone" element={<React.Suspense fallback="Loading...."><LazyZQtwentyone /></React.Suspense>} />
 <Route path="/ZQtwentytwo" element={<React.Suspense fallback="Loading...."><LazyZQtwentytwo /></React.Suspense>} />
 <Route path="/ZQtwentythree" element={<React.Suspense fallback="Loading...."><LazyZQtwentythree /></React.Suspense>} />
 <Route path="/ZQtwentyfour" element={<React.Suspense fallback="Loading...."><LazyZQtwentyfour /></React.Suspense>} />
 <Route path="/ZQtwentyfive" element={<React.Suspense fallback="Loading...."><LazyZQtwentyfive /></React.Suspense>} />
 <Route path="/ZQtwentysix" element={<React.Suspense fallback="Loading...."><LazyZQtwentysix /></React.Suspense>} />
 <Route path="/ZQtwentyseven" element={<React.Suspense fallback="Loading...."><LazyZQtwentyseven /></React.Suspense>} />
 <Route path="/ZQtwentyeight" element={<React.Suspense fallback="Loading...."><LazyZQtwentyeight /></React.Suspense>} />
 <Route path="/ZQtwentynine" element={<React.Suspense fallback="Loading...."><LazyZQtwentynine /></React.Suspense>} />
 <Route path="/ZQtwentynine" element={<React.Suspense fallback="Loading...."><LazyZQtwentynine /></React.Suspense>} />
 <Route path="/ZQthirty" element={<React.Suspense fallback="Loading...."><LazyZQthirty /></React.Suspense>} />
 <Route path="/ZQthirtyone" element={<React.Suspense fallback="Loading...."><LazyZQthirtyone /></React.Suspense>} />
 <Route path="/ZQthirtytwo" element={<React.Suspense fallback="Loading...."><LazyZQthirtytwo /></React.Suspense>} />
 <Route path="/ZQthirtythree" element={<React.Suspense fallback="Loading...."><LazyZQthirtythree /></React.Suspense>} />
 <Route path="/ZQthirtyfour" element={<React.Suspense fallback="Loading...."><LazyZQthirtyfour /></React.Suspense>} />
 <Route path="/ZQthirtyfive" element={<React.Suspense fallback="Loading...."><LazyZQthirtyfive /></React.Suspense>} />
 <Route path="/ZQthirtysix" element={<React.Suspense fallback="Loading...."><LazyZQthirtysix /></React.Suspense>} />
 <Route path="/ZQthirtyseven" element={<React.Suspense fallback="Loading...."><LazyZQthirtyseven /></React.Suspense>} />
 <Route path="/ZQthirtyeight" element={<React.Suspense fallback="Loading...."><LazyZQthirtyeight /></React.Suspense>} />
 <Route path="/ZQthirtynine" element={<React.Suspense fallback="Loading...."><LazyZQthirtynine /></React.Suspense>} />
 <Route path="/ZQforty" element={<React.Suspense fallback="Loading...."><LazyZQforty /></React.Suspense>} />
 <Route path="/ZQscore" element={<React.Suspense fallback="Loading...."><LazyZQscore /></React.Suspense>} /> 
 <Route path="/ZQsummary" element={<React.Suspense fallback="Loading...."><LazyZQsummary /></React.Suspense>} /> 
 <Route path="/ZQtimer" element={<React.Suspense fallback="Loading...."><LazyZQtimer /></React.Suspense>} /> 
 <Route path="/ZQconfirm" element={<React.Suspense fallback="Loading...."><LazyZQconfirm /></React.Suspense>} /> 
 <Route path="/ZQtimeup" element={<React.Suspense fallback="Loading...."><LazyZQtimeup /></React.Suspense>} /> 




 <Route path="/ZXone" element={<React.Suspense fallback="Loading...."><LazyZXone /></React.Suspense>} />
 <Route path="/ZXtwo" element={<React.Suspense fallback="Loading...."><LazyZXtwo /></React.Suspense>} />
 <Route path="/ZXthree" element={<React.Suspense fallback="Loading...."><LazyZXthree /></React.Suspense>} />
 <Route path="/ZXfour" element={<React.Suspense fallback="Loading...."><LazyZXfour /></React.Suspense>} />
 <Route path="/ZXfive" element={<React.Suspense fallback="Loading...."><LazyZXfive /></React.Suspense>} />
 <Route path="/ZXsix" element={<React.Suspense fallback="Loading...."><LazyZXsix /></React.Suspense>} />
 <Route path="/ZXseven" element={<React.Suspense fallback="Loading...."><LazyZXseven /></React.Suspense>} />
 <Route path="/ZXeight" element={<React.Suspense fallback="Loading...."><LazyZXeight /></React.Suspense>} />
 <Route path="/ZXnine" element={<React.Suspense fallback="Loading...."><LazyZXnine /></React.Suspense>} />
 <Route path="/ZXten" element={<React.Suspense fallback="Loading...."><LazyZXten /></React.Suspense>} />
 <Route path="/ZXeleven" element={<React.Suspense fallback="Loading...."><LazyZXeleven /></React.Suspense>} />
 <Route path="/ZXtwelve" element={<React.Suspense fallback="Loading...."><LazyZXtwelve /></React.Suspense>} />
 <Route path="/ZXthirteen" element={<React.Suspense fallback="Loading...."><LazyZXthirteen /></React.Suspense>} />
 <Route path="/ZXfourteen" element={<React.Suspense fallback="Loading...."><LazyZXfourteen /></React.Suspense>} />
 <Route path="/ZXfifteen" element={<React.Suspense fallback="Loading...."><LazyZXfifteen /></React.Suspense>} />
 <Route path="/ZXsixteen" element={<React.Suspense fallback="Loading...."><LazyZXsixteen /></React.Suspense>} />
 <Route path="/ZXseventeen" element={<React.Suspense fallback="Loading...."><LazyZXseventeen /></React.Suspense>} />
 <Route path="/ZXeighteen" element={<React.Suspense fallback="Loading...."><LazyZXeighteen /></React.Suspense>} /> 
 <Route path="/ZXnineteen" element={<React.Suspense fallback="Loading...."><LazyZXnineteen /></React.Suspense>} />
 <Route path="/ZXtwenty" element={<React.Suspense fallback="Loading...."><LazyZXtwenty /></React.Suspense>} />
 <Route path="/ZXtwentyone" element={<React.Suspense fallback="Loading...."><LazyZXtwentyone /></React.Suspense>} />
 <Route path="/ZXtwentytwo" element={<React.Suspense fallback="Loading...."><LazyZXtwentytwo /></React.Suspense>} />
 <Route path="/ZXtwentythree" element={<React.Suspense fallback="Loading...."><LazyZXtwentythree /></React.Suspense>} />
 <Route path="/ZXtwentyfour" element={<React.Suspense fallback="Loading...."><LazyZXtwentyfour /></React.Suspense>} />
 <Route path="/ZXtwentyfive" element={<React.Suspense fallback="Loading...."><LazyZXtwentyfive /></React.Suspense>} />
 <Route path="/ZXtwentysix" element={<React.Suspense fallback="Loading...."><LazyZXtwentysix /></React.Suspense>} />
 <Route path="/ZXtwentyseven" element={<React.Suspense fallback="Loading...."><LazyZXtwentyseven /></React.Suspense>} />
 <Route path="/ZXtwentyeight" element={<React.Suspense fallback="Loading...."><LazyZXtwentyeight /></React.Suspense>} />
 <Route path="/ZXtwentynine" element={<React.Suspense fallback="Loading...."><LazyZXtwentynine /></React.Suspense>} />
 <Route path="/ZXtwentynine" element={<React.Suspense fallback="Loading...."><LazyZXtwentynine /></React.Suspense>} />
 <Route path="/ZXthirty" element={<React.Suspense fallback="Loading...."><LazyZXthirty /></React.Suspense>} />
 <Route path="/ZXthirtyone" element={<React.Suspense fallback="Loading...."><LazyZXthirtyone /></React.Suspense>} />
 <Route path="/ZXthirtytwo" element={<React.Suspense fallback="Loading...."><LazyZXthirtytwo /></React.Suspense>} />
 <Route path="/ZXthirtythree" element={<React.Suspense fallback="Loading...."><LazyZXthirtythree /></React.Suspense>} />
 <Route path="/ZXthirtyfour" element={<React.Suspense fallback="Loading...."><LazyZXthirtyfour /></React.Suspense>} />
 <Route path="/ZXthirtyfive" element={<React.Suspense fallback="Loading...."><LazyZXthirtyfive /></React.Suspense>} />
 <Route path="/ZXthirtysix" element={<React.Suspense fallback="Loading...."><LazyZXthirtysix /></React.Suspense>} />
 <Route path="/ZXthirtyseven" element={<React.Suspense fallback="Loading...."><LazyZXthirtyseven /></React.Suspense>} />
 <Route path="/ZXthirtyeight" element={<React.Suspense fallback="Loading...."><LazyZXthirtyeight /></React.Suspense>} />
 <Route path="/ZXthirtynine" element={<React.Suspense fallback="Loading...."><LazyZXthirtynine /></React.Suspense>} />
 <Route path="/ZXforty" element={<React.Suspense fallback="Loading...."><LazyZXforty /></React.Suspense>} />
 <Route path="/ZXscore" element={<React.Suspense fallback="Loading...."><LazyZXscore /></React.Suspense>} /> 
 <Route path="/ZXsummary" element={<React.Suspense fallback="Loading...."><LazyZXsummary /></React.Suspense>} /> 
 <Route path="/ZXconfirm" element={<React.Suspense fallback="Loading...."><LazyZXconfirm /></React.Suspense>} /> 
 <Route path="/ZXtimeup" element={<React.Suspense fallback="Loading...."><LazyZXtimeup /></React.Suspense>} /> 




 <Route path="/ZTone" element={<React.Suspense fallback="Loading...."><LazyZTone /></React.Suspense>} />
 <Route path="/ZTtwo" element={<React.Suspense fallback="Loading...."><LazyZTtwo /></React.Suspense>} />
 <Route path="/ZTthree" element={<React.Suspense fallback="Loading...."><LazyZTthree /></React.Suspense>} />
 <Route path="/ZTfour" element={<React.Suspense fallback="Loading...."><LazyZTfour /></React.Suspense>} />
 <Route path="/ZTfive" element={<React.Suspense fallback="Loading...."><LazyZTfive /></React.Suspense>} />
 <Route path="/ZTsix" element={<React.Suspense fallback="Loading...."><LazyZTsix /></React.Suspense>} />
 <Route path="/ZTseven" element={<React.Suspense fallback="Loading...."><LazyZTseven /></React.Suspense>} />
 <Route path="/ZTeight" element={<React.Suspense fallback="Loading...."><LazyZTeight /></React.Suspense>} />
 <Route path="/ZTnine" element={<React.Suspense fallback="Loading...."><LazyZTnine /></React.Suspense>} />
 <Route path="/ZTten" element={<React.Suspense fallback="Loading...."><LazyZTten /></React.Suspense>} />
 <Route path="/ZTeleven" element={<React.Suspense fallback="Loading...."><LazyZTeleven /></React.Suspense>} />
 <Route path="/ZTtwelve" element={<React.Suspense fallback="Loading...."><LazyZTtwelve /></React.Suspense>} />
 <Route path="/ZTthirteen" element={<React.Suspense fallback="Loading...."><LazyZTthirteen /></React.Suspense>} />
 <Route path="/ZTfourteen" element={<React.Suspense fallback="Loading...."><LazyZTfourteen /></React.Suspense>} />
 <Route path="/ZTfifteen" element={<React.Suspense fallback="Loading...."><LazyZTfifteen /></React.Suspense>} />
 <Route path="/ZTsixteen" element={<React.Suspense fallback="Loading...."><LazyZTsixteen /></React.Suspense>} />
 <Route path="/ZTseventeen" element={<React.Suspense fallback="Loading...."><LazyZTseventeen /></React.Suspense>} />
 <Route path="/ZTeighteen" element={<React.Suspense fallback="Loading...."><LazyZTeighteen /></React.Suspense>} /> 
 <Route path="/ZTnineteen" element={<React.Suspense fallback="Loading...."><LazyZTnineteen /></React.Suspense>} />
 <Route path="/ZTtwenty" element={<React.Suspense fallback="Loading...."><LazyZTtwenty /></React.Suspense>} />
 <Route path="/ZTtwentyone" element={<React.Suspense fallback="Loading...."><LazyZTtwentyone /></React.Suspense>} />
 <Route path="/ZTtwentytwo" element={<React.Suspense fallback="Loading...."><LazyZTtwentytwo /></React.Suspense>} />
 <Route path="/ZTtwentythree" element={<React.Suspense fallback="Loading...."><LazyZTtwentythree /></React.Suspense>} />
 <Route path="/ZTtwentyfour" element={<React.Suspense fallback="Loading...."><LazyZTtwentyfour /></React.Suspense>} />
 <Route path="/ZTtwentyfive" element={<React.Suspense fallback="Loading...."><LazyZTtwentyfive /></React.Suspense>} />
 <Route path="/ZTtwentysix" element={<React.Suspense fallback="Loading...."><LazyZTtwentysix /></React.Suspense>} />
 <Route path="/ZTtwentyseven" element={<React.Suspense fallback="Loading...."><LazyZTtwentyseven /></React.Suspense>} />
 <Route path="/ZTtwentyeight" element={<React.Suspense fallback="Loading...."><LazyZTtwentyeight /></React.Suspense>} />
 <Route path="/ZTtwentynine" element={<React.Suspense fallback="Loading...."><LazyZTtwentynine /></React.Suspense>} />
 <Route path="/ZTtwentynine" element={<React.Suspense fallback="Loading...."><LazyZTtwentynine /></React.Suspense>} />
 <Route path="/ZTthirty" element={<React.Suspense fallback="Loading...."><LazyZTthirty /></React.Suspense>} />
 <Route path="/ZTthirtyone" element={<React.Suspense fallback="Loading...."><LazyZTthirtyone /></React.Suspense>} />
 <Route path="/ZTthirtytwo" element={<React.Suspense fallback="Loading...."><LazyZTthirtytwo /></React.Suspense>} />
 <Route path="/ZTthirtythree" element={<React.Suspense fallback="Loading...."><LazyZTthirtythree /></React.Suspense>} />
 <Route path="/ZTthirtyfour" element={<React.Suspense fallback="Loading...."><LazyZTthirtyfour /></React.Suspense>} />
 <Route path="/ZTthirtyfive" element={<React.Suspense fallback="Loading...."><LazyZTthirtyfive /></React.Suspense>} />
 <Route path="/ZTthirtysix" element={<React.Suspense fallback="Loading...."><LazyZTthirtysix /></React.Suspense>} />
 <Route path="/ZTthirtyseven" element={<React.Suspense fallback="Loading...."><LazyZTthirtyseven /></React.Suspense>} />
 <Route path="/ZTthirtyeight" element={<React.Suspense fallback="Loading...."><LazyZTthirtyeight /></React.Suspense>} />
 <Route path="/ZTthirtynine" element={<React.Suspense fallback="Loading...."><LazyZTthirtynine /></React.Suspense>} />
 <Route path="/ZTforty" element={<React.Suspense fallback="Loading...."><LazyZTforty /></React.Suspense>} />
 <Route path="/ZTscore" element={<React.Suspense fallback="Loading...."><LazyZTscore /></React.Suspense>} />
 <Route path="/ZTsummary" element={<React.Suspense fallback="Loading...."><LazyZTsummary /></React.Suspense>} />
 <Route path="/ZTtimer" element={<React.Suspense fallback="Loading...."><LazyZTtimer /></React.Suspense>} />
 <Route path="/ZTconfirm" element={<React.Suspense fallback="Loading...."><LazyZTconfirm /></React.Suspense>} /> 
 <Route path="/ZTtimeup" element={<React.Suspense fallback="Loading...."><LazyZTtimeup /></React.Suspense>} /> 




 <Route path="/YMone" element={<React.Suspense fallback="Loading...."><LazyYMone /></React.Suspense>} />
 <Route path="/YMtwo" element={<React.Suspense fallback="Loading...."><LazyYMtwo /></React.Suspense>} />
 <Route path="/YMthree" element={<React.Suspense fallback="Loading...."><LazyYMthree /></React.Suspense>} />
 <Route path="/YMfour" element={<React.Suspense fallback="Loading...."><LazyYMfour /></React.Suspense>} />
 <Route path="/YMfive" element={<React.Suspense fallback="Loading...."><LazyYMfive /></React.Suspense>} />
 <Route path="/YMsix" element={<React.Suspense fallback="Loading...."><LazyYMsix /></React.Suspense>} />
 <Route path="/YMseven" element={<React.Suspense fallback="Loading...."><LazyYMseven /></React.Suspense>} />
 <Route path="/YMeight" element={<React.Suspense fallback="Loading...."><LazyYMeight /></React.Suspense>} />
 <Route path="/YMnine" element={<React.Suspense fallback="Loading...."><LazyYMnine /></React.Suspense>} />
 <Route path="/YMten" element={<React.Suspense fallback="Loading...."><LazyYMten /></React.Suspense>} />
 <Route path="/YMeleven" element={<React.Suspense fallback="Loading...."><LazyYMeleven /></React.Suspense>} />
 <Route path="/YMtwelve" element={<React.Suspense fallback="Loading...."><LazyYMtwelve /></React.Suspense>} />
 <Route path="/YMthirteen" element={<React.Suspense fallback="Loading...."><LazyYMthirteen /></React.Suspense>} />
 <Route path="/YMfourteen" element={<React.Suspense fallback="Loading...."><LazyYMfourteen /></React.Suspense>} />
 <Route path="/YMfifteen" element={<React.Suspense fallback="Loading...."><LazyYMfifteen /></React.Suspense>} />
 <Route path="/YMsixteen" element={<React.Suspense fallback="Loading...."><LazyYMsixteen /></React.Suspense>} />
 <Route path="/YMseventeen" element={<React.Suspense fallback="Loading...."><LazyYMseventeen /></React.Suspense>} />
 <Route path="/YMeighteen" element={<React.Suspense fallback="Loading...."><LazyYMeighteen /></React.Suspense>} /> 
 <Route path="/YMnineteen" element={<React.Suspense fallback="Loading...."><LazyYMnineteen /></React.Suspense>} />
 <Route path="/YMtwenty" element={<React.Suspense fallback="Loading...."><LazyYMtwenty /></React.Suspense>} />
 <Route path="/YMtwentyone" element={<React.Suspense fallback="Loading...."><LazyYMtwentyone /></React.Suspense>} />
 <Route path="/YMtwentytwo" element={<React.Suspense fallback="Loading...."><LazyYMtwentytwo /></React.Suspense>} />
 <Route path="/YMtwentythree" element={<React.Suspense fallback="Loading...."><LazyYMtwentythree /></React.Suspense>} />
 <Route path="/YMtwentyfour" element={<React.Suspense fallback="Loading...."><LazyYMtwentyfour /></React.Suspense>} />
 <Route path="/YMtwentyfive" element={<React.Suspense fallback="Loading...."><LazyYMtwentyfive /></React.Suspense>} />
 <Route path="/YMtwentysix" element={<React.Suspense fallback="Loading...."><LazyYMtwentysix /></React.Suspense>} />
 <Route path="/YMtwentyseven" element={<React.Suspense fallback="Loading...."><LazyYMtwentyseven /></React.Suspense>} />
 <Route path="/YMtwentyeight" element={<React.Suspense fallback="Loading...."><LazyYMtwentyeight /></React.Suspense>} />
 <Route path="/YMtwentynine" element={<React.Suspense fallback="Loading...."><LazyYMtwentynine /></React.Suspense>} />
 <Route path="/YMtwentynine" element={<React.Suspense fallback="Loading...."><LazyYMtwentynine /></React.Suspense>} />
 <Route path="/YMthirty" element={<React.Suspense fallback="Loading...."><LazyYMthirty /></React.Suspense>} />
 <Route path="/YMthirtyone" element={<React.Suspense fallback="Loading...."><LazyYMthirtyone /></React.Suspense>} />
 <Route path="/YMthirtytwo" element={<React.Suspense fallback="Loading...."><LazyYMthirtytwo /></React.Suspense>} />
 <Route path="/YMthirtythree" element={<React.Suspense fallback="Loading...."><LazyYMthirtythree /></React.Suspense>} />
 <Route path="/YMthirtyfour" element={<React.Suspense fallback="Loading...."><LazyYMthirtyfour /></React.Suspense>} />
 <Route path="/YMthirtyfive" element={<React.Suspense fallback="Loading...."><LazyYMthirtyfive /></React.Suspense>} />
 <Route path="/YMthirtysix" element={<React.Suspense fallback="Loading...."><LazyYMthirtysix /></React.Suspense>} />
 <Route path="/YMthirtyseven" element={<React.Suspense fallback="Loading...."><LazyYMthirtyseven /></React.Suspense>} />
 <Route path="/YMthirtyeight" element={<React.Suspense fallback="Loading...."><LazyYMthirtyeight /></React.Suspense>} />
 <Route path="/YMthirtynine" element={<React.Suspense fallback="Loading...."><LazyYMthirtynine /></React.Suspense>} />
 <Route path="/YMforty" element={<React.Suspense fallback="Loading...."><LazyYMforty /></React.Suspense>} />
 <Route path="/YMscore" element={<React.Suspense fallback="Loading...."><LazyYMscore /></React.Suspense>} />
 <Route path="/YMsummary" element={<React.Suspense fallback="Loading...."><LazyYMsummary /></React.Suspense>} />
 <Route path="/YMtimer" element={<React.Suspense fallback="Loading...."><LazyYMtimer /></React.Suspense>} />
 <Route path="/YMconfirm" element={<React.Suspense fallback="Loading...."><LazyYMconfirm /></React.Suspense>} /> 
 <Route path="/YMtimeup" element={<React.Suspense fallback="Loading...."><LazyYMtimeup /></React.Suspense>} /> 



 <Route path="/YTone" element={<React.Suspense fallback="Loading...."><LazyYTone /></React.Suspense>} />
 <Route path="/YTtwo" element={<React.Suspense fallback="Loading...."><LazyYTtwo /></React.Suspense>} />
 <Route path="/YTthree" element={<React.Suspense fallback="Loading...."><LazyYTthree /></React.Suspense>} />
 <Route path="/YTfour" element={<React.Suspense fallback="Loading...."><LazyYTfour /></React.Suspense>} />
 <Route path="/YTfive" element={<React.Suspense fallback="Loading...."><LazyYTfive /></React.Suspense>} />
 <Route path="/YTsix" element={<React.Suspense fallback="Loading...."><LazyYTsix /></React.Suspense>} />
 <Route path="/YTseven" element={<React.Suspense fallback="Loading...."><LazyYTseven /></React.Suspense>} />
 <Route path="/YTeight" element={<React.Suspense fallback="Loading...."><LazyYTeight /></React.Suspense>} />
 <Route path="/YTnine" element={<React.Suspense fallback="Loading...."><LazyYTnine /></React.Suspense>} />
 <Route path="/YTten" element={<React.Suspense fallback="Loading...."><LazyYTten /></React.Suspense>} />
 <Route path="/YTeleven" element={<React.Suspense fallback="Loading...."><LazyYTeleven /></React.Suspense>} />
 <Route path="/YTtwelve" element={<React.Suspense fallback="Loading...."><LazyYTtwelve /></React.Suspense>} />
 <Route path="/YTthirteen" element={<React.Suspense fallback="Loading...."><LazyYTthirteen /></React.Suspense>} />
 <Route path="/YTfourteen" element={<React.Suspense fallback="Loading...."><LazyYTfourteen /></React.Suspense>} />
 <Route path="/YTfifteen" element={<React.Suspense fallback="Loading...."><LazyYTfifteen /></React.Suspense>} />
 <Route path="/YTsixteen" element={<React.Suspense fallback="Loading...."><LazyYTsixteen /></React.Suspense>} />
 <Route path="/YTseventeen" element={<React.Suspense fallback="Loading...."><LazyYTseventeen /></React.Suspense>} />
 <Route path="/YTeighteen" element={<React.Suspense fallback="Loading...."><LazyYTeighteen /></React.Suspense>} /> 
 <Route path="/YTnineteen" element={<React.Suspense fallback="Loading...."><LazyYTnineteen /></React.Suspense>} />
 <Route path="/YTtwenty" element={<React.Suspense fallback="Loading...."><LazyYTtwenty /></React.Suspense>} />
 <Route path="/YTtwentyone" element={<React.Suspense fallback="Loading...."><LazyYTtwentyone /></React.Suspense>} />
 <Route path="/YTtwentytwo" element={<React.Suspense fallback="Loading...."><LazyYTtwentytwo /></React.Suspense>} />
 <Route path="/YTtwentythree" element={<React.Suspense fallback="Loading...."><LazyYTtwentythree /></React.Suspense>} />
 <Route path="/YTtwentyfour" element={<React.Suspense fallback="Loading...."><LazyYTtwentyfour /></React.Suspense>} />
 <Route path="/YTtwentyfive" element={<React.Suspense fallback="Loading...."><LazyYTtwentyfive /></React.Suspense>} />
 <Route path="/YTtwentysix" element={<React.Suspense fallback="Loading...."><LazyYTtwentysix /></React.Suspense>} />
 <Route path="/YTtwentyseven" element={<React.Suspense fallback="Loading...."><LazyYTtwentyseven /></React.Suspense>} />
 <Route path="/YTtwentyeight" element={<React.Suspense fallback="Loading...."><LazyYTtwentyeight /></React.Suspense>} />
 <Route path="/YTtwentynine" element={<React.Suspense fallback="Loading...."><LazyYTtwentynine /></React.Suspense>} />
 <Route path="/YTtwentynine" element={<React.Suspense fallback="Loading...."><LazyYTtwentynine /></React.Suspense>} />
 <Route path="/YTthirty" element={<React.Suspense fallback="Loading...."><LazyYTthirty /></React.Suspense>} />
 <Route path="/YTthirtyone" element={<React.Suspense fallback="Loading...."><LazyYTthirtyone /></React.Suspense>} />
 <Route path="/YTthirtytwo" element={<React.Suspense fallback="Loading...."><LazyYTthirtytwo /></React.Suspense>} />
 <Route path="/YTthirtythree" element={<React.Suspense fallback="Loading...."><LazyYTthirtythree /></React.Suspense>} />
 <Route path="/YTthirtyfour" element={<React.Suspense fallback="Loading...."><LazyYTthirtyfour /></React.Suspense>} />
 <Route path="/YTthirtyfive" element={<React.Suspense fallback="Loading...."><LazyYTthirtyfive /></React.Suspense>} />
 <Route path="/YTthirtysix" element={<React.Suspense fallback="Loading...."><LazyYTthirtysix /></React.Suspense>} />
 <Route path="/YTthirtyseven" element={<React.Suspense fallback="Loading...."><LazyYTthirtyseven /></React.Suspense>} />
 <Route path="/YTthirtyeight" element={<React.Suspense fallback="Loading...."><LazyYTthirtyeight /></React.Suspense>} />
 <Route path="/YTthirtynine" element={<React.Suspense fallback="Loading...."><LazyYTthirtynine /></React.Suspense>} />
 <Route path="/YTforty" element={<React.Suspense fallback="Loading...."><LazyYTforty /></React.Suspense>} />
 <Route path="/YTscore" element={<React.Suspense fallback="Loading...."><LazyYTscore /></React.Suspense>} /> 
 <Route path="/YTsummary" element={<React.Suspense fallback="Loading...."><LazyYTsummary /></React.Suspense>} /> 
 <Route path="/YTconfirm" element={<React.Suspense fallback="Loading...."><LazyYTconfirm /></React.Suspense>} /> 
 <Route path="/YTtimeup" element={<React.Suspense fallback="Loading...."><LazyYTtimeup /></React.Suspense>} /> 




 <Route path="/QXone" element={<React.Suspense fallback="Loading...."><LazyQXone /></React.Suspense>} />
 <Route path="/QXtwo" element={<React.Suspense fallback="Loading...."><LazyQXtwo /></React.Suspense>} />
 <Route path="/QXthree" element={<React.Suspense fallback="Loading...."><LazyQXthree /></React.Suspense>} />
 <Route path="/QXfour" element={<React.Suspense fallback="Loading...."><LazyQXfour /></React.Suspense>} />
 <Route path="/QXfive" element={<React.Suspense fallback="Loading...."><LazyQXfive /></React.Suspense>} />
 <Route path="/QXsix" element={<React.Suspense fallback="Loading...."><LazyQXsix /></React.Suspense>} />
 <Route path="/QXseven" element={<React.Suspense fallback="Loading...."><LazyQXseven /></React.Suspense>} />
 <Route path="/QXeight" element={<React.Suspense fallback="Loading...."><LazyQXeight /></React.Suspense>} />
 <Route path="/QXnine" element={<React.Suspense fallback="Loading...."><LazyQXnine /></React.Suspense>} />
 <Route path="/QXten" element={<React.Suspense fallback="Loading...."><LazyQXten /></React.Suspense>} />
 <Route path="/QXeleven" element={<React.Suspense fallback="Loading...."><LazyQXeleven /></React.Suspense>} />
 <Route path="/QXtwelve" element={<React.Suspense fallback="Loading...."><LazyQXtwelve /></React.Suspense>} />
 <Route path="/QXthirteen" element={<React.Suspense fallback="Loading...."><LazyQXthirteen /></React.Suspense>} />
 <Route path="/QXfourteen" element={<React.Suspense fallback="Loading...."><LazyQXfourteen /></React.Suspense>} />
 <Route path="/QXfifteen" element={<React.Suspense fallback="Loading...."><LazyQXfifteen /></React.Suspense>} />
 <Route path="/QXsixteen" element={<React.Suspense fallback="Loading...."><LazyQXsixteen /></React.Suspense>} />
 <Route path="/QXseventeen" element={<React.Suspense fallback="Loading...."><LazyQXseventeen /></React.Suspense>} />
 <Route path="/QXeighteen" element={<React.Suspense fallback="Loading...."><LazyQXeighteen /></React.Suspense>} /> 
 <Route path="/QXnineteen" element={<React.Suspense fallback="Loading...."><LazyQXnineteen /></React.Suspense>} />
 <Route path="/QXtwenty" element={<React.Suspense fallback="Loading...."><LazyQXtwenty /></React.Suspense>} />
 <Route path="/QXtwentyone" element={<React.Suspense fallback="Loading...."><LazyQXtwentyone /></React.Suspense>} />
 <Route path="/QXtwentytwo" element={<React.Suspense fallback="Loading...."><LazyQXtwentytwo /></React.Suspense>} />
 <Route path="/QXtwentythree" element={<React.Suspense fallback="Loading...."><LazyQXtwentythree /></React.Suspense>} />
 <Route path="/QXtwentyfour" element={<React.Suspense fallback="Loading...."><LazyQXtwentyfour /></React.Suspense>} />
 <Route path="/QXtwentyfive" element={<React.Suspense fallback="Loading...."><LazyQXtwentyfive /></React.Suspense>} />
 <Route path="/QXtwentysix" element={<React.Suspense fallback="Loading...."><LazyQXtwentysix /></React.Suspense>} />
 <Route path="/QXtwentyseven" element={<React.Suspense fallback="Loading...."><LazyQXtwentyseven /></React.Suspense>} />
 <Route path="/QXtwentyeight" element={<React.Suspense fallback="Loading...."><LazyQXtwentyeight /></React.Suspense>} />
 <Route path="/QXtwentynine" element={<React.Suspense fallback="Loading...."><LazyQXtwentynine /></React.Suspense>} />
 <Route path="/QXtwentynine" element={<React.Suspense fallback="Loading...."><LazyQXtwentynine /></React.Suspense>} />
 <Route path="/QXthirty" element={<React.Suspense fallback="Loading...."><LazyQXthirty /></React.Suspense>} />
 <Route path="/QXthirtyone" element={<React.Suspense fallback="Loading...."><LazyQXthirtyone /></React.Suspense>} />
 <Route path="/QXthirtytwo" element={<React.Suspense fallback="Loading...."><LazyQXthirtytwo /></React.Suspense>} />
 <Route path="/QXthirtythree" element={<React.Suspense fallback="Loading...."><LazyQXthirtythree /></React.Suspense>} />
 <Route path="/QXthirtyfour" element={<React.Suspense fallback="Loading...."><LazyQXthirtyfour /></React.Suspense>} />
 <Route path="/QXthirtyfive" element={<React.Suspense fallback="Loading...."><LazyQXthirtyfive /></React.Suspense>} />
 <Route path="/QXthirtysix" element={<React.Suspense fallback="Loading...."><LazyQXthirtysix /></React.Suspense>} />
 <Route path="/QXthirtyseven" element={<React.Suspense fallback="Loading...."><LazyQXthirtyseven /></React.Suspense>} />
 <Route path="/QXthirtyeight" element={<React.Suspense fallback="Loading...."><LazyQXthirtyeight /></React.Suspense>} />
 <Route path="/QXthirtynine" element={<React.Suspense fallback="Loading...."><LazyQXthirtynine /></React.Suspense>} />
 <Route path="/QXforty" element={<React.Suspense fallback="Loading...."><LazyQXforty /></React.Suspense>} />
 <Route path="/QXscore" element={<React.Suspense fallback="Loading...."><LazyQXscore /></React.Suspense>} /> 
 <Route path="/QXsummary" element={<React.Suspense fallback="Loading...."><LazyQXsummary /></React.Suspense>} /> 
 <Route path="/QXconfirm" element={<React.Suspense fallback="Loading...."><LazyQXconfirm /></React.Suspense>} /> 
 <Route path="/QXtimeup" element={<React.Suspense fallback="Loading...."><LazyQXtimeup /></React.Suspense>} /> 




 <Route path="/QMone" element={<React.Suspense fallback="Loading...."><LazyQMone /></React.Suspense>} />
 <Route path="/QMtwo" element={<React.Suspense fallback="Loading...."><LazyQMtwo /></React.Suspense>} />
 <Route path="/QMthree" element={<React.Suspense fallback="Loading...."><LazyQMthree /></React.Suspense>} />
 <Route path="/QMfour" element={<React.Suspense fallback="Loading...."><LazyQMfour /></React.Suspense>} />
 <Route path="/QMfive" element={<React.Suspense fallback="Loading...."><LazyQMfive /></React.Suspense>} />
 <Route path="/QMsix" element={<React.Suspense fallback="Loading...."><LazyQMsix /></React.Suspense>} />
 <Route path="/QMseven" element={<React.Suspense fallback="Loading...."><LazyQMseven /></React.Suspense>} />
 <Route path="/QMeight" element={<React.Suspense fallback="Loading...."><LazyQMeight /></React.Suspense>} />
 <Route path="/QMnine" element={<React.Suspense fallback="Loading...."><LazyQMnine /></React.Suspense>} />
 <Route path="/QMten" element={<React.Suspense fallback="Loading...."><LazyQMten /></React.Suspense>} />
 <Route path="/QMeleven" element={<React.Suspense fallback="Loading...."><LazyQMeleven /></React.Suspense>} />
 <Route path="/QMtwelve" element={<React.Suspense fallback="Loading...."><LazyQMtwelve /></React.Suspense>} />
 <Route path="/QMthirteen" element={<React.Suspense fallback="Loading...."><LazyQMthirteen /></React.Suspense>} />
 <Route path="/QMfourteen" element={<React.Suspense fallback="Loading...."><LazyQMfourteen /></React.Suspense>} />
 <Route path="/QMfifteen" element={<React.Suspense fallback="Loading...."><LazyQMfifteen /></React.Suspense>} />
 <Route path="/QMsixteen" element={<React.Suspense fallback="Loading...."><LazyQMsixteen /></React.Suspense>} />
 <Route path="/QMseventeen" element={<React.Suspense fallback="Loading...."><LazyQMseventeen /></React.Suspense>} />
 <Route path="/QMeighteen" element={<React.Suspense fallback="Loading...."><LazyQMeighteen /></React.Suspense>} /> 
 <Route path="/QMnineteen" element={<React.Suspense fallback="Loading...."><LazyQMnineteen /></React.Suspense>} />
 <Route path="/QMtwenty" element={<React.Suspense fallback="Loading...."><LazyQMtwenty /></React.Suspense>} />
 <Route path="/QMtwentyone" element={<React.Suspense fallback="Loading...."><LazyQMtwentyone /></React.Suspense>} />
 <Route path="/QMtwentytwo" element={<React.Suspense fallback="Loading...."><LazyQMtwentytwo /></React.Suspense>} />
 <Route path="/QMtwentythree" element={<React.Suspense fallback="Loading...."><LazyQMtwentythree /></React.Suspense>} />
 <Route path="/QMtwentyfour" element={<React.Suspense fallback="Loading...."><LazyQMtwentyfour /></React.Suspense>} />
 <Route path="/QMtwentyfive" element={<React.Suspense fallback="Loading...."><LazyQMtwentyfive /></React.Suspense>} />
 <Route path="/QMtwentysix" element={<React.Suspense fallback="Loading...."><LazyQMtwentysix /></React.Suspense>} />
 <Route path="/QMtwentyseven" element={<React.Suspense fallback="Loading...."><LazyQMtwentyseven /></React.Suspense>} />
 <Route path="/QMtwentyeight" element={<React.Suspense fallback="Loading...."><LazyQMtwentyeight /></React.Suspense>} />
 <Route path="/QMtwentynine" element={<React.Suspense fallback="Loading...."><LazyQMtwentynine /></React.Suspense>} />
 <Route path="/QMtwentynine" element={<React.Suspense fallback="Loading...."><LazyQMtwentynine /></React.Suspense>} />
 <Route path="/QMthirty" element={<React.Suspense fallback="Loading...."><LazyQMthirty /></React.Suspense>} />
 <Route path="/QMthirtyone" element={<React.Suspense fallback="Loading...."><LazyQMthirtyone /></React.Suspense>} />
 <Route path="/QMthirtytwo" element={<React.Suspense fallback="Loading...."><LazyQMthirtytwo /></React.Suspense>} />
 <Route path="/QMthirtythree" element={<React.Suspense fallback="Loading...."><LazyQMthirtythree /></React.Suspense>} />
 <Route path="/QMthirtyfour" element={<React.Suspense fallback="Loading...."><LazyQMthirtyfour /></React.Suspense>} />
 <Route path="/QMthirtyfive" element={<React.Suspense fallback="Loading...."><LazyQMthirtyfive /></React.Suspense>} />
 <Route path="/QMthirtysix" element={<React.Suspense fallback="Loading...."><LazyQMthirtysix /></React.Suspense>} />
 <Route path="/QMthirtyseven" element={<React.Suspense fallback="Loading...."><LazyQMthirtyseven /></React.Suspense>} />
 <Route path="/QMthirtyeight" element={<React.Suspense fallback="Loading...."><LazyQMthirtyeight /></React.Suspense>} />
 <Route path="/QMthirtynine" element={<React.Suspense fallback="Loading...."><LazyQMthirtynine /></React.Suspense>} />
 <Route path="/QMforty" element={<React.Suspense fallback="Loading...."><LazyQMforty /></React.Suspense>} />
 <Route path="/QMscore" element={<React.Suspense fallback="Loading...."><LazyQMscore /></React.Suspense>} /> 
 <Route path="/QMsummary" element={<React.Suspense fallback="Loading...."><LazyQMsummary /></React.Suspense>} /> 
 <Route path="/QMconfirm" element={<React.Suspense fallback="Loading...."><LazyQMconfirm /></React.Suspense>} /> 
 <Route path="/QMtimeup" element={<React.Suspense fallback="Loading...."><LazyQMtimeup /></React.Suspense>} /> 




 <Route path="/TQone" element={<React.Suspense fallback="Loading...."><LazyTQone /></React.Suspense>} />
 <Route path="/TQtwo" element={<React.Suspense fallback="Loading...."><LazyTQtwo /></React.Suspense>} />
 <Route path="/TQthree" element={<React.Suspense fallback="Loading...."><LazyTQthree /></React.Suspense>} />
 <Route path="/TQfour" element={<React.Suspense fallback="Loading...."><LazyTQfour /></React.Suspense>} />
 <Route path="/TQfive" element={<React.Suspense fallback="Loading...."><LazyTQfive /></React.Suspense>} />
 <Route path="/TQsix" element={<React.Suspense fallback="Loading...."><LazyTQsix /></React.Suspense>} />
 <Route path="/TQseven" element={<React.Suspense fallback="Loading...."><LazyTQseven /></React.Suspense>} />
 <Route path="/TQeight" element={<React.Suspense fallback="Loading...."><LazyTQeight /></React.Suspense>} />
 <Route path="/TQnine" element={<React.Suspense fallback="Loading...."><LazyTQnine /></React.Suspense>} />
 <Route path="/TQten" element={<React.Suspense fallback="Loading...."><LazyTQten /></React.Suspense>} />
 <Route path="/TQeleven" element={<React.Suspense fallback="Loading...."><LazyTQeleven /></React.Suspense>} />
 <Route path="/TQtwelve" element={<React.Suspense fallback="Loading...."><LazyTQtwelve /></React.Suspense>} />
 <Route path="/TQthirteen" element={<React.Suspense fallback="Loading...."><LazyTQthirteen /></React.Suspense>} />
 <Route path="/TQfourteen" element={<React.Suspense fallback="Loading...."><LazyTQfourteen /></React.Suspense>} />
 <Route path="/TQfifteen" element={<React.Suspense fallback="Loading...."><LazyTQfifteen /></React.Suspense>} />
 <Route path="/TQsixteen" element={<React.Suspense fallback="Loading...."><LazyTQsixteen /></React.Suspense>} />
 <Route path="/TQseventeen" element={<React.Suspense fallback="Loading...."><LazyTQseventeen /></React.Suspense>} />
 <Route path="/TQeighteen" element={<React.Suspense fallback="Loading...."><LazyTQeighteen /></React.Suspense>} /> 
 <Route path="/TQnineteen" element={<React.Suspense fallback="Loading...."><LazyTQnineteen /></React.Suspense>} />
 <Route path="/TQtwenty" element={<React.Suspense fallback="Loading...."><LazyTQtwenty /></React.Suspense>} />
 <Route path="/TQtwentyone" element={<React.Suspense fallback="Loading...."><LazyTQtwentyone /></React.Suspense>} />
 <Route path="/TQtwentytwo" element={<React.Suspense fallback="Loading...."><LazyTQtwentytwo /></React.Suspense>} />
 <Route path="/TQtwentythree" element={<React.Suspense fallback="Loading...."><LazyTQtwentythree /></React.Suspense>} />
 <Route path="/TQtwentyfour" element={<React.Suspense fallback="Loading...."><LazyTQtwentyfour /></React.Suspense>} />
 <Route path="/TQtwentyfive" element={<React.Suspense fallback="Loading...."><LazyTQtwentyfive /></React.Suspense>} />
 <Route path="/TQtwentysix" element={<React.Suspense fallback="Loading...."><LazyTQtwentysix /></React.Suspense>} />
 <Route path="/TQtwentyseven" element={<React.Suspense fallback="Loading...."><LazyTQtwentyseven /></React.Suspense>} />
 <Route path="/TQtwentyeight" element={<React.Suspense fallback="Loading...."><LazyTQtwentyeight /></React.Suspense>} />
 <Route path="/TQtwentynine" element={<React.Suspense fallback="Loading...."><LazyTQtwentynine /></React.Suspense>} />
 <Route path="/TQtwentynine" element={<React.Suspense fallback="Loading...."><LazyTQtwentynine /></React.Suspense>} />
 <Route path="/TQthirty" element={<React.Suspense fallback="Loading...."><LazyTQthirty /></React.Suspense>} />
 <Route path="/TQthirtyone" element={<React.Suspense fallback="Loading...."><LazyTQthirtyone /></React.Suspense>} />
 <Route path="/TQthirtytwo" element={<React.Suspense fallback="Loading...."><LazyTQthirtytwo /></React.Suspense>} />
 <Route path="/TQthirtythree" element={<React.Suspense fallback="Loading...."><LazyTQthirtythree /></React.Suspense>} />
 <Route path="/TQthirtyfour" element={<React.Suspense fallback="Loading...."><LazyTQthirtyfour /></React.Suspense>} />
 <Route path="/TQthirtyfive" element={<React.Suspense fallback="Loading...."><LazyTQthirtyfive /></React.Suspense>} />
 <Route path="/TQthirtysix" element={<React.Suspense fallback="Loading...."><LazyTQthirtysix /></React.Suspense>} />
 <Route path="/TQthirtyseven" element={<React.Suspense fallback="Loading...."><LazyTQthirtyseven /></React.Suspense>} />
 <Route path="/TQthirtyeight" element={<React.Suspense fallback="Loading...."><LazyTQthirtyeight /></React.Suspense>} />
 <Route path="/TQthirtynine" element={<React.Suspense fallback="Loading...."><LazyTQthirtynine /></React.Suspense>} />
 <Route path="/TQforty" element={<React.Suspense fallback="Loading...."><LazyTQforty /></React.Suspense>} />
 <Route path="/TQscore" element={<React.Suspense fallback="Loading...."><LazyTQscore /></React.Suspense>} /> 
 <Route path="/TQsummary" element={<React.Suspense fallback="Loading...."><LazyTQsummary /></React.Suspense>} /> 
 <Route path="/TQconfirm" element={<React.Suspense fallback="Loading...."><LazyTQconfirm /></React.Suspense>} /> 
 <Route path="/TQtimeup" element={<React.Suspense fallback="Loading...."><LazyTQtimeup /></React.Suspense>} /> 






 <Route path="/ZDone" element={<React.Suspense fallback="Loading...."><LazyZDone /></React.Suspense>} />
 <Route path="/ZDtwo" element={<React.Suspense fallback="Loading...."><LazyZDtwo /></React.Suspense>} />
 <Route path="/ZDthree" element={<React.Suspense fallback="Loading...."><LazyZDthree /></React.Suspense>} />
 <Route path="/ZDfour" element={<React.Suspense fallback="Loading...."><LazyZDfour /></React.Suspense>} />
 <Route path="/ZDfive" element={<React.Suspense fallback="Loading...."><LazyZDfive /></React.Suspense>} />
 <Route path="/ZDsix" element={<React.Suspense fallback="Loading...."><LazyZDsix /></React.Suspense>} />
 <Route path="/ZDseven" element={<React.Suspense fallback="Loading...."><LazyZDseven /></React.Suspense>} />
 <Route path="/ZDeight" element={<React.Suspense fallback="Loading...."><LazyZDeight /></React.Suspense>} />
 <Route path="/ZDnine" element={<React.Suspense fallback="Loading...."><LazyZDnine /></React.Suspense>} />
 <Route path="/ZDten" element={<React.Suspense fallback="Loading...."><LazyZDten /></React.Suspense>} />
 <Route path="/ZDeleven" element={<React.Suspense fallback="Loading...."><LazyZDeleven /></React.Suspense>} />
 <Route path="/ZDtwelve" element={<React.Suspense fallback="Loading...."><LazyZDtwelve /></React.Suspense>} />
 <Route path="/ZDthirteen" element={<React.Suspense fallback="Loading...."><LazyZDthirteen /></React.Suspense>} />
 <Route path="/ZDfourteen" element={<React.Suspense fallback="Loading...."><LazyZDfourteen /></React.Suspense>} />
 <Route path="/ZDfifteen" element={<React.Suspense fallback="Loading...."><LazyZDfifteen /></React.Suspense>} />
 <Route path="/ZDsixteen" element={<React.Suspense fallback="Loading...."><LazyZDsixteen /></React.Suspense>} />
 <Route path="/ZDseventeen" element={<React.Suspense fallback="Loading...."><LazyZDseventeen /></React.Suspense>} />
 <Route path="/ZDeighteen" element={<React.Suspense fallback="Loading...."><LazyZDeighteen /></React.Suspense>} /> 
 <Route path="/ZDnineteen" element={<React.Suspense fallback="Loading...."><LazyZDnineteen /></React.Suspense>} />
 <Route path="/ZDtwenty" element={<React.Suspense fallback="Loading...."><LazyZDtwenty /></React.Suspense>} />
 <Route path="/ZDtwentyone" element={<React.Suspense fallback="Loading...."><LazyZDtwentyone /></React.Suspense>} />
 <Route path="/ZDtwentytwo" element={<React.Suspense fallback="Loading...."><LazyZDtwentytwo /></React.Suspense>} />
 <Route path="/ZDtwentythree" element={<React.Suspense fallback="Loading...."><LazyZDtwentythree /></React.Suspense>} />
 <Route path="/ZDtwentyfour" element={<React.Suspense fallback="Loading...."><LazyZDtwentyfour /></React.Suspense>} />
 <Route path="/ZDtwentyfive" element={<React.Suspense fallback="Loading...."><LazyZDtwentyfive /></React.Suspense>} />
 <Route path="/ZDtwentysix" element={<React.Suspense fallback="Loading...."><LazyZDtwentysix /></React.Suspense>} />
 <Route path="/ZDtwentyseven" element={<React.Suspense fallback="Loading...."><LazyZDtwentyseven /></React.Suspense>} />
 <Route path="/ZDtwentyeight" element={<React.Suspense fallback="Loading...."><LazyZDtwentyeight /></React.Suspense>} />
 <Route path="/ZDtwentynine" element={<React.Suspense fallback="Loading...."><LazyZDtwentynine /></React.Suspense>} />
 <Route path="/ZDtwentynine" element={<React.Suspense fallback="Loading...."><LazyZDtwentynine /></React.Suspense>} />
 <Route path="/ZDthirty" element={<React.Suspense fallback="Loading...."><LazyZDthirty /></React.Suspense>} />
 <Route path="/ZDthirtyone" element={<React.Suspense fallback="Loading...."><LazyZDthirtyone /></React.Suspense>} />
 <Route path="/ZDthirtytwo" element={<React.Suspense fallback="Loading...."><LazyZDthirtytwo /></React.Suspense>} />
 <Route path="/ZDthirtythree" element={<React.Suspense fallback="Loading...."><LazyZDthirtythree /></React.Suspense>} />
 <Route path="/ZDthirtyfour" element={<React.Suspense fallback="Loading...."><LazyZDthirtyfour /></React.Suspense>} />
 <Route path="/ZDthirtyfive" element={<React.Suspense fallback="Loading...."><LazyZDthirtyfive /></React.Suspense>} />
 <Route path="/ZDthirtysix" element={<React.Suspense fallback="Loading...."><LazyZDthirtysix /></React.Suspense>} />
 <Route path="/ZDthirtyseven" element={<React.Suspense fallback="Loading...."><LazyZDthirtyseven /></React.Suspense>} />
 <Route path="/ZDthirtyeight" element={<React.Suspense fallback="Loading...."><LazyZDthirtyeight /></React.Suspense>} />
 <Route path="/ZDthirtynine" element={<React.Suspense fallback="Loading...."><LazyZDthirtynine /></React.Suspense>} />
 <Route path="/ZDforty" element={<React.Suspense fallback="Loading...."><LazyZDforty /></React.Suspense>} />
 <Route path="/ZDscore" element={<React.Suspense fallback="Loading...."><LazyZDscore /></React.Suspense>} /> 
 <Route path="/ZDsummary" element={<React.Suspense fallback="Loading...."><LazyZDsummary /></React.Suspense>} /> 
 <Route path="/ZDconfirm" element={<React.Suspense fallback="Loading...."><LazyZDconfirm /></React.Suspense>} /> 
 <Route path="/ZDtimeup" element={<React.Suspense fallback="Loading...."><LazyZDtimeup /></React.Suspense>} /> 







 <Route path="/DYone" element={<React.Suspense fallback="Loading...."><LazyDYone /></React.Suspense>} />
 <Route path="/DYtwo" element={<React.Suspense fallback="Loading...."><LazyDYtwo /></React.Suspense>} />
 <Route path="/DYthree" element={<React.Suspense fallback="Loading...."><LazyDYthree /></React.Suspense>} />
 <Route path="/DYfour" element={<React.Suspense fallback="Loading...."><LazyDYfour /></React.Suspense>} />
 <Route path="/DYfive" element={<React.Suspense fallback="Loading...."><LazyDYfive /></React.Suspense>} />
 <Route path="/DYsix" element={<React.Suspense fallback="Loading...."><LazyDYsix /></React.Suspense>} />
 <Route path="/DYseven" element={<React.Suspense fallback="Loading...."><LazyDYseven /></React.Suspense>} />
 <Route path="/DYeight" element={<React.Suspense fallback="Loading...."><LazyDYeight /></React.Suspense>} />
 <Route path="/DYnine" element={<React.Suspense fallback="Loading...."><LazyDYnine /></React.Suspense>} />
 <Route path="/DYten" element={<React.Suspense fallback="Loading...."><LazyDYten /></React.Suspense>} />
 <Route path="/DYeleven" element={<React.Suspense fallback="Loading...."><LazyDYeleven /></React.Suspense>} />
 <Route path="/DYtwelve" element={<React.Suspense fallback="Loading...."><LazyDYtwelve /></React.Suspense>} />
 <Route path="/DYthirteen" element={<React.Suspense fallback="Loading...."><LazyDYthirteen /></React.Suspense>} />
 <Route path="/DYfourteen" element={<React.Suspense fallback="Loading...."><LazyDYfourteen /></React.Suspense>} />
 <Route path="/DYfifteen" element={<React.Suspense fallback="Loading...."><LazyDYfifteen /></React.Suspense>} />
 <Route path="/DYsixteen" element={<React.Suspense fallback="Loading...."><LazyDYsixteen /></React.Suspense>} />
 <Route path="/DYseventeen" element={<React.Suspense fallback="Loading...."><LazyDYseventeen /></React.Suspense>} />
 <Route path="/DYeighteen" element={<React.Suspense fallback="Loading...."><LazyDYeighteen /></React.Suspense>} /> 
 <Route path="/DYnineteen" element={<React.Suspense fallback="Loading...."><LazyDYnineteen /></React.Suspense>} />
 <Route path="/DYtwenty" element={<React.Suspense fallback="Loading...."><LazyDYtwenty /></React.Suspense>} />
 <Route path="/DYtwentyOne" element={<React.Suspense fallback="Loading...."><LazyDYtwentyOne /></React.Suspense>} />
 <Route path="/DYtwentyTwo" element={<React.Suspense fallback="Loading...."><LazyDYtwentyTwo /></React.Suspense>} />
 <Route path="/DYtwentyThree" element={<React.Suspense fallback="Loading...."><LazyDYtwentyThree /></React.Suspense>} />
 <Route path="/DYtwentyFour" element={<React.Suspense fallback="Loading...."><LazyDYtwentyFour /></React.Suspense>} />
 <Route path="/DYtwentyFive" element={<React.Suspense fallback="Loading...."><LazyDYtwentyFive /></React.Suspense>} />
 <Route path="/DYtwentySix" element={<React.Suspense fallback="Loading...."><LazyDYtwentySix /></React.Suspense>} />
 <Route path="/DYtwentySeven" element={<React.Suspense fallback="Loading...."><LazyDYtwentySeven /></React.Suspense>} />
 <Route path="/DYtwentyEight" element={<React.Suspense fallback="Loading...."><LazyDYtwentyEight /></React.Suspense>} />
 <Route path="/DYtwentyNine" element={<React.Suspense fallback="Loading...."><LazyDYtwentyNine /></React.Suspense>} />
 {/* <Route path="/DYtwentynine" element={<React.Suspense fallback="Loading...."><LazyDYtwentynine /></React.Suspense>} /> */}
 <Route path="/DYthirty" element={<React.Suspense fallback="Loading...."><LazyDYthirty /></React.Suspense>} />
 <Route path="/DYthirtyOne" element={<React.Suspense fallback="Loading...."><LazyDYthirtyOne /></React.Suspense>} />
 <Route path="/DYthirtyTwo" element={<React.Suspense fallback="Loading...."><LazyDYthirtyTwo /></React.Suspense>} />
 <Route path="/DYthirtyThree" element={<React.Suspense fallback="Loading...."><LazyDYthirtyThree /></React.Suspense>} />
 <Route path="/DYthirtyFour" element={<React.Suspense fallback="Loading...."><LazyDYthirtyFour /></React.Suspense>} />
 <Route path="/DYthirtyFive" element={<React.Suspense fallback="Loading...."><LazyDYthirtyFive /></React.Suspense>} />
 <Route path="/DYthirtySix" element={<React.Suspense fallback="Loading...."><LazyDYthirtySix /></React.Suspense>} />
 <Route path="/DYthirtySeven" element={<React.Suspense fallback="Loading...."><LazyDYthirtySeven /></React.Suspense>} />
 <Route path="/DYthirtyEight" element={<React.Suspense fallback="Loading...."><LazyDYthirtyEight /></React.Suspense>} />
 <Route path="/DYthirtyNine" element={<React.Suspense fallback="Loading...."><LazyDYthirtyNine /></React.Suspense>} />
 <Route path="/DYforty" element={<React.Suspense fallback="Loading...."><LazyDYforty /></React.Suspense>} />
 <Route path="/DYscore" element={<React.Suspense fallback="Loading...."><LazyDYscore /></React.Suspense>} />
 <Route path="/DYsummary" element={<React.Suspense fallback="Loading...."><LazyDYsummary /></React.Suspense>} />
 <Route path="/DYconfirm" element={<React.Suspense fallback="Loading...."><LazyDYconfirm /></React.Suspense>} />
 <Route path="/DYtimeup" element={<React.Suspense fallback="Loading...."><LazyDYtimeup /></React.Suspense>} />

</Routes>
</>
      
    
  );
}

export default App;
