import req from './axios'

export const orderConfirmApi = () =>{
    return req('get', 'https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f')
}