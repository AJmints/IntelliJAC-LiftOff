import axios from "axios";
const API_URL = "http://localhost:8080/";

class FlashcardService {
    saveFlashcard(flascard) {
        return axios.post(API_URL + "flashcards/addFlashcard");
    }
}

export default new FlashcardService;