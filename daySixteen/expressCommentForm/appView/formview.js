const form = (model) =>  {
    return `<html>
            <form action="" method="POST">
            
                <label>Email: </label> 
                <input name="emailfield" type="text" > <br>

                <label>Comment: </label> 
                <input name="commentfield" type="text" > <br>          

                <input type="submit" value="Submit">
            </form>
        </html>
    `
}

/*
const resultTable = (model) => {
    const html = `
        <html>
        <div style='display:flex; justify-content:center;align-items:vertical-align;>
    `

    return model.map ( (item) => {
        html += `
            <span>${item.email}</span>
            <span>${item.comment}</span>
        `
        return true
    })

    html += `
        </div>
        </html>
    `
}
*/

module.exports = {
    form//, resultTable
}
