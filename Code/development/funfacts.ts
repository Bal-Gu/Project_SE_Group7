import $ from "jquery";
import buildingDescriptionENG from "../BuildingDescription.json";
import buildingDescriptionPR from "../BuildingDescriptionPR.json";
import buildingDescriptionFR from "../BuildingDescriptionFR.json";
import buildingDescriptionDE from "../BuildingDescriptionDE.json";
import buildingDescriptionLUX from "../BuildingDescriptionLUX.json";

export function funFactButtons(p:String){
    $(".buildingFunFact").click(function () {
        // @ts-ignore
        const buildingTitle = this.lastElementChild.firstChild.nextSibling.innerHTML;
        // @ts-ignore
        const buildingCredits = this.lastElementChild.lastElementChild.innerHTML;
        // @ts-ignore
        const buildingId = this.lastElementChild.id;
        $("#buildingFunFactTitle").html(buildingTitle + " ("+buildingCredits+")");
        $("#imageBuilding").html("<img src='./graphic/images/large/"+buildingId+".jpg' style='width: 100%;'>");
        let buildingDescription: any;
        if(p != undefined) {
            switch (p) {
                case "FR":
                    buildingDescription = buildingDescriptionFR[buildingId];
                    break;
                case "PR":
                    buildingDescription = buildingDescriptionPR[buildingId];
                    break;
                case "DE":
                    buildingDescription = buildingDescriptionDE[buildingId];
                    break;
                case "ENG":
                    buildingDescription = buildingDescriptionENG[buildingId];
                    break;
                case "LUX":
                    buildingDescription = buildingDescriptionLUX[buildingId];
                    break;
                default:
                    buildingDescription = buildingDescriptionENG[buildingId];
                    break;
            }
        }
        else{
            buildingDescription = buildingDescriptionENG[buildingId];
        }
        $("#buildingFunFactDescription").html("<h2>"+buildingDescription+"</h2>");

        $("#funfactModal").show();
    });
}