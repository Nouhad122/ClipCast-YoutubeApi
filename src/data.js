export const API_Key = 'AIzaSyCGXs-7Dac5f3yYTNdihA2M8-lKp1pfA2s';
export const values_converter = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000) + 'M';
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + 'K';
    }
    else{
        return value;
    }
}