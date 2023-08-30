import { ref } from "vue";

export default function usePetFetch(type, initalUrl="https://media.giphy.com/media/ule4vhcY1xEKQ/giphy.gif") {

    let gifUrl = ref(initalUrl);
    let gifId = ref("");
    let isLoading = ref(false);

    const KEYWORD = type;
    const KEY = 'AIzaSyDmlogjiM5eaq9vRM0hPZZLlrV7IGJour0';
    const LIMIT = '1';

    async function refresh() {

        isLoading.value = true;
        const url = `https://tenor.googleapis.com/v2/search?q=${KEYWORD}&key=${KEY}&limit=${LIMIT}&random=true`;
        const response = await(await fetch(url)).json();

        let data = response.results;
        isLoading.value = false;

        if (data && data[0]) {
            gifUrl.value = data[0].media_formats.gif.url || "";
            gifId.value = data[0].media_formats.gif.url.split('/')[3];
        }
    }

    return { gifUrl, gifId, isLoading, refresh }
}
