import axios from 'axios'
export const allNotes = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const {data} = res
            return data
         })
}

export const createNote = ({title, body, useId}) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', {title, body, useId} )    
        .then(response => {
            const {data} = response
            return data
            

        })
       
}