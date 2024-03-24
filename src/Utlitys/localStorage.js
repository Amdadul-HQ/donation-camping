const getStoreItems = () => {
    const localStorageSaveItems = localStorage.getItem('Id')
    if(localStorageSaveItems){
        return JSON.parse(localStorageSaveItems);
    }
    return []
}

const saveToLocalStorage = (id) => {
    const savedId = getStoreItems();
    const exiest = savedId.find(itemId => itemId == id);
    if(!exiest){
        savedId.push(id)
        localStorage.setItem('Id',JSON.stringify(savedId))
    }
}

export { saveToLocalStorage, getStoreItems }