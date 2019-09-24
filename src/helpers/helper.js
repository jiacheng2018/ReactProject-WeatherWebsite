export default function debounce(a,b,c){
    var d,e;
    return function(){
        function h(){
            d=null;
            c||(e.apply(f,g))
        }
        var f=this, g=arguments;
        return(clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e.apply(f,g)),e)
    }
}
export function removeHTMLTags(str){
    return str.replace(/<[^>]*>?/gm,'');
}