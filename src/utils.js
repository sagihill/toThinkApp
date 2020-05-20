export const addItemToList = (thinkList, count, text) => {
    return [...thinkList, {id: count, value: text}];
  };
  
  
export const removeItemFromList = (thinkList, id) => {
    return thinkList.filter(item => item.id !== id);
};