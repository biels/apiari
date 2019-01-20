import _ from 'lodash';
import moment from 'moment';

export const guessTitle = (item) => {
    if(item == null) return '[null item]'
    if(item.name && item.surname){
        return `${item.name} ${item.surname}`
    }
    // console.log('guessing', item);
    const titleKeys = ['centerName', 'companyName', 'name', 'title', 'surname', 'nif_cif', 'uuid', 'value', 'id']
    let possibleTitles = titleKeys.map(tk => item[tk])
        .filter(v => v != null);
    let possibleTitle = _.find(possibleTitles, title => title != null)
    if(possibleTitle) return possibleTitle
    if(_.keys(item).length > 0){
        return item[_.keys(item)[0]]
    }else{
        return '{}'
    }
}
export const clientDisplayName = (item) => {
    if(item == null) return '[null item]'
    if(!_.isEmpty(_.trim(item.companyName))){
        return `${item.companyName}`
    }
    if(item.name && item.surname){
        return `${item.name} ${item.surname}`
    }else{
        if(item.surname){
            return `${item.surname}`
        }
        if(item.name){
            return `${item.name}`
        }
    }
    return '(Sense nom)'
}
export const momentParse = (value) => moment(value, 'DD/MM/YYYY');
