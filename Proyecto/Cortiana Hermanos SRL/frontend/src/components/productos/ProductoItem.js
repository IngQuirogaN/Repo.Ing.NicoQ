import React from 'react';

const ProductoItem = (props)=>{
    const {tipo, clase ,cuerpo, imagen} = props;

    return(
        <div className="productos_list">
            <div>
            <img src={imagen} height={400} width={700}/>
            <div>
                <h1>{tipo}</h1>
            </div>
            <div>
            <h2>{clase}</h2>
            </div>
            
            <div dangerouslySetInnerHTML={{__html:cuerpo}}/>
            
            <hr />
            </div>
        </div>
    );
}
export default ProductoItem;