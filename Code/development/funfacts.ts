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
        $("#buildingFunFactDescription").html("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolorem dolore quia architecto laboriosam nobis adipisci placeat minima ipsa sequi, id accusamus ipsum ab unde dolores tenetur sapiente nisi eligendi?")
        $("#funfactModal").show();
    });
}