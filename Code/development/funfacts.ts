import $ from "jquery";

export function funFactButtons(){
    $(".buildingFunFact").click(function () {
        // @ts-ignore
        const buildingTitle = this.lastElementChild.firstChild.nextSibling.innerHTML;
        // @ts-ignore
        const buildingCredits = this.lastElementChild.lastElementChild.innerHTML;
        // @ts-ignore
        const imageName = this.lastElementChild.id;
        $("#buildingFunFactTitle").html(buildingTitle + " ("+buildingCredits+")");
        $("#imageBuilding").html("<img src='./graphic/images/large/"+imageName+".jpg' style='width: 100%;'>");
        // TODO: the building discription needs to me added
        $("#funfactModal").show();
    });
}