export default function(current, all){
    const i = all.findIndex(({route}) => route === current);
    const len = all.length;
    return {
        prev: i - 1 < 0 ? all[len -1]['route'] : all[i -1]['route'],
        next: i + 1 === len ? all[0]['route'] : all[i + 1]['route'],
        order: i
    }
}