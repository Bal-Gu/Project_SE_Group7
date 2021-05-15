import $ from "jquery";
import buildingDescriptionENG from "./BuildingDescription.json";
import buildingDescriptionPR from "./BuildingDescriptionPR.json";
import buildingDescriptionFR from "./BuildingDescriptionFR.json";
import buildingDescriptionDE from "./BuildingDescriptionDE.json";
import buildingDescriptionLUX from "./BuildingDescriptionLUX.json";

export function funFactButtons(){
    $(".buildingFunFact").click(function () {
        // @ts-ignore
        const buildingTitle = this.lastElementChild.firstChild.nextSibling.innerHTML;
        // @ts-ignore
        const buildingCredits = this.lastElementChild.lastElementChild.innerHTML;
        // @ts-ignore
        const buildingId = this.lastElementChild.id;
        $("#buildingFunFactTitle").html(buildingTitle + " ("+buildingCredits+")");
        $("#imageBuilding").html("<img src='./graphic/images/large/"+buildingId+".jpg' style='width: 100%;'>");
        // TODO: add different languages support
        let buildingDescription = buildingDescriptionENG[buildingId];
        $("#buildingFunFactDescription").html(buildingDescription);

        $("#funfactModal").show();
    });
}