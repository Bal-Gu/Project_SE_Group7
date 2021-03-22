
import {Quiz} from "./Events/quiz";
import {Auction} from "./Events/Auction";

async function launch() {
    let aution:Auction = new Auction();
    aution.AuctionEvent();
}

launch();