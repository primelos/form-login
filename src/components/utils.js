export async function login({ username, password }){
    await new Promise((resolve, reject) => 
        setTimeout(() => {
            if(username === 'carlos' && password === 'falcon')
            resolve()
            else reject('you made a mistake')
        }, 1000)
    )
}