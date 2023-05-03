import PocketBase from 'PocketBase'


export const pb_url = import.meta.env.RAKKAS_UTILS_PROD_URL


export const pb = new PocketBase(pb_url);



export async function getUser() {
    return pb.authStore.model 
}

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
    try {
        return await pb.collection('staff').authWithPassword(email, password);
    } catch (error) {
        throw error;
    }

}

export async function getAllRecords(table: "bills" | "tenants" | "shops") {
    try {
        const records = await pb.collection(table).getFullList({

        })
        return records
    } catch (error) {
        throw error
    }
}
