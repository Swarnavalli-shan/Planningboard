
import moment from 'moment';

export const transformGroup = (line) => {
    return line.map(lineItem => { return { id: lineItem, title: lineItem } })
}



export const transformItem = (items) => {
    return items.map(item => {
        return {
            id: item['UNIQNO'],
            group: item['IONO'],
            title: item['SDESC'],
            start_time : moment('2021/06/01').add(0, 'day').hours(0).minutes(0).seconds(0),
            end_time: moment('2021/06/01').add(String(item['NOOFDAYSREQ']).split('.')[0], 'day').hours(getDecimalEquivalentHrs(String(item['NOOFDAYSREQ']).split('.')[1])).minutes(0).seconds(0)
        }
    })
}


const getDecimalEquivalentHrs = (decimal) => {
    return parseFloat("."+decimal)*8*3;
}

