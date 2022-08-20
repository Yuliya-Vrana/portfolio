const getData = async () => {
    const response = await fetch('./heroes/dbHeroes.json')
    return await response.json()
}

getData()
    .then(data => {
        const listHeroes = document.querySelector('.heroes-list')        
            
        data.forEach(item => {
            const li = document.createElement('li')
            li.innerHTML = '<a href="#">' + item.name + '</a>'
            listHeroes.append(li)
        })

        const showResalt = (indexItem) => {

            data.forEach((item, i) => {
                     
                if(indexItem === i){
                    for (let key in item){
                        const textList = document.querySelector('.text-list')  
                        const li = document.createElement('li')
                        li.classList.add('text-item')
                        if (key != 'photo'){
                            li.textContent = `${key} : ${item[key]}` 
                            textList.append(li)
                        }    
                    }

                    photo.innerHTML =  '<img src="heroes/' + item.photo + '">'
                }      
            })     
        }

        const getHero = () => {
            const list = document.querySelectorAll('.heroes-list > li > a')

            list.forEach((item, i) =>  item.addEventListener('click', (e) => {
                const li = document.querySelectorAll('.text-item') 

                li.forEach(item => {
                    if(item) {
                        item.remove()
                    }
                })
                
                showResalt(i)
            })
        )}
            
        getHero()          
    })
    .catch(error => console.log(error))

