function SliderWidget( selector, type, time, showPosProperty ){
    let msjError = {
        selector: "SliderWidget(): error en el selector - 'no es un string'",
        parametro2: "SliderWidget(): error en el parametro(2) - no es un tipo perminito, definalo en 'opacity', 'block' o 'flex' "
    };
    const [ Box , Items ] = [
        ( typeof selector !== "undefined" && typeof selector === "string" )? document.querySelector(selector): console.log(msjError['selector']),
        document.querySelectorAll(selector + " > " + selector+'_item')
    ];

    let [ Count, MCount ] = [ 0, Items.length ];

    function NoShowAll(){
        if( type === "opacity" )
            for ( let item of Items )
                item.setAttribute( "style", "position:absolute;opacity: 0;" );
        else if( type !== "opacity" )
            for ( let item of Items )
                item.style.display = "none";
        else if( type !== "block" | "flex" )
            console.log(msjError["parametro2"]);
    }
    function ShowInPos(){
        if( type !== "opacity" )
            Items[Count].style.display = type;
        else if ( type === "opacity" )
            Items[Count].setAttribute( "style", "position:absolute;opacity: 1;" );
    }
    function CountIncrement(){
        if ( Count < MCount )
            Count++;
        if ( Count === MCount )
            Count = 0;
    }

    NoShowAll();
    ShowInPos();

    setInterval(function (){
        CountIncrement();
        NoShowAll();
        ShowInPos();
    },time);
}
export { SliderWidget };