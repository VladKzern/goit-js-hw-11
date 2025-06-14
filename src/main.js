import getImagesByQuery from "./js/pixabay-api";
import createGallery, { clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const q = event.target.elements['search-text'].value.trim();

    if (q === "") {
        iziToast.warning({
            message: "Please enter a search term.",
            closeOnClick: true,
            position: "topRight",
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(q)
        .then(response => {
            if (!response.hits.length) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    closeOnClick: true,
                    position: "topRight",
                });
                return;
            }
            createGallery(response.hits);
        })
        .catch(error => iziToast.error({
            message: `${error}`,
            closeOnClick: true,
            position: "topRight",
        }))
        .finally(() => hideLoader());
});

