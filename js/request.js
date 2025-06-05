export async function request (url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Não possível carregar seus dados.")
        }

        return await response.json();
    } catch (error){
        console.error(error);
        return;
    }
}