export const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () => {
            const base64Data = reader.result
            resolve(base64Data)
        }

        reader.onerror = (error) => {
            reject(error)
        }
    })
}