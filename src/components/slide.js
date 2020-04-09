import React from 'react'

export default (props, index) => (
    <div className="slide fp-slide fp-table active" style={{backgroundImage: 'url('+ props.background +')'}}>
        <div className="section-center">
            <div className="container-fluid">
                <div className="row flex middle sm-wrap sm-column-reverse">
                    <div className="col-md-offset-1 col-md-2">
                        <h2 className="line">{ props.title }</h2>
                        <ul>
                            {
                                props.features.map((item, index) => (
                                    <li key={ index }>{ item }</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-6 align-center">
                        <img src={ props.thumb } alt={ props.title } />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
