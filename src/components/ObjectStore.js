import { writable } from "svelte/store";
export const data = writable({
    person: { name: "choi", age: 20, address: ["Jiangmen", "Tangxia"] },
    id: 10,
});