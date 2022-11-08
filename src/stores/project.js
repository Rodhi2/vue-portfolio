import { defineStore } from "pinia"
import { ref } from "vue"

export const useProjectStore = defineStore('project', () => {
    const projects = ref([
        {
            slug: 'project-1',
            title: 'Hobby 1'
        },
        {
            slug: 'project-2',
            title: 'Hobby 2'
        },
        {
            slug: 'project-3',
            title: 'Hobby 2'
        }
    ]);

    return { projects };
})